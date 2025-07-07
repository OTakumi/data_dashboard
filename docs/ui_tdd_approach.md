# UI開発におけるTDDアプローチ

## 概要
このドキュメントでは、React + TypeScriptプロジェクトにおけるUI開発のTest-Driven Development (TDD)アプローチについて説明します。

## UIのTDDとは

### 従来のTDDとの違い
- **従来のTDD**: ビジネスロジックやデータ処理のテストが中心
- **UIのTDD**: 視覚的な要素、ユーザーインタラクション、状態変化の表現をテスト

### UIテストで検証すること
1. **表示の正確性**: 正しいデータが正しい形式で表示されているか
2. **インタラクション**: ユーザーの操作に対して期待通りの反応をするか
3. **状態管理**: アプリケーションの状態変化がUIに正しく反映されるか
4. **アクセシビリティ**: スクリーンリーダーやキーボード操作に対応しているか

## テストのレベルと戦略

### 1. コンポーネント単体テスト
最も基本的なレベル。個々のコンポーネントが独立して正しく動作することを確認。

```typescript
// 例: StatCard.test.tsx
describe('StatCard', () => {
  it('should display title and formatted value', () => {
    render(<StatCard title="本日の売上" value={123456} />);
    
    expect(screen.getByText('本日の売上')).toBeInTheDocument();
    expect(screen.getByText('¥123,456')).toBeInTheDocument();
  });
});
```

### 2. 統合テスト
複数のコンポーネントやモジュールが連携して動作することを確認。

```typescript
// 例: Dashboard統合テスト
describe('Dashboard Integration', () => {
  it('should update all charts when date range changes', async () => {
    render(<DashboardPage />);
    
    // 日付範囲を変更
    fireEvent.click(screen.getByText('過去30日'));
    
    // すべてのチャートが更新されることを確認
    await waitFor(() => {
      expect(screen.getByTestId('sales-trend-chart')).toHaveAttribute('data-range', '30days');
      expect(screen.getByTestId('category-pie-chart')).toHaveAttribute('data-range', '30days');
    });
  });
});
```

### 3. ユーザーストーリーテスト
実際のユーザーシナリオに基づいたE2Eテスト。

```typescript
// 例: ユーザーストーリーテスト
describe('売上分析フロー', () => {
  it('管理者が特定期間の売上傾向を分析できる', async () => {
    // Given: ダッシュボードページを開く
    render(<App />);
    
    // When: 先月のデータを選択
    fireEvent.click(screen.getByText('期間選択'));
    fireEvent.click(screen.getByText('先月'));
    
    // Then: 先月の売上データが表示される
    expect(await screen.findByText(/2024年1月の売上/)).toBeInTheDocument();
    expect(screen.getByTestId('monthly-total')).toHaveTextContent('¥2,345,678');
  });
});
```

## TDDサイクルの実践

### RED → GREEN → REFACTOR

#### 1. RED Phase（失敗するテストを書く）
```typescript
// SalesTrendChart.test.tsx
test('売上推移グラフが表示される', () => {
  const mockData = [
    { date: '2024-01-01', amount: 100000 },
    { date: '2024-01-02', amount: 150000 }
  ];
  
  render(<SalesTrendChart data={mockData} />);
  
  // この時点ではコンポーネントが存在しないため失敗
  expect(screen.getByTestId('sales-trend-chart')).toBeInTheDocument();
});
```

#### 2. GREEN Phase（テストを通す最小限の実装）
```typescript
// SalesTrendChart.tsx
export const SalesTrendChart = ({ data }) => {
  return <div data-testid="sales-trend-chart">Chart</div>;
};
```

#### 3. REFACTOR Phase（品質を改善）
```typescript
// SalesTrendChart.tsx（改善版）
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export const SalesTrendChart = ({ data }) => {
  const formattedData = data.map(item => ({
    ...item,
    displayDate: new Date(item.date).toLocaleDateString('ja-JP')
  }));

  return (
    <div data-testid="sales-trend-chart" className="w-full h-64">
      <LineChart width={600} height={300} data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="displayDate" />
        <YAxis />
        <Tooltip formatter={(value) => `¥${value.toLocaleString()}`} />
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};
```

## ベストプラクティス

### 1. テストの書き方

#### Given-When-Then パターン
```typescript
test('日付範囲の変更で売上データが更新される', async () => {
  // Given: 初期状態のダッシュボード
  const { rerender } = render(<Dashboard dateRange="week" />);
  
  // When: 日付範囲を月間に変更
  rerender(<Dashboard dateRange="month" />);
  
  // Then: 月間データが表示される
  await waitFor(() => {
    expect(screen.getByText('月間売上')).toBeInTheDocument();
  });
});
```

#### ユーザー視点のクエリ
```typescript
// ❌ 実装詳細に依存
const button = container.querySelector('.submit-button');

// ✅ ユーザー視点
const button = screen.getByRole('button', { name: '送信' });
```

### 2. モックの活用

#### APIモック
```typescript
// MSW (Mock Service Worker) を使用
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/api/sales', (req, res, ctx) => {
    return res(ctx.json({ sales: mockSalesData }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```

#### 日付のモック
```typescript
beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2024-01-15'));
});

afterEach(() => {
  jest.useRealTimers();
});
```

### 3. テストの保守性

#### データテストIDの規約
```typescript
// コンポーネント内
<div data-testid="stat-card-revenue">
  <h3>{title}</h3>
  <p data-testid="stat-value">{value}</p>
</div>

// テスト内
const revenueCard = screen.getByTestId('stat-card-revenue');
const value = within(revenueCard).getByTestId('stat-value');
```

#### カスタムレンダー関数
```typescript
// test-utils.tsx
export function renderWithProviders(ui: React.ReactElement) {
  return render(
    <QueryClient>
      <ZustandProvider>
        {ui}
      </ZustandProvider>
    </QueryClient>
  );
}
```

## 実装の順序

### Step 1: 型定義とモックデータ
1. TypeScriptの型定義を作成
2. 型に基づいたモックデータを生成
3. データ操作のユーティリティ関数をテスト駆動で実装

### Step 2: 単純なコンポーネントから開始
1. StatCard（最も単純）
2. RecentOrdersTable（データ表示のみ）
3. グラフコンポーネント（外部ライブラリ使用）

### Step 3: インタラクティブ要素
1. DateRangePicker
2. フィルター機能
3. ソート機能

### Step 4: 状態管理の統合
1. Zustandストアのテスト
2. コンポーネントとストアの連携テスト
3. 非同期処理のテスト

## テストカバレッジの目標

### 最低限のカバレッジ
- 全体: 70%以上
- ビジネスロジック: 90%以上
- UIコンポーネント: 80%以上

### 重点的にテストすべき箇所
1. **金額計算**: 100%カバレッジ必須
2. **日付処理**: タイムゾーンを考慮したテスト
3. **エラーハンドリング**: すべてのエラーケースをカバー
4. **アクセシビリティ**: キーボード操作とスクリーンリーダー対応

## 継続的改善

### メトリクスの監視
- テスト実行時間（3秒以内を目標）
- テストの脆弱性（頻繁に失敗するテストの改善）
- カバレッジの推移

### 定期的なレビュー
- 月次でテスト戦略の見直し
- 新しいテストパターンの共有
- テストコードのリファクタリング

## 参考資料
- [Testing Library ベストプラクティス](https://testing-library.com/docs/guiding-principles)
- [React Testing Patterns](https://github.com/kentcdodds/react-testing-library)
- [MSW Documentation](https://mswjs.io/)
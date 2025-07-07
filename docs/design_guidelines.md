# データダッシュボード デザイン規約

## 概要
カフェ用品ECサイトの売上ダッシュボードにおけるデザイン規約。
効率的な意思決定を支援する、直感的で美しいインターフェースの構築を目的とする。

## 1. デザイン原則

### 1.1 データファースト
- **即座に理解できるKPI表示**: 重要な指標を画面上部に配置
- **階層的な情報設計**: 概要 → 詳細の順序で情報を構成
- **アクショナブルなデータ**: 見るだけでなく、次のアクションを促すデザイン

### 1.2 ユーザビリティ優先
- **シングルスクリーンでの完結**: 主要情報は1画面で把握可能
- **認知負荷の軽減**: 不要な装飾を排除し、データに集中
- **一貫性のある操作体験**: 全体を通じて統一されたパターン

### 1.3 レスポンシブデザイン
- **モバイルファースト**: 小画面でも情報が適切に表示
- **タッチフレンドリー**: タップ・スワイプ操作に最適化
- **デバイス横断の体験**: どのデバイスでも同等の価値提供

## 2. カラーパレット

### 2.1 プライマリカラー
```css
/* メインブランドカラー */
--primary: #1f2937;     /* ダークグレー - ヘッダー、重要な要素 */
--primary-light: #374151;
--primary-dark: #111827;

/* アクセントカラー */
--accent: #3b82f6;      /* ブルー - リンク、ボタン */
--accent-light: #60a5fa;
--accent-dark: #2563eb;
```

### 2.2 セマンティックカラー
```css
/* 状態表示 */
--success: #10b981;     /* 緑 - 成功、増加トレンド */
--warning: #f59e0b;     /* オレンジ - 注意、変化なし */
--error: #ef4444;       /* 赤 - エラー、減少トレンド */
--info: #3b82f6;        /* ブルー - 情報、中性的な状態 */

/* 背景・境界線 */
--background: #f9fafb;  /* ライトグレー - 背景 */
--surface: #ffffff;     /* 白 - カード背景 */
--border: #e5e7eb;      /* グレー - 境界線 */
--text-primary: #111827; /* ダークグレー - メインテキスト */
--text-secondary: #6b7280; /* ミドルグレー - サブテキスト */
```

### 2.3 データ可視化カラー
```css
/* グラフ・チャート用カラーパレット */
--chart-1: #3b82f6;     /* ブルー */
--chart-2: #10b981;     /* グリーン */
--chart-3: #f59e0b;     /* オレンジ */
--chart-4: #ef4444;     /* レッド */
--chart-5: #8b5cf6;     /* パープル */
--chart-6: #06b6d4;     /* シアン */
```

## 3. タイポグラフィ

### 3.1 フォントファミリー
```css
/* プライマリフォント */
--font-primary: 'Inter', 'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif;

/* 数値表示用フォント */
--font-numeric: 'JetBrains Mono', 'SF Mono', Consolas, monospace;
```

### 3.2 フォントサイズスケール
```css
--text-xs: 0.75rem;     /* 12px - キャプション */
--text-sm: 0.875rem;    /* 14px - サブテキスト */
--text-base: 1rem;      /* 16px - 本文 */
--text-lg: 1.125rem;    /* 18px - 小見出し */
--text-xl: 1.25rem;     /* 20px - 見出し */
--text-2xl: 1.5rem;     /* 24px - 大見出し */
--text-3xl: 1.875rem;   /* 30px - KPI数値 */
--text-4xl: 2.25rem;    /* 36px - メイン数値 */
```

### 3.3 フォントウェイト
```css
--font-normal: 400;     /* 本文 */
--font-medium: 500;     /* 強調テキスト */
--font-semibold: 600;   /* 見出し */
--font-bold: 700;       /* 重要な数値 */
```

## 4. レイアウト設計

### 4.1 グリッドシステム
```css
/* 12カラムグリッド */
--container-max-width: 1440px;
--grid-columns: 12;
--grid-gap: 1.5rem;     /* 24px */
--grid-gap-sm: 1rem;    /* 16px - モバイル */
```

### 4.2 スペーシング
```css
/* 8pxベースのスペーシング */
--space-1: 0.25rem;     /* 4px */
--space-2: 0.5rem;      /* 8px */
--space-3: 0.75rem;     /* 12px */
--space-4: 1rem;        /* 16px */
--space-6: 1.5rem;      /* 24px */
--space-8: 2rem;        /* 32px */
--space-12: 3rem;       /* 48px */
--space-16: 4rem;       /* 64px */
```

### 4.3 レイアウト構成
```
┌─────────────────────────────────────────┐
│ Header (Logo, User, Nav)                │
├─────────────────────────────────────────┤
│ KPI Cards Row (4カラム)                  │
├─────────────────────────────────────────┤
│ Main Charts Section                     │
│ ├─ Sales Trend (8カラム)                │
│ └─ Category Breakdown (4カラム)         │
├─────────────────────────────────────────┤
│ Secondary Data Section                  │
│ ├─ Recent Orders (6カラム)              │
│ └─ Top Products (6カラム)               │
└─────────────────────────────────────────┘
```

## 5. コンポーネント設計

### 5.1 カードコンポーネント
```css
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 0.75rem;     /* 12px */
  padding: var(--space-6);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.card-header {
  margin-bottom: var(--space-4);
  border-bottom: 1px solid var(--border);
  padding-bottom: var(--space-3);
}
```

### 5.2 KPIカード
```css
.kpi-card {
  text-align: center;
  padding: var(--space-6);
}

.kpi-value {
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  font-family: var(--font-numeric);
  color: var(--text-primary);
}

.kpi-label {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  margin-bottom: var(--space-2);
}

.kpi-trend {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-1);
}
```

### 5.3 データテーブル
```css
.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th {
  background: var(--background);
  font-weight: var(--font-semibold);
  padding: var(--space-3) var(--space-4);
  text-align: left;
  border-bottom: 2px solid var(--border);
}

.data-table td {
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--border);
}
```

## 6. インタラクション設計

### 6.1 ホバー効果
```css
.interactive {
  transition: all 0.2s ease-in-out;
}

.interactive:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

### 6.2 フォーカス状態
```css
.focusable:focus {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

### 6.3 ローディング状態
```css
.loading {
  opacity: 0.6;
  pointer-events: none;
}

.skeleton {
  background: linear-gradient(
    90deg,
    var(--background) 25%,
    var(--border) 50%,
    var(--background) 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}
```

## 7. レスポンシブブレイクポイント

```css
/* モバイル */
@media (max-width: 640px) {
  --grid-gap: var(--space-4);
  /* KPIカードを2x2に配置 */
  /* チャートを縦積み */
}

/* タブレット */
@media (min-width: 641px) and (max-width: 1024px) {
  --grid-gap: var(--space-6);
  /* KPIカードを4x1に配置 */
  /* メインチャートを6+6に分割 */
}

/* デスクトップ */
@media (min-width: 1025px) {
  /* 標準レイアウト */
}
```

## 8. アクセシビリティガイドライン

### 8.1 カラーコントラスト
- テキストと背景のコントラスト比: 最低4.5:1（WCAG AA準拠）
- 重要な情報のコントラスト比: 7:1以上（AAA推奨）

### 8.2 キーボードナビゲーション
- すべてのインタラクティブ要素にTab移動対応
- フォーカス順序の論理的配置
- Escキーでモーダル・ドロップダウンの閉じる機能

### 8.3 スクリーンリーダー対応
- 適切なARIAラベルの設置
- データテーブルのヘッダー関連付け
- グラフデータの代替テキスト提供

## 9. パフォーマンス指針

### 9.1 画像最適化
- WebP形式の使用
- 遅延読み込み（lazy loading）
- レスポンシブ画像の実装

### 9.2 コード最適化
- CSSのクリティカルパス最適化
- 未使用CSSの除去
- コンポーネントの適切なメモ化

## 10. 実装チェックリスト

### 10.1 デザイン品質
- [ ] カラーパレットの一貫性
- [ ] タイポグラフィの階層
- [ ] スペーシングの統一
- [ ] コンポーネントの再利用性

### 10.2 ユーザビリティ
- [ ] 直感的なナビゲーション
- [ ] 分かりやすいデータラベル
- [ ] 適切なローディング状態
- [ ] エラーハンドリング

### 10.3 技術実装
- [ ] レスポンシブ対応
- [ ] アクセシビリティ準拠
- [ ] パフォーマンス最適化
- [ ] ブラウザ互換性

---

このデザイン規約は、カフェ用品ECサイトのダッシュボードにおいて、
効率的で美しく、使いやすいデータ可視化体験を提供するための基準となります。
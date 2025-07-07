# Data Dashboard Project Guidelines

## プロジェクト概要
ECサイト売上ダッシュボードの開発プロジェクト。React + TypeScript + Viteを使用し、UIのTDDアプローチを実践しながら開発効率を検証する。

## 開発の基本方針

### TDDの徹底
- すべてのコンポーネント開発はテストファーストで進める
- UIテストはGiven-When-Thenパターンを使用
- 詳細は `/docs/ui_tdd_approach.md` を参照

### コンポーネント開発の順序
1. 型定義とモックデータの作成
2. 単体テストの作成
3. 最小限の実装
4. スタイリングとリファクタリング

## プロジェクト構造

```
/src
├── /api/         # API通信関数とモックデータ
├── /components/  # 再利用可能なUIコンポーネント
│   ├── /charts/  # グラフ専用コンポーネント
│   └── /ui/      # 汎用UIコンポーネント
├── /hooks/       # カスタムフック
├── /pages/       # ページレベルコンポーネント
├── /stores/      # Zustand状態管理
├── /types/       # TypeScript型定義
└── /utils/       # ユーティリティ関数
```

## 開発時のコマンド

```bash
# 開発サーバー起動
pnpm dev

# テスト実行
pnpm test

# 型チェック
pnpm build

# リント（チェックのみ）
pnpm lint

# リント（自動修正）
pnpm lint:fix

# フォーマット
pnpm format
```

## コーディング規約

### TypeScript
- strictモードを有効化
- 明示的な型定義を推奨（型推論に頼りすぎない）
- anyの使用は禁止

### React
- 関数コンポーネントのみ使用
- カスタムフックは `use` プレフィックス必須
- propsの型定義は必須

### スタイリング
- Tailwind CSSを使用
- コンポーネント固有のスタイルはコンポーネント内に記述
- レスポンシブデザインは必須（mobile-first）

### テスト
- テストファイルは対象ファイルと同じディレクトリに配置
- `*.test.tsx` または `*.test.ts` の命名規則
- data-testid属性を活用したテスト記述

## 注意事項

### パフォーマンス
- React.memoを適切に使用
- 大量データの表示には仮想スクロールを検討
- 画像は遅延読み込みを実装

### アクセシビリティ
- セマンティックHTMLを使用
- ARIAラベルの適切な設定
- キーボードナビゲーション対応

### セキュリティ
- APIキーなどの機密情報は環境変数で管理
- XSS対策を意識したコーディング
- 入力値の検証を徹底

## 関連ドキュメント
- [UIのTDDアプローチ](/docs/ui_tdd_approach.md)
- [開発ステップ](/docs/development_steps.md)
- [実装状況](/docs/implementation_status.md)
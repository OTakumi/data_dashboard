# 開発のステップ・バイ・ステップ 🚀
## ステップ1：静的なUIコンポーネントの作成
まずはAPIや状態管理を考えず、見た目を作ることに集中する

### 模擬（モック）データと型の用意
/src/types/sales.ts に売上データの型（id, date, amount, categoryなど）を定義する
/src/api/mockData.ts のようなファイルに、定義した型に沿ったリアルなダミーデータを配列として作成する

### コンポーネントの作成
作成したモックデータを直接インポートして、以下のコンポーネントをsrc/components/以下に作成する
- StatCard.tsx
    - 「本日の売上」など単一の数値を表示するカード
- SalesTrendChart.tsx
    - 売上推移を示す折れ線グラフ（Rechartsの<LineChart>を利用）。
- CategoryPieChart.tsx
    - 商品カテゴリ別の売上比率を示す円グラフ（Rechartsの<PieChart>を利用）。
- RecentOrdersTable.tsx
    - 最近の注文を一覧表示するテーブル。

## ステップ2：レイアウトの構築
作成したコンポーネントを配置して、ダッシュボード全体の骨格を作成する。

- src/pages/DashboardPage.tsxを作成する
- Tailwind CSSのFlexboxやGridを使って、ヘッダー、サイドバー（もしあれば）、そしてメインのコンテンツエリアに各コンポーネントを配置する

## ステップ3：状態管理とインタラクション
ユーザーの操作でUIが変化するようにします。

### 状態の定義
src/store/dashboardStore.tsを作成し、ZustandでUIの状態（例：dateRange: 表示期間）を管理するストアを定義する

### 操作UIの実装
- DateRangePicker.tsxのような日付範囲を選択するコンポーネントを作成する
- このコンポーネントからZustandのストアを更新できるようにする

### 状態とUIの接続
各グラフコンポーネントがZustandのストアを購読し、dateRangeが変更されたら表示するデータをフィルタリングして再描画するようにする

## ステップ4：API連携によるデータ取得
静的なモックデータを、APIから取得する形に置き換える

 (任意) モックAPIサーバーの起動
json-serverを使うと、db.jsonファイルから簡単にREST APIを模倣できます。ローカル環境でリアルなAPI通信をシミュレートするのに便利

### データ取得ロジックの作成
- src/api/salesApi.ts に、fetchやaxiosを使って実際にデータを取得する関数を定義する
- src/hooks/useSalesData.ts というカスタムフックを作成し、その中でReact QueryのuseQueryを使ってデータを取得する

### コンポーネントの書き換え
DashboardPage.tsxでuseSalesDataフックを呼び出す
React Queryが提供するdata, isLoading, errorといった状態を使って、ローディング中のスピナー表示やエラー表示を実装する
取得したdataを各コンポーネントにpropsとして渡す

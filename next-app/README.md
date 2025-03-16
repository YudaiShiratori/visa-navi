# ビザ免除情報チェッカー

日本人旅行者向けの国別ビザ免除・ビザ必要情報を簡単に検索できるサービスです。世界各国のビザ要件、滞在可能日数、入国条件などを確認できます。

## 技術スタック

- [Next.js](https://nextjs.org/) - Reactフレームワーク
- [Tailwind CSS](https://tailwindcss.com/) - CSSフレームワーク
- [Bun](https://bun.sh/) - JavaScriptランタイム
- [TypeScript](https://www.typescriptlang.org/) - 型付きJavaScript
- [Vercel Analytics](https://vercel.com/analytics) - アナリティクス

## 機能

- 国名検索機能
- 地域別の国リスト表示
- 国別のビザ情報詳細表示
- SEO対策済み
- レスポンシブデザイン

## 開発環境のセットアップ

### 前提条件

- [Bun](https://bun.sh/) がインストールされていること

### インストール

```bash
# 依存関係のインストール
bun install
```

### 開発サーバーの起動

```bash
# 開発サーバーを起動
bun dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

## ビルドと本番環境での実行

```bash
# 本番用ビルド
bun run build

# 本番サーバーの起動
bun start
```

## 環境変数

`.env` ファイルに以下の環境変数を設定してください：

- `GOOGLE_ANALYTICS_ID` - Google Analyticsのトラッキング ID
- `GA_PROPERTY_ID` - Google Analyticsのプロパティ ID

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

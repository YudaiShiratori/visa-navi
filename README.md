# ビザナビ 🌏✈️

## 概要

ビザナビは、日本人旅行者向けの海外渡航時のビザ情報を簡単に確認できるWebアプリケーションです。各国のビザ要件を視覚的にわかりやすく提供します。

## 特徴

- 📅 ビザの有効期限や滞在可能期間などビザ要件詳細の表示
- 🗺️ 地域別の国選択が可能な世界地図インターフェース
- 🔍 国名検索機能

## 技術スタック

- フロントエンド: [Next.js](https://nextjs.org/), TypeScript, Tailwind CSS
- 地図表示: React Simple Maps
- デプロイ: Vercel
- データベース: Supabase
- パッケージマネージャー: [Bun](https://bun.sh/)

## 開発環境のセットアップ

### Bunを使用する場合（推奨）

```bash
# Bunのインストール（まだインストールしていない場合）
curl -fsSL https://bun.sh/install | bash

# リポジトリのクローン
git clone https://github.com/yourusername/visanavi.git

# プロジェクトディレクトリへ移動
cd visanavi

# 依存関係のインストール
bun install

# 開発サーバーの起動
bun run dev
```

### npmを使用する場合

```bash
# リポジトリのクローン
git clone https://github.com/yourusername/visanavi.git

# プロジェクトディレクトリへ移動
cd visanavi

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

## 必要要件

- Node.js 18.0.0以上
- npm 8.0.0以上
- または Bun 1.0.0以上（推奨）

## 免責事項

このアプリケーションで提供される情報は、一般的な参考情報として提供されています。実際の渡航の際は、必ず以下の公式情報を確認してください：

- 外務省海外安全ホームページ
- 各国の在日大使館・領事館
- 最新の入国規制情報

# Sun* Next.js Dev Template

## What is this?

このリポジトリは、Next.js(TypeScript)で型安全な開発を行うためのテンプレートです。
[T3 Stack](https://create.t3.gg/)をベースに、CursorのRulesファイルなどを追加しています。

## Features

### プリインストールされたTeck Stack

- [Next.js](https://nextjs.org)
  - Webアプリケーション開発のフレームワーク
- [TypeScript](https://www.typescriptlang.org)
  - 型安全なWebアプリケーション開発を可能にする言語
- [Tailwind CSS](https://tailwindcss.com)
  - スタイリングのためのフレームワーク
- [tRPC](https://trpc.io)
  - 型安全なFEとBEの通信を可能にする
- [Biome](https://biomejs.dev/ja/)
  - Linter兼Formatter
- [Zod](https://zod.dev)
  - 型安全なデータのValidationを可能にする
- [Lefthook](https://github.com/evilmartians/lefthook)
  - コミット時にBiomeによるFormattingを行う
- [Vitest](https://vitest.dev)
  - テストフレームワーク
- [Playwright](https://playwright.dev)
  - E2Eテストフレームワーク
- [Shadcn/UI](https://ui.shadcn.com)
  - コンポーネント作成のためのフレームワーク。プレーンなスタイルをもった機能を持つコンポーネントをインストールでき、スタイリングを上書きすることでデザインシステムが構築できる。（参考： https://zenn.dev/morinokami/articles/anatomy-of-shadcn-ui ）


## Usage

### bunをインストール

```bash
curl -fsSL https://bun.sh/install | bash
```

詳しくは[公式サイト](https://bun.sh/docs/installation)を参照してください。

### リポジトリのクローン

```bash
git clone {リポジトリのURL}
```

### パッケージのインストール

```bash
bun install
```

### Playwrightのブラウザインストール

```bash
bunx playwright install
```

### lefthookの設定

```bash
bunx lefthook install
```

### 開発サーバーの起動

```bash
bun run dev
```

### ユニットテストの実行

```bash
bun run test
```

### E2Eテストの実行

※localhost:3000が他のプロセスで利用されていないか確認してから実行してください。

```bash
bun run test:e2e
```

## Maintainer

このリポジトリの管理は以下のメンバーを中心に行っています。何かあればお気軽にSlack等でお声がけください。

- Kazuma Endo
- Yudai Shiratori




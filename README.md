# Sun* Next.js Dev Template

## What is this?

このリポジトリは、Next.js(TypeScript)で型安全な開発を行うためのテンプレートです。
[T3 Stack](https://create.t3.gg/)をベースに、CursorのRulesファイルなどを追加しています。

## Features

### プリインストールされたTech Stack

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
git clone {このリポジトリのURL}
```

### リモートリポジトリの設定

```bash
git remote set-url origin {利用するリモートリポジトリのURL}
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

## Vercelへのデプロイ設定

Vercelへのデプロイは本来Vercel側でVercelアプリをGithubにインストールすることによって簡単に実現できますが、チーム開発を行う場合は全員がチームで課金されていない場合、課金されていないメンバーのPush時のデプロイは失敗してしまいます。
そのため、一人がVercelで発行するTokenを使ってGitHub Actionsによってデプロイを行えるようにしています。

### デプロイの有効化

デプロイを有効にするには、`.github/workflows/ci_cd.yml`ファイル内の`deploy_preview`と`deploy_production`ジョブのコメントアウトを解除します。



### 必要なVercel情報の取得

1. Vercelダッシュボードにログインします
2. デプロイしたいプロジェクトを選択（または新規作成）します
3. プロジェクト設定 > 「General」タブ > 「Project ID」をコピーします（`VERCEL_PROJECT_ID`として使用）
4. アカウント設定 > 「General」タブ > 「Your ID」をコピーします（`VERCEL_ORG_ID`として使用）
5. トークンを取得します:
   - アカウント設定 > 「Tokens」タブ > 「Create」をクリックします
   - トークンに名前を付け（例：「GitHub CI/CD」）、必要な権限を付与します
   - 作成されたトークンをコピーします（`VERCEL_TOKEN`として使用）

### GitHub Repository Secretsの設定

1. GitHubリポジトリページに移動します
2. 「Settings」 > 「Secrets and variables」 > 「Actions」を選択します
3. 「New repository secret」をクリックして以下の項目を追加します:
   - `VERCEL_PROJECT_ID`: コピーしたProject ID
   - `VERCEL_ORG_ID`: コピーしたOrganization ID
   - `VERCEL_TOKEN`: 作成したVercelトークン

### Dependabotに対する権限設定

Dependabotにもこれらの秘密情報へのアクセスを許可するには:

1. GitHubリポジトリページで「Settings」 > 「Secrets and variables」 > 「Dependabot」を選択します
2. 「New repository secret」をクリックして同様に3つの秘密情報を追加します:
   - `VERCEL_PROJECT_ID`
   - `VERCEL_ORG_ID`
   - `VERCEL_TOKEN`

これにより、CI/CDパイプラインとDependabotの両方がVercelへのデプロイに必要なアクセス権を持ちます。

## Maintainer

このリポジトリの管理は以下のメンバーを中心に行っています。何かあればお気軽にSlack等でお声がけください。

- Kazuma Endo
- Yudai Shiratori




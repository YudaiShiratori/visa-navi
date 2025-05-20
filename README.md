# Sun* Next.js Dev Template

## What is this?

このリポジトリは、Next.js(TypeScript)で型安全なフルスタック開発を行うためのテンプレートです。
[T3 Stack](https://create.t3.gg/)をベースに、CursorのRulesファイルなどを追加しています。
開発品質の向上、開発速度の向上を目的としてStrategic Techチームにて管理・運用しています。

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

### ディレクトリ構造

```
nextjs-dev-template/
├── __tests__/            # ユニットテストファイル
├── .github/              # GitHub関連設定
│   ├── workflows/        # GitHub Actions CI/CD設定
│   └── dependabot.yml    # Dependabot設定
├── .next/                # Next.jsビルドファイル（git管理対象外）
├── docs/                 # プロジェクト文書
├── e2e/                  # E2Eテストファイル
├── public/               # 静的ファイル
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── _components/  # アプリケーション固有のコンポーネント
│   │   ├── api/          # APIルート定義
│   │   └── ...           # 各ページのルート
│   ├── components/       # 再利用可能なUIコンポーネント
│   │   └── ui/           # Shadcn/UIコンポーネント
│   ├── lib/              # ユーティリティ関数
│   ├── server/           # サーバーサイドロジック
│   │   └── api/          # tRPC API定義
│   ├── styles/           # グローバルスタイル
│   └── trpc/             # tRPC設定
├── .env.example          # 環境変数の例
├── biome.jsonc           # Biome設定
├── lefthook.yml          # Git hooksの設定
├── next.config.js        # Next.js設定
├── package.json          # プロジェクト依存関係
├── playwright.config.ts  # Playwright設定
├── postcss.config.js     # PostCSS設定（Tailwind CSS用）
├── tsconfig.json         # TypeScript設定
└── vitest.config.ts      # Vitest設定
```

## 主要設定ファイルの詳細

### TypeScript設定 (tsconfig.json)

厳格な型チェックを有効にし、Next.jsとの連携を最適化する設定が含まれています。以下のような特徴があります：

- `strict: true` による厳格な型チェック
- パスエイリアスでの `~/*` を `./src/*` へのマッピング
- 最新のJavaScript機能の有効化

### Biome設定 (biome.jsonc)

Rust製の高速なLinter兼Formatterです。ESLintとPrettierの代替として機能し、以下の特徴があります：

- 一貫したコードスタイル強制
- パフォーマットとリンティングの統合
- Tailwind CSSのクラス名の自動ソート機能

コード品質をチェックするコマンド：
```bash
bun run check
```

コードを自動修正するコマンド：
```bash
bun run check:write
```

### tRPC設定 (src/trpc/*)

型安全なAPI通信を実現します。主な設定は以下の通りです：

- `src/server/api/routers/` - 各APIルートの定義場所
- `src/server/api/root.ts` - 全APIルートの集約
- `src/trpc/react.tsx` - クライアント側でのtRPC設定

新しいAPIエンドポイントを追加する場合は、`src/server/api/routers/`に新しいルーターファイルを作成し、`root.ts`に登録します。

### CI/CD設定 (.github/workflows/ci_cd.yml)

GitHub Actionsを使用したCI/CDパイプラインが設定されています：

- **リント**: Biomeによるコード品質チェック
- **ユニットテスト**: Vitestによるテスト実行
- **E2Eテスト**: Playwrightによるブラウザテスト
- **デプロイ**: コメントアウト解除でVercelへの自動デプロイが可能

### Lefthook設定 (lefthook.yml)

Git操作時に自動実行されるスクリプトを設定しています：

- コミット前にBiomeによる自動フォーマット

### Dependabot設定 (.github/dependabot.yml)

依存パッケージの自動更新を行います：

- npm/bunパッケージを毎週チェック
- GitHub Actionsの更新を毎週チェック
- 更新PRは同時に最大10件まで

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

## 開発ガイド

### コンポーネント追加（Shadcn/UI）

UIコンポーネントを追加する場合は、shadcn/uiを使用します：

```bash
bunx --bun shadcn@latest add button
```

追加したコンポーネントは `src/components/ui/` に配置され、自由にカスタマイズできます。

### 新しいページの追加

Next.jsのApp Routerを使用しているため、`src/app/` ディレクトリに新しいディレクトリを作成し、`page.tsx` ファイルを追加することで新しいページを作成できます：

```
src/app/dashboard/page.tsx
```

これで `/dashboard` というURLでアクセス可能になります。

### APIエンドポイントの追加（tRPC）

1. `src/server/api/routers/` に新しいルーターファイルを作成
2. プロシージャ（クエリ・ミューテーション）を定義
3. `src/server/api/root.ts` にルーターを登録

例：
```typescript
// src/server/api/routers/user.ts
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      // ユーザー取得ロジック
      return { id: input.id, name: "例" };
    }),
});

// src/server/api/root.ts に追加
import { userRouter } from "./routers/user";

export const appRouter = createTRPCRouter({
  post: postRouter,
  user: userRouter, // 追加
});
```

### テスト

#### ユニットテスト（Vitest）

`__tests__` ディレクトリ内に、テスト対象と同じディレクトリ構造でテストファイルを作成します。命名規則は `*.test.ts` または `*.test.tsx` です。

```bash
bun run test        # すべてのテストを実行
bun run test:watch  # ウォッチモードでテスト実行
```

#### E2Eテスト（Playwright）

`e2e` ディレクトリにテストファイルを作成します。命名規則は `*.spec.ts` です。

```bash
bun run test:e2e        # すべてのE2Eテストを実行
bun run test:e2e:ui     # UIモードでテスト実行
```

## その他の機能

### Biome（Linter/Formatter）

```bash
bun run check       # コード品質チェック
bun run check:write # 問題を自動修正
```

### Git Hooks（Lefthook）

コミット前にBiomeによる自動フォーマットが実行されます。特別な操作は不要です。設定は `lefthook.yml` で変更できます。

## Vercelへのデプロイ設定

Vercelへのデプロイは本来Vercel側でVercelアプリをGithubにインストールすることによって簡単に実現できますが、チーム開発を行う場合は、仮に全員がチームで課金されていない場合、課金されていないメンバーのPush時のデプロイは失敗してしまいます。
そのため、一人がVercelで発行するTokenを使ってGitHub Actionsによってデプロイを行えるようにしています。

### デプロイの有効化

デプロイを有効にするには、`.github/workflows/ci_cd.yml`ファイル内の`deploy_preview`と`deploy_production`ジョブのコメントアウトを解除します。

### 必要なVercel情報の取得

1. Vercelダッシュボードにログインします
2. デプロイしたいプロジェクトを選択（または新規作成）します
3. プロジェクトのページ > 「Settings」 > 「General」 > 「Project ID」をコピーします（`VERCEL_PROJECT_ID`として使用）
4. チームのページ > 「Settings」 > 「General」 > 「Team ID」をコピーします（`VERCEL_ORG_ID`として使用）
5. トークンを取得します:
   - 個人の「Account Settings」 > 「Tokens」タブ > 「Create」をクリックします
   - トークンに名前を付け（例：「hoge PJ GitHub CI/CD」）、必要な権限を付与します
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




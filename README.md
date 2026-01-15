# Sun* Next.js Dev Template

日本語 | [English](./README.en.md) | [Tiếng Việt](./README.vi.md)

## What is this?

このリポジトリは、Next.js(TypeScript)で型安全なフルスタック開発を行うためのテンプレートです。
[T3 Stack](https://create.t3.gg/)をベースに、CursorのRulesファイルなどを追加しています。
HEART Devの案件などでも実際に活用されています。

## Features

### プリインストールされたTech Stack

- **[Next.js](https://nextjs.org)** - フルスタックReactフレームワーク
  - App Router、SSR/SSG、API Routesを統合したモダンなWeb開発環境
  - ファイルベースルーティングと自動画像最適化
  
- **[TypeScript](https://www.typescriptlang.org)** - 型安全なJavaScript
  - 静的型チェックによる開発時のエラー検出と IDE支援
  - 大規模開発での保守性とチーム開発効率の向上
  
- **[Tailwind CSS](https://tailwindcss.com)** - ユーティリティファーストCSSフレームワーク
  - 事前定義されたクラスによる高速なUIスタイリング
  - レスポンシブデザインとデザインシステムの一貫性
  
- **[tRPC](https://trpc.io)** - End-to-End型安全なAPI通信
  - サーバーからクライアントまで完全な型安全性を実現
  - React QueryベースのReactフックとZodスキーマ検証
  
- **[Biome](https://biomejs.dev/ja/)** - 高速Linter & Formatter
  - ESLint + Prettierの代替として10-100倍高速（Rust製）
  - コードフォーマットとリンティングを統合、Tailwind CSSクラス名ソート機能付き
  
- **[Zod](https://zod.dev)** - TypeScript-firstスキーマ検証
  - スキーマから自動的にTypeScript型を生成
  - APIの入出力データの実行時型安全性とバリデーション
  
- **[Lefthook](https://github.com/evilmartians/lefthook)** - 軽量Gitフック管理
  - コミット時の自動コードフォーマットと品質チェック
  - 高速実行（Go製）と並列タスク処理
  
- **[Vitest](https://vitest.dev)** - 高速ユニットテストフレームワーク
  - Viteベースの瞬時テスト実行とHMRサポート
  - Jest互換APIとネイティブTypeScriptサポート
  
- **[Playwright](https://playwright.dev)** - モダンE2Eテストフレームワーク
  - Chromium、Firefox、Safariでの並列実ブラウザテスト
  - 強力なデバッグツールとCI/CD統合
  
- **[Shadcn/UI](https://ui.shadcn.com)** - カスタマイズ可能UIコンポーネント
  - Copy & Paste方式で完全にカスタマイズ可能
  - Radix UI基盤でアクセシビリティ対応とTailwind CSS統合

**アーキテクチャの特徴**: TypeScript + Next.js + tRPCによるフルスタック型安全性、高速開発ツールチェーン、包括的テスト環境

### デザインシステム

このテンプレートには、**Shadcn/UIコンポーネント**と**globals.cssのデザイントークン**で構成されたデザインシステムが組み込まれています。

#### デザインシステムの構成
- **Shadcn/UIコンポーネント** - 再利用可能なUIコンポーネントライブラリ（Button、Card、Input など）
- **globals.cssのデザイントークン** - カラー、タイポグラフィ、スペーシングなどのCSS変数
- この2つの組み合わせにより、一貫性のあるデザインを実現

#### tweakcnによるGUIベースのスタイリング

[tweakcn](https://tweakcn.com/)を使用することで、デザイナーがコードを書かずにGUI上でデザイントークンを視覚的に調整できます。

**ワークフロー**:
1. **tweakcnでカスタマイズ** - カラー、タイポグラフィ、スペーシングをGUIで視覚的に調整
2. **globals.cssに貼り付け** - エクスポートされたCSSを`src/styles/globals.css`にコピー
3. **即座に反映** - Shadcn/UIコンポーネントがデザイントークンを参照しているため、アプリ全体のデザインが自動更新

#### 特徴
- **デザイナーフレンドリー**: tweakcnのGUIでコードを書かずにカスタマイズ
- **開発効率化**: CSSをコピー＆ペーストするだけで、全コンポーネントに反映
- **AI対応**: AIが生成するUIも自動的にデザインシステムに準拠
- **一貫性**: 全コンポーネントがデザイントークンを使用し、統一されたルック＆フィール

詳細は `/design-system` ページで確認できます。

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
git clone git@github.com:sun-asterisk-internal/sun-nextjs-template.git
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

tRPCを使用することで、型安全なバックエンドAPIを構築できます。以下に詳細な開発方法を説明します。

#### 基本概念

##### Router（ルーター）
- API エンドポイントのグループを定義
- 関連するプロシージャをまとめて管理
- モジュール化により保守性を向上

##### Procedure（プロシージャ）
- 個別のAPI操作を定義（クエリまたはミューテーション）
- **Query**: データの取得操作（GET相当）
- **Mutation**: データの変更操作（POST/PUT/DELETE相当）

##### Context（コンテキスト）
- 各プロシージャで利用可能な共通データ
- 認証情報、データベース接続などを含む

##### Middleware（ミドルウェア）
- プロシージャの実行前後に処理を挟む
- 認証、ログ出力、バリデーションなどに使用

#### ディレクトリ構造と役割

```
src/
├── server/
│   └── api/
│       ├── root.ts          # 全ルーターの統合
│       ├── trpc.ts          # tRPCの基本設定
│       └── routers/         # 個別のルーター定義
│           ├── user.ts      # ユーザー関連API
│           ├── post.ts      # 投稿関連API
│           └── auth.ts      # 認証関連API
└── trpc/
    ├── react.tsx           # React用tRPCクライアント設定
    └── server.ts           # サーバー用tRPC設定
```

#### 新しいルーターの作成

1. **ルーターファイルの作成**

```typescript
// src/server/api/routers/user.ts
import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  // パブリックなクエリ（認証不要）
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      // データベースからユーザーを取得
      const user = await ctx.db.user.findUnique({
        where: { id: input.id },
      });
      
      if (!user) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'User not found',
        });
      }
      
      return user;
    }),

  // 全ユーザー一覧取得（ページネーション付き）
  getAll: publicProcedure
    .input(z.object({
      page: z.number().min(1).default(1),
      limit: z.number().min(1).max(100).default(10),
    }))
    .query(async ({ input, ctx }) => {
      const { page, limit } = input;
      const skip = (page - 1) * limit;
      
      const [users, total] = await Promise.all([
        ctx.db.user.findMany({
          skip,
          take: limit,
          orderBy: { createdAt: 'desc' },
        }),
        ctx.db.user.count(),
      ]);
      
      return {
        users,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      };
    }),

  // 保護されたミューテーション（認証必要）
  update: protectedProcedure
    .input(z.object({
      id: z.string(),
      name: z.string().optional(),
      email: z.string().email().optional(),
    }))
    .mutation(async ({ input, ctx }) => {
      // 認証されたユーザーのみが自分の情報を更新可能
      if (ctx.session.user.id !== input.id) {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'Cannot update other user\'s data',
        });
      }
      
      const updatedUser = await ctx.db.user.update({
        where: { id: input.id },
        data: {
          name: input.name,
          email: input.email,
        },
      });
      
      return updatedUser;
    }),

  // ユーザー削除
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      // 管理者権限チェック（例）
      if (ctx.session.user.role !== 'ADMIN') {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'Admin role required',
        });
      }
      
      await ctx.db.user.delete({
        where: { id: input.id },
      });
      
      return { success: true };
    }),
});
```

2. **root.tsにルーターを登録**

```typescript
// src/server/api/root.ts
import { createTRPCRouter } from "./trpc";
import { postRouter } from "./routers/post";
import { userRouter } from "./routers/user";  // 追加

export const appRouter = createTRPCRouter({
  post: postRouter,
  user: userRouter,  // 追加
});

export type AppRouter = typeof appRouter;
```

#### 認証とミドルウェア

**protectedProcedure の実装例:**

```typescript
// src/server/api/trpc.ts
import { TRPCError, initTRPC } from "@trpc/server";
import { getServerAuthSession } from "../auth";

const t = initTRPC.context<Context>().create();

// 認証チェックミドルウェア
const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      // session が存在することを保証
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});

// ロギングミドルウェア
const loggerMiddleware = t.middleware(async ({ path, type, next }) => {
  const start = Date.now();
  const result = await next();
  const duration = Date.now() - start;
  console.log(`${type.toUpperCase()} ${path} - ${duration}ms`);
  return result;
});

export const publicProcedure = t.procedure.use(loggerMiddleware);
export const protectedProcedure = t.procedure
  .use(loggerMiddleware)
  .use(enforceUserIsAuthed);
```

#### クライアント側での使用方法

**クエリの使用:**

```typescript
// pages/users/[id].tsx
import { api } from "~/trpc/react";

export default function UserPage({ userId }: { userId: string }) {
  // ユーザー情報を取得
  const { data: user, isLoading, error } = api.user.getById.useQuery({
    id: userId,
  });

  // ユーザー一覧を取得（ページネーション）
  const { data: usersData } = api.user.getAll.useQuery({
    page: 1,
    limit: 10,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </div>
  );
}
```

**ミューテーションの使用:**

```typescript
// components/UserUpdateForm.tsx
import { api } from "~/trpc/react";

export default function UserUpdateForm({ userId }: { userId: string }) {
  const utils = api.useUtils();
  
  const updateUser = api.user.update.useMutation({
    onSuccess: () => {
      // キャッシュを無効化して最新データを取得
      utils.user.getById.invalidate({ id: userId });
      alert('User updated successfully!');
    },
    onError: (error) => {
      alert(`Error: ${error.message}`);
    },
  });

  const handleSubmit = (data: { name: string; email: string }) => {
    updateUser.mutate({
      id: userId,
      ...data,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* フォームの実装 */}
      <button 
        type="submit" 
        disabled={updateUser.isPending}
      >
        {updateUser.isPending ? 'Updating...' : 'Update User'}
      </button>
    </form>
  );
}
```

#### エラーハンドリング

**サーバー側でのエラー定義:**

```typescript
import { TRPCError } from "@trpc/server";

// カスタムエラーの投げ方
throw new TRPCError({
  code: 'BAD_REQUEST',
  message: 'Invalid input data',
  cause: validationError, // 元のエラーオブジェクト
});

// 利用可能なエラーコード:
// - BAD_REQUEST (400)
// - UNAUTHORIZED (401)
// - FORBIDDEN (403)
// - NOT_FOUND (404)
// - METHOD_NOT_SUPPORTED (405)
// - TIMEOUT (408)
// - CONFLICT (409)
// - PRECONDITION_FAILED (412)
// - PAYLOAD_TOO_LARGE (413)
// - UNPROCESSABLE_CONTENT (422)
// - TOO_MANY_REQUESTS (429)
// - CLIENT_CLOSED_REQUEST (499)
// - INTERNAL_SERVER_ERROR (500)
```

**クライアント側でのエラーハンドリング:**

```typescript
const { data, error } = api.user.getById.useQuery({ id: "123" });

if (error) {
  // エラーコードに応じた処理
  switch (error.data?.code) {
    case 'NOT_FOUND':
      return <div>User not found</div>;
    case 'UNAUTHORIZED':
      return <div>Please log in</div>;
    default:
      return <div>An error occurred: {error.message}</div>;
  }
}
```

#### バリデーション

**Zodスキーマを使用した入力検証:**

```typescript
// 共通スキーマの定義
const CreateUserSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email format"),
  age: z.number().min(0).max(150).optional(),
  role: z.enum(['USER', 'ADMIN']).default('USER'),
});

// プロシージャでの使用
createUser: protectedProcedure
  .input(CreateUserSchema)
  .mutation(async ({ input, ctx }) => {
    // input は自動的に型安全になる
    const user = await ctx.db.user.create({
      data: input,
    });
    return user;
  }),
```

#### ベストプラクティス

1. **ルーターの分割**: 機能ごとにルーターを分けて管理
2. **入力検証**: Zodスキーマによる厳密な型定義
3. **エラーハンドリング**: 適切なHTTPステータスコードとメッセージ
4. **認証・認可**: ミドルウェアによる一元管理
5. **キャッシュ制御**: クライアント側でのデータキャッシュ戦略
6. **パフォーマンス**: ページネーション、フィルタリングの実装
7. **テスト**: tRPCプロシージャの単体テスト

#### トラブルシューティング

**型エラーが発生する場合:**
- `src/server/api/root.ts` で型をエクスポートしているか確認
- `src/trpc/react.tsx` でクライアント設定が正しいか確認

**認証エラーが発生する場合:**
- セッション設定が正しく行われているか確認
- `protectedProcedure` のミドルウェア実装を確認

この方法でtRPCを使用することで、型安全でスケーラブルなバックエンドAPIを構築できます。

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

`bun install` 実行時に Git hooks が自動的にセットアップされます。コミット前にBiomeによる自動フォーマットと TypeScript の型チェックが実行されます。設定は `lefthook.yml` で変更できます。

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

## Claude Code対応

このテンプレートは[Claude Code](https://claude.ai/code)に対応しています。Claude Codeは、Anthropic社が開発したAIコーディングアシスタントで、コマンドラインから直接利用できます。

### Claude Codeの設定

1. **Claude Codeのインストール**
   
   Homebrew (macOS, Linux):
   ```bash
   brew install --cask claude-code
   ```
   
   macOS, Linux, WSL:
   ```bash
   curl -fsSL https://claude.ai/install.sh | bash
   ```
   
   Windows PowerShell:
   ```powershell
   irm https://claude.ai/install.ps1 | iex
   ```
   
   Windows CMD:
   ```cmd
   curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
   ```

2. **GitHub CLIのインストール（必須）**
   
   カスタムコマンドがGitHub CLIを使用するため、GitHub CLIのインストールが必要です：
   
   ```bash
   # macOS (Homebrew)
   brew install gh
   
   # Ubuntu/Debian
   sudo apt install gh
   
   # Windows (Chocolatey)
   choco install gh
   
   # その他のプラットフォーム
   # https://cli.github.com/ からダウンロード
   ```
   
   GitHub CLIの認証設定：
   
   ```bash
   gh auth login
   ```

3. **認証設定**
   ```bash
   claude
   ```
   初回実行時に認証が必要です。Anthropic Console、Claude App（Pro/Maxプラン）、またはAmazon Bedrock/Google Vertex AIでの認証が可能です。

4. **プロジェクト初期化**
   ```bash
   claude /init
   ```
   このコマンドでプロジェクト用のCLAUDE.mdファイルが自動生成されます。

### ディレクトリ構造をClaude Codeに追加する方法

プロジェクトのセットアップが完了した後、以下のプロンプトをClaude Codeで実行してください：

```
プロジェクトのディレクトリ構造を分析し、CLAUDE.mdファイルの「Project Structure」セクションを現在の実際のディレクトリ構造で更新してください。以下の要件に従ってください：

1. 実際のファイルとディレクトリを確認して、正確な構造を記載する
2. 主要なファイルの役割と目的を簡潔に説明する
3. 開発者が理解しやすいように、論理的なグループ分けを行う
4. テストファイル、設定ファイル、ドキュメントファイルも含める
5. 自動生成されるファイル（.next/, node_modules/等）は除外する

更新後、docs/directory-structure.mdファイルも同様に更新してください。
```

### 利用可能なカスタムコマンド

このテンプレートには、開発効率を向上させるカスタムコマンドが含まれています。各コマンドはsubagentを活用してコンテキストを効率的に管理します。

#### ワークフローコマンド（7つ）

##### `/create-issue [問題/要望の説明]`
**用途**: GitHub Issueの作成（Explore subagentで類似Issue・関連コードを並列調査）
**実行例**:
```bash
/create-issue "ログインボタンがモバイルSafariで動作しない"
/create-issue "ユーザープロフィール写真のアップロード機能を追加"
```

##### `/work-on-issue [Issue番号]`
**用途**: Issue解決ワークフロー（品質チェックをsubagentに委譲）
**実行例**:
```bash
/work-on-issue 123
```

##### `/refactor-code [対象コード/モジュールの説明]`
**用途**: コードリファクタリング（分析・検証をsubagentで並列実行）
**実行例**:
```bash
/refactor-code "auth module"
/refactor-code "src/components/UserProfile.tsx"
```

##### `/create-pr [PR内容の説明]`
**用途**: Pull Request作成（品質チェックをsubagentに委譲）
**実行例**:
```bash
/create-pr "認証バグを修正"
/create-pr "ダークモードを追加"
```

##### `/pr-review [PR番号]`
**用途**: Pull Requestレビュー（code-reviewスキル優先、subagentフォールバック）
**実行例**:
```bash
/pr-review 789
```

##### `/analyze [対象]`
**用途**: コードベース分析（4つのExplore subagentで並列調査）
**実行例**:
```bash
/analyze src/components/Button.tsx
/analyze 認証機能
/analyze src/lib/
```

##### `/commit [説明]`
**用途**: コミット作成（品質チェックをsubagentに委譲、日本語対応）
**実行例**:
```bash
/commit "ユーザー認証機能を追加"
```

#### カスタムエージェント

##### `quality-verifier`
**用途**: 品質チェック（check:write, typecheck, test）を自動実行し、エラーを自動修正
コード変更後に自動的に呼び出され、エラーがあれば修正を試みます。修正できない場合は修正依頼を返します。

### GitHubテンプレート

このテンプレートには、構造化されたIssueとPR作成のためのテンプレートファイルが含まれています：

#### Issueテンプレート（`.github/ISSUE_TEMPLATE/`）
- **`bug_report.yml`** - バグレポート用の詳細なテンプレート
- **`feature_request.yml`** - 機能要望用のテンプレート
- **`documentation.yml`** - ドキュメント改善用のテンプレート

#### PRテンプレート（`.github/PULL_REQUEST_TEMPLATE/`）
- **`pull_request_template.md`** - Pull Request用の標準テンプレート

これらのテンプレートはClaude Codeのカスタムコマンドから自動的に参照され、一貫した品質のIssueとPRを作成できます。

### AI アシスタント向けスキル

このテンプレートには、[Vercel Labs Agent Skills](https://github.com/vercel-labs/agent-skills/tree/main) からインストールされたスキルが含まれています。これらのスキルは、複数のAIアシスタントで共有される知識ベースとして機能します。

#### インストール済みスキル

| スキル名 | 説明 |
|---------|------|
| **Vercel React Best Practices** | Vercel Engineering チームによる React/Next.js のパフォーマンス最適化ガイドライン。再レンダリング防止、バンドル最適化、サーバーサイドキャッシュなど50以上のルールを含みます。 |
| **Web Design Guidelines** | UI コードのベストプラクティス、アクセシビリティ、デザイン原則に関するガイドライン。 |
| **Frontend Design** | 高品質なフロントエンドインターフェースを作成するためのガイドライン。Webコンポーネント、ページ、アプリケーション構築時に適用されます。 |

#### 対応AIアシスタント

スキルは以下のディレクトリに配置され、各AIアシスタントで利用可能です：

- `.claude/skills/` - Claude Code
- `.cursor/skills/` - Cursor
- `.codex/skills/` - OpenAI Codex CLI
- `.github/skills/` - GitHub Copilot

#### スキルの使用方法

スキルは各AIアシスタントのコンテキストに自動的に読み込まれます。コードレビューやパフォーマンス最適化の際に、これらのベストプラクティスが適用されます。

詳細は [Vercel Labs Agent Skills リポジトリ](https://github.com/vercel-labs/agent-skills) を参照してください。

### Claude Codeの基本的な使い方

1. **対話的なコーディング**
   ```bash
   claude
   ```
   対話モードでプロジェクトについて質問したり、コード修正を依頼できます。

2. **ヘッドレスモード**
   ```bash
   claude -p "TypeScriptのエラーを修正してください"
   ```
   非対話モードでタスクを実行できます。

3. **ファイル参照**
   ```bash
   # 特定のファイルを参照
   > @src/components/ui/button.tsx の実装を説明してください
   
   # ディレクトリ参照
   > @src/app の構造を教えてください
   ```

### 推奨ワークフロー

#### 開発者のカスタマージャーニー
1. **開始**: `/project:start-work` で今日の作業を計画
2. **Issue作成**: `/project:create-issue` で明確な要件定義
3. **開発実行**: `/project:work-on-issue` で体系的な実装
4. **レビュー**: `/pr-review` で品質保証
5. **日常管理**: `/project:daily-workflow` でルーチン作業

#### 開発フェーズ
1. **理解フェーズ**: 要件分析と計画立案
2. **環境準備**: 開発環境セットアップとブランチ作成
3. **調査フェーズ**: 既存コード理解とコンテキスト把握
4. **実装フェーズ**: プロジェクト標準に従ったコード作成
5. **品質保証**: テスト実行とコード品質確認
6. **文書化**: ドキュメント更新とレビュー準備
7. **レビュー・改善**: フィードバック対応と実装改善
8. **完了**: コードマージとクリーンアップ

詳細な使い方については、[Claude Code公式ドキュメント](https://docs.anthropic.com/en/docs/claude-code/overview)を参照してください。

## Maintainer

このリポジトリの管理は以下のメンバーを中心に行っています。何かあればお気軽にSlack等でお声がけください。

- Kazuma Endo




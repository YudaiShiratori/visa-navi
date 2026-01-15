# Sun* Next.js Dev Template

日本語 | [English](./README.en.md) | [Tiếng Việt](./README.vi.md)

## What is this?

このリポジトリは、Next.js(TypeScript)で型安全なフルスタック開発を行うためのテンプレートです。
[T3 Stack](https://create.t3.gg/)をベースに、Claude Code対応やAIアシスタント向けスキルを追加しています。
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

詳細は `/design-system` ページで確認できます。

### ディレクトリ構造

```
nextjs-dev-template/
├── __tests__/            # ユニットテストファイル
├── .claude/              # Claude Code設定（コマンド、エージェント、スキル）
├── .github/              # GitHub関連設定
│   ├── workflows/        # GitHub Actions CI/CD設定
│   └── dependabot.yml    # Dependabot設定
├── docs/                 # プロジェクト文書
├── e2e/                  # E2Eテストファイル
├── public/               # 静的ファイル
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # 再利用可能なUIコンポーネント
│   ├── lib/              # ユーティリティ関数
│   ├── server/           # サーバーサイドロジック
│   ├── styles/           # グローバルスタイル
│   └── trpc/             # tRPC設定
└── ...                   # 各種設定ファイル
```

## Usage

### 1. 前提条件のインストール

```bash
# Bun（パッケージマネージャー）
curl -fsSL https://bun.sh/install | bash

# GitHub CLI（必須：カスタムコマンドで使用）
brew install gh  # macOS
gh auth login    # 認証
```

### 2. リポジトリのクローン

```bash
git clone git@github.com:sun-asterisk-internal/sun-nextjs-template.git
cd sun-nextjs-template

# 新しいプロジェクト用にリモートを変更
git remote set-url origin {利用するリモートリポジトリのURL}
```

### 3. セットアップ

```bash
# 依存関係のインストール（Git hooksも自動セットアップ）
bun install

# Playwrightブラウザのインストール
bunx playwright install

# 開発サーバーの起動
bun run dev
```

---

## Claude Code 開発環境

このテンプレートは [Claude Code](https://claude.ai/code) での開発に最適化されています。

> **テンプレートからプロジェクトを作成した場合**: このセクションの内容はそのまま利用できます。プロジェクト固有のカスタムコマンドを追加する場合は `.claude/commands/` を編集してください。

### プラグインのインストール（必須・初回のみ）

Claude Codeで開発する場合、以下のプラグインのインストールが**必須**です。カスタムコマンドの一部はこれらのプラグインに依存しています。

```bash
# Claude Code内で実行（--scope user で全プロジェクト共通にインストール）
/plugin install frontend-design@claude-plugins-official --scope user
/plugin install github@claude-plugins-official --scope user
/plugin install context7@claude-plugins-official --scope user
/plugin install serena@claude-plugins-official --scope user
/plugin install typescript-lsp@claude-plugins-official --scope user
/plugin install code-review@claude-plugins-official --scope user
```

| プラグイン | 用途 | 依存コマンド |
|-----------|------|-------------|
| `frontend-design` | 高品質なUI/UXデザイン生成 | - |
| `github` | GitHub統合（Issue/PR操作） | `/create-issue`, `/create-pr` |
| `context7` | ライブラリドキュメント参照 | - |
| `serena` | セマンティックコード解析 | - |
| `typescript-lsp` | TypeScript言語サーバー連携 | - |
| `code-review` | コードレビュー自動化 | `/pr-review` |

> **注意**: `--scope user` を付けないと特定プロジェクトのみにインストールされ、他プロジェクトで問題が発生する場合があります。

### Claude Codeの初期設定

```bash
# 1. Claude Codeのインストール
brew install --cask claude-code  # macOS
# または: curl -fsSL https://claude.ai/install.sh | bash

# 2. 認証（初回のみ）
claude

# 3. プロジェクト初期化（CLAUDE.mdの生成）
claude /init
```

### カスタムコマンド

開発効率を向上させるワークフローコマンドが用意されています。

| コマンド | 用途 |
|---------|------|
| `/create-issue [説明]` | GitHub Issueの作成 |
| `/work-on-issue [番号]` | Issue対応ワークフロー |
| `/create-pr [説明]` | Pull Request作成 |
| `/pr-review [番号]` | PRレビュー（`code-review`プラグイン使用） |
| `/refactor-code [対象]` | コードリファクタリング |
| `/analyze [対象]` | コードベース分析 |
| `/commit [説明]` | コミット作成（日本語対応） |

**実行例**:
```bash
/create-issue "ログインボタンがモバイルSafariで動作しない"
/work-on-issue 123
/pr-review 456
/commit "ユーザー認証機能を追加"
```

### カスタムエージェント

| エージェント | 用途 |
|-------------|------|
| `quality-verifier` | 品質チェック（format/typecheck/test）と自動修正 |

### AI アシスタント向けスキル

[Vercel Labs Agent Skills](https://github.com/vercel-labs/agent-skills) からインストールされたスキルが含まれています。

| スキル | 説明 |
|-------|------|
| **Vercel React Best Practices** | React/Next.jsのパフォーマンス最適化（50以上のルール） |
| **Web Design Guidelines** | UIコードのベストプラクティス、アクセシビリティ |

スキルは以下のディレクトリに配置され、各AIアシスタントで利用可能です：
- `.claude/skills/` - Claude Code
- `.cursor/skills/` - Cursor
- `.codex/skills/` - OpenAI Codex CLI
- `.github/skills/` - GitHub Copilot

### 基本的な使い方

```bash
# 対話モード
claude

# ヘッドレスモード（非対話）
claude -p "TypeScriptのエラーを修正してください"

# ファイル参照
> @src/components/ui/button.tsx の実装を説明してください
```

### 推奨ワークフロー

1. **Issue作成** → `/create-issue` で要件定義
2. **開発開始** → `/work-on-issue` で体系的な実装
3. **コミット** → `/commit` で変更をコミット
4. **PR作成** → `/create-pr` でレビュー依頼
5. **レビュー** → `/pr-review` で品質保証

詳細: [Claude Code公式ドキュメント](https://docs.anthropic.com/en/docs/claude-code/overview)

---

## 開発ガイド

### コンポーネント追加（Shadcn/UI）

```bash
bunx --bun shadcn@latest add button
```

追加したコンポーネントは `src/components/ui/` に配置されます。

### 新しいページの追加

```
src/app/dashboard/page.tsx  →  /dashboard でアクセス可能
```

### APIエンドポイントの追加（tRPC）

tRPCを使用することで、型安全なバックエンドAPIを構築できます。

#### 基本概念

- **Router**: APIエンドポイントのグループ定義
- **Procedure**: 個別のAPI操作（Query/Mutation）
- **Context**: 認証情報やDB接続などの共通データ
- **Middleware**: 認証チェックやロギングなどの前処理

#### 新しいルーターの作成

1. `src/server/api/routers/` にルーターファイルを作成
2. `src/server/api/root.ts` に登録

```typescript
// src/server/api/routers/user.ts
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      return ctx.db.user.findUnique({ where: { id: input.id } });
    }),
});
```

```typescript
// src/server/api/root.ts
import { userRouter } from "./routers/user";

export const appRouter = createTRPCRouter({
  user: userRouter,
});
```

#### クライアントでの使用

```typescript
import { api } from "~/trpc/react";

const { data: user } = api.user.getById.useQuery({ id: "123" });
```

### テスト

```bash
# ユニットテスト（Vitest）
bun run test
bun run test:watch

# E2Eテスト（Playwright）
bun run test:e2e
bun run test:e2e:ui
```

## その他の機能

### コード品質

```bash
bun run check       # Biomeによるチェック
bun run check:write # 自動修正
bun run typecheck   # TypeScript型チェック
```

### Git Hooks（Lefthook）

`bun install` 時に自動セットアップ。コミット前にフォーマットと型チェックが実行されます。

### GitHubテンプレート

構造化されたIssue/PR作成のためのテンプレートが用意されています：

- `.github/ISSUE_TEMPLATE/` - Bug Report、Feature Request、Documentation
- `.github/PULL_REQUEST_TEMPLATE/` - PRテンプレート

## Vercelへのデプロイ設定

チーム開発でVercelにデプロイする場合、GitHub Actionsを使用します。

### セットアップ

1. `.github/workflows/ci_cd.yml` の `deploy_preview` と `deploy_production` ジョブのコメントアウトを解除

2. Vercelから情報を取得：
   - Project ID: プロジェクト > Settings > General
   - Team ID: チーム > Settings > General
   - Token: Account Settings > Tokens

3. GitHub Secretsに設定：
   - `VERCEL_PROJECT_ID`
   - `VERCEL_ORG_ID`
   - `VERCEL_TOKEN`

## 主要設定ファイル

| ファイル | 用途 |
|---------|------|
| `tsconfig.json` | TypeScript設定（strict mode、パスエイリアス） |
| `biome.jsonc` | Linter/Formatter設定 |
| `lefthook.yml` | Git hooks設定 |
| `next.config.js` | Next.js設定 |
| `playwright.config.ts` | E2Eテスト設定 |
| `vitest.config.ts` | ユニットテスト設定 |

## Maintainer

このリポジトリの管理は以下のメンバーを中心に行っています。

- Kazuma Endo

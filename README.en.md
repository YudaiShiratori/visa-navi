# Sun* Next.js Dev Template

[日本語](./README.md) | English | [Tiếng Việt](./README.vi.md)

## What is this?

This repository is a template for type-safe full-stack development using Next.js (TypeScript).
Based on the [T3 Stack](https://create.t3.gg/), it includes additional features like Cursor Rules files.
It is actively used in HEART Dev projects.
The Strategic Tech team manages and operates this template to improve development quality and speed.

## Features

### Pre-installed Tech Stack

- [Next.js](https://nextjs.org)
  - Web application development framework
- [TypeScript](https://www.typescriptlang.org)
  - Language that enables type-safe web application development
- [Tailwind CSS](https://tailwindcss.com)
  - Styling framework
- [tRPC](https://trpc.io)
  - Enables type-safe communication between frontend and backend
- [Biome](https://biomejs.dev/ja/)
  - Linter and Formatter
- [Zod](https://zod.dev)
  - Enables type-safe data validation
- [Lefthook](https://github.com/evilmartians/lefthook)
  - Performs Biome formatting during commits
- [Vitest](https://vitest.dev)
  - Testing framework
- [Playwright](https://playwright.dev)
  - E2E testing framework
- [Shadcn/UI](https://ui.shadcn.com)
  - Framework for component creation. Allows installation of components with plain styles and functionality, which can be customized to build a design system. (Reference: https://zenn.dev/morinokami/articles/anatomy-of-shadcn-ui)

### Directory Structure

```
nextjs-dev-template/
├── __tests__/            # Unit test files
├── .github/              # GitHub-related settings
│   ├── workflows/        # GitHub Actions CI/CD settings
│   └── dependabot.yml    # Dependabot settings
├── .next/                # Next.js build files (not managed by git)
├── docs/                 # Project documentation
├── e2e/                  # E2E test files
├── public/               # Static files
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── _components/  # Application-specific components
│   │   ├── api/          # API route definitions
│   │   └── ...           # Routes for each page
│   ├── components/       # Reusable UI components
│   │   └── ui/           # Shadcn/UI components
│   ├── lib/              # Utility functions
│   ├── server/           # Server-side logic
│   │   └── api/          # tRPC API definitions
│   ├── styles/           # Global styles
│   └── trpc/             # tRPC settings
├── .env.example          # Example of environment variables
├── biome.jsonc           # Biome settings
├── lefthook.yml          # Git hooks settings
├── next.config.js        # Next.js settings
├── package.json          # Project dependencies
├── playwright.config.ts  # Playwright settings
├── postcss.config.js     # PostCSS settings (for Tailwind CSS)
├── tsconfig.json         # TypeScript settings
└── vitest.config.ts      # Vitest settings
```

## Main Configuration File Details

### TypeScript Configuration (tsconfig.json)

Includes settings to enable strict type checking and optimize integration with Next.js:

- Strict type checking with `strict: true`
- Path alias mapping `~/*` to `./src/*`
- Enabling latest JavaScript features

### Biome Configuration (biome.jsonc)

A fast Rust-based linter and formatter that serves as an alternative to ESLint and Prettier, with features such as:

- Enforcing consistent code style
- Integration of formatting and linting
- Automatic sorting of Tailwind CSS class names

Command to check code quality:
```bash
bun run check
```

Command to automatically fix code:
```bash
bun run check:write
```

### tRPC Configuration (src/trpc/*)

Enables type-safe API communication. Main configurations are:

- `src/server/api/routers/` - Where each API route is defined
- `src/server/api/root.ts` - Aggregation of all API routes
- `src/trpc/react.tsx` - tRPC configuration on the client side

To add new API endpoints, create a new router file in `src/server/api/routers/` and register it in `root.ts`.

### CI/CD Configuration (.github/workflows/ci_cd.yml)

CI/CD pipeline using GitHub Actions:

- **Linting**: Code quality check with Biome
- **Unit Testing**: Test execution with Vitest
- **E2E Testing**: Browser testing with Playwright
- **Deployment**: Automatic deployment to Vercel (requires uncommenting)

### Lefthook Configuration (lefthook.yml)

Configures scripts that run automatically during Git operations:

- Automatic formatting with Biome before commits

### Dependabot Configuration (.github/dependabot.yml)

Automatically updates dependencies:

- Checks npm/bun packages weekly
- Checks GitHub Actions updates weekly
- Updates up to 10 PRs simultaneously

## Usage

### Install bun

```bash
curl -fsSL https://bun.sh/install | bash
```

Refer to the [official site](https://bun.sh/docs/installation) for more details.

### Clone Repository

```bash
git clone {URL of this repository}
```

### Configure Remote Repository

```bash
git remote set-url origin {URL of remote repository to use}
```

### Install Packages

```bash
bun install
```

### Install Playwright Browsers

```bash
bunx playwright install
```

### Configure lefthook

```bash
bunx lefthook install
```

### Start Development Server

```bash
bun run dev
```

## Development Guide

### Adding Components (Shadcn/UI)

To add UI components, use shadcn/ui:

```bash
bunx --bun shadcn@latest add button
```

Added components are placed in `src/components/ui/` and can be freely customized.

### Adding New Pages

Using Next.js App Router, create a new directory in `src/app/` and add a `page.tsx` file to create a new page:

```
src/app/dashboard/page.tsx
```

This will be accessible at the URL `/dashboard`.

### Adding API Endpoints (tRPC)

1. Create a new router file in `src/server/api/routers/`
2. Define procedures (queries/mutations)
3. Register the router in `src/server/api/root.ts`

Example:
```typescript
// src/server/api/routers/user.ts
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      // User retrieval logic
      return { id: input.id, name: "Example" };
    }),
});

// Add to src/server/api/root.ts
import { userRouter } from "./routers/user";

export const appRouter = createTRPCRouter({
  post: postRouter,
  user: userRouter, // Added
});
```

### Testing

#### Unit Tests (Vitest)

Create test files in the `__tests__` directory with the same directory structure as the test target. Naming convention is `*.test.ts` or `*.test.tsx`.

```bash
bun run test        # Run all tests
bun run test:watch  # Run tests in watch mode
```

#### E2E Tests (Playwright)

Create test files in the `e2e` directory. Naming convention is `*.spec.ts`.

```bash
bun run test:e2e        # Run all E2E tests
bun run test:e2e:ui     # Run tests in UI mode
```

## Other Features

### Biome (Linter/Formatter)

```bash
bun run check       # Check code quality
bun run check:write # Automatically fix issues
```

### Git Hooks (Lefthook)

Automatic formatting with Biome is performed before commits. No special operation is required. Settings can be changed in `lefthook.yml`.

## Vercel Deployment Configuration

Vercel deployment can normally be easily achieved by installing the Vercel app on GitHub, but in team development, if not all members are billed by the team, deployments during pushes by non-billed members will fail.
Therefore, we enable deployment through GitHub Actions using a token issued by one person in Vercel.

### Enabling Deployment

To enable deployment, uncomment the `deploy_preview` and `deploy_production` jobs in the `.github/workflows/ci_cd.yml` file.

### Obtaining Required Vercel Information

1. Log in to the Vercel dashboard
2. Select (or create) the project you want to deploy
3. Project page > "Settings" > "General" > Copy "Project ID" (use as `VERCEL_PROJECT_ID`)
4. Team page > "Settings" > "General" > Copy "Team ID" (use as `VERCEL_ORG_ID`)
5. Get a token:
   - Go to personal "Account Settings" > "Tokens" tab > Click "Create"
   - Name the token (e.g., "hoge PJ GitHub CI/CD") and grant necessary permissions
   - Copy the created token (use as `VERCEL_TOKEN`)

### Setting GitHub Repository Secrets

1. Go to your GitHub repository page
2. Select "Settings" > "Secrets and variables" > "Actions"
3. Click "New repository secret" and add the following items:
   - `VERCEL_PROJECT_ID`: The copied Project ID
   - `VERCEL_ORG_ID`: The copied Organization ID
   - `VERCEL_TOKEN`: The created Vercel token

### Permission Settings for Dependabot

To allow Dependabot access to these secrets:

1. On the GitHub repository page, select "Settings" > "Secrets and variables" > "Dependabot"
2. Click "New repository secret" and similarly add the three secrets:
   - `VERCEL_PROJECT_ID`
   - `VERCEL_ORG_ID`
   - `VERCEL_TOKEN`

This gives both the CI/CD pipeline and Dependabot the necessary access rights for Vercel deployment.

## Maintainer

This repository is primarily managed by the following members. Feel free to contact us via Slack, etc., if you have any questions.

- Kazuma Endo
- Yudai Shiratori 
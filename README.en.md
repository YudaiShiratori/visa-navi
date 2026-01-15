# Sun* Next.js Dev Template

[日本語](./README.md) | English | [Tiếng Việt](./README.vi.md)

## What is this?

This repository is a template for type-safe full-stack development using Next.js (TypeScript).
Based on the [T3 Stack](https://create.t3.gg/), it includes Claude Code support and AI assistant skills.
It is actively used in HEART Dev projects.

## Features

### Pre-installed Tech Stack

- **[Next.js](https://nextjs.org)** - Full-stack React Framework
  - Modern web development environment integrating App Router, SSR/SSG, and API Routes
  - File-based routing and automatic image optimization

- **[TypeScript](https://www.typescriptlang.org)** - Type-safe JavaScript
  - Static type checking for development-time error detection and IDE support
  - Improved maintainability and team development efficiency for large-scale development

- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS Framework
  - Rapid UI styling with pre-defined classes
  - Responsive design and design system consistency

- **[tRPC](https://trpc.io)** - End-to-End Type-safe API Communication
  - Complete type safety from server to client
  - React Query-based React hooks and Zod schema validation

- **[Biome](https://biomejs.dev/ja/)** - Fast Linter & Formatter
  - 10-100x faster alternative to ESLint + Prettier (Rust-based)
  - Integrated code formatting and linting with Tailwind CSS class sorting

- **[Zod](https://zod.dev)** - TypeScript-first Schema Validation
  - Automatic TypeScript type generation from schemas
  - Runtime type safety and validation for API input/output data

- **[Lefthook](https://github.com/evilmartians/lefthook)** - Lightweight Git Hook Management
  - Automatic code formatting and quality checks on commit
  - Fast execution (Go-based) and parallel task processing

- **[Vitest](https://vitest.dev)** - Fast Unit Testing Framework
  - Instant test execution and HMR support based on Vite
  - Jest-compatible API and native TypeScript support

- **[Playwright](https://playwright.dev)** - Modern E2E Testing Framework
  - Parallel real browser testing on Chromium, Firefox, and Safari
  - Powerful debugging tools and CI/CD integration

- **[Shadcn/UI](https://ui.shadcn.com)** - Customizable UI Components
  - Fully customizable with copy & paste approach
  - Radix UI foundation with accessibility support and Tailwind CSS integration

**Architecture Features**: Full-stack type safety with TypeScript + Next.js + tRPC, fast development toolchain, comprehensive testing environment

### Design System

This template includes a design system composed of **Shadcn/UI components** and **design tokens in globals.css**.

#### Design System Composition
- **Shadcn/UI Components** - Reusable UI component library (Button, Card, Input, etc.)
- **Design tokens in globals.css** - CSS variables for colors, typography, spacing, etc.
- This combination enables consistent design across the application

#### GUI-based Styling with tweakcn

Using [tweakcn](https://tweakcn.com/), designers can visually adjust design tokens in a GUI without writing code.

**Workflow**:
1. **Customize with tweakcn** - Visually adjust colors, typography, and spacing in the GUI
2. **Paste into globals.css** - Copy the exported CSS to `src/styles/globals.css`
3. **Instant reflection** - Since Shadcn/UI components reference design tokens, the entire app's design updates automatically

See the `/design-system` page for more details.

### Directory Structure

```
nextjs-dev-template/
├── __tests__/            # Unit test files
├── .claude/              # Claude Code settings (commands, agents, skills)
├── .github/              # GitHub-related settings
│   ├── workflows/        # GitHub Actions CI/CD settings
│   └── dependabot.yml    # Dependabot settings
├── docs/                 # Project documentation
├── e2e/                  # E2E test files
├── public/               # Static files
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # Reusable UI components
│   ├── lib/              # Utility functions
│   ├── server/           # Server-side logic
│   ├── styles/           # Global styles
│   └── trpc/             # tRPC settings
└── ...                   # Various configuration files
```

## Usage

### 1. Install Prerequisites

```bash
# Bun (package manager)
curl -fsSL https://bun.sh/install | bash

# GitHub CLI (required: used by custom commands)
brew install gh  # macOS
gh auth login    # authentication
```

### 2. Clone Repository

```bash
git clone git@github.com:sun-asterisk-internal/sun-nextjs-template.git
cd sun-nextjs-template

# Change remote for new project
git remote set-url origin {your-remote-repository-URL}
```

### 3. Setup

```bash
# Install dependencies (Git hooks are also auto-setup)
bun install

# Install Playwright browsers
bunx playwright install

# Start development server
bun run dev
```

---

## Claude Code Development Environment

This template is optimized for development with [Claude Code](https://claude.ai/code).

> **When creating a project from this template**: The contents of this section can be used as-is. Edit `.claude/commands/` to add project-specific custom commands.

### Plugin Installation (Required - First Time Only)

When developing with Claude Code, installing the following plugins is **required**. Some custom commands depend on these plugins.

```bash
# Run in Claude Code (--scope user installs globally across all projects)
/plugin install frontend-design@claude-plugins-official --scope user
/plugin install github@claude-plugins-official --scope user
/plugin install context7@claude-plugins-official --scope user
/plugin install serena@claude-plugins-official --scope user
/plugin install typescript-lsp@claude-plugins-official --scope user
/plugin install code-review@claude-plugins-official --scope user
```

| Plugin | Purpose | Dependent Commands |
|--------|---------|-------------------|
| `frontend-design` | High-quality UI/UX design generation | - |
| `github` | GitHub integration (Issue/PR operations) | `/create-issue`, `/create-pr` |
| `context7` | Library documentation reference | - |
| `serena` | Semantic code analysis | - |
| `typescript-lsp` | TypeScript language server integration | - |
| `code-review` | Automated code review | `/pr-review` |

> **Note**: Without `--scope user`, plugins are installed only for the specific project, which may cause issues in other projects.

### Claude Code Initial Setup

```bash
# 1. Install Claude Code
brew install --cask claude-code  # macOS
# or: curl -fsSL https://claude.ai/install.sh | bash

# 2. Authentication (first time only)
claude

# 3. Project initialization (generates CLAUDE.md)
claude /init
```

### Custom Commands

Workflow commands are provided to improve development efficiency.

| Command | Purpose |
|---------|---------|
| `/create-issue [description]` | Create GitHub Issue |
| `/work-on-issue [number]` | Issue resolution workflow |
| `/create-pr [description]` | Create Pull Request |
| `/pr-review [number]` | PR review (uses `code-review` plugin) |
| `/refactor-code [target]` | Code refactoring |
| `/analyze [target]` | Codebase analysis |
| `/commit [description]` | Create commit |

**Examples**:
```bash
/create-issue "Login button doesn't work on mobile Safari"
/work-on-issue 123
/pr-review 456
/commit "Add user authentication feature"
```

### Custom Agents

| Agent | Purpose |
|-------|---------|
| `quality-verifier` | Quality check (format/typecheck/test) with auto-fix |

### AI Assistant Skills

Skills installed from [Vercel Labs Agent Skills](https://github.com/vercel-labs/agent-skills) are included.

| Skill | Description |
|-------|-------------|
| **Vercel React Best Practices** | React/Next.js performance optimization (50+ rules) |
| **Web Design Guidelines** | UI code best practices, accessibility |

Skills are placed in the following directories and available for each AI assistant:
- `.claude/skills/` - Claude Code
- `.cursor/skills/` - Cursor
- `.codex/skills/` - OpenAI Codex CLI
- `.github/skills/` - GitHub Copilot

### Basic Usage

```bash
# Interactive mode
claude

# Headless mode (non-interactive)
claude -p "Please fix TypeScript errors"

# File reference
> Explain the implementation of @src/components/ui/button.tsx
```

### Recommended Workflow

1. **Issue Creation** → Define requirements with `/create-issue`
2. **Start Development** → Systematic implementation with `/work-on-issue`
3. **Commit** → Commit changes with `/commit`
4. **Create PR** → Request review with `/create-pr`
5. **Review** → Quality assurance with `/pr-review`

Details: [Claude Code Official Documentation](https://docs.anthropic.com/en/docs/claude-code/overview)

---

## Development Guide

### Adding Components (Shadcn/UI)

```bash
bunx --bun shadcn@latest add button
```

Added components are placed in `src/components/ui/`.

### Adding New Pages

```
src/app/dashboard/page.tsx  →  Accessible at /dashboard
```

### Adding API Endpoints (tRPC)

tRPC enables building type-safe backend APIs.

#### Basic Concepts

- **Router**: API endpoint group definitions
- **Procedure**: Individual API operations (Query/Mutation)
- **Context**: Common data like authentication and DB connections
- **Middleware**: Pre-processing like authentication checks and logging

#### Creating New Routers

1. Create router files in `src/server/api/routers/`
2. Register in `src/server/api/root.ts`

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

#### Client Usage

```typescript
import { api } from "~/trpc/react";

const { data: user } = api.user.getById.useQuery({ id: "123" });
```

### Testing

```bash
# Unit tests (Vitest)
bun run test
bun run test:watch

# E2E tests (Playwright)
bun run test:e2e
bun run test:e2e:ui
```

## Other Features

### Code Quality

```bash
bun run check       # Check with Biome
bun run check:write # Auto-fix
bun run typecheck   # TypeScript type checking
```

### Git Hooks (Lefthook)

Auto-setup on `bun install`. Formatting and type checking run before commits.

### GitHub Templates

Templates for structured Issue/PR creation:

- `.github/ISSUE_TEMPLATE/` - Bug Report, Feature Request, Documentation
- `.github/PULL_REQUEST_TEMPLATE/` - PR template

## Vercel Deployment Configuration

For team development with Vercel, use GitHub Actions.

### Setup

1. Uncomment `deploy_preview` and `deploy_production` jobs in `.github/workflows/ci_cd.yml`

2. Get information from Vercel:
   - Project ID: Project > Settings > General
   - Team ID: Team > Settings > General
   - Token: Account Settings > Tokens

3. Set in GitHub Secrets:
   - `VERCEL_PROJECT_ID`
   - `VERCEL_ORG_ID`
   - `VERCEL_TOKEN`

## Main Configuration Files

| File | Purpose |
|------|---------|
| `tsconfig.json` | TypeScript settings (strict mode, path aliases) |
| `biome.jsonc` | Linter/Formatter settings |
| `lefthook.yml` | Git hooks settings |
| `next.config.js` | Next.js settings |
| `playwright.config.ts` | E2E test settings |
| `vitest.config.ts` | Unit test settings |

## Maintainer

This repository is primarily managed by the following members.

- Kazuma Endo

# Sun* Next.js Dev Template

[日本語](./README.md) | English | [Tiếng Việt](./README.vi.md)

## What is this?

This repository is a template for type-safe full-stack development using Next.js (TypeScript).
Based on the [T3 Stack](https://create.t3.gg/), it includes additional features like Cursor Rules files.
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

#### Features
- **Designer-friendly**: Customize without writing code using tweakcn's GUI
- **Development efficiency**: Simply copy & paste CSS to apply changes to all components
- **AI-compatible**: AI-generated UI automatically adheres to the design system
- **Consistency**: All components use design tokens for a unified look & feel

See the `/design-system` page for more details.

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
git clone git@github.com:sun-asterisk-internal/sun-nextjs-template.git
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

By using tRPC, you can build type-safe backend APIs. Here's a detailed explanation of the development process.

#### Basic Concepts

##### Router
- Defines groups of API endpoints
- Manages related procedures together
- Improves maintainability through modularization

##### Procedure
- Defines individual API operations (query or mutation)
- **Query**: Data retrieval operations (equivalent to GET)
- **Mutation**: Data modification operations (equivalent to POST/PUT/DELETE)

##### Context
- Common data available to each procedure
- Contains authentication information, database connections, etc.

##### Middleware
- Intercepts processing before and after procedure execution
- Used for authentication, logging, validation, etc.

#### Directory Structure and Roles

```
src/
├── server/
│   └── api/
│       ├── root.ts          # Integration of all routers
│       ├── trpc.ts          # Basic tRPC configuration
│       └── routers/         # Individual router definitions
│           ├── user.ts      # User-related API
│           ├── post.ts      # Post-related API
│           └── auth.ts      # Authentication-related API
└── trpc/
    ├── react.tsx           # tRPC client configuration for React
    └── server.ts           # tRPC configuration for server
```

#### Creating New Routers

1. **Creating Router Files**

```typescript
// src/server/api/routers/user.ts
import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  // Public query (no authentication required)
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      // Retrieve user from database
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

  // Get all users (with pagination)
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

  // Protected mutation (authentication required)
  update: protectedProcedure
    .input(z.object({
      id: z.string(),
      name: z.string().optional(),
      email: z.string().email().optional(),
    }))
    .mutation(async ({ input, ctx }) => {
      // Only authenticated users can update their own information
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

  // User deletion
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      // Admin role check (example)
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

2. **Register Router in root.ts**

```typescript
// src/server/api/root.ts
import { createTRPCRouter } from "./trpc";
import { postRouter } from "./routers/post";
import { userRouter } from "./routers/user";  // Added

export const appRouter = createTRPCRouter({
  post: postRouter,
  user: userRouter,  // Added
});

export type AppRouter = typeof appRouter;
```

#### Authentication and Middleware

**Implementation example of protectedProcedure:**

```typescript
// src/server/api/trpc.ts
import { TRPCError, initTRPC } from "@trpc/server";
import { getServerAuthSession } from "../auth";

const t = initTRPC.context<Context>().create();

// Authentication check middleware
const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      // Guarantee session exists
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});

// Logging middleware
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

#### Client-Side Usage

**Using Queries:**

```typescript
// pages/users/[id].tsx
import { api } from "~/trpc/react";

export default function UserPage({ userId }: { userId: string }) {
  // Retrieve user information
  const { data: user, isLoading, error } = api.user.getById.useQuery({
    id: userId,
  });

  // Retrieve user list (pagination)
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

**Using Mutations:**

```typescript
// components/UserUpdateForm.tsx
import { api } from "~/trpc/react";

export default function UserUpdateForm({ userId }: { userId: string }) {
  const utils = api.useUtils();
  
  const updateUser = api.user.update.useMutation({
    onSuccess: () => {
      // Invalidate cache and fetch latest data
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
      {/* Form implementation */}
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

#### Error Handling

**Server-side error definition:**

```typescript
import { TRPCError } from "@trpc/server";

// How to throw custom errors
throw new TRPCError({
  code: 'BAD_REQUEST',
  message: 'Invalid input data',
  cause: validationError, // Original error object
});

// Available error codes:
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

**Client-side error handling:**

```typescript
const { data, error } = api.user.getById.useQuery({ id: "123" });

if (error) {
  // Process according to error code
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

#### Validation

**Input validation using Zod schemas:**

```typescript
// Common schema definition
const CreateUserSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email format"),
  age: z.number().min(0).max(150).optional(),
  role: z.enum(['USER', 'ADMIN']).default('USER'),
});

// Usage in procedures
createUser: protectedProcedure
  .input(CreateUserSchema)
  .mutation(async ({ input, ctx }) => {
    // input is automatically type-safe
    const user = await ctx.db.user.create({
      data: input,
    });
    return user;
  }),
```

#### Best Practices

1. **Router Division**: Manage routers separately by functionality
2. **Input Validation**: Strict type definition with Zod schemas
3. **Error Handling**: Appropriate HTTP status codes and messages
4. **Authentication & Authorization**: Centralized management with middleware
5. **Cache Control**: Client-side data caching strategy
6. **Performance**: Implementation of pagination and filtering
7. **Testing**: Unit testing of tRPC procedures

#### Troubleshooting

**When type errors occur:**
- Check if types are exported in `src/server/api/root.ts`
- Verify client configuration in `src/trpc/react.tsx`

**When authentication errors occur:**
- Check if session configuration is properly set
- Verify the middleware implementation of `protectedProcedure`

Using tRPC in this way allows you to build type-safe and scalable backend APIs.

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

Git hooks are automatically set up when running `bun install`. Automatic formatting with Biome and TypeScript type checking are performed before commits. Settings can be changed in `lefthook.yml`.

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

## Claude Code Support

This template supports [Claude Code](https://claude.ai/code). Claude Code is an AI coding assistant developed by Anthropic that can be used directly from the command line.

### Claude Code Setup

1. **Claude Code Installation**
   
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

2. **GitHub CLI Installation (Required)**
   
   GitHub CLI installation is required because custom commands use GitHub CLI:
   
   ```bash
   # macOS (Homebrew)
   brew install gh
   
   # Ubuntu/Debian
   sudo apt install gh
   
   # Windows (Chocolatey)
   choco install gh
   
   # Other platforms
   # Download from https://cli.github.com/
   ```
   
   GitHub CLI authentication setup:
   
   ```bash
   gh auth login
   ```

3. **Authentication Setup**
   ```bash
   claude
   ```
   Authentication is required on first run. Authentication is possible via Anthropic Console, Claude App (Pro/Max plan), or Amazon Bedrock/Google Vertex AI.

4. **Project Initialization**
   ```bash
   claude /init
   ```
   This command automatically generates the CLAUDE.md file for the project.

### How to Add Directory Structure to Claude Code

After completing the project setup, run the following prompt in Claude Code:

```
Analyze the project's directory structure and update the "Project Structure" section in the CLAUDE.md file with the current actual directory structure. Follow these requirements:

1. Check actual files and directories and record the accurate structure
2. Briefly explain the role and purpose of major files
3. Group logically for developer understanding
4. Include test files, configuration files, and documentation files
5. Exclude auto-generated files (.next/, node_modules/, etc.)

After updating, also update the docs/directory-structure.md file similarly.
```

### Available Custom Commands

This template includes custom commands to improve development efficiency. Each command uses subagents for efficient context management.

#### Workflow Commands (7)

##### `/create-issue [problem/request description]`
**Purpose**: Create GitHub Issues (parallel investigation with Explore subagent)
**Usage Examples**:
```bash
/create-issue "Login button doesn't work on mobile Safari"
/create-issue "Add user profile photo upload feature"
```

##### `/work-on-issue [Issue number]`
**Purpose**: Issue resolution workflow (quality checks delegated to subagent)
**Usage Examples**:
```bash
/work-on-issue 123
```

##### `/refactor-code [target code/module description]`
**Purpose**: Code refactoring (analysis and verification run in parallel via subagent)
**Usage Examples**:
```bash
/refactor-code "auth module"
/refactor-code "src/components/UserProfile.tsx"
```

##### `/create-pr [PR content description]`
**Purpose**: Create Pull Request (quality checks delegated to subagent)
**Usage Examples**:
```bash
/create-pr "Fix authentication bug in login form"
/create-pr "Add dark mode support"
```

##### `/pr-review [PR number]`
**Purpose**: Pull Request review (code-review skill preferred, subagent fallback)
**Usage Examples**:
```bash
/pr-review 789
```

##### `/analyze [target]`
**Purpose**: Codebase analysis (parallel investigation with 4 Explore subagents)
**Usage Examples**:
```bash
/analyze src/components/Button.tsx
/analyze "authentication feature"
/analyze src/lib/
```

##### `/commit [description]`
**Purpose**: Create commit (quality checks delegated to subagent)
**Usage Examples**:
```bash
/commit "Add user authentication feature"
```

#### Custom Agents

##### `quality-verifier`
**Purpose**: Automatically run quality checks (check:write, typecheck, test) and auto-fix errors
Invoked after code changes to verify build and fix errors. Returns fix requests for issues that cannot be auto-fixed.

### GitHub Templates

This template includes template files for structured Issue and PR creation:

#### Issue Templates (`.github/ISSUE_TEMPLATE/`)
- **`bug_report.yml`** - Detailed template for bug reports
- **`feature_request.yml`** - Template for feature requests
- **`documentation.yml`** - Template for documentation improvements

#### PR Templates (`.github/PULL_REQUEST_TEMPLATE/`)
- **`pull_request_template.md`** - Standard template for Pull Requests

These templates are automatically referenced by Claude Code custom commands, enabling consistent quality Issue and PR creation.

### AI Assistant Skills

This template includes skills installed from [Vercel Labs Agent Skills](https://github.com/vercel-labs/agent-skills/tree/main). These skills serve as a shared knowledge base across multiple AI assistants.

#### Installed Skills

| Skill Name | Description |
|------------|-------------|
| **Vercel React Best Practices** | React/Next.js performance optimization guidelines from Vercel Engineering team. Includes 50+ rules covering re-render prevention, bundle optimization, server-side caching, and more. |
| **Web Design Guidelines** | Guidelines for UI code best practices, accessibility, and design principles. |
| **Frontend Design** | Guidelines for creating high-quality frontend interfaces. Applied when building web components, pages, and applications. |

#### Supported AI Assistants

Skills are placed in the following directories and available for each AI assistant:

- `.claude/skills/` - Claude Code
- `.cursor/skills/` - Cursor
- `.codex/skills/` - OpenAI Codex CLI
- `.github/skills/` - GitHub Copilot

#### How to Use Skills

Skills are automatically loaded into each AI assistant's context. These best practices are applied during code reviews and performance optimization.

For more details, see the [Vercel Labs Agent Skills repository](https://github.com/vercel-labs/agent-skills).

### Basic Usage of Claude Code

1. **Interactive Coding**
   ```bash
   claude
   ```
   You can ask questions about the project or request code fixes in interactive mode.

2. **Headless Mode**
   ```bash
   claude -p "Please fix TypeScript errors"
   ```
   You can execute tasks in non-interactive mode.

3. **File Reference**
   ```bash
   # Reference specific files
   > Explain the implementation of @src/components/ui/button.tsx
   
   # Directory reference
   > Tell me about the structure of @src/app
   ```

### Recommended Workflow

#### Developer Customer Journey
1. **Start**: Plan today's work with `/start-work`
2. **Issue Creation**: Clear requirement definition with `/create-issue`
3. **Development Execution**: Systematic implementation with `/work-on-issue`
4. **Review**: Quality assurance with `/pr-review`
5. **Daily Management**: Routine work with `/daily-workflow`

#### Development Phases
1. **Understanding Phase**: Requirement analysis and planning
2. **Environment Preparation**: Development environment setup and branch creation
3. **Investigation Phase**: Understanding existing code and context
4. **Implementation Phase**: Code creation following project standards
5. **Quality Assurance**: Test execution and code quality verification
6. **Documentation**: Documentation updates and review preparation
7. **Review & Improvement**: Feedback response and implementation improvement
8. **Completion**: Code merge and cleanup

For detailed usage, refer to the [Claude Code official documentation](https://docs.anthropic.com/en/docs/claude-code/overview).

## Maintainer

This repository is primarily managed by the following members. Feel free to contact us via Slack, etc., if you have any questions.

- Kazuma Endo
# Sun* Next.js Dev Template

[日本語](./README.md) | English | [Tiếng Việt](./README.vi.md)

## What is this?

This repository is a template for type-safe full-stack development using Next.js (TypeScript).
Based on the [T3 Stack](https://create.t3.gg/), it includes additional features like Cursor Rules files.
It is actively used in HEART Dev projects.

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
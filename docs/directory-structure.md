# Project Directory Structure

This document outlines the directory structure of the project to help AI agents and developers understand the project organization.

## Root Directory

```
/
├── __tests__/           # Test files mirroring src structure
│   ├── setup.ts         # Test setup configuration
│   └── components/      # Component tests
├── e2e/                 # E2E tests
├── public/              # Static files served at root path
│   └── favicon.ico      # Site favicon
├── src/                 # Source code
│   ├── app/             # Next.js App Router pages
│   │   ├── _components/ # App-specific components
│   │   ├── api/         # API routes
│   │   │   └── trpc/    # tRPC API endpoints
│   │   ├── layout.tsx   # Root layout component
│   │   └── page.tsx     # Home page component
│   ├── components/      # Shared React components
│   │   └── ui/          # UI components (likely shadcn/ui)
│   ├── lib/             # Utility functions and shared logic
│   ├── server/          # Server-side code
│   ├── styles/          # Global styles
│   ├── trpc/            # tRPC client and server setup
│   │   ├── react.tsx    # React integration for tRPC
│   │   ├── query-client.ts # React Query client configuration
│   │   └── server.ts    # tRPC server configuration
│   └── env.js           # Environment variables validation
├── docs/                # Project documentation
│   └── directory-structure.md # This file
├── .next/               # Next.js build output (generated)
├── node_modules/        # Dependencies (generated)
├── package.json         # Project metadata and dependencies
├── bun.lock             # Bun package lock file
├── tsconfig.json        # TypeScript configuration
├── vitest.config.ts     # Vitest configuration for testing
├── next.config.js       # Next.js configuration
├── biome.jsonc          # Biome configuration
├── components.json      # shadcn/ui components configuration
└── README.md            # Project overview and setup instructions
```

## Key Files

- **package.json**: Defines project dependencies and scripts
- **tsconfig.json**: TypeScript compiler configuration
- **next.config.js**: Next.js framework configuration
- **biome.jsonc**: Biome linter and formatter configuration
- **components.json**: Configuration for shadcn/ui components
- **src/env.js**: Environment variable validation using Zod
- **src/trpc/server.ts**: tRPC server-side setup
- **src/trpc/react.tsx**: tRPC client-side React hooks setup

## Development Structure

- **src/app/**: Contains page components using Next.js App Router
- **src/components/**: Reusable components that can be used across pages
- **src/lib/**: Utility functions, hooks, and shared logic
- **src/server/**: Server-side functionality and API implementations
- **__tests__/**: Test files organized to mirror the src directory structure
- **e2e/**: End-to-End tests using Playwright

## API Structure

- **src/app/api/**: Next.js API routes
- **src/app/api/trpc/**: tRPC API endpoints
- **src/trpc/**: tRPC client and server configuration 
# Repository Guidelines

## Project Overview
Next.js App Router template with TypeScript, tRPC, Tailwind, Shadcn/UI, and Bun-first tooling. Biome/Ultracite governs code quality, while Vitest and Playwright cover tests. Treat `docs/`, `src/app/design-system/`, and `src/styles/globals.css` as canonical references.

## Project Structure & Module Organization
`src/app/` hosts routes and layouts, `src/components/` shared UI, `src/components/ui/` primitives, and `src/lib/`, `src/hooks/`, `src/server/`, `src/trpc/` domain logic and routers. Assets live in `public/`, docs in `docs/`, and Playwright specs in `e2e/`. Mirror the source tree under `__tests__/`, importing internals via the `~/*` alias.

## Build, Test, and Development Commands
- `bun install`, `bun add {pkg}` – manage dependencies; avoid npm/yarn.
- `bun run dev` – start Turbo dev server.
- `bun run build` / `bun run preview` / `bun run start` – build, verify, and serve production output.
- `bun run check` (`check:write`, `check:unsafe`) – enforce Biome/Ultracite.
- `bun run typecheck` – `tsc --noEmit`.
- `bun run test`, `bun run test:watch` – Vitest suites.
- `bun run test:e2e` (`:ui`, `:ci`) – Playwright flows; `bunx playwright install` adds browsers.
- `bunx --bun shadcn@latest add {component}`, `bunx lefthook install` – maintain UI toolkit and hooks.

## Coding Style & Naming Conventions
Favor readability, explicit types, and intent-focused comments. Format with Biome before staging; two-space indentation, double quotes, trailing commas, and kebab-case filenames are standard. Export components in PascalCase, hooks/utilities in camelCase, default to server components unless browser APIs are needed, and compose Tailwind classes with `cn`.

## Testing Guidelines
Adopt t-wada TDD (Red → Green → Refactor) for new behaviors. Place unit tests alongside features in mirrored `__tests__/` paths with `.test.ts[x]` suffixes, reuse `__tests__/setup.ts`, and name tests with Given–When–Then phrasing. Extend multi-page journeys in `e2e/`, running `bun run test:e2e:ci` for CI parity. Note deliberate coverage gaps in PR descriptions.

## Commit & Pull Request Guidelines
Use Conventional Commits (`feat: add audit trail (fixes #123)`), link to issues, and keep diffs focused. Lefthook runs `bunx ultracite fix` and `bunx tsc --noEmit`; only commit passing changes. PRs need a short summary, linked issue, UI screenshots when visuals shift, and a test/lint checklist.

## Configuration & Environment Tips
Validate environment variables through `src/env.js` (`@t3-oss/env-nextjs`) whenever keys evolve, and document updates in `docs/`. Maintain design tokens in `src/styles/globals.css` alongside Shadcn/UI. If builds misbehave, clear `.next/`, rerun `bun run build`, and lean on dynamic imports plus tRPC React Query caching for performance.

# Claude Code Configuration

## Project Overview

This is a Next.js TypeScript full-stack development template based on the T3 Stack, enhanced with Claude Code compatibility. It provides type-safe full-stack development with modern tooling and comprehensive testing setup.

## Tech Stack

- **Next.js** - Full-stack React framework with App Router
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **tRPC** - End-to-end type-safe API communication
- **Ultracite** - AI-ready code formatter and linter (built on Biome)
- **Zod** - TypeScript-first schema validation
- **Vitest** - Fast unit testing framework
- **Playwright** - Modern E2E testing framework
- **Shadcn/UI** - Customizable UI components

## Essential Commands

### Package Management
- `bun install` - Install dependencies
- `bun add {packages}` - Add new packages
- `bunx --bun shadcn@latest add {components}` - Add Shadcn/UI components

### Development
- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server

### Code Quality
- `bun run check` - Check code quality with Ultracite
- `bun run check:write` - Auto-fix code issues with Ultracite
- `bun run check:unsafe` - Apply unsafe fixes with Ultracite
- `bun run typecheck` - Run TypeScript type checking

### Testing
- `bun run test` - Run unit tests with Vitest
- `bun run test:e2e` - Run E2E tests with Playwright
- `bunx playwright install` - Install Playwright browsers

### Git Hooks
- `bunx lefthook install` - Install git hooks for automatic formatting

### GitHub Operations
- `gh issue list` - List GitHub issues
- `gh pr list` - List pull requests
- `gh pr create` - Create new pull request
- `gh issue create` - Create new issue

## Code Style Guidelines

### Coding Principles
- **Readability First**: Code should be easily understandable by other developers
- **Type Safety**: Leverage TypeScript's type system for better development experience
- **Consistent Naming**: Use descriptive names for variables, functions, and components
- **Effective Comments**: Explain "why" not "what" - focus on intent and context

### File Organization
- Use kebab-case for file names (e.g., `user-profile.tsx`)
- Place components in appropriate directories (`src/components/` for shared, `src/app/_components/` for app-specific)
- Mirror test file structure in `__tests__/` directory
- Follow Next.js App Router conventions for routing

### Import/Export Style
- Use ES modules (import/export) syntax, not CommonJS (require)
- Prefer destructuring imports when possible (e.g., `import { Button } from './button'`)
- Use default exports for pages and main components
- Use named exports for utilities and shared functions

### Component Development
- Use TypeScript interfaces for props definition
- Implement proper error boundaries for robust UX
- Follow React best practices (hooks rules, component composition)
- Use Shadcn/UI components as base for custom UI elements

## Testing Guidelines

### Unit Testing with Vitest
- Test files should be placed in `__tests__/` directory
- Use `.test.ts` or `.test.tsx` extensions
- Follow Given-When-Then pattern for test structure
- Mock external dependencies appropriately using `vi.mock()`

### E2E Testing with Playwright
- E2E tests should be in `e2e/` directory
- Test critical user journeys and flows
- Use page object model for maintainable tests

### Best Practices
- Each test should be independent and isolated
- Use descriptive test names that explain what is being tested
- Test both happy paths and error cases
- Prefer integration tests over unit tests for React components

## API Development with tRPC

### Creating New API Endpoints
1. Create router files in `src/server/api/routers/`
2. Define procedures with proper input validation using Zod
3. Register routers in `src/server/api/root.ts`
4. Use `publicProcedure` for open endpoints, `protectedProcedure` for authenticated

### Type Safety
- All API inputs/outputs are automatically type-safe
- Use Zod schemas for runtime validation
- Leverage tRPC's React Query integration for client-side data fetching

## Project Structure

```
src/
├── app/              # Next.js App Router pages and layouts
│   ├── _components/  # App-specific components
│   ├── api/          # API routes (including tRPC)
│   └── ...           # Page routes
├── components/       # Shared UI components
│   └── ui/           # Shadcn/UI components
├── lib/              # Utility functions and shared logic
├── server/           # Server-side logic and tRPC API definitions
│   └── api/          # tRPC routers and procedures
├── styles/           # Global styles
└── trpc/             # tRPC client configuration
```

## Development Workflow

### Core Development Process (5 Essential Commands)
1. **Issue Creation**: Create well-structured issues using `/project:create-issue [DESCRIPTION]`
2. **Issue Resolution**: Complete development workflow using `/project:work-on-issue [NUMBER]`
3. **Code Improvement**: Refactor existing code using `/project:refactor-code [TARGET]`
4. **PR Creation**: Create PRs from current changes using `/project:create-pr [TITLE]`
5. **Code Review**: Conduct thorough reviews using `/project:review-pr [NUMBER]`

### Development Phases
1. **Understanding**: Analyze requirements and plan approach
2. **Environment Setup**: Prepare development environment and create branch
3. **Investigation**: Research existing code and understand context
4. **Implementation**: Write code following project standards
5. **Quality Assurance**: Test thoroughly and ensure code quality
6. **Documentation**: Update docs and prepare for review
7. **Review & Iteration**: Address feedback and refine implementation
8. **Completion**: Merge code and clean up

### Git Workflow
- Every development task should be linked to a GitHub issue
- Use conventional commit messages with issue references
- Create feature branches from main: `git checkout -b fix/issue-123`
- Commit messages format: `type: description (fixes #123)`
- Use GitHub CLI for all GitHub operations
- Lefthook will automatically format code before commits

## Environment Setup

### Required Tools
- **Bun** - Package manager and runtime
- **Node.js 18+** - JavaScript runtime
- **Git** - Version control

### Optional but Recommended
- **VS Code** with TypeScript and Tailwind CSS extensions
- **GitHub CLI** for repository management and issue/PR operations
  - Install: `brew install gh` (macOS) or `winget install GitHub.cli` (Windows)
  - Authenticate: `gh auth login`

## Important Notes

- Always run type checking after making changes: `bun run typecheck`
- Use Ultracite for consistent code formatting: `bun run check:write`
- Prefer running single tests during development for performance
- Keep dependencies up to date using Dependabot PRs
- Follow the existing patterns in the codebase for consistency

## Troubleshooting

### Common Issues
- If TypeScript errors occur, run `bun run type-check` for detailed error information
- For tRPC type issues, ensure proper router registration in `root.ts`
- If tests fail, check that all dependencies are properly mocked
- For build issues, clear `.next` directory and rebuild

### Performance Tips
- Use Next.js dynamic imports for code splitting
- Optimize images using Next.js Image component
- Leverage tRPC's React Query caching for better UX
- Monitor bundle size and performance metrics

## Security Considerations

- Validate all inputs using Zod schemas
- Use proper authentication middleware for protected routes
- Sanitize user inputs to prevent XSS attacks
- Keep dependencies updated for security patches
- Use environment variables for sensitive configuration

---

This configuration is optimized for Claude Code usage. The AI assistant should follow these guidelines when working with this codebase to ensure consistency and quality.
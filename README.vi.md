# Sun* Next.js Dev Template

[日本語](./README.md) | [English](./README.en.md) | Tiếng Việt

## Đây là gì?

Repository này là một template cho phát triển full-stack đảm bảo kiểu dữ liệu (type-safe) sử dụng Next.js (TypeScript).
Dựa trên [T3 Stack](https://create.t3.gg/), bổ sung thêm hỗ trợ Claude Code và các skill cho AI assistant.
Đang được sử dụng tích cực trong các dự án HEART Dev.

## Tính năng

### Tech Stack được cài đặt sẵn

- **[Next.js](https://nextjs.org)** - Framework React Full-stack
  - Môi trường phát triển web hiện đại tích hợp App Router, SSR/SSG và API Routes
  - File-based routing và tối ưu hóa hình ảnh tự động

- **[TypeScript](https://www.typescriptlang.org)** - JavaScript đảm bảo kiểu dữ liệu
  - Kiểm tra kiểu tĩnh để phát hiện lỗi lúc phát triển và hỗ trợ IDE
  - Cải thiện khả năng bảo trì và hiệu quả phát triển nhóm cho dự án lớn

- **[Tailwind CSS](https://tailwindcss.com)** - Framework CSS Utility-first
  - Styling UI nhanh chóng với các class được định nghĩa sẵn
  - Responsive design và tính nhất quán của hệ thống thiết kế

- **[tRPC](https://trpc.io)** - Giao tiếp API đảm bảo kiểu dữ liệu End-to-End
  - Đảm bảo kiểu dữ liệu hoàn toàn từ server đến client
  - React hooks dựa trên React Query và xác thực schema Zod

- **[Biome](https://biomejs.dev/ja/)** - Linter & Formatter nhanh
  - Thay thế ESLint + Prettier nhanh hơn 10-100 lần (dựa trên Rust)
  - Tích hợp code formatting và linting với tính năng sắp xếp class Tailwind CSS

- **[Zod](https://zod.dev)** - Xác thực Schema TypeScript-first
  - Tự động tạo kiểu TypeScript từ schema
  - Đảm bảo kiểu dữ liệu runtime và validation cho dữ liệu API input/output

- **[Lefthook](https://github.com/evilmartians/lefthook)** - Quản lý Git Hook nhẹ
  - Tự động format code và kiểm tra chất lượng khi commit
  - Thực thi nhanh (dựa trên Go) và xử lý tác vụ song song

- **[Vitest](https://vitest.dev)** - Framework Unit Testing nhanh
  - Thực thi test tức thì và hỗ trợ HMR dựa trên Vite
  - API tương thích Jest và hỗ trợ TypeScript native

- **[Playwright](https://playwright.dev)** - Framework E2E Testing hiện đại
  - Test trình duyệt thực song song trên Chromium, Firefox và Safari
  - Công cụ debug mạnh mẽ và tích hợp CI/CD

- **[Shadcn/UI](https://ui.shadcn.com)** - Component UI có thể tùy chỉnh
  - Hoàn toàn có thể tùy chỉnh với phương pháp copy & paste
  - Nền tảng Radix UI với hỗ trợ accessibility và tích hợp Tailwind CSS

**Đặc điểm kiến trúc**: Đảm bảo kiểu dữ liệu full-stack với TypeScript + Next.js + tRPC, chuỗi công cụ phát triển nhanh, môi trường testing toàn diện

### Hệ thống thiết kế

Template này bao gồm một hệ thống thiết kế được cấu thành từ **component Shadcn/UI** và **design token trong globals.css**.

#### Cấu trúc hệ thống thiết kế
- **Component Shadcn/UI** - Thư viện component UI có thể tái sử dụng (Button, Card, Input, v.v.)
- **Design token trong globals.css** - Biến CSS cho màu sắc, typography, khoảng cách, v.v.
- Sự kết hợp này cho phép thiết kế nhất quán trong toàn bộ ứng dụng

#### Styling dựa trên GUI với tweakcn

Sử dụng [tweakcn](https://tweakcn.com/), designer có thể điều chỉnh design token một cách trực quan trong GUI mà không cần viết code.

**Quy trình làm việc**:
1. **Tùy chỉnh với tweakcn** - Điều chỉnh màu sắc, typography và khoảng cách một cách trực quan trong GUI
2. **Dán vào globals.css** - Sao chép CSS được xuất ra vào `src/styles/globals.css`
3. **Phản ánh tức thì** - Vì các component Shadcn/UI tham chiếu đến design token, thiết kế của toàn bộ ứng dụng sẽ tự động cập nhật

Xem chi tiết tại trang `/design-system`.

### Cấu trúc thư mục

```
nextjs-dev-template/
├── __tests__/            # Tệp unit test
├── .claude/              # Cài đặt Claude Code (lệnh, agent, skill)
├── .github/              # Cài đặt liên quan đến GitHub
│   ├── workflows/        # Cài đặt GitHub Actions CI/CD
│   └── dependabot.yml    # Cài đặt Dependabot
├── docs/                 # Tài liệu dự án
├── e2e/                  # Tệp E2E test
├── public/               # Tệp tĩnh
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # Component UI có thể tái sử dụng
│   ├── lib/              # Hàm tiện ích
│   ├── server/           # Logic phía server
│   ├── styles/           # Style toàn cục
│   └── trpc/             # Cài đặt tRPC
└── ...                   # Các tệp cấu hình khác
```

## Sử dụng

### 1. Cài đặt điều kiện tiên quyết

```bash
# Bun (trình quản lý package)
curl -fsSL https://bun.sh/install | bash

# GitHub CLI (bắt buộc: sử dụng bởi các lệnh tùy chỉnh)
brew install gh  # macOS
gh auth login    # xác thực
```

### 2. Clone Repository

```bash
git clone git@github.com:sun-asterisk-internal/sun-nextjs-template.git
cd sun-nextjs-template

# Thay đổi remote cho dự án mới
git remote set-url origin {URL-remote-repository-của-bạn}
```

### 3. Thiết lập

```bash
# Cài đặt phụ thuộc (Git hooks cũng được tự động thiết lập)
bun install

# Cài đặt trình duyệt Playwright
bunx playwright install

# Khởi động development server
bun run dev
```

---

## Môi trường phát triển Claude Code

Template này được tối ưu hóa cho phát triển với [Claude Code](https://claude.ai/code).

> **Khi tạo dự án từ template này**: Nội dung của phần này có thể sử dụng ngay. Chỉnh sửa `.claude/commands/` để thêm các lệnh tùy chỉnh riêng cho dự án.

### Cài đặt Plugin (Bắt buộc - Chỉ lần đầu)

Khi phát triển với Claude Code, việc cài đặt các plugin sau là **bắt buộc**. Một số lệnh tùy chỉnh phụ thuộc vào các plugin này.

```bash
# Chạy trong Claude Code (--scope user cài đặt toàn cục cho tất cả dự án)
/plugin install frontend-design@claude-plugins-official --scope user
/plugin install github@claude-plugins-official --scope user
/plugin install context7@claude-plugins-official --scope user
/plugin install serena@claude-plugins-official --scope user
/plugin install typescript-lsp@claude-plugins-official --scope user
/plugin install code-review@claude-plugins-official --scope user
```

| Plugin | Mục đích | Lệnh phụ thuộc |
|--------|----------|----------------|
| `frontend-design` | Tạo thiết kế UI/UX chất lượng cao | - |
| `github` | Tích hợp GitHub (thao tác Issue/PR) | `/create-issue`, `/create-pr` |
| `context7` | Tham chiếu tài liệu thư viện | - |
| `serena` | Phân tích mã ngữ nghĩa | - |
| `typescript-lsp` | Tích hợp máy chủ ngôn ngữ TypeScript | - |
| `code-review` | Tự động hóa đánh giá mã | `/pr-review` |

> **Lưu ý**: Không có `--scope user`, plugin chỉ được cài đặt cho dự án cụ thể, có thể gây ra vấn đề trong các dự án khác.

### Thiết lập ban đầu Claude Code

```bash
# 1. Cài đặt Claude Code
brew install --cask claude-code  # macOS
# hoặc: curl -fsSL https://claude.ai/install.sh | bash

# 2. Xác thực (chỉ lần đầu)
claude

# 3. Khởi tạo dự án (tạo CLAUDE.md)
claude /init
```

### Lệnh tùy chỉnh

Các lệnh workflow được cung cấp để cải thiện hiệu quả phát triển.

| Lệnh | Mục đích |
|------|----------|
| `/create-issue [mô tả]` | Tạo GitHub Issue |
| `/work-on-issue [số]` | Workflow giải quyết Issue |
| `/create-pr [mô tả]` | Tạo Pull Request |
| `/pr-review [số]` | Đánh giá PR (sử dụng plugin `code-review`) |
| `/refactor-code [mục tiêu]` | Tái cấu trúc mã |
| `/analyze [mục tiêu]` | Phân tích codebase |
| `/commit [mô tả]` | Tạo commit |

**Ví dụ**:
```bash
/create-issue "Nút đăng nhập không hoạt động trên mobile Safari"
/work-on-issue 123
/pr-review 456
/commit "Thêm tính năng xác thực người dùng"
```

### Agent tùy chỉnh

| Agent | Mục đích |
|-------|----------|
| `quality-verifier` | Kiểm tra chất lượng (format/typecheck/test) với tự động sửa lỗi |

### Skill cho AI Assistant

Các skill được cài đặt từ [Vercel Labs Agent Skills](https://github.com/vercel-labs/agent-skills) đã được bao gồm.

| Skill | Mô tả |
|-------|-------|
| **Vercel React Best Practices** | Tối ưu hóa hiệu suất React/Next.js (hơn 50 quy tắc) |
| **Web Design Guidelines** | Best practices cho mã UI, accessibility |

Skill được đặt trong các thư mục sau và có sẵn cho từng AI assistant:
- `.claude/skills/` - Claude Code
- `.cursor/skills/` - Cursor
- `.codex/skills/` - OpenAI Codex CLI
- `.github/skills/` - GitHub Copilot

### Cách sử dụng cơ bản

```bash
# Chế độ tương tác
claude

# Chế độ headless (không tương tác)
claude -p "Vui lòng sửa lỗi TypeScript"

# Tham chiếu tệp
> Giải thích việc triển khai @src/components/ui/button.tsx
```

### Quy trình làm việc được khuyến nghị

1. **Tạo Issue** → Định nghĩa yêu cầu với `/create-issue`
2. **Bắt đầu phát triển** → Triển khai có hệ thống với `/work-on-issue`
3. **Commit** → Commit thay đổi với `/commit`
4. **Tạo PR** → Yêu cầu đánh giá với `/create-pr`
5. **Đánh giá** → Đảm bảo chất lượng với `/pr-review`

Chi tiết: [Tài liệu chính thức Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview)

---

## Hướng dẫn phát triển

### Thêm Component (Shadcn/UI)

```bash
bunx --bun shadcn@latest add button
```

Component được thêm vào sẽ đặt tại `src/components/ui/`.

### Thêm trang mới

```
src/app/dashboard/page.tsx  →  Truy cập được tại /dashboard
```

### Thêm Endpoint API (tRPC)

tRPC cho phép xây dựng API backend đảm bảo kiểu dữ liệu.

#### Khái niệm cơ bản

- **Router**: Định nghĩa nhóm endpoint API
- **Procedure**: Thao tác API riêng lẻ (Query/Mutation)
- **Context**: Dữ liệu chung như xác thực và kết nối DB
- **Middleware**: Tiền xử lý như kiểm tra xác thực và logging

#### Tạo Router mới

1. Tạo tệp router trong `src/server/api/routers/`
2. Đăng ký trong `src/server/api/root.ts`

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

#### Sử dụng phía Client

```typescript
import { api } from "~/trpc/react";

const { data: user } = api.user.getById.useQuery({ id: "123" });
```

### Testing

```bash
# Unit test (Vitest)
bun run test
bun run test:watch

# E2E test (Playwright)
bun run test:e2e
bun run test:e2e:ui
```

## Tính năng khác

### Chất lượng mã

```bash
bun run check       # Kiểm tra với Biome
bun run check:write # Tự động sửa
bun run typecheck   # Kiểm tra kiểu TypeScript
```

### Git Hooks (Lefthook)

Tự động thiết lập khi `bun install`. Formatting và kiểm tra kiểu chạy trước khi commit.

### Template GitHub

Template để tạo Issue/PR có cấu trúc:

- `.github/ISSUE_TEMPLATE/` - Bug Report, Feature Request, Documentation
- `.github/PULL_REQUEST_TEMPLATE/` - Template PR

## Cấu hình triển khai Vercel

Cho phát triển nhóm với Vercel, sử dụng GitHub Actions.

### Thiết lập

1. Bỏ comment các job `deploy_preview` và `deploy_production` trong `.github/workflows/ci_cd.yml`

2. Lấy thông tin từ Vercel:
   - Project ID: Project > Settings > General
   - Team ID: Team > Settings > General
   - Token: Account Settings > Tokens

3. Thiết lập trong GitHub Secrets:
   - `VERCEL_PROJECT_ID`
   - `VERCEL_ORG_ID`
   - `VERCEL_TOKEN`

## Tệp cấu hình chính

| Tệp | Mục đích |
|-----|----------|
| `tsconfig.json` | Cài đặt TypeScript (strict mode, path alias) |
| `biome.jsonc` | Cài đặt Linter/Formatter |
| `lefthook.yml` | Cài đặt Git hooks |
| `next.config.js` | Cài đặt Next.js |
| `playwright.config.ts` | Cài đặt E2E test |
| `vitest.config.ts` | Cài đặt Unit test |

## Người bảo trì

Repository này chủ yếu được quản lý bởi các thành viên sau.

- Kazuma Endo

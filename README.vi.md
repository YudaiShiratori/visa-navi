# Sun* Next.js Dev Template

[日本語](./README.md) | [English](./README.en.md) | Tiếng Việt

## Đây là gì?

Repository này là một template cho phát triển full-stack đảm bảo kiểu dữ liệu (type-safe) sử dụng Next.js (TypeScript).
Dựa trên [T3 Stack](https://create.t3.gg/), bổ sung thêm các tính năng như Cursor Rules files.
Đang được sử dụng tích cực trong các dự án HEART Dev.

## Tính năng

### Tech Stack được cài đặt sẵn

- [Next.js](https://nextjs.org)
  - Framework phát triển ứng dụng web
- [TypeScript](https://www.typescriptlang.org)
  - Ngôn ngữ cho phép phát triển ứng dụng web đảm bảo kiểu dữ liệu
- [Tailwind CSS](https://tailwindcss.com)
  - Framework styling
- [tRPC](https://trpc.io)
  - Cho phép giao tiếp đảm bảo kiểu dữ liệu giữa frontend và backend
- [Biome](https://biomejs.dev/ja/)
  - Linter kiêm Formatter
- [Zod](https://zod.dev)
  - Cho phép xác thực dữ liệu đảm bảo kiểu dữ liệu
- [Lefthook](https://github.com/evilmartians/lefthook)
  - Thực hiện định dạng Biome trong quá trình commit
- [Vitest](https://vitest.dev)
  - Framework kiểm thử
- [Playwright](https://playwright.dev)
  - Framework kiểm thử E2E
- [Shadcn/UI](https://ui.shadcn.com)
  - Framework tạo component. Cho phép cài đặt các component có style và chức năng cơ bản, có thể tùy chỉnh để xây dựng hệ thống thiết kế. (Tham khảo: https://zenn.dev/morinokami/articles/anatomy-of-shadcn-ui)

### Cấu trúc thư mục

```
nextjs-dev-template/
├── __tests__/            # Tệp kiểm thử đơn vị
├── .github/              # Cài đặt liên quan đến GitHub
│   ├── workflows/        # Cài đặt GitHub Actions CI/CD
│   └── dependabot.yml    # Cài đặt Dependabot
├── .next/                # Tệp build Next.js (không quản lý bởi git)
├── docs/                 # Tài liệu dự án
├── e2e/                  # Tệp kiểm thử E2E
├── public/               # Tệp tĩnh
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── _components/  # Component đặc thù cho ứng dụng
│   │   ├── api/          # Định nghĩa route API
│   │   └── ...           # Route cho từng trang
│   ├── components/       # Component UI có thể tái sử dụng
│   │   └── ui/           # Component Shadcn/UI
│   ├── lib/              # Hàm tiện ích
│   ├── server/           # Logic phía server
│   │   └── api/          # Định nghĩa tRPC API
│   ├── styles/           # Style toàn cục
│   └── trpc/             # Cài đặt tRPC
├── .env.example          # Ví dụ về biến môi trường
├── biome.jsonc           # Cài đặt Biome
├── lefthook.yml          # Cài đặt Git hooks
├── next.config.js        # Cài đặt Next.js
├── package.json          # Phụ thuộc dự án
├── playwright.config.ts  # Cài đặt Playwright
├── postcss.config.js     # Cài đặt PostCSS (cho Tailwind CSS)
├── tsconfig.json         # Cài đặt TypeScript
└── vitest.config.ts      # Cài đặt Vitest
```

## Chi tiết tệp cấu hình chính

### Cấu hình TypeScript (tsconfig.json)

Bao gồm các cài đặt để bật kiểm tra kiểu dữ liệu nghiêm ngặt và tối ưu hóa tích hợp với Next.js:

- Kiểm tra kiểu dữ liệu nghiêm ngặt với `strict: true`
- Ánh xạ đường dẫn `~/*` sang `./src/*`
- Bật các tính năng JavaScript mới nhất

### Cấu hình Biome (biome.jsonc)

Linter và formatter nhanh dựa trên Rust, thay thế cho ESLint và Prettier, với các tính năng như:

- Áp dụng phong cách code nhất quán
- Tích hợp định dạng và linting
- Tự động sắp xếp tên lớp Tailwind CSS

Lệnh kiểm tra chất lượng code:
```bash
bun run check
```

Lệnh tự động sửa code:
```bash
bun run check:write
```

### Cấu hình tRPC (src/trpc/*)

Cho phép giao tiếp API đảm bảo kiểu dữ liệu. Cấu hình chính:

- `src/server/api/routers/` - Nơi định nghĩa từng route API
- `src/server/api/root.ts` - Tổng hợp tất cả route API
- `src/trpc/react.tsx` - Cấu hình tRPC phía client

Để thêm endpoint API mới, tạo tệp router mới trong `src/server/api/routers/` và đăng ký nó trong `root.ts`.

### Cấu hình CI/CD (.github/workflows/ci_cd.yml)

Pipeline CI/CD sử dụng GitHub Actions:

- **Linting**: Kiểm tra chất lượng code bằng Biome
- **Unit Testing**: Thực thi kiểm thử bằng Vitest
- **E2E Testing**: Kiểm thử trình duyệt bằng Playwright
- **Deployment**: Triển khai tự động lên Vercel (cần bỏ comment)

### Cấu hình Lefthook (lefthook.yml)

Cấu hình script chạy tự động trong quá trình thao tác Git:

- Định dạng tự động bằng Biome trước khi commit

### Cấu hình Dependabot (.github/dependabot.yml)

Tự động cập nhật phụ thuộc:

- Kiểm tra gói npm/bun hàng tuần
- Kiểm tra cập nhật GitHub Actions hàng tuần
- Cập nhật tối đa 10 PR cùng lúc

## Sử dụng

### Cài đặt bun

```bash
curl -fsSL https://bun.sh/install | bash
```

Tham khảo [trang chính thức](https://bun.sh/docs/installation) để biết thêm chi tiết.

### Clone Repository

```bash
git clone {URL của repository này}
```

### Cấu hình Remote Repository

```bash
git remote set-url origin {URL của remote repository cần sử dụng}
```

### Cài đặt Package

```bash
bun install
```

### Cài đặt trình duyệt Playwright

```bash
bunx playwright install
```

### Cấu hình lefthook

```bash
bunx lefthook install
```

### Khởi động Development Server

```bash
bun run dev
```

## Hướng dẫn phát triển

### Thêm Component (Shadcn/UI)

Để thêm component UI, sử dụng shadcn/ui:

```bash
bunx --bun shadcn@latest add button
```

Component được thêm vào sẽ đặt tại `src/components/ui/` và có thể tùy chỉnh tự do.

### Thêm trang mới

Sử dụng Next.js App Router, tạo thư mục mới trong `src/app/` và thêm tệp `page.tsx` để tạo trang mới:

```
src/app/dashboard/page.tsx
```

Trang này sẽ truy cập được tại URL `/dashboard`.

### Thêm Endpoint API (tRPC)

1. Tạo tệp router mới trong `src/server/api/routers/`
2. Định nghĩa thủ tục (queries/mutations)
3. Đăng ký router trong `src/server/api/root.ts`

Ví dụ:
```typescript
// src/server/api/routers/user.ts
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      // Logic truy xuất người dùng
      return { id: input.id, name: "Ví dụ" };
    }),
});

// Thêm vào src/server/api/root.ts
import { userRouter } from "./routers/user";

export const appRouter = createTRPCRouter({
  post: postRouter,
  user: userRouter, // Đã thêm
});
```

### Kiểm thử

#### Kiểm thử đơn vị (Vitest)

Tạo tệp kiểm thử trong thư mục `__tests__` với cùng cấu trúc thư mục như đối tượng kiểm thử. Quy ước đặt tên là `*.test.ts` hoặc `*.test.tsx`.

```bash
bun run test        # Chạy tất cả kiểm thử
bun run test:watch  # Chạy kiểm thử ở chế độ theo dõi
```

#### Kiểm thử E2E (Playwright)

Tạo tệp kiểm thử trong thư mục `e2e`. Quy ước đặt tên là `*.spec.ts`.

```bash
bun run test:e2e        # Chạy tất cả kiểm thử E2E
bun run test:e2e:ui     # Chạy kiểm thử ở chế độ UI
```

## Tính năng khác

### Biome (Linter/Formatter)

```bash
bun run check       # Kiểm tra chất lượng code
bun run check:write # Tự động sửa vấn đề
```

### Git Hooks (Lefthook)

Định dạng tự động bằng Biome được thực hiện trước khi commit. Không cần thao tác đặc biệt. Cài đặt có thể thay đổi trong `lefthook.yml`.

## Cấu hình triển khai Vercel

Triển khai Vercel thông thường có thể dễ dàng thực hiện bằng cách cài đặt ứng dụng Vercel trên GitHub, nhưng trong phát triển nhóm, nếu không phải tất cả thành viên đều được tính phí bởi nhóm, quá trình triển khai khi push của các thành viên không được tính phí sẽ thất bại.
Do đó, chúng tôi cho phép triển khai thông qua GitHub Actions sử dụng token do một người phát hành trong Vercel.

### Bật triển khai

Để bật triển khai, bỏ comment các job `deploy_preview` và `deploy_production` trong tệp `.github/workflows/ci_cd.yml`.

### Lấy thông tin Vercel cần thiết

1. Đăng nhập vào bảng điều khiển Vercel
2. Chọn (hoặc tạo) dự án bạn muốn triển khai
3. Trang dự án > "Settings" > "General" > Sao chép "Project ID" (sử dụng làm `VERCEL_PROJECT_ID`)
4. Trang nhóm > "Settings" > "General" > Sao chép "Team ID" (sử dụng làm `VERCEL_ORG_ID`)
5. Lấy token:
   - Đi tới "Account Settings" cá nhân > Tab "Tokens" > Nhấp "Create"
   - Đặt tên cho token (ví dụ: "hoge PJ GitHub CI/CD") và cấp quyền cần thiết
   - Sao chép token đã tạo (sử dụng làm `VERCEL_TOKEN`)

### Thiết lập GitHub Repository Secrets

1. Đi tới trang GitHub repository
2. Chọn "Settings" > "Secrets and variables" > "Actions"
3. Nhấp "New repository secret" và thêm các mục sau:
   - `VERCEL_PROJECT_ID`: Project ID đã sao chép
   - `VERCEL_ORG_ID`: Organization ID đã sao chép
   - `VERCEL_TOKEN`: Token Vercel đã tạo

### Cài đặt quyền cho Dependabot

Để cho phép Dependabot truy cập các bí mật này:

1. Trên trang GitHub repository, chọn "Settings" > "Secrets and variables" > "Dependabot"
2. Nhấp "New repository secret" và tương tự thêm ba bí mật:
   - `VERCEL_PROJECT_ID`
   - `VERCEL_ORG_ID`
   - `VERCEL_TOKEN`

Điều này cung cấp cho cả pipeline CI/CD và Dependabot quyền truy cập cần thiết để triển khai Vercel.

## Người bảo trì

Repository này chủ yếu được quản lý bởi các thành viên sau. Hãy liên hệ với chúng tôi qua Slack, v.v., nếu bạn có bất kỳ câu hỏi nào.

- Kazuma Endo
- Yudai Shiratori 
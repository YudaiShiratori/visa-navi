# Sun* Next.js Dev Template

[日本語](./README.md) | [English](./README.en.md) | Tiếng Việt

## Đây là gì?

Repository này là một template cho phát triển full-stack đảm bảo kiểu dữ liệu (type-safe) sử dụng Next.js (TypeScript).
Dựa trên [T3 Stack](https://create.t3.gg/), bổ sung thêm các tính năng như Cursor Rules files.
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

#### Tính năng
- **Thân thiện với designer**: Tùy chỉnh mà không cần viết code bằng GUI của tweakcn
- **Hiệu quả phát triển**: Chỉ cần sao chép & dán CSS để áp dụng thay đổi cho tất cả component
- **Tương thích AI**: UI được tạo bởi AI tự động tuân theo hệ thống thiết kế
- **Tính nhất quán**: Tất cả component sử dụng design token cho giao diện thống nhất

Xem chi tiết tại trang `/design-system`.

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
git clone git@github.com:sun-asterisk-internal/sun-nextjs-template.git
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

Bằng cách sử dụng tRPC, bạn có thể xây dựng API backend đảm bảo kiểu dữ liệu. Đây là giải thích chi tiết về quy trình phát triển.

#### Khái niệm cơ bản

##### Router
- Định nghĩa nhóm endpoint API
- Quản lý các thủ tục liên quan cùng nhau
- Cải thiện khả năng bảo trì thông qua modularization

##### Procedure (Thủ tục)
- Định nghĩa các thao tác API riêng lẻ (query hoặc mutation)
- **Query**: Thao tác truy xuất dữ liệu (tương đương GET)
- **Mutation**: Thao tác thay đổi dữ liệu (tương đương POST/PUT/DELETE)

##### Context (Ngữ cảnh)
- Dữ liệu chung có sẵn cho mỗi thủ tục
- Chứa thông tin xác thực, kết nối cơ sở dữ liệu, v.v.

##### Middleware
- Chặn xử lý trước và sau khi thực thi thủ tục
- Được sử dụng cho xác thực, logging, validation, v.v.

#### Cấu trúc thư mục và vai trò

```
src/
├── server/
│   └── api/
│       ├── root.ts          # Tích hợp tất cả router
│       ├── trpc.ts          # Cấu hình tRPC cơ bản
│       └── routers/         # Định nghĩa router riêng lẻ
│           ├── user.ts      # API liên quan đến người dùng
│           ├── post.ts      # API liên quan đến bài viết
│           └── auth.ts      # API liên quan đến xác thực
└── trpc/
    ├── react.tsx           # Cấu hình tRPC client cho React
    └── server.ts           # Cấu hình tRPC cho server
```

#### Tạo Router mới

1. **Tạo tệp Router**

```typescript
// src/server/api/routers/user.ts
import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  // Query công khai (không cần xác thực)
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      // Truy xuất người dùng từ cơ sở dữ liệu
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

  // Lấy tất cả người dùng (có phân trang)
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

  // Mutation được bảo vệ (cần xác thực)
  update: protectedProcedure
    .input(z.object({
      id: z.string(),
      name: z.string().optional(),
      email: z.string().email().optional(),
    }))
    .mutation(async ({ input, ctx }) => {
      // Chỉ người dùng đã xác thực mới có thể cập nhật thông tin của mình
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

  // Xóa người dùng
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      // Kiểm tra quyền admin (ví dụ)
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

2. **Đăng ký Router trong root.ts**

```typescript
// src/server/api/root.ts
import { createTRPCRouter } from "./trpc";
import { postRouter } from "./routers/post";
import { userRouter } from "./routers/user";  // Đã thêm

export const appRouter = createTRPCRouter({
  post: postRouter,
  user: userRouter,  // Đã thêm
});

export type AppRouter = typeof appRouter;
```

#### Xác thực và Middleware

**Ví dụ triển khai protectedProcedure:**

```typescript
// src/server/api/trpc.ts
import { TRPCError, initTRPC } from "@trpc/server";
import { getServerAuthSession } from "../auth";

const t = initTRPC.context<Context>().create();

// Middleware kiểm tra xác thực
const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      // Đảm bảo session tồn tại
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});

// Middleware logging
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

#### Sử dụng phía Client

**Sử dụng Query:**

```typescript
// pages/users/[id].tsx
import { api } from "~/trpc/react";

export default function UserPage({ userId }: { userId: string }) {
  // Truy xuất thông tin người dùng
  const { data: user, isLoading, error } = api.user.getById.useQuery({
    id: userId,
  });

  // Truy xuất danh sách người dùng (phân trang)
  const { data: usersData } = api.user.getAll.useQuery({
    page: 1,
    limit: 10,
  });

  if (isLoading) return <div>Đang tải...</div>;
  if (error) return <div>Lỗi: {error.message}</div>;

  return (
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </div>
  );
}
```

**Sử dụng Mutation:**

```typescript
// components/UserUpdateForm.tsx
import { api } from "~/trpc/react";

export default function UserUpdateForm({ userId }: { userId: string }) {
  const utils = api.useUtils();
  
  const updateUser = api.user.update.useMutation({
    onSuccess: () => {
      // Vô hiệu hóa cache và lấy dữ liệu mới nhất
      utils.user.getById.invalidate({ id: userId });
      alert('Cập nhật người dùng thành công!');
    },
    onError: (error) => {
      alert(`Lỗi: ${error.message}`);
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
      {/* Triển khai form */}
      <button 
        type="submit" 
        disabled={updateUser.isPending}
      >
        {updateUser.isPending ? 'Đang cập nhật...' : 'Cập nhật người dùng'}
      </button>
    </form>
  );
}
```

#### Xử lý lỗi

**Định nghĩa lỗi phía server:**

```typescript
import { TRPCError } from "@trpc/server";

// Cách ném lỗi tùy chỉnh
throw new TRPCError({
  code: 'BAD_REQUEST',
  message: 'Dữ liệu đầu vào không hợp lệ',
  cause: validationError, // Đối tượng lỗi gốc
});

// Mã lỗi có sẵn:
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

**Xử lý lỗi phía client:**

```typescript
const { data, error } = api.user.getById.useQuery({ id: "123" });

if (error) {
  // Xử lý theo mã lỗi
  switch (error.data?.code) {
    case 'NOT_FOUND':
      return <div>Không tìm thấy người dùng</div>;
    case 'UNAUTHORIZED':
      return <div>Vui lòng đăng nhập</div>;
    default:
      return <div>Đã xảy ra lỗi: {error.message}</div>;
  }
}
```

#### Validation

**Xác thực đầu vào sử dụng schema Zod:**

```typescript
// Định nghĩa schema chung
const CreateUserSchema = z.object({
  name: z.string().min(1, "Tên là bắt buộc").max(100),
  email: z.string().email("Định dạng email không hợp lệ"),
  age: z.number().min(0).max(150).optional(),
  role: z.enum(['USER', 'ADMIN']).default('USER'),
});

// Sử dụng trong thủ tục
createUser: protectedProcedure
  .input(CreateUserSchema)
  .mutation(async ({ input, ctx }) => {
    // input tự động đảm bảo kiểu dữ liệu
    const user = await ctx.db.user.create({
      data: input,
    });
    return user;
  }),
```

#### Thực hành tốt nhất

1. **Phân chia Router**: Quản lý router riêng biệt theo chức năng
2. **Xác thực đầu vào**: Định nghĩa kiểu nghiêm ngặt với schema Zod
3. **Xử lý lỗi**: Mã trạng thái HTTP và thông báo phù hợp
4. **Xác thực & Phân quyền**: Quản lý tập trung với middleware
5. **Kiểm soát Cache**: Chiến lược cache dữ liệu phía client
6. **Hiệu năng**: Triển khai phân trang và lọc
7. **Kiểm thử**: Kiểm thử đơn vị cho các thủ tục tRPC

#### Khắc phục sự cố

**Khi xảy ra lỗi kiểu:**
- Kiểm tra xem các kiểu có được export trong `src/server/api/root.ts` không
- Xác minh cấu hình client trong `src/trpc/react.tsx`

**Khi xảy ra lỗi xác thực:**
- Kiểm tra xem cấu hình session có được thiết lập đúng không
- Xác minh việc triển khai middleware của `protectedProcedure`

Sử dụng tRPC theo cách này cho phép bạn xây dựng API backend đảm bảo kiểu dữ liệu và có thể mở rộng.

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

## Hỗ trợ Claude Code

Template này hỗ trợ [Claude Code](https://claude.ai/code). Claude Code là một trợ lý mã hóa AI được phát triển bởi Anthropic có thể được sử dụng trực tiếp từ dòng lệnh.

### Thiết lập Claude Code

1. **Cài đặt Claude Code**
   
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

2. **Cài đặt GitHub CLI (Bắt buộc)**
   
   Cần cài đặt GitHub CLI vì các lệnh tùy chỉnh sử dụng GitHub CLI:
   
   ```bash
   # macOS (Homebrew)
   brew install gh
   
   # Ubuntu/Debian
   sudo apt install gh
   
   # Windows (Chocolatey)
   choco install gh
   
   # Các nền tảng khác
   # Tải xuống từ https://cli.github.com/
   ```
   
   Thiết lập xác thực GitHub CLI:
   
   ```bash
   gh auth login
   ```

3. **Thiết lập xác thực**
   ```bash
   claude
   ```
   Cần xác thực khi chạy lần đầu. Có thể xác thực qua Anthropic Console, Claude App (gói Pro/Max), hoặc Amazon Bedrock/Google Vertex AI.

4. **Khởi tạo dự án**
   ```bash
   claude /init
   ```
   Lệnh này tự động tạo tệp CLAUDE.md cho dự án.

### Cách thêm cấu trúc thư mục vào Claude Code

Sau khi hoàn thành thiết lập dự án, chạy prompt sau trong Claude Code:

```
Phân tích cấu trúc thư mục của dự án và cập nhật phần "Project Structure" trong tệp CLAUDE.md với cấu trúc thư mục thực tế hiện tại. Tuân theo các yêu cầu sau:

1. Kiểm tra các tệp và thư mục thực tế và ghi lại cấu trúc chính xác
2. Giải thích ngắn gọn vai trò và mục đích của các tệp chính
3. Nhóm một cách logic để nhà phát triển hiểu
4. Bao gồm tệp kiểm thử, tệp cấu hình và tệp tài liệu
5. Loại trừ các tệp được tạo tự động (.next/, node_modules/, v.v.)

Sau khi cập nhật, cũng cập nhật tệp docs/directory-structure.md tương tự.
```

### Lệnh tùy chỉnh có sẵn

Template này bao gồm các lệnh tùy chỉnh để cải thiện hiệu quả phát triển:

#### Lệnh quy trình làm việc cốt lõi (5)

##### `/create-issue [mô tả vấn đề/yêu cầu]`
**Mục đích**: Tạo GitHub Issues  
**Tham số**: Mô tả cụ thể về vấn đề hoặc yêu cầu tính năng  
**Ví dụ sử dụng**:
```bash
/create-issue "Nút đăng nhập không hoạt động trên mobile Safari"
/create-issue "Thêm tính năng tải lên ảnh đại diện người dùng"
/create-issue "Cập nhật tài liệu cài đặt cho người dùng Windows"
```

##### `/work-on-issue [số Issue]`
**Mục đích**: Thực hiện quy trình 8 giai đoạn để giải quyết issue  
**Tham số**: Số Issue GitHub cần làm việc  
**Ví dụ sử dụng**:
```bash
/work-on-issue 123
/work-on-issue 456
```

##### `/refactor-code [mô tả mã/module mục tiêu]`
**Mục đích**: Tái cấu trúc mã có hệ thống  
**Tham số**: Mô tả mục tiêu tái cấu trúc (đường dẫn tệp, tên module, hoặc chức năng)  
**Ví dụ sử dụng**:
```bash
/refactor-code "auth module"
/refactor-code "src/components/UserProfile.tsx"
/refactor-code "logic kết nối cơ sở dữ liệu"
```

##### `/create-pr [mô tả nội dung PR]`
**Mục đích**: Tạo Pull Request từ các thay đổi hiện tại  
**Tham số**: Mô tả thay đổi sẽ trở thành tiêu đề PR  
**Ví dụ sử dụng**:
```bash
/create-pr "Sửa lỗi xác thực trong form đăng nhập"
/create-pr "Thêm hỗ trợ chế độ tối"
/create-pr "Cải thiện hiệu suất truy vấn cơ sở dữ liệu"
```

##### `/review-pr [số PR]`
**Mục đích**: Đánh giá Pull Request toàn diện  
**Tham số**: Số Pull Request cần đánh giá  
**Ví dụ sử dụng**:
```bash
/review-pr 789
/review-pr 101
```

### Template GitHub

Template này bao gồm các tệp template để tạo Issue và PR có cấu trúc:

#### Template Issue (`.github/ISSUE_TEMPLATE/`)
- **`bug_report.yml`** - Template chi tiết cho báo cáo lỗi
- **`feature_request.yml`** - Template cho yêu cầu tính năng
- **`documentation.yml`** - Template cho cải thiện tài liệu

#### Template PR (`.github/PULL_REQUEST_TEMPLATE/`)
- **`pull_request_template.md`** - Template chuẩn cho Pull Request

Các template này được tham chiếu tự động bởi các lệnh tùy chỉnh của Claude Code, cho phép tạo Issue và PR với chất lượng nhất quán.

### Cách sử dụng cơ bản của Claude Code

1. **Mã hóa tương tác**
   ```bash
   claude
   ```
   Bạn có thể đặt câu hỏi về dự án hoặc yêu cầu sửa mã trong chế độ tương tác.

2. **Chế độ không đầu**
   ```bash
   claude -p "Vui lòng sửa lỗi TypeScript"
   ```
   Bạn có thể thực hiện tác vụ trong chế độ không tương tác.

3. **Tham chiếu tệp**
   ```bash
   # Tham chiếu tệp cụ thể
   > Giải thích việc triển khai @src/components/ui/button.tsx
   
   # Tham chiếu thư mục
   > Cho tôi biết về cấu trúc của @src/app
   ```

### Quy trình làm việc được khuyến nghị

#### Hành trình khách hàng của nhà phát triển
1. **Bắt đầu**: Lập kế hoạch công việc hôm nay với `/start-work`
2. **Tạo Issue**: Định nghĩa yêu cầu rõ ràng với `/create-issue`
3. **Thực hiện phát triển**: Triển khai có hệ thống với `/work-on-issue`
4. **Đánh giá**: Đảm bảo chất lượng với `/review-pr`
5. **Quản lý hàng ngày**: Công việc thường ngày với `/daily-workflow`

#### Các giai đoạn phát triển
1. **Giai đoạn hiểu**: Phân tích yêu cầu và lập kế hoạch
2. **Chuẩn bị môi trường**: Thiết lập môi trường phát triển và tạo nhánh
3. **Giai đoạn điều tra**: Hiểu mã hiện có và bối cảnh
4. **Giai đoạn triển khai**: Tạo mã theo tiêu chuẩn dự án
5. **Đảm bảo chất lượng**: Thực hiện kiểm thử và xác minh chất lượng mã
6. **Tài liệu hóa**: Cập nhật tài liệu và chuẩn bị đánh giá
7. **Đánh giá & Cải thiện**: Phản hồi và cải thiện triển khai
8. **Hoàn thành**: Hợp nhất mã và dọn dẹp

Để biết cách sử dụng chi tiết, tham khảo [tài liệu chính thức của Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview).

## Người bảo trì

Repository này chủ yếu được quản lý bởi các thành viên sau. Hãy liên hệ với chúng tôi qua Slack, v.v., nếu bạn có bất kỳ câu hỏi nào.

- Kazuma Endo
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

## Người bảo trì

Repository này chủ yếu được quản lý bởi các thành viên sau. Hãy liên hệ với chúng tôi qua Slack, v.v., nếu bạn có bất kỳ câu hỏi nào.

- Kazuma Endo
- Yudai Shiratori 
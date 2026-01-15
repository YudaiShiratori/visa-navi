/** @type {import('next').NextConfig} */

// ESLintのno-undefエラーを回避するために明示的にprocessを宣言
/* global process */

const nextConfig = {
  reactStrictMode: true,
  distDir: ".next",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "visa-navi.example.com",
      },
    ],
  },
  env: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    GA_PROPERTY_ID: process.env.GA_PROPERTY_ID,
  },
  typescript: {
    // ビルド時のTypeScriptエラーを警告として扱う
    ignoreBuildErrors: true,
  },
  // Turbopack設定（Next.js 16以降のデフォルト）
  turbopack: {},
  // スクロール復元を有効化
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;

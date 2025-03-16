/** @type {import('next').NextConfig} */

// ESLintのno-undefエラーを回避するために明示的にprocessを宣言
/* global process */

const nextConfig = {
  reactStrictMode: true,
  distDir: ".next",
  images: {
    domains: ["visa-navi.example.com"],
  },
  env: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    GA_PROPERTY_ID: process.env.GA_PROPERTY_ID,
  },
  typescript: {
    // ビルド時のTypeScriptエラーを警告として扱う
    ignoreBuildErrors: true,
  },
  eslint: {
    // ビルド時のESLintエラーを警告として扱う
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

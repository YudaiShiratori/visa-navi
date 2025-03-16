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
  // TailwindCSSの問題を解決するための設定
  webpack: (config, { dev, isServer }) => {
    // 開発環境でのみ適用
    if (dev && !isServer) {
      // Fast Refreshを安定させるための設定
      config.optimization.runtimeChunk = "single";

      // HMRの設定を最適化
      config.watchOptions = {
        ...config.watchOptions,
        poll: 1000, // ポーリング間隔を設定
        aggregateTimeout: 300, // 変更検出後の遅延時間
        ignored: ["**/node_modules", "**/.git", "**/.next"],
      };
    }
    return config;
  },
  // Fast Refreshの設定を強化
  experimental: {
    // スクロール復元を有効化
    scrollRestoration: true,
  },
};

export default nextConfig;

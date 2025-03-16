/** @type {import('next').NextConfig} */

// ESLintのno-undefエラーを回避するために明示的にprocessを宣言
/* global process */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["visa-navi.example.com"],
  },
  env: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    GA_PROPERTY_ID: process.env.GA_PROPERTY_ID,
  },
};

export default nextConfig;

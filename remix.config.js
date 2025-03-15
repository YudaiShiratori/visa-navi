/** @type {import('@remix-run/dev').AppConfig} */
export default {
  cacheDirectory: "./node_modules/.cache/remix",
  ignoredRouteFiles: ["**/.*", "**/*.test.{ts,tsx}"],
  future: {
    v3_fetcherPersist: true,
    v3_lazyRouteDiscovery: true,
    v3_relativeSplatPath: true,
    v3_singleFetch: true,
    v3_throwAbortReason: true,
  },
  publicPath: "/build/",
  assetsBuildDirectory: "public/build",
  mdx: {
    interopBehavior: "require",
    resolve: {
      commonJs: true,
    },
    rehypePlugins: [],
    remarkPlugins: [],
    recmaPlugins: [],
    transformCommonJsImports: true,
    esm: {
      mode: "all",
      development: true,
    },
  },
};

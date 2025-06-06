/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  cacheDir: ".vitest-cache",
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./test/setup-test-env.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: ["node_modules/", "test/", "**/*.d.ts", "**/*.test.{ts,tsx}", "cypress/", ".next/"],
    },
    reporters: ["default", "junit"],
    outputFile: {
      junit: "./test-results/junit.xml",
    },
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    exclude: ["node_modules", ".next/**/*"],

    pool: "threads",
    poolOptions: {
      threads: {
        singleThread: false,
      },
    },

    isolate: false,
    bail: 1,

    testTimeout: 10000,
    hookTimeout: 10000,

    environmentOptions: {
      jsdom: {
        resources: "usable",
      },
    },
  },
});

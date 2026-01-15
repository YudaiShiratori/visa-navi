/// <reference types="vitest" />
/// <reference types="vite/client" />

import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  cacheDir: ".vitest-cache",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src/"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./test/setup-test-env.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "test/",
        "**/*.d.ts",
        "**/*.test.{ts,tsx}",
        "cypress/",
        ".next/",
      ],
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

    testTimeout: 10_000,
    hookTimeout: 10_000,
  },
});

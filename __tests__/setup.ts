import "@testing-library/jest-dom/vitest";

// Jest DOM matchers are already extended by the import above

// Make vi available globally
declare global {
  // eslint-disable-next-line no-var
  var vi: typeof import("vitest")["vi"];
}
globalThis.vi = vi;

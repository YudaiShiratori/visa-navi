import "@testing-library/jest-dom/vitest";
import * as matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

// Add Testing Library matchers
expect.extend(matchers);

// Make vi available globally
declare global {
	// eslint-disable-next-line no-var
	var vi: typeof import("vitest")["vi"];
}
globalThis.vi = vi;

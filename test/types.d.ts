import "@testing-library/jest-dom/vitest";

interface CustomMatchers<R = unknown> {
  toBeInTheDocument(): R;
  toHaveClass(...classNames: string[]): R;
  toBeDisabled(): R;
  toHaveAttribute(attr: string, value?: string): R;
}

declare module "vitest" {
  interface Assertion<T = unknown> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}

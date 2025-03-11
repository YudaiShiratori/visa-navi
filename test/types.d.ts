import "@testing-library/jest-dom/vitest";

declare global {
  namespace Vi {
    interface Assertion {
      toBeInTheDocument(): void;
      toHaveClass(...classNames: string[]): void;
      toBeDisabled(): void;
      toHaveAttribute(attr: string, value?: string): void;
    }
  }
}

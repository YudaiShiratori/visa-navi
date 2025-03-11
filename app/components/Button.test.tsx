import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Button } from "./Button";

describe("Button", () => {
  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies primary variant styles by default", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText("Click me");

    expect(button).toHaveClass("bg-blue-600");
    expect(button).toHaveClass("text-white");
  });

  it("applies secondary variant styles when specified", () => {
    render(<Button variant="secondary">Click me</Button>);
    const button = screen.getByText("Click me");

    expect(button).toHaveClass("bg-purple-600");
    expect(button).toHaveClass("text-white");
  });

  it("applies outline variant styles when specified", () => {
    render(<Button variant="outline">Click me</Button>);
    const button = screen.getByText("Click me");

    expect(button).toHaveClass("bg-transparent");
    expect(button).toHaveClass("border-gray-300");
  });

  it("applies size classes correctly", () => {
    render(<Button size="sm">Small</Button>);
    expect(screen.getByText("Small")).toHaveClass("py-1", "px-3", "text-sm");

    render(<Button size="lg">Large</Button>);
    expect(screen.getByText("Large")).toHaveClass("py-3", "px-6", "text-lg");
  });

  it("applies disabled styles when disabled", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByText("Disabled");

    expect(button).toBeDisabled();
    expect(button).toHaveClass("opacity-50", "cursor-not-allowed");
  });

  it("applies custom className", () => {
    render(<Button className="custom-class">Custom</Button>);
    expect(screen.getByText("Custom")).toHaveClass("custom-class");
  });

  it("sets the correct button type", () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByText("Submit")).toHaveAttribute("type", "submit");
  });
});

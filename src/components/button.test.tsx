import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./button";

describe("Button", () => {
  it("children を正しくレンダリングする", () => {
    render(<Button>クリック</Button>);
    expect(
      screen.getByRole("button", { name: "クリック" })
    ).toBeInTheDocument();
  });

  it("クリックイベントが発火する", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>クリック</Button>);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("disabled の場合クリックイベントが発火しない", () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        クリック
      </Button>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("disabled の場合 disabled 属性が付与される", () => {
    render(<Button disabled>クリック</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  describe("variant", () => {
    it("primary variant のクラスが適用される", () => {
      render(<Button variant="primary">Primary</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("bg-blue-600");
    });

    it("secondary variant のクラスが適用される", () => {
      render(<Button variant="secondary">Secondary</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("bg-purple-600");
    });

    it("outline variant のクラスが適用される", () => {
      render(<Button variant="outline">Outline</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("border");
      expect(button.className).toContain("bg-transparent");
    });
  });

  describe("size", () => {
    it("sm サイズのクラスが適用される", () => {
      render(<Button size="sm">Small</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("py-1");
      expect(button.className).toContain("px-3");
      expect(button.className).toContain("text-sm");
    });

    it("md サイズのクラスが適用される", () => {
      render(<Button size="md">Medium</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("py-2");
      expect(button.className).toContain("px-4");
      expect(button.className).toContain("text-base");
    });

    it("lg サイズのクラスが適用される", () => {
      render(<Button size="lg">Large</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("py-3");
      expect(button.className).toContain("px-6");
      expect(button.className).toContain("text-lg");
    });
  });

  describe("type", () => {
    it("デフォルトは button type", () => {
      render(<Button>Button</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    });

    it("submit type を指定できる", () => {
      render(<Button type="submit">Submit</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
    });

    it("reset type を指定できる", () => {
      render(<Button type="reset">Reset</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("type", "reset");
    });
  });

  it("カスタム className を追加できる", () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("custom-class");
  });
});

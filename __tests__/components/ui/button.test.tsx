import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "~/components/ui/button";

describe("Button Component", () => {
	it("renders correctly with default props", () => {
		render(<Button>Click me</Button>);

		const button = screen.getByRole("button", { name: /click me/i });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass("bg-primary");
	});

	it("applies the correct variant class", () => {
		render(<Button variant="destructive">Destructive</Button>);

		const button = screen.getByRole("button", { name: /destructive/i });
		expect(button).toHaveClass("bg-destructive");
	});

	it("applies the correct size class", () => {
		render(<Button size="sm">Small</Button>);

		const button = screen.getByRole("button", { name: /small/i });
		expect(button).toHaveClass("h-8");
	});

	it("renders as a child component when asChild is true", () => {
		render(
			<Button asChild>
				<a href="https://example.com">Link</a>
			</Button>,
		);

		const link = screen.getByRole("link", { name: /link/i });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "https://example.com");
		expect(link).toHaveClass("inline-flex items-center justify-center gap-2");
	});

	it("handles click events", async () => {
		const handleClick = vi.fn();
		const user = userEvent.setup();

		render(<Button onClick={handleClick}>Click me</Button>);

		const button = screen.getByRole("button", { name: /click me/i });
		await user.click(button);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("is disabled when disabled prop is provided", () => {
		render(<Button disabled>Disabled</Button>);

		const button = screen.getByRole("button", { name: /disabled/i });
		expect(button).toBeDisabled();
		expect(button).toHaveClass("disabled:opacity-50");
	});
});

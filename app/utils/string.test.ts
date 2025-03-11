import { describe, expect, it } from "vitest";

import { toUpperCase, toLowerCase, capitalize, truncate, isValidUrl } from "./string";

describe("string utils", () => {
  describe("toUpperCase", () => {
    it("should convert string to uppercase", () => {
      expect(toUpperCase("hello")).toBe("HELLO");
      expect(toUpperCase("Hello World")).toBe("HELLO WORLD");
      expect(toUpperCase("123")).toBe("123");
      expect(toUpperCase("")).toBe("");
    });
  });

  describe("toLowerCase", () => {
    it("should convert string to lowercase", () => {
      expect(toLowerCase("HELLO")).toBe("hello");
      expect(toLowerCase("Hello World")).toBe("hello world");
      expect(toLowerCase("123")).toBe("123");
      expect(toLowerCase("")).toBe("");
    });
  });

  describe("capitalize", () => {
    it("should capitalize the first letter of a string", () => {
      expect(capitalize("hello")).toBe("Hello");
      expect(capitalize("hello world")).toBe("Hello world");
      expect(capitalize("HELLO")).toBe("HELLO");
      expect(capitalize("123hello")).toBe("123hello");
    });

    it("should handle empty strings", () => {
      expect(capitalize("")).toBe("");
      expect(capitalize(null as unknown as string)).toBe(null);
      expect(capitalize(undefined as unknown as string)).toBe(undefined);
    });
  });

  describe("truncate", () => {
    it("should truncate string if it exceeds max length", () => {
      expect(truncate("Hello World", 5)).toBe("Hello...");
      expect(truncate("Hello", 10)).toBe("Hello");
      expect(truncate("Hello World", 8, "!")).toBe("Hello Wo!");
    });

    it("should handle empty strings", () => {
      expect(truncate("", 5)).toBe("");
      expect(truncate(null as unknown as string, 5)).toBe(null);
    });
  });

  describe("isValidUrl", () => {
    it("should return true for valid URLs", () => {
      expect(isValidUrl("https://example.com")).toBe(true);
      expect(isValidUrl("http://localhost:3000")).toBe(true);
      expect(isValidUrl("https://sub.domain.com/path?query=value#hash")).toBe(true);
    });

    it("should return false for invalid URLs", () => {
      expect(isValidUrl("not-a-url")).toBe(false);
      expect(isValidUrl("http://")).toBe(false);
      expect(isValidUrl("")).toBe(false);
    });
  });
});

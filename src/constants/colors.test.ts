import { describe, expect, it } from "vitest";
import { type RegionId, regionColors, visaStatusColors } from "./colors";

const allRegionIds: RegionId[] = [
  "asia",
  "europe",
  "north_america",
  "south_america",
  "oceania",
  "africa",
  "middle_east",
];

describe("regionColors", () => {
  it("全ての地域IDに対して色が定義されている", () => {
    for (const regionId of allRegionIds) {
      expect(regionColors[regionId]).toBeDefined();
    }
  });

  it("各地域の色定義が必須プロパティを持つ", () => {
    for (const regionId of allRegionIds) {
      const color = regionColors[regionId];
      expect(color.main).toBeDefined();
      expect(color.light).toBeDefined();
      expect(color.hover).toBeDefined();
    }
  });

  it("色コードが有効な形式である", () => {
    const hexColorPattern = /^#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?$/;
    for (const regionId of allRegionIds) {
      const color = regionColors[regionId];
      expect(color.main).toMatch(hexColorPattern);
      expect(color.light).toMatch(hexColorPattern);
      expect(color.hover).toMatch(hexColorPattern);
    }
  });
});

describe("visaStatusColors", () => {
  const visaStatuses = ["visa_free", "evisa", "visa_required"] as const;

  it("全てのビザステータスに色が定義されている", () => {
    for (const status of visaStatuses) {
      expect(visaStatusColors[status]).toBeDefined();
    }
  });

  it("各ステータスの色定義が必須プロパティを持つ", () => {
    for (const status of visaStatuses) {
      const color = visaStatusColors[status];
      expect(color.main).toBeDefined();
      expect(color.light).toBeDefined();
      expect(color.hover).toBeDefined();
    }
  });

  it("visa_free は緑系の色である", () => {
    // 緑系の色は #22c55e (green-500相当)
    expect(visaStatusColors.visa_free.main).toBe("#22c55e");
  });

  it("visa_required は赤系の色である", () => {
    // 赤系の色は #ef4444 (red-500相当)
    expect(visaStatusColors.visa_required.main).toBe("#ef4444");
  });
});

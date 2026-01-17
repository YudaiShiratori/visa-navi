import { describe, expect, it } from "vitest";
import { getRegionDisplayName } from "./region-helper";

describe("getRegionDisplayName", () => {
  it("asia を アジア に変換する", () => {
    expect(getRegionDisplayName("asia")).toBe("アジア");
  });

  it("europe を ヨーロッパ に変換する", () => {
    expect(getRegionDisplayName("europe")).toBe("ヨーロッパ");
  });

  it("north_america を 北米・中米・カリブ に変換する", () => {
    expect(getRegionDisplayName("north_america")).toBe("北米・中米・カリブ");
  });

  it("south_america を 南米 に変換する", () => {
    expect(getRegionDisplayName("south_america")).toBe("南米");
  });

  it("oceania を オセアニア に変換する", () => {
    expect(getRegionDisplayName("oceania")).toBe("オセアニア");
  });

  it("middle_east を 中東 に変換する", () => {
    expect(getRegionDisplayName("middle_east")).toBe("中東");
  });

  it("africa を アフリカ に変換する", () => {
    expect(getRegionDisplayName("africa")).toBe("アフリカ");
  });

  it("未知の地域コードは その他 を返す", () => {
    expect(getRegionDisplayName("unknown")).toBe("その他");
    expect(getRegionDisplayName("")).toBe("その他");
  });
});

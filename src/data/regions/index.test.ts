import { describe, expect, it } from "vitest";
import {
  allRegions,
  getAdjacentCountries,
  getAllCountries,
  getCountriesByRegion,
  getCountryById,
  regionCountries,
  regionMap,
} from "./index";

const VISA_TYPE_REGEX = /^(visa_free|evisa|visa_required)$/;

describe("regionMap", () => {
  it("全ての地域が定義されている", () => {
    expect(regionMap).toHaveProperty("asia");
    expect(regionMap).toHaveProperty("europe");
    expect(regionMap).toHaveProperty("africa");
    expect(regionMap).toHaveProperty("middle_east");
    expect(regionMap).toHaveProperty("north_america");
    expect(regionMap).toHaveProperty("south_america");
    expect(regionMap).toHaveProperty("oceania");
  });

  it("allRegions が regionMap のキーと一致する", () => {
    expect(allRegions).toEqual(Object.keys(regionMap));
  });
});

describe("regionCountries", () => {
  it("全ての地域に国データが存在する", () => {
    for (const region of allRegions) {
      expect(regionCountries[region]).toBeDefined();
      expect(Array.isArray(regionCountries[region])).toBe(true);
      expect(regionCountries[region].length).toBeGreaterThan(0);
    }
  });

  it("各国データが必須フィールドを持つ", () => {
    const allCountries = getAllCountries();
    for (const country of allCountries) {
      expect(country.id).toBeDefined();
      expect(country.name).toBeDefined();
      expect(country.region).toBeDefined();
      expect(country.visaRequirement).toBeDefined();
      expect(country.visaRequirement.type).toMatch(VISA_TYPE_REGEX);
    }
  });
});

describe("getAllCountries", () => {
  it("全ての国を配列で返す", () => {
    const countries = getAllCountries();
    expect(Array.isArray(countries)).toBe(true);
    expect(countries.length).toBeGreaterThan(0);
  });

  it("重複する国IDがない", () => {
    const countries = getAllCountries();
    const ids = countries.map((c) => c.id.toLowerCase());
    const uniqueIds = new Set(ids);
    expect(ids.length).toBe(uniqueIds.size);
  });
});

describe("getCountriesByRegion", () => {
  it("指定した地域の国のみを返す", () => {
    const asiaCountries = getCountriesByRegion("asia");
    expect(asiaCountries.length).toBeGreaterThan(0);
    for (const country of asiaCountries) {
      expect(country.region).toBe("asia");
    }
  });

  it("存在しない地域は空配列を返す", () => {
    const countries = getCountriesByRegion("unknown_region");
    expect(countries).toEqual([]);
  });
});

describe("getCountryById", () => {
  it("IDで国を取得できる", () => {
    const thailand = getCountryById("thailand");
    expect(thailand).toBeDefined();
    expect(thailand?.name).toBe("タイ");
  });

  it("大文字小文字を区別しない", () => {
    const thailand1 = getCountryById("thailand");
    const thailand2 = getCountryById("THAILAND");
    const thailand3 = getCountryById("Thailand");
    expect(thailand1).toEqual(thailand2);
    expect(thailand2).toEqual(thailand3);
  });

  it("存在しないIDはundefinedを返す", () => {
    const country = getCountryById("nonexistent_country_xyz");
    expect(country).toBeUndefined();
  });
});

describe("getAdjacentCountries", () => {
  it("前後の国を取得できる", () => {
    const asiaCountries = getCountriesByRegion("asia");
    if (asiaCountries.length >= 3) {
      const middleCountry = asiaCountries[1];
      const { prev, next } = getAdjacentCountries(middleCountry.id);
      expect(prev).toEqual(asiaCountries[0]);
      expect(next).toEqual(asiaCountries[2]);
    }
  });

  it("最初の国はprevがnull", () => {
    const asiaCountries = getCountriesByRegion("asia");
    if (asiaCountries.length > 0) {
      const firstCountry = asiaCountries[0];
      const { prev, next } = getAdjacentCountries(firstCountry.id);
      expect(prev).toBeNull();
      if (asiaCountries.length > 1) {
        expect(next).toEqual(asiaCountries[1]);
      }
    }
  });

  it("最後の国はnextがnull", () => {
    const asiaCountries = getCountriesByRegion("asia");
    if (asiaCountries.length > 0) {
      const lastCountry = asiaCountries.at(-1);
      if (lastCountry) {
        const { prev, next } = getAdjacentCountries(lastCountry.id);
        expect(next).toBeNull();
        if (asiaCountries.length > 1) {
          expect(prev).toEqual(asiaCountries.at(-2));
        }
      }
    }
  });

  it("存在しない国は prev と next が null", () => {
    const { prev, next } = getAdjacentCountries("nonexistent_country");
    expect(prev).toBeNull();
    expect(next).toBeNull();
  });
});

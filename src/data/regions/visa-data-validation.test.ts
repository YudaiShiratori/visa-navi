import { describe, expect, it } from "vitest";
import { getAllCountries, getCountriesByRegion } from ".";

const VISA_TYPE_REGEX = /^(visa_free|evisa|visa_required)$/;
const URL_REGEX = /^https?:\/\//;
const MOFA_DOMAIN_REGEX = /mofa\.go\.jp/;
const HTTPS_REGEX = /^https:/;

describe("Visa Data Validation (2026年1月更新)", () => {
  describe("Data Structure Validation", () => {
    it("全ての国データが2026年基準のフィールドを満たしている", () => {
      const allCountries = getAllCountries();

      for (const country of allCountries) {
        // 必須フィールドの存在確認
        expect(country.id).toBeDefined();
        expect(country.name).toBeDefined();
        expect(country.region).toBeDefined();
        expect(country.visaRequirement).toBeDefined();

        // ビザタイプの妥当性確認
        expect(country.visaRequirement.type).toMatch(VISA_TYPE_REGEX);

        // 期間が設定されている場合は正の数値であること
        if (country.visaRequirement.duration) {
          expect(country.visaRequirement.duration).toBeGreaterThan(0);
        }

        // 公式リンクがある場合はURLの形式であること
        if (country.officialLinks?.mofa) {
          expect(country.officialLinks.mofa).toMatch(URL_REGEX);
        }
      }
    });

    it("外務省公式リンクが最新の形式になっている", () => {
      const allCountries = getAllCountries();

      for (const country of allCountries) {
        if (country.officialLinks?.mofa) {
          // 外務省のドメインであることを確認
          expect(country.officialLinks.mofa).toMatch(MOFA_DOMAIN_REGEX);
          // HTTPSであることを確認
          expect(country.officialLinks.mofa).toMatch(HTTPS_REGEX);
        }
      }
    });
  });

  describe("Recent Updates Validation", () => {
    it("タイのビザ免除期間が2026年基準で正しく設定されている", () => {
      const thailand = getAllCountries().find((c) => c.id === "thailand");
      expect(thailand).toBeDefined();
      expect(thailand?.visaRequirement.type).toBe("visa_free");
      // 2026年時点での期間を確認
      expect(thailand?.visaRequirement.duration).toBeGreaterThan(0);
    });

    it("ベトナムのビザ政策が2026年基準で正しく設定されている", () => {
      const vietnam = getAllCountries().find((c) => c.id === "vietnam");
      expect(vietnam).toBeDefined();
      expect(vietnam?.visaRequirement.type).toBe("visa_free");
    });

    it("韓国のK-ETAシステムが正しく反映されている", () => {
      const korea = getAllCountries().find((c) => c.id === "korea");
      expect(korea).toBeDefined();

      // K-ETAに関する情報が条件に含まれているかチェック
      const hasKETAInfo = korea?.conditions?.some((c) => c.includes("K-ETA"));
      expect(hasKETAInfo).toBe(true);

      // ビザ免除であることを確認
      expect(korea?.visaRequirement.type).toBe("visa_free");
    });
  });

  describe("Regional Data Consistency", () => {
    it("全ての地域にデータが存在し、空ではない", () => {
      const regions = [
        "asia",
        "europe",
        "north_america",
        "south_america",
        "africa",
        "middle_east",
        "oceania",
      ];

      for (const region of regions) {
        const countries = getCountriesByRegion(region);
        expect(countries.length).toBeGreaterThan(0);

        // 各国の地域フィールドが正しく設定されている
        for (const country of countries) {
          expect(country.region).toBe(region);
        }
      }
    });
  });
});

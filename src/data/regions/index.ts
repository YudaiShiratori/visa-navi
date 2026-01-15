import type { Country } from "../types";
import { africaCountries } from "./africa";
import { asiaCountries } from "./asia";
import { europeCountries } from "./europe";
import { middleEastCountries } from "./middle_east";
import { northAmericaCountries } from "./north_america";
import { oceaniaCountries } from "./oceania";
import { southAmericaCountries } from "./south_america";

// Note: 残りの地域のインポートを追加予定（アフリカ、中東）

export const regionMap = {
  asia: "東・東南アジア",
  europe: "ヨーロッパ",
  africa: "アフリカ",
  middle_east: "中東",
  north_america: "北米",
  south_america: "南米",
  oceania: "オセアニア",
};

export const allRegions = Object.keys(regionMap);

// 各地域の国データをエクスポート
export const regionCountries: Record<string, Country[]> = {
  asia: asiaCountries,
  europe: europeCountries,
  north_america: northAmericaCountries,
  oceania: oceaniaCountries,
  south_america: southAmericaCountries,
  middle_east: middleEastCountries,
  africa: africaCountries,
};

// 全ての国データを取得する関数
export const getAllCountries = (): Country[] => {
  return Object.values(regionCountries).flatMap((countries) => countries);
};

// 地域ごとの国データを取得する関数
export const getCountriesByRegion = (region: string): Country[] => {
  return regionCountries[region] || [];
};

// IDから国データを取得する関数
export const getCountryById = (id: string): Country | undefined => {
  const lowerId = id.toLowerCase();
  return getAllCountries().find(
    (country) => country.id.toLowerCase() === lowerId
  );
};

// 同じリージョン内で前後の国を取得するための関数
export const getAdjacentCountries = (id: string) => {
  const country = getCountryById(id);
  if (!country) return { prev: null, next: null };

  const sameRegionCountries = getCountriesByRegion(country.region);
  const currentIndex = sameRegionCountries.findIndex(
    (c) => c.id.toLowerCase() === id.toLowerCase()
  );

  if (currentIndex === -1) return { prev: null, next: null };

  const prev = currentIndex > 0 ? sameRegionCountries[currentIndex - 1] : null;
  const next =
    currentIndex < sameRegionCountries.length - 1
      ? sameRegionCountries[currentIndex + 1]
      : null;

  return { prev, next };
};

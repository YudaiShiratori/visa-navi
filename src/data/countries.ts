// このファイルは、地域ごとに分割されたファイルにデータが移行されました。
// 後方互換性のために関数をエクスポートします。

import {
  getCountriesByRegion as getRegionCountries,
  getCountryById as getCountry,
  getAdjacentCountries as getAdjacent,
  getAllCountries,
} from "./regions";

import type { Country, VisaRequirement } from "./types";

export type { Country, VisaRequirement };

// 後方互換性のために古い関数をエクスポート
export const countries = getAllCountries();
export const getCountriesByRegion = getRegionCountries;
export const getCountryById = getCountry;
export const getAdjacentCountries = getAdjacent;

export const visaTypeDescriptions = {
  visa_free: "ビザ不要（入国時にパスポートのみで入国可能）",
  evisa: "電子ビザ必要（事前にオンラインでビザ申請が必要）",
  visa_required: "ビザ必要（大使館での申請が必要）",
};

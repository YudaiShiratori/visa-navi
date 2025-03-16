"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import { visaStatusColors } from "../constants/colors";

import type { Country } from "../data/countries";

// ひらがな・カタカナ変換用のマッピング
const kanaMap: { [key: string]: string } = {
  あ: "ア",
  い: "イ",
  う: "ウ",
  え: "エ",
  お: "オ",
  か: "カ",
  き: "キ",
  く: "ク",
  け: "ケ",
  こ: "コ",
  さ: "サ",
  し: "シ",
  す: "ス",
  せ: "セ",
  そ: "ソ",
  た: "タ",
  ち: "チ",
  つ: "ツ",
  て: "テ",
  と: "ト",
  な: "ナ",
  に: "ニ",
  ぬ: "ヌ",
  ね: "ネ",
  の: "ノ",
  は: "ハ",
  ひ: "ヒ",
  ふ: "フ",
  へ: "ヘ",
  ほ: "ホ",
  ま: "マ",
  み: "ミ",
  む: "ム",
  め: "メ",
  も: "モ",
  や: "ヤ",
  ゆ: "ユ",
  よ: "ヨ",
  ら: "ラ",
  り: "リ",
  る: "ル",
  れ: "レ",
  ろ: "ロ",
  わ: "ワ",
  を: "ヲ",
  ん: "ン",
  が: "ガ",
  ぎ: "ギ",
  ぐ: "グ",
  げ: "ゲ",
  ご: "ゴ",
  ざ: "ザ",
  じ: "ジ",
  ず: "ズ",
  ぜ: "ゼ",
  ぞ: "ゾ",
  だ: "ダ",
  ぢ: "ヂ",
  づ: "ヅ",
  で: "デ",
  ど: "ド",
  ば: "バ",
  び: "ビ",
  ぶ: "ブ",
  べ: "ベ",
  ぼ: "ボ",
  ぱ: "パ",
  ぴ: "ピ",
  ぷ: "プ",
  ぺ: "ペ",
  ぽ: "ポ",
};

function convertToComparableString(str: string): string {
  // ひらがなをカタカナに変換
  let result = str;
  Object.entries(kanaMap).forEach(([hiragana, katakana]) => {
    result = result.replace(new RegExp(hiragana, "g"), katakana);
  });
  return result.toLowerCase();
}

interface RegionSearchProps {
  countries: Country[];
}

export default function RegionSearch({ countries }: RegionSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCountries, setFilteredCountries] = useState<Country[]>(countries);

  useEffect(() => {
    if (searchQuery) {
      const normalizedQuery = convertToComparableString(searchQuery.trim());

      // 完全一致、前方一致、部分一致の順で優先度をつける
      const exactMatches: Country[] = [];
      const startsWithMatches: Country[] = [];
      const includesMatches: Country[] = [];

      countries.forEach((country) => {
        const normalizedName = convertToComparableString(country.name);

        if (normalizedName === normalizedQuery) {
          exactMatches.push(country);
        } else if (normalizedName.startsWith(normalizedQuery)) {
          startsWithMatches.push(country);
        } else if (normalizedName.includes(normalizedQuery)) {
          includesMatches.push(country);
        }
      });

      // 優先度順に結合
      setFilteredCountries([...exactMatches, ...startsWithMatches, ...includesMatches]);
    } else {
      setFilteredCountries(countries);
    }
  }, [searchQuery, countries]);

  // ビザタイプごとの国数をカウント
  const visaFreeCount = filteredCountries.filter(
    (c) => c.visaRequirement.type === "visa_free"
  ).length;
  const eVisaCount = filteredCountries.filter((c) => c.visaRequirement.type === "evisa").length;
  const visaRequiredCount = filteredCountries.filter(
    (c) => c.visaRequirement.type === "visa_required"
  ).length;

  return (
    <>
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex overflow-hidden rounded-lg border border-green-200 bg-white shadow-sm">
          <div className="flex w-16 items-center justify-center bg-green-500 text-white">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div className="flex-1 p-4">
            <h3 className="text-sm font-medium text-gray-500">ビザ免除</h3>
            <p className="text-2xl font-bold text-green-600">{visaFreeCount}カ国</p>
          </div>
        </div>

        <div className="flex overflow-hidden rounded-lg border border-blue-200 bg-white shadow-sm">
          <div className="flex w-16 items-center justify-center bg-blue-500 text-white">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <div className="flex-1 p-4">
            <h3 className="text-sm font-medium text-gray-500">電子ビザ</h3>
            <p className="text-2xl font-bold text-blue-600">{eVisaCount}カ国</p>
          </div>
        </div>

        <div className="flex overflow-hidden rounded-lg border border-red-200 bg-white shadow-sm">
          <div className="flex w-16 items-center justify-center bg-red-500 text-white">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex-1 p-4">
            <h3 className="text-sm font-medium text-gray-500">要ビザ</h3>
            <p className="text-2xl font-bold text-red-600">{visaRequiredCount}カ国</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="国名で検索..."
            className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg
            className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <p className="mt-2 text-sm text-gray-500">{filteredCountries.length}カ国が見つかりました</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredCountries.map((country) => {
          // ビザステータスに基づいて色を決定
          const statusColor =
            visaStatusColors[country.visaRequirement.type as keyof typeof visaStatusColors];

          return (
            <Link
              key={country.id}
              href={`/country/${country.id}`}
              className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="h-2" style={{ backgroundColor: statusColor.main }}></div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  {searchQuery && country.name.toLowerCase().includes(searchQuery.toLowerCase())
                    ? highlightMatch(country.name, searchQuery)
                    : country.name}
                </h3>
                <div className="mt-auto flex items-center justify-between">
                  <div
                    className="rounded-full px-2 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: statusColor.light,
                      color: statusColor.main,
                    }}
                  >
                    {country.visaRequirement.type === "visa_free"
                      ? "ビザ免除"
                      : country.visaRequirement.type === "evisa"
                        ? "電子ビザ"
                        : "ビザ必要"}
                  </div>
                  {country.visaRequirement.duration && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-lg font-bold text-gray-700">
                      {country.visaRequirement.duration}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {searchQuery && filteredCountries.length === 0 && (
        <div className="mt-8 rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">
          <p className="text-gray-500">「{searchQuery}」に一致する国が見つかりませんでした</p>
        </div>
      )}
    </>
  );
}

// 検索クエリに一致する部分をハイライト表示する関数
function highlightMatch(text: string, query: string) {
  if (!query) return text;

  const normalizedText = text.toLowerCase();
  const normalizedQuery = query.toLowerCase();
  const index = normalizedText.indexOf(normalizedQuery);

  if (index === -1) return text;

  return (
    <>
      {text.substring(0, index)}
      <span className="bg-yellow-100 font-medium">
        {text.substring(index, index + query.length)}
      </span>
      {text.substring(index + query.length)}
    </>
  );
}

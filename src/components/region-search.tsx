"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { visaStatusColors } from "../constants/colors";

import type { Country } from "../data/types";

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
  let result = str;
  for (const [hiragana, katakana] of Object.entries(kanaMap)) {
    result = result.replace(new RegExp(hiragana, "g"), katakana);
  }
  return result.toLowerCase();
}

function filterCountriesByQuery(
  countries: Country[],
  query: string
): Country[] {
  const normalizedQuery = convertToComparableString(query.trim());
  const exactMatches: Country[] = [];
  const startsWithMatches: Country[] = [];
  const includesMatches: Country[] = [];

  for (const country of countries) {
    const normalizedName = convertToComparableString(country.name);

    if (normalizedName === normalizedQuery) {
      exactMatches.push(country);
    } else if (normalizedName.startsWith(normalizedQuery)) {
      startsWithMatches.push(country);
    } else if (normalizedName.includes(normalizedQuery)) {
      includesMatches.push(country);
    }
  }

  return [...exactMatches, ...startsWithMatches, ...includesMatches];
}

interface RegionSearchProps {
  countries: Country[];
}

export default function RegionSearch({ countries }: RegionSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCountries, setFilteredCountries] =
    useState<Country[]>(countries);

  useEffect(() => {
    if (searchQuery) {
      setFilteredCountries(filterCountriesByQuery(countries, searchQuery));
    } else {
      setFilteredCountries(countries);
    }
  }, [searchQuery, countries]);

  return (
    <>
      <div className="mb-6">
        <div className="relative mx-auto max-w-xl">
          <input
            className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-10 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={(e) => setSearchQuery(e.target.value)}
            onCompositionEnd={(e) => {
              const target = e.target as HTMLInputElement;
              setSearchQuery(target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
              if ("isComposing" in e && e.isComposing) {
                return;
              }
            }}
            placeholder="国名で検索..."
            type="text"
            value={searchQuery}
          />
          <svg
            aria-hidden="true"
            className="absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </div>
        <p className="mt-2 text-center text-gray-500 text-sm">
          {filteredCountries.length}カ国が見つかりました
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredCountries.map((country) => {
          // ビザステータスに基づいて色を決定
          const statusColor =
            visaStatusColors[
              country.visaRequirement.type as keyof typeof visaStatusColors
            ];

          return (
            <Link
              className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              href={`/country/${country.id}`}
              key={country.id}
            >
              <div
                className="h-2"
                style={{ backgroundColor: statusColor.main }}
              />
              <div className="relative flex flex-1 flex-col p-5">
                <h3 className="mr-28 font-medium text-gray-900 text-lg lg:mr-0">
                  {searchQuery &&
                  country.name.toLowerCase().includes(searchQuery.toLowerCase())
                    ? highlightMatch(country.name, searchQuery)
                    : country.name}
                  {country.code && (
                    <span className="ml-2 inline-block align-middle">
                      <span
                        className={`fi fi-${country.code.toLowerCase()}`}
                        style={{
                          width: "20px",
                          height: "15px",
                          display: "inline-block",
                        }}
                      />
                    </span>
                  )}
                </h3>

                <div className="mt-1 mr-28 w-fit lg:mr-0">
                  <div
                    className="rounded-full px-3 py-1 font-medium text-xs"
                    style={{
                      backgroundColor: statusColor.light,
                      color: statusColor.main,
                    }}
                  >
                    {(() => {
                      if (country.visaRequirement.type === "visa_free") {
                        return "ビザなし";
                      }
                      if (country.visaRequirement.type === "evisa") {
                        return "要電子ビザ";
                      }
                      return "要ビザ";
                    })()}
                  </div>
                </div>

                {country.visaRequirement.duration ? (
                  <div className="absolute right-4 bottom-6 flex flex-shrink-0 flex-col items-end">
                    <span className="text-gray-500 text-xs">滞在可能期間</span>
                    <div>
                      <span
                        className="font-bold text-2xl"
                        style={{ color: statusColor.main }}
                      >
                        {country.visaRequirement.duration}
                      </span>
                      <span className="ml-1 text-base text-gray-500">日間</span>
                    </div>
                  </div>
                ) : null}
              </div>
            </Link>
          );
        })}
      </div>

      {searchQuery && filteredCountries.length === 0 && (
        <div className="mt-8 rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">
          <p className="text-gray-500">
            「{searchQuery}」に一致する国が見つかりませんでした
          </p>
        </div>
      )}
    </>
  );
}

// 検索クエリに一致する部分をハイライト表示する関数
function highlightMatch(text: string, query: string) {
  if (!query) {
    return text;
  }

  const normalizedText = text.toLowerCase();
  const normalizedQuery = query.toLowerCase();
  const index = normalizedText.indexOf(normalizedQuery);

  if (index === -1) {
    return text;
  }

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

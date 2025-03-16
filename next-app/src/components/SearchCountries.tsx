"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useMemo, useEffect, useRef } from "react";


import { visaStatusColors } from "../constants/colors";
import { countries } from "../data/countries";
import { sendGAEvent } from "../utils/analytics";

import type { KeyboardEvent } from "react";

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

export function SearchCountries() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  // 画面サイズの検出
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // 検索結果の外側をクリックしたら閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node) && isExpanded) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

  // 選択項目が変更されたときに自動スクロール
  useEffect(() => {
    if (selectedIndex >= 0 && resultsRef.current) {
      const selectedElement = resultsRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [selectedIndex]);

  // 検索結果のフィルタリング
  const filteredCountries = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const normalizedQuery = convertToComparableString(searchQuery.trim());

    // 完全一致、前方一致、部分一致の順で優先度をつける
    const exactMatches: typeof countries = [];
    const startsWithMatches: typeof countries = [];
    const includesMatches: typeof countries = [];

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
    return [...exactMatches, ...startsWithMatches, ...includesMatches].slice(0, 10);
  }, [searchQuery]);

  // 検索ボックスにフォーカスしたとき
  const handleFocus = () => {
    if (searchQuery.trim() && filteredCountries.length > 0) {
      setIsExpanded(true);
    }
  };

  // 検索クエリが変更されたとき
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedIndex(-1);
    setIsExpanded(true);

    // 3文字以上の検索クエリの場合、検索イベントを送信
    if (query.length >= 3) {
      sendGAEvent("search", {
        search_term: query,
      });
    }
  };

  // 国を選択したとき
  const handleCountrySelect = (countryId: string) => {
    setIsExpanded(false);
    setSearchQuery("");
    sendGAEvent("country_selected", { country_id: countryId });
    router.push(`/country/${countryId}`);
  };

  // キーボード操作
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isExpanded || filteredCountries.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev < filteredCountries.length - 1 ? prev + 1 : prev));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && filteredCountries[selectedIndex]) {
          handleCountrySelect(filteredCountries[selectedIndex].id);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsExpanded(false);
        break;
    }
  };

  return (
    <div className="relative" ref={searchRef}>
      <div className="flex items-center">
        <input
          ref={inputRef}
          type="text"
          placeholder="国名で検索..."
          className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 text-sm sm:text-base"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          aria-label="国名を入力"
          aria-autocomplete="list"
          aria-controls="country-search-results"
          aria-owns={
            isExpanded && filteredCountries.length > 0 ? "country-search-results" : undefined
          }
        />
        <svg
          className="absolute right-3 h-5 w-5 text-gray-400"
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

      {isExpanded && filteredCountries.length > 0 && (
        <div
          id="country-search-results"
          ref={resultsRef}
          className={`absolute z-30 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg ${isMobile ? "max-h-[60vh]" : "max-h-[50vh]"} overflow-y-auto`}
          role="listbox"
        >
          {filteredCountries.map((country, index) => (
            <Link
              key={country.id}
              href={`/country/${country.id.toLowerCase()}`}
              className={`flex items-center justify-between border-b border-gray-100 px-4 py-3 hover:bg-gray-50 ${selectedIndex === index ? "bg-blue-50" : ""}`}
              onClick={() => {
                handleCountrySelect(country.id);
                setIsExpanded(false);
              }}
              role="option"
              aria-selected={selectedIndex === index}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <div className="flex-1">
                <div className="text-sm font-medium sm:text-base">
                  {searchQuery && country.name.toLowerCase().includes(searchQuery.toLowerCase())
                    ? highlightMatch(country.name, searchQuery)
                    : country.name}
                </div>
                <div
                  className="mt-1 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium"
                  style={{
                    backgroundColor: visaStatusColors[country.visaRequirement.type].light,
                    color: visaStatusColors[country.visaRequirement.type].main,
                  }}
                >
                  {country.visaRequirement.type === "visa_free" && "ビザ免除"}
                  {country.visaRequirement.type === "evisa" && "電子ビザ"}
                  {country.visaRequirement.type === "visa_required" && "要ビザ"}
                </div>
              </div>
              {country.visaRequirement.duration && (
                <div className="ml-4 text-right">
                  <div className="text-base font-bold text-gray-900 sm:text-lg">
                    {country.visaRequirement.duration}
                    <span className="ml-1 text-xs sm:text-sm">日間</span>
                  </div>
                </div>
              )}
            </Link>
          ))}
        </div>
      )}

      {isExpanded && searchQuery && filteredCountries.length === 0 && (
        <div className="absolute z-30 mt-1 w-full rounded-lg border border-gray-200 bg-white p-4 text-center shadow-lg">
          <p className="text-sm text-gray-500">
            「{searchQuery}」に一致する国が見つかりませんでした
          </p>
        </div>
      )}
    </div>
  );
}

// 検索クエリにマッチする部分をハイライト表示する関数
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

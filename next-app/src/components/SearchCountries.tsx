"use client";

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

// ビザタイプのテキスト表示
const visaTypeText = {
  visa_free: "ビザ免除",
  evisa: "電子ビザ",
  visa_required: "ビザ必須",
};

// ビザタイプのアイコン
const visaTypeIcons = {
  visa_free: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  evisa: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  ),
  visa_required: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  ),
};

export function SearchCountries() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const [, setIsMobile] = useState(false);
  const router = useRouter();

  // 最近の検索を読み込む
  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches");
    if (savedSearches) {
      try {
        setRecentSearches(JSON.parse(savedSearches));
      } catch (e) {
        console.error("Failed to parse recent searches", e);
      }
    }
  }, []);

  // 最近の検索を保存する
  const saveRecentSearch = (countryId: string) => {
    const country = countries.find((c) => c.id === countryId);
    if (!country) return;

    const newRecentSearches = [countryId, ...recentSearches.filter((id) => id !== countryId)].slice(
      0,
      5
    );
    setRecentSearches(newRecentSearches);
    localStorage.setItem("recentSearches", JSON.stringify(newRecentSearches));
  };

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
    } else if (recentSearches.length > 0) {
      // 検索クエリがなく、最近の検索がある場合は表示
      setIsExpanded(true);
    }
  };

  // 検索クエリが変更されたとき
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedIndex(-1);
    setIsExpanded(query.trim().length > 0 || recentSearches.length > 0);

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
    saveRecentSearch(countryId);
    sendGAEvent("country_selected", { country_id: countryId });
    router.push(`/country/${countryId}`);
  };

  // キーボード操作
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isExpanded) return;

    const totalItems = searchQuery.trim() ? filteredCountries.length : recentSearches.length;

    if (totalItems === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev < totalItems - 1 ? prev + 1 : prev));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0) {
          if (searchQuery.trim() && filteredCountries[selectedIndex]) {
            handleCountrySelect(filteredCountries[selectedIndex].id);
          } else if (recentSearches[selectedIndex]) {
            handleCountrySelect(recentSearches[selectedIndex]);
          }
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsExpanded(false);
        break;
    }
  };

  // 最近の検索から国を取得
  const getRecentCountries = () => {
    return recentSearches
      .map((id) => countries.find((country) => country.id === id))
      .filter(Boolean);
  };

  return (
    <div className="relative" ref={searchRef}>
      <div className="flex items-center">
        <div className="relative w-full">
          <input
            ref={inputRef}
            type="text"
            placeholder="国名で検索..."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-10 text-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 sm:text-base"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
            aria-label="国名を入力"
            aria-autocomplete="list"
            aria-controls={isExpanded ? "country-search-results" : undefined}
            aria-activedescendant={
              selectedIndex >= 0 ? `country-option-${selectedIndex}` : undefined
            }
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {searchQuery ? (
              <button
                onClick={() => {
                  setSearchQuery("");
                  inputRef.current?.focus();
                }}
                className="text-gray-400 hover:text-gray-600"
                aria-label="検索をクリア"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            ) : (
              <svg
                className="h-5 w-5 text-gray-400"
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
            )}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div
          id="country-search-results"
          ref={resultsRef}
          className="absolute z-50 mt-2 max-h-80 w-full overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg"
          role="listbox"
          aria-label="検索結果"
          aria-expanded={isExpanded}
        >
          {searchQuery.trim() ? (
            filteredCountries.length > 0 ? (
              <div className="py-2">
                <div className="px-4 py-1 text-xs font-semibold text-gray-500">検索結果</div>
                {filteredCountries.map((country, index) => (
                  <button
                    key={country.id}
                    id={`country-option-${index}`}
                    className={`flex w-full items-center px-4 py-3 text-left transition-colors hover:bg-blue-50 ${
                      selectedIndex === index ? "bg-blue-50" : ""
                    }`}
                    onClick={() => handleCountrySelect(country.id)}
                    role="option"
                    aria-selected={selectedIndex === index}
                  >
                    <div className="mr-3 flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-100">
                      <div className="relative h-6 w-10">
                        <div className="absolute inset-0 flex items-center justify-center">
                          {country.id.toUpperCase().split("").slice(0, 2).join("")}
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="font-medium">{country.name}</div>
                      <div className="text-xs text-gray-500">{country.region}</div>
                    </div>
                    <div
                      className="ml-2 flex items-center rounded-full px-2 py-1 text-xs font-medium text-white"
                      style={{
                        backgroundColor: visaStatusColors[country.visaRequirement.type].main,
                      }}
                    >
                      <span className="mr-1">{visaTypeIcons[country.visaRequirement.type]}</span>
                      {visaTypeText[country.visaRequirement.type]}
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-gray-500">
                「{searchQuery}」に一致する国が見つかりませんでした
              </div>
            )
          ) : recentSearches.length > 0 ? (
            <div className="py-2">
              <div className="px-4 py-1 text-xs font-semibold text-gray-500">最近の検索</div>
              {getRecentCountries().map((country, index) => {
                if (!country) return null;
                return (
                  <button
                    key={country.id}
                    id={`country-option-${index}`}
                    className={`flex w-full items-center px-4 py-3 text-left transition-colors hover:bg-blue-50 ${
                      selectedIndex === index ? "bg-blue-50" : ""
                    }`}
                    onClick={() => handleCountrySelect(country.id)}
                    role="option"
                    aria-selected={selectedIndex === index}
                  >
                    <div className="mr-3 flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-100">
                      <div className="relative h-6 w-10">
                        <div className="absolute inset-0 flex items-center justify-center">
                          {country.id.toUpperCase().split("").slice(0, 2).join("")}
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="font-medium">{country.name}</div>
                      <div className="text-xs text-gray-500">{country.region}</div>
                    </div>
                    <div
                      className="ml-2 flex items-center rounded-full px-2 py-1 text-xs font-medium text-white"
                      style={{
                        backgroundColor: visaStatusColors[country.visaRequirement.type].main,
                      }}
                    >
                      <span className="mr-1">{visaTypeIcons[country.visaRequirement.type]}</span>
                      {visaTypeText[country.visaRequirement.type]}
                    </div>
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

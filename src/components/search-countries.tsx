"use client";

import { useRouter } from "next/navigation";
import type { KeyboardEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { getAllCountries } from "@/data/regions";
import { sendGAEvent } from "../utils/analytics";

// 国データを取得
const countries = getAllCountries();

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
  for (const [hiragana, katakana] of Object.entries(kanaMap)) {
    result = result.replace(new RegExp(hiragana, "g"), katakana);
  }
  return result.toLowerCase();
}

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
    if (!country) {
      return;
    }

    const newRecentSearches = [
      countryId,
      ...recentSearches.filter((id) => id !== countryId),
    ].slice(0, 5);
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
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node) &&
        isExpanded
      ) {
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
      const selectedElement = resultsRef.current.children[
        selectedIndex
      ] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      }
    }
  }, [selectedIndex]);

  // 検索結果のフィルタリング
  const filteredCountries = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }

    const normalizedQuery = convertToComparableString(searchQuery.trim());

    // 完全一致、前方一致、部分一致の順で優先度をつける
    const exactMatches: typeof countries = [];
    const startsWithMatches: typeof countries = [];
    const includesMatches: typeof countries = [];

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

    // 優先度順に結合
    return [...exactMatches, ...startsWithMatches, ...includesMatches].slice(
      0,
      10
    );
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
    setSelectedIndex(-1); // 選択をリセット

    // 検索クエリがある場合のみ検索結果を表示
    if (query.trim().length > 0) {
      setIsExpanded(true);
    } else if (recentSearches.length > 0) {
      // 検索クエリがなく、最近の検索がある場合は表示
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }

    // 3文字以上の検索クエリの場合、検索イベントを送信
    if (query.length >= 3) {
      sendGAEvent("search", {
        search_term: query,
      });
    }
  };

  // 国を選択したとき
  const handleCountrySelect = (countryId: string) => {
    saveRecentSearch(countryId);
    setIsExpanded(false);
    router.push(`/country/${countryId}`);
  };

  // キーボード操作
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if ("isComposing" in e && e.isComposing) {
      return;
    }

    if (!isExpanded) {
      return;
    }

    const results =
      filteredCountries.length > 0 ? filteredCountries : getRecentCountries();
    const maxIndex = results.length - 1;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex <= maxIndex) {
          handleCountrySelect(results[selectedIndex].id);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsExpanded(false);
        break;
      default:
        break;
    }
  };

  // 最近検索した国を取得
  const getRecentCountries = () => {
    return recentSearches
      .map((id) => countries.find((c) => c.id === id))
      .filter((c) => c !== undefined) as typeof countries;
  };

  // 検索結果のハイライト表示
  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) {
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
  };

  const recentCountries = getRecentCountries();

  return (
    <div className="relative w-full max-w-xl" ref={searchRef}>
      <div className="relative">
        <input
          aria-activedescendant={
            selectedIndex >= 0 ? `result-${selectedIndex}` : undefined
          }
          aria-autocomplete="list"
          aria-controls="search-results"
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pr-10 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          onChange={(e) => handleSearch(e.target.value)}
          onCompositionEnd={(e) => {
            const target = e.target as HTMLInputElement;
            handleSearch(target.value);
          }}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          placeholder="国名で検索..."
          ref={inputRef}
          type="text"
          value={searchQuery}
        />
        <button
          aria-label={searchQuery ? "検索をクリア" : "検索"}
          className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          onClick={() => {
            if (searchQuery) {
              handleSearch("");
              inputRef.current?.focus();
            }
          }}
          type="button"
        >
          {searchQuery ? (
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              className="h-5 w-5"
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
          )}
        </button>
      </div>

      {isExpanded && (
        <div
          className="absolute z-[100] mt-1 max-h-96 w-full overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg"
          id="search-results"
          ref={resultsRef}
          role="listbox"
        >
          {(() => {
            if (filteredCountries.length > 0) {
              return (
                <>
                  <div className="border-gray-100 border-b px-4 py-2 font-medium text-gray-500 text-xs">
                    検索結果
                  </div>
                  <ul>
                    {filteredCountries.map((country, index) => (
                      <li key={country.id}>
                        <button
                          aria-selected={index === selectedIndex}
                          className={`w-full cursor-pointer px-4 py-3 text-left hover:bg-gray-50 ${
                            index === selectedIndex ? "bg-gray-50" : ""
                          }`}
                          id={`result-${index}`}
                          onClick={() => handleCountrySelect(country.id)}
                          onKeyDown={(e) => {
                            if ("isComposing" in e && e.isComposing) {
                              return;
                            }
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              handleCountrySelect(country.id);
                            }
                          }}
                          role="option"
                          type="button"
                        >
                          <div className="flex items-center">
                            {country.code && (
                              <span className="mr-2 flex-shrink-0">
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
                            <div className="flex-1">
                              <div className="font-medium text-gray-900">
                                {highlightMatch(country.name, searchQuery)}
                              </div>
                            </div>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </>
              );
            }
            if (recentCountries.length > 0) {
              return (
                <>
                  <div className="border-gray-100 border-b px-4 py-2 font-medium text-gray-500 text-xs">
                    最近の検索
                  </div>
                  <ul>
                    {recentCountries.map((country, index) => (
                      <li key={country.id}>
                        <button
                          aria-selected={index === selectedIndex}
                          className={`w-full cursor-pointer px-4 py-3 text-left hover:bg-gray-50 ${
                            index === selectedIndex ? "bg-gray-50" : ""
                          }`}
                          id={`result-${index}`}
                          onClick={() => handleCountrySelect(country.id)}
                          onKeyDown={(e) => {
                            if ("isComposing" in e && e.isComposing) {
                              return;
                            }
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              handleCountrySelect(country.id);
                            }
                          }}
                          role="option"
                          type="button"
                        >
                          <div className="flex items-center">
                            {country.code && (
                              <span className="mr-2 flex-shrink-0">
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
                            <div className="flex-1">
                              <div className="font-medium text-gray-900">
                                {country.name}
                              </div>
                            </div>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </>
              );
            }
            return (
              <div className="p-4 text-center text-gray-500 text-sm">
                検索結果がありません
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}

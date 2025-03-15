import { Link } from "@remix-run/react";
import { useState, useMemo } from "react";

import { visaStatusColors } from "~/constants/colors";
import { countries } from "~/data/countries";
import { sendGAEvent } from "~/utils/analytics";

// ひらがな・カタカナ変換用のマッピング
const kanaMap: { [key: string]: string } = {
  あ: "ア",
  い: "イ",
  う: "ウ",
  え: "エ",
  お: "オ",
  // ... 他のひらがな・カタカナのマッピング
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

  const filteredCountries = useMemo(() => {
    if (!searchQuery) return [];

    const normalizedQuery = convertToComparableString(searchQuery);

    return countries
      .filter((country) => {
        const normalizedName = convertToComparableString(country.name);
        return normalizedName.includes(normalizedQuery);
      })
      .slice(0, 5); // 最初の5件のみ表示
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    // 3文字以上の検索クエリの場合、検索イベントを送信
    if (query.length >= 3) {
      sendGAEvent("search", {
        search_term: query,
      });
    }
  };

  const handleCountrySelect = (countryName: string) => {
    // 国選択イベントを送信
    sendGAEvent("select_country", {
      country_name: countryName,
    });
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="国名で検索..."
          className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-10"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsExpanded(true)}
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
        <div className="absolute z-50 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
          {filteredCountries.map((country) => (
            <Link
              key={country.id}
              to={`/map/country/${country.id.toLowerCase()}`}
              className="flex items-center justify-between border-b border-gray-100 px-4 py-3 hover:bg-gray-50"
              onClick={() => {
                handleCountrySelect(country.name);
                setIsExpanded(false);
              }}
            >
              <div className="flex-1">
                <div className="font-medium">{country.name}</div>
                <div
                  className="mt-1 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
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
                  <div className="text-lg font-bold text-gray-900">
                    {country.visaRequirement.duration}
                    <span className="ml-1 text-sm">日間</span>
                  </div>
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

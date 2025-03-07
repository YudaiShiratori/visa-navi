import { Link } from "@remix-run/react";
import { useState } from "react";

import { visaStatusColors } from "~/constants/colors";

import { ClientOnly } from "./client-only";
import { WorldMap } from "./world-map";

import type { Country } from "~/data/countries";

interface CountrySelectorProps {
  region: string;
  countries: Country[];
}

type VisaFilter = "all" | "visa_free" | "evisa" | "visa_required";

export function CountrySelector({ region, countries }: CountrySelectorProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [visaFilter, setVisaFilter] = useState<VisaFilter>("all");
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const filteredCountries = countries
    .filter((country) => {
      // 検索フィルター
      const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase());

      // ビザ要件フィルター
      const matchesVisa = visaFilter === "all" || country.visaRequirement.type === visaFilter;

      return matchesSearch && matchesVisa;
    })
    .sort((a, b) => {
      // 常に名前でソート
      return a.name.localeCompare(b.name);
    });

  // ビザタイプごとの国数をカウント
  const visaTypeCounts = {
    visa_free: countries.filter((c) => c.visaRequirement.type === "visa_free").length,
    evisa: countries.filter((c) => c.visaRequirement.type === "evisa").length,
    visa_required: countries.filter((c) => c.visaRequirement.type === "visa_required").length,
  };

  return (
    <div className="space-y-10">
      <div className="relative mx-auto aspect-[2/1] w-full max-w-4xl overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl">
        <ClientOnly>
          <WorldMap region={region} countries={countries} />
        </ClientOnly>
      </div>

      {/* ビザタイプ統計 */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {[
          { type: "visa_free", label: "ビザ免除", color: visaStatusColors.visa_free },
          { type: "evisa", label: "電子ビザ", color: visaStatusColors.evisa },
          { type: "visa_required", label: "要ビザ", color: visaStatusColors.visa_required },
        ].map((item) => (
          <button
            key={item.type}
            className="flex w-full items-center space-x-4 rounded-xl bg-white p-4 text-left shadow-md transition-transform hover:scale-105 hover:transform"
            style={{ borderLeft: `4px solid ${item.color.main}` }}
            onClick={() => setVisaFilter(item.type as VisaFilter)}
            aria-label={`${item.label}でフィルター`}
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full"
              style={{ backgroundColor: `${item.color.light}50` }}
            >
              <svg
                className="h-6 w-6"
                style={{ color: item.color.main }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {item.type === "visa_free" && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                )}
                {item.type === "evisa" && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                )}
                {item.type === "visa_required" && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                )}
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{item.label}</h3>
              <p className="text-2xl font-bold" style={{ color: item.color.main }}>
                {visaTypeCounts[item.type as keyof typeof visaTypeCounts]}カ国
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* 検索・フィルターUI */}
      <div className="rounded-xl bg-white p-6 shadow-lg">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
          <div className="w-full flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="国名で検索..."
                className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute left-3 top-3 h-5 w-5 text-gray-400"
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
          </div>
        </div>

        {/* 検索結果カウント */}
        <div className="mt-4 text-sm text-gray-600">
          {filteredCountries.length}カ国が見つかりました
          {visaFilter !== "all" &&
            ` (${
              visaFilter === "visa_free"
                ? "ビザ免除"
                : visaFilter === "evisa"
                  ? "電子ビザ"
                  : "要ビザ"
            })`}
          {searchQuery && ` "${searchQuery}" で検索`}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCountries.map((country) => (
          <Link
            key={country.id}
            to={`/map/country/${country.id.toLowerCase()}`}
            className="group relative transform overflow-hidden rounded-xl bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            style={{
              boxShadow:
                hoveredCountry === country.id
                  ? `0 20px 25px -5px ${visaStatusColors[country.visaRequirement.type].main}30`
                  : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              borderTop: `4px solid ${visaStatusColors[country.visaRequirement.type].main}`,
            }}
            onMouseEnter={() => setHoveredCountry(country.id)}
            onMouseLeave={() => setHoveredCountry(null)}
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-gray-900">{country.name}</h3>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span
                      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                      style={{
                        backgroundColor: visaStatusColors[country.visaRequirement.type].light,
                        color: visaStatusColors[country.visaRequirement.type].main,
                      }}
                    >
                      {country.visaRequirement.type === "visa_free" && "ビザ免除"}
                      {country.visaRequirement.type === "evisa" && "電子ビザ"}
                      {country.visaRequirement.type === "visa_required" && "要ビザ"}
                    </span>

                    {country.visaRequirement.evisaAvailable && (
                      <span
                        className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                        style={{
                          backgroundColor: visaStatusColors.evisa.light,
                          color: visaStatusColors.evisa.main,
                        }}
                      >
                        電子ビザ利用可
                      </span>
                    )}
                  </div>
                </div>

                {country.visaRequirement.duration && (
                  <div className="text-center">
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold text-white"
                      style={{
                        backgroundColor: visaStatusColors[country.visaRequirement.type].main,
                      }}
                    >
                      {country.visaRequirement.duration}
                    </div>
                    <div className="mt-1 text-xs font-medium text-gray-600">日間</div>
                  </div>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="text-sm text-gray-600">
                  {country.conditions && country.conditions.length > 0 && (
                    <div className="flex items-center">
                      <svg
                        className="mr-1 h-4 w-4 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {country.conditions.length}件の条件
                    </div>
                  )}
                </div>
                <div className="flex items-center font-medium text-blue-600 group-hover:text-blue-800">
                  詳細を見る
                  <svg
                    className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

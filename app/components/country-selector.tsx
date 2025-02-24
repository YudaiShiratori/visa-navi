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
  const [sortBy, setSortBy] = useState<"name" | "duration">("name");

  const filteredCountries = countries
    .filter((country) => {
      // 検索フィルター
      const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase());

      // ビザ要件フィルター
      const matchesVisa = visaFilter === "all" || country.visaRequirement.type === visaFilter;

      return matchesSearch && matchesVisa;
    })
    .sort((a, b) => {
      // ソート
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else {
        return (b.visaRequirement.duration || 0) - (a.visaRequirement.duration || 0);
      }
    });

  return (
    <div className="space-y-8">
      <div className="relative mx-auto aspect-[2/1] w-full max-w-3xl overflow-hidden rounded-2xl bg-blue-50 shadow-lg">
        <ClientOnly>
          <WorldMap region={region} countries={countries} />
        </ClientOnly>
      </div>

      {/* 検索・フィルターUI */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex-1">
          <input
            type="text"
            placeholder="国名で検索..."
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <select
            className="rounded-lg border border-gray-300 px-4 py-2"
            value={visaFilter}
            onChange={(e) => setVisaFilter(e.target.value as VisaFilter)}
          >
            <option value="all">すべてのビザ要件</option>
            <option value="visa_free">ビザ免除</option>
            <option value="evisa">電子ビザ</option>
            <option value="visa_required">要ビザ</option>
          </select>
          <select
            className="rounded-lg border border-gray-300 px-4 py-2"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "name" | "duration")}
          >
            <option value="name">名前順</option>
            <option value="duration">滞在可能期間順</option>
          </select>
        </div>
      </div>

      {/* 検索結果カウント */}
      <div className="text-sm text-gray-600">{filteredCountries.length}カ国が見つかりました</div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCountries.map((country) => (
          <Link
            key={country.id}
            to={`/map/country/${country.id.toLowerCase()}`}
            className="group relative overflow-hidden rounded-xl p-6 shadow transition-all hover:shadow-lg"
            style={{
              backgroundColor: visaStatusColors[country.visaRequirement.type].light,
              borderColor: visaStatusColors[country.visaRequirement.type].main,
              borderWidth: "1px",
            }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold">{country.name}</h3>
                  {country.visaRequirement.duration && (
                    <div
                      className="text-lg font-bold"
                      style={{ color: visaStatusColors[country.visaRequirement.type].main }}
                    >
                      {country.visaRequirement.duration}
                      <span className="ml-0.5 text-sm">日間</span>
                    </div>
                  )}
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
              <svg
                className="h-5 w-5 text-gray-400 transition-colors group-hover:text-gray-900"
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
          </Link>
        ))}
      </div>
    </div>
  );
}

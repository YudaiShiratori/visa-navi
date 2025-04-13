"use client";

import { useState } from "react";

import type { Country } from "../data/types";

interface VisaInfoCardProps {
  country: Country;
}

export function VisaInfoCard({ country }: VisaInfoCardProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>("conditions");

  const visaTypeText = {
    visa_free: "ビザ免除",
    evisa: "電子ビザ",
    visa_required: "ビザ必須",
  };

  // ビザステータスに応じた色を設定
  const statusColors = {
    visa_free: {
      bg: "#63B3ED", // 明るい青
      light: "#EBF8FF",
      icon: "✓",
    },
    evisa: {
      bg: "#F6AD55", // オレンジ
      light: "#FFFAF0",
      icon: "📱",
    },
    visa_required: {
      bg: "#FC8181", // 赤
      light: "#FFF5F5",
      icon: "🔒",
    },
  };

  // セクションの展開/折りたたみを切り替える
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  // セクションが展開されているかどうかを確認
  const isSectionExpanded = (section: string) => {
    return expandedSection === section;
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
      {/* ヘッダー - 国名と地域 */}
      <div
        className="relative bg-gradient-to-r from-[#007AFF] to-[#0066DD] px-6 py-6 sm:px-8 sm:py-8"
        style={{
          backgroundImage: `linear-gradient(to right, ${statusColors[country.visaRequirement.type].bg}, ${statusColors[country.visaRequirement.type].bg}CC)`,
        }}
      >
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <h1 className="text-xl font-bold text-white sm:text-3xl">
            {country.code && (
              <span className="mr-2 inline-block align-middle">
                <span
                  className={`fi fi-${country.code.toLowerCase()}`}
                  style={{ width: "30px", height: "22px", display: "inline-block" }}
                ></span>
              </span>
            )}
            {country.name}
          </h1>
          <div className="rounded-full bg-white bg-opacity-20 px-3 py-1 text-sm text-white sm:px-4 sm:py-2">
            {country.region}
          </div>
        </div>
      </div>

      {/* ビザステータス */}
      <div className="border-b border-gray-100 px-6 py-6 sm:px-8 sm:py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center">
            <div
              className="mr-4 flex h-14 w-14 items-center justify-center rounded-full text-2xl sm:h-16 sm:w-16 sm:text-3xl"
              style={{ backgroundColor: statusColors[country.visaRequirement.type].light }}
            >
              {statusColors[country.visaRequirement.type].icon}
            </div>
            <div>
              <div className="text-sm text-gray-500 sm:text-base">ビザ種別</div>
              <div
                className="text-lg font-bold sm:text-xl"
                style={{ color: statusColors[country.visaRequirement.type].bg }}
              >
                {visaTypeText[country.visaRequirement.type]}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-sm text-gray-500 sm:text-base">滞在可能期間</div>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-gray-800 sm:text-4xl">
                {country.visaRequirement.duration}
              </span>
              <span className="ml-1 text-lg text-gray-600 sm:text-xl">日間</span>
            </div>
          </div>
        </div>

        {/* 目的タグ */}
        {country.visaRequirement.purpose && (
          <div className="mt-4 flex flex-wrap justify-center gap-2 sm:mt-6 sm:gap-3">
            {country.visaRequirement.purpose.map((p) => (
              <span
                key={p}
                className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 sm:px-4 sm:py-1.5 sm:text-base"
              >
                {p === "tourism" ? "🏖️ 観光" : p === "business" ? "💼 商用" : "✈️ 乗り継ぎ"}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* 詳細情報 - アコーディオンスタイル */}
      <div className="px-6 py-4 sm:px-8 sm:py-6">
        {/* 入国条件 - 常に最初に表示し、デフォルトで開く */}
        {country.conditions && country.conditions.length > 0 && (
          <div className="mb-4 overflow-hidden rounded-lg border border-gray-200 transition-all duration-300">
            <button
              className="flex w-full items-center justify-between bg-gray-50 px-4 py-3 text-left hover:bg-gray-100"
              onClick={() => toggleSection("conditions")}
              aria-expanded={isSectionExpanded("conditions")}
            >
              <h2 className="flex items-center text-lg font-semibold text-gray-800">
                <svg
                  className="mr-2 h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                入国条件
              </h2>
              <svg
                className={`h-5 w-5 transform text-gray-500 transition-transform ${
                  isSectionExpanded("conditions") ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isSectionExpanded("conditions") && (
              <div className="p-4">
                <ul className="space-y-2">
                  {country.conditions.map((condition, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-1 text-green-500">✓</span>
                      <span className="text-gray-700">{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* 補足・注意事項 - 2番目に表示し、デフォルトで閉じる */}
        {country.notes && country.notes.length > 0 && (
          <div className="mb-4 overflow-hidden rounded-lg border border-yellow-200 bg-yellow-50 transition-all duration-300">
            <button
              className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-yellow-100"
              onClick={() => toggleSection("notes")}
              aria-expanded={isSectionExpanded("notes")}
            >
              <h2 className="flex items-center text-lg font-semibold text-yellow-800">
                <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                補足・注意事項
              </h2>
              <svg
                className={`h-5 w-5 transform text-yellow-600 transition-transform ${
                  isSectionExpanded("notes") ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isSectionExpanded("notes") && (
              <div className="p-4">
                <ul className="space-y-2">
                  {country.notes.map((note, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-1 text-yellow-600">⚠️</span>
                      <span className="text-yellow-700">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* 公式リンク */}
        {country.officialLinks && Object.keys(country.officialLinks).length > 0 && (
          <div className="mb-4 overflow-hidden rounded-lg border border-gray-200 transition-all duration-300">
            <button
              className="flex w-full items-center justify-between bg-gray-50 px-4 py-3 text-left hover:bg-gray-100"
              onClick={() => toggleSection("links")}
              aria-expanded={isSectionExpanded("links")}
            >
              <h2 className="flex items-center text-lg font-semibold text-gray-800">
                <svg
                  className="mr-2 h-5 w-5 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                公式リンク
              </h2>
              <svg
                className={`h-5 w-5 transform text-gray-500 transition-transform ${
                  isSectionExpanded("links") ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isSectionExpanded("links") && (
              <div className="p-4">
                <div className="space-y-3">
                  {Object.entries(country.officialLinks).map(([key, url], index) => (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center rounded-lg border border-gray-200 bg-white p-3 text-blue-600 transition-all hover:bg-blue-50 hover:text-blue-800 hover:shadow"
                    >
                      <span className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                        {key === "mofa"
                          ? "🏛️"
                          : key === "embassy"
                            ? "🏢"
                            : key === "k_eta"
                              ? "📱"
                              : "🔗"}
                      </span>
                      <span className="font-medium">
                        {key === "mofa"
                          ? "外務省"
                          : key === "embassy"
                            ? "大使館"
                            : key === "k_eta"
                              ? "K-ETA申請"
                              : key}
                      </span>
                      <svg
                        className="ml-auto h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 最終更新日 */}
      <div className="border-t border-gray-100 bg-gray-50 px-6 py-3 text-center text-xs text-gray-500">
        最終更新日: {new Date(country.lastUpdated).toLocaleDateString("ja-JP")}
      </div>
    </div>
  );
}

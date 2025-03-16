"use client";

import type { Country } from "../data/countries";

interface VisaInfoCardProps {
  country: Country;
}

export function VisaInfoCard({ country }: VisaInfoCardProps) {
  const visaTypeText = {
    visa_free: "ビザ免除",
    evisa: "電子ビザ",
    visa_required: "ビザ必須",
  };

  // ビザステータスに応じた色を設定
  const statusColors = {
    visa_free: "#63B3ED", // 明るい青
    evisa: "#F6AD55", // オレンジ
    visa_required: "#FC8181", // 赤
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg">
      {/* ヘッダー */}
      <div className="relative bg-gradient-to-r from-[#007AFF] to-[#0066DD] px-6 py-8 sm:px-8 sm:py-10">
        <h1 className="text-md text-center font-bold text-white sm:text-3xl">{country.name}</h1>
      </div>

      {/* ビザステータス */}
      <div className="border-b border-gray-100 px-6 py-8 sm:px-8">
        <div className="text-center">
          <div className="mb-3">
            <span
              className="rounded-full px-4 py-1.5 text-base font-medium text-white sm:px-5 sm:py-2 sm:text-lg"
              style={{ backgroundColor: statusColors[country.visaRequirement.type] }}
            >
              {visaTypeText[country.visaRequirement.type]}
            </span>
          </div>
          <div className="text-4xl font-bold text-gray-800 sm:text-5xl">
            {country.visaRequirement.duration}日間
          </div>
          {country.visaRequirement.purpose && (
            <div className="mt-4 flex flex-wrap justify-center gap-2 sm:mt-5 sm:gap-3">
              {country.visaRequirement.purpose.map((p) => (
                <span
                  key={p}
                  className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 sm:px-4 sm:py-1.5 sm:text-base"
                >
                  {p === "tourism" ? "観光" : p === "business" ? "商用" : "乗り継ぎ"}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 詳細情報 */}
      <div className="px-6 py-8 sm:px-8">
        {/* 条件 */}
        {country.conditions && country.conditions.length > 0 && (
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-gray-800 sm:text-xl">入国条件</h2>
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

        {/* 必要書類 */}
        {country.documents && country.documents.length > 0 && (
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-gray-800 sm:text-xl">必要書類</h2>
            <ul className="space-y-2">
              {country.documents.map((document, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-500">📄</span>
                  <span className="text-gray-700">{document}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 注意事項 */}
        {country.notes && (
          <div className="mb-8 rounded-lg bg-yellow-50 p-4">
            <h2 className="mb-2 text-lg font-semibold text-yellow-800 sm:text-xl">注意事項</h2>
            <p className="text-yellow-700">{country.notes}</p>
          </div>
        )}

        {/* 公式リンク */}
        {country.officialLinks && Object.keys(country.officialLinks).length > 0 && (
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-800 sm:text-xl">公式リンク</h2>
            <div className="space-y-2">
              {Object.entries(country.officialLinks).map(([key, url], index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 hover:underline"
                >
                  <span className="mr-2">🔗</span>
                  {key === "mofa" ? "外務省" : key === "embassy" ? "大使館" : key}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { format } from "date-fns";
import { ja } from "date-fns/locale";
import type { Country } from "~/data/countries";

type VisaInfoCardProps = {
  country: Country;
};

export function VisaInfoCard({ country }: VisaInfoCardProps) {
  const visaTypeText = {
    visa_free: "ビザ免除",
    evisa: "電子ビザ",
    visa_required: "ビザ必須",
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg dark:bg-gray-800">
      {/* ヘッダー */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-16 dark:from-blue-800 dark:to-blue-900">
        <h1 className="text-center text-4xl font-bold text-white">{country.name}</h1>
        <p className="mt-2 text-center text-lg text-white/80">首都: {country.capital}</p>
      </div>

      {/* ビザステータス */}
      <div className="border-b border-gray-200 px-6 py-8 dark:border-gray-700">
        <div className="text-center">
          <div className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
            {visaTypeText[country.visaRequirement.type]}
          </div>
          <div className="text-5xl font-bold text-gray-900 dark:text-white">
            {country.visaRequirement.duration}日間
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {country.visaRequirement.purpose.map((p) => (
              <span key={p} className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {p === "tourism" ? "観光" : p === "business" ? "商用" : "乗り継ぎ"}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 必要書類 */}
      <div className="border-b border-gray-200 px-6 py-6 dark:border-gray-700">
        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">必要書類</h2>
        <ul className="space-y-2">
          {country.documents.map((doc, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <span className="text-green-500">✓</span> {doc}
            </li>
          ))}
        </ul>
      </div>

      {/* 条件 */}
      <div className="border-b border-gray-200 px-6 py-6 dark:border-gray-700">
        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">入国条件</h2>
        <ul className="space-y-2">
          {country.conditions.map((condition, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <span className="text-blue-500">•</span> {condition}
            </li>
          ))}
        </ul>
      </div>

      {/* 注意事項 */}
      {country.notes && (
        <div className="border-b border-gray-200 px-6 py-6 dark:border-gray-700">
          <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">注意事項</h2>
          <ul className="space-y-2">
            {country.notes.map((note, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="text-yellow-500">!</span> {note}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* リンク */}
      <div className="space-y-2 bg-gray-50 px-6 py-4 dark:bg-gray-900">
        <a
          href={country.officialLinks.mofa}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg border border-gray-200 bg-white p-4 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          外務省の公式情報を確認する →
        </a>
        {country.officialLinks.embassy && (
          <a
            href={country.officialLinks.embassy}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border border-gray-200 bg-white p-4 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            大使館のウェブサイトを確認する →
          </a>
        )}
      </div>
    </div>
  );
} 
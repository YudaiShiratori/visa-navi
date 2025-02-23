import type { Country } from "~/data/countries";

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
        <h1 className="text-center text-md font-bold text-white sm:text-3xl">{country.name}</h1>
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
                <span key={p} className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 sm:px-4 sm:py-1.5 sm:text-base">
                  {p === "tourism" ? "観光" : p === "business" ? "商用" : "乗り継ぎ"}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 条件 */}
      {country.conditions && country.conditions.length > 0 && (
        <div className="border-b border-gray-100 px-6 py-8 sm:px-8">
          <h2 className="mb-4 text-xl font-bold text-gray-800 sm:mb-5 sm:text-2xl">必要条件</h2>
          <ul className="space-y-3">
            {country.conditions.map((condition, i) => (
              <li key={i} className="flex items-start gap-2 text-base text-gray-700 sm:gap-3 sm:text-lg">
                <span className="mt-1 text-blue-500">•</span>
                {condition}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 必要書類 */}
      {country.documents && country.documents.length > 0 && (
        <div className="border-b border-gray-100 px-6 py-8 sm:px-8">
          <h2 className="mb-4 text-xl font-bold text-gray-800 sm:mb-5 sm:text-2xl">必要書類</h2>
          <ul className="space-y-3">
            {country.documents.map((doc, i) => (
              <li key={i} className="flex items-start gap-2 text-base text-gray-700 sm:gap-3 sm:text-lg">
                <span className="mt-1 text-green-500">✓</span>
                {doc}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 注意事項 */}
      {country.notes && country.notes.length > 0 && (
        <div className="border-b border-gray-100 px-6 py-8 sm:px-8">
          <h2 className="mb-4 text-xl font-bold text-gray-800 sm:mb-5 sm:text-2xl">注意事項</h2>
          <ul className="space-y-3">
            {country.notes.map((note, i) => (
              <li key={i} className="flex items-start gap-2 text-base text-gray-700 sm:gap-3 sm:text-lg">
                <span className="mt-1 text-yellow-500">!</span>
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* リンク */}
      <div className="space-y-2 bg-gray-50 px-6 py-6 sm:px-8">
        <a
          href={country.officialLinks?.mofa}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg bg-white p-3 text-base font-medium text-blue-600 shadow-sm transition hover:bg-blue-50 sm:p-4 sm:text-lg"
        >
          外務省の公式情報を確認する →
        </a>
        {country.officialLinks?.embassy && (
          <a
            href={country.officialLinks.embassy}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg bg-white p-3 text-base font-medium text-blue-600 shadow-sm transition hover:bg-blue-50 sm:p-4 sm:text-lg"
          >
            大使館のウェブサイトを確認する →
          </a>
        )}
      </div>
    </div>
  );
}

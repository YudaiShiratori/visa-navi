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

  // ビザステータスに応じた色を設定
  const statusColors = {
    visa_free: "#63B3ED",     // 明るい青
    evisa: "#F6AD55",         // オレンジ
    visa_required: "#FC8181"  // 赤
  };

  return (
    <div className="overflow-hidden rounded-xl bg-blue-50 shadow-lg">
      {/* ヘッダー */}
      <div className="relative bg-gradient-to-r from-[#007AFF] to-[#0066DD] px-6 py-16">
        <h1 className="text-center text-4xl font-bold text-white">{country.name}</h1>
        <p className="mt-2 text-center text-lg text-white/90">首都: {country.capital}</p>
      </div>

      {/* ビザステータス */}
      <div className="border-b border-blue-100 px-6 py-8">
        <div className="text-center">
          <div className="mb-2 text-2xl font-semibold text-gray-700">
            <span 
              className="rounded-full px-3 py-1 text-sm text-white"
              style={{ backgroundColor: statusColors[country.visaRequirement.type] }}
            >
              {visaTypeText[country.visaRequirement.type]}
            </span>
          </div>
          <div className="text-5xl font-bold text-gray-700">
            {country.visaRequirement.duration}日間
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {country.visaRequirement.purpose.map((p) => (
              <span key={p} className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                {p === "tourism" ? "観光" : p === "business" ? "商用" : "乗り継ぎ"}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 必要書類 */}
      <div className="border-b border-blue-100 px-6 py-6">
        <h2 className="mb-4 text-lg font-semibold text-gray-700">必要書類</h2>
        <ul className="space-y-2">
          {country.documents.map((doc, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-600">
              <span className="text-green-500">✓</span> {doc}
            </li>
          ))}
        </ul>
      </div>

      {/* 条件 */}
      <div className="border-b border-blue-100 px-6 py-6">
        <h2 className="mb-4 text-lg font-semibold text-gray-700">入国条件</h2>
        <ul className="space-y-2">
          {country.conditions.map((condition, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-600">
              <span className="text-blue-500">•</span> {condition}
            </li>
          ))}
        </ul>
      </div>

      {/* 注意事項 */}
      {country.notes && (
        <div className="border-b border-blue-100 px-6 py-6">
          <h2 className="mb-4 text-lg font-semibold text-gray-700">注意事項</h2>
          <ul className="space-y-2">
            {country.notes.map((note, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-600">
                <span className="text-yellow-500">!</span> {note}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* リンク */}
      <div className="space-y-2 bg-white/50 px-6 py-4">
        <a
          href={country.officialLinks.mofa}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg border border-blue-100 bg-white p-4 transition hover:bg-blue-50"
        >
          外務省の公式情報を確認する →
        </a>
        {country.officialLinks.embassy && (
          <a
            href={country.officialLinks.embassy}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border border-blue-100 bg-white p-4 transition hover:bg-blue-50"
          >
            大使館のウェブサイトを確認する →
          </a>
        )}
      </div>
    </div>
  );
} 
import Link from "next/link";

import { SearchCountries } from "../../components/SearchCountries";
import { visaStatusColors } from "../../constants/colors";
import { getCountriesByRegion } from "../../data/countries";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "世界地図から検索 | ビザナビ",
  description:
    "世界地図から国を選択して、日本国籍保持者向けのビザ要件を確認できます。各国のビザ免除、電子ビザ、ビザ必須などの情報を一目で確認。",
  openGraph: {
    title: "世界地図から検索 | ビザナビ",
    description:
      "世界地図から国を選択して、日本国籍保持者向けのビザ要件を確認できます。各国のビザ免除、電子ビザ、ビザ必須などの情報を一目で確認。",
    images: [
      {
        url: "/api/og?title=世界地図から検索",
        width: 1200,
        height: 630,
        alt: "世界地図から検索",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "世界地図から検索 | ビザナビ",
    description:
      "世界地図から国を選択して、日本国籍保持者向けのビザ要件を確認できます。各国のビザ免除、電子ビザ、ビザ必須などの情報を一目で確認。",
    images: ["/api/og?title=世界地図から検索"],
  },
};

export default function MapPage() {
  // 地域ごとの国リスト
  const regions = [
    { id: "asia", name: "アジア" },
    { id: "europe", name: "ヨーロッパ" },
    { id: "north_america", name: "北米" },
    { id: "south_america", name: "南米" },
    { id: "oceania", name: "オセアニア" },
    { id: "africa", name: "アフリカ" },
    { id: "middle_east", name: "中東" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-4 text-center text-3xl font-bold text-gray-800">世界地図から検索</h1>
        <p className="text-center text-gray-600">
          国名を検索するか、地域から国を選択して日本国籍保持者向けのビザ情報を確認できます。
        </p>
      </div>

      <div className="mb-8">
        <SearchCountries />
      </div>

      <div className="mb-12">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">ビザステータス凡例</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <div
              className="mr-2 h-4 w-4 rounded-full"
              style={{ backgroundColor: visaStatusColors.visa_free.main }}
            ></div>
            <span className="text-sm text-gray-700">ビザ免除</span>
          </div>
          <div className="flex items-center">
            <div
              className="mr-2 h-4 w-4 rounded-full"
              style={{ backgroundColor: visaStatusColors.evisa.main }}
            ></div>
            <span className="text-sm text-gray-700">電子ビザ</span>
          </div>
          <div className="flex items-center">
            <div
              className="mr-2 h-4 w-4 rounded-full"
              style={{ backgroundColor: visaStatusColors.visa_required.main }}
            ></div>
            <span className="text-sm text-gray-700">ビザ必要</span>
          </div>
        </div>
      </div>

      <div>
        {regions.map((region) => {
          const regionCountries = getCountriesByRegion(region.id);

          if (regionCountries.length === 0) return null;

          return (
            <div key={region.id} className="mb-10">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">{region.name}</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {regionCountries.map((country) => {
                  // ビザステータスに基づいて色を決定
                  const statusColor =
                    visaStatusColors[country.visaRequirement.type as keyof typeof visaStatusColors];

                  return (
                    <Link
                      key={country.id}
                      href={`/country/${country.id}`}
                      className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
                    >
                      <div className="h-2" style={{ backgroundColor: statusColor.main }}></div>
                      <div className="flex flex-1 flex-col p-4">
                        <h3 className="mb-2 text-lg font-medium text-gray-900">{country.name}</h3>
                        <div className="mt-auto flex flex-col gap-2">
                          <div
                            className="rounded-full px-2 py-1 text-xs font-medium"
                            style={{
                              backgroundColor: statusColor.light,
                              color: statusColor.main,
                            }}
                          >
                            {country.visaRequirement.type === "visa_free"
                              ? "ビザなしで入国可能"
                              : country.visaRequirement.type === "evisa"
                                ? "ビザの事前取得が必要（電子ビザ可）"
                                : "ビザの事前取得が必要"}
                          </div>
                          {country.visaRequirement.duration && (
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500">滞在可能期間:</span>
                              <div
                                className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold"
                                style={{
                                  backgroundColor: statusColor.light,
                                  color: statusColor.main,
                                }}
                              >
                                {country.visaRequirement.duration}
                              </div>
                              <span className="text-xs text-gray-500">日間</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

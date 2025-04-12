import Link from "next/link";
import { notFound } from "next/navigation";

import { visaStatusColors } from "../../../constants/colors";
import { regionNames, regionDescriptions } from "../../../constants/regions";
import { getCountriesByRegion } from "../../../data/regions";

import type { Metadata } from "next";

interface RegionParams {
  params: {
    region: string;
  };
}

export async function generateMetadata({ params }: RegionParams): Promise<Metadata> {
  const { region } = params;
  const regionName = regionNames[region as keyof typeof regionNames];

  if (!regionName) {
    return {
      title: "地域が見つかりません",
      description: "指定された地域の情報は見つかりませんでした。",
    };
  }

  return {
    title: `${regionName}のビザ情報 | ビザナビ`,
    description: `${regionName}の国々の日本国籍保持者向けビザ要件、滞在可能期間、入国条件などの情報。`,
    openGraph: {
      title: `${regionName}のビザ情報 | ビザナビ`,
      description: `${regionName}の国々の日本国籍保持者向けビザ要件、滞在可能期間、入国条件などの情報。`,
      images: [`/api/og?title=${encodeURIComponent(`${regionName}のビザ情報`)}`],
    },
  };
}

export default function RegionPage({ params }: RegionParams) {
  const { region } = params;
  const regionName = regionNames[region as keyof typeof regionNames];
  const regionDescription = regionDescriptions[region as keyof typeof regionDescriptions];

  if (!regionName) {
    notFound();
  }

  const countries = getCountriesByRegion(region);

  if (countries.length === 0) {
    notFound();
  }

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-center">
          <Link href="/map" className="mr-2 flex items-center text-blue-600 hover:text-blue-800">
            <svg
              className="mr-1 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            地図に戻る
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-center text-3xl font-bold text-transparent md:text-4xl">
            {regionName}のビザ情報
          </h1>
          <p className="mt-2 text-center text-gray-600">{regionDescription}</p>
        </div>

        <div className="mb-8">
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {countries.map((country) => {
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
    </div>
  );
}

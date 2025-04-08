import Link from "next/link";
import { notFound } from "next/navigation";

import RegionSearch from "../../../components/RegionSearch";
import { getCountriesByRegion } from "../../../data/countries";

import type { Metadata } from "next";

// 地域名のマッピング
const regionNames: Record<string, string> = {
  asia: "アジア",
  europe: "ヨーロッパ",
  north_america: "北米",
  south_america: "南米",
  oceania: "オセアニア",
  africa: "アフリカ",
  middle_east: "中東",
};

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const regionId = params.id;
  const regionName = regionNames[regionId] || "不明な地域";

  return {
    title: `${regionName}のビザ情報 | ビザナビ`,
    description: `${regionName}の国々の日本国籍保持者向けビザ要件、滞在可能期間、入国条件などの情報。`,
    openGraph: {
      title: `${regionName}のビザ情報 | ビザナビ`,
      description: `${regionName}の国々の日本国籍保持者向けビザ要件、滞在可能期間、入国条件などの情報。`,
      images: [`/api/og?title=${encodeURIComponent(`${regionName}のビザ情報`)}`],
    },
    metadataBase: new URL("https://visa-navi.example.com"),
  };
}

export default async function RegionPage({ params }: Props) {
  const regionId = params.id;
  const regionName = regionNames[regionId];

  // 地域が存在しない場合は404
  if (!regionName) {
    notFound();
  }

  const allCountries = getCountriesByRegion(regionId);

  // 国が見つからない場合
  if (allCountries.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-[#007AFF] shadow-sm transition-all hover:bg-[#E8F0FF] hover:shadow"
          >
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            地域選択に戻る
          </Link>
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            {regionName}の国情報
          </h1>
          <p className="mb-8 text-gray-600">この地域の国情報は現在ありません。</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-[#007AFF] shadow-sm transition-all hover:bg-[#E8F0FF] hover:shadow"
        >
          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          地域選択に戻る
        </Link>
      </div>

      <div className="mb-6 text-center">
        <h1 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
          {regionName}のビザ情報
        </h1>
        <p className="text-gray-600">日本国籍保持者向けの最新ビザ要件情報</p>
      </div>

      <RegionSearch countries={allCountries} />
    </div>
  );
}

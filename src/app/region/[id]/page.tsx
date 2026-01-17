import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RegionSearch from "../../../components/region-search";
import { getCountriesByRegion } from "../../../data/regions";

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
      images: [
        `/api/og?title=${encodeURIComponent(`${regionName}のビザ情報`)}`,
      ],
    },
    metadataBase: new URL("https://visa-navi.vercel.app"),
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
      <div className="py-8 md:py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-8 flex items-center">
            <Link
              className="mr-2 flex items-center text-blue-600 hover:text-blue-800"
              href="/"
            >
              <svg
                aria-hidden="true"
                className="mr-1 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
              地域選択に戻る
            </Link>
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-bold text-3xl text-gray-900 md:text-4xl">
              {regionName}の国情報
            </h1>
            <p className="mb-8 text-gray-600">
              この地域の国情報は現在ありません。
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-center">
          <Link
            className="mr-2 flex items-center text-blue-600 hover:text-blue-800"
            href="/"
          >
            <svg
              aria-hidden="true"
              className="mr-1 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
            地域選択に戻る
          </Link>
        </div>

        <div className="mb-6 text-center">
          <h1 className="mb-2 font-bold text-3xl text-gray-900 md:text-4xl">
            {regionName}のビザ情報
          </h1>
          <p className="text-gray-600">日本国籍保持者向けの最新ビザ要件情報</p>
        </div>

        <RegionSearch countries={allCountries} />
      </div>
    </div>
  );
}

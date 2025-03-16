import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import RegionSearch from "../../../components/RegionSearch";
import { getCountriesByRegion } from "../../../data/countries";

import type { Metadata } from "next";

// 地域名のマッピング
const regionNames: Record<string, string> = {
  asia: "アジア",
  europe: "ヨーロッパ",
  "north-america": "北米",
  "south-america": "南米",
  oceania: "オセアニア",
  africa: "アフリカ",
  "middle-east": "中東",
};

// 地域の説明
const regionDescriptions: Record<string, string> = {
  asia: "タイ、ベトナム、インドネシア、中東諸国など多様な文化と歴史の地域",
  europe: "フランス、イタリア、スペインなど歴史的な観光地が豊富な地域",
  "north-america": "アメリカ、カナダなど広大な自然と都市が魅力の地域",
  "south-america": "ブラジル、ペルー、アルゼンチンなど多様な文化と自然の地域",
  oceania: "オーストラリア、ニュージーランドなど美しい自然が広がる地域",
  africa: "エジプト、モロッコ、南アフリカなど多様な文化と自然の地域",
  "middle-east": "アラブ首長国連邦、サウジアラビアなど歴史と現代が融合する地域",
};

// 地域ごとの地図画像パス
const regionMapImages: Record<string, string> = {
  asia: "/images/maps/asia.png",
  europe: "/images/maps/europe.png",
  "north-america": "/images/maps/north-america.png",
  "south-america": "/images/maps/south-america.png",
  oceania: "/images/maps/oceania.png",
  africa: "/images/maps/africa.png",
  "middle-east": "/images/maps/middle-east.png",
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
  };
}

export default function RegionPage({ params }: Props) {
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

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <h1 className="mb-4 text-3xl font-bold">{regionName}のビザ情報</h1>
          <p className="mb-6 text-gray-600">{regionDescriptions[regionId]}</p>

          <div className="mb-6 flex items-center">
            <div className="mr-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-4 border-blue-100">
              <Image
                src="/images/japan-passport.png"
                alt="日本のパスポート"
                width={60}
                height={60}
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold">日本国籍保持者向け</h2>
              <p className="text-sm text-gray-600">外務省の情報に基づいた最新のビザ要件</p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            {regionMapImages[regionId] && (
              <Image
                src={regionMapImages[regionId]}
                alt={`${regionName}の地図`}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
        </div>
      </div>

      <RegionSearch countries={allCountries} />
    </div>
  );
}

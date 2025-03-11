import { json, type LoaderFunctionArgs , MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { CountrySelector } from "~/components/country-selector";
import { Header } from "~/components/header";
import { type RegionId } from "~/constants/colors";
import { getCountriesByRegion } from "~/data/countries";


// 有効なリージョンのリスト
const validRegions = ["asia", "europe", "americas", "oceania", "africa", "middle-east"];

// リージョン名の日本語マッピング
const regionNameMap: Record<string, string> = {
  asia: "アジア",
  europe: "ヨーロッパ",
  americas: "南北アメリカ",
  oceania: "オセアニア",
  africa: "アフリカ",
  "middle-east": "中東",
};

export const meta: MetaFunction = ({ params }) => {
  const region = params.region || "";
  const regionName = regionNameMap[region] || region;
  const title = `${regionName}のビザ情報 | ビザ免除情報チェッカー`;
  const description = `日本人旅行者向けの${regionName}地域のビザ情報。${regionName}の国々のビザ要件、滞在可能日数、入国条件などを確認できます。`;
  const url = `https://visa-navi.example.com/map/${region}`;

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: `https://visa-navi.example.com/images/regions/${region}.jpg` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    {
      name: "twitter:image",
      content: `https://visa-navi.example.com/images/regions/${region}.jpg`,
    },
    { tagName: "link", rel: "canonical", href: url },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const region = params.region;

  // リージョンの検証
  if (!region || !validRegions.includes(region)) {
    throw new Response("無効なです", { status: 404 });
  }

  const countries = getCountriesByRegion(region);
  return json({ region: region as RegionId, countries });
}

export default function RegionRoute() {
  const { region, countries } = useLoaderData<typeof loader>();
  const regionName = regionNameMap[region] || region;

  return (
    <div>
      <Header />
      <div className="py-8">
        <div className="mb-8">
          <Link to="/" className="text-sm text-blue-600 hover:text-blue-800">
            ← 地域選択に戻る
          </Link>
        </div>
        <h1 className="mb-6 text-center text-3xl font-bold">{regionName}のビザ情報</h1>
        <CountrySelector region={region} countries={countries} />
      </div>

      {/* JSON-LD 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `${regionName}のビザ情報`,
            description: `日本人旅行者向けの${regionName}地域のビザ情報。${regionName}の国々のビザ要件、滞在可能日数、入国条件などを確認できます。`,
            url: `https://visa-navi.example.com/map/${region}`,
            isPartOf: {
              "@type": "WebSite",
              name: "ビザ免除情報チェッカー",
              url: "https://visa-navi.example.com",
            },
          }),
        }}
      />
    </div>
  );
}

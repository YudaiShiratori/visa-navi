import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { VisaInfoCard } from "../components/visa-info-card";
import { getCountryById } from "../data/countries";

// 有効なリージョンのリスト
const validRegions = ["asia", "europe", "americas", "oceania", "africa", "middle-east"];

export async function loader({ params }: LoaderFunctionArgs) {
  const { region, country: countryId } = params;
  console.log("Loading country:", countryId, "in region:", region);

  // リージョンの検証
  if (!region || !validRegions.includes(region)) {
    throw new Response("無効な地域です", { status: 404 });
  }

  if (!countryId) {
    throw new Response("国が指定されていません", { status: 404 });
  }

  // 国IDの形式を検証（2文字以上の英数字のみ）
  if (!/^[a-z0-9]{2,}$/.test(countryId.toLowerCase())) {
    throw new Response("無効な国IDです", { status: 404 });
  }

  const country = getCountryById(countryId.toLowerCase());
  console.log("Found country:", country);

  if (!country) {
    throw new Response("指定された国は存在しません", { status: 404 });
  }

  // 国が指定されたリージョンに属しているか確認
  if (country.region !== region) {
    throw new Response("指定された国は選択された地域に属していません", { status: 404 });
  }

  return json({ country });
}

export default function CountryRoute() {
  const { country } = useLoaderData<typeof loader>();
  console.log("Rendering country:", country);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          to={`/map/${country.region}`}
          className="inline-flex items-center rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-[#007AFF] shadow-sm transition-all hover:bg-[#E8F0FF] hover:shadow"
        >
          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          地域選択に戻る
        </Link>
      </div>
      <VisaInfoCard country={country} />
    </div>
  );
}

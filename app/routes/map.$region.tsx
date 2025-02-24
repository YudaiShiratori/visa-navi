import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { CountrySelector } from "~/components/country-selector";
import { Header } from "~/components/header";
import { type RegionId } from "~/constants/colors";
import { getCountriesByRegion } from "~/data/countries";

// 有効なリージョンのリスト
const validRegions = ["asia", "europe", "americas", "oceania", "africa", "middle-east"];

export async function loader({ params }: LoaderFunctionArgs) {
  const region = params.region;

  // リージョンの検証
  if (!region || !validRegions.includes(region)) {
    throw new Response("無効な地域です", { status: 404 });
  }

  const countries = getCountriesByRegion(region);
  return json({ region: region as RegionId, countries });
}

export default function RegionRoute() {
  const { region, countries } = useLoaderData<typeof loader>();

  return (
    <div>
      <Header />
      <div className="py-8">
        <div className="mb-8">
          <Link to="/map" className="text-sm text-blue-600 hover:text-blue-800">
            ← 地域選択に戻る
          </Link>
        </div>
        <CountrySelector region={region} countries={countries} />
      </div>
    </div>
  );
}

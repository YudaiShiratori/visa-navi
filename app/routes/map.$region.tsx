import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { CountrySelector } from "~/components/country-selector";
import { getCountriesByRegion } from "~/data/countries";

export async function loader({ params }: LoaderFunctionArgs) {
  const region = params.region;
  if (!region) {
    throw new Response("地域が指定されていません", { status: 404 });
  }

  const countries = getCountriesByRegion(region);
  if (countries.length === 0) {
    throw new Response("指定された地域は存在しません", { status: 404 });
  }

  return json({ region, countries });
}

export default function RegionRoute() {
  const { region, countries } = useLoaderData<typeof loader>();

  return (
    <div className="py-8">
      <div className="mb-8">
        <Link
          to="/map"
          className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          ← 地域選択に戻る
        </Link>
      </div>
      <CountrySelector region={region} countries={countries} />
    </div>
  );
}

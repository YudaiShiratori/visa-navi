import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { VisaInfoCard } from "~/components/visa-info-card";
import { getCountryById } from "~/data/countries";

export async function loader({ params }: LoaderFunctionArgs) {
  const { country: countryId } = params;
  if (!countryId) {
    throw new Response("国が指定されていません", { status: 404 });
  }

  const country = getCountryById(countryId);
  if (!country) {
    throw new Response("指定された国は存在しません", { status: 404 });
  }

  return json({ country });
}

export default function CountryRoute() {
  const { country } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          to={`/map/${country.region}`}
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          ← 国選択に戻る
        </Link>
      </div>
      <VisaInfoCard country={country} />
    </div>
  );
} 
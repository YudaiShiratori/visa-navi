import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { VisaInfoCard } from "../components/visa-info-card";
import { getCountryById } from "../data/countries";

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

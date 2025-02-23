import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { VisaInfoCard } from "../components/visa-info-card";
import { getCountryById } from "../data/countries";
import { Header } from "../components/header";

export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;
  console.log('Loading country:', id);

  if (!id) {
    throw new Response("国が指定されていません", { status: 404 });
  }

  // 国IDの形式を検証（2文字以上の英数字のみ）
  if (!/^[a-z0-9]{2,}$/.test(id.toLowerCase())) {
    throw new Response("無効な国IDです", { status: 404 });
  }

  const country = getCountryById(id.toLowerCase());
  console.log('Found country:', country);

  if (!country) {
    throw new Response("指定された国は存在しません", { status: 404 });
  }

  return json({ country });
}

export default function CountryRoute() {
  const { country } = useLoaderData<typeof loader>();
  console.log('Rendering country:', country);

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            to={`/map/${country.region}`}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            ← 地域選択に戻る
          </Link>
        </div>
        <VisaInfoCard country={country} />
      </div>
    </div>
  );
} 
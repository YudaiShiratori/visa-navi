import Link from "next/link";
import { notFound } from "next/navigation";

import { visaStatusColors } from "@/constants/colors";

import { getCountryById } from "../../../../data/countries";

import type { Metadata } from "next";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const country = getCountryById(params.id);

  if (!country) {
    return {
      title: "国が見つかりません",
      description: "指定された国の情報は見つかりませんでした。",
    };
  }

  return {
    title: `${country.name}のビザ情報 | ビザナビ`,
    description: `日本国籍保持者向け${country.name}のビザ要件、滞在可能期間、入国条件などの情報。`,
    openGraph: {
      title: `${country.name}のビザ情報 | ビザナビ`,
      description: `日本国籍保持者向け${country.name}のビザ要件、滞在可能期間、入国条件などの情報。`,
      images: [`/api/og?title=${encodeURIComponent(`${country.name}のビザ情報`)}`],
    },
  };
}

export default function CountryPage({ params }: Props) {
  const country = getCountryById(params.id);

  if (!country) {
    notFound();
  }

  // ビザステータスに基づいて色を決定
  const statusColor =
    visaStatusColors[country.visaRequirement.type as keyof typeof visaStatusColors];

  return (
    <div className="mt-8 py-8 md:py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-8 flex items-center">
          <Link href="/map" className="mr-2 flex items-center text-blue-600 hover:text-blue-800">
            <svg
              className="mr-1 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            地図に戻る
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-center text-3xl font-bold text-transparent md:text-4xl">
            {country.name}のビザ情報
          </h1>
          <p className="mt-2 text-center text-gray-600">日本国籍保持者向けビザ情報</p>
        </div>

        <div className="overflow-hidden rounded-xl bg-white shadow-lg">
          <div className="h-3" style={{ backgroundColor: statusColor.main }}></div>

          <div className="p-6">
            <div
              className="mb-6 rounded-lg border-2 p-4"
              style={{
                borderColor: visaStatusColors[country.visaRequirement.type].main,
                backgroundColor: visaStatusColors[country.visaRequirement.type].light,
              }}
            >
              <div className="flex items-center">
                <div
                  className="mr-4 flex h-12 w-12 items-center justify-center rounded-full"
                  style={{
                    backgroundColor:
                      country.visaRequirement.type === "visa_free"
                        ? visaStatusColors.visa_free.main
                        : "#ef4444",
                    color: "white",
                  }}
                >
                  {country.visaRequirement.type === "visa_free" ? "✓" : "!"}
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold"
                    style={{
                      color:
                        country.visaRequirement.type === "visa_free"
                          ? visaStatusColors.visa_free.main
                          : "#ef4444",
                    }}
                  >
                    {country.visaRequirement.type === "visa_free"
                      ? "ビザなしで入国可能"
                      : "ビザの事前取得が必要"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {country.visaRequirement.type === "visa_free"
                      ? "パスポートのみで入国できます"
                      : country.visaRequirement.evisaAvailable
                        ? "🌐 電子ビザ（e-Visa）での申請が必要です"
                        : "大使館または領事館でビザを申請する必要があります"}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6 rounded-lg bg-blue-50 p-4">
              <h3 className="mb-2 text-lg font-semibold text-blue-800">滞在可能期間</h3>
              <p className="text-blue-700">
                {country.visaRequirement.duration
                  ? `${country.visaRequirement.duration}日`
                  : "情報なし"}
              </p>
            </div>

            {country.conditions && (
              <div className="mb-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-800">入国条件</h3>
                <ul className="space-y-2">
                  {country.conditions.map((condition: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {country.notes && (
              <div className="mb-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-800">注意事項</h3>
                <div className="rounded-lg bg-yellow-50 p-4">
                  <p className="text-yellow-800">{country.notes}</p>
                </div>
              </div>
            )}

            {country.officialLinks && (
              <div className="mt-8">
                <h3 className="mb-3 text-lg font-semibold text-gray-800">公式リンク</h3>
                <div className="space-y-2">
                  {Object.entries(country.officialLinks).map(([key, url], index) => (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      <svg
                        className="mr-2 h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      {key === "mofa" ? "外務省" : key === "embassy" ? "大使館" : key}
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 text-center text-sm text-gray-500">
              <p>
                この情報は{new Date().toLocaleDateString("ja-JP")}
                時点のものです。最新情報は各国大使館や外務省のウェブサイトでご確認ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

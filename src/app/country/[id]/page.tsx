import Link from "next/link";
import { notFound } from "next/navigation";

import { visaStatusColors } from "@/constants/colors";

import { getCountryById, getAdjacentCountries } from "../../../data/regions";
import { getRegionDisplayName } from "../../../utils/regionHelper";

import type { Metadata } from "next";

interface CountryParams {
  id: string;
}

export async function generateMetadata({ params }: { params: CountryParams }): Promise<Metadata> {
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

export default function CountryPage({ params }: { params: CountryParams }) {
  const country = getCountryById(params.id);

  if (!country) {
    notFound();
  }

  const regionDisplayName = getRegionDisplayName(country.region);
  const { prev, next } = getAdjacentCountries(params.id);

  return (
    <div className="relative py-8 md:py-12">
      {/* PC画面のみ表示される左右の矢印ナビゲーション */}
      {prev && (
        <Link
          href={`/country/${prev.id}`}
          className="fixed left-2 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-lg transition-all hover:bg-white hover:shadow-xl md:left-8 md:flex md:h-16 md:w-16"
          title={prev.name}
        >
          <svg
            className="h-8 w-8 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>
      )}

      {next && (
        <Link
          href={`/country/${next.id}`}
          className="fixed right-2 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-lg transition-all hover:bg-white hover:shadow-xl md:right-8 md:flex md:h-16 md:w-16"
          title={next.name}
        >
          <svg
            className="h-8 w-8 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}

      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-center">
          <Link
            href={`/region/${country.region}`}
            className="mr-2 flex items-center text-blue-600 hover:text-blue-800"
          >
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
            {regionDisplayName}一覧に戻る
          </Link>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
              {country.name}のビザ情報
            </h1>
            <p className="text-gray-600">日本国籍保持者向けビザ情報</p>
          </div>

          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="border-b border-gray-200 bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div>
                  <h2 className="text-2xl font-bold">{country.name}</h2>
                </div>
                {country.code && (
                  <div className="flex items-center justify-center md:ml-auto md:justify-end">
                    <span
                      className={`fi fi-${country.code.toLowerCase()}`}
                      style={{ width: "60px", height: "45px", display: "block" }}
                    ></span>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6">
              <div
                className="mb-6 rounded-lg border-2 p-4"
                style={{
                  borderColor:
                    country.visaRequirement.type === "visa_free"
                      ? visaStatusColors.visa_free.main
                      : "#ef4444",
                  backgroundColor:
                    country.visaRequirement.type === "visa_free"
                      ? visaStatusColors.visa_free.light
                      : "#fef2f2",
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
                          ? "🌐 電子ビザ（e-Visa）での申請が可能です"
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
                <div className="rounded-lg bg-yellow-50 p-4">
                  <h3 className="mb-2 text-lg font-semibold text-yellow-800">注意事項</h3>
                  {Array.isArray(country.notes) ? (
                    <ul className="space-y-2">
                      {country.notes.map((note, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-yellow-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                          <span className="text-yellow-700">{note}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-yellow-700">{country.notes}</p>
                  )}
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
                        {key === "mofa"
                          ? "外務省"
                          : key === "embassy"
                            ? "大使館"
                            : key === "k_eta"
                              ? "K-ETA申請"
                              : key}
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
    </div>
  );
}

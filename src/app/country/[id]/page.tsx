import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { visaStatusColors } from "@/constants/colors";
import { getAdjacentCountries, getCountryById } from "../../../data/regions";
import { getRegionDisplayName } from "../../../utils/region-helper";

interface CountryParams {
  id: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<CountryParams>;
}): Promise<Metadata> {
  const { id } = await params;
  const country = getCountryById(id);

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
      images: [
        `/api/og?title=${encodeURIComponent(`${country.name}のビザ情報`)}`,
      ],
    },
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<CountryParams>;
}) {
  const { id } = await params;
  const country = getCountryById(id);

  if (!country) {
    notFound();
  }

  const adjacentCountries = getAdjacentCountries(id);
  const regionDisplayName = getRegionDisplayName(country.region);

  // BreadcrumbList用のJSON-LDデータ
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: "https://visa-navi.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: regionDisplayName,
        item: `https://visa-navi.vercel.app/region/${country.region}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: country.name,
        item: `https://visa-navi.vercel.app/country/${id}`,
      },
    ],
  };

  return (
    <div className="relative py-8 md:py-12">
      {/* JSON-LD構造化データ */}
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        type="application/ld+json"
      />

      {/* PC画面のみ表示される左右の矢印ナビゲーション */}
      {adjacentCountries.prev && (
        <Link
          className="fixed top-1/2 left-2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-lg transition-all hover:bg-white hover:shadow-xl md:left-8 md:flex md:h-16 md:w-16"
          href={`/country/${adjacentCountries.prev.id}`}
          title={adjacentCountries.prev.name}
        >
          <svg
            aria-hidden="true"
            className="h-8 w-8 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 19l-7-7 7-7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </Link>
      )}

      {adjacentCountries.next && (
        <Link
          className="fixed top-1/2 right-2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-lg transition-all hover:bg-white hover:shadow-xl md:right-8 md:flex md:h-16 md:w-16"
          href={`/country/${adjacentCountries.next.id}`}
          title={adjacentCountries.next.name}
        >
          <svg
            aria-hidden="true"
            className="h-8 w-8 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </Link>
      )}

      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-center">
          <Link
            className="mr-2 flex items-center text-blue-600 hover:text-blue-800"
            href={`/region/${country.region}`}
          >
            <svg
              aria-hidden="true"
              className="mr-1 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
            {regionDisplayName}一覧に戻る
          </Link>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="border-gray-200 border-b bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div>
                  <h2 className="font-bold text-2xl">
                    {country.name}のビザ情報
                  </h2>
                </div>
                {country.code && (
                  <div className="flex items-center justify-center md:ml-auto md:justify-end">
                    <span
                      className={`fi fi-${country.code.toLowerCase()}`}
                      style={{
                        width: "60px",
                        height: "45px",
                        display: "block",
                      }}
                    />
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
                      className="font-semibold text-lg"
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
                    <p className="text-gray-600 text-sm">
                      {(() => {
                        if (country.visaRequirement.type === "visa_free") {
                          return "パスポートのみで入国できます";
                        }
                        if (country.visaRequirement.evisaAvailable) {
                          return "🌐 電子ビザ（e-Visa）での申請が可能です";
                        }
                        return "大使館または領事館でビザを申請する必要があります";
                      })()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6 rounded-lg bg-blue-50 p-4">
                <h3 className="mb-2 font-semibold text-blue-800 text-lg">
                  滞在可能期間
                </h3>
                <p className="text-blue-700">
                  {country.visaRequirement.duration
                    ? `${country.visaRequirement.duration}日`
                    : "情報なし"}
                </p>
              </div>

              {country.conditions && (
                <div className="mb-6">
                  <h3 className="mb-3 font-semibold text-gray-800 text-lg">
                    入国条件
                  </h3>
                  <ul className="space-y-2">
                    {country.conditions.map((condition: string) => (
                      <li className="flex items-start" key={condition}>
                        <svg
                          aria-hidden="true"
                          className="mt-1 mr-2 h-5 w-5 flex-shrink-0 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M5 13l4 4L19 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                          />
                        </svg>
                        <span className="text-gray-700">{condition}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {country.notes &&
                Array.isArray(country.notes) &&
                country.notes.length > 0 && (
                  <div className="rounded-lg bg-yellow-50 p-4">
                    <h3 className="mb-2 font-semibold text-lg text-yellow-800">
                      補足・注意事項
                    </h3>
                    {Array.isArray(country.notes) ? (
                      <ul className="space-y-2">
                        {country.notes.map((note) => (
                          <li className="flex items-start" key={note}>
                            <svg
                              aria-hidden="true"
                              className="mt-1 mr-2 h-5 w-5 flex-shrink-0 text-yellow-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
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
                  <h3 className="mb-3 font-semibold text-gray-800 text-lg">
                    公式リンク
                  </h3>
                  <div className="space-y-2">
                    {Object.entries(country.officialLinks).map(([key, url]) => {
                      const getLinkLabel = (linkKey: string) => {
                        if (linkKey === "mofa") {
                          return "外務省";
                        }
                        if (linkKey === "embassy") {
                          return "大使館";
                        }
                        if (linkKey === "k_eta") {
                          return "K-ETA申請";
                        }
                        return linkKey;
                      };
                      return (
                        <a
                          className="flex items-center text-blue-600 hover:text-blue-800 hover:underline"
                          href={url}
                          key={key}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <svg
                            aria-hidden="true"
                            className="mr-2 h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                            />
                          </svg>
                          {getLinkLabel(key)}
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="mt-8 text-center text-gray-500 text-sm">
                <p>
                  最新情報は各国大使館や外務省のウェブサイトでご確認ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

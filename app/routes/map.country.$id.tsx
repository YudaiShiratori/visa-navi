import {
  Link,
  useLoaderData,
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from "@remix-run/react";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";

import { Header } from "~/components/header";
import { visaStatusColors } from "~/constants/colors";
import { countries } from "~/data/countries";

import type { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ params }: LoaderFunctionArgs) {
  const countryId = params.id;
  const country = countries.find((c) => c.id.toLowerCase() === countryId?.toLowerCase());

  if (!country) {
    throw new Response("国が見つかりません", { status: 404 });
  }

  // jsonヘルパーの代わりにResponseオブジェクトを直接使用
  return new Response(JSON.stringify({ country }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default function CountryDetail() {
  const { country } = useLoaderData<typeof loader>();
  const [activeTab, setActiveTab] = useState<"info" | "conditions" | "links">("info");
  const navigate = useNavigate();

  // ビザステータスに基づく色を取得
  const statusColor =
    visaStatusColors[country.visaRequirement.type as keyof typeof visaStatusColors];

  // 前の画面に戻る関数
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="px-4 pb-16 pt-24">
        <div className="container mx-auto max-w-4xl">
          {/* 戻るリンク */}
          <button
            onClick={goBack}
            className="group mb-6 inline-flex items-center text-gray-600 transition-colors hover:text-blue-600"
          >
            <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition-colors group-hover:bg-blue-50">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </span>
            戻る
          </button>

          {/* メインカード */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            {/* ヘッダー部分 */}
            <div className="relative">
              {/* 背景パターン */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${statusColor.main.replace("#", "")}' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: "60px 60px",
                }}
              ></div>

              {/* 国旗風の装飾 */}
              <div
                className="absolute right-0 top-0 h-32 w-32 opacity-20"
                style={{
                  background: `linear-gradient(135deg, ${statusColor.light} 0%, ${statusColor.main} 100%)`,
                  borderRadius: "0 0 0 100%",
                }}
              ></div>

              <div className="relative flex flex-col items-start justify-between gap-6 p-8 md:flex-row">
                <div className="flex-1">
                  <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                    {country.name}
                  </h1>

                  <div className="mb-2 flex flex-wrap gap-3">
                    <span
                      className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium"
                      style={{
                        backgroundColor: statusColor.main,
                        color: "white",
                      }}
                    >
                      {country.visaRequirement.type === "visa_free" && "ビザ免除"}
                      {country.visaRequirement.type === "evisa" && "電子ビザ"}
                      {country.visaRequirement.type === "visa_required" && "要ビザ"}
                    </span>

                    {country.visaRequirement.evisaAvailable && (
                      <span
                        className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium"
                        style={{
                          backgroundColor: visaStatusColors.evisa.main,
                          color: "white",
                        }}
                      >
                        電子ビザ利用可
                      </span>
                    )}
                  </div>
                </div>

                {country.visaRequirement.duration && (
                  <div
                    className="flex h-28 w-28 flex-shrink-0 flex-col items-center justify-center rounded-full shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${statusColor.main} 0%, ${statusColor.light} 100%)`,
                      color: "white",
                    }}
                  >
                    <div className="text-3xl font-bold">{country.visaRequirement.duration}</div>
                    <div className="text-sm">日間滞在可</div>
                  </div>
                )}
              </div>
            </div>

            {/* タブナビゲーション */}
            <div className="border-b border-gray-200">
              <div className="flex overflow-x-auto">
                <button
                  className={`border-b-2 px-6 py-3 text-sm font-medium transition-colors ${
                    activeTab === "info"
                      ? `border-${statusColor.main} text-${statusColor.main}`
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("info")}
                  style={
                    activeTab === "info"
                      ? { borderColor: statusColor.main, color: statusColor.main }
                      : {}
                  }
                >
                  基本情報
                </button>
                <button
                  className={`border-b-2 px-6 py-3 text-sm font-medium transition-colors ${
                    activeTab === "conditions"
                      ? `border-${statusColor.main} text-${statusColor.main}`
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("conditions")}
                  style={
                    activeTab === "conditions"
                      ? { borderColor: statusColor.main, color: statusColor.main }
                      : {}
                  }
                >
                  条件と注意事項
                </button>
                <button
                  className={`border-b-2 px-6 py-3 text-sm font-medium transition-colors ${
                    activeTab === "links"
                      ? `border-${statusColor.main} text-${statusColor.main}`
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("links")}
                  style={
                    activeTab === "links"
                      ? { borderColor: statusColor.main, color: statusColor.main }
                      : {}
                  }
                >
                  関連リンク
                </button>
              </div>
            </div>

            {/* タブコンテンツ */}
            <div className="p-8">
              {/* 基本情報タブ */}
              {activeTab === "info" && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                      <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900">
                        <svg
                          className="mr-2 h-5 w-5"
                          style={{ color: statusColor.main }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                        ビザステータス
                      </h3>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                          <div className="text-gray-600">ビザ種別</div>
                          <div className="font-medium">
                            {country.visaRequirement.type === "visa_free" && "ビザ免除"}
                            {country.visaRequirement.type === "evisa" && "電子ビザ"}
                            {country.visaRequirement.type === "visa_required" && "要ビザ"}
                          </div>
                        </div>

                        {country.visaRequirement.duration && (
                          <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                            <div className="text-gray-600">最大滞在可能期間</div>
                            <div className="font-medium">
                              {country.visaRequirement.duration}日間
                            </div>
                          </div>
                        )}

                        {country.visaRequirement.evisaAvailable && (
                          <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                            <div className="text-gray-600">電子ビザ</div>
                            <div className="font-medium">利用可能</div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                      <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900">
                        <svg
                          className="mr-2 h-5 w-5 text-blue-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        渡航情報
                      </h3>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                          <div className="text-gray-600">パスポート残存期間</div>
                          <div className="font-medium">入国時6ヶ月以上推奨</div>
                        </div>

                        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                          <div className="text-gray-600">入国カード</div>
                          <div className="font-medium">必要</div>
                        </div>

                        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                          <div className="text-gray-600">観光目的</div>
                          <div className="font-medium">
                            {country.visaRequirement.type === "visa_free" ? "ビザ不要" : "ビザ必要"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {country.additionalInfo && (
                    <div className="rounded-xl border border-blue-100 bg-blue-50 p-6">
                      <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900">
                        <svg
                          className="mr-2 h-5 w-5 text-blue-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        追加情報
                      </h3>

                      <p className="text-gray-700">{country.additionalInfo}</p>
                    </div>
                  )}
                </div>
              )}

              {/* 条件と注意事項タブ */}
              {activeTab === "conditions" && (
                <div>
                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                    <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900">
                      <svg
                        className="mr-2 h-5 w-5 text-amber-500"
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
                      入国条件と注意事項
                    </h3>

                    {country.conditions && country.conditions.length > 0 ? (
                      <ul className="space-y-4">
                        {country.conditions.map(
                          (
                            condition:
                              | string
                              | number
                              | boolean
                              | ReactElement<any, string | JSXElementConstructor<any>>
                              | Iterable<ReactNode>
                              | ReactPortal
                              | null
                              | undefined,
                            index: Key | null | undefined
                          ) => (
                            <li key={index} className="flex rounded-lg bg-white p-3 shadow-sm">
                              <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                <svg
                                  className="h-4 w-4 text-blue-600"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-700">{condition}</p>
                              </div>
                            </li>
                          )
                        )}
                      </ul>
                    ) : (
                      <div className="flex rounded-lg bg-white p-4 shadow-sm">
                        <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                          <svg
                            className="h-4 w-4 text-green-600"
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
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700">
                            特別な条件はありません。一般的な入国手続きに従ってください。
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 rounded-lg border border-amber-100 bg-amber-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-amber-400"
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
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-amber-800">注意事項</h3>
                        <div className="mt-2 text-sm text-amber-700">
                          <p>
                            ビザ要件は予告なく変更される場合があります。渡航前に必ず最新情報を外務省や大使館で確認してください。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 関連リンクタブ */}
              {activeTab === "links" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-4">
                    <a
                      href="https://www.mofa.go.jp/mofaj/toko/visa/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:bg-gray-50"
                    >
                      <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                        <svg
                          className="h-6 w-6 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">外務省 海外安全ホームページ</h4>
                        <p className="mt-1 text-sm text-gray-500">
                          日本国外務省が提供する海外渡航情報
                        </p>
                      </div>
                    </a>

                    <a
                      href={`https://www.mofa.go.jp/mofaj/toko/visa/tanki/${country.id.toLowerCase()}.html`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:bg-gray-50"
                    >
                      <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                        <svg
                          className="h-6 w-6 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {country.name}のビザ情報（外務省）
                        </h4>
                        <p className="mt-1 text-sm text-gray-500">
                          外務省が提供する{country.name}のビザ情報
                        </p>
                      </div>
                    </a>

                    <a
                      href={`https://www.google.com/search?q=${encodeURIComponent(`${country.name} 日本人 ビザ 情報`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:bg-gray-50"
                    >
                      <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                        <svg
                          className="h-6 w-6 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {country.name}のビザ情報を検索
                        </h4>
                        <p className="mt-1 text-sm text-gray-500">最新の情報をウェブで検索</p>
                      </div>
                    </a>
                  </div>

                  <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-blue-800">お役立ち情報</h3>
                        <div className="mt-2 text-sm text-blue-700">
                          <p>
                            渡航前に大使館や領事館のウェブサイトも確認することをお勧めします。最新の入国要件や手続きについての詳細情報が得られます。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* フッター部分 */}
            <div className="flex flex-col items-center justify-between border-t border-gray-200 bg-gray-50 p-6 sm:flex-row">
              <p className="mb-4 text-sm text-gray-500 sm:mb-0">最終更新: 2024年6月1日</p>

              <div className="flex space-x-2">
                <button
                  className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  onClick={() => window.print()}
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                    />
                  </svg>
                  印刷
                </button>

                <button
                  className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  onClick={() => {
                    navigator
                      .share({
                        title: `${country.name}のビザ情報`,
                        url: window.location.href,
                      })
                      .catch((err) => console.error("共有に失敗しました", err));
                  }}
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                  共有
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

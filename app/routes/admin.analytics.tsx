import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";

import { Header } from "../components/header";
import {
  getPageViewsLast7Days,
  getTopPages,
  getTopSearchTerms,
  getTopRegions,
  getTopCountries,
} from "../utils/ga-api.server";

import type { LoaderFunction } from "@remix-run/node";

// アクセス解析データの型定義
interface AnalyticsData {
  pageViews: {
    date: string;
    count: number;
  }[];
  topPages: {
    path: string;
    views: number;
  }[];
  topSearchTerms: {
    term: string;
    count: number;
  }[];
  topRegions: {
    region: string;
    count: number;
  }[];
  topCountries: {
    country: string;
    count: number;
  }[];
}

export const loader: LoaderFunction = async () => {
  try {
    // Google Analytics APIから実際のデータを取得
    const [pageViews, topPages, topSearchTerms, topRegions, topCountries] = await Promise.all([
      getPageViewsLast7Days(),
      getTopPages(),
      getTopSearchTerms(),
      getTopRegions(),
      getTopCountries(),
    ]);

    // データが空の場合はエラーメッセージを表示
    const hasRealData =
      pageViews.some((view) => view.count > 0) ||
      topPages.some((page) => page.views > 0) ||
      topSearchTerms.some((term) => term.count > 0) ||
      topRegions.some((region) => region.count > 0) ||
      topCountries.some((country) => country.count > 0);

    const analyticsData: AnalyticsData = {
      pageViews,
      topPages,
      topSearchTerms,
      topRegions,
      topCountries,
    };

    return json({
      analyticsData,
      hasRealData,
      message: hasRealData
        ? null
        : "データが取得できませんでした。Google Analyticsの設定を確認してください。",
    });
  } catch (error) {
    console.error("アクセス解析データの取得に失敗しました:", error);

    // エラーが発生した場合はモックデータを返す
    return json({
      analyticsData: {
        pageViews: [],
        topPages: [],
        topSearchTerms: [],
        topRegions: [],
        topCountries: [],
      },
      hasRealData: false,
      error: "データの取得に失敗しました。Google Analyticsの設定を確認してください。",
    });
  }
};

export default function AnalyticsDashboard() {
  const { analyticsData, hasRealData, error, message } = useLoaderData<{
    analyticsData: AnalyticsData;
    hasRealData: boolean;
    error?: string;
    message?: string | null;
  }>();
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [isMobile, setIsMobile] = useState(false);

  // 画面サイズの変更を検知
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // 初期チェック
    checkIfMobile();

    // リサイズイベントのリスナー
    window.addEventListener("resize", checkIfMobile);

    // クリーンアップ
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // ページビューの最大値を計算（グラフの高さの正規化に使用）
  const maxPageViews = Math.max(...analyticsData.pageViews.map((day) => day.count), 1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showAdminLink={true} />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 py-4 md:py-8">
        <h1 className="mb-4 text-2xl font-bold text-gray-800 md:mb-8 md:text-3xl">
          アクセス解析ダッシュボード
        </h1>

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700 md:mb-6 md:p-4 md:text-base">
            <p>{error}</p>
            <p className="mt-2 text-xs md:text-sm">Google Analyticsの設定を確認してください。</p>
          </div>
        )}

        {message && (
          <div className="mb-4 rounded-lg bg-yellow-50 p-3 text-sm text-yellow-700 md:mb-6 md:p-4 md:text-base">
            <p>{message}</p>
            <p className="mt-2 text-xs md:text-sm">
              Google
              Analyticsのデータが収集されるまで時間がかかる場合があります。しばらく待ってから再度お試しください。
            </p>
          </div>
        )}

        <div className="mb-4 flex space-x-2 overflow-x-auto border-b border-gray-200 pb-1 md:mb-6 md:space-x-4 md:pb-0">
          <button
            className={`whitespace-nowrap px-3 pb-2 text-sm md:px-4 md:pb-4 md:text-base ${
              activeTab === "overview"
                ? "border-b-2 border-blue-500 font-medium text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            概要
          </button>
          <button
            className={`whitespace-nowrap px-3 pb-2 text-sm md:px-4 md:pb-4 md:text-base ${
              activeTab === "pages"
                ? "border-b-2 border-blue-500 font-medium text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("pages")}
          >
            ページビュー
          </button>
          <button
            className={`whitespace-nowrap px-3 pb-2 text-sm md:px-4 md:pb-4 md:text-base ${
              activeTab === "search"
                ? "border-b-2 border-blue-500 font-medium text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("search")}
          >
            検索キーワード
          </button>
          <button
            className={`whitespace-nowrap px-3 pb-2 text-sm md:px-4 md:pb-4 md:text-base ${
              activeTab === "regions"
                ? "border-b-2 border-blue-500 font-medium text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("regions")}
          >
            地域・国別
          </button>
        </div>

        {activeTab === "overview" && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <div className="rounded-lg bg-white p-4 shadow-md md:p-6">
              <h2 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl">
                過去7日間のページビュー
              </h2>
              {analyticsData.pageViews.length > 0 ? (
                <div className="flex h-48 items-end space-x-1 md:h-64 md:space-x-2">
                  {analyticsData.pageViews.map((day) => (
                    <div key={day.date} className="flex flex-1 flex-col items-center">
                      <div
                        className="w-full rounded-t bg-blue-500"
                        style={{ height: `${(day.count / maxPageViews) * 100}%` }}
                      ></div>
                      <div className="mt-1 text-xs text-gray-500 md:mt-2">
                        {day.date.split("-")[2]}
                      </div>
                      <div className="text-xs font-medium text-gray-700">{day.count}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex h-48 items-center justify-center md:h-64">
                  <p className="text-sm text-gray-500 md:text-base">データがありません</p>
                </div>
              )}
            </div>

            <div className="rounded-lg bg-white p-4 shadow-md md:p-6">
              <h2 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl">人気のページ</h2>
              {analyticsData.topPages.length > 0 ? (
                <ul className="space-y-2 text-sm md:space-y-4 md:text-base">
                  {analyticsData.topPages.map((page) => (
                    <li key={page.path} className="flex items-center justify-between">
                      <span className="truncate pr-2 text-gray-700" title={page.path}>
                        {page.path}
                      </span>
                      <span className="font-medium text-blue-600">{page.views}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500 md:text-base">データがありません</p>
              )}
            </div>

            <div className="rounded-lg bg-white p-4 shadow-md md:p-6">
              <h2 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl">
                人気の検索キーワード
              </h2>
              {analyticsData.topSearchTerms.length > 0 ? (
                <ul className="space-y-2 text-sm md:space-y-4 md:text-base">
                  {analyticsData.topSearchTerms.map((term) => (
                    <li key={term.term} className="flex items-center justify-between">
                      <span className="truncate pr-2 text-gray-700" title={term.term}>
                        {term.term}
                      </span>
                      <span className="font-medium text-blue-600">{term.count}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500 md:text-base">データがありません</p>
              )}
            </div>

            <div className="rounded-lg bg-white p-4 shadow-md md:p-6">
              <h2 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl">人気の地域・国</h2>
              <div className="space-y-4 text-sm md:space-y-6 md:text-base">
                <div>
                  <h3 className="mb-2 text-base font-medium md:text-lg">地域</h3>
                  {analyticsData.topRegions.length > 0 ? (
                    <ul className="space-y-1 md:space-y-2">
                      {analyticsData.topRegions.map((region) => (
                        <li key={region.region} className="flex items-center justify-between">
                          <span className="truncate pr-2 text-gray-700" title={region.region}>
                            {region.region}
                          </span>
                          <span className="font-medium text-blue-600">{region.count}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500 md:text-base">データがありません</p>
                  )}
                </div>
                <div>
                  <h3 className="mb-2 text-base font-medium md:text-lg">国</h3>
                  {analyticsData.topCountries.length > 0 ? (
                    <ul className="space-y-1 md:space-y-2">
                      {analyticsData.topCountries.map((country) => (
                        <li key={country.country} className="flex items-center justify-between">
                          <span className="truncate pr-2 text-gray-700" title={country.country}>
                            {country.country}
                          </span>
                          <span className="font-medium text-blue-600">{country.count}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500 md:text-base">データがありません</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "pages" && (
          <div className="overflow-x-auto rounded-lg bg-white p-4 shadow-md md:p-6">
            <h2 className="mb-4 text-lg font-semibold md:mb-6 md:text-xl">ページビュー詳細</h2>
            {analyticsData.topPages.length > 0 ? (
              <div className="min-w-full overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-2 py-2 text-left text-xs font-semibold text-gray-700 md:px-4 md:py-3 md:text-sm">
                        ページパス
                      </th>
                      <th className="px-2 py-2 text-right text-xs font-semibold text-gray-700 md:px-4 md:py-3 md:text-sm">
                        ビュー数
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {analyticsData.topPages.map((page) => (
                      <tr key={page.path} className="border-b border-gray-100">
                        <td
                          className="truncate px-2 py-2 text-xs text-gray-700 md:px-4 md:py-3 md:text-sm"
                          title={page.path}
                        >
                          {page.path}
                        </td>
                        <td className="px-2 py-2 text-right text-xs font-medium text-blue-600 md:px-4 md:py-3 md:text-sm">
                          {page.views}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-sm text-gray-500 md:text-base">データがありません</p>
            )}
          </div>
        )}

        {activeTab === "search" && (
          <div className="overflow-x-auto rounded-lg bg-white p-4 shadow-md md:p-6">
            <h2 className="mb-4 text-lg font-semibold md:mb-6 md:text-xl">検索キーワード詳細</h2>
            {analyticsData.topSearchTerms.length > 0 ? (
              <div className="min-w-full overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-2 py-2 text-left text-xs font-semibold text-gray-700 md:px-4 md:py-3 md:text-sm">
                        検索キーワード
                      </th>
                      <th className="px-2 py-2 text-right text-xs font-semibold text-gray-700 md:px-4 md:py-3 md:text-sm">
                        検索回数
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {analyticsData.topSearchTerms.map((term) => (
                      <tr key={term.term} className="border-b border-gray-100">
                        <td
                          className="truncate px-2 py-2 text-xs text-gray-700 md:px-4 md:py-3 md:text-sm"
                          title={term.term}
                        >
                          {term.term}
                        </td>
                        <td className="px-2 py-2 text-right text-xs font-medium text-blue-600 md:px-4 md:py-3 md:text-sm">
                          {term.count}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-sm text-gray-500 md:text-base">データがありません</p>
            )}
          </div>
        )}

        {activeTab === "regions" && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <div className="overflow-x-auto rounded-lg bg-white p-4 shadow-md md:p-6">
              <h2 className="mb-4 text-lg font-semibold md:mb-6 md:text-xl">地域別アクセス</h2>
              {analyticsData.topRegions.length > 0 ? (
                <div className="min-w-full overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="px-2 py-2 text-left text-xs font-semibold text-gray-700 md:px-4 md:py-3 md:text-sm">
                          地域
                        </th>
                        <th className="px-2 py-2 text-right text-xs font-semibold text-gray-700 md:px-4 md:py-3 md:text-sm">
                          アクセス数
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {analyticsData.topRegions.map((region) => (
                        <tr key={region.region} className="border-b border-gray-100">
                          <td
                            className="truncate px-2 py-2 text-xs text-gray-700 md:px-4 md:py-3 md:text-sm"
                            title={region.region}
                          >
                            {region.region}
                          </td>
                          <td className="px-2 py-2 text-right text-xs font-medium text-blue-600 md:px-4 md:py-3 md:text-sm">
                            {region.count}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-sm text-gray-500 md:text-base">データがありません</p>
              )}
            </div>

            <div className="overflow-x-auto rounded-lg bg-white p-4 shadow-md md:p-6">
              <h2 className="mb-4 text-lg font-semibold md:mb-6 md:text-xl">国別アクセス</h2>
              {analyticsData.topCountries.length > 0 ? (
                <div className="min-w-full overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="px-2 py-2 text-left text-xs font-semibold text-gray-700 md:px-4 md:py-3 md:text-sm">
                          国
                        </th>
                        <th className="px-2 py-2 text-right text-xs font-semibold text-gray-700 md:px-4 md:py-3 md:text-sm">
                          アクセス数
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {analyticsData.topCountries.map((country) => (
                        <tr key={country.country} className="border-b border-gray-100">
                          <td
                            className="truncate px-2 py-2 text-xs text-gray-700 md:px-4 md:py-3 md:text-sm"
                            title={country.country}
                          >
                            {country.country}
                          </td>
                          <td className="px-2 py-2 text-right text-xs font-medium text-blue-600 md:px-4 md:py-3 md:text-sm">
                            {country.count}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-sm text-gray-500 md:text-base">データがありません</p>
              )}
            </div>
          </div>
        )}

        <div className="mt-6 text-center text-xs text-gray-500 md:mt-8 md:text-sm">
          <p>最終更新: {new Date().toLocaleString("ja-JP")}</p>
          <p className="mt-1">データソース: Google Analytics 4</p>
          {!hasRealData && (
            <p className="mt-3 md:mt-4">
              <a
                href="https://support.google.com/analytics/answer/9304153?hl=ja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Google Analytics 4の設定方法を確認する
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

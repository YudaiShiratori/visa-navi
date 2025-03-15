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

  // ページビューの最大値を計算（グラフの高さの正規化に使用）
  const maxPageViews = Math.max(...analyticsData.pageViews.map((day) => day.count), 1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showAdminLink={true} />

      <div className="container mx-auto max-w-7xl px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">アクセス解析ダッシュボード</h1>

        {error && (
          <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-700">
            <p>{error}</p>
            <p className="mt-2 text-sm">Google Analyticsの設定を確認してください。</p>
          </div>
        )}

        {message && (
          <div className="mb-6 rounded-lg bg-yellow-50 p-4 text-yellow-700">
            <p>{message}</p>
            <p className="mt-2 text-sm">
              Google
              Analyticsのデータが収集されるまで時間がかかる場合があります。しばらく待ってから再度お試しください。
            </p>
          </div>
        )}

        <div className="mb-6 flex space-x-4 border-b border-gray-200">
          <button
            className={`px-4 pb-4 ${
              activeTab === "overview"
                ? "border-b-2 border-blue-500 font-medium text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            概要
          </button>
          <button
            className={`px-4 pb-4 ${
              activeTab === "pages"
                ? "border-b-2 border-blue-500 font-medium text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("pages")}
          >
            ページビュー
          </button>
          <button
            className={`px-4 pb-4 ${
              activeTab === "search"
                ? "border-b-2 border-blue-500 font-medium text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("search")}
          >
            検索キーワード
          </button>
          <button
            className={`px-4 pb-4 ${
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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-xl font-semibold">過去7日間のページビュー</h2>
              {analyticsData.pageViews.length > 0 ? (
                <div className="flex h-64 items-end space-x-2">
                  {analyticsData.pageViews.map((day) => (
                    <div key={day.date} className="flex flex-1 flex-col items-center">
                      <div
                        className="w-full rounded-t bg-blue-500"
                        style={{ height: `${(day.count / maxPageViews) * 100}%` }}
                      ></div>
                      <div className="mt-2 text-xs text-gray-500">{day.date.split("-")[2]}</div>
                      <div className="text-xs font-medium text-gray-700">{day.count}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex h-64 items-center justify-center">
                  <p className="text-gray-500">データがありません</p>
                </div>
              )}
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-xl font-semibold">人気のページ</h2>
              {analyticsData.topPages.length > 0 ? (
                <ul className="space-y-4">
                  {analyticsData.topPages.map((page) => (
                    <li key={page.path} className="flex items-center justify-between">
                      <span className="text-gray-700">{page.path}</span>
                      <span className="font-medium text-blue-600">{page.views}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">データがありません</p>
              )}
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-xl font-semibold">人気の検索キーワード</h2>
              {analyticsData.topSearchTerms.length > 0 ? (
                <ul className="space-y-4">
                  {analyticsData.topSearchTerms.map((term) => (
                    <li key={term.term} className="flex items-center justify-between">
                      <span className="text-gray-700">{term.term}</span>
                      <span className="font-medium text-blue-600">{term.count}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">データがありません</p>
              )}
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-xl font-semibold">人気の地域・国</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-lg font-medium">地域</h3>
                  {analyticsData.topRegions.length > 0 ? (
                    <ul className="space-y-2">
                      {analyticsData.topRegions.map((region) => (
                        <li key={region.region} className="flex items-center justify-between">
                          <span className="text-gray-700">{region.region}</span>
                          <span className="font-medium text-blue-600">{region.count}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">データがありません</p>
                  )}
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium">国</h3>
                  {analyticsData.topCountries.length > 0 ? (
                    <ul className="space-y-2">
                      {analyticsData.topCountries.map((country) => (
                        <li key={country.country} className="flex items-center justify-between">
                          <span className="text-gray-700">{country.country}</span>
                          <span className="font-medium text-blue-600">{country.count}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">データがありません</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "pages" && (
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-6 text-xl font-semibold">ページビュー詳細</h2>
            {analyticsData.topPages.length > 0 ? (
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">ページパス</th>
                    <th className="px-4 py-3 text-right font-semibold text-gray-700">ビュー数</th>
                  </tr>
                </thead>
                <tbody>
                  {analyticsData.topPages.map((page) => (
                    <tr key={page.path} className="border-b border-gray-100">
                      <td className="px-4 py-3 text-gray-700">{page.path}</td>
                      <td className="px-4 py-3 text-right font-medium text-blue-600">
                        {page.views}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500">データがありません</p>
            )}
          </div>
        )}

        {activeTab === "search" && (
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-6 text-xl font-semibold">検索キーワード詳細</h2>
            {analyticsData.topSearchTerms.length > 0 ? (
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">
                      検索キーワード
                    </th>
                    <th className="px-4 py-3 text-right font-semibold text-gray-700">検索回数</th>
                  </tr>
                </thead>
                <tbody>
                  {analyticsData.topSearchTerms.map((term) => (
                    <tr key={term.term} className="border-b border-gray-100">
                      <td className="px-4 py-3 text-gray-700">{term.term}</td>
                      <td className="px-4 py-3 text-right font-medium text-blue-600">
                        {term.count}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500">データがありません</p>
            )}
          </div>
        )}

        {activeTab === "regions" && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-6 text-xl font-semibold">地域別アクセス</h2>
              {analyticsData.topRegions.length > 0 ? (
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">地域</th>
                      <th className="px-4 py-3 text-right font-semibold text-gray-700">
                        アクセス数
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {analyticsData.topRegions.map((region) => (
                      <tr key={region.region} className="border-b border-gray-100">
                        <td className="px-4 py-3 text-gray-700">{region.region}</td>
                        <td className="px-4 py-3 text-right font-medium text-blue-600">
                          {region.count}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-gray-500">データがありません</p>
              )}
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-6 text-xl font-semibold">国別アクセス</h2>
              {analyticsData.topCountries.length > 0 ? (
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">国</th>
                      <th className="px-4 py-3 text-right font-semibold text-gray-700">
                        アクセス数
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {analyticsData.topCountries.map((country) => (
                      <tr key={country.country} className="border-b border-gray-100">
                        <td className="px-4 py-3 text-gray-700">{country.country}</td>
                        <td className="px-4 py-3 text-right font-medium text-blue-600">
                          {country.count}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-gray-500">データがありません</p>
              )}
            </div>
          </div>
        )}

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>最終更新: {new Date().toLocaleString("ja-JP")}</p>
          <p className="mt-1">データソース: Google Analytics 4</p>
          {!hasRealData && (
            <p className="mt-4">
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

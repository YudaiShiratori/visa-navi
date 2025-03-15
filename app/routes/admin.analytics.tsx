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

// 型定義
interface PageView {
  date: string;
  count: number;
}

interface Page {
  path: string;
  views: number;
}

interface SearchTerm {
  term: string;
  count: number;
}

interface Region {
  region: string;
  count: number;
}

interface Country {
  country: string;
  count: number;
}

// PageViewsChartコンポーネント
function PageViewsChart({ data }: { data: PageView[] }) {
  // データが空の場合は何も表示しない
  if (data.length === 0) return null;

  // 最大値を計算（グラフの高さの正規化に使用）
  const maxCount = Math.max(...data.map((day) => day.count), 1);

  return (
    <div className="flex h-64 items-end space-x-2">
      {data.map((day) => (
        <div key={day.date} className="flex flex-1 flex-col items-center">
          <div
            className="w-full rounded-t bg-blue-500"
            style={{ height: `${(day.count / maxCount) * 100}%` }}
          ></div>
          <div className="mt-2 text-xs text-gray-500">{day.date.split("-")[2]}日</div>
          <div className="text-xs font-medium text-gray-700">{day.count}</div>
        </div>
      ))}
    </div>
  );
}

export const loader: LoaderFunction = async () => {
  const pageViews = await getPageViewsLast7Days();
  const topPages = await getTopPages();
  const topSearchTerms = await getTopSearchTerms();
  const topRegions = await getTopRegions();
  const topCountries = await getTopCountries();

  return json({
    pageViews,
    topPages,
    topSearchTerms,
    topRegions,
    topCountries,
  });
};

export default function Analytics() {
  const { pageViews, topPages, topSearchTerms, topRegions, topCountries } =
    useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">アクセス解析ダッシュボード</h1>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">過去7日間のページビュー</h2>
          {pageViews.length > 0 ? (
            <div className="rounded-lg bg-white p-4 shadow">
              <PageViewsChart data={pageViews as PageView[]} />
            </div>
          ) : (
            <div className="rounded-lg bg-white p-6 shadow">
              <p className="text-center text-gray-500">
                過去7日間のページビューデータがありません。
              </p>
            </div>
          )}
        </div>

        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-gray-700">人気のページ</h2>
            {topPages.length > 0 ? (
              <div className="rounded-lg bg-white p-4 shadow">
                <ul className="divide-y divide-gray-200">
                  {topPages.map((page: Page, index: number) => (
                    <li key={index} className="py-3">
                      <div className="flex items-center justify-between">
                        <span className="truncate text-sm text-gray-600">{page.path}</span>
                        <span className="ml-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                          {page.views}ビュー
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="rounded-lg bg-white p-6 shadow">
                <p className="text-center text-gray-500">人気のページデータがありません。</p>
              </div>
            )}
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-gray-700">人気の検索キーワード</h2>
            {topSearchTerms.length > 0 ? (
              <div className="rounded-lg bg-white p-4 shadow">
                <ul className="divide-y divide-gray-200">
                  {topSearchTerms.map((term: SearchTerm, index: number) => (
                    <li key={index} className="py-3">
                      <div className="flex items-center justify-between">
                        <span className="truncate text-sm text-gray-600">{term.term}</span>
                        <span className="ml-2 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                          {term.count}回
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="rounded-lg bg-white p-6 shadow">
                <p className="text-center text-gray-500">検索キーワードデータがありません。</p>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-gray-700">地域別アクセス数</h2>
            {topRegions.length > 0 ? (
              <div className="rounded-lg bg-white p-4 shadow">
                <ul className="divide-y divide-gray-200">
                  {topRegions.map((region: Region, index: number) => (
                    <li key={index} className="py-3">
                      <div className="flex items-center justify-between">
                        <span className="truncate text-sm text-gray-600">{region.region}</span>
                        <span className="ml-2 rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">
                          {region.count}回
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="rounded-lg bg-white p-6 shadow">
                <p className="text-center text-gray-500">地域別アクセスデータがありません。</p>
              </div>
            )}
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-gray-700">国別アクセス数</h2>
            {topCountries.length > 0 ? (
              <div className="rounded-lg bg-white p-4 shadow">
                <ul className="divide-y divide-gray-200">
                  {topCountries.map((country: Country, index: number) => (
                    <li key={index} className="py-3">
                      <div className="flex items-center justify-between">
                        <span className="truncate text-sm text-gray-600">{country.country}</span>
                        <span className="ml-2 rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                          {country.count}回
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="rounded-lg bg-white p-6 shadow">
                <p className="text-center text-gray-500">国別アクセスデータがありません。</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>最終更新: {new Date().toLocaleString("ja-JP")}</p>
          <p className="mt-1">データソース: Google Analytics 4</p>
        </div>
      </div>
    </div>
  );
}

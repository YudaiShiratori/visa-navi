"use client";

import { useEffect, useState } from "react";

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
        <div className="flex flex-1 flex-col items-center" key={day.date}>
          <div
            className="w-full rounded-t bg-blue-500"
            style={{ height: `${(day.count / maxCount) * 100}%` }}
          />
          <div className="mt-2 text-gray-500 text-xs">
            {day.date.split("-")[2]}日
          </div>
          <div className="font-medium text-gray-700 text-xs">{day.count}</div>
        </div>
      ))}
    </div>
  );
}

// 最終更新日時を表示するコンポーネント
function LastUpdated() {
  const [dateString, setDateString] = useState<string>("");

  useEffect(() => {
    // クライアントサイドでのみ実行
    setDateString(new Date().toLocaleString("ja-JP"));
  }, []);

  return (
    <div className="mt-8 text-center text-gray-500 text-sm">
      <p>最終更新: {dateString}</p>
      <p className="mt-1">データソース: Google Analytics 4</p>
    </div>
  );
}

export default function Analytics() {
  const [pageViews, setPageViews] = useState<PageView[]>([]);
  const [topPages, setTopPages] = useState<Page[]>([]);
  const [topSearchTerms, setTopSearchTerms] = useState<SearchTerm[]>([]);
  const [topRegions, setTopRegions] = useState<Region[]>([]);
  const [topCountries, setTopCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("/api/analytics");

        if (!response.ok) {
          throw new Error(`APIリクエストが失敗しました: ${response.status}`);
        }

        const data = await response.json();

        setPageViews(data.pageViews || []);
        setTopPages(data.topPages || []);
        setTopSearchTerms(data.topSearchTerms || []);
        setTopRegions(data.topRegions || []);
        setTopCountries(data.topCountries || []);
      } catch (err) {
        console.error("データの取得に失敗しました:", err);
        setError(
          err instanceof Error ? err.message : "データの取得に失敗しました"
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-bold text-3xl text-gray-800">
            アクセス解析ダッシュボード
          </h1>
        </div>

        {error && (
          <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-700">
            <p>{error}</p>
            <p className="mt-2 text-sm">
              Google
              Analyticsの設定を確認してください。サービスアカウントキーが正しく設定されていることを確認してください。
            </p>
          </div>
        )}

        {isLoading ? (
          <div className="flex h-64 items-center justify-center">
            <div className="text-gray-500 text-lg">データを読み込み中...</div>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="mb-4 font-semibold text-gray-700 text-xl">
                過去7日間のページビュー
              </h2>
              {pageViews.length > 0 ? (
                <div className="rounded-lg bg-white p-4 shadow">
                  <PageViewsChart data={pageViews} />
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
                <h2 className="mb-4 font-semibold text-gray-700 text-xl">
                  人気のページ
                </h2>
                {topPages.length > 0 ? (
                  <div className="rounded-lg bg-white p-4 shadow">
                    <ul className="divide-y divide-gray-200">
                      {topPages.map((page, index) => (
                        <li className="py-3" key={index}>
                          <div className="flex items-center justify-between">
                            <span className="truncate text-gray-600 text-sm">
                              {page.path}
                            </span>
                            <span className="ml-2 rounded-full bg-blue-100 px-2 py-1 font-medium text-blue-800 text-xs">
                              {page.views}ビュー
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="rounded-lg bg-white p-6 shadow">
                    <p className="text-center text-gray-500">
                      人気のページデータがありません。
                    </p>
                  </div>
                )}
              </div>

              <div>
                <h2 className="mb-4 font-semibold text-gray-700 text-xl">
                  人気の検索キーワード
                </h2>
                {topSearchTerms.length > 0 ? (
                  <div className="rounded-lg bg-white p-4 shadow">
                    <ul className="divide-y divide-gray-200">
                      {topSearchTerms.map((term, index) => (
                        <li className="py-3" key={index}>
                          <div className="flex items-center justify-between">
                            <span className="truncate text-gray-600 text-sm">
                              {term.term}
                            </span>
                            <span className="ml-2 rounded-full bg-green-100 px-2 py-1 font-medium text-green-800 text-xs">
                              {term.count}回
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="rounded-lg bg-white p-6 shadow">
                    <p className="text-center text-gray-500">
                      検索キーワードデータがありません。
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 font-semibold text-gray-700 text-xl">
                  地域別アクセス数
                </h2>
                {topRegions.length > 0 ? (
                  <div className="rounded-lg bg-white p-4 shadow">
                    <ul className="divide-y divide-gray-200">
                      {topRegions.map((region, index) => (
                        <li className="py-3" key={index}>
                          <div className="flex items-center justify-between">
                            <span className="truncate text-gray-600 text-sm">
                              {region.region}
                            </span>
                            <span className="ml-2 rounded-full bg-purple-100 px-2 py-1 font-medium text-purple-800 text-xs">
                              {region.count}回
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="rounded-lg bg-white p-6 shadow">
                    <p className="text-center text-gray-500">
                      地域別アクセスデータがありません。
                    </p>
                  </div>
                )}
              </div>

              <div>
                <h2 className="mb-4 font-semibold text-gray-700 text-xl">
                  国別アクセス数
                </h2>
                {topCountries.length > 0 ? (
                  <div className="rounded-lg bg-white p-4 shadow">
                    <ul className="divide-y divide-gray-200">
                      {topCountries.map((country, index) => (
                        <li className="py-3" key={index}>
                          <div className="flex items-center justify-between">
                            <span className="truncate text-gray-600 text-sm">
                              {country.country}
                            </span>
                            <span className="ml-2 rounded-full bg-yellow-100 px-2 py-1 font-medium text-xs text-yellow-800">
                              {country.count}回
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="rounded-lg bg-white p-6 shadow">
                    <p className="text-center text-gray-500">
                      国別アクセスデータがありません。
                    </p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        <LastUpdated />
      </div>
    </div>
  );
}

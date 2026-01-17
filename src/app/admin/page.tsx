"use client";

import { useEffect, useState } from "react";

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

interface AnalyticsData {
  pageViews: PageView[];
  topPages: Page[];
  topSearchTerms: SearchTerm[];
  topRegions: Region[];
  topCountries: Country[];
}

function PageViewsChart({ data }: { data: PageView[] }) {
  if (data.length === 0) {
    return null;
  }

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

function LastUpdated() {
  const [dateString, setDateString] = useState<string>("");

  useEffect(() => {
    setDateString(new Date().toLocaleString("ja-JP"));
  }, []);

  return (
    <div className="mt-8 text-center text-gray-500 text-sm">
      <p>最終更新: {dateString}</p>
      <p className="mt-1">データソース: Google Analytics 4</p>
    </div>
  );
}

function DataSection<T>({
  title,
  data,
  emptyMessage,
  renderItem,
  getKey,
}: {
  title: string;
  data: T[];
  emptyMessage: string;
  renderItem: (item: T) => React.ReactNode;
  getKey: (item: T) => string;
}) {
  return (
    <div>
      <h2 className="mb-4 font-semibold text-gray-700 text-xl">{title}</h2>
      {data.length > 0 ? (
        <div className="rounded-lg bg-white p-4 shadow">
          <ul className="divide-y divide-gray-200">
            {data.map((item) => (
              <li className="py-3" key={getKey(item)}>
                {renderItem(item)}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="rounded-lg bg-white p-6 shadow">
          <p className="text-center text-gray-500">{emptyMessage}</p>
        </div>
      )}
    </div>
  );
}

async function fetchAnalyticsData(): Promise<AnalyticsData> {
  const response = await fetch("/api/analytics");

  if (!response.ok) {
    throw new Error(`APIリクエストが失敗しました: ${response.status}`);
  }

  const data = await response.json();

  return {
    pageViews: data.pageViews || [],
    topPages: data.topPages || [],
    topSearchTerms: data.topSearchTerms || [],
    topRegions: data.topRegions || [],
    topCountries: data.topCountries || [],
  };
}

export default function Analytics() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetchAnalyticsData()
      .then((data) => {
        setAnalyticsData(data);
      })
      .catch((err) => {
        console.error("データの取得に失敗しました:", err);
        setError(
          err instanceof Error ? err.message : "データの取得に失敗しました"
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
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

        {(() => {
          if (isLoading) {
            return (
              <div className="flex h-64 items-center justify-center">
                <div className="text-gray-500 text-lg">
                  データを読み込み中...
                </div>
              </div>
            );
          }
          if (!analyticsData) {
            return null;
          }
          return (
            <>
              <div className="mb-8">
                <h2 className="mb-4 font-semibold text-gray-700 text-xl">
                  過去7日間のページビュー
                </h2>
                {analyticsData.pageViews.length > 0 ? (
                  <div className="rounded-lg bg-white p-4 shadow">
                    <PageViewsChart data={analyticsData.pageViews} />
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
                <DataSection
                  data={analyticsData.topPages}
                  emptyMessage="人気のページデータがありません。"
                  getKey={(page) => page.path}
                  renderItem={(page) => (
                    <div className="flex items-center justify-between">
                      <span className="truncate text-gray-600 text-sm">
                        {page.path}
                      </span>
                      <span className="ml-2 rounded-full bg-blue-100 px-2 py-1 font-medium text-blue-800 text-xs">
                        {page.views}ビュー
                      </span>
                    </div>
                  )}
                  title="人気のページ"
                />

                <DataSection
                  data={analyticsData.topSearchTerms}
                  emptyMessage="検索キーワードデータがありません。"
                  getKey={(term) => term.term}
                  renderItem={(term) => (
                    <div className="flex items-center justify-between">
                      <span className="truncate text-gray-600 text-sm">
                        {term.term}
                      </span>
                      <span className="ml-2 rounded-full bg-green-100 px-2 py-1 font-medium text-green-800 text-xs">
                        {term.count}回
                      </span>
                    </div>
                  )}
                  title="人気の検索キーワード"
                />
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <DataSection
                  data={analyticsData.topRegions}
                  emptyMessage="地域別アクセスデータがありません。"
                  getKey={(region) => region.region}
                  renderItem={(region) => (
                    <div className="flex items-center justify-between">
                      <span className="truncate text-gray-600 text-sm">
                        {region.region}
                      </span>
                      <span className="ml-2 rounded-full bg-purple-100 px-2 py-1 font-medium text-purple-800 text-xs">
                        {region.count}回
                      </span>
                    </div>
                  )}
                  title="地域別アクセス数"
                />

                <DataSection
                  data={analyticsData.topCountries}
                  emptyMessage="国別アクセスデータがありません。"
                  getKey={(country) => country.country}
                  renderItem={(country) => (
                    <div className="flex items-center justify-between">
                      <span className="truncate text-gray-600 text-sm">
                        {country.country}
                      </span>
                      <span className="ml-2 rounded-full bg-yellow-100 px-2 py-1 font-medium text-xs text-yellow-800">
                        {country.count}回
                      </span>
                    </div>
                  )}
                  title="国別アクセス数"
                />
              </div>
            </>
          );
        })()}

        <LastUpdated />
      </div>
    </div>
  );
}

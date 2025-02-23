import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  const user = useOptionalUser();
  return (
    <div className="relative min-h-screen">
      {/* 背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-950" />
      
      {/* メインコンテンツ */}
      <div className="relative flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-2xl rounded-xl bg-white/80 p-8 backdrop-blur-lg dark:bg-gray-900/80">
          <h1 className="mb-6 text-center font-poppins text-4xl font-bold text-gray-900 dark:text-white">
            日本人のための<br />ビザ免除情報チェッカー
          </h1>
          
          <p className="mb-8 text-center text-lg text-gray-700 dark:text-gray-300">
            世界地図から簡単に各国のビザ免除情報を確認できます。
            外務省の最新情報に基づいて、渡航に必要な情報をわかりやすく提供します。
          </p>
          
          <div className="text-center">
            <Link
              to="/map"
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3 text-lg font-semibold text-white transition-all hover:from-blue-700 hover:to-blue-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:from-blue-500 dark:to-blue-600"
            >
              地図へ進む
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

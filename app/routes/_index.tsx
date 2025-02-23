import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => [{ title: "ビザ免除情報チェッカー" }];

export default function Index() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" />
      
      {/* メインコンテンツ */}
      <div className="relative flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-2xl rounded-2xl bg-blue-50 p-8 shadow-lg backdrop-blur-sm">
          <h1 className="mb-6 text-center font-poppins text-4xl font-bold text-gray-900">
            日本人のための<br />ビザ免除情報チェッカー
          </h1>
          
          <p className="mb-8 text-center text-lg text-gray-600">
            世界地図から簡単に各国のビザ免除情報を確認できます。
            外務省の最新情報に基づいて、渡航に必要な情報をわかりやすく提供します。
          </p>
          
          <div className="text-center">
            <Link
              to="/map"
              className="inline-flex items-center rounded-xl bg-[#007AFF] px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-[#0066DD] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:ring-offset-2"
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

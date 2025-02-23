import type { MetaFunction } from "@remix-run/node";

import { MapSelector } from "~/components/map-selector";

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

          <div className="mt-12">
            <MapSelector />
          </div>
        </div>
      </div>
    </div>
  );
}

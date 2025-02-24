import { Link } from "@remix-run/react";
import { Header } from "~/components/header";

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{ title: "ビザ免除情報チェッカー" }];

export default function Index() {
  return (
    <div>
      <Header />
      <div className="relative h-[calc(100vh-65px)] min-h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" />

        <div className="relative flex h-full items-center justify-center p-4">
          <div className="w-full max-w-2xl text-center">
            <h1 className="font-poppins mb-6 text-3xl font-bold text-gray-900">
              日本人旅行者のための
              <br />
              ビザ情報チェッカー
            </h1>

            <p className="mb-12 text-lg text-gray-600">
              世界地図から簡単に各国のビザ免除情報を確認できます。
              <br />
              外務省の最新情報に基づいて、渡航に必要な情報をわかりやすく提供します。
            </p>

            <Link
              to="/map"
              className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-medium text-white transition hover:bg-blue-700"
            >
              ビザ情報を調べる →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

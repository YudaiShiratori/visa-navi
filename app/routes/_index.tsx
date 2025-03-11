/* eslint-disable react/jsx-no-comment-textnodes */
import { Link } from "@remix-run/react";

import { Header } from "~/components/header";
import { MapSelector } from "~/components/map-selector";
import { SearchCountries } from "~/components/search-countries";

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{ title: "ビザ免除情報チェッカー" }];

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      <Header />

      <div className="pb-12 pt-28">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-center text-4xl font-bold text-transparent">
            ビザ情報を調べる
          </h1>
          <p className="mx-auto mb-16 max-w-2xl text-center text-gray-600">
            地域から選ぶか、国名で検索して、日本人旅行者向けのビザ情報を確認できます。
          </p>

          <div className="space-y-20">
            <section className="animate-fade-in rounded-2xl bg-white p-8 shadow-xl">
              <h2 className="mb-6 flex items-center text-2xl font-bold">
                <svg
                  className="mr-2 h-6 w-6 text-blue-500"
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
                国名で検索
              </h2>
              <div className="mx-auto max-w-xl">
                <SearchCountries />
              </div>
            </section>

            <section className="animate-slide-up">
              <h2 className="mb-8 flex items-center justify-center text-2xl font-bold">
                <svg
                  className="mr-2 h-6 w-6 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                地域から選ぶ
              </h2>
              <MapSelector />
            </section>
          </div>
        </div>
      </div>

      {/* フッター */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                  <svg
                    className="h-6 w-6 text-white"
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
                <span className="text-xl font-bold">ビザ情報チェッカー</span>
              </Link>
              <p className="mt-2 text-sm text-gray-400">日本人旅行者のためのビザ情報ポータル</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/map" className="text-gray-300 transition-colors hover:text-white">
                ビザ情報を調べる
              </Link>
              <Link to="/about" className="text-gray-300 transition-colors hover:text-white">
                このサイトについて
              </Link>
              <Link to="/privacy" className="text-gray-300 transition-colors hover:text-white">
                プライバシーポリシー
              </Link>
              <Link to="/terms" className="text-gray-300 transition-colors hover:text-white">
                利用規約
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
            <p className="text-sm text-gray-400">
              © 2024 ビザ情報チェッカー. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

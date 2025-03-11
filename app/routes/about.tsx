/* eslint-disable react/jsx-no-comment-textnodes */
import { Link } from "@remix-run/react";

import { Header } from "~/components/header";

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{ title: "このサイトについて | ビザ免除情報チェッカー" }];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      {/* ヒーローセクション */}
      <div className="px-4 pb-20 pt-28">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="animate-slide-up space-y-6 md:w-1/2">
              <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                日本人旅行者のための
                <span className="mt-2 block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ビザ情報チェッカー
                </span>
              </h1>

              <p className="text-lg leading-relaxed text-gray-600">
                世界地図から簡単に各国のビザ免除情報を確認できます。
                外務省の最新情報に基づいて、渡航に必要な情報をわかりやすく提供します。
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/"
                  className="transform rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  ビザ情報を調べる
                  <svg
                    className="ml-2 inline-block h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>

              <div className="flex items-center gap-4 pt-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`h-10 w-10 rounded-full border-2 border-white bg-blue-${i * 100} flex items-center justify-center text-xs font-bold text-white`}
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-gray-600">
                  <span className="font-semibold">200+</span> カ国のビザ情報を網羅
                </p>
              </div>
            </div>

            <div className="animate-fade-in relative md:w-1/2">
              <div className="absolute inset-0 rotate-3 transform rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
              <img src="/images/japanese-passport-photo.jpg" alt="日本のパスポート" />

              <div className="absolute -bottom-6 -right-6 animate-bounce rounded-xl bg-white p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">最新情報</p>
                    <p className="text-sm text-gray-600">2025年2月更新</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 特徴セクション */}
      <div className="bg-white py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-16 text-center text-3xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              簡単3ステップ
            </span>
            でビザ情報を確認
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
                title: "地域を選択",
                description: "世界地図から地域を選んで、国を絞り込みます。",
              },
              {
                icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                title: "国を検索",
                description: "国名で直接検索して、素早く情報を見つけられます。",
              },
              {
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                title: "詳細を確認",
                description: "ビザ要件、滞在可能期間、必要書類などを確認できます。",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="transform rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-md">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTAセクション */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white">旅行の計画を始めましょう</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-blue-100">
            ビザ情報チェッカーを使って、スムーズな旅行計画を立てましょう。
            最新の情報で、安心して世界を旅しましょう。
          </p>
          <Link
            to="/"
            className="inline-flex transform items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-blue-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            今すぐビザ情報を調べる
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
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
              <Link to="/" className="text-gray-300 transition-colors hover:text-white">
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

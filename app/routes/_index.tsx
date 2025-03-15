/* eslint-disable react/jsx-no-comment-textnodes */
import { Link, useLocation } from "@remix-run/react";
import { useEffect } from "react";

import { Header } from "~/components/header";
import { MapSelector } from "~/components/map-selector";
import { SearchCountries } from "~/components/search-countries";
import { sendGAEvent } from "~/utils/analytics";

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  const title = "ビザ免除情報チェッカー | 日本人旅行者向けビザ情報";
  const description =
    "日本人旅行者向けの国別ビザ免除・ビザ必要情報を簡単に検索できるサービスです。世界各国のビザ要件、滞在可能日数、入国条件などを確認できます。";
  const url = "https://visa-navi.example.com";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: `${url}/images/og-image.jpg` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: `${url}/images/og-image.jpg` },
    { tagName: "link", rel: "canonical", href: url },
  ];
};

export default function Index() {
  const location = useLocation();

  useEffect(() => {
    // ページビューを追跡
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: location.pathname,
        page_title: "トップページ",
        page_location: window.location.href,
      });
    }
  }, [location]);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <div className="relative z-10 flex-grow pb-8 pt-4 md:pb-16 md:pt-8">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-center text-3xl font-bold text-transparent md:mb-4 md:text-4xl">
            ビザ情報を調べる
          </h1>
          <p className="mx-auto mb-8 max-w-2xl px-2 text-center text-sm text-gray-600 md:mb-16 md:text-base">
            地域から選ぶか、国名で検索して、日本人旅行者向けのビザ情報を確認できます。
          </p>

          <div className="space-y-10 md:space-y-20">
            <section className="animate-fade-in rounded-xl bg-white p-4 shadow-lg md:rounded-2xl md:p-8 md:shadow-xl">
              <h2 className="mb-4 flex items-center text-xl font-bold md:mb-6 md:text-2xl">
                <svg
                  className="mr-2 h-5 w-5 text-blue-500 md:h-6 md:w-6"
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

            <section className="animate-slide-up px-2 md:px-0">
              <h2 className="mb-6 flex items-center justify-center text-xl font-bold md:mb-8 md:text-2xl">
                <svg
                  className="mr-2 h-5 w-5 text-purple-500 md:h-6 md:w-6"
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
      <footer className="mt-auto bg-gray-900 py-12 text-white">
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

      {/* JSON-LD 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "ビザ免除情報チェッカー",
            url: "https://visa-navi.example.com",
            description:
              "日本人旅行者向けの国別ビザ免除・ビザ必要情報を簡単に検索できるサービスです。",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://visa-navi.example.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </div>
  );
}

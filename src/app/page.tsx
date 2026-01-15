import type { Metadata } from "next";
import { MapSelector } from "../components/MapSelector";
import { SearchCountries } from "../components/SearchCountries";

export const metadata: Metadata = {
  title: "ビザナビ - 日本国籍保持者向けビザ情報サービス",
  description:
    "日本国籍保持者向けの最新ビザ情報を提供するサービスです。外務省の情報を元に、200カ国以上のビザ免除・要件情報を簡単に検索できます。",
};

export default function Home() {
  return (
    <div className="mt-8 flex-grow pt-8 pb-8 md:pt-12 md:pb-16">
      <div className="container mx-auto max-w-6xl px-4">
        <h1 className="mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-center font-bold text-3xl text-transparent md:mb-4 md:text-4xl">
          ビザ情報を調べる
        </h1>
        <p className="mx-auto mb-8 max-w-2xl px-2 text-center text-gray-600 text-sm md:mb-16 md:text-base">
          地域から選ぶか、国名で検索して、日本人旅行者向けのビザ情報を確認できます。
        </p>

        <div className="space-y-10 md:space-y-20">
          <section className="animate-fade-in rounded-xl bg-white p-4 shadow-lg md:rounded-2xl md:p-8 md:shadow-xl">
            <h2 className="mb-4 flex items-center font-bold text-xl md:mb-6 md:text-2xl">
              <svg
                className="mr-2 h-5 w-5 text-blue-500 md:h-6 md:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
              国名で検索
            </h2>
            <div className="mx-auto max-w-xl">
              <SearchCountries />
            </div>
          </section>

          <section className="animate-slide-up px-2 md:px-0">
            <h2 className="mb-6 flex items-center justify-center font-bold text-xl md:mb-8 md:text-2xl">
              <svg
                className="mr-2 h-5 w-5 text-purple-500 md:h-6 md:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
              地域から選ぶ
            </h2>
            <MapSelector />
          </section>
        </div>
      </div>
    </div>
  );
}

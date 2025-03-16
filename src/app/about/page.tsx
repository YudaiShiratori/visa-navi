import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "このサービスについて | ビザナビ",
  description:
    "ビザナビは、日本国籍保持者向けの最新ビザ情報を提供するサービスです。外務省の情報を元に、200カ国以上のビザ免除・要件情報を簡単に検索できます。",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">ビザナビについて</h1>
        <p className="mx-auto max-w-2xl text-gray-600">
          日本国籍保持者向けの最新ビザ情報を提供するサービスです
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="mb-16 overflow-hidden rounded-xl bg-white p-6 shadow-lg md:p-8">
          <div className="mb-8 flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-gray-800">
                海外旅行の準備をもっと簡単に
              </h2>
              <p className="text-gray-600">
                ビザナビは、日本国籍保持者が海外旅行の準備をする際に、
                ビザ情報を簡単に確認できるようにするためのサービスです。
                外務省の最新情報に基づいて、200カ国以上のビザ免除・要件情報を
                わかりやすく提供しています。
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-blue-100 shadow-md">
                <Image
                  src="/images/passport.jpg"
                  alt="日本のパスポート"
                  fill
                  sizes="(max-width: 768px) 100vw, 128px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">主な機能</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500"
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
                <span>
                  <strong className="font-medium text-gray-900">国名検索:</strong>{" "}
                  行きたい国の名前を入力するだけで、ビザ情報をすぐに確認できます。
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500"
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
                <span>
                  <strong className="font-medium text-gray-900">地域別検索:</strong>{" "}
                  アジア、ヨーロッパなど地域ごとに国を絞り込んで検索できます。
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500"
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
                <span>
                  <strong className="font-medium text-gray-900">詳細情報:</strong>{" "}
                  ビザの種類、滞在可能期間、必要書類、特別条件など詳細情報を確認できます。
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500"
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
                <span>
                  <strong className="font-medium text-gray-900">公式リンク:</strong>{" "}
                  外務省や各国大使館の公式サイトへのリンクで、最新情報を確認できます。
                </span>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">免責事項</h3>
            <div className="rounded-lg bg-yellow-50 p-4 text-yellow-800">
              <p className="mb-2">
                当サイトの情報は、外務省などの公的機関の情報を元に作成していますが、各国のビザ要件は予告なく変更される場合があります。
              </p>
              <p>
                最新かつ正確な情報については、必ず渡航先の大使館や領事館、または外務省の公式ウェブサイトでご確認ください。
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              ビザ情報を検索する
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

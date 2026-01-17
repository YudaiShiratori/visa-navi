import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ビザナビについて | ビザナビ",
  description:
    "ビザナビは、日本国籍保持者向けの最新ビザ情報を提供するサービスです。外務省の情報を元に、200カ国以上のビザ免除・要件情報を簡単に検索できます。",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* メインコンテンツ */}
      <main className="container mx-auto mb-16 px-4 py-16 sm:px-8 md:py-16">
        <div className="mb-20 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="mb-6 font-bold text-4xl text-gray-900 leading-tight">
              日本人旅行者のための
              <br />
              <span className="text-blue-600">ビザ情報チェッカー</span>
            </h1>
            <p className="mb-8 text-gray-600 text-lg leading-relaxed">
              世界地図から簡単に各国のビザ免除情報を確認できます。外務省の
              最新情報に基づいて、渡航に必要な情報をわかりやすく提供します。
            </p>
            <Link
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3 text-white transition-all hover:shadow-lg"
              href="/"
            >
              ビザ情報を調べる
              <svg
                aria-hidden="true"
                className="ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  clipRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  fillRule="evenodd"
                />
              </svg>
            </Link>
            <div className="mt-8 flex items-center">
              <div className="mr-3 flex space-x-2">
                <div className="h-2 w-2 rounded-full bg-gray-300" />
                <div className="h-2 w-2 rounded-full bg-gray-300" />
                <div className="h-2 w-2 rounded-full bg-gray-300" />
                <div className="h-2 w-2 rounded-full bg-blue-600" />
              </div>
              <span className="text-gray-500 text-sm">
                200+ カ国のビザ情報を網羅
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <Image
                alt="日本のパスポートと地図"
                className="w-full object-cover"
                height={300}
                priority
                src="/images/japanese-passport-photo.jpg"
                width={450}
              />
            </div>
          </div>
        </div>

        {/* 3ステップセクション */}
        <div className="mb-20">
          <h2 className="mb-12 text-center font-bold text-3xl text-blue-600">
            簡単3ステップでビザ情報を確認
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-lg transition-transform hover:-translate-y-1">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                <svg
                  aria-hidden="true"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M9 22V12H15V22"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-center font-semibold text-xl">
                地域を選択
              </h3>
              <p className="text-center text-gray-600">
                アジア、ヨーロッパなど、訪問したい地域を選択します。
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-lg transition-transform hover:-translate-y-1">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                <svg
                  aria-hidden="true"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M21 21L16.65 16.65"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-center font-semibold text-xl">
                国を検索
              </h3>
              <p className="text-center text-gray-600">
                訪問予定の国名を入力して検索します。
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-lg transition-transform hover:-translate-y-1">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                <svg
                  aria-hidden="true"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M14 2V8H20"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M16 13H8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M16 17H8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M10 9H9H8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-center font-semibold text-xl">
                情報を確認
              </h3>
              <p className="text-center text-gray-600">
                ビザ要件、滞在可能期間などの詳細情報を確認します。
              </p>
            </div>
          </div>
        </div>

        {/* 免責事項 */}
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h3 className="mb-4 font-semibold text-xl">免責事項</h3>
          <div className="rounded-lg bg-yellow-50 p-6 text-yellow-800">
            <div className="flex items-start">
              <div className="mr-4 flex-shrink-0">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    clipRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="mb-2 font-medium">
                  当サイトの情報は、外務省などの公的機関の情報を元に作成していますが、各国のビザ要件は予告なく変更される場合があります。
                </p>
                <p>
                  最新かつ正確な情報については、必ず渡航先の大使館や領事館、または外務省の公式ウェブサイトでご確認ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

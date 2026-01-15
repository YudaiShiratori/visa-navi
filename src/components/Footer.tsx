"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Link className="inline-flex items-center" href="/">
            <span className="font-bold text-blue-600 text-lg">ビザナビ</span>
          </Link>

          <p className="mt-2 text-gray-500 text-sm">
            日本人旅行者向けのビザ情報サービス
          </p>

          <div className="mt-4 flex justify-center space-x-4">
            <Link
              className="text-gray-600 text-sm hover:text-blue-600"
              href="/about"
            >
              ビザナビについて
            </Link>
          </div>
        </div>

        <div className="mt-6 border-gray-200 border-t pt-6">
          <p className="text-center text-gray-500 text-xs">
            &copy; {currentYear} ビザナビ. All rights reserved.
          </p>
          <p className="mt-1 text-center text-gray-500 text-xs">
            このサイトは情報提供を目的としており、渡航前には必ず各国大使館や外務省の公式情報を確認してください。
          </p>
        </div>
      </div>
    </footer>
  );
}

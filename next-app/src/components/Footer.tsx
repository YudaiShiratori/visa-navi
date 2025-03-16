"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Link className="inline-flex items-center" href="/">
            <span className="text-lg font-bold text-blue-600">ビザナビ</span>
          </Link>

          <p className="mt-2 text-sm text-gray-500">日本人旅行者向けのビザ情報サービス</p>

          <div className="mt-4 flex justify-center space-x-4">
            <Link href="/about" className="text-sm text-gray-600 hover:text-blue-600">
              このサービスについて
            </Link>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <p className="text-center text-xs text-gray-500">
            &copy; {currentYear} ビザナビ. All rights reserved.
          </p>
          <p className="mt-1 text-center text-xs text-gray-500">
            このサイトは情報提供を目的としており、渡航前には必ず各国大使館や外務省の公式情報を確認してください。
          </p>
        </div>
      </div>
    </footer>
  );
}

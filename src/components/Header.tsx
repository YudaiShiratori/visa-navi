"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // メニュー外のクリックを検知してメニューを閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const header = document.getElementById("main-header");
      if (header && !header.contains(event.target as Node) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // メニューが開いているときはスクロールを無効にする
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header id="main-header" className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="mr-3">
                <Image
                  src="/images/visa-navi-logo.png"
                  alt="VISA-NAVI"
                  width={40}
                  height={40}
                  className="h-12 w-12 rounded-lg shadow-sm"
                />
              </div>
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-xl font-bold text-transparent">
                ビザ情報チェッカー
              </span>
            </Link>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                pathname === "/about" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              このサイトについて
            </Link>
            <Link
              href="/"
              className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2.5 text-sm font-medium text-white transition-all hover:shadow-lg"
            >
              ビザ情報を調べる
            </Link>
          </nav>

          {/* モバイルメニューボタン */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">メニューを開く</span>
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6H20M4 12H20M4 18H20"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-5 pt-2">
            <Link
              href="/"
              className={`block rounded-lg px-4 py-3 text-base font-medium ${
                pathname === "/"
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              ビザ情報を調べる
            </Link>
            <Link
              href="/about"
              className={`block rounded-lg px-4 py-3 text-base font-medium ${
                pathname === "/about"
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              このサイトについて
            </Link>
            <div className="mt-4 px-4">
              <Link
                href="/"
                className="block w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3 text-center font-medium text-white shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                今すぐ検索
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

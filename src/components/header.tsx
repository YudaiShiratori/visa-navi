"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
    <header
      className="sticky top-0 z-50 w-full bg-white shadow-md"
      id="main-header"
    >
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link className="flex items-center" href="/">
              <div className="mr-3">
                <Image
                  alt="VISA-NAVI"
                  className="h-12 w-12 rounded-lg shadow-sm"
                  height={40}
                  src="/images/visa-navi-logo.png"
                  width={40}
                />
              </div>
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text font-bold text-transparent text-xl">
                ビザ情報チェッカー
              </span>
            </Link>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              className={`font-medium text-sm transition-colors ${
                pathname === "/about"
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
              href="/about"
            >
              このサイトについて
            </Link>
            <Link
              className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2.5 font-medium text-sm text-white transition-all hover:shadow-lg"
              href="/"
            >
              ビザ情報を調べる
            </Link>
          </nav>

          {/* モバイルメニューボタン */}
          <div className="flex md:hidden">
            <button
              aria-expanded="false"
              className="inline-flex items-center justify-center rounded-lg p-2 text-blue-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
            >
              <span className="sr-only">メニューを開く</span>
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pt-1 pb-5">
            <Link
              className={
                "block rounded-lg px-4 py-3 font-medium text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              }
              href="/about"
              onClick={() => setIsMenuOpen(false)}
            >
              このサイトについて
            </Link>
            <div className="mt-4 px-4">
              <Link
                className="block w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3 text-center font-medium text-white shadow-md"
                href="/"
                onClick={() => setIsMenuOpen(false)}
              >
                ビザ情報を調べる
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

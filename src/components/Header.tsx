"use client";

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
    <header id="main-header" className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-600">ビザナビ</span>
            </Link>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="/"
                  className={`text-sm font-medium ${
                    pathname === "/" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`text-sm font-medium ${
                    pathname === "/about" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  このサービスについて
                </Link>
              </li>
            </ul>
          </nav>

          {/* モバイルメニューボタン */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">メニューを開く</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                pathname === "/"
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              ホーム
            </Link>
            <Link
              href="/about"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                pathname === "/about"
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              このサービスについて
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

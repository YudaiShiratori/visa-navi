import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 py-3 shadow-md backdrop-blur-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="group flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-md transition-all duration-300 group-hover:shadow-lg">
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
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-xl font-bold text-transparent">
            ビザ情報チェッカー
          </span>
        </Link>

        <nav className="hidden items-center space-x-6 md:flex">
          <Link to="/" className="font-medium text-gray-700 transition-colors hover:text-blue-600">
            ビザ情報を調べる
          </Link>
          <Link
            to="/about"
            className="font-medium text-gray-700 transition-colors hover:text-blue-600"
          >
            このサイトについて
          </Link>
          <Link
            to="/"
            className="transform rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            今すぐ検索
          </Link>
        </nav>

        <button className="text-gray-700 md:hidden">
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
    </header>
  );
}

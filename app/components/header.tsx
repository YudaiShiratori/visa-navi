import { Link } from "@remix-run/react";

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="text-xl font-bold text-gray-900">
          ビザ情報チェッカー
        </Link>
      </div>
    </header>
  );
} 
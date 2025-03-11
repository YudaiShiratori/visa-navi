import { cssBundleHref } from "@remix-run/css-bundle";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import leafletStyles from "leaflet/dist/leaflet.css";

import stylesheet from "~/tailwind.css";

import type { LinksFunction, MetaFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: leafletStyles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap",
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "ビザ免除情報チェッカー | 日本人旅行者向けビザ情報" },
    {
      name: "description",
      content:
        "日本人旅行者向けの国別ビザ免除・ビザ必要情報を簡単に検索できるサービスです。世界各国のビザ要件、滞在可能日数、入国条件などを確認できます。",
    },
    { name: "keywords", content: "ビザ,ビザ免除,日本人,海外旅行,入国条件,滞在可能日数,パスポート" },
    { name: "robots", content: "index, follow" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "ビザ免除情報チェッカー" },
    { property: "og:locale", content: "ja_JP" },
  ];
};

export default function App() {
  return (
    <html lang="ja" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex h-full flex-col bg-white">
        <div className="flex min-h-screen w-full flex-col">
          <main className="flex-grow">
            <Outlet />
          </main>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

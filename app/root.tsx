import { cssBundleHref } from "@remix-run/css-bundle";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import leafletStyles from "leaflet/dist/leaflet.css";

import stylesheet from "~/tailwind.css";
import { getGoogleAnalyticsScript } from "~/utils/analytics";

import type { LinksFunction, MetaFunction, LoaderFunction } from "@remix-run/node";

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

export const loader: LoaderFunction = async () => {
  return json({
    gaTrackingId: process.env.GOOGLE_ANALYTICS_ID,
  });
};

export default function App() {
  const { gaTrackingId } = useLoaderData<{ gaTrackingId: string }>();

  return (
    <html lang="ja" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaTrackingId}');
            `,
          }}
        />
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
        <Analytics />
      </body>
    </html>
  );
}

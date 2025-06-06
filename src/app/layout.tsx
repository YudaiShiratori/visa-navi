import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "flag-icons/css/flag-icons.min.css";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import type { Metadata } from "next";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ビザナビ | 日本人旅行者向けビザ情報チェッカー",
  description:
    "日本人旅行者向けの国別ビザ免除・ビザ必要情報を簡単に検索できるサービスです。世界各国のビザ要件、滞在可能日数、入国条件などを確認できます。",
  keywords: "ビザ,ビザ免除,日本人,海外旅行,入国条件,滞在可能日数,パスポート",
  robots: "index, follow",
  openGraph: {
    title: "ビザナビ | 日本人旅行者向けビザ情報チェッカー",
    description:
      "日本人旅行者向けの国別ビザ免除・ビザ必要情報を簡単に検索できるサービスです。世界各国のビザ要件、滞在可能日数、入国条件などを確認できます。",
    url: "https://visa-navi.vercel.app",
    images: [
      {
        url: "/images/visa-navi-logo.png",
        width: 1024,
        height: 1024,
        alt: "ビザナビ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ビザナビ | 日本人旅行者向けビザ情報チェッカー",
    description:
      "日本人旅行者向けの国別ビザ免除・ビザ必要情報を簡単に検索できるサービスです。世界各国のビザ要件、滞在可能日数、入国条件などを確認できます。",
    images: ["/images/visa-navi-logo.png"],
  },
  alternates: {
    canonical: "https://visa-navi.vercel.app",
  },
  metadataBase: new URL("https://visa-navi.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap"
        />
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
            `,
          }}
        />
        {/* 構造化データ（JSON-LD） */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "ビザナビ",
              url: "https://visa-navi.vercel.app",
              description: "日本人旅行者向けの国別ビザ免除・ビザ必要情報を簡単に検索できるサービス",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://visa-navi.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} h-full`}>
        <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-white">
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}

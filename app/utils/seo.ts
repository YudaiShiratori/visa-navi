import type { MetaDescriptor } from "@remix-run/node";

// サイト全体の共通設定
const DEFAULT_SITE_TITLE = "ビザ免除情報チェッカー";
const DEFAULT_DESCRIPTION =
  "各国のビザ免除情報を簡単に検索・確認できるサービスです。世界各国の渡航に必要なビザ情報をわかりやすく提供します。";
const DEFAULT_CANONICAL_URL = "https://visa-navi.example.com"; // 実際のドメインに変更してください
const DEFAULT_OG_IMAGE = "/images/og-image.jpg"; // 実際のOGP画像パスに変更してください

interface SEOOptions {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  noindex?: boolean;
}

/**
 * SEO用のメタタグを生成するユーティリティ関数
 */
export function getSeoMeta({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalPath = "",
  ogImage = DEFAULT_OG_IMAGE,
  noindex = false,
}: SEOOptions = {}): MetaDescriptor[] {
  const fullTitle = title ? `${title} | ${DEFAULT_SITE_TITLE}` : DEFAULT_SITE_TITLE;
  const canonicalUrl = `${DEFAULT_CANONICAL_URL}${canonicalPath}`;
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${DEFAULT_CANONICAL_URL}${ogImage}`;

  const meta: MetaDescriptor[] = [
    { title: fullTitle },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: canonicalUrl },

    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:url", content: canonicalUrl },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImageUrl },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: canonicalUrl },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImageUrl },
  ];

  // noindexが指定されている場合、検索エンジンにインデックスさせない
  if (noindex) {
    meta.push({ name: "robots", content: "noindex, nofollow" });
  }

  return meta;
}

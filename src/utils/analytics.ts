"use client";

/**
 * Google Analyticsのスクリプトを生成する関数
 * @param {string} gaTrackingId - Google AnalyticsのトラッキングID（測定ID）
 * @returns {string} Google Analyticsのスクリプト
 */
export function getGoogleAnalyticsScript(gaTrackingId: string): string {
  return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaTrackingId}');
  `;
}

/**
 * Google Analyticsのイベントを送信する関数
 * @param {string} action - イベントアクション
 * @param {Object} params - イベントパラメータ
 */
type GtagParams = Record<string, string | number | boolean | undefined>;

export function sendGAEvent(action: string, params: GtagParams = {}): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, params);
  }
}

declare global {
  interface Window {
    gtag: (
      command: "event" | "config" | "js",
      action: string | Date,
      params?: GtagParams
    ) => void;
    dataLayer: unknown[];
  }
}

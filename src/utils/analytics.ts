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
export function sendGAEvent(
  action: string,
  params: Record<string, any> = {}
): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, params);
  }
}

// TypeScriptのグローバル型定義を拡張
declare global {
  interface Window {
    gtag: (
      command: "event" | "config" | "js",
      action: any,
      params?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

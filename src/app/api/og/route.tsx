import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "ビザナビ";

    // HTML文字列を使用してOG画像を生成
    const html = `
      <div style="height:100%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#f0f9ff;background-image:linear-gradient(to bottom right,#dbeafe,#eff6ff);padding:40px;font-family:sans-serif">
        <div style="display:flex;align-items:center;justify-content:center;margin-bottom:20px">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 12H22" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div style="margin-left:20px;font-size:48px;font-weight:bold;background:linear-gradient(to right,#3b82f6,#2563eb);-webkit-background-clip:text;background-clip:text;color:transparent">ビザナビ</div>
        </div>
        <div style="font-size:60px;font-weight:bold;color:#1e3a8a;text-align:center;margin-top:20px;max-width:900px">${title}</div>
        <div style="font-size:28px;color:#475569;margin-top:20px;text-align:center">日本国籍保持者向けビザ情報サービス</div>
      </div>
    `;

    // @ts-expect-error - ImageResponseの型定義の問題を無視
    return new ImageResponse(html, {
      width: 1200,
      height: 630,
    });
  } catch (e) {
    console.error(e);
    return new Response("Failed to generate OG image", { status: 500 });
  }
}

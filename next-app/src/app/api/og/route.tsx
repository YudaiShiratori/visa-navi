import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "ビザナビ";

    // フォントの読み込み
    const fontData = await fetch(
      new URL("../../../assets/NotoSansJP-Bold.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f0f9ff",
            backgroundImage: "linear-gradient(to bottom right, #dbeafe, #eff6ff)",
            padding: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12H22"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div
              style={{
                marginLeft: "20px",
                fontSize: "48px",
                fontWeight: "bold",
                background: "linear-gradient(to right, #3b82f6, #2563eb)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              ビザナビ
            </div>
          </div>
          <div
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              color: "#1e3a8a",
              textAlign: "center",
              marginTop: "20px",
              maxWidth: "900px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#475569",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            日本国籍保持者向けビザ情報サービス
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "NotoSansJP",
            data: fontData,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  } catch (e) {
    console.error(e);
    return new Response("Failed to generate OG image", { status: 500 });
  }
}

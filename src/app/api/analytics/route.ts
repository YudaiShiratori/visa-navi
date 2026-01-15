import { NextResponse } from "next/server";

import {
  getPageViewsLast7Days,
  getTopCountries,
  getTopPages,
  getTopRegions,
  getTopSearchTerms,
} from "../../../utils/ga-api";

export async function GET() {
  try {
    const [pageViews, topPages, topSearchTerms, topRegions, topCountries] =
      await Promise.all([
        getPageViewsLast7Days(),
        getTopPages(),
        getTopSearchTerms(),
        getTopRegions(),
        getTopCountries(),
      ]);

    return NextResponse.json({
      pageViews,
      topPages,
      topSearchTerms,
      topRegions,
      topCountries,
    });
  } catch (error) {
    console.error("アクセス解析データの取得に失敗しました:", error);
    return NextResponse.json(
      {
        error: "データの取得に失敗しました",
        message: error instanceof Error ? error.message : "不明なエラー",
      },
      { status: 500 }
    );
  }
}

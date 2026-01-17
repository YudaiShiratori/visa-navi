// このファイルはサーバーサイドでのみ実行されます
import { BetaAnalyticsDataClient } from "@google-analytics/data";

// Google Analytics APIクライアントの初期化
let analyticsDataClient: BetaAnalyticsDataClient | null = null;
const propertyId = process.env.GA_PROPERTY_ID;

try {
  analyticsDataClient = new BetaAnalyticsDataClient();
} catch (error) {
  console.error(
    "Google Analytics APIクライアントの初期化に失敗しました:",
    error
  );
}

/**
 * 過去7日間のページビューを取得する
 */
export async function getPageViewsLast7Days() {
  if (!(analyticsDataClient && propertyId)) {
    console.error(
      "Google Analytics APIクライアントまたはプロパティIDが設定されていません"
    );
    return [];
  }

  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: "7daysAgo",
          endDate: "today",
        },
      ],
      dimensions: [
        {
          name: "date",
        },
      ],
      metrics: [
        {
          name: "screenPageViews",
        },
      ],
    });

    if (!response?.rows || response.rows.length === 0) {
      console.log("Google Analytics APIからデータが返されませんでした");
      return [];
    }

    return response.rows.map((row) => {
      const date = row.dimensionValues?.[0].value || "";
      const count = Number.parseInt(row.metricValues?.[0].value || "0", 10);

      // YYYYMMDD形式の日付をYYYY-MM-DD形式に変換
      const formattedDate = date
        ? `${date.substring(0, 4)}-${date.substring(4, 6)}-${date.substring(6, 8)}`
        : "";

      return { date: formattedDate, count };
    });
  } catch (error) {
    console.error("Google Analytics APIからのデータ取得に失敗しました:", error);
    if (error instanceof Error) {
      console.error("エラーの詳細:", error.message);
      console.error("エラーのスタックトレース:", error.stack);
    }
    return [];
  }
}

/**
 * 人気のページを取得する
 */
export async function getTopPages() {
  if (!(analyticsDataClient && propertyId)) {
    console.error(
      "Google Analytics APIクライアントまたはプロパティIDが設定されていません"
    );
    return [];
  }

  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: "30daysAgo",
          endDate: "today",
        },
      ],
      dimensions: [
        {
          name: "pagePath",
        },
      ],
      metrics: [
        {
          name: "screenPageViews",
        },
      ],
      orderBys: [
        {
          metric: {
            metricName: "screenPageViews",
          },
          desc: true,
        },
      ],
      limit: 10,
    });

    if (!response?.rows) {
      console.log("Google Analytics APIからデータが返されませんでした");
      return [];
    }

    return response.rows.map((row) => {
      const path = row.dimensionValues?.[0].value || "";
      const views = Number.parseInt(row.metricValues?.[0].value || "0", 10);
      return { path, views };
    });
  } catch (error) {
    console.error("Google Analytics APIからのデータ取得に失敗しました:", error);
    if (error instanceof Error) {
      console.error("エラーの詳細:", error.message);
      console.error("エラーのスタックトレース:", error.stack);
    }
    return [];
  }
}

/**
 * 人気の検索キーワードを取得する
 */
export async function getTopSearchTerms() {
  if (!(analyticsDataClient && propertyId)) {
    console.error(
      "Google Analytics APIクライアントまたはプロパティIDが設定されていません"
    );
    return [];
  }

  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: "30daysAgo",
          endDate: "today",
        },
      ],
      dimensions: [
        {
          name: "searchTerm",
        },
      ],
      metrics: [
        {
          name: "searchResultViews",
        },
      ],
      orderBys: [
        {
          metric: {
            metricName: "searchResultViews",
          },
          desc: true,
        },
      ],
      limit: 10,
    });

    if (!response?.rows) {
      console.log("Google Analytics APIからデータが返されませんでした");
      return [];
    }

    return response.rows.map((row) => {
      const term = row.dimensionValues?.[0].value || "";
      const count = Number.parseInt(row.metricValues?.[0].value || "0", 10);
      return { term, count };
    });
  } catch (error) {
    console.error("Google Analytics APIからのデータ取得に失敗しました:", error);
    if (error instanceof Error) {
      console.error("エラーの詳細:", error.message);
      console.error("エラーのスタックトレース:", error.stack);
    }
    return [];
  }
}

/**
 * 人気の地域を取得する
 */
export async function getTopRegions() {
  if (!(analyticsDataClient && propertyId)) {
    console.error(
      "Google Analytics APIクライアントまたはプロパティIDが設定されていません"
    );
    return [];
  }

  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: "30daysAgo",
          endDate: "today",
        },
      ],
      dimensions: [
        {
          name: "region",
        },
      ],
      metrics: [
        {
          name: "activeUsers",
        },
      ],
      orderBys: [
        {
          metric: {
            metricName: "activeUsers",
          },
          desc: true,
        },
      ],
      limit: 10,
    });

    if (!response?.rows) {
      console.log("Google Analytics APIからデータが返されませんでした");
      return [];
    }

    return response.rows.map((row) => {
      const region = row.dimensionValues?.[0].value || "";
      const count = Number.parseInt(row.metricValues?.[0].value || "0", 10);
      return { region, count };
    });
  } catch (error) {
    console.error("Google Analytics APIからのデータ取得に失敗しました:", error);
    if (error instanceof Error) {
      console.error("エラーの詳細:", error.message);
      console.error("エラーのスタックトレース:", error.stack);
    }
    return [];
  }
}

/**
 * 人気の国を取得する
 */
export async function getTopCountries() {
  if (!(analyticsDataClient && propertyId)) {
    console.error(
      "Google Analytics APIクライアントまたはプロパティIDが設定されていません"
    );
    return [];
  }

  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: "30daysAgo",
          endDate: "today",
        },
      ],
      dimensions: [
        {
          name: "country",
        },
      ],
      metrics: [
        {
          name: "activeUsers",
        },
      ],
      orderBys: [
        {
          metric: {
            metricName: "activeUsers",
          },
          desc: true,
        },
      ],
      limit: 10,
    });

    if (!response?.rows) {
      console.log("Google Analytics APIからデータが返されませんでした");
      return [];
    }

    return response.rows.map((row) => {
      const country = row.dimensionValues?.[0].value || "";
      const count = Number.parseInt(row.metricValues?.[0].value || "0", 10);
      return { country, count };
    });
  } catch (error) {
    console.error("Google Analytics APIからのデータ取得に失敗しました:", error);
    if (error instanceof Error) {
      console.error("エラーの詳細:", error.message);
      console.error("エラーのスタックトレース:", error.stack);
    }
    return [];
  }
}

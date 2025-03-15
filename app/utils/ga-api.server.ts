import pkg from "@google-analytics/data";
const { BetaAnalyticsDataClient } = pkg;

// Google Analytics Data APIクライアントの初期化
const propertyId = process.env.GA_PROPERTY_ID;

// APIクライアントの初期化
let analyticsDataClient: typeof BetaAnalyticsDataClient.prototype | null = null;

try {
  // Google Cloud認証情報を使用してクライアントを初期化
  analyticsDataClient = new BetaAnalyticsDataClient();
} catch (error) {
  console.error("Google Analytics Data APIクライアントの初期化に失敗しました:", error);
}

/**
 * 過去7日間のページビューを取得する
 */
export async function getPageViewsLast7Days() {
  if (!analyticsDataClient || !propertyId) {
    console.error("Google Analytics APIクライアントまたはプロパティIDが設定されていません");
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

    if (!response || !response.rows || response.rows.length === 0) {
      console.log("Google Analytics APIからデータが返されませんでした");
      return [];
    }

    return response.rows.map((row) => {
      const date = row.dimensionValues?.[0].value || "";
      const count = parseInt(row.metricValues?.[0].value || "0", 10);

      // 日付のフォーマットを変換 (YYYYMMDD -> YYYY-MM-DD)
      const formattedDate = date.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3");

      return {
        date: formattedDate,
        count,
      };
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
  if (!analyticsDataClient || !propertyId) {
    console.error("Google Analytics APIクライアントまたはプロパティIDが設定されていません");
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

    if (!response || !response.rows) {
      console.log("Google Analytics APIからデータが返されませんでした");
      return [];
    }

    return response.rows.map((row) => {
      return {
        path: row.dimensionValues?.[0].value || "",
        views: parseInt(row.metricValues?.[0].value || "0", 10),
      };
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
  if (!analyticsDataClient || !propertyId) {
    console.error("Google Analytics APIクライアントまたはプロパティIDが設定されていません");
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
          name: "eventName",
        },
        {
          name: "customEvent:search_term",
        },
      ],
      metrics: [
        {
          name: "eventCount",
        },
      ],
      dimensionFilter: {
        filter: {
          fieldName: "eventName",
          stringFilter: {
            matchType: "EXACT",
            value: "search",
          },
        },
      },
      orderBys: [
        {
          metric: {
            metricName: "eventCount",
          },
          desc: true,
        },
      ],
      limit: 10,
    });

    if (!response || !response.rows) {
      console.log("Google Analytics APIからデータが返されませんでした");
      return [];
    }

    return response.rows.map((row) => {
      return {
        term: row.dimensionValues?.[1].value || "",
        count: parseInt(row.metricValues?.[0].value || "0", 10),
      };
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
 * 地域別アクセス数を取得する
 */
export async function getTopRegions() {
  if (!analyticsDataClient || !propertyId) {
    console.error("Google Analytics APIクライアントまたはプロパティIDが設定されていません");
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
          name: "eventName",
        },
        {
          name: "customEvent:region_name",
        },
      ],
      metrics: [
        {
          name: "eventCount",
        },
      ],
      dimensionFilter: {
        filter: {
          fieldName: "eventName",
          stringFilter: {
            matchType: "EXACT",
            value: "select_region",
          },
        },
      },
      orderBys: [
        {
          metric: {
            metricName: "eventCount",
          },
          desc: true,
        },
      ],
      limit: 10,
    });

    if (!response || !response.rows) {
      console.log("Google Analytics APIからデータが返されませんでした");
      return [];
    }

    return response.rows.map((row) => {
      return {
        region: row.dimensionValues?.[1].value || "",
        count: parseInt(row.metricValues?.[0].value || "0", 10),
      };
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
 * 国別アクセス数を取得する
 */
export async function getTopCountries() {
  if (!analyticsDataClient || !propertyId) {
    console.error("Google Analytics APIクライアントまたはプロパティIDが設定されていません");
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
          name: "eventName",
        },
        {
          name: "customEvent:country_name",
        },
      ],
      metrics: [
        {
          name: "eventCount",
        },
      ],
      dimensionFilter: {
        filter: {
          fieldName: "eventName",
          stringFilter: {
            matchType: "EXACT",
            value: "select_country",
          },
        },
      },
      orderBys: [
        {
          metric: {
            metricName: "eventCount",
          },
          desc: true,
        },
      ],
      limit: 10,
    });

    if (!response || !response.rows) {
      console.log("Google Analytics APIからデータが返されませんでした");
      return [];
    }

    return response.rows.map((row) => {
      return {
        country: row.dimensionValues?.[1].value || "",
        count: parseInt(row.metricValues?.[0].value || "0", 10),
      };
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

// モックデータ（APIが利用できない場合のフォールバック）
function getMockPageViewsLast7Days() {
  const today = new Date();
  const pageViews = [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const formattedDate = date.toISOString().split("T")[0];

    // ランダムなページビュー数を生成（実際のデータがない場合）
    const count = Math.floor(Math.random() * 100) + 50;

    pageViews.push({
      date: formattedDate,
      count,
    });
  }

  return pageViews;
}

function getMockTopPages() {
  return [
    { path: "/", views: 450 },
    { path: "/map/asia", views: 320 },
    { path: "/map/europe", views: 280 },
    { path: "/map/country/thailand", views: 210 },
    { path: "/map/country/france", views: 180 },
  ];
}

function getMockTopSearchTerms() {
  return [
    { term: "タイ", count: 78 },
    { term: "フランス", count: 65 },
    { term: "イタリア", count: 52 },
    { term: "アメリカ", count: 48 },
    { term: "オーストラリア", count: 43 },
  ];
}

function getMockTopRegions() {
  return [
    { region: "アジア", count: 520 },
    { region: "ヨーロッパ", count: 480 },
    { region: "南北アメリカ", count: 320 },
    { region: "オセアニア", count: 180 },
    { region: "アフリカ", count: 120 },
  ];
}

function getMockTopCountries() {
  return [
    { country: "タイ", count: 210 },
    { country: "フランス", count: 180 },
    { country: "イタリア", count: 150 },
    { country: "アメリカ", count: 130 },
    { country: "オーストラリア", count: 110 },
  ];
}

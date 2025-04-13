import type { Country } from "../types";

export const europeCountries: Country[] = [
  {
    id: "france",
    name: "フランス",
    code: "FR",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
    ],
    notes: ["90日を超える滞在には長期滞在ビザ（VLS）の取得が必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/france/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "germany",
    name: "ドイツ",
    code: "DE",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
    ],
    notes: ["90日を超える滞在には滞在許可（Aufenthaltserlaubnis）が必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/germany/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "italy",
    name: "イタリア",
    code: "IT",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間がシェンゲン協定加盟国出国予定日から3ヵ月以上必要（過去10年以内に発行されたもの）",
      "未使用査証欄1頁以上必要",
      "出国用航空券の所持が必要",
      "海外旅行保険の加入が望ましい",
      "滞在費用証明の持参が望ましい",
      "あらゆる180日間の期間内で90日以内の観光・業務目的の滞在はビザ不要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/italy/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "spain",
    name: "スペイン",
    code: "ES",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
    ],
    notes: [
      "90日を超える滞在には長期滞在ビザの取得が必要",
      "観光目的の場合、十分な経済力の証明として1日あたり約100ユーロ必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/spain/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "uk",
    name: "イギリス",
    code: "GB",
    region: "europe",
    visaRequirement: {
      type: "evisa",
      duration: 180,
      evisaAvailable: true,
      purpose: ["tourism", "business", "transit", "education"],
    },
    conditions: [
      "パスポートの残存有効期間が帰国日まで有効なもの",
      "出国用航空券（乗車券、乗船券も可）の所持が必要",
      "滞在費用証明の持参が必要",
      "入国時に提示可能な滞在資格の裏付け資料（入学許可書、招聘状など）の準備が望ましい",
      "6か月未満の観光、親族・知人訪問、業務、短期留学目的の滞在はビザ不要",
      "2025年1月8日渡航分よりeTA（電子渡航認証）の取得が必要",
      "英国への入国を伴わない乗り継ぎはETA取得が不要（2025年1月17日～）",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/uk/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "switzerland",
    name: "スイス",
    code: "CH",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
      "EU加盟国ではないがシェンゲン協定には加盟している",
    ],
    notes: ["90日を超える滞在には長期滞在ビザの取得が必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/switzerland/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "netherlands",
    name: "オランダ",
    code: "NL",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間がシェンゲン協定加盟国出国予定日から3ヵ月以上必要（過去10年以内に発行されたもの）",
      "未使用査証欄1頁以上必要",
      "出国用航空券の所持が必要",
      "海外旅行保険の加入が望ましい",
      "滞在費用証明の持参が望ましい",
      "あらゆる180日間の期間内で90日以内の観光、業務目的の滞在はビザ不要",
    ],
    notes: ["カリブ海領土は別条件"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/netherlands/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "belgium",
    name: "ベルギー",
    code: "BE",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
    ],
    notes: [
      "90日を超える滞在には長期滞在ビザの取得が必要",
      "8日以上滞在する場合は滞在地の市役所への登録が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/belgium/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "austria",
    name: "オーストリア",
    code: "AT",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 180,
      purpose: ["tourism", "business", "visit"],
    },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間がシェンゲン協定加盟国出国時3ヵ月以上必要（過去10年以内に発行されたもの）",
      "未使用査証欄2頁以上必要",
      "出国用航空券の所持が必要",
      "海外旅行保険の加入が望ましい",
      "滞在費用証明の持参が望ましい",
      "日本との二国間の査証免除取極が優先され、360日間中、入国日から180日までの観光、訪問、業務目的はビザ不要",
    ],
    notes: [
      "180日間の滞在は、入国後最初の90日間の後、引き続き90日間滞在する場合のみ可能",
      "出国後の再入国には制限があるため、事前に確認が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/austria/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "sweden",
    name: "スウェーデン",
    code: "SE",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
    ],
    notes: ["90日を超える滞在には長期滞在ビザの取得が必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/sweden/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "norway",
    name: "ノルウェー",
    code: "NO",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
      "EU加盟国ではないがシェンゲン協定には加盟している",
    ],
    notes: ["90日を超える滞在には長期滞在ビザの取得が必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/norway/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "denmark",
    name: "デンマーク",
    code: "DK",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
    ],
    notes: [
      "90日を超える滞在には長期滞在ビザの取得が必要",
      "グリーンランドとフェロー諸島はシェンゲン圏外",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/denmark/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "finland",
    name: "フィンランド",
    code: "FI",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
    ],
    notes: ["90日を超える滞在には長期滞在ビザの取得が必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/finland/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "poland",
    name: "ポーランド",
    code: "PL",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
    ],
    notes: ["90日を超える滞在には長期滞在ビザの取得が必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/poland/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "czech",
    name: "チェコ",
    code: "CZ",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
    ],
    notes: ["90日を超える滞在には長期滞在ビザの取得が必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/czech/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "portugal",
    name: "ポルトガル",
    code: "PT",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
    ],
    notes: ["90日を超える滞在には長期滞在ビザの取得が必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/portugal/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "ireland",
    name: "アイルランド",
    code: "IE",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 180,
      purpose: ["tourism", "business", "education", "visit"],
    },
    conditions: [
      "パスポートの残存有効期間が出国時6ヶ月以上必要",
      "出国用航空券の所持が必要",
      "6か月以内の滞在は目的にかかわらずビザ不要",
      "短期商用の場合は、入国時に訪問先からの招聘状等などの提示が求められることがあり提示ができない場合入国拒否になる事もある",
    ],
    notes: ["3か月を超える滞在は、現地警察署等で外国人登録と滞在許可の取得が必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/ireland/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "greece",
    name: "ギリシャ",
    code: "GR",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間がシェンゲン協定加盟国出国予定日から3ヵ月以上必要（過去10年以内に発行されたもの）",
      "未使用査証欄見開2頁以上必要",
      "出国用航空券の所持が必要",
      "海外旅行保険の加入が望ましい",
      "滞在費用証明の持参が望ましい",
      "あらゆる180日間の期間内で90日以内の観光、業務目的の滞在はビザ不要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/greece/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "hungary",
    name: "ハンガリー",
    code: "HU",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
    ],
    notes: ["90日を超える滞在には長期滞在ビザの取得が必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/hungary/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "romania",
    name: "ルーマニア",
    code: "RO",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
    ],
    notes: ["90日を超える滞在には長期滞在ビザの取得が必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/romania/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "bulgaria",
    name: "ブルガリア",
    code: "BG",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間が入国時3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "90日以内の観光・商用目的はビザ不要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/bulgaria/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "croatia",
    name: "クロアチア",
    code: "HR",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "official"],
    },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間がシェンゲン協定加盟国出国時3ヵ月以上必要（過去10年以内に発行されたもの）",
      "未使用査証欄1頁以上必要",
      "出国用航空券の所持が必要",
      "滞在費用証明（１日あたりEUR70相当額、ホテルの予約がある場合は1日あたりEUR30相当額）の持参が必要",
      "海外旅行保険の加入が望ましい",
      "180日以内の期間に合計90日以内の観光、業務、外交・公用目的の滞在はビザ不要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/croatia/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "slovakia",
    name: "スロバキア",
    code: "SK",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間が入国時3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "90日以内の観光・商用目的はビザ不要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/slovakia/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "slovenia",
    name: "スロベニア",
    code: "SI",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間が入国時3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "90日以内の観光・商用目的はビザ不要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/slovenia/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "estonia",
    name: "エストニア",
    code: "EE",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間がシェンゲン協定加盟国出国時3ヶ月以上必要（過去10年以内に発行されたもの）",
      "未使用査証欄連続3頁以上必要",
      "出国用航空券の所持が必要",
      "海外旅行傷害保険の加入が必要（滞在期間を全てカバーしてEUR30,000以上の死亡補償、クレジットカード付帯の場合は本人名義の英文保険証券が必要）",
      "あらゆる180日間の期間内で90日以内の観光、業務目的の滞在はビザ不要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/estonia/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "latvia",
    name: "ラトビア",
    code: "LV",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間が入国時3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "90日以内の観光・商用目的はビザ不要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/latvia/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "lithuania",
    name: "リトアニア",
    code: "LT",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間が入国時3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "90日以内の観光・商用目的はビザ不要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/lithuania/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "malta",
    name: "マルタ",
    code: "MT",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    conditions: [
      "パスポートの残存有効期間が入国時3ヶ月以上必要",
      "90日以内の観光・商用目的はビザ不要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/malta/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "cyprus",
    name: "キプロス",
    code: "CY",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "official"],
    },
    conditions: [
      "パスポートの残存有効期間が出国予定日から3ヵ月以上必要",
      "未使用査証欄1頁以上必要",
      "出国用航空券の所持が必要",
      "海外旅行保険の加入が望ましい",
      "滞在費用証明の持参が望ましい",
      "あらゆる180日間の期間内で90日以内の一般、外交・公用目的の滞在はビザ不要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/cyprus/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "iceland",
    name: "アイスランド",
    code: "IS",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポートの残存有効期間が出国予定日から3ヶ月以上必要（過去10年以内に発行されたもの）",
      "未使用査証欄2頁以上必要",
      "出国用航空券の所持が必要",
      "海外旅行保険の加入が望ましい",
      "滞在費用証明の持参が望ましい",
      "あらゆる180日間の期間内で90日以内の観光、業務目的の滞在はビザ不要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/iceland/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "georgia",
    name: "ジョージア",
    code: "GE",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 365 },
    conditions: ["パスポート残存有効期間が入国時6ヶ月以上必要"],
    notes: ["1年以内の滞在はビザ不要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/georgia/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "armenia",
    name: "アルメニア",
    code: "AM",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 180,
      purpose: ["tourism", "business", "visit", "official"],
    },
    conditions: [
      "パスポートの残存有効期間が帰国日まで有効なもの",
      "未使用査証欄1頁以上必要",
      "1年間で180日間以内の滞在はビザ不要（一般、公用、外交等全ての旅券タイプに適用）",
    ],
    notes: [
      "現在、日本国政府アゼルバイジャンとの国境周辺地域（ナヒチバン自治共和国との国境地域を含む。）に退避勧告を発出しています。アルメニア上記地域への渡航は、どのような目的であれ止めてください。",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/armenia/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "ukraine",
    name: "ウクライナ",
    code: "UA",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "visit"],
    },
    conditions: [
      "パスポートの残存有効期間が帰国時まで有効なもの",
      "未使用査証欄2頁以上必要",
      "海外旅行保険の加入が必要",
      "180日間で90日以内の滞在はビザ不要",
    ],
    notes: [
      "現在、日本国政府はウクライナ全土に退避勧告を発出しています。ウクライナへの渡航は、どのような目的であれ止めてください。",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/ukraine/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "serbia",
    name: "セルビア",
    code: "RS",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    conditions: ["パスポート残存有効期間が入国時3ヶ月以上必要", "90日以内の滞在はビザ不要"],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/serbia/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "belarus",
    name: "ベラルーシ",
    code: "BY",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 30 },
    conditions: [
      "パスポート残存有効期間が入国時90日以上必要",
      "ミンスク国際空港から入国・出国する場合など、特定の条件下で30日以内の滞在はビザ不要（要件確認）",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/belarus/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "liechtenstein",
    name: "リヒテンシュタイン",
    code: "LI",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    conditions: [
      "シェンゲン協定加盟国",
      "パスポート残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "スイス経由での入国が一般的",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/liechtenstein/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "luxembourg",
    name: "ルクセンブルク",
    code: "LU",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    conditions: ["シェンゲン協定加盟国", "パスポート残存有効期間が滞在予定期間＋3ヶ月以上必要"],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/luxembourg/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "russia",
    name: "ロシア",
    code: "RU",
    region: "europe",
    visaRequirement: { type: "visa_required" },
    conditions: ["パスポート残存有効期間が入国時6ヶ月以上必要"],
    notes: [
      "入国にはビザが必要。電子ビザ制度があるが、運用状況は要確認。",
      "現在の情勢により渡航制限・注意が必要。",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/russia/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "albania",
    name: "アルバニア",
    code: "AL",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が入国時6ヶ月以上必要",
      "未使用査証欄1頁以上必要",
      "出国用航空券の所持が必要",
      "黄熱に感染する危険のある国から来る、1歳以上の渡航者は黄熱予防接種証明書が必要",
      "90日以内の滞在はビザ不要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/albania/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "andorra",
    name: "アンドラ",
    code: "AD",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: ["フランスまたはスペインの入国条件を満たしていること", "90日以内の滞在はビザ不要"],
    notes: [
      "国内空港が無いため、フランスまたはスペインから陸路で入国するが、入国の際、出入国審査は行われない",
      "滞在中にパスポート、航空券の提示を求められる場合がある",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/andorra/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "bosnia_herzegovina",
    name: "ボスニア・ヘルツェゴビナ",
    code: "BA",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    conditions: [
      "パスポート残存有効期間が入国時3ヶ月以上必要",
      "90日以内の観光・商用目的はビザ不要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/bosnia/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "moldova",
    name: "モルドバ",
    code: "MD",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    conditions: [
      "パスポート残存有効期間が入国時3ヶ月以上必要",
      "90日以内の観光・商用目的はビザ不要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/moldova/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "monaco",
    name: "モナコ",
    code: "MC",
    region: "europe",
    visaRequirement: { type: "visa_free" }, // Schengen area access
    conditions: [
      "パスポート（シェンゲン協定に対応したもの）が必要",
      "シェンゲン協定加盟国ではないが、フランス経由での入国となるため、シェンゲンビザ規定に準ずる",
      "日本国籍者はビザ不要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/monaco/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "montenegro",
    name: "モンテネグロ",
    code: "ME",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    conditions: [
      "パスポート残存有効期間が入国時3ヶ月以上必要",
      "90日以内の観光・商用目的はビザ不要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/montenegro/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "north_macedonia",
    name: "北マケドニア",
    code: "MK",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "non-profit"],
    },
    conditions: [
      "パスポートの残存有効期間が出国時3ヵ月以上必要",
      "未使用査証欄1頁以上必要",
      "出国用航空券の所持が必要",
      "あらゆる180日間の期間内で90日以内の観光などの非営利活動目的による滞在はビザ不要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/macedonia/index.html",
    },
    lastUpdated: "2024-07-29",
  },
  {
    id: "san_marino",
    name: "サンマリノ",
    code: "SM",
    region: "europe",
    visaRequirement: { type: "visa_free" }, // Schengen area access
    conditions: [
      "パスポート（シェンゲン協定に対応したもの）が必要",
      "シェンゲン協定加盟国ではないが、イタリア経由での入国となるため、シェンゲンビザ規定に準ずる",
      "日本国籍者はビザ不要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/sanmarino/index.html",
    },
    lastUpdated: "2024-07-29",
  },
];

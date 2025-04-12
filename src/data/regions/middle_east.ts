import type { Country } from "../types";

export const middleEastCountries: Country[] = [
  {
    id: "uae",
    name: "アラブ首長国連邦",
    code: "AE",
    region: "middle_east",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要"],
    notes: ["30日を超える滞在にはビザが必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/uae/index.html",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "yemen",
    name: "イエメン",
    code: "YE",
    region: "middle_east",
    visaRequirement: { type: "visa_required", duration: 0 },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要"],
    notes: ["入国にはビザが必要", "現在、外務省より退避勧告（危険レベル4）が発令中"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/yemen/index.html",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "israel",
    name: "イスラエル",
    code: "IL",
    region: "middle_east",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要"],
    notes: ["90日を超える滞在にはビザが必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/israel/index.html",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "iraq",
    name: "イラク",
    code: "IQ",
    region: "middle_east",
    visaRequirement: { type: "visa_required", duration: 0 },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要"],
    notes: ["入国にはビザが必要", "現在、外務省より退避勧告（危険レベル4）が発令中"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/iraq/index.html",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "iran",
    name: "イラン",
    code: "IR",
    region: "middle_east",
    visaRequirement: { type: "visa_required", duration: 0 },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要"],
    notes: ["入国にはビザが必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/iran/index.html",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "oman",
    name: "オマーン",
    code: "OM",
    region: "middle_east",
    visaRequirement: {
      type: "evisa", // 14日以内ビザ不要だが、条件付きなのでe-Visa必須とする
      duration: 14, // ビザ不要の期間
      evisaAvailable: true,
      purpose: ["tourism"],
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "e-Visa取得"],
    notes: [
      "観光目的で14日以内の滞在の場合、一定の条件を満たせばビザ不要。それ以外はe-Visaの取得が必要。",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/oman/index.html",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "qatar",
    name: "カタール",
    code: "QA",
    region: "middle_east",
    visaRequirement: {
      type: "visa_free", // 到着時無料ビザなので実質ビザ不要
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "出国用航空券"],
    notes: ["到着時に空港で無料のビザが発行される"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/qatar/index.html",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "kuwait",
    name: "クウェート",
    code: "KW",
    region: "middle_east",
    visaRequirement: {
      type: "evisa", // 到着時ビザまたはe-Visa
      duration: 90,
      evisaAvailable: true,
      purpose: ["tourism", "business"],
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "出国用航空券"],
    notes: ["到着時に空港でビザを取得可能（有料）。事前にe-Visaの取得も可能。"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/kuwait/index.html",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "saudi_arabia",
    name: "サウジアラビア",
    code: "SA",
    region: "middle_east",
    visaRequirement: {
      type: "evisa",
      duration: 90, // 観光e-Visaの場合
      evisaAvailable: true,
      purpose: ["tourism"],
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要"],
    notes: ["観光目的の場合はe-Visa、商用目的の場合は別途ビザの取得が必要。"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/saudiarabia/index.html",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "turkey",
    name: "トルコ",
    code: "TR",
    region: "middle_east", // または Europe に分類されることもある
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要"],
    notes: ["90日を超える滞在にはビザが必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/turkey/index.html",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "bahrain",
    name: "バーレーン",
    code: "BH",
    region: "middle_east",
    visaRequirement: {
      type: "evisa", // e-Visaまたは到着時ビザ
      duration: 14, // e-Visaの一般的な期間
      evisaAvailable: true,
      purpose: ["tourism", "business"],
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要"],
    notes: ["e-Visaまたは到着時に空港でビザを取得可能（有料）。滞在期間はビザ種別による。"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/bahrain/index.html",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "jordan",
    name: "ヨルダン",
    code: "JO",
    region: "middle_east",
    visaRequirement: {
      type: "visa_required", // 到着時ビザ取得可能だが、分類上は required
      duration: 30, // 到着時ビザの場合
      purpose: ["tourism", "business"],
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要"],
    notes: ["到着時に空港でビザを取得可能（有料）。ヨルダンパスなどの利用も検討。"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/jordan/index.html",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "lebanon",
    name: "レバノン",
    code: "LB",
    region: "middle_east",
    visaRequirement: {
      type: "visa_free", // 到着時無料ビザなので実質ビザ不要
      duration: 30,
      purpose: ["tourism"],
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "出国用航空券"],
    notes: ["観光目的の場合、到着時に空港で無料のビザが発行される。商用は事前取得推奨。"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/lebanon/index.html",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "syria",
    name: "シリア",
    code: "SY",
    region: "middle_east",
    visaRequirement: {
      type: "visa_required",
      duration: 15, // 一般的な観光ビザの期間
    },
    conditions: [
      "パスポート残存有効期間が6ヶ月以上必要",
      "事前にビザの取得が必要",
      "未使用査証欄が2ページ以上必要",
    ],
    notes: [
      "現在、外務省より退避勧告（危険レベル4）が発令中",
      "ビザ申請には招へい状や身元引受書が必要な場合がある",
      "イスラエル入国スタンプがあるパスポートでは入国できない可能性がある",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/syria/index.html",
    },
    lastUpdated: "2024-07-28",
  },
];

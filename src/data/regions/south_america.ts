import type { Country } from "../types";

export const southAmericaCountries: Country[] = [
  {
    id: "brazil",
    name: "ブラジル",
    code: "BR",
    region: "south_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にCPF（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/brazil/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "argentina",
    name: "アルゼンチン",
    code: "AR",
    region: "south_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にDNI（身分証明書）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/argentina/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "chile",
    name: "チリ",
    code: "CL",
    region: "south_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にRUT（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/chile/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "peru",
    name: "ペルー",
    code: "PE",
    region: "south_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にDNI（身分証明書）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/peru/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "colombia",
    name: "コロンビア",
    code: "CO",
    region: "south_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にRUT（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/colombia/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "venezuela",
    name: "ベネズエラ",
    code: "VE",
    region: "south_america",
    visaRequirement: {
      type: "visa_required",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "東京の大使館でビザ申請が可能",
      "ビザは90日間有効で、90日間の滞在が可能",
      "入国時に指紋採取が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/venezuela/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "ecuador",
    name: "エクアドル",
    code: "EC",
    region: "south_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にRUC（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/ecuador/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "bolivia",
    name: "ボリビア",
    code: "BO",
    region: "south_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にNIT（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/bolivia/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "paraguay",
    name: "パラグアイ",
    code: "PY",
    region: "south_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にRUC（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/paraguay/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "uruguay",
    name: "ウルグアイ",
    code: "UY",
    region: "south_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にRUT（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/uruguay/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "guyana",
    name: "ガイアナ",
    code: "GY",
    region: "south_america",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "東京の大使館でビザ申請が可能",
      "ビザは30日間有効で、30日間の滞在が可能",
      "入国時に指紋採取が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/guyana/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "suriname",
    name: "スリナム",
    code: "SR",
    region: "south_america",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "東京の大使館でビザ申請が可能",
      "ビザは30日間有効で、30日間の滞在が可能",
      "入国時に指紋採取が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/suriname/index.html",
    },
    lastUpdated: "2024-05-21",
  },
];

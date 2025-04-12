import type { Country } from "../types";

export const northAmericaCountries: Country[] = [
  {
    id: "usa",
    name: "アメリカ合衆国",
    code: "US",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "ESTA（電子渡航認証）の取得が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "ESTAは2年間有効で、複数回の入国が可能",
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/usa/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "canada",
    name: "カナダ",
    code: "CA",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 180,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "eTA（電子渡航認証）の取得が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "eTAは5年間有効で、複数回の入国が可能",
      "180日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/canada/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "mexico",
    name: "メキシコ",
    code: "MX",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 180,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "180日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にFMM（入国カード）の記入が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/mexico/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "guatemala",
    name: "グアテマラ",
    code: "GT",
    region: "north_america",
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
      mofa: "https://www.mofa.go.jp/mofaj/area/guatemala/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "honduras",
    name: "ホンジュラス",
    code: "HN",
    region: "north_america",
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
      "入国時にRTN（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/honduras/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "elsalvador",
    name: "エルサルバドル",
    code: "SV",
    region: "north_america",
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
      mofa: "https://www.mofa.go.jp/mofaj/area/elsalvador/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "nicaragua",
    name: "ニカラグア",
    code: "NI",
    region: "north_america",
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
      mofa: "https://www.mofa.go.jp/mofaj/area/nicaragua/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "belize",
    name: "ベリーズ",
    code: "BZ",
    region: "north_america",
    visaRequirement: { type: "visa_free", duration: 180 },
    conditions: ["パスポート残存有効期間が滞在日数以上必要", "出国用航空券"],
    notes: ["180日以内の観光・商用目的はビザ不要。"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/belize/index.html",
    },
    lastUpdated: "2024-07-27",
  },
  {
    id: "costarica",
    name: "コスタリカ",
    code: "CR",
    region: "north_america",
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
      "入国時にDIMEX（外国人ID）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/costarica/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "panama",
    name: "パナマ",
    code: "PA",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 180,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "180日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にRUC（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/panama/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "cuba",
    name: "キューバ",
    code: "CU",
    region: "americas",
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
      mofa: "https://www.mofa.go.jp/mofaj/area/cuba/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "jamaica",
    name: "ジャマイカ",
    code: "JM",
    region: "americas",
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
      mofa: "https://www.mofa.go.jp/mofaj/area/jamaica/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "haiti",
    name: "ハイチ",
    code: "HT",
    region: "americas",
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
      mofa: "https://www.mofa.go.jp/mofaj/area/haiti/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "dominicanrepublic",
    name: "ドミニカ共和国",
    code: "DO",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "30日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にRNC（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/dominicanrepublic/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "bahamas",
    name: "バハマ",
    code: "BS",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時に滞在目的の説明が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/bahamas/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "barbados",
    name: "バルバドス",
    code: "BB",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時に滞在目的の説明が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/barbados/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "trinidadtobago",
    name: "トリニダード・トバゴ",
    code: "TT",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時に滞在目的の説明が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/trinidadtobago/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "saintlucia",
    name: "セントルシア",
    code: "LC",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時に滞在目的の説明が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/saintlucia/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "saintvincentgrenadines",
    name: "セントビンセント・グレナディーン",
    code: "VC",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時に滞在目的の説明が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/saintvincentgrenadines/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "antiguabarbuda",
    name: "アンティグア・バーブーダ",
    code: "AG",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時に滞在目的の説明が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/antiguabarbuda/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "grenada",
    name: "グレナダ",
    code: "GD",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時に滞在目的の説明が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/grenada/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "saintkittsnevis",
    name: "セントクリストファー・ネイビス",
    code: "KN",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時に滞在目的の説明が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/saintkittsnevis/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "dominica",
    name: "ドミニカ国",
    code: "DM",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時に滞在目的の説明が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/dominica/index.html",
    },
    lastUpdated: "2024-05-21",
  },
];

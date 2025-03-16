export interface VisaRequirement {
  type: "visa_free" | "evisa" | "visa_required";
  duration: number;
  // 電子ビザが利用可能かどうか
  evisaAvailable?: boolean;
  // ビザなし入国が可能かどうか
  visaFreeEntry?: boolean;
  // ビザなし入国の場合の滞在可能期間
  visaFreeDuration?: number;
  purpose?: ("tourism" | "business" | "transit")[];
}

export interface Country {
  id: string;
  name: string;
  region: string;
  visaRequirement: VisaRequirement;
  conditions?: string[];
  documents?: string[];
  notes?: string;
  officialLinks?: {
    mofa?: string;
    embassy?: string;
    [key: string]: string | undefined;
  };
  lastUpdated?: string;
}

export const countries: Country[] = [
  {
    id: "thailand",
    name: "タイ",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "観光目的のみ"],
    documents: ["有効なパスポート", "帰国便の予約証明"],
    notes: "30日を超える滞在にはビザの取得が必要",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/thailand.html",
      embassy: "https://www.thaiembassy.jp/",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "vietnam",
    name: "ベトナム",
    region: "asia",
    visaRequirement: {
      type: "evisa",
      duration: 30,
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要"],
    documents: ["有効なパスポート", "電子ビザの印刷物", "往復航空券"],
    notes: "電子ビザは公式サイトから申請可能",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/vietnam.html",
      evisa: "https://evisa.xuatnhapcanh.gov.vn/",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "singapore",
    name: "シンガポール",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "出国用航空券の所持"],
    documents: ["有効なパスポート", "帰国便の予約証明", "滞在先の情報"],
    notes: "90日を超える滞在にはビザの取得が必要",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/singapore.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "malaysia",
    name: "マレーシア",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "出国用航空券の所持"],
    documents: ["有効なパスポート", "帰国便の予約証明"],
    notes: "90日を超える滞在にはビザの取得が必要",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/malaysia.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "korea",
    name: "韓国",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    conditions: ["パスポートの残存有効期間が滞在期間以上必要"],
    documents: ["有効なパスポート"],
    notes: "90日を超える滞在にはビザの取得が必要",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/korea.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "china",
    name: "中国",
    region: "asia",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "ビザの事前取得"],
    documents: ["有効なパスポート", "ビザ申請書", "証明写真", "往復航空券"],
    notes: "2023年3月15日から観光目的の15日以内の滞在はビザ免除（試験的に実施）",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/china.html",
      embassy: "http://www.china-embassy.or.jp/jpn/",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "philippines",
    name: "フィリピン",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "出国用航空券の所持"],
    documents: ["有効なパスポート", "帰国便の予約証明"],
    notes: "30日を超える滞在にはビザの取得が必要",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/philippines.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "indonesia",
    name: "インドネシア",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "出国用航空券の所持"],
    documents: ["有効なパスポート", "帰国便の予約証明"],
    notes: "30日を超える滞在にはビザの取得が必要",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/indonesia.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "india",
    name: "インド",
    region: "asia",
    visaRequirement: {
      type: "evisa",
      duration: 30,
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "電子ビザの事前取得"],
    documents: ["有効なパスポート", "電子ビザの印刷物", "往復航空券"],
    notes: "電子ビザは公式サイトから申請可能",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/india.html",
      evisa: "https://indianvisaonline.gov.in/",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "usa",
    name: "アメリカ",
    region: "north-america",
    visaRequirement: {
      type: "evisa",
      duration: 90,
    },
    conditions: ["ESTA（電子渡航認証）の事前取得", "パスポートの残存有効期間が滞在期間以上必要"],
    documents: ["有効なパスポート", "ESTA認証", "帰国便の予約証明"],
    notes: "ESTAは72時間前までに申請することを推奨",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/usa.html",
      esta: "https://esta.cbp.dhs.gov/",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "canada",
    name: "カナダ",
    region: "north-america",
    visaRequirement: {
      type: "evisa",
      duration: 180,
    },
    conditions: ["eTA（電子渡航認証）の事前取得", "パスポートの残存有効期間が滞在期間以上必要"],
    documents: ["有効なパスポート", "eTA認証", "帰国便の予約証明"],
    notes: "eTAは事前にオンラインで申請が必要",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/canada.html",
      eta: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "mexico",
    name: "メキシコ",
    region: "north-america",
    visaRequirement: {
      type: "visa_free",
      duration: 180,
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "出国用航空券の所持"],
    documents: ["有効なパスポート", "帰国便の予約証明", "滞在先の情報"],
    notes: "180日を超える滞在にはビザの取得が必要",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/mexico.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "brazil",
    name: "ブラジル",
    region: "south-america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "出国用航空券の所持"],
    documents: ["有効なパスポート", "帰国便の予約証明"],
    notes: "90日を超える滞在にはビザの取得が必要",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/brazil.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "argentina",
    name: "アルゼンチン",
    region: "south-america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    conditions: ["パスポートの残存有効期間が滞在期間以上必要", "出国用航空券の所持"],
    documents: ["有効なパスポート", "帰国便の予約証明"],
    notes: "90日を超える滞在にはビザの取得が必要",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/argentina.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "peru",
    name: "ペルー",
    region: "south-america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "出国用航空券の所持"],
    documents: ["有効なパスポート", "帰国便の予約証明"],
    notes: "90日を超える滞在にはビザの取得が必要",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/peru.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "uk",
    name: "イギリス",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 180,
    },
    conditions: ["パスポートの残存有効期間が滞在期間以上必要", "出国用航空券の所持"],
    documents: ["有効なパスポート", "帰国便の予約証明", "滞在先の情報"],
    notes: "6ヶ月を超える滞在にはビザの取得が必要",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/uk.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "france",
    name: "フランス",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    conditions: ["パスポートの残存有効期間が滞在期間後3ヶ月以上必要", "出国用航空券の所持"],
    documents: ["有効なパスポート", "帰国便の予約証明", "滞在先の情報"],
    notes: "シェンゲン協定加盟国。180日間で最大90日間の滞在が可能",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/france.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "germany",
    name: "ドイツ",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    conditions: ["パスポートの残存有効期間が滞在期間後3ヶ月以上必要", "出国用航空券の所持"],
    documents: ["有効なパスポート", "帰国便の予約証明", "滞在先の情報"],
    notes: "シェンゲン協定加盟国。180日間で最大90日間の滞在が可能",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/germany.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "italy",
    name: "イタリア",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    conditions: ["パスポートの残存有効期間が滞在期間後3ヶ月以上必要", "出国用航空券の所持"],
    documents: ["有効なパスポート", "帰国便の予約証明", "滞在先の情報"],
    notes: "シェンゲン協定加盟国。180日間で最大90日間の滞在が可能",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/italy.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "spain",
    name: "スペイン",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    conditions: ["パスポートの残存有効期間が滞在期間後3ヶ月以上必要", "出国用航空券の所持"],
    documents: ["有効なパスポート", "帰国便の予約証明", "滞在先の情報"],
    notes: "シェンゲン協定加盟国。180日間で最大90日間の滞在が可能",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/spain.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "australia",
    name: "オーストラリア",
    region: "oceania",
    visaRequirement: {
      type: "evisa",
      duration: 90,
    },
    conditions: ["ETASの事前取得", "パスポートの残存有効期間が滞在期間以上必要"],
    documents: ["有効なパスポート", "ETAS認証", "帰国便の予約証明"],
    notes: "ETASはオンラインで申請可能",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/australia.html",
      etas: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "new-zealand",
    name: "ニュージーランド",
    region: "oceania",
    visaRequirement: {
      type: "evisa",
      duration: 90,
    },
    conditions: ["NZeTAの事前取得", "パスポートの残存有効期間が滞在期間後3ヶ月以上必要"],
    documents: ["有効なパスポート", "NZeTA認証", "帰国便の予約証明"],
    notes: "NZeTAはオンラインで申請可能",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/nz.html",
      nzeta: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/nzeta",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "egypt",
    name: "エジプト",
    region: "africa",
    visaRequirement: {
      type: "evisa",
      duration: 30,
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "電子ビザの事前取得"],
    documents: ["有効なパスポート", "電子ビザの印刷物", "往復航空券"],
    notes: "電子ビザは公式サイトから申請可能",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/egypt.html",
      evisa: "https://www.visa2egypt.gov.eg/",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "morocco",
    name: "モロッコ",
    region: "africa",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "出国用航空券の所持"],
    documents: ["有効なパスポート", "帰国便の予約証明", "滞在先の情報"],
    notes: "90日を超える滞在にはビザの取得が必要",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/morocco.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "south-africa",
    name: "南アフリカ",
    region: "africa",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    conditions: ["パスポートの残存有効期間が滞在期間後30日以上必要", "出国用航空券の所持"],
    documents: ["有効なパスポート", "帰国便の予約証明", "滞在先の情報"],
    notes: "90日を超える滞在にはビザの取得が必要",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/south_africa.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "uae",
    name: "アラブ首長国連邦",
    region: "middle-east",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要"],
    documents: ["有効なパスポート", "帰国便の予約証明"],
    notes: "30日を超える滞在にはビザの取得が必要",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/uae.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "saudi-arabia",
    name: "サウジアラビア",
    region: "middle-east",
    visaRequirement: {
      type: "evisa",
      duration: 90,
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "電子ビザの事前取得"],
    documents: ["有効なパスポート", "電子ビザの印刷物", "往復航空券"],
    notes: "電子ビザは公式サイトから申請可能",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/saudi.html",
      evisa: "https://visa.visitsaudi.com/",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "turkey",
    name: "トルコ",
    region: "middle-east",
    visaRequirement: {
      type: "evisa",
      duration: 90,
    },
    conditions: ["パスポートの残存有効期間が滞在期間後60日以上必要", "電子ビザの事前取得"],
    documents: ["有効なパスポート", "電子ビザの印刷物", "往復航空券"],
    notes: "電子ビザは公式サイトから申請可能",
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/turkey.html",
      evisa: "https://www.evisa.gov.tr/",
    },
    lastUpdated: "2024-03-20",
  },
];

/**
 * 地域ごとの国リストを取得する
 * @param region 地域ID
 * @returns 指定された地域の国リスト
 */
export function getCountriesByRegion(region: string): Country[] {
  return countries.filter((country) => country.region === region);
}

/**
 * IDから国を取得する
 * @param id 国ID
 * @returns 指定されたIDの国、見つからない場合はundefined
 */
export function getCountryById(id: string): Country | undefined {
  return countries.find((country) => country.id.toLowerCase() === id.toLowerCase());
}

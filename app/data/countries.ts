export interface VisaRequirement {
  type: "visa_free" | "evisa" | "visa_required";
  duration: number;
  purpose: ("tourism" | "business" | "transit")[];
  cost?: number; // 円単位
  processingTime?: string;
  multipleEntry?: boolean;
}

export interface Country {
  id: string;
  name: string;
  region: string;
  capital: string;
  visaRequirement: VisaRequirement;
  conditions: string[];
  documents: string[];
  notes?: string[];
  officialLinks: {
    mofa: string; // 外務省
    embassy?: string; // 大使館
  };
  lastUpdated: string; // ISO日付文字列
}

export const countries: Country[] = [
  {
    id: "thailand",
    name: "タイ",
    region: "asia",
    capital: "バンコク",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism"],
      multipleEntry: false
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "観光目的のみ",
      "滞在予定期間に応じた十分な資金証明",
    ],
    documents: [
      "有効なパスポート",
      "帰国便の予約証明",
      "滞在先の情報",
    ],
    notes: [
      "30日を超える滞在にはビザの取得が必要",
      "入国時に入国カードの記入が必要",
    ],
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
    capital: "ハノイ",
    visaRequirement: {
      type: "visa_required",
      duration: 0,
      purpose: ["tourism", "business"],
      cost: 5000,
      processingTime: "3-5営業日",
      multipleEntry: false
    },
    conditions: [
      "すべての目的でビザが必要",
      "パスポートの残存有効期間が6ヶ月以上必要",
    ],
    documents: [
      "有効なパスポート",
      "ビザ申請書",
      "証明写真2枚",
      "入国目的を証明する書類",
    ],
    notes: [
      "15日以内の短期滞在の場合、事前のビザ免除申請が可能",
      "ビザ申請は大使館またはビザ代理申請センターで可能",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/vietnam.html",
      embassy: "https://vnembassy-jp.org/ja",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "singapore",
    name: "シンガポール",
    region: "asia",
    capital: "シンガポール",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
      multipleEntry: true
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "帰国便の予約証明が必要",
      "十分な資金証明が必要",
    ],
    documents: [
      "有効なパスポート",
      "帰国便の予約証明",
      "滞在先の情報",
      "入国カード（電子申請可）",
    ],
    notes: [
      "90日を超える滞在には査証が必要",
      "入国時に入国カードの記入または事前のオンライン申請が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/singapore.html",
      embassy: "https://www.mfa.gov.sg/tokyo",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "malaysia",
    name: "マレーシア",
    region: "asia",
    capital: "クアラルンプール",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism"],
      multipleEntry: true
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "十分な滞在費用の証明が必要",
      "帰国便の予約が必要",
    ],
    documents: [
      "有効なパスポート",
      "帰国便の予約証明",
      "滞在先の情報",
      "入国カード",
    ],
    notes: [
      "90日を超える滞在にはビザが必要",
      "入国時に入国カードの記入が必要",
      "観光以外の目的での滞在にはビザが必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/malaysia.html",
      embassy: "https://www.kln.gov.my/web/jpn_tokyo/",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "korea",
    name: "韓国",
    region: "asia",
    capital: "ソウル",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
      multipleEntry: true
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "K-ETAの事前登録が必要",
    ],
    documents: [
      "有効なパスポート",
      "K-ETA承認書",
      "帰国便の予約証明",
    ],
    notes: [
      "K-ETAは入国72時間前までに申請が必要",
      "90日を超える滞在にはビザが必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/korea.html",
      embassy: "https://overseas.mofa.go.kr/jp-ja/index.do",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "china",
    name: "中国",
    region: "asia",
    capital: "北京",
    visaRequirement: {
      type: "visa_required",
      duration: 0,
      purpose: ["tourism", "business", "transit"],
      cost: 8000,
      processingTime: "4-7営業日",
      multipleEntry: false
    },
    conditions: [
      "すべての目的でビザが必要",
      "パスポートの残存有効期間が6ヶ月以上必要",
      "往復航空券の予約確認書が必要",
    ],
    documents: [
      "有効なパスポート",
      "ビザ申請書",
      "証明写真1枚",
      "航空券予約証明",
      "宿泊先の情報",
    ],
    notes: [
      "トランジットビザ免除制度あり（条件付き）",
      "指紋登録が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/china.html",
      embassy: "http://www.china-embassy.or.jp/jpn/",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "taiwan",
    name: "台湾",
    region: "asia",
    capital: "台北",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
      multipleEntry: true
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間+3ヶ月以上必要",
      "オンライン入境カードの事前申請が必要",
    ],
    documents: [
      "有効なパスポート",
      "入境カード（オンライン）",
      "帰国便の予約証明",
    ],
    notes: [
      "90日を超える滞在には居留ビザが必要",
      "観光・商用目的以外の活動には別途許可が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/taiwan/index.html",
      embassy: "https://www.roc-taiwan.org/jp_ja/",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "hongkong",
    name: "香港",
    region: "asia",
    capital: "香港",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
      multipleEntry: true
    },
    conditions: [
      "パスポートの残存有効期間が1ヶ月以上必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: [
      "有効なパスポート",
      "入境カード",
      "帰国便の予約証明",
    ],
    notes: [
      "90日を超える滞在にはビザが必要",
      "就労・就学目的の場合は事前にビザが必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/hongkong.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "philippines",
    name: "フィリピン",
    region: "asia",
    capital: "マニラ",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism"],
      multipleEntry: false
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "帰国便の予約証明が必要",
      "滞在資金の証明が必要",
    ],
    documents: [
      "有効なパスポート",
      "入国カード",
      "帰国便の予約証明",
      "滞在先の情報",
    ],
    notes: [
      "30日を超える滞在にはビザの取得が必要",
      "商用目的の場合は事前にビザが必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/philippines.html",
      embassy: "https://tokyo.philembassy.net/",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "indonesia",
    name: "インドネシア",
    region: "asia",
    capital: "ジャカルタ",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism"],
      multipleEntry: false
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "帰国便の予約証明が必要",
    ],
    documents: [
      "有効なパスポート",
      "入国カード",
      "帰国便の予約証明",
    ],
    notes: [
      "30日を超える滞在にはビザの取得が必要",
      "商用目的の場合は事前にビザが必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/indonesia.html",
      embassy: "https://kemlu.go.id/tokyo/",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "india",
    name: "インド",
    region: "asia",
    capital: "ニューデリー",
    visaRequirement: {
      type: "evisa",
      duration: 30,
      purpose: ["tourism", "business"],
      cost: 3000,
      processingTime: "3-4営業日",
      multipleEntry: true
    },
    conditions: [
      "eビザの事前取得が必要",
      "パスポートの残存有効期間が6ヶ月以上必要",
    ],
    documents: ["有効なパスポート", "eビザ", "往復航空券"],
    notes: ["入国72時間前までにeビザの申請が必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/india.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "cambodia",
    name: "カンボジア",
    region: "asia",
    capital: "プノンペン",
    visaRequirement: {
      type: "evisa",
      duration: 30,
      purpose: ["tourism"],
      cost: 3000,
      multipleEntry: false
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要"],
    documents: ["有効なパスポート", "eビザ"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/cambodia.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "laos",
    name: "ラオス",
    region: "asia",
    capital: "ビエンチャン",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism"],
      cost: 4000,
      multipleEntry: false
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要"],
    documents: ["有効なパスポート", "ビザ申請書", "写真2枚"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/laos.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "myanmar",
    name: "ミャンマー",
    region: "asia",
    capital: "ネーピードー",
    visaRequirement: {
      type: "evisa",
      duration: 28,
      purpose: ["tourism"],
      cost: 5000,
      multipleEntry: false
    },
    conditions: ["eビザの事前取得が必要"],
    documents: ["有効なパスポート", "eビザ"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/myanmar.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "mongolia",
    name: "モンゴル",
    region: "asia",
    capital: "ウランバートル",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism"],
      multipleEntry: false
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要"],
    documents: ["有効なパスポート"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/mongolia.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "bangladesh",
    name: "バングラデシュ",
    region: "asia",
    capital: "ダッカ",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
      cost: 5000,
      multipleEntry: false
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要"],
    documents: ["有効なパスポート", "ビザ申請書"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/bangladesh.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "srilanka",
    name: "スリランカ",
    region: "asia",
    capital: "コロンボ",
    visaRequirement: {
      type: "evisa",
      duration: 30,
      purpose: ["tourism"],
      cost: 3500,
      multipleEntry: false
    },
    conditions: ["ETAの事前取得が必要"],
    documents: ["有効なパスポート", "ETA"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/srilanka.html",
    },
    lastUpdated: "2024-03-20",
  },
  // 続きはこの形式で196カ国分追加...
];

export const getCountriesByRegion = (region: string) => {
  return countries.filter(country => country.region === region);
};

export const getCountryById = (id: string) => {
  return countries.find(country => country.id === id);
}; 
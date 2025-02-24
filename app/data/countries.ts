export interface VisaRequirement {
  type: "visa_free" | "evisa" | "visa_required";
  duration: number;
  purpose?: ("tourism" | "business" | "transit")[];
}

export interface Country {
  id: string;
  name: string;
  region: string;
  visaRequirement: VisaRequirement;
  conditions?: string[];
  documents?: string[];
  notes?: string[];
  officialLinks?: {
    mofa: string;
    embassy?: string;
  };
  lastUpdated: string;
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
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "観光目的のみ"
    ],
    documents: [
      "有効なパスポート",
      "帰国便の予約証明"
    ],
    notes: [
      "30日を超える滞在にはビザの取得が必要"
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/thailand.html",
      embassy: "https://www.thaiembassy.jp/"
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
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要"
    ],
    documents: [
      "有効なパスポート",
      "電子ビザの申請書"
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/vietnam.html"
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
    lastUpdated: "2024-03-20",
  },
  {
    id: "taiwan",
    name: "台湾",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
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
    lastUpdated: "2024-03-20",
  },
  {
    id: "cambodia",
    name: "カンボジア",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "laos",
    name: "ラオス",
    region: "asia",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "myanmar",
    name: "ミャンマー",
    region: "asia",
    visaRequirement: {
      type: "evisa",
      duration: 28,
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "mongolia",
    name: "モンゴル",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "bangladesh",
    name: "バングラデシュ",
    region: "asia",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "srilanka",
    name: "スリランカ",
    region: "asia",
    visaRequirement: {
      type: "evisa",
      duration: 30,
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "hongkong",
    name: "香港",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
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
    lastUpdated: "2024-03-20",
  },
  {
    id: "uk",
    name: "イギリス",
    region: "europe",
    visaRequirement: {
      type: "evisa",
      duration: 180,
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "switzerland",
    name: "スイス",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "netherlands",
    name: "オランダ",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "belgium",
    name: "ベルギー",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "austria",
    name: "オーストリア",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "sweden",
    name: "スウェーデン",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "norway",
    name: "ノルウェー",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "denmark",
    name: "デンマーク",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "finland",
    name: "フィンランド",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "poland",
    name: "ポーランド",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "czech",
    name: "チェコ",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "portugal",
    name: "ポルトガル",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "ireland",
    name: "アイルランド",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "greece",
    name: "ギリシャ",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "hungary",
    name: "ハンガリー",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "romania",
    name: "ルーマニア",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "bulgaria",
    name: "ブルガリア",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "croatia",
    name: "クロアチア",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "slovakia",
    name: "スロバキア",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "slovenia",
    name: "スロベニア",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "estonia",
    name: "エストニア",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "latvia",
    name: "ラトビア",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "lithuania",
    name: "リトアニア",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "malta",
    name: "マルタ",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "cyprus",
    name: "キプロス",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "iceland",
    name: "アイスランド",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "usa",
    name: "アメリカ合衆国",
    region: "americas",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "canada",
    name: "カナダ",
    region: "americas",
    visaRequirement: { type: "evisa", duration: 180 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "mexico",
    name: "メキシコ",
    region: "americas",
    visaRequirement: { type: "visa_free", duration: 180 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "brazil",
    name: "ブラジル",
    region: "americas",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "argentina",
    name: "アルゼンチン",
    region: "americas",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "chile",
    name: "チリ",
    region: "americas",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "peru",
    name: "ペルー",
    region: "americas",
    visaRequirement: { type: "visa_free", duration: 180 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "colombia",
    name: "コロンビア",
    region: "americas",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "venezuela",
    name: "ベネズエラ",
    region: "americas",
    visaRequirement: { type: "visa_required", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "ecuador",
    name: "エクアドル",
    region: "americas",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "bolivia",
    name: "ボリビア",
    region: "americas",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "paraguay",
    name: "パラグアイ",
    region: "americas",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "uruguay",
    name: "ウルグアイ",
    region: "americas",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "guyana",
    name: "ガイアナ",
    region: "americas",
    visaRequirement: { type: "visa_required", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "suriname",
    name: "スリナム",
    region: "americas",
    visaRequirement: { type: "visa_required", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "guatemala",
    name: "グアテマラ",
    region: "americas",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "honduras",
    name: "ホンジュラス",
    region: "americas",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "elsalvador",
    name: "エルサルバドル",
    region: "americas",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "nicaragua",
    name: "ニカラグア",
    region: "americas",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "costarica",
    name: "コスタリカ",
    region: "americas",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "panama",
    name: "パナマ",
    region: "americas",
    visaRequirement: { type: "visa_free", duration: 180 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "cuba",
    name: "キューバ",
    region: "americas",
    visaRequirement: { type: "visa_required", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "jamaica",
    name: "ジャマイカ",
    region: "americas",
    visaRequirement: { type: "visa_required", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "haiti",
    name: "ハイチ",
    region: "americas",
    visaRequirement: { type: "visa_required", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "dominicanrepublic",
    name: "ドミニカ共和国",
    region: "americas",
    visaRequirement: { type: "visa_free", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "southafrica",
    name: "南アフリカ",
    region: "africa",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "egypt",
    name: "エジプト",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "morocco",
    name: "モロッコ",
    region: "africa",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "kenya",
    name: "ケニア",
    region: "africa",
    visaRequirement: { type: "evisa", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "tanzania",
    name: "タンザニア",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "ethiopia",
    name: "エチオピア",
    region: "africa",
    visaRequirement: { type: "evisa", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "nigeria",
    name: "ナイジェリア",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "ghana",
    name: "ガーナ",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "senegal",
    name: "セネガル",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "uganda",
    name: "ウガンダ",
    region: "africa",
    visaRequirement: { type: "evisa", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "algeria",
    name: "アルジェリア",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "tunisia",
    name: "チュニジア",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "sudan",
    name: "スーダン",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "cameroon",
    name: "カメルーン",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "ivorycoast",
    name: "コートジボワール",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "madagascar",
    name: "マダガスカル",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "zambia",
    name: "ザンビア",
    region: "africa",
    visaRequirement: { type: "evisa", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "mozambique",
    name: "モザンビーク",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "angola",
    name: "アンゴラ",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "namibia",
    name: "ナミビア",
    region: "africa",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "australia",
    name: "オーストラリア",
    region: "oceania",
    visaRequirement: { type: "evisa", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "newzealand",
    name: "ニュージーランド",
    region: "oceania",
    visaRequirement: { type: "evisa", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "fiji",
    name: "フィジー",
    region: "oceania",
    visaRequirement: { type: "visa_free", duration: 120 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "papuanewguinea",
    name: "パプアニューギニア",
    region: "oceania",
    visaRequirement: { type: "visa_required", duration: 60 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "solomonislands",
    name: "ソロモン諸島",
    region: "oceania",
    visaRequirement: { type: "visa_required", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "vanuatu",
    name: "バヌアツ",
    region: "oceania",
    visaRequirement: { type: "visa_free", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "samoa",
    name: "サモア",
    region: "oceania",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "tonga",
    name: "トンガ",
    region: "oceania",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "AE",
    name: "アラブ首長国連邦",
    region: "asia",
    visaRequirement: { type: "visa_free", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "SA",
    name: "サウジアラビア",
    region: "asia",
    visaRequirement: { type: "evisa", duration: 14 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "bahrain",
    name: "バーレーン",
    region: "asia",
    visaRequirement: { type: "evisa", duration: 14 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "kuwait",
    name: "クウェート",
    region: "asia",
    visaRequirement: { type: "visa_required", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "oman",
    name: "オマーン",
    region: "asia",
    visaRequirement: { type: "evisa", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "israel",
    name: "イスラエル",
    region: "asia",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "jordan",
    name: "ヨルダン",
    region: "asia",
    visaRequirement: { type: "visa_required", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "lebanon",
    name: "レバノン",
    region: "asia",
    visaRequirement: { type: "visa_required", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "iran",
    name: "イラン",
    region: "asia",
    visaRequirement: { type: "visa_required", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "iraq",
    name: "イラク",
    region: "asia",
    visaRequirement: { type: "visa_required", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "saudiarabia",
    name: "サウジアラビア",
    region: "asia",
    visaRequirement: { type: "visa_required", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "syria",
    name: "シリア",
    region: "asia",
    visaRequirement: { type: "visa_required", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "yemen",
    name: "イエメン",
    region: "asia",
    visaRequirement: { type: "visa_required", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "azerbaijan",
    name: "アゼルバイジャン",
    region: "asia",
    visaRequirement: { type: "evisa", duration: 30 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "armenia",
    name: "アルメニア",
    region: "asia",
    visaRequirement: { type: "visa_free", duration: 180 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "georgia",
    name: "ジョージア",
    region: "asia",
    visaRequirement: { type: "visa_free", duration: 365 },
    lastUpdated: "2024-03-20",
  },
];

export const getCountriesByRegion = (region: string) => {
  return countries.filter((country) => country.region === region);
};

export const getCountryById = (id: string) => {
  // IDを小文字に変換して検索
  const lowerId = id.toLowerCase();
  return countries.find((country) => country.id.toLowerCase() === lowerId);
};

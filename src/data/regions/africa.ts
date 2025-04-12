import type { Country } from "../types";

export const africaCountries: Country[] = [
  {
    id: "south_africa",
    name: "南アフリカ",
    code: "ZA",
    region: "africa",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が30日以上必要",
      "往復航空券の所持が必要",
      "入国時に滞在資金証明が必要",
      "黄熱病流行国からの入国者は予防接種証明が必要",
      "未成年者の入国には両親の同意書が必要",
      "入国審査時に滞在先の住所や連絡先の提示が求められる場合がある",
      "パスポートに最低2ページの空白ページが必要",
    ],
    notes: [
      "観光目的の場合は90日間のビザなし滞在が可能",
      "ビジネス目的の場合は90日間のビザなし滞在が可能",
      "就労目的の場合は就労ビザの取得が必要",
      "現地での滞在延長は可能だが、事前申請が必要",
      "入国時に空港税の支払いが必要な場合がある",
      "主要観光地はケープタウン、ヨハネスブルグ、クルーガー国立公園など",
      "大都市部を離れる場合は治安に注意が必要",
      "夜間の一人歩きは避けること",
      "現地通貨はランド（ZAR）で、主要クレジットカードは広く使用可能",
      "水道水は都市部では飲用可能だが、ミネラルウォーターの購入を推奨",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/south_africa/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "algeria",
    name: "アルジェリア",
    code: "DZ",
    region: "africa",
    visaRequirement: { type: "visa_required" }, // Remove duration: 0
    notes: ["ビザが必要。東京の大使館で申請可能。"],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/algeria/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "angola",
    name: "アンゴラ",
    code: "AO",
    region: "africa",
    visaRequirement: { type: "visa_required" }, // Remove duration: 0
    notes: ["ビザが必要。東京の大使館で申請可能。"],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/angola/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "botswana",
    name: "ボツワナ",
    code: "BW",
    region: "africa",
    visaRequirement: { type: "visa_free", duration: 90, purpose: ["tourism"] },
    conditions: ["パスポート残存6ヶ月以上", "出国用航空券"],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/botswana/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "burundi",
    name: "ブルンジ",
    code: "BI",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 0 },
    notes: ["ビザが必要。オンライン申請または近隣国の大使館で申請。黄熱病予防接種証明要。"],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/burundi/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "cameroon",
    name: "カメルーン",
    code: "CM",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 0 },
    notes: ["ビザが必要。東京の大使館で申請可能。黄熱病予防接種証明要。"],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/cameroon/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "chad",
    name: "チャド",
    code: "TD",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 0 },
    notes: ["ビザが必要。近隣国の大使館で申請。黄熱病予防接種証明要。"],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/chad/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "comoros",
    name: "コモロ",
    code: "KM",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 45 }, // Visa on arrival
    notes: [
      "到着時にビザ取得可能（有料）。パスポート残存6ヶ月以上。黄熱病予防接種証明要（推奨）。",
    ],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/comoros/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "cote_d_ivoire",
    name: "コートジボワール",
    code: "CI",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 0 }, // e-Visa possible for airport arrival
    notes: [
      "ビザが必要。東京の大使館で申請可能。アビジャン空港到着ならe-Visaも可。黄熱病予防接種証明要。",
    ],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/cote/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "djibouti",
    name: "ジブチ",
    code: "DJ",
    region: "africa",
    visaRequirement: { type: "evisa", duration: 30, evisaAvailable: true },
    notes: ["e-Visaの取得が必要。パスポート残存6ヶ月以上。黄熱病予防接種証明要。"],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/djibouti/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "egypt",
    name: "エジプト",
    code: "EG",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 30, evisaAvailable: true }, // Visa on arrival or e-Visa
    notes: ["到着ビザ（主要空港）またはe-Visaの取得が必要。パスポート残存6ヶ月以上。"],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/egypt/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "eritrea",
    name: "エリトリア",
    code: "ER",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 0 },
    notes: ["ビザが必要。東京の大使館で申請可能。黄熱病予防接種証明要。"],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/eritrea/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "ethiopia",
    name: "エチオピア",
    code: "ET",
    region: "africa",
    visaRequirement: { type: "evisa", duration: 30, evisaAvailable: true }, // Visa on arrival also possible
    notes: [
      "e-Visaまたはアディスアベバ空港到着ビザの取得が必要。パスポート残存6ヶ月以上。黄熱病予防接種証明要。",
    ],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/ethiopia/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "ghana",
    name: "ガーナ",
    code: "GH",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 0 },
    notes: ["ビザが必要。東京の大使館で申請可能。黄熱病予防接種証明要。"],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/ghana/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "kenya",
    name: "ケニア",
    code: "KE",
    region: "africa",
    visaRequirement: { type: "evisa", duration: 90, evisaAvailable: true },
    notes: [
      "電子渡航認証（eTA）の取得が必要。パスポート残存6ヶ月以上。黄熱病予防接種証明要（推奨）。",
    ],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/ke/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "lesotho",
    name: "レソト",
    code: "LS",
    region: "africa",
    visaRequirement: { type: "visa_free", duration: 14, purpose: ["tourism"] },
    conditions: ["パスポート残存6ヶ月以上", "出国用航空券"],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/lesotho/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "madagascar",
    name: "マダガスカル",
    code: "MG",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 30, evisaAvailable: true }, // Visa on arrival or e-Visa
    notes: [
      "到着ビザまたはe-Visaの取得が必要。パスポート残存6ヶ月以上。黄熱病予防接種証明要（推奨）。",
    ],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/madagascar/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "malawi",
    name: "マラウイ",
    code: "MW",
    region: "africa",
    visaRequirement: { type: "evisa", duration: 30, evisaAvailable: true },
    notes: ["e-Visaの取得が必要。パスポート残存6ヶ月以上。黄熱病予防接種証明要。"],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/malawi/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "mali",
    name: "マリ",
    code: "ML",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 0 },
    notes: ["ビザが必要。東京の大使館で申請可能。黄熱病予防接種証明要。治安不安定のため渡航注意。"],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/mali/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "mauritania",
    name: "モーリタニア",
    code: "MR",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 0 }, // Visa on arrival possible at NKT airport
    notes: [
      "ビザが必要。東京の大使館で申請可能。ヌアクショット空港到着ビザも可。黄熱病予防接種証明要。",
    ],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/mauritania/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "mauritius",
    name: "モーリシャス",
    code: "MU",
    region: "africa",
    visaRequirement: { type: "visa_free", duration: 90, purpose: ["tourism"] },
    conditions: ["パスポート残存滞在期間中有効", "出国用航空券", "滞在先証明"],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/mauritius/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "morocco",
    name: "モロッコ",
    code: "MA",
    region: "africa",
    visaRequirement: { type: "visa_free", duration: 90, purpose: ["tourism"] },
    conditions: ["パスポート残存滞在期間中有効"],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/morocco/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "mozambique",
    name: "モザンビーク",
    code: "MZ",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 30 }, // Visa on arrival possible
    notes: [
      "ビザが必要。東京の大使館または主要空港到着時に申請可能。パスポート残存6ヶ月以上。黄熱病予防接種証明要（推奨）。",
    ],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/mozambique/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "namibia",
    name: "ナミビア",
    code: "NA",
    region: "africa",
    visaRequirement: { type: "visa_free", duration: 90, purpose: ["tourism"] },
    conditions: ["パスポート残存6ヶ月以上", "出国用航空券"],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/namibia/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "niger",
    name: "ニジェール",
    code: "NE",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 0 },
    notes: ["ビザが必要。近隣国の大使館で申請。黄熱病予防接種証明要。治安不安定のため渡航注意。"],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/niger/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "nigeria",
    name: "ナイジェリア",
    code: "NG",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 0 },
    notes: ["ビザが必要。東京の大使館で申請可能。黄熱病予防接種証明要。"],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/nigeria/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "rwanda",
    name: "ルワンダ",
    code: "RW",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 30 }, // Visa on arrival or e-Visa
    notes: ["到着ビザまたはe-Visaの取得が必要。パスポート残存6ヶ月以上。黄熱病予防接種証明要。"],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/rwanda/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "senegal",
    name: "セネガル",
    code: "SN",
    region: "africa",
    visaRequirement: { type: "visa_free", duration: 90, purpose: ["tourism"] },
    conditions: ["パスポート残存6ヶ月以上"],
    notes: ["黄熱病予防接種証明要（推奨）。"],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/senegal/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "seychelles",
    name: "セーシェル",
    code: "SC",
    region: "africa",
    visaRequirement: { type: "visa_free", duration: 30, purpose: ["tourism"] },
    conditions: ["パスポート残存滞在期間中有効", "出国用航空券", "滞在先証明", "十分な資金"],
    notes: [
      "到着時に入国許可（Visitor's Permit）が付与される。オンラインでのTravel Authorization事前申請が必要。",
    ],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/seychelles/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "somalia",
    name: "ソマリア",
    code: "SO",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 0 },
    notes: [
      "ビザが必要。近隣国の大使館で申請。治安極めて不安定なため渡航中止勧告。ソマリランドは別途要件あり。",
    ],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/somali/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "south_sudan",
    name: "南スーダン",
    code: "SS",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 0 },
    notes: ["ビザが必要。東京の大使館で申請可能。黄熱病予防接種証明要。治安不安定のため渡航注意。"],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/s_sudan/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "sudan",
    name: "スーダン",
    code: "SD",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 0 },
    notes: ["ビザが必要。東京の大使館で申請可能。黄熱病予防接種証明要。治安不安定のため渡航注意。"],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/sudan/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "tanzania",
    name: "タンザニア",
    code: "TZ",
    region: "africa",
    visaRequirement: { type: "evisa", duration: 90, evisaAvailable: true }, // Visa on arrival possible
    notes: ["e-Visaまたは到着ビザの取得が必要。パスポート残存6ヶ月以上。黄熱病予防接種証明要。"],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/tanzania/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "tunisia",
    name: "チュニジア",
    code: "TN",
    region: "africa",
    visaRequirement: { type: "visa_free", duration: 90, purpose: ["tourism"] },
    conditions: ["パスポート残存3ヶ月以上"],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/tunisia/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "uganda",
    name: "ウガンダ",
    code: "UG",
    region: "africa",
    visaRequirement: { type: "evisa", duration: 90, evisaAvailable: true },
    notes: ["e-Visaの取得が必要。パスポート残存6ヶ月以上。黄熱病予防接種証明要。"],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/uganda/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "zambia",
    name: "ザンビア",
    code: "ZM",
    region: "africa",
    visaRequirement: { type: "evisa", duration: 90, evisaAvailable: true }, // Visa on arrival possible
    notes: [
      "e-Visaまたは到着ビザの取得が必要。パスポート残存6ヶ月以上。黄熱病予防接種証明要（推奨）。",
    ],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/zambia/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "zimbabwe",
    name: "ジンバブエ",
    code: "ZW",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 30 }, // Visa on arrival or e-Visa
    notes: [
      "到着ビザまたはe-Visaの取得が必要。パスポート残存6ヶ月以上。黄熱病予防接種証明要（推奨）。KAZAビザも利用可能。",
    ],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/zimbabwe/index.html" },
    lastUpdated: "2024-07-27",
  },
  {
    id: "gambia",
    name: "ガンビア",
    code: "GM", // Add country code
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "往復航空券の予約確認が必要",
      "滞在に必要な十分な資金の証明",
    ],
    notes: [
      "東京の大使館でビザ申請が可能",
      "黄熱病の予防接種証明が必要",
      "到着時のビザ取得も可能（アライバルビザ）",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/gambia/index.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "guinea",
    name: "ギニア",
    code: "GN", // Add country code
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "往復航空券の予約確認が必要",
      "滞在に必要な十分な資金の証明",
    ],
    notes: [
      "東京の大使館でビザ申請が可能",
      "黄熱病の予防接種証明が必要",
      "治安状況が不安定なため、渡航前に最新情報の確認が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/guinea/index.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "guinea_bissau",
    name: "ギニアビサウ",
    code: "GW", // Add country code
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "往復航空券の予約確認が必要",
      "滞在に必要な十分な資金の証明",
    ],
    notes: [
      "東京の大使館でビザ申請が可能",
      "黄熱病の予防接種証明が必要",
      "治安状況が不安定なため、渡航前に最新情報の確認が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/guinea_bissau/index.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "sierra_leone",
    name: "シエラレオネ",
    code: "SL", // Add country code
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "往復航空券の予約確認が必要",
      "滞在に必要な十分な資金の証明",
    ],
    notes: [
      "東京の大使館でビザ申請が可能",
      "黄熱病の予防接種証明が必要",
      "治安状況が不安定なため、渡航前に最新情報の確認が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/sierra_leone/index.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "liberia",
    name: "リベリア",
    code: "LR", // Add country code
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "往復航空券の予約確認が必要",
      "滞在に必要な十分な資金の証明",
    ],
    notes: [
      "東京の大使館でビザ申請が可能",
      "黄熱病の予防接種証明が必要",
      "治安状況が不安定なため、渡航前に最新情報の確認が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/liberia/index.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "togo",
    name: "トーゴ",
    code: "TG", // Add country code
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "往復航空券の予約確認が必要",
      "滞在に必要な十分な資金の証明",
    ],
    notes: [
      "東京の大使館でビザ申請が可能",
      "黄熱病の予防接種証明が必要",
      "到着時のビザ取得も可能（アライバルビザ）",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/togo/index.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "benin",
    name: "ベナン",
    code: "BJ", // Add country code
    region: "africa",
    visaRequirement: {
      type: "evisa",
      duration: 30,
      evisaAvailable: true,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "往復航空券の予約確認が必要",
      "滞在に必要な十分な資金の証明",
    ],
    notes: [
      "e-Visaはオンラインで取得可能",
      "到着時のビザ取得も可能（アライバルビザ）",
      "黄熱病の予防接種証明が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/benin/index.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "burkina_faso",
    name: "ブルキナファソ",
    code: "BF", // Add country code
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "往復航空券の予約確認が必要",
      "滞在に必要な十分な資金の証明",
    ],
    notes: [
      "東京の大使館でビザ申請が可能",
      "黄熱病の予防接種証明が必要",
      "治安状況が極めて不安定なため、渡航は推奨されない",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/burkina_faso/index.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "central_african_republic",
    name: "中央アフリカ共和国",
    code: "CF", // Add country code
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "往復航空券の予約確認が必要",
      "滞在に必要な十分な資金の証明",
    ],
    notes: [
      "フランスまたは近隣国の大使館でビザ申請が必要",
      "黄熱病の予防接種証明が必要",
      "治安状況が極めて不安定なため、渡航は推奨されない",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/c_africa/index.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "gabon",
    name: "ガボン",
    code: "GA", // Add country code
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "往復航空券の予約確認が必要",
      "滞在に必要な十分な資金の証明",
    ],
    notes: [
      "東京の大使館でビザ申請が可能",
      "黄熱病の予防接種証明が必要",
      "到着時のビザ取得も可能（アライバルビザ）",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/gabon/index.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "congo_republic",
    name: "コンゴ共和国",
    code: "CG", // Add country code
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "往復航空券の予約確認が必要",
      "滞在に必要な十分な資金の証明",
    ],
    notes: [
      "東京の大使館でビザ申請が可能",
      "黄熱病の予防接種証明が必要",
      "到着時のビザ取得も可能（アライバルビザ）",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/congo_r/index.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "congo_dr",
    name: "コンゴ民主共和国",
    code: "CD", // Add country code
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "往復航空券の予約確認が必要",
      "滞在に必要な十分な資金の証明",
    ],
    notes: [
      "東京の大使館でビザ申請が可能",
      "黄熱病の予防接種証明が必要",
      "治安状況が不安定なため、渡航前に最新情報の確認が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/congo_d/index.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "equatorial_guinea",
    name: "赤道ギニア",
    code: "GQ", // Add country code
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "往復航空券の予約確認が必要",
      "滞在に必要な十分な資金の証明",
    ],
    notes: [
      "東京の大使館でビザ申請が可能",
      "黄熱病の予防接種証明が必要",
      "治安状況が不安定なため、渡航前に最新情報の確認が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/e_guinea/index.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "sao_tome",
    name: "サントメ・プリンシペ",
    code: "ST", // Add country code
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "往復航空券の予約確認が必要",
      "滞在に必要な十分な資金の証明",
    ],
    notes: [
      "東京の大使館でビザ申請が可能",
      "黄熱病の予防接種証明が必要",
      "到着時のビザ取得も可能（アライバルビザ）",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/saotome/index.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "cape_verde",
    name: "カーボベルデ",
    code: "CV", // Add country code
    region: "africa",
    visaRequirement: {
      type: "evisa",
      duration: 30,
      evisaAvailable: true,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "往復航空券の予約確認が必要",
      "滞在に必要な十分な資金の証明",
    ],
    notes: [
      "e-Visaはオンラインで取得可能",
      "到着時のビザ取得も可能（アライバルビザ）",
      "黄熱病の予防接種証明が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/capeverde/index.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "libya",
    name: "リビア",
    code: "LY", // Add country code
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "往復航空券の予約確認が必要",
      "滞在に必要な十分な資金の証明",
    ],
    notes: ["東京の大使館でビザ申請が可能", "治安状況が極めて不安定なため、渡航は推奨されない"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/libya/index.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "swaziland",
    name: "エスワティニ",
    code: "SZ", // Add country code
    region: "africa",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "往復航空券の予約確認が必要",
      "滞在に必要な十分な資金の証明",
    ],
    notes: ["30日間のビザなし滞在が可能", "現地での滞在延長も可能"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/eswatini/index.html",
    },
    lastUpdated: "2024-03-20",
  },
];

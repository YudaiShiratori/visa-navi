import type { Country } from "../types";

export const oceaniaCountries: Country[] = [
  {
    id: "australia",
    name: "オーストラリア連邦",
    code: "AU",
    region: "oceania",
    visaRequirement: {
      type: "evisa", // ETA is required
      duration: 90, // 3ヶ月
      evisaAvailable: true,
      purpose: ["tourism", "business", "visit"],
    },
    conditions: ["帰国時まで有効な旅券が必要"],
    notes: [
      "黄熱に感染する危険のある国から来る1歳以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎで黄熱危険国の空港に12時間以上滞在した場合も証明書が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/australia/index.html",
    },
    lastUpdated: "2024-07-27",
  },
  {
    id: "northern_mariana_islands",
    name: "北マリアナ諸島（サイパン）",
    code: "MP",
    region: "oceania",
    visaRequirement: {
      type: "visa_free", // Guam-CNMI VWP / VWP
      duration: 90, // Max VWP duration
      purpose: ["tourism", "business"],
    },
    conditions: [
      "45日以内: グアム－北マリアナ諸島ビザ免除プログラム（Guam-CNMI VWP）。旅券残存帰国日まで有効（入国時45日以上が望ましい）。出国用航空券。Guam-CNMI ETAが必要。",
      "46日以上90日以内: アメリカビザ免除プログラム(VWP)。旅券残存帰国日まで有効（入国時90日以上が望ましい）。ESTA事前取得とVWP要件充足が必要。",
    ],
    notes: ["ESTAだけではない アメリカビザ免除のための10の条件参照"],
    officialLinks: { mofa: "" }, // Needs official link
    lastUpdated: "2024-07-27",
  },
  {
    id: "kiribati",
    name: "キリバス共和国",
    code: "KI",
    region: "oceania",
    visaRequirement: { type: "visa_free", duration: 30, purpose: ["tourism"] }, // Assuming tourism
    conditions: ["旅券残存出国時6ヵ月以上"],
    officialLinks: { mofa: "" }, // Needs official link
    lastUpdated: "2024-07-27",
  },
  {
    id: "guam",
    name: "グアム（米国）",
    code: "GU",
    region: "oceania",
    visaRequirement: {
      type: "visa_free", // Guam-CNMI VWP / VWP
      duration: 90, // Max VWP duration
      purpose: ["tourism", "business"],
    },
    conditions: [
      "45日以内: グアム－北マリアナ諸島ビザ免除プログラム（Guam-CNMI VWP）。旅券残存帰国日まで有効（入国時45日以上が望ましい）。出国用航空券。Guam-CNMI ETAが必要。",
      "46日以上90日以内: アメリカビザ免除プログラム(VWP)。旅券残存帰国日まで有効（入国時90日以上が望ましい）。ESTA事前取得とVWP要件充足が必要。",
    ],
    notes: ["ESTAだけではない アメリカビザ免除のための10の条件参照"],
    officialLinks: { mofa: "" }, // Needs official link
    lastUpdated: "2024-07-27",
  },
  {
    id: "cook_islands",
    name: "クック諸島", // (ニュージーランド領)
    code: "CK",
    region: "oceania",
    visaRequirement: { type: "visa_free", duration: 30, purpose: ["tourism"] }, // Assuming tourism
    conditions: ["旅券残存出国時6ヵ月以上"],
    officialLinks: { mofa: "" }, // Needs official link
    lastUpdated: "2024-07-27",
  },
  {
    id: "samoa",
    name: "サモア独立国",
    code: "WS",
    region: "oceania",
    visaRequirement: { type: "visa_free", duration: 90, purpose: ["tourism"] }, // Assuming tourism
    conditions: ["旅券残存出国時6ヵ月以上"],
    officialLinks: { mofa: "" }, // Needs official link
    lastUpdated: "2024-07-27",
  },
  {
    id: "solomon_islands",
    name: "ソロモン諸島",
    code: "SB",
    region: "oceania",
    visaRequirement: {
      type: "visa_free", // Arrival permit
      duration: 45,
      purpose: ["tourism"],
    },
    conditions: ["旅券残存入国時6ヵ月以上"],
    notes: [
      "入国時に45日以内の滞在許可証 が発行される",
      "黄熱に感染する危険のある国から来る9か月以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎで黄熱危険国の空港に12時間以上滞在した場合も証明書が必要",
    ],
    officialLinks: { mofa: "" }, // Needs official link
    lastUpdated: "2024-07-27",
  },
  {
    id: "tuvalu",
    name: "ツバル",
    code: "TV",
    region: "oceania",
    visaRequirement: {
      type: "visa_free", // Arrival permit
      duration: 30,
      purpose: ["tourism"],
    },
    conditions: ["旅券残存入国時6ヵ月以上"],
    notes: ["入国時に30日以内で出国日までの滞在許可が付与される"],
    officialLinks: { mofa: "" }, // Needs official link
    lastUpdated: "2024-07-27",
  },
  {
    id: "tonga",
    name: "トンガ王国",
    code: "TO",
    region: "oceania",
    visaRequirement: {
      type: "visa_required", // Visa on arrival for tourism
      duration: 31,
      purpose: ["tourism"],
    },
    conditions: ["旅券残存入国時6ヵ月以上", "未使用査証欄1頁以上"],
    notes: [
      "観光目的の場合は到着空港で入国時に31日間滞在可能なビザが発給される",
      "就労（取材を含む）目的は、事前に入国許可申請が必要",
    ],
    officialLinks: { mofa: "" }, // Needs official link
    lastUpdated: "2024-07-27",
  },
  {
    id: "nauru",
    name: "ナウル共和国",
    code: "NR",
    region: "oceania",
    visaRequirement: { type: "visa_required", duration: 0 },
    notes: ["目的に関わらず事前にビザ取得が必要", "取得方法はナウル入国管理局に確認が必要"],
    officialLinks: {
      mofa: "", // Needs official link
    },
    lastUpdated: "2024-07-27",
  },
  {
    id: "niue",
    name: "ニウエ",
    code: "NU",
    region: "oceania",
    visaRequirement: { type: "visa_free", duration: 30, purpose: ["tourism"] }, // Assuming tourism
    conditions: ["旅券残存出国時3ヵ月以上", "滞在先が決まっていること"],
    notes: ["黄熱に感染する危険のある国から来る生後9か月以上の渡航者は黄熱予防接種証明書が必要"],
    officialLinks: { mofa: "" }, // Needs official link
    lastUpdated: "2024-07-27",
  },
  {
    id: "new_caledonia",
    name: "ニューカレドニア", // (フランス領)
    code: "NC",
    region: "oceania",
    visaRequirement: {
      type: "visa_free",
      duration: 90, // within 180 days
      purpose: ["tourism"],
    },
    conditions: ["旅券残存出国時3ヵ月以上", "未使用査証欄見開き2頁以上"],
    notes: [
      "海外旅行保険、滞在費用証明（ホテル予約提示なら1日EUR65、無提示なら1日EUR120）、宿泊証明書（ホテル予約確認書等）の持参が望ましい",
      "黄熱に感染する危険のある国から来る1歳以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎで黄熱危険国の空港に12時間以上滞在した場合も証明書が必要",
    ],
    officialLinks: { mofa: "" }, // Needs official link
    lastUpdated: "2024-07-27",
  },
  {
    id: "new_zealand",
    name: "ニュージーランド",
    code: "NZ",
    region: "oceania",
    visaRequirement: {
      type: "evisa", // NZeTA is required
      duration: 90, // 3ヶ月
      evisaAvailable: true,
      purpose: ["tourism", "business", "study", "official", "transit"],
    },
    conditions: ["旅券残存3ヵ月＋滞在日数以上", "未使用査証欄1頁以上"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/newzealand/index.html",
    },
    lastUpdated: "2024-07-27",
  },
  {
    id: "vanuatu",
    name: "バヌアツ共和国",
    code: "VU",
    region: "oceania",
    visaRequirement: {
      type: "visa_required", // Visa on arrival for tourism, required for business
      duration: 120,
      purpose: ["tourism", "business"],
    },
    conditions: ["旅券残存入国時6ヵ月以上"],
    notes: ["観光目的は到着空港で120日の観光ビザが発給される", "業務目的は事前にビザ取得が必要"],
    officialLinks: { mofa: "" }, // Needs official link
    lastUpdated: "2024-07-27",
  },
  {
    id: "papua_new_guinea",
    name: "パプアニューギニア独立国",
    code: "PG",
    region: "oceania",
    visaRequirement: { type: "visa_required", duration: 0 },
    conditions: ["事前にビザ取得が必要"],
    notes: [
      "観光、業務目的の到着ビザは2020年3月から発給停止中",
      "外交・公用目的に限りポートモレスビー・ジャクソン国際空港での到着ビザ取得が可能",
      "黄熱に感染する危険のある国から来る1歳以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎで黄熱危険国の空港を経由した渡航者も証明書が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/png/index.html",
    },
    lastUpdated: "2024-07-27",
  },
  {
    id: "palau",
    name: "パラオ共和国",
    code: "PW",
    region: "oceania",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism", "business", "visit"],
    },
    conditions: ["旅券残存入国時6ヵ月以上", "未使用査証欄1頁以上"],
    officialLinks: { mofa: "" }, // Needs official link
    lastUpdated: "2024-07-27",
  },
  {
    id: "fiji",
    name: "フィジー共和国",
    code: "FJ",
    region: "oceania",
    visaRequirement: {
      type: "visa_free",
      duration: 120, // 4ヶ月
      purpose: ["tourism", "business_meeting"], // 業務は打合せのみ2週間
    },
    conditions: ["旅券残存入国時6ヵ月＋滞在日数以上", "未使用査証欄1頁以上"],
    notes: [
      "4ヶ月以内の観光、2週間以内の業務目的（業務打合せ）はビザ不要",
      "滞在費用証明の持参が望ましい",
      "黄熱に感染する危険のある国から来る1歳以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎで黄熱危険国の空港に12時間以上滞在した場合も証明書が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/fiji/index.html",
    },
    lastUpdated: "2024-07-27",
  },
  {
    id: "french_polynesia",
    name: "フランス領ポリネシア（タヒチ）",
    code: "PF",
    region: "oceania",
    visaRequirement: {
      type: "visa_free",
      duration: 90, // within 180 days
      purpose: ["tourism"],
    },
    conditions: ["旅券残存出国時3ヵ月以上", "未使用査証欄見開き2頁以上"],
    notes: [
      "海外旅行保険、滞在費用証明（ホテル予約提示なら1日EUR65、無提示なら1日EUR120）、宿泊証明書（ホテル予約確認書等）の持参が望ましい",
      "黄熱に感染する危険のある国から来る1歳以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎで黄熱危険国の空港に12時間以上滞在した場合も証明書が必要",
    ],
    officialLinks: { mofa: "" }, // Needs official link
    lastUpdated: "2024-07-27",
  },
  {
    id: "marshall_islands",
    name: "マーシャル諸島共和国",
    code: "MH",
    region: "oceania",
    visaRequirement: {
      type: "visa_required", // Visa on arrival
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: ["旅券残存入国時6ヵ月以上", "未使用査証欄1頁以上"],
    notes: [
      "観光目的は到着空港でビザを取得",
      "業務目的の滞在は事前に現地移民局から許可を得て到着空港でビザを取得",
    ],
    officialLinks: { mofa: "" }, // Needs official link
    lastUpdated: "2024-07-27",
  },
  {
    id: "micronesia",
    name: "ミクロネシア連邦",
    code: "FM",
    region: "oceania",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism", "business_exploration"], // 取引先決定のための業務
    },
    conditions: ["旅券残存入国時120日＋滞在日数以上"],
    notes: [
      "海外旅行保険の加入が望ましい",
      "取引先会社決定のための業務目的はビザ不要",
      "取引先会社が決定していて具体的な業務や金銭の動きがある場合は、ビジネスパーミットの取得が必要",
    ],
    officialLinks: { mofa: "" }, // Needs official link
    lastUpdated: "2024-07-27",
  },
];

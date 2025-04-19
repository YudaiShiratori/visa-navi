import type { Country } from "../types";

export const oceaniaCountries: Country[] = [
  {
    id: "australia",
    name: "オーストラリア連邦",
    code: "AU",
    region: "oceania",
    visaRequirement: {
      type: "evisa",
      duration: 90,
      evisaAvailable: true,
      purpose: ["tourism", "business", "visit"],
    },
    conditions: [
      "3ヵ月以内の観光、業務、知人・親族訪問目的の滞在はビザ不要",
      "帰国時まで有効な旅券、ETA（電子渡航認証）の事前取得が必要",
      "黄熱に感染する危険のある国から来る、1歳以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎのため、黄熱に感染する危険のある国の空港に12時間以上滞在した渡航者も黄熱予防接種証明書が必要",
      "エクアドルのガラパゴス諸島への渡航者は除く",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/australia/index.html",
    },
  },
  {
    id: "northern_mariana_islands",
    name: "北マリアナ諸島（サイパン）",
    code: "MP",
    region: "oceania",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "45日以内の業務、観光目的の滞在はグアム－北マリアナ諸島ビザ免除プログラム（Guam-CNMI VWP）あり",
      "旅券残存帰国日まで有効なもの（入国時45日以上が望ましい）、出国用航空券、グアムー北マリアナ諸島連邦電子渡航認証「Guam-CNMI ETA」が必要",
      "46日以上90日以内の業務、観光目的の滞在はアメリカビザ免除プログラム(Visa Waiver Program)あり",
      "旅券残存帰国日まで有効なもの（入国時90日以上が望ましい）",
      "ビザ免除プログラムの必要要件は、ESTA(電子渡航認証) の事前取得以外にも多数あり",
    ],
    notes: ["ESTAだけではない アメリカビザ免除のための10の条件"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/index.html",
    },
  },
  {
    id: "kiribati",
    name: "キリバス共和国",
    code: "KI",
    region: "oceania",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism"],
    },
    conditions: [
      "30日以内の滞在はビザ不要",
      "旅券残存出国時6ヵ月以上、出国用航空券、十分な滞在費用が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/index.html",
    },
  },
  {
    id: "guam",
    name: "グアム（米国）",
    code: "GU",
    region: "oceania",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "45日以内の業務、観光目的の滞在はグアム－北マリアナ諸島ビザ免除プログラム（Guam-CNMI VWP）あり",
      "旅券残存帰国日まで有効なもの（入国時45日以上が望ましい）、出国用航空券、グアムー北マリアナ諸島連邦電子渡航認証「Guam-CNMI ETA」が必要",
      "46日以上90日以内の業務、観光目的の滞在はアメリカビザ免除プログラム(Visa Waiver Program)あり",
      "旅券残存帰国日まで有効なもの（入国時90日以上が望ましい）",
      "ビザ免除プログラムの必要要件は、ESTA(電子渡航認証) の事前取得以外にも多数あり",
    ],
    notes: ["ESTAだけではない アメリカビザ免除のための10の条件"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/index.html",
    },
  },
  {
    id: "cook_islands",
    name: "クック諸島（ニュージーランド）",
    code: "CK",
    region: "oceania",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism"],
    },
    conditions: [
      "30日以内の滞在はビザ不要",
      "旅券残存出国時6ヵ月以上、出国用航空券、ホテル予約確認が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/index.html",
    },
  },
  {
    id: "samoa",
    name: "サモア独立国",
    code: "WS",
    region: "oceania",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism"],
    },
    conditions: [
      "90日以内の滞在はビザ不要",
      "旅券残存出国時6ヵ月以上、出国用航空券、滞在資金、滞在先の住所・連絡が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/samoa/index.html",
    },
  },
  {
    id: "solomon_islands",
    name: "ソロモン諸島",
    code: "SB",
    region: "oceania",
    visaRequirement: {
      type: "visa_free",
      duration: 45,
      purpose: ["tourism"],
    },
    conditions: [
      "入国時に45日以内の滞在許可証が発行される",
      "旅券残存入国時6ヵ月以上、出国用航空券、十分な滞在費用が必要",
      "黄熱に感染する危険のある国から来る、9か月以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎのため、黄熱に感染する危険のある国の空港に12時間以上滞在した渡航者も黄熱予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/solomon/index.html",
    },
  },
  {
    id: "tuvalu",
    name: "ツバル",
    code: "TV",
    region: "oceania",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism"],
    },
    conditions: [
      "入国時に30日以内で出国日までの滞在許可が付与される",
      "旅券残存入国時6ヵ月以上、出国用航空券、十分な滞在費用が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/tuvalu/index.html",
    },
  },
  {
    id: "tonga",
    name: "トンガ王国",
    code: "TO",
    region: "oceania",
    visaRequirement: {
      type: "visa_required",
      duration: 31,
      purpose: ["tourism"],
    },
    conditions: [
      "観光目的の場合は到着空港で入国時に31日間滞在可能なビザが発給される",
      "旅券残存入国時6ヵ月以上、未使用査証欄1頁以上、出国用航空券が必要",
    ],
    notes: ["就労（取材を含む）目的は、事前に入国許可申請が必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/tonga/index.html",
    },
  },
  {
    id: "nauru",
    name: "ナウル共和国",
    code: "NR",
    region: "oceania",
    visaRequirement: {
      type: "visa_required",
      duration: 0,
    },
    conditions: ["目的に関わらず事前にビザ取得が必要", "取得方法はナウル入国管理局に確認が必要"],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/nauru/index.html",
    },
  },
  {
    id: "niue",
    name: "ニウエ",
    code: "NU",
    region: "oceania",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism"],
    },
    conditions: [
      "30日以内の滞在はビザ不要",
      "旅券残存出国時3ヵ月以上、出国用航空券、滞在費用証明の持参、滞在先が決まっていることが必要",
      "黄熱に感染する危険のある国から来る、生後9か月以上の渡航者は黄熱予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/index.html",
    },
  },
  {
    id: "new_caledonia",
    name: "ニューカレドニア（フランス）",
    code: "NC",
    region: "oceania",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism"],
    },
    conditions: [
      "あらゆる180日間の期間内で90日以内の滞在はビザ不要",
      "旅券残存出国時3ヵ月以上、未使用査証欄見開き2頁以上、出国用航空券が必要",
      "海外旅行保険、滞在費用証明（ホテル予約の提示なある場合は1日EUR65、提示がない場合は1日EUR120）、宿泊証明書（ホテル予約確認書等）の持参が望ましい",
      "黄熱に感染する危険のある国から来る、1歳以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎのため、黄熱に感染する危険のある国の空港に12時間以上滞在した渡航者も黄熱予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/france/index.html",
    },
  },
  {
    id: "new_zealand",
    name: "ニュージーランド",
    code: "NZ",
    region: "oceania",
    visaRequirement: {
      type: "evisa",
      duration: 90,
      evisaAvailable: true,
      purpose: ["tourism", "business", "study", "official", "transit"],
    },
    conditions: [
      "３ヵ月以内の観光、業務、就学、公用、通過目的の滞在はビザ不要",
      "2019年10月1日入国分より、無査証にて入国・通過する場合は、NZeTA(電子渡航認証)の取得が事前に必要",
      "旅券残存3ヵ月＋滞在日数以上、未使用査証欄1頁以上、出国用航空券、滞在資金（1ヵ月あたりNZD400、宿泊費未払の場合はNZD1,000相当の現金等）、第三国へのビザ（必要な場合）が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/newzealand/index.html",
    },
  },
  {
    id: "vanuatu",
    name: "バヌアツ共和国",
    code: "VU",
    region: "oceania",
    visaRequirement: {
      type: "visa_required",
      duration: 120,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "業務目的は事前にビザ取得が必要",
      "観光目的は到着空港で120日の観光ビザが発給される",
      "旅券残存入国時6ヵ月以上、出国用航空券が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/vanuatu/index.html",
    },
  },
  {
    id: "papua_new_guinea",
    name: "パプアニューギニア独立国",
    code: "PG",
    region: "oceania",
    visaRequirement: {
      type: "visa_required",
      duration: 0,
    },
    conditions: ["事前にビザ取得が必要"],
    notes: [
      "観光、業務目的の到着ビザは2020年3月から発給停止中",
      "外交・公用目的に限りポートモレスビー・ジャクソン国際空港での到着ビザ取得が可能（2023年9月末～）",
      "黄熱に感染する危険のある国から来る、1歳以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎのため、黄熱に感染する危険のある国の空港を経由した渡航者も黄熱予防接種証明書が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/png/index.html",
    },
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
    conditions: [
      "30日以内の業務、観光、知人訪問目的の滞在はビザ不要",
      "旅券残存入国時6ヵ月以上、未使用査証欄1頁以上、出国用航空券、滞在費用証明の所持が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/palau/index.html",
    },
  },
  {
    id: "fiji",
    name: "フィジー共和国",
    code: "FJ",
    region: "oceania",
    visaRequirement: {
      type: "visa_free",
      duration: 120,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "4ヶ月以内の観光、2週間以内の業務目的（業務打合せ）はビザ不要",
      "旅券残存入国時6ヵ月＋滞在日数以上、未使用査証欄1頁以上、出国用航空券が必要",
      "滞在費用証明の持参が望ましい",
      "黄熱に感染する危険のある国から来る、1歳以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎのため、黄熱に感染する危険のある国の空港に12時間以上滞在した渡航者も黄熱予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/fiji/index.html",
    },
  },
  {
    id: "french_polynesia",
    name: "フランス領ポリネシア（タヒチ）",
    code: "PF",
    region: "oceania",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism"],
    },
    conditions: [
      "あらゆる180日間の期間内で90日以内の滞在はビザ不要",
      "旅券残存出国時3ヵ月以上、未使用査証欄見開き2頁以上、出国用航空券が必要",
      "海外旅行保険、滞在費用証明（ホテル予約の提示なある場合は1日EUR65、提示がない場合は1日EUR120）、宿泊証明書（ホテル予約確認書等）の持参が望ましい",
      "黄熱に感染する危険のある国から来る、1歳以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎのため、黄熱に感染する危険のある国の空港に12時間以上滞在した渡航者も黄熱予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/france/index.html",
    },
  },
  {
    id: "marshall_islands",
    name: "マーシャル諸島共和国",
    code: "MH",
    region: "oceania",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "30日以内の観光目的は到着空港でビザを取得する",
      "旅券残存入国時6ヵ月以上、未使用査証欄1頁以上、出国用航空券、滞在費用が必要",
      "業務目的の滞在は事前に現地移民局から許可を得て到着空港でビザを取得する",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/marshall/index.html",
    },
  },
  {
    id: "micronesia",
    name: "ミクロネシア連邦",
    code: "FM",
    region: "oceania",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "30日以内の滞在はビザ不要",
      "旅券残存入国時120日＋滞在日数以上、出国用航空券、次の訪問国のビザ（必要な場合）が必要",
      "海外旅行保険の加入が望ましい",
    ],
    notes: [
      "取引先会社決定のための業務目的はビザ不要",
      "取引先会社が決定していて具体的な業務や金銭の動きがある場合は、現地受け入れ先をとおしてビジネスパーミットの取得が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/micronesia/index.html",
    },
  },
];

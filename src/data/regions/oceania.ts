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
      "日本国籍は観光・商用等の短期滞在にETA（Subclass 601）が必要",
      "申請はAustralian ETAアプリを使用（アプリ利用料AUD 20）",
      "ETAの有効期間は12ヶ月で、1回の滞在は最大3ヶ月",
      "ICチップ搭載パスポートが必要",
      "復路航空券の所持が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_071.html",
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
      "45日以内の観光・業務目的の滞在はGuam-CNMI VWP（ビザ免除プログラム）を利用可能",
      "Guam-CNMI ETA（電子渡航認証）の事前取得が必要（無料、有効期間2年）",
      "旅券残存帰国日まで有効なもの（入国時45日以上が望ましい）、出国用航空券が必要",
      "46日以上90日以内の滞在はESTA（USD 40.27）の事前取得が必要",
      "ESTA利用時は旅券残存帰国日まで有効なもの（入国時90日以上が望ましい）",
      "2024年9月より電子税関申告書（EDF）の提出が必須化",
    ],
    notes: [
      "2024年11月29日よりGuam-CNMI ETAが紙のI-736フォームに代わり導入",
      "ESTA手数料は2025年9月30日にUSD 21からUSD 40に、2026年1月1日にUSD 40.27に改定",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_223.html",
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
    notes: [
      "滞在延長は移民局にて最大4ヶ月まで可能",
      "出国時に出国税AUD 20が必要（通常は航空券代金に含まれる）",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_268.html",
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
      "45日以内の観光・業務目的の滞在はGuam-CNMI VWP（ビザ免除プログラム）を利用可能",
      "Guam-CNMI ETA（電子渡航認証）の事前取得が必要（無料、有効期間2年）",
      "旅券残存帰国日まで有効なもの（入国時45日以上が望ましい）、出国用航空券が必要",
      "46日以上90日以内の滞在はESTA（USD 40.27）の事前取得が必要",
      "ESTA利用時は旅券残存帰国日まで有効なもの（入国時90日以上が望ましい）",
      "2024年9月より電子税関申告書（EDF）の提出が必須化",
    ],
    notes: [
      "2024年11月29日よりGuam-CNMI ETAが紙のI-736フォームに代わり導入",
      "ESTA手数料は2025年9月30日にUSD 21からUSD 40に、2026年1月1日にUSD 40.27に改定",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_224.html",
    },
  },
  {
    id: "cook_islands",
    name: "クック諸島（ニュージーランド）",
    code: "CK",
    region: "oceania",
    visaRequirement: {
      type: "visa_free",
      duration: 31,
      purpose: ["tourism"],
    },
    conditions: [
      "31日以内の滞在はビザ不要（入国時に自動的に滞在許可が発行される）",
      "旅券残存出国時6ヵ月以上、出国用航空券、ホテル予約確認、記入済みアライバルカードが必要",
    ],
    notes: ["滞在延長は現地移民省への申請により合計最大8ヶ月まで可能"],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_300.html",
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
      "旅券残存出国時6ヵ月以上、出国用航空券、滞在資金、滞在先の住所・連絡先が必要",
    ],
    notes: [
      "91日以上の滞在は駐日サモア大使館での査証取得または現地移民局での滞在期間更新が必要",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_073.html",
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
    notes: ["滞在延長は最大90日まで可能"],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_072.html",
    },
  },
  {
    id: "tuvalu",
    name: "ツバル",
    code: "TV",
    region: "oceania",
    visaRequirement: {
      type: "visa_required",
      duration: 0,
      purpose: ["tourism"],
    },
    conditions: [
      "観光目的でも事前にツバル移民局へメールで査証申請が必要（到着ビザ・電子ビザ制度なし）",
      "観光査証の費用は入国時に現金でAUD 100の支払いが必要",
      "旅券残存入国時6ヵ月以上、出国用航空券、十分な滞在費用が必要",
    ],
    notes: ["査証取得には時間を要するため余裕をもった申請が必要"],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_274.html",
    },
  },
  {
    id: "tonga",
    name: "トンガ王国",
    code: "TO",
    region: "oceania",
    visaRequirement: {
      type: "visa_free",
      duration: 31,
      purpose: ["tourism"],
    },
    conditions: [
      "観光目的の場合は到着空港で入国時に31日間の無料滞在許可が発給される",
      "旅券残存入国時6ヵ月以上、未使用査証欄1頁以上、出国用航空券が必要",
    ],
    notes: [
      "就労（取材を含む）目的は事前に入国許可申請が必要",
      "滞在延長は69 TOP/月で最大6ヶ月まで可能",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_273.html",
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
    conditions: [
      "目的に関わらず事前にビザ取得が必要",
      "在ブリスベン・ナウル総領事館へ申請書類を送付して申請（手続きには最低3週間が必要）",
      "観光ビザの取得費用はAUD 50",
      "旅券残存入国時3ヵ月以上が必要",
      "到着ビザおよび電子ビザの制度はなし",
      "外交・公用旅券所持者のみビザ免除",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_271.html",
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
      "30日以内の滞在はビザ不要（入国時に無料のVisitor Permitが発行される）",
      "旅券残存出国時3ヵ月以上、出国用航空券、滞在費用証明の持参、滞在先が決まっていることが必要",
      "黄熱に感染する危険のある国から来る、生後9か月以上の渡航者は黄熱予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/niue/index.html",
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
      "海外旅行保険、滞在費用証明（ホテル予約の提示がある場合は1日EUR65、提示がない場合は1日EUR120）、宿泊証明書（ホテル予約確認書等）の持参が望ましい",
      "黄熱に感染する危険のある国から来る、1歳以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎのため、黄熱に感染する危険のある国の空港に12時間以上滞在した渡航者も黄熱予防接種証明書が必要",
    ],
    notes: [
      "ニューカレドニアはシェンゲン圏に属さない仏海外領土のためETIASの対象外",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_299.html",
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
      "3ヵ月以内の観光、業務、就学、公用、通過目的の滞在はビザ不要だが、NZeTA（電子渡航認証）の事前取得が必要",
      "NZeTA費用：アプリ申請NZD 17 / オンライン申請NZD 23（別途IVL NZD 100が必要、合計NZD 117〜123）",
      "IVL（国際観光税）は2024年後半より徴収開始",
      "旅券残存3ヵ月＋滞在日数以上、未使用査証欄1頁以上、出国用航空券、滞在資金（1ヵ月あたりNZD 4,200相当）、第三国へのビザ（必要な場合）が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_074.html",
    },
  },
  {
    id: "vanuatu",
    name: "バヌアツ共和国",
    code: "VU",
    region: "oceania",
    visaRequirement: {
      type: "visa_free",
      duration: 120,
      purpose: ["tourism"],
    },
    conditions: [
      "観光目的は到着時に120日間の無料滞在許可が発給される（延長不可）",
      "旅券残存入国時6ヵ月以上、出国用航空券が必要",
    ],
    notes: ["業務目的は事前にビザ取得が必要"],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_078.html",
    },
  },
  {
    id: "papua_new_guinea",
    name: "パプアニューギニア独立国",
    code: "PG",
    region: "oceania",
    visaRequirement: {
      type: "evisa",
      duration: 60,
      evisaAvailable: true,
    },
    conditions: [
      "事前の電子ビザ（e-Visa）取得のほか、2025年12月19日より60日以内の商用・観光・親族訪問・通過目的に限り到着時ビザ（Visa on Arrival）の取得が可能",
      "観光ビザの費用はJPY 6,000",
      "申請はwww.ica.gov.pgにて行う",
      "2025年10月1日よりデジタル入国カード（PNGDAC）での入国登録が紙の入国カードに代わり義務化（到着72時間前から当日まで、または空港端末でも登録可）",
      "黄熱に感染する危険のある国から来る、1歳以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎのため、黄熱に感染する危険のある国の空港を経由した渡航者も黄熱予防接種証明書が必要",
    ],
    notes: [
      "出国時にGreen Fee（出国税）50キナまたはUSD 12が必要（現金・クレジットカード払い、12歳以下等は免除）",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_075.html",
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
      "オンラインでの到着申告（QRコード取得）が必要",
    ],
    notes: [
      "滞在延長はUSD 50で最大90日まで可能",
      "パラオ環境保護税（PPEF）USD 100が国際線航空券代金に含まれる形で徴収される",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_272.html",
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
      "4ヶ月（120日）以内の観光、2週間以内の業務目的（業務打合せ）はビザ不要",
      "旅券残存入国時6ヵ月＋滞在日数以上、未使用査証欄1頁以上、出国用航空券が必要",
      "滞在費用証明の持参が望ましい",
      "黄熱に感染する危険のある国から来る、1歳以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎのため、黄熱に感染する危険のある国の空港に12時間以上滞在した渡航者も黄熱予防接種証明書が必要",
    ],
    notes: ["滞在延長は移民局にてFJD 69/月で最大2ヶ月の追加が可能"],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_076.html",
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
      "海外旅行保険、滞在費用証明（ホテル予約の提示がある場合は1日EUR65、提示がない場合は1日EUR120）、宿泊証明書（ホテル予約確認書等）の持参が望ましい",
      "黄熱に感染する危険のある国から来る、1歳以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎのため、黄熱に感染する危険のある国の空港に12時間以上滞在した渡航者も黄熱予防接種証明書が必要",
    ],
    notes: [
      "フランス領ポリネシアはシェンゲン圏に属さない仏海外領土のためETIASの対象外",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_079.html",
    },
  },
  {
    id: "marshall_islands",
    name: "マーシャル諸島共和国",
    code: "MH",
    region: "oceania",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism"],
    },
    conditions: [
      "90日以内の短期滞在目的はビザ不要（空港到着時に入国許可申請、手数料なし）",
      "旅券残存有効、出国用航空券（eチケット）、滞在費用が必要",
    ],
    notes: [
      "業務目的の滞在は事前に現地移民局から許可を得る必要がある",
      "出国時に空港でUSD 25の出国料（国内線利用時は不要）が必要",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_269.html",
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
      "出国時に空港施設使用料が必要（2025年6月現在：コスラエ州・ヤップ州USD 20、ポンペイ州USD 25、チューク州USD 30）",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_270.html",
    },
  },
];

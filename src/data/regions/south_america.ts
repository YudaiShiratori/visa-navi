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
      "2023年9月30日から3年間の期限付きでビザ免除措置あり",
      "90日以内の観光、親族・知人訪問、業務、学術会議・講演会・講習会等への参加、通過、芸術・スポーツ等の各種イベントへの参加目的はビザ不要",
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "未使用査証欄見開き2頁以上が必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
      "ホテル予約確認書または招聘状の持参が望ましい",
    ],
    notes: [
      "黄熱予防接種証明書の持参が強く推奨される（特にアマゾン地域へ渡航する場合）",
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にCPF（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/brazil/index.html",
    },
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
      "90日以内の観光・業務目的の滞在はビザ不要",
      "パスポートの残存有効期間が入国時6ヶ月以上必要",
      "未使用査証欄1頁以上が必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
      "ホテル予約確認書または滞在先住所の提示が必要",
    ],
    notes: [
      "ブラジル、ボリビア、コロンビア、エクアドル、パナマ、パラグアイ、ペルー、ベネズエラから来る渡航者は、黄熱予防接種証明書が必要",
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にDNI（身分証明書）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/argentina/index.html",
    },
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
      "90日以内の観光、業務、外交・公用目的の滞在はビザ不要",
      "帰国時まで有効な旅券が必要",
      "未使用査証欄1頁以上が必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
      "入国時に税関申告書の提出が必要",
    ],
    notes: [
      "イースター島(ラパ・ヌイ)へ渡航する場合は、入島許可証の事前取得が必要",
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にRUT（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/chile/index.html",
    },
  },
  {
    id: "peru",
    name: "ペルー",
    code: "PE",
    region: "south_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "transit"],
    },
    conditions: [
      "90日以内の観光、外交・公用目的の滞在はビザ不要",
      "パスポートの残存有効期間が入国時6ヶ月以上必要",
      "未使用査証欄5頁以上が必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
      "ホテル予約確認書または滞在先住所の提示が必要",
    ],
    notes: [
      "黄熱に感染する危険のある国から来る、1歳以上の渡航者は黄熱予防接種証明書が必要",
      "アマゾン地域（Amazonas, Loreto, Madre de Dios, San Martin, Ucayali）への渡航には黄熱予防接種証明書が強く推奨される",
      "業務目的は事前にビザ取得が必要",
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にDNI（身分証明書）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/peru/index.html",
    },
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
      "90日以内の観光、業務、報酬を伴わない活動、外交・公用目的の滞在はビザ不要",
      "パスポートの残存有効期間が入国時3ヶ月以上必要",
      "未使用査証欄2頁以上が必要",
      "出国用の航空券の所持が必要",
      "入国フライトの搭乗72時間から1時間前に、出入国管理アプリ（Check-Mig）への登録が必要",
      "ホテル予約確認書または滞在先住所の提示が必要",
    ],
    notes: [
      "アンゴラ、ブラジル、コンゴ民主共和国、ウガンダから来る、1歳以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎのため、上記国の空港に12時間以上滞在した渡航者も黄熱予防接種証明書が必要",
      "アマゾン地域への渡航には黄熱予防接種証明書が強く推奨される",
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/colombia/index.html",
    },
  },
  {
    id: "venezuela",
    name: "ベネズエラ",
    code: "VE",
    region: "south_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "90日以内の観光、営利行為を伴わない商談、視察、会議出席等での滞在はビザ不要",
      "パスポートの残存有効期間が入国時6ヶ月以上必要",
      "未使用査証欄見開き2頁以上が必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
      "ホテル予約確認書または滞在先住所の提示が必要",
    ],
    notes: [
      "黄熱に感染する危険のある国から来る、1歳以上の渡航者は黄熱予防接種証明書が必要",
      "黄熱に感染する危険のある国の空港に12時間以上滞在した渡航者も黄熱予防接種証明書が必要",
      "特にアマゾン地域へ渡航する場合は黄熱予防接種証明書の携行が強く推奨される",
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/venezuela/index.html",
    },
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
      "90日以内の観光、業務目的の滞在はビザ不要",
      "パスポートの残存有効期間が入国時6ヶ月以上必要",
      "未使用査証欄1頁以上が必要",
      "出国用の航空券の所持が必要",
      "滞在費用証明（USD450/月またはクレジットカード）の持参が必要",
      "入国時に滞在目的と滞在先の申告が必要",
    ],
    notes: [
      "ブラジル、コンゴ民主共和国、ウガンダからの渡航者及び乗り継ぎのため12時間以上滞在した1歳以上の渡航者は黄熱予防接種証明書が必要",
      "アマゾン地域への渡航には黄熱予防接種証明書が強く推奨される",
      "ガラパゴス諸島へ渡航する場合は入島許可証（Transit Control Card）の事前取得とガラパゴス国立公園入場料（USD100）の支払いが必要",
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にRUC（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/ecuador/index.html",
    },
  },
  {
    id: "bolivia",
    name: "ボリビア",
    code: "BO",
    region: "south_america",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism"],
    },
    conditions: [
      "30日以内（1年間で最大90日まで）の観光目的滞在はビザ不要",
      "パスポートの残存有効期間が入国時6ヶ月以上必要",
      "未使用査証欄2頁以上が必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
      "ホテル予約確認書または滞在先住所の提示が必要",
      "入国カード（Tarjeta Andina de Migración）の記入が必要",
    ],
    notes: [
      "業務目的は事前にビザ取得が必要",
      "黄熱に感染する危険のある国から来る、1歳以上の渡航者は黄熱予防接種証明書が必要",
      "特にアマゾンやパンタナール地域への渡航の場合は黄熱予防接種証明書の携行が強く推奨される",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にNIT（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/bolivia/index.html",
    },
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
      "90日以内の観光、業務、外交・公用目的の滞在はビザ不要",
      "パスポートの残存有効期間が入国時6ヶ月以上必要",
      "未使用査証欄見開2頁以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
      "ホテル予約確認書または滞在先住所の提示が必要",
    ],
    notes: [
      "ブラジル（アマゾナス州、ミナス・ジェライス州、サンパウロ州、リオ・グランデ・ド・スール州、ロライマ州）、ボリビア（サンタクルス県）、ペルー（ワヌコ州、フニン州、マドレ・デ・ディオス州、サン・マルティン州、ウカヤリ州）、コロンビア（カケタ県、ウイラ県、ナリーニョ県、プトゥマヨ県、バウペス県、トリマ県）、ガイアナ（ボア・ビスタ、シパルニ）から来る、1歳以上59歳以下の渡航者は黄熱予防接種証明書が必要",
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にRUC（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/paraguay/index.html",
    },
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
      "90日以内の観光・業務目的の滞在はビザ不要",
      "パスポートの残存有効期間が入国時6ヶ月以上必要",
      "未使用査証欄1頁以上が必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
      "ホテル予約確認書または滞在先住所の提示が必要",
    ],
    notes: [
      "黄熱に感染する危険のある国（ブラジル、ボリビア、コロンビア、エクアドル、ガイアナ、パナマ、パラグアイ、ペルー、スリナム、トリニダード・トバゴ、ベネズエラ）から来る渡航者は黄熱予防接種証明書が必要",
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にRUT（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/uruguay/index.html",
    },
  },
  {
    id: "guyana",
    name: "ガイアナ",
    code: "GY",
    region: "south_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "3か月以内の観光、業務目的の滞在はビザ不要",
      "パスポートの残存有効期間が出国時6ヶ月以上必要",
      "出国用の航空券の所持が必要",
      "滞在費用証明が必要",
      "宿泊予約確認書の持参が必要",
      "入国カードの記入が必要",
    ],
    notes: [
      "黄熱に感染する危険のある国から来る、１歳以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎのため、黄熱に感染する危険のある国の空港に4時間以上滞在した渡航者も黄熱予防接種証明書が必要",
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/guyana/index.html",
    },
  },
  {
    id: "suriname",
    name: "スリナム",
    code: "SR",
    region: "south_america",
    visaRequirement: {
      type: "evisa",
      duration: 90,
      evisaAvailable: true,
      purpose: ["tourism", "family_visit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "観光、親族訪問目的以外は事前にe-Visaの取得が必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
      "ホテル予約確認書または滞在先住所の提示が必要",
    ],
    notes: [
      "e-Visaの取得はSuriname E-VISA Websiteから可能",
      "黄熱に感染する危険のある国から来る、1歳以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎのため、黄熱に感染する危険のある国の空港に12時間以上滞在した渡航者も黄熱予防接種証明書が必要",
      "すべての渡航者は黄熱予防接種証明書の携行が強く推奨される",
      "ビザは90日間有効で、90日間の滞在が可能",
      "入国時に指紋採取が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/suriname/index.html",
    },
  },
];

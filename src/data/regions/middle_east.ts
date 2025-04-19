import type { Country } from "../types";

export const middleEastCountries: Country[] = [
  {
    id: "afghanistan",
    name: "アフガニスタン",
    code: "AF",
    region: "middle_east",
    visaRequirement: { type: "visa_required", duration: 0 },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "入国にはビザが必要"],
    notes: [
      "現在、日本国政府はアフガニスタン全土に退避勧告を発出しています。アフガニスタンへの渡航は、どのような目的であれ止めてください。",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/afghanistan/index.html",
    },
  },
  {
    id: "uae",
    name: "アラブ首長国連邦",
    code: "AE",
    region: "middle_east",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism", "business", "family_visit"],
    },
    conditions: [
      "パスポートの残存有効期間が入国時6ヶ月以上必要",
      "未使用査証欄見開き2頁以上必要",
      "出国用航空券の提示を求められる場合あり",
      "滞在中の費用を証明するものの提示を求められる場合あり",
      "黄熱に感染する危険のある国から来る、生後9か月以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎのため、黄熱に感染する危険のある国の空港に12時間以上滞在した渡航者も黄熱予防接種証明書が必要",
      "30日以内の観光、親族訪問、短期商用目的の滞在は入国時にOn Arrival Visaが無料で発給される",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/uae/index.html",
    },
  },
  {
    id: "yemen",
    name: "イエメン",
    code: "YE",
    region: "middle_east",
    visaRequirement: { type: "visa_required", duration: 0 },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "入国にはビザが必要"],
    notes: [
      "現在、日本国政府はイエメン全土に退避勧告を発出しています。イエメンへの渡航は、どのような目的であれ止めてください。",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/yemen/index.html",
    },
  },
  {
    id: "israel",
    name: "イスラエル",
    code: "IL",
    region: "middle_east",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "family_visit"],
    },
    conditions: [
      "パスポートの残存有効期間が入国時3ヶ月以上必要",
      "未使用査証欄2頁以上必要",
      "2025年1月1日渡航分よりETA-IL（電子渡航認証）の取得が必要",
      "90日以内の観光、親族・知人訪問、出張等の営利目的以外での滞在はビザ不要",
      "就労、留学、外交・公用目的は事前にビザ取得が必要",
      "空港からの入国は、原則として旅券に出入国スタンプは押されなくなり、入国カードが発行されるので滞在中は必ず携行が必要",
      "対立国としているアラブ諸国のビザ、入国スタンプがあると、セキュリティーチェックが厳格になる場合あり",
    ],
    notes: [
      "現在、日本国政府はイスラエルのガザ地区及び同地区との境界周辺、レバノンとの国境地帯に退避勧告、上記以外の地域に渡航中止勧告を発出しています。イスラエルへの渡航は、どのような目的であれ止めてください。",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/israel/index.html",
    },
  },
  {
    id: "iraq",
    name: "イラク",
    code: "IQ",
    region: "middle_east",
    visaRequirement: { type: "evisa", duration: 0, evisaAvailable: true },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "事前にe-Visaまたはビザ取得が必要",
      "旅券にイスラエルのビザまたは出入国記録があるとビザは発給されない",
    ],
    notes: [
      "現在、日本国政府はバグダッド県（バグダッド国際空港敷地内を除く）、ニナワ県、キルクーク県、サラーハッディーン県、ディヤーラ県、アンバール県、バービル県、ワーシト県、クルディスタン地域（エルビル県、スレイマーニーヤ県、ドホーク県）とレベル４地域であるニナワ県、キルクーク県、サラーハッディーン県及びディヤーラ県との県境付近に退避勧告、イラク クルディスタン地域（エルビル県、ドホーク県、スレイマーニーヤ県）の隣国トルコ、イラン及びシリアとの国境付近、エルビル県（レベル２地域であるエルビル市を除く。レベル４地域であるニナワ県、キルクーク県及びサラーハッディーン県との県境を除く）、中南部・南部7県（カルバラー県、ナジャフ県、ディワーニーヤ県、バスラ県、ムサンナー県、ズィーカール県、ミーサーン県）、バグダッド国際空港敷地内に渡航中止勧告を発出しています。イラク上記地域への渡航は、止めてください。",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/iraq/index.html",
    },
  },
  {
    id: "iran",
    name: "イラン",
    code: "IR",
    region: "middle_east",
    visaRequirement: {
      type: "visa_free",
      duration: 15,
      purpose: ["tourism"],
      evisaAvailable: true,
    },
    conditions: [
      "パスポートの残存有効期間が入国時6ヶ月以上必要",
      "未使用査証欄2頁以上必要",
      "海外旅行傷害保険の加入が必要（入国時に係官から提示を求められる場合あり、滞在期間を全てカバーする英文保険証券が必要）",
      "黄熱に感染する危険のある国から来る、生後9か月以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎのため、黄熱に感染する危険のある国の空港に12時間以上滞在した渡航者も黄熱予防接種証明書が必要",
      "15日以内の観光目的で空路入国の場合はビザ不要（ただし、入国回数は6ヵ月で1回かつ1年に2回まで）",
      "旅券にイスラエルの入国・滞在記録があると、入国を拒否される場合あり",
      "入国時に保険未加入の場合はイランの到着空港で加入が必要",
      "観光以外の目的は事前にビザまたはe-Visaの取得が必要",
    ],
    notes: [
      "現在、日本国政府はパキスタンとの国境地帯、ケルマンシャー州及びイーラーム州のイラクとの国境地帯に退避勧告、上記地域を除く全地域に渡航中止勧告を発出しています。イランへの渡航は、どのような目的であれ止めてください。",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/iran/index.html",
    },
  },
  {
    id: "oman",
    name: "オマーン",
    code: "OM",
    region: "middle_east",
    visaRequirement: {
      type: "evisa",
      duration: 0,
      evisaAvailable: true,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "事前にe-Visaの取得が必要",
      "パスポートの残存有効期間が6ヶ月以上必要",
      "黄熱に感染する危険のある国から来る、生後9か月以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎのため、黄熱に感染する危険のある国の空港に12時間以上滞在した渡航者も黄熱予防接種証明書が必要",
      "黄熱に感染する危険のある国には、アフリカ地域ではルワンダ、タンザニアへの渡航者も含む",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/oman/index.html",
    },
  },
  {
    id: "qatar",
    name: "カタール",
    code: "QA",
    region: "middle_east",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が入国時6ヶ月以上必要",
      "未使用査証欄は見開き2ページ以上必要",
      "出国用航空券の提示が必要",
      "滞在期間中の宿泊予約の提示が必要",
      "黄熱に感染する危険のある国から来る、生後9か月以上の渡航者は黄熱予防接種証明書が必要",
      "30日以内の観光・業務・通過目的での滞在はビザ不要",
    ],
    notes: [
      "就労や家族滞在・長期滞在予定者は、通常カタールのスポンサー（現地受け入れ先等）を通じてビザ申請手続きが必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/qatar/index.html",
    },
  },
  {
    id: "kuwait",
    name: "クウェート",
    code: "KW",
    region: "middle_east",
    visaRequirement: {
      type: "evisa",
      duration: 90,
      evisaAvailable: true,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "3ヵ月以内の商用、観光目的の滞在は事前にe-Visaの取得が必要",
      "Visa on arrivalもあり",
    ],
    notes: ["就労、家族滞在目的は事前にビザ取得が必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/kuwait/index.html",
    },
  },
  {
    id: "saudi_arabia",
    name: "サウジアラビア",
    code: "SA",
    region: "middle_east",
    visaRequirement: {
      type: "evisa",
      duration: 0,
      evisaAvailable: true,
      purpose: ["tourism"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "黄熱に感染する危険のある国から来る、生後9か月以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎのため、黄熱に感染する危険のある国の空港に12時間以上滞在した渡航者も黄熱予防接種証明書が必要",
      "観光目的の滞在はE-VISAの取得が必要",
      "商用、就労目的は事前にビザ取得が必要",
    ],
    notes: ["旅券にイスラエルの査証または出入国記録がある場合、ビザ発給可否は領事判断になる"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/saudiarabia/index.html",
    },
  },
  {
    id: "syria",
    name: "シリア",
    code: "SY",
    region: "middle_east",
    visaRequirement: {
      type: "visa_required",
      duration: 0,
    },
    conditions: ["パスポート残存有効期間が6ヶ月以上必要", "入国にはビザが必要"],
    notes: [
      "現在、日本国政府はシリア全土に退避勧告を発出しています。シリアへの渡航は、どのような目的であれ止めてください。",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/syria/index.html",
    },
  },
  {
    id: "turkey",
    name: "トルコ",
    code: "TR",
    region: "middle_east",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "official"],
    },
    conditions: [
      "パスポートの残存有効期間が入国時150日以上必要",
      "未使用査証欄見開き2頁以上必要",
      "出国用航空券の提示が必要",
      "滞在費用証明の持参が必要",
      "海外旅行保険の加入が望ましい",
      "あらゆる180日間の期間内で90日以内の観光、業務、公用目的の滞在はビザ不要",
      "技術指導、装置組立て、機械修理、就労目的での滞在は事前にビザ取得が必要",
    ],
    notes: [
      "現在、日本国政府はシリアとの国境地帯に退避勧告、ディヤルバクル県及びイラクとの国境地帯に渡航中止勧告を発出しています。トルコ上記地域への渡航は、どのような目的であれ止めてください。",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/turkey/index.html",
    },
  },
  {
    id: "bahrain",
    name: "バーレーン",
    code: "BH",
    region: "middle_east",
    visaRequirement: {
      type: "evisa",
      duration: 14,
      evisaAvailable: true,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "黄熱に感染する危険のある国から来る、9か月以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎのため、黄熱に感染する危険のある国の空港に12時間以上滞在した渡航者も黄熱予防接種証明書が必要",
      "14日以内の観光・業務目的の滞在はVisa On Arrivalまたはe-Visaで取得可能",
    ],
    notes: ["在日公館でのビザ発給は行っていない"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/bahrain/index.html",
    },
  },
  {
    id: "jordan",
    name: "ヨルダン",
    code: "JO",
    region: "middle_east",
    visaRequirement: {
      type: "evisa",
      duration: 30,
      evisaAvailable: true,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が到着時6ヶ月以上必要",
      "事前にe-Visa取得が必要",
      "30日以内の観光・業務目的の滞在はVisa On Arrivalでの取得が可能",
    ],
    notes: ["在日公館でのビザ発給は2023年3月以降行っていない"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/jordan/index.html",
    },
  },
  {
    id: "lebanon",
    name: "レバノン",
    code: "LB",
    region: "middle_east",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "事前にビザ取得が必要",
      "1か月以内の観光・業務目的の滞在はVisa On Arrivalで取得可能",
      "旅券にイスラエルのビザまたは出入国記録があるとビザは発給されない",
    ],
    notes: [
      "現在、日本国政府は南レバノン県、ナバティーエ県、バールベック・ヘルメル県、ベカー県、アッカール県及びベイルート南部郊外（ダーヒエ地区（ラフィーク・ハリーリ国際空港の敷地内、同空港からベイルートを結ぶ幹線道路を除く。））に退避勧告、上記以外の地域に渡航中止勧告を発出しています。レバノンへの渡航は、どのような目的であれ止めてください。",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/lebanon/index.html",
    },
  },
  {
    id: "azerbaijan",
    name: "アゼルバイジャン",
    code: "AZ",
    region: "middle_east",
    visaRequirement: { type: "evisa", duration: 30, evisaAvailable: true },
    conditions: [
      "パスポート残存有効期間が入国時3ヶ月以上必要",
      "e-Visaの事前取得",
      "e-Visa (ASAN Visa) の取得が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/azerbaijan/index.html",
    },
  },
];

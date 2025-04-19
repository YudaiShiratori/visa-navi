import type { Country } from "../types";

export const asiaCountries: Country[] = [
  {
    id: "thailand",
    name: "タイ",
    code: "TH",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 60,
      evisaAvailable: true,
      purpose: ["tourism"],
    },
    conditions: [
      "観光目的での60日間ビザなし入国が可能",
      "2024年1月1日～2026年12月31日の期間のみ、30日以内の商用目的滞在はビザ免除",
      "日本国籍はVisa on Arrival、e-Visaは対象外",
      "黄熱に感染する危険のある国からの渡航者、または該当国の空港に12時間以上滞在した渡航者は予防接種証明書が必要",
    ],
    notes: [
      "60日を超える滞在にはビザの取得が必要",
      "観光目的以外の入国には原則としてビザが必要（商用目的は特定期間のみ免除）",
      "生後9か月以上で黄熱に感染する危険のある国から来る渡航者は黄熱予防接種証明書が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/thailand/index.html",
    },
  },
  {
    id: "vietnam",
    name: "ベトナム",
    code: "VN",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 45,
      evisaAvailable: true,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "45日以内の観光・商用目的滞在はビザ不要（2028年3月14日までの限定措置）",
      "パスポートの残存有効期間が入国時6ヶ月以上必要",
      "往復航空券または、第三国への航空券の提示が入国時に必要",
    ],
    notes: [
      "「前回のベトナム出国時から30日以上経過していること」の条件は廃止",
      "45日を超える滞在にはビザの取得が必要",
      "東京の大使館でビザ申請も可能",
      "e-ビザは単数/複数入国が選択可能（料金が異なる）",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/vietnam/index.html",
    },
  },
  {
    id: "singapore",
    name: "シンガポール",
    code: "SG",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism", "business", "diplomatic", "official"],
    },
    conditions: [
      "30日以内の観光・商用・外交・公用目的はビザ不要",
      "滞在可能日数は入国管理官判断となり、概ね14～30日間で発行されるので許可された日数の確認が必要",
      "パスポートの残存有効期間が入国時6ヶ月以上必要",
      "出国用予約済航空券が必要",
      "必要な場合は次の訪問国のビザが必要",
      "黄熱に感染する危険のある国から来る、1歳以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎのため、黄熱に感染する危険のある国の空港に12時間以上滞在した渡航者も黄熱予防接種証明書が必要",
    ],
    notes: [
      "入国時に許可された滞在日数をパスポートで必ず確認すること",
      "SG Arrivalカードの事前オンライン申請が必要",
      "就労や留学等の長期滞在目的のパス（ビザ）は日本での申請不可",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/singapore/index.html",
    },
  },
  {
    id: "malaysia",
    name: "マレーシア",
    code: "MY",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "90日以内の観光・業務（商談・会議・視察）目的の滞在はビザ不要",
      "パスポートの残存有効期間が入国時6ヶ月以上必要",
      "出国用航空券が必要",
      "90日以内の滞在でも修理工・機械設置者等プロフェッショナルな技術のある人や芸能活動をする方、現地就労者、指導者、駐在員等は事前にビザ取得が必要",
      "黄熱に感染する危険のある国から来る、1歳以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎのため、黄熱に感染する危険のある国の空港に12時間以上滞在した渡航者も黄熱予防接種証明書が必要",
    ],
    notes: [
      "90日を超える滞在には事前にビザの取得が必要",
      "入国時にマレーシア移民局が発行する入国スタンプの期間を必ず確認すること",
      "専門技術者、芸能活動、就労目的の場合は滞在期間に関わらず事前にビザ取得が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/malaysia/index.html",
    },
  },
  {
    id: "korea",
    name: "韓国",
    code: "KR",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "商用または観光目的で90日以内の滞在はビザ免除だが、事前にK-ETA（韓国電子旅行許可）の取得が必要",
      "トランジットエリアを出ない乗り継ぎは、ビザ免除でK-ETA取得不要",
      "【K-ETA一次免除措置】2023年4月1日から2025年12月31日まで 日本を含む22か国・地域のパスポートを持つ外国人が観光・短期商用等の目的で無査証で入国する場合は、K-ETAを取得すること無く入国可能",
      "90日以内の滞在でも就業、営利活動目的（機械の据付等の技術目的等）、家族帯同等の場合はビザ取得が必要",
    ],
    notes: [
      "東京・横浜・名古屋・大阪・福岡の領事館でビザ申請も可能",
      "技術者、就労目的、家族帯同等の特定目的の場合は滞在日数に関わらずビザが必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/korea/index.html",
      k_eta: "https://www.k-eta.go.kr/portal/apply/index.do",
    },
  },
  {
    id: "china",
    name: "中国",
    code: "CN",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism", "business", "transit", "family_visit"],
    },
    conditions: [
      "日本国籍の一般旅券所持者向けのビザ免除措置を再開（2024年11月30日～2025年12月31日）",
      "30日以内の商業・貿易活動、観光・親族訪問、交流訪問 及び 通過目的の滞在はビザ不要",
      "パスポートの残存有効期間は6ヶ月以上が望ましい",
      "黄熱に感染する危険のある国から来る、生後9か月以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎのため、黄熱に感染する危険のある国の空港に12時間以上滞在した渡航者も黄熱予防接種証明書が必要",
    ],
    notes: [
      "2020年3月10日より日本国籍に対するビザ免除措置は停止されていましたが、2024年11月30日から再開",
      "ビザ免除措置は2025年12月31日まで有効",
      "大使館、名古屋・大阪・福岡・新潟の領事館でビザ申請も可能",
      "2023年3月15日より72時間乗継ビザ免除措置が再開",
      "30日を超える滞在には引き続きビザが必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/china/index.html",
    },
  },
  {
    id: "taiwan",
    name: "台湾",
    code: "TW",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "出国用航空券の所持が必要",
      "滞在先の住所や連絡先の提示が必要",
    ],
    notes: [
      "東京・横浜・大阪の窓口で停留ビザ申請も可能",
      "オンライン入境カード（入国カード）の事前申請が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/taiwan/index.html",
    },
  },
  {
    id: "philippines",
    name: "フィリピン",
    code: "PH",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "出国用の航空券の所持が必要",
      "30日以内の滞在はビザ不要",
    ],
    notes: [
      "30日を超える滞在にはビザの申請が必要",
      "14日以内の短期商用目的の場合はビザなし入国可能",
      "在外フィリピン大使館/領事館に事前に到着の通知を行うことが推奨される",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/philippines/index.html",
    },
  },
  {
    id: "indonesia",
    name: "インドネシア",
    code: "ID",
    region: "asia",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      evisaAvailable: true,
      purpose: ["tourism", "business", "medical", "transit"],
    },
    conditions: [
      "日本国籍向けのビザ免除措置は停止中",
      "パスポートの残存有効期間が6ヶ月以上必要",
      "出国用の航空券の所持が必要",
      "30日以内の滞在で観光、商談・商品購入、治療、政府関係用務、乗り継ぎ等目的は、Visa on Arrival(VOA)またはElectronic Visa on Arrival(e-VOA)を取得",
      "30日を超える滞在でアフターセールス、機械修理・設置、就労、留学等の目的は、インドネシア国内にいる保証人がオンラインで申請するeVISAを事前に取得",
      "黄熱に感染する危険のある国から来る、生後9か月以上の渡航者は黄熱予防接種証明書が必要",
    ],
    notes: [
      "ビザなし入国はジャカルタ、バリ島など主要空港および港に限定",
      "延長申請は現地の移民局で可能（1回30日間のみ）",
      "日本でのビザ申請は不可（eVISAはインドネシア国内の保証人が申請）",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/indonesia/index.html",
    },
  },
  {
    id: "india",
    name: "インド",
    code: "IN",
    region: "asia",
    visaRequirement: {
      type: "evisa",
      duration: 30,
      evisaAvailable: true,
      purpose: ["tourism", "business", "medical"],
    },
    conditions: [
      "事前にビザまたはe-Visa取得が必要",
      "パスポートの残存有効期間が6ヶ月以上必要",
      "出国用の航空券の所持が必要",
      "インドが指定している黄熱に感染する危険のある国から来る、生後9か月以上の渡航者は黄熱予防接種証明書が必要",
    ],
    notes: [
      "ジャンム・カシミール準州及びラダック連邦直轄領・管理ライン付近は外務省から退避勧告または渡航中止勧告が出ている地域あり",
      "観光、商用・会議・治療目的での短期滞在者は、Visa on Arrival(VOA)も利用可能",
      "e-Visaは30日間（観光）、1年間（ビジネス）など複数のタイプあり",
      "東京・大阪の窓口でビザ申請も可能",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/india/index.html",
    },
  },
  {
    id: "cambodia",
    name: "カンボジア",
    code: "KH",
    region: "asia",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      evisaAvailable: true,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "事前にビザまたはe-Visa取得が必要",
      "パスポートの残存有効期間が6ヶ月以上必要",
      "出国用の航空券の所持が必要",
      "十分な資金証明が必要",
      "30日以内の観光・業務目的の滞在はVisa on Arrival(VOA)もあり",
    ],
    notes: [
      "e-Visaはオンラインで取得可能（US$36、最大30日間滞在可能）",
      "アライバルビザも空港で取得可能（US$30、観光目的のみ）",
      "30日を超える滞在には別途ビザの申請が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/cambodia/index.html",
    },
  },
  {
    id: "laos",
    name: "ラオス",
    code: "LA",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 15,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "15日以内の観光、業務目的の滞在はビザ不要",
      "パスポートの残存有効期間が6ヶ月以上必要",
      "未使用査証欄見開2頁以上必要",
    ],
    notes: [
      "15日を超える滞在には事前にビザの取得が必要",
      "ビザなし入国は国際空港および主要な陸路国境ゲートに限定",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/laos/index.html",
    },
  },
  {
    id: "myanmar",
    name: "ミャンマー",
    code: "MM",
    region: "asia",
    visaRequirement: {
      type: "evisa",
      duration: 28,
      evisaAvailable: true,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "出国用の航空券の所持が必要",
      "滞在先のホテル予約が必要",
    ],
    notes: [
      "e-VISAの利用が可能",
      "大使館でのビザ申請も可能",
      "e-Visaは入国予定日の3営業日前までに申請する必要あり",
      "ヤンゴン・マンダレー・ネピドー国際空港のみ入国可能",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/myanmar/index.html",
    },
  },
  {
    id: "mongolia",
    name: "モンゴル",
    code: "MN",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "目的を問わず30日以内の滞在はビザ不要",
      "パスポートの残存有効期間が入国時6ヶ月以上必要",
      "未使用査証欄2頁以上必要",
      "出国用航空券が必要",
    ],
    notes: ["30日を超える滞在には事前にビザの取得が必要", "東京・大阪の大使館でビザ申請可能"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/mongolia/index.html",
    },
  },
  {
    id: "hong_kong",
    name: "香港",
    code: "HK",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "diplomatic", "official"],
    },
    conditions: [
      "90日以内の観光、一般商用、外構・公用目的滞在はビザ不要",
      "旅券残存は1ヶ月以内の滞在の場合は入国時1ヶ月+滞在日数以上必要",
      "1ヶ月以上の滞在の場合は入国時3ヶ月以上の残存期間が必要",
      "出国用の予約済航空券が必要",
    ],
    notes: ["90日を超える滞在には事前にビザの取得が必要", "入国カードの記入が必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/hongkong/index.html",
    },
  },
  {
    id: "macao",
    name: "マカオ",
    code: "MO",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "90日以内の観光、一般商務目的の滞在はビザ不要",
      "パスポートの残存有効期間が入国時3ヶ月以上必要",
      "出国用の予約済航空券が必要",
      "滞在日数に応じた滞在費用が必要",
    ],
    notes: ["90日を超える滞在には事前にビザの取得が必要", "入国カードの記入が必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/macao/index.html",
    },
  },
  {
    id: "bangladesh",
    name: "バングラデシュ",
    code: "BD",
    region: "asia",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "出国用の航空券の所持が必要",
      "滞在先のホテル予約または招へい状が必要",
    ],
    notes: [
      "東京の大使館でビザ申請が可能",
      "アライバルビザは空港で取得可能（特定の条件下で）",
      "目的に応じて複数のビザタイプがある",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/bangladesh/index.html",
    },
  },
  {
    id: "sri_lanka",
    name: "スリランカ",
    code: "LK",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "出国用の航空券の所持が必要",
      "黄熱に感染する危険のある国から来る、生後9か月以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎのため、黄熱に感染する危険のある国の空港に12時間以上滞在した渡航者も黄熱予防接種証明書が必要",
    ],
    notes: [
      "2023年10月1日より日本を含む7か国向けに無料30日ビザ免除パイロット施策が開始され、2025年4月現在も延長中。終了日は未定のため、渡航前に在東京スリランカ大使館または入国管理局サイトで要確認。",
      "観光・ビジネス目的の短期滞在にはオンラインでeTAを取得可能（現在は免除中）",
      "東京の大使館でもビザ申請可能",
      "入国時にSri Lanka Immigration Mobile App（QR）が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/srilanka/index.html",
    },
  },
  {
    id: "pakistan",
    name: "パキスタン",
    code: "PK",
    region: "asia",
    visaRequirement: {
      type: "evisa",
      duration: 90,
      evisaAvailable: true,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "出国用の航空券の所持が必要",
      "滞在に必要な資金の証明",
    ],
    notes: [
      "e-Visaの利用が可能",
      "ビザ申請は通常7営業日程度で処理される",
      "東京の大使館でもビザ申請可能",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/pakistan/index.html",
    },
  },
  {
    id: "maldives",
    name: "モルディブ",
    code: "MV",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "出国用の航空券の所持が必要",
      "滞在先（ホテルなど）の予約確認書が必要",
    ],
    notes: [
      "観光目的の場合、到着時に30日間の観光ビザが無料で発給される",
      "延長は現地の移民局で申請可能（最大90日まで）",
      "Maldives Immigration事前オンラインチェックイン（IMUGA）推奨",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/maldives/index.html",
    },
  },
  {
    id: "kazakhstan",
    name: "カザフスタン",
    code: "KZ",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポート残存有効期間が入国時3ヶ月以上必要",
      "30日以内の観光・商用目的の滞在はビザ不要",
    ],
    notes: [
      "30日を超える滞在、就労目的の場合はビザが必要",
      "商用目的の場合は滞在証明や招聘状があると良い",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/kazakhstan/index.html",
    },
  },
  {
    id: "kyrgyzstan",
    name: "キルギス",
    code: "KG",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 60,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポート残存有効期間が入国時3ヶ月以上必要",
      "60日以内の観光・商用目的の滞在はビザ不要",
    ],
    notes: ["60日を超える滞在の場合は現地で滞在登録が必要", "就労目的の場合は別途ビザ申請が必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/kyrgyz/index.html",
    },
  },
  {
    id: "tajikistan",
    name: "タジキスタン",
    code: "TJ",
    region: "asia",
    visaRequirement: {
      type: "evisa",
      duration: 60,
      evisaAvailable: true,
      purpose: ["tourism", "business"],
    },
    conditions: ["パスポート残存有効期間が入国時6ヶ月以上必要", "e-Visaの事前取得が必要"],
    notes: [
      "e-Visaはオンラインで申請可能（通常3日程度で発給）",
      "観光・商用目的のe-Visaは最大60日間の滞在が可能",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/tajikistan/index.html",
    },
  },
  {
    id: "turkmenistan",
    name: "トルクメニスタン",
    code: "TM",
    region: "asia",
    visaRequirement: {
      type: "visa_required",
      duration: 10, // 一般的な観光ビザの期間
    },
    conditions: ["パスポート残存有効期間が入国時6ヶ月以上必要", "必ず事前にビザの取得が必要"],
    notes: [
      "ビザの事前取得が必要。招聘状が必要となる場合が多い",
      "現地ツアー会社などを通じた手配が一般的",
      "ビザ申請には1週間程度かかる場合がある",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/turkmenistan/index.html",
    },
  },
  {
    id: "uzbekistan",
    name: "ウズベキスタン",
    code: "UZ",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism"],
    },
    conditions: [
      "パスポート残存有効期間が入国時3ヶ月以上必要",
      "30日以内の観光目的の滞在はビザ不要",
    ],
    notes: [
      "30日を超える滞在、観光以外の目的の場合はビザが必要",
      "入国時に出国用航空券の提示を求められる場合がある",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/uzbekistan/index.html",
    },
  },
  {
    id: "bhutan",
    name: "ブータン",
    code: "BT",
    region: "asia",
    visaRequirement: {
      type: "visa_required",
      duration: 15, // 一般的な観光ビザの期間
    },
    conditions: [
      "パスポート残存有効期間が入国時6ヶ月以上必要",
      "政府公認の旅行代理店を通じた申請が必要",
      "事前に政府認定の旅行会社によるツアー手配が必要",
    ],
    notes: [
      "ビザは認定旅行会社を通じて申請",
      "政府が定める1日あたりの最低消費額（サステナブル・デベロップメント・フィー）の支払いが必要",
      "個人での自由旅行は基本的に認められていない",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/bhutan/index.html",
    },
  },
  {
    id: "timor_leste",
    name: "東ティモール",
    code: "TL",
    region: "asia",
    visaRequirement: {
      type: "visa_required",
      duration: 30, // 到着ビザの期間
    },
    conditions: [
      "パスポート残存有効期間が入国時6ヶ月以上必要",
      "入国時に到着ビザの取得が必要（有料）",
    ],
    notes: [
      "在日大使館でビザ発給を行っていない",
      "主要な空港・港で到着ビザ（30日間）の取得が可能（US$30程度）",
      "滞在延長は現地移民局にて申請可能",
      "出国用航空券の所持が必要な場合がある",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/timor-leste/index.html",
    },
  },
  {
    id: "north_korea",
    name: "北朝鮮",
    code: "KP",
    region: "asia",
    visaRequirement: { type: "visa_required" },
    conditions: ["パスポート残存有効期間が必要"],
    notes: ["ビザが必要。日本国籍者に対する入国は現在厳しく制限されている。"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/n_korea/index.html",
    },
  },
];

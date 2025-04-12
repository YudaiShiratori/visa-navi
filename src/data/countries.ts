export interface VisaRequirement {
  type: "visa_free" | "evisa" | "visa_required";
  duration?: number; // Make duration optional
  evisaAvailable?: boolean;
  visaFreeEntry?: boolean;
  purpose?: string[];
  conditions?: string[];
  documents?: string[];
  notes?: string[];
  officialLinks?: {
    ministry?: string;
    embassy?: string;
  };
}

export interface Country {
  id: string;
  name: string;
  code?: string; // 国コード (ISO 3166-1 alpha-2) - オプショナルに変更
  region: string;
  visaRequirement: VisaRequirement;
  conditions?: string[];
  documents?: string[];
  notes?: string[];
  officialLinks?: {
    mofa: string;
    embassy?: string;
    k_eta?: string;
  };
  lastUpdated: string;
}

export const countries: Country[] = [
  {
    id: "thailand",
    name: "タイ",
    code: "TH",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      evisaAvailable: true,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "観光目的のみ30日間ビザなし入国可能",
      "ビザなし入国は180日間に2回までに制限",
    ],
    documents: [
      "有効なパスポート",
      "帰国便の予約証明",
      "滞在先の情報（ホテル予約など）",
      "十分な資金証明（現金、クレジットカードなど）",
    ],
    notes: [
      "30日を超える滞在にはビザの取得が必要",
      "e-VISAも利用可能",
      "現地での滞在延長は移民局にて手続き可能（最大30日）",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/thailand.html",
      embassy: "https://www.thaiembassy.jp/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "vietnam",
    name: "ベトナム",
    code: "VN",
    region: "asia",
    visaRequirement: {
      type: "evisa",
      duration: 30,
      evisaAvailable: true,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "e-ビザは入国予定日より少なくとも3営業日前に申請する必要あり",
    ],
    documents: [
      "有効なパスポート",
      "電子ビザの申請書",
      "証明写真（4cm×6cm）",
      "ビザ申請料金の支払い",
    ],
    notes: [
      "東京の大使館でビザ申請も可能",
      "e-ビザは単数/複数入国が選択可能（料金が異なる）",
      "15日以内の短期滞在の場合のみ入国審査時にビザ申請（アライバルビザ）も可能",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/vietnam.html",
      embassy: "https://vnembassy-jp.org/ja/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "singapore",
    name: "シンガポール",
    code: "SG",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "出国用の航空券が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明"],
    notes: [
      "東京の大使館でビザ申請も可能",
      "短期滞在（観光・商用）の場合は自動的に90日のビザなし滞在が許可される",
      "SG Arrivalカードの事前オンライン申請が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/singapore.html",
      embassy: "https://www.mfa.gov.sg/tokyo",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "malaysia",
    name: "マレーシア",
    code: "MY",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "出国用の航空券が必要",
      "滞在に必要な十分な資金証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "滞在先の情報"],
    notes: [
      "90日を超える滞在には事前にビザの取得が必要",
      "入国時にマレーシア移民局が発行する入国スタンプの期間を必ず確認すること",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/malaysia.html",
      embassy: "https://www.kln.gov.my/web/jpn_tokyo/home",
    },
    lastUpdated: "2024-05-21",
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
    ],
    notes: [
      "【K-ETA一次免除措置】2023年4月1日から2025年12月31日まで 日本を含む22か国・地域のパスポートを持つ外国人が観光・短期商用等の目的で無査証で入国する場合は、K-ETAを取得すること無く入国可能",
      "90日以内の滞在でも就業、営利活動目的（機械の据付等の技術目的等）、家族帯同等の場合はビザ取得が必要",
      "東京・横浜・名古屋・大阪・福岡の領事館でビザ申請も可能",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/korea.html",
      embassy: "https://overseas.mofa.go.kr/jp-ja/index.do",
      k_eta: "https://www.k-eta.go.kr/portal/apply/index.do",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "china",
    name: "中国",
    code: "CN",
    region: "asia",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "15日以内の滞在でも必ずビザの取得が必要",
      "入国目的に応じた適切なビザ種別の申請が必要",
    ],
    documents: [
      "有効なパスポート",
      "ビザ申請書",
      "証明写真（縦45mm×横35mm）",
      "往復航空券の予約確認書",
      "滞在先の情報（ホテル予約など）",
    ],
    notes: [
      "大使館、名古屋・大阪・福岡・新潟の領事館でビザ申請可能",
      "2023年3月15日より72時間乗継ビザ免除措置が再開",
      "団体観光査証は2023年8月10日より再開",
      "外国籍者向けビザも発行",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/china.html",
      embassy: "http://www.china-embassy.or.jp/jpn/",
    },
    lastUpdated: "2024-05-21",
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
    documents: ["有効なパスポート", "帰国便の予約証明"],
    notes: [
      "東京・横浜・大阪の窓口で停留ビザ申請も可能",
      "オンライン入境カード（入国カード）の事前申請が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/taiwan/index.html",
      embassy: "https://www.roc-taiwan.org/jp_ja/index.html",
    },
    lastUpdated: "2024-05-21",
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
      "30日を超える滞在にはビザの取得が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "滞在先情報"],
    notes: [
      "東京の大使館でビザ申請も可能",
      "到着後の滞在延長は現地の移民局で申請可能（最大36ヶ月まで可能）",
      "e-Travelカードの事前登録が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/philippines.html",
      embassy: "https://tokyo.philembassy.net/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "indonesia",
    name: "インドネシア",
    code: "ID",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "出国用の航空券の所持が必要",
      "30日を超える滞在には事前にビザの取得が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "滞在先の情報"],
    notes: [
      "ビザなし入国はジャカルタ、バリ島など主要空港および港に限定される",
      "延長申請は現地の移民局で可能（1回30日間のみ）",
      "商用目的の場合は事前にビザの取得が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/indonesia.html",
      embassy: "https://kemlu.go.id/tokyo/lc",
    },
    lastUpdated: "2024-05-21",
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
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "e-ビザは入国予定日の4日前までに申請する必要あり",
      "出国用の航空券の所持が必要",
    ],
    documents: [
      "有効なパスポート",
      "カラー証明写真（5cm×5cm、白背景）",
      "帰国便の予約証明",
      "滞在先の情報",
    ],
    notes: [
      "e-Visaの利用が可能（観光・ビジネス・医療目的）",
      "東京・大阪の窓口でビザ申請も可能",
      "e-Visaは30日間（観光）、1年間（ビジネス）など複数のタイプあり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/india.html",
      embassy: "https://www.indembassy-tokyo.gov.in/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "cambodia",
    name: "カンボジア",
    code: "KH",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      evisaAvailable: true,
      purpose: ["tourism"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "出国用の航空券の所持が必要",
      "十分な資金証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "滞在先の情報"],
    notes: [
      "e-Visaはオンラインで取得可能（US$36、最大30日間滞在可能）",
      "アライバルビザも空港で取得可能（US$30、観光目的のみ）",
      "30日を超える滞在には別途ビザの申請が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/cambodia/data.html",
      embassy: "https://www.cambodianembassy.jp/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "laos",
    name: "ラオス",
    code: "LA",
    region: "asia",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "出国用の航空券の所持が必要"],
    documents: ["有効なパスポート", "ビザ申請書", "証明写真（4cm×6cm）", "申請料金"],
    notes: [
      "ビエンチャン国際空港などでアライバルビザ取得可能（US$30-45、最大30日間）",
      "東京の大使館でも事前にビザ申請可能",
      "延長は現地の移民局で可能（追加30日間）",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/laos/data.html",
      embassy: "https://laoembassytokyo.com/",
    },
    lastUpdated: "2024-05-21",
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
    documents: [
      "有効なパスポート",
      "電子ビザ申請フォーム",
      "証明写真（デジタル）",
      "申請料金（観光US$50、ビジネスUS$70）",
    ],
    notes: [
      "e-VISAの利用が可能",
      "大使館でのビザ申請も可能",
      "e-Visaは入国予定日の3営業日前までに申請する必要あり",
      "ヤンゴン・マンダレー・ネピドー国際空港のみ入国可能",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/myanmar/data.html",
      embassy: "https://www.myanmar-embassy-tokyo.net/",
    },
    lastUpdated: "2024-05-21",
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
      "パスポートの残存有効期間が6ヶ月以上必要",
      "出国用の航空券の所持が必要",
      "滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明"],
    notes: [
      "30日を超える滞在や就労目的の場合はビザが必要",
      "外国人登録（7日以上滞在の場合）が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/mongolia/data.html",
      embassy: "http://www.tokyo.embassy.mn/",
    },
    lastUpdated: "2024-05-21",
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
    documents: [
      "有効なパスポート",
      "ビザ申請書",
      "証明写真（3.5cm×4.5cm）",
      "申請料金",
      "滞在先の情報または招へい状",
    ],
    notes: [
      "東京の大使館でビザ申請が可能",
      "アライバルビザは空港で取得可能（特定の条件下で）",
      "目的に応じて複数のビザタイプがある",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/bangladesh/data.html",
      embassy: "https://www.bdembassyjapan.org/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "sri_lanka",
    name: "スリランカ",
    code: "LK",
    region: "asia",
    visaRequirement: {
      type: "evisa",
      duration: 30,
      evisaAvailable: true,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "出国用の航空券の所持が必要",
      "滞在に必要な資金証明",
    ],
    documents: ["有効なパスポート", "ETA申請フォーム", "申請料金（観光US$35）"],
    notes: [
      "eTAの取得が可能",
      "大使館でのビザ申請も可能",
      "観光目的の場合、ETA（電子渡航認証）が必要",
      "延長は現地の移民局で可能（最大6か月まで）",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/srilanka/data.html",
      embassy: "https://www.lankandut.jp/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "hongkong",
    name: "香港",
    code: "HK",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が1ヶ月以上必要",
      "出国用の航空券の所持が必要",
      "滞在に必要な資金の証明",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明"],
    notes: [
      "90日以内の観光・商用目的の滞在はビザ不要",
      "就労目的や90日を超える滞在にはビザが必要",
      "入境カードの記入が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/hongkong/data.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "brunei",
    name: "ブルネイ",
    code: "BN",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 14,
      purpose: ["tourism"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "出国用の航空券の所持が必要",
      "滞在に必要な資金の証明",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "滞在先の情報"],
    notes: [
      "入国時に入国カードの記入が必要",
      "14日を超える滞在には事前にビザの取得が必要",
      "滞在延長は現地の移民局で申請可能",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/brunei/data.html",
      embassy: "https://www.mfa.gov.bn/Pages/Tokyo.aspx",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "nepal",
    name: "ネパール",
    code: "NP",
    region: "asia",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "出国用の航空券の所持が必要"],
    documents: [
      "有効なパスポート",
      "ビザ申請書",
      "証明写真",
      "申請料金（15/30/90日でUS$30/50/125）",
    ],
    notes: [
      "トリブバン国際空港でアライバルビザ取得可能",
      "観光ビザは15日、30日、90日の3種類",
      "東京の大使館でも事前にビザ申請可能",
      "トレッキング許可証が別途必要なエリアあり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/nepal/data.html",
      embassy: "https://jp.nepalembassy.gov.np/",
    },
    lastUpdated: "2024-05-21",
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
    documents: [
      "有効なパスポート",
      "ビザ申請書",
      "証明写真",
      "申請料金",
      "ホテル予約または招へい状",
    ],
    notes: [
      "e-Visaの利用が可能",
      "ビザ申請は通常7営業日程度で処理される",
      "東京の大使館でもビザ申請可能",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/pakistan/data.html",
      embassy: "https://mofa.gov.pk/tokyo-japan/",
    },
    lastUpdated: "2024-05-21",
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
    documents: ["有効なパスポート", "帰国便の予約証明", "ホテル予約確認書", "入国カード"],
    notes: [
      "観光目的の場合、到着時に30日間の観光ビザが無料で発給される",
      "延長は現地の移民局で申請可能（最大90日まで）",
      "Maldives Immigration事前オンラインチェックイン（IMUGA）推奨",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/maldives/data.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "france",
    name: "フランス",
    code: "FR",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
      "90日を超える滞在には長期滞在ビザ（VLS）の取得が必要",
      "学生・就労目的の場合は目的に応じたビザが必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/france.html",
      embassy: "https://jp.ambafrance.org/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "germany",
    name: "ドイツ",
    code: "DE",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
      "90日を超える滞在には滞在許可（Aufenthaltserlaubnis）が必要",
      "学生・就労目的の場合は目的に応じたビザが必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/germany.html",
      embassy: "https://japan.diplo.de/ja-ja",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "italy",
    name: "イタリア",
    code: "IT",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
      "90日を超える滞在には長期滞在ビザの取得が必要",
      "入国から8日以内に滞在許可証の申請が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/italy.html",
      embassy: "https://ambtokyo.esteri.it/ja/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "spain",
    name: "スペイン",
    code: "ES",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
      "90日を超える滞在には長期滞在ビザの取得が必要",
      "観光目的の場合、十分な経済力の証明として1日あたり約100ユーロ必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/spain.html",
      embassy: "https://www.exteriores.gob.es/Embajadas/tokio/ja/Paginas/index.aspx",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "uk",
    name: "イギリス",
    code: "GB",
    region: "europe",
    visaRequirement: {
      type: "evisa",
      duration: 180,
      evisaAvailable: true,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間＋6ヶ月以上必要",
      "ETA（電子渡航認証）の取得が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書", "ETA申請"],
    notes: [
      "2024年4月よりETA（Electronic Travel Authorization）の取得が必要",
      "ETAは£10で2年間有効",
      "1回の訪問につき最長6ヶ月滞在可能",
      "就労・留学目的の場合は別途ビザが必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/uk.html",
      embassy: "https://www.gov.uk/world/japan/news.ja",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "switzerland",
    name: "スイス",
    code: "CH",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
      "90日を超える滞在には長期滞在ビザの取得が必要",
      "EU加盟国ではないがシェンゲン協定には加盟している",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/switzerland.html",
      embassy: "https://www.eda.admin.ch/tokyo",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "netherlands",
    name: "オランダ",
    code: "NL",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
      "90日を超える滞在には長期滞在ビザ（MVV）の取得が必要",
      "ホテルやアパートでの滞在登録が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/netherlands.html",
      embassy: "https://www.netherlandsandyou.nl/your-country-and-the-netherlands/japan",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "belgium",
    name: "ベルギー",
    code: "BE",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
      "90日を超える滞在には長期滞在ビザの取得が必要",
      "8日以上滞在する場合は滞在地の市役所への登録が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/belgium.html",
      embassy: "https://japan.diplomatie.belgium.be/ja",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "austria",
    name: "オーストリア",
    code: "AT",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
      "90日を超える滞在には長期滞在ビザの取得が必要",
      "3日以上滞在する場合は滞在登録（Meldezettel）が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/austria.html",
      embassy: "https://www.bmeia.gv.at/ja/oeb-tokio/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "sweden",
    name: "スウェーデン",
    code: "SE",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
      "90日を超える滞在には長期滞在ビザの取得が必要",
      "1年以上の滞在を計画している場合はID番号の取得が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/sweden.html",
      embassy: "https://www.swedenabroad.se/ja/embassies/日本-東京/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "norway",
    name: "ノルウェー",
    code: "NO",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
      "90日を超える滞在には長期滞在ビザの取得が必要",
      "EU加盟国ではないがシェンゲン協定には加盟している",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/norway.html",
      embassy: "https://www.norway.no/ja/japan/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "denmark",
    name: "デンマーク",
    code: "DK",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
      "90日を超える滞在には長期滞在ビザの取得が必要",
      "グリーンランドとフェロー諸島はシェンゲン圏外で別途入国条件あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/denmark.html",
      embassy: "https://japan.um.dk/ja",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "finland",
    name: "フィンランド",
    code: "FI",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
      "90日を超える滞在には長期滞在ビザの取得が必要",
      "3ヶ月以上滞在する場合は住民登録が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/finland.html",
      embassy: "https://finlandabroad.fi/web/jpn/frontpage",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "poland",
    name: "ポーランド",
    code: "PL",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
      "90日を超える滞在には長期滞在ビザの取得が必要",
      "滞在先の住所は入国時に申告必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/poland.html",
      embassy: "https://www.gov.pl/web/japonia-ja",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "czech",
    name: "チェコ",
    code: "CZ",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
      "90日を超える滞在には長期滞在ビザの取得が必要",
      "入国から3営業日以内に滞在地を報告する必要がある場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/czech.html",
      embassy: "https://www.mzv.cz/tokyo/ja/index.html",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "portugal",
    name: "ポルトガル",
    code: "PT",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
      "90日を超える滞在には長期滞在ビザの取得が必要",
      "3日以上滞在する場合は入国管理局での登録が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/portugal.html",
      embassy: "https://www.tokyo.embaixadaportugal.mne.gov.pt/ja/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "ireland",
    name: "アイルランド",
    code: "IE",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "十分な滞在資金の証明が必要",
      "帰国/次の目的地への航空券が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "最長90日間滞在可能",
      "シェンゲン協定には加盟していないため、シェンゲン圏とは別に90日間の滞在が可能",
      "就労・留学目的の場合は事前にビザの取得が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/ireland.html",
      embassy: "https://www.dfa.ie/irish-embassy/japan/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "greece",
    name: "ギリシャ",
    code: "GR",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
      "90日を超える滞在には長期滞在ビザの取得が必要",
      "ギリシャ本土と島嶼部間の移動にはフェリーの予約が推奨",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/greece.html",
      embassy: "https://www.mfa.gr/japan/ja/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "hungary",
    name: "ハンガリー",
    code: "HU",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
      "90日を超える滞在には長期滞在ビザの取得が必要",
      "宿泊施設での宿泊登録が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/hungary.html",
      embassy: "https://tokio.mfa.gov.hu/jpn",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "romania",
    name: "ルーマニア",
    code: "RO",
    region: "europe",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間＋3ヶ月以上必要",
      "シェンゲン協定加盟国での滞在期間（通算90日/180日）",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "シェンゲン協定加盟国内での滞在は合計で180日間に90日まで",
      "90日を超える滞在には長期滞在ビザの取得が必要",
      "グリーンランドとフェロー諸島はシェンゲン圏外で別途入国条件あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/romania.html",
      embassy: "https://www.romaniaembassy.jp/ja/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "bulgaria",
    name: "ブルガリア",
    code: "BG",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "croatia",
    name: "クロアチア",
    code: "HR",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "slovakia",
    name: "スロバキア",
    code: "SK",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "slovenia",
    name: "スロベニア",
    code: "SI",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "estonia",
    name: "エストニア",
    code: "EE",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "latvia",
    name: "ラトビア",
    code: "LV",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "lithuania",
    name: "リトアニア",
    code: "LT",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "malta",
    name: "マルタ",
    code: "MT",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "cyprus",
    name: "キプロス",
    code: "CY",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "iceland",
    name: "アイスランド",
    code: "IS",
    region: "europe",
    visaRequirement: { type: "visa_free", duration: 90 },
    lastUpdated: "2024-03-20",
  },
  {
    id: "usa",
    name: "アメリカ合衆国",
    code: "US",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "ESTA（電子渡航認証）の取得が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "ESTA承認書"],
    notes: [
      "ESTAは2年間有効で、複数回の入国が可能",
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/usa.html",
      embassy: "https://jp.usembassy.gov/ja/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "canada",
    name: "カナダ",
    code: "CA",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 180,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "eTA（電子渡航認証）の取得が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "eTA承認書"],
    notes: [
      "eTAは5年間有効で、複数回の入国が可能",
      "180日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/canada.html",
      embassy: "https://www.canadainternational.gc.ca/japan-japon/index.aspx?lang=jpn",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "mexico",
    name: "メキシコ",
    code: "MX",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 180,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "180日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にFMM（入国カード）の記入が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/mexico.html",
      embassy: "https://embamex.sre.gob.mx/japon/index.php/ja/",
    },
    lastUpdated: "2024-05-21",
  },
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
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にCPF（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/brazil.html",
      embassy: "https://toquio.itamaraty.gov.br/ja/",
    },
    lastUpdated: "2024-05-21",
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
      "パスポートの残存有効期間が6ヶ月以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にDNI（身分証明書）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/argentina.html",
      embassy: "https://ejapo.mrecic.gov.ar/",
    },
    lastUpdated: "2024-05-21",
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
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にRUT（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/chile.html",
      embassy: "https://chile.gob.cl/japon/ja/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "peru",
    name: "ペルー",
    code: "PE",
    region: "south_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にDNI（身分証明書）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/peru.html",
      embassy: "https://www.gob.pe/embajada-japon",
    },
    lastUpdated: "2024-05-21",
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
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にRUT（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/colombia.html",
      embassy: "https://tokio.embajada.gov.co/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "venezuela",
    name: "ベネズエラ",
    code: "VE",
    region: "south_america",
    visaRequirement: {
      type: "visa_required",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: [
      "有効なパスポート",
      "ビザ申請書",
      "証明写真",
      "申請料金",
      "招へい状またはホテル予約確認書",
    ],
    notes: [
      "東京の大使館でビザ申請が可能",
      "ビザは90日間有効で、90日間の滞在が可能",
      "入国時に指紋採取が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/venezuela.html",
      embassy: "https://www.embajada-japon.gob.ve/",
    },
    lastUpdated: "2024-05-21",
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
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にRUC（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/ecuador.html",
      embassy: "https://www.embassyecuador.jp/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "bolivia",
    name: "ボリビア",
    code: "BO",
    region: "south_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にNIT（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/bolivia.html",
      embassy: "https://www.embolivia.jp/",
    },
    lastUpdated: "2024-05-21",
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
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にRUC（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/paraguay.html",
      embassy: "https://www.mre.gov.py/embajada-japon/",
    },
    lastUpdated: "2024-05-21",
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
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にRUT（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/uruguay.html",
      embassy: "https://www.gub.uy/ministerio-relaciones-exteriores/embajada-japon",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "guyana",
    name: "ガイアナ",
    code: "GY",
    region: "south_america",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: [
      "有効なパスポート",
      "ビザ申請書",
      "証明写真",
      "申請料金",
      "招へい状またはホテル予約確認書",
    ],
    notes: [
      "東京の大使館でビザ申請が可能",
      "ビザは30日間有効で、30日間の滞在が可能",
      "入国時に指紋採取が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/guyana.html",
      embassy: "https://www.guyanaembassyjapan.com/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "suriname",
    name: "スリナム",
    code: "SR",
    region: "south_america",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: [
      "有効なパスポート",
      "ビザ申請書",
      "証明写真",
      "申請料金",
      "招へい状またはホテル予約確認書",
    ],
    notes: [
      "東京の大使館でビザ申請が可能",
      "ビザは30日間有効で、30日間の滞在が可能",
      "入国時に指紋採取が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/suriname.html",
      embassy: "https://www.surinameembassy.jp/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "guatemala",
    name: "グアテマラ",
    code: "GT",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にNIT（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/guatemala.html",
      embassy: "https://www.minex.gob.gt/embajada-japon",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "honduras",
    name: "ホンジュラス",
    code: "HN",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にRTN（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/honduras.html",
      embassy: "https://www.sre.gob.hn/embajada-japon",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "elsalvador",
    name: "エルサルバドル",
    code: "SV",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にNIT（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/elsalvador.html",
      embassy: "https://www.rree.gob.sv/embajada-japon",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "nicaragua",
    name: "ニカラグア",
    code: "NI",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にRUC（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/nicaragua.html",
      embassy: "https://www.cancilleria.gob.ni/embajada-japon",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "costarica",
    name: "コスタリカ",
    code: "CR",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にDIMEX（外国人ID）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/costarica.html",
      embassy: "https://www.rree.go.cr/embajada-japon",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "panama",
    name: "パナマ",
    code: "PA",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 180,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "180日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にRUC（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/panama.html",
      embassy: "https://www.mire.gob.pa/embajada-japon",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "cuba",
    name: "キューバ",
    code: "CU",
    region: "americas",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: [
      "有効なパスポート",
      "ビザ申請書",
      "証明写真",
      "申請料金",
      "招へい状またはホテル予約確認書",
    ],
    notes: [
      "東京の大使館でビザ申請が可能",
      "ビザは30日間有効で、30日間の滞在が可能",
      "入国時に指紋採取が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/cuba.html",
      embassy: "https://www.embacuba.jp/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "jamaica",
    name: "ジャマイカ",
    code: "JM",
    region: "americas",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: [
      "有効なパスポート",
      "ビザ申請書",
      "証明写真",
      "申請料金",
      "招へい状またはホテル予約確認書",
    ],
    notes: [
      "東京の大使館でビザ申請が可能",
      "ビザは30日間有効で、30日間の滞在が可能",
      "入国時に指紋採取が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/jamaica.html",
      embassy: "https://www.jamaicaembassy.jp/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "haiti",
    name: "ハイチ",
    code: "HT",
    region: "americas",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: [
      "有効なパスポート",
      "ビザ申請書",
      "証明写真",
      "申請料金",
      "招へい状またはホテル予約確認書",
    ],
    notes: [
      "東京の大使館でビザ申請が可能",
      "ビザは30日間有効で、30日間の滞在が可能",
      "入国時に指紋採取が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/haiti.html",
      embassy: "https://www.haitiembassy.jp/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "dominicanrepublic",
    name: "ドミニカ共和国",
    code: "DO",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "30日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時にRNC（納税者登録番号）の取得が必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/dominicanrepublic.html",
      embassy: "https://www.mirex.gob.do/embajada-japon",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "bahamas",
    name: "バハマ",
    code: "BS",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時に滞在目的の説明が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/bahamas.html",
      embassy: "https://www.bahamasembassy.jp/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "barbados",
    name: "バルバドス",
    code: "BB",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時に滞在目的の説明が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/barbados.html",
      embassy: "https://www.foreign.gov.bb/embassies/japan",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "trinidadtobago",
    name: "トリニダード・トバゴ",
    code: "TT",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時に滞在目的の説明が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/trinidadtobago.html",
      embassy: "https://www.foreign.gov.tt/embassies/japan",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "saintlucia",
    name: "セントルシア",
    code: "LC",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時に滞在目的の説明が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/saintlucia.html",
      embassy: "https://www.stlucia.gov.lc/embassies/japan",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "saintvincentgrenadines",
    name: "セントビンセント・グレナディーン",
    code: "VC",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時に滞在目的の説明が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/saintvincentgrenadines.html",
      embassy: "https://www.gov.vc/embassies/japan",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "antiguabarbuda",
    name: "アンティグア・バーブーダ",
    code: "AG",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時に滞在目的の説明が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/antiguabarbuda.html",
      embassy: "https://www.antigua-barbuda.com/embassies/japan",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "grenada",
    name: "グレナダ",
    code: "GD",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時に滞在目的の説明が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/grenada.html",
      embassy: "https://www.gov.gd/embassies/japan",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "saintkittsnevis",
    name: "セントクリストファー・ネイビス",
    code: "KN",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時に滞在目的の説明が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/saintkittsnevis.html",
      embassy: "https://www.gov.kn/embassies/japan",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "dominica",
    name: "ドミニカ国",
    code: "DM",
    region: "north_america",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在予定期間以上必要",
      "出国用の航空券の所持が必要",
      "十分な滞在資金の証明が必要",
    ],
    documents: ["有効なパスポート", "帰国便の予約証明", "宿泊予約確認書"],
    notes: [
      "90日を超える滞在にはビザの取得が必要",
      "就労・留学目的の場合は別途ビザが必要",
      "入国時に滞在目的の説明が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/dominica.html",
      embassy: "https://www.dominica.gov.dm/embassies/japan",
    },
    lastUpdated: "2024-05-21",
  },
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
    documents: [
      "有効なパスポート",
      "往復航空券",
      "滞在資金証明（クレジットカードまたは現金）",
      "滞在先情報（ホテル予約確認書など）",
      "旅行保険証明書（推奨）",
      "未成年者の場合は両親の同意書",
      "運転する場合は国際運転免許証",
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
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/south_africa.html",
      embassy: "https://www.saembassy.jp/",
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
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/egypt.html" },
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
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/ke.html" },
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
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/morocco.html" },
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
    documents: ["有効なパスポート", "ビザ申請書", "証明写真", "往復航空券予約確認書", "滞在先情報"],
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
    documents: ["有効なパスポート", "ビザ申請書", "証明写真", "往復航空券予約確認書", "滞在先情報"],
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
    documents: ["有効なパスポート", "ビザ申請書", "証明写真", "往復航空券予約確認書", "滞在先情報"],
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
    documents: ["有効なパスポート", "ビザ申請書", "証明写真", "往復航空券予約確認書", "滞在先情報"],
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
    documents: ["有効なパスポート", "ビザ申請書", "証明写真", "往復航空券予約確認書", "滞在先情報"],
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
    documents: ["有効なパスポート", "ビザ申請書", "証明写真", "往復航空券予約確認書", "滞在先情報"],
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
    documents: [
      "有効なパスポート",
      "電子ビザ申請フォーム",
      "証明写真",
      "往復航空券予約確認書",
      "滞在先情報",
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
    documents: ["有効なパスポート", "ビザ申請書", "証明写真", "往復航空券予約確認書", "滞在先情報"],
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
    documents: ["有効なパスポート", "ビザ申請書", "証明写真", "往復航空券予約確認書", "滞在先情報"],
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
    documents: ["有効なパスポート", "ビザ申請書", "証明写真", "往復航空券予約確認書", "滞在先情報"],
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
    documents: ["有効なパスポート", "ビザ申請書", "証明写真", "往復航空券予約確認書", "滞在先情報"],
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
    documents: ["有効なパスポート", "ビザ申請書", "証明写真", "往復航空券予約確認書", "滞在先情報"],
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
    documents: ["有効なパスポート", "ビザ申請書", "証明写真", "往復航空券予約確認書", "滞在先情報"],
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
    documents: ["有効なパスポート", "ビザ申請書", "証明写真", "往復航空券予約確認書", "滞在先情報"],
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
    documents: [
      "有効なパスポート",
      "電子ビザ申請フォーム",
      "証明写真",
      "往復航空券予約確認書",
      "滞在先情報",
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
    documents: [
      "有効なパスポート",
      "ビザ申請書",
      "証明写真",
      "往復航空券予約確認書",
      "滞在先情報",
      "招待状（ビジネス目的の場合）",
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
    documents: ["有効なパスポート", "往復航空券予約確認書", "滞在先情報"],
    notes: ["30日間のビザなし滞在が可能", "現地での滞在延長も可能"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/eswatini/index.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "uae",
    name: "アラブ首長国連邦",
    code: "AE",
    region: "middle_east",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要"],
    notes: ["30日を超える滞在にはビザが必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/uae.html",
      embassy: "https://www.uaeembassy.jp/",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "yemen",
    name: "イエメン",
    code: "YE",
    region: "middle_east",
    visaRequirement: { type: "visa_required", duration: 0 },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要"],
    notes: ["入国にはビザが必要", "現在、外務省より退避勧告（危険レベル4）が発令中"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/yemen/index.html",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "israel",
    name: "イスラエル",
    code: "IL",
    region: "middle_east",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要"],
    notes: ["90日を超える滞在にはビザが必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/israel.html",
      embassy: "https://embassies.gov.il/tokyo/Pages/default.aspx",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "iraq",
    name: "イラク",
    code: "IQ",
    region: "middle_east",
    visaRequirement: { type: "visa_required", duration: 0 },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要"],
    notes: ["入国にはビザが必要", "現在、外務省より退避勧告（危険レベル4）が発令中"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/iraq/index.html",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "iran",
    name: "イラン",
    code: "IR",
    region: "middle_east",
    visaRequirement: { type: "visa_required", duration: 0 },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要"],
    notes: ["入国にはビザが必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/iran.html",
      embassy: "https://japan.mfa.gov.ir/ja",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "oman",
    name: "オマーン",
    code: "OM",
    region: "middle_east",
    visaRequirement: {
      type: "evisa", // 14日以内ビザ不要だが、条件付きなのでe-Visa必須とする
      duration: 14, // ビザ不要の期間
      evisaAvailable: true,
      purpose: ["tourism"],
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "e-Visa取得"],
    notes: [
      "観光目的で14日以内の滞在の場合、一定の条件を満たせばビザ不要。それ以外はe-Visaの取得が必要。",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/oman.html",
      embassy: "https://www.omanembassy.jp/",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "qatar",
    name: "カタール",
    code: "QA",
    region: "middle_east",
    visaRequirement: {
      type: "visa_free", // 到着時無料ビザなので実質ビザ不要
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "出国用航空券"],
    notes: ["到着時に空港で無料のビザが発行される"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/qatar.html",
      embassy: "https://tokyo.embassy.qa/en",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "kuwait",
    name: "クウェート",
    code: "KW",
    region: "middle_east",
    visaRequirement: {
      type: "evisa", // 到着時ビザまたはe-Visa
      duration: 90,
      evisaAvailable: true,
      purpose: ["tourism", "business"],
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "出国用航空券"],
    notes: ["到着時に空港でビザを取得可能（有料）。事前にe-Visaの取得も可能。"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/kuwait.html",
      embassy: "http://kuwait-embassy.or.jp/",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "saudi_arabia",
    name: "サウジアラビア",
    code: "SA",
    region: "middle_east",
    visaRequirement: {
      type: "evisa",
      duration: 90, // 観光e-Visaの場合
      evisaAvailable: true,
      purpose: ["tourism"],
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要"],
    notes: ["観光目的の場合はe-Visa、商用目的の場合は別途ビザの取得が必要。"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/saudiarabia.html",
      embassy: "https://embassies.mofa.gov.sa/sites/japan/EN/Pages/default.aspx",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "turkey",
    name: "トルコ",
    code: "TR",
    region: "middle_east", // または Europe に分類されることもある
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要"],
    notes: ["90日を超える滞在にはビザが必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/turkey.html",
      embassy: "http://tokyo.be.mfa.gov.tr/Mission",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "bahrain",
    name: "バーレーン",
    code: "BH",
    region: "middle_east",
    visaRequirement: {
      type: "evisa", // e-Visaまたは到着時ビザ
      duration: 14, // e-Visaの一般的な期間
      evisaAvailable: true,
      purpose: ["tourism", "business"],
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要"],
    notes: ["e-Visaまたは到着時に空港でビザを取得可能（有料）。滞在期間はビザ種別による。"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/bahrain.html",
      embassy: "https://www.mofa.gov.bh/tokyo/Home.aspx",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "jordan",
    name: "ヨルダン",
    code: "JO",
    region: "middle_east",
    visaRequirement: {
      type: "visa_required", // 到着時ビザ取得可能だが、分類上は required
      duration: 30, // 到着時ビザの場合
      purpose: ["tourism", "business"],
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要"],
    notes: ["到着時に空港でビザを取得可能（有料）。ヨルダンパスなどの利用も検討。"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/jordan.html",
      embassy: "http://www.jordanembassy.jp/",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "lebanon",
    name: "レバノン",
    code: "LB",
    region: "middle_east",
    visaRequirement: {
      type: "visa_free", // 到着時無料ビザなので実質ビザ不要
      duration: 30,
      purpose: ["tourism"],
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "出国用航空券"],
    notes: ["観光目的の場合、到着時に空港で無料のビザが発行される。商用は事前取得推奨。"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/lebanon.html",
      embassy: "http://www.lebanonembassy.jp/",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "australia",
    name: "オーストラリア",
    code: "AU",
    region: "oceania",
    visaRequirement: {
      type: "evisa", // ETAS は電子ビザの一種と分類
      duration: 90,
      evisaAvailable: true,
      purpose: ["tourism", "business"],
    },
    conditions: ["パスポートの残存有効期間が滞在期間中有効であること", "ETAS取得"],
    notes: ["電子渡航認証システム（ETAS）の事前登録が必要。", "ワーキングホリデーなど別途ビザあり"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/australia.html",
      embassy: "https://japan.embassy.gov.au/tkyojapanese/home.html",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "papua_new_guinea",
    name: "パプアニューギニア",
    code: "PG",
    region: "oceania",
    visaRequirement: {
      type: "evisa", // e-Visaまたは到着ビザ
      duration: 60, // 観光e-Visaの場合
      evisaAvailable: true,
      purpose: ["tourism", "business"],
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要"],
    notes: ["観光・商用目的の場合、事前にe-Visaまたは到着時にビザ（一部空港）を取得可能。"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/png/index.html",
      embassy: "http://www.png.or.jp/",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "fiji",
    name: "フィジー",
    code: "FJ",
    region: "oceania",
    visaRequirement: {
      type: "visa_free",
      duration: 120, // 4ヶ月
      purpose: ["tourism", "business"],
    },
    conditions: ["パスポートの残存有効期間が6ヶ月以上必要", "出国用航空券"],
    notes: ["観光・商用目的の場合、4ヶ月以内の滞在はビザ不要。"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/fiji/index.html",
      embassy: "http://www.fijiembassy.jp/",
    },
    lastUpdated: "2024-07-26",
  },
  {
    id: "new_zealand",
    name: "ニュージーランド",
    code: "NZ",
    region: "oceania",
    visaRequirement: {
      type: "evisa", // NZeTA は電子ビザの一種と分類
      duration: 90,
      evisaAvailable: true,
      purpose: ["tourism", "business", "transit"],
    },
    conditions: ["パスポートの残存有効期間が滞在期間＋3ヶ月以上必要", "NZeTA取得"],
    notes: ["電子渡航認証（NZeTA）の事前登録が必要。", "ワーキングホリデーなど別途ビザあり"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/newzealand.html",
      embassy:
        "https://www.mfat.govt.nz/ja/countries-and-regions/north-asia/japan/new-zealand-embassy/",
    },
    lastUpdated: "2024-07-26",
  },
  // Oceania Countries Start (Based on user provided list)
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
    documents: ["ETA（電子渡航認証）の事前取得が必要"],
    notes: [
      "黄熱に感染する危険のある国から来る1歳以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎで黄熱危険国の空港に12時間以上滞在した場合も証明書が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/australia.html", // Existing link, might need update
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
    documents: ["出国用航空券", "十分な滞在費用"],
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
    documents: ["出国用航空券", "ホテル予約確認"],
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
    documents: ["出国用航空券", "滞在資金", "滞在先の住所・連絡先"],
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
    documents: ["出国用航空券", "十分な滞在費用"],
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
    documents: ["出国用航空券", "十分な滞在費用"],
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
    documents: ["出国用航空券"],
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
      embassy: "https://www.naurugov.nr/about-nauru/visiting-nauru/visa-requirements.aspx", // From user text
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
    documents: ["出国用航空券", "滞在費用証明"],
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
    documents: ["出国用航空券"],
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
    documents: [
      "NZeTA(電子渡航認証)の事前取得が必要",
      "出国用航空券",
      "滞在資金（1ヵ月あたりNZD400、宿泊費未払の場合はNZD1,000相当）",
      "第三国へのビザ（必要な場合）",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/newzealand.html", // Existing link
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
    documents: ["出国用航空券"],
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
      mofa: "https://www.mofa.go.jp/mofaj/area/png/index.html", // Existing link
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
    documents: ["出国用航空券", "滞在費用証明"],
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
    documents: ["出国用航空券"],
    notes: [
      "4ヶ月以内の観光、2週間以内の業務目的（業務打合せ）はビザ不要",
      "滞在費用証明の持参が望ましい",
      "黄熱に感染する危険のある国から来る1歳以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎで黄熱危険国の空港に12時間以上滞在した場合も証明書が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/fiji/index.html", // Existing link
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
    documents: ["出国用航空券"],
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
    documents: ["出国用航空券", "滞在費用"],
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
    documents: ["出国用航空券", "次の訪問国のビザ（必要な場合）"],
    notes: [
      "海外旅行保険の加入が望ましい",
      "取引先会社決定のための業務目的はビザ不要",
      "取引先会社が決定していて具体的な業務や金銭の動きがある場合は、ビジネスパーミットの取得が必要",
    ],
    officialLinks: { mofa: "" }, // Needs official link
    lastUpdated: "2024-07-27",
  },
  // Oceania Countries End
  // Central Asia Start
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
    conditions: ["パスポート残存有効期間が入国時3ヶ月以上必要"],
    notes: ["30日を超える滞在、就労目的の場合はビザが必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/kazakhstan/index.html",
      embassy: "https://www.gov.kz/memleket/entities/mfa-tokyo?lang=ja",
    },
    lastUpdated: "2024-07-27",
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
    conditions: ["パスポート残存有効期間が入国時3ヶ月以上必要"],
    notes: ["60日を超える滞在の場合は現地で滞在登録が必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/kyrgyz/index.html",
      embassy: "http://kgembassy.jp/",
    },
    lastUpdated: "2024-07-27",
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
    conditions: ["パスポート残存有効期間が入国時6ヶ月以上必要", "e-Visaの事前取得"],
    notes: ["e-Visaはオンラインで申請可能"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/tajikistan/index.html",
      embassy: "https://mfa.tj/ja/tokyo",
    },
    lastUpdated: "2024-07-27",
  },
  {
    id: "turkmenistan",
    name: "トルクメニスタン",
    code: "TM",
    region: "asia",
    visaRequirement: { type: "visa_required" },
    conditions: ["パスポート残存有効期間が入国時6ヶ月以上必要"],
    notes: ["ビザの事前取得が必要。招聘状が必要となる場合が多い。"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/turkmenistan/index.html",
      embassy: "https://japan.tmembassy.gov.tm/ja",
    },
    lastUpdated: "2024-07-27",
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
    conditions: ["パスポート残存有効期間が入国時3ヶ月以上必要"],
    notes: ["30日を超える滞在、観光以外の目的の場合はビザが必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/uzbekistan/index.html",
      embassy: "http://www.uzbekistan.jp/",
    },
    lastUpdated: "2024-07-27",
  },
  // Central Asia End
];

export const getCountriesByRegion = (region: string) => {
  return countries.filter((country) => country.region === region);
};

export const getCountryById = (id: string) => {
  // IDを小文字に変換して検索
  const lowerId = id.toLowerCase();
  return countries.find((country) => country.id.toLowerCase() === lowerId);
};

export const visaTypeDescriptions = {
  visa_free: "ビザ不要（入国時にパスポートのみで入国可能）",
  evisa: "電子ビザ必要（事前にオンラインでビザ申請が必要）",
  visa_required: "ビザ必要（大使館での申請が必要）",
};

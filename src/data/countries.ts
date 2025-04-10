export interface VisaRequirement {
  type: "visa_free" | "evisa" | "visa_required";
  duration: number;
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
    id: "srilanka",
    name: "スリランカ",
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
      mofa: "https://www.mofa.go.jp/mofaj/toko/visa/tanki/argentina.html",
      embassy: "https://ejapo.mrecic.gov.ar/",
    },
    lastUpdated: "2024-05-21",
  },
  {
    id: "chile",
    name: "チリ",
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
    id: "gambia",
    name: "ガンビア",
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
    id: "guinea_equatorial",
    name: "赤道ギニア",
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
    notes: ["近隣国の大使館でビザ申請が必要", "黄熱病の予防接種証明が必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/equatorial_guinea/index.html",
    },
    lastUpdated: "2024-03-20",
  },
  {
    id: "swaziland",
    name: "エスワティニ",
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
    id: "burkinafaso",
    name: "ブルキナファソ",
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
      mofa: "https://www.mofa.go.jp/mofaj/area/burkinafaso/index.html",
    },
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

export const visaTypeDescriptions = {
  visa_free: "ビザ不要（入国時にパスポートのみで入国可能）",
  evisa: "電子ビザ必要（事前にオンラインでビザ申請が必要）",
  visa_required: "ビザ必要（大使館での申請が必要）",
};

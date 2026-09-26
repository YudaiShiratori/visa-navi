import type { Country } from "../types";

export const asiaCountries: Country[] = [
  {
    id: "thailand",
    name: "タイ",
    code: "TH",
    region: "asia",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      evisaAvailable: true,
      purpose: ["tourism"],
    },
    conditions: [
      "観光目的での30日間ビザなし入国が可能",
      "従来の60日免除措置は2026年9月15日で終了（同日より前に入国済みの者は付与された期間まで滞在可能）",
      "30日の滞在後は1回に限り最大30日の延長が可能（タイ入国管理局の承認が必要）",
      "2024年1月1日～2026年12月31日の期間のみ、30日以内の商用目的滞在はビザ免除（2026年9月15日発効の新観光免除措置とは別枠の時限措置）",
      "商用ビザ免除措置の適用には、入国時にタイ側企業からの招待状や商用目的を証明する書類の提示が必要",
      "入国者に資金証明（20,000バーツ以上）の提示義務あり（観光ビザ・ビザ免除とも対象）",
      "デジタル入国カード（TDAC）登録が必須（72時間前までにオンライン入力）",
      "日本国籍は査証免除の対象のためVisa on Arrivalの対象外",
      "査証が必要な場合はタイ外務省のe-Visa公式サイト（thaievisa.go.th）から申請可能",
      "陸路国境からの入国は年間2回までに制限（2026年9月15日発効の新観光免除措置による）",
      "黄熱に感染する危険のある国からの渡航者、または該当国の空港に12時間以上滞在した渡航者は予防接種証明書が必要",
    ],
    notes: [
      "30日を超える滞在にはビザの取得が必要",
      "観光目的以外の入国には原則としてビザが必要（商用目的は特定期間のみ免除）",
      "生後9か月以上で黄熱に感染する危険のある国から来る渡航者は黄熱予防接種証明書が必要",
      "資金証明とTDAC登録は観光目的の渡航者全員（日本人含む）が対象",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/thai/index.html",
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
      "到着前情報申告（PAI）が試験運用中（2026年4月15日タンソンニャット空港で開始、6月にフーコック・ノイバイ・ダナン・カムランの各空港へ拡大）",
    ],
    notes: [
      "「前回のベトナム出国時から30日以上経過していること」の条件は廃止",
      "45日を超える滞在にはビザの取得が必要",
      "東京の大使館でビザ申請も可能",
      "e-ビザは単数/複数入国が選択可能（料金が異なる）",
      "PAIの登録は任意だが、当局は登録を強く推奨（入国3日前から登録可能、無料、公式サイトは prearrival.immigration.gov.vn のみ）",
      "空港によっては提出を求められる場合がある（フーコック空港は2026年6月1日から必須と報じられている）",
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
      "2023年12月1日より、マレーシア・デジタル入国カード（MDAC）の事前オンライン登録が必須（渡航3日前までに無料で申請）",
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
      "商用または観光目的で90日以内の滞在はビザ免除だが、通常はK-ETA（韓国電子旅行許可）の取得が必要",
      "トランジットエリアを出ない乗り継ぎは、ビザ免除でK-ETA取得不要",
      "【K-ETA一時免除措置】2026年12月31日まで日本を含む22か国・地域のパスポートを持つ外国人が観光・短期商用等の目的で無査証で入国する場合は、K-ETAを取得すること無く入国可能",
      "90日以内の滞在でも就業、営利活動目的（機械の据付等の技術目的等）、家族帯同等の場合はビザ取得が必要",
    ],
    notes: [
      "K-ETA一時免除期間中でも任意でK-ETA申請は可能。既に取得済みのK-ETAは有効期限まで利用可能",
      "東京・横浜・名古屋・大阪・福岡の領事館でビザ申請も可能",
      "技術者、就労目的、家族帯同等の特定目的の場合は滞在日数に関わらずビザが必要",
      "K-ETAは申請時に10,000ウォンが必要（免除期間中は不要）",
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
      "日本国籍の一般旅券所持者向けのビザ免除措置（2024年11月30日～2026年12月31日）",
      "30日以内の商業・貿易活動、観光・親族訪問、交流訪問及び30日以内のトランジット目的の滞在はビザ不要",
      "パスポートの残存有効期間は6ヶ月以上が望ましい",
      "黄熱に感染する危険のある国から来る、生後9か月以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎのため、黄熱に感染する危険のある国の空港に12時間以上滞在した渡航者も黄熱予防接種証明書が必要",
    ],
    notes: [
      "ビザ免除措置は2026年12月31日まで有効",
      "留学・就労目的の場合は滞在期間に関わらずビザが必要",
      "大使館、名古屋・大阪・福岡・新潟の領事館でビザ申請も可能",
      "72時間乗継ビザ免除措置も利用可能",
      "30日を超える滞在には引き続きビザが必要",
      "情勢により入国審査が厳格化する可能性あり",
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
      "2025年10月1日より、オンライン入国カード（Taiwan Arrival Card、TWAC）の提出が必須化され、紙の入国カードは廃止（入国当日を含め7日前から登録可能）",
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
      purpose: ["tourism", "business"],
    },
    conditions: [
      "日本国籍は観光・商用目的で30日まで査証免除（EO 408 対象）",
      "復路/第三国行き航空券が必要",
    ],
    notes: [
      "30日を超える滞在にはビザの申請が必要",
      "14日以内の短期商用目的の場合はビザなし入国可能",
      "入国時に電子到着カード（eTravel）のオンライン事前登録が必要",
      "在外フィリピン大使館/領事館に事前に到着の通知を行うことが推奨される",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/philippines/index.html",
    },
  }, // sources: https://tokyo.philembassy.net/ja/consular-section/services-for-foreign-nationals/visa/ （EO408案内）, https://londonpe.dfa.gov.ph/images/consular/visa/2023/VISA_FREE_UNDER_EO_408.pdf
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
      "2025年9月1日から、スカルノ＝ハッタ（ジャカルタ）、ジュアンダ（スラバヤ）、ングラライ（バリ）各空港とバタム港で到着デジタル申告（All Indonesiaアプリ／Web）の提出が必須。出発前にオンライン提出して入国時に提示が必要。",
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
      "デリー国際空港では2026年4月1日より紙の到着カード廃止、e-Arrival Card（電子到着カード）の事前オンライン提出が必須",
    ],
    notes: [
      "ジャンム・カシミール準州及びラダック連邦直轄領・管理ライン付近は外務省から退避勧告または渡航中止勧告が出ている地域あり",
      "観光、商用・会議・治療目的での短期滞在者は、Visa on Arrival(VOA)も利用可能",
      "e-Visaは30日間（観光）、1年間（ビジネス）など複数のタイプあり",
      "東京・大阪の窓口でビザ申請も可能",
      "2026年3〜4月にe-Visa利用可能な入国地点が拡大（空港33・港湾33・陸路4の計70地点）",
      "30日観光e-Visa料金は2026年4月1日〜6月30日申請分に限り10米ドルへ引き下げられたが、7月1日以降は通常料金の25米ドルに戻っている。120日先までの渡航日選択が可能",
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
      "空路入国者は到着7日前から電子入国カード「Cambodia e-Arrival」（arrival.gov.kh、無料）の提出が必要",
    ],
    notes: [
      "e-Visaはオンラインで取得可能（観光US$30・商用US$35、最大30日間滞在可能）",
      "アライバルビザも空港で取得可能（観光US$30・商用US$35）",
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
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "30日以内の観光、業務目的の滞在はビザ不要",
      "パスポートの残存有効期間が6ヶ月以上必要",
      "未使用査証欄見開2頁以上必要",
    ],
    notes: [
      "2025年6月1日より、日本人観光客に対するビザ免除滞在可能期間が15日から30日に延長",
      "30日を超える滞在には事前にビザの取得が必要",
      "ビザなし入国は国際空港および主要な陸路国境ゲートに限定",
      "2025年9月1日から、LDIF（Lao Digital Immigration Form）の試行導入開始。ワッタイ／ルアンパバーン／パクセ各空港＋第1ラオス・タイ友好橋で、出入国予定の3日前以降に事前登録必須。当面は紙カード併用可。",
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
      "2024年10月21日より1年間の試行として導入されたTourist Visa on Arrival（到着時観光ビザ、30日間・50米ドル）は、ミャンマー外務省が2025年10月28日に1年間の延長を発表し継続中（ヤンゴン・マンダレー・ネピドー国際空港到着時に申請、延長不可）",
    ],
    notes: [
      "e-VISAの利用が可能",
      "大使館でのビザ申請も可能",
      "e-Visaは入国予定日の3営業日前までに申請する必要あり",
      "ヤンゴン・マンダレー・ネピドー国際空港のみ入国可能",
      "Tourist Visa on Arrivalはe-Visaに代わる選択肢として運用中（観光目的のみ、要件は事前のe-Visaと同様）",
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
    notes: [
      "30日を超える滞在には事前にビザの取得が必要",
      "東京・大阪の大使館でビザ申請可能",
    ],
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
    notes: [
      "90日を超える滞在には事前にビザの取得が必要",
      "2024年10月16日より出入国カードの提出は不要となり、パスポート提示のみで入国審査を通過できる",
    ],
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
    notes: [
      "90日を超える滞在には事前にビザの取得が必要",
      "入境カード（EDカード）の記入・パスポートへの入境スタンプは廃止済みで、入国時に滞在期限を記載した控えが渡される",
    ],
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
      evisaAvailable: true,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポートの残存有効期間が6ヶ月以上必要",
      "出国用の航空券の所持が必要",
      "黄熱に感染する危険のある国から来る、生後9か月以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎのため、黄熱に感染する危険のある国の空港に12時間以上滞在した渡航者も黄熱予防接種証明書が必要",
    ],
    notes: [
      "2026年5月25日より対象国が40か国に拡大され、日本を含む対象国は観光ETA登録手数料が無料。初回入国日から30日間有効で2回まで入国可能（終了日は未定のため渡航前に在東京スリランカ大使館または入国管理局サイトで要確認）",
      "入国管理局は到着前のETA取得を必須と告知（2025年10月）しているが、外務省は空港での到着時取得も可能としており運用が流動的なため、事前取得を推奨",
      "30日を超える滞在を希望する場合はコロンボの移民局で延長手続きが必要",
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
      "東京の大使館でもビザ申請可能",
      "e-Visaは Pakistan Online Visa System（visa.nadra.gov.pk）で申請し、標準処理期間は7〜10営業日",
      "2026年2月25日より、ビザ取得後に Pak ID アプリ経由で Digital Disembarkation Card（電子降機カード）を提出",
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
      "入国前96時間以内にIMUGA（Traveller Declaration）のオンライン申請が全渡航者に必須。無料。出国時の同様の申告は2024年8月に廃止済み",
      "2024年12月以降、出国税・空港開発税が引き上げられており（エコノミー客はそれぞれUS$30→US$50等）、2025年1月には宿泊税（グリーンタックス）も1泊1名USD6→USD12に改定",
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
      "30日以内の観光・商用目的の滞在はビザ不要（1回あたり30日まで、最初の入国日から180日間に合計90日まで）",
    ],
    notes: [
      "30日を超える滞在、就労目的の場合はビザが必要",
      "商用目的の場合は滞在証明や招聘状があると良い",
      "電子渡航認証（QazETA）が試験運用中（2026年2月時点）。試験運用期間中は取得が推奨であり必須ではない。取得済みの場合の有効期間は180日間",
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
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポート残存有効期間が入国時3ヶ月以上必要",
      "30日以内の観光・商用目的の滞在はビザ不要",
    ],
    notes: [
      "2026年1月1日より無査証滞在制度が変更され、従来の「120日間で合計60日まで」から「60日間で合計30日まで」に短縮",
      "30日を超える滞在の場合は現地で滞在登録が必要",
      "就労目的の場合は別途ビザ申請が必要",
    ],
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
      type: "visa_free",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポート残存有効期間が入国時6ヶ月以上必要",
      "2022年1月より30日以内の短期滞在はビザ不要",
    ],
    notes: [
      "30日を超えて滞在する場合は査証（通常査証・アライバルビザ）またはe-Visaの事前取得が必要",
      "査証なしで入国後、滞在期間の延長やタジキスタン国内での査証取得はできない",
      "ドゥシャンベ空港到着時の査証取得（事前手続なし）は不可",
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
    conditions: [
      "パスポート残存有効期間が入国時6ヶ月以上必要",
      "必ず事前にビザの取得が必要",
    ],
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

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
    },
    conditions: [
      "パスポートの残存有効期間が入国時30日以上必要",
      "未使用の査証欄が見開き2ページ以上必要",
      "往復航空券の所持が必要",
      "黄熱病流行国からの入国者は予防接種証明が必要",
      "未成年者の入国には両親の同意書が必要",
    ],
    notes: ["就労目的は就労ビザの取得が必要"],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_122.html",
    },
  },
  {
    id: "algeria",
    name: "アルジェリア",
    code: "DZ",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 90,
      evisaAvailable: false,
    },
    conditions: [
      "事前に駐日アルジェリア大使館でビザ取得が必要",
      "パスポート残存有効期間6ヶ月以上必要",
      "英文または仏文の招聘状が必要",
      "往復航空券が必要",
      "黄熱病流行国からの渡航者は予防接種証明書が必要",
    ],
    notes: ["南部24県への観光目的に限りアライバルビザが取得可能"],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_091.html",
    },
  },
  {
    id: "angola",
    name: "アンゴラ",
    code: "AO",
    region: "africa",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism"],
    },
    conditions: [
      "1回の入国で30日以内・年間合計90日以内の観光目的はビザ不要",
      "パスポート残存有効期間6ヶ月以上必要",
      "復路航空券の所持が必要",
      "黄熱病予防接種証明書の提示義務は2023年10月より免除（接種推奨）",
    ],
    notes: ["観光目的以外は事前にビザ取得が必要"],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_092.html",
    },
  },
  {
    id: "botswana",
    name: "ボツワナ",
    code: "BW",
    region: "africa",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism"],
    },
    conditions: [
      "パスポートの残存有効期間が滞在期間＋6ヶ月以上必要",
      "出国用航空券の提示が求められる場合あり",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_296.html",
    },
  },
  {
    id: "burundi",
    name: "ブルンジ",
    code: "BI",
    region: "africa",
    visaRequirement: {
      type: "evisa",
      evisaAvailable: true,
    },
    conditions: [
      "オンラインでのビザ申請と出入国登録が必須（https://migration.gov.bi/）",
      "パスポート残存有効期間6ヶ月以上必要",
      "黄熱病予防接種証明書（イエローカード）が必須",
    ],
    notes: [
      "2023年7月より電子ビザ・出入国登録のオンライン化が実施",
      "空港でのアライバルビザは廃止",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_127.html",
    },
  },
  {
    id: "cameroon",
    name: "カメルーン",
    code: "CM",
    region: "africa",
    visaRequirement: {
      type: "evisa",
      evisaAvailable: true,
    },
    conditions: [
      "オンライン電子ビザ申請が必須（https://www.evisacam.cm）",
      "パスポート残存有効期間6ヶ月以上必要",
      "黄熱病予防接種証明書（イエローカード）が必須",
      "申請後QRコードを取得し空港で提示",
    ],
    notes: ["2023年4月よりeVisaシステムに統一"],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_098.html",
    },
  },
  {
    id: "chad",
    name: "チャド",
    code: "TD",
    region: "africa",
    visaRequirement: { type: "visa_required" },
    conditions: [
      "事前にビザ取得が必要（日本にチャド大使館なし、北京等で申請）",
      "パスポート残存有効期間6ヶ月以上必要",
      "出国用航空券が必要",
      "黄熱病予防接種証明書が必須",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_137.html",
    },
  },
  {
    id: "comoros",
    name: "コモロ",
    code: "KM",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
    },
    conditions: [
      "空港到着時にアライバルビザを取得可能（ユーロ現金で支払い）",
      "パスポート残存有効期間6ヶ月以上必要",
      "黄熱病感染リスク地域からの渡航者は予防接種証明書が必要",
    ],
    notes: [
      "日本にコモロの在外公館がないためセネガル大使館が代行",
      "ビザ代金はユーロ現金のみ（米ドル不可）",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_139.html",
    },
  },
  {
    id: "cote_d_ivoire",
    name: "コートジボワール",
    code: "CI",
    region: "africa",
    visaRequirement: {
      type: "evisa",
      evisaAvailable: true,
    },
    conditions: [
      "オンラインeVISA申請が必須（https://snedai.com/e-visa/）",
      "申請から承認まで48時間（土日祝除く）",
      "パスポート残存有効期間6ヶ月以上必要",
      "アビジャン空港内のビザコーナーで査証受取",
      "黄熱病予防接種証明書が必須（生後9ヶ月以上）",
    ],
    notes: ["長期滞在でも初回は短期ビザ（3ヶ月以内）で入国し現地で延長が必要"],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_101.html",
    },
  },
  {
    id: "djibouti",
    name: "ジブチ",
    code: "DJ",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      evisaAvailable: true,
    },
    conditions: [
      "空港到着時にアライバルビザを取得可能（パスポートのみで取得可、約90米ドル）",
      "パスポート残存有効期間6ヶ月以上必要",
      "3日間トランジットビザは40米ドル",
      "e-Visaでの事前申請も可能",
    ],
    notes: [
      "入国後の延長が可能（1ヶ月90USD、3ヶ月270USD）",
      "黄熱病予防接種証明書は不要",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_141.html",
    },
  },
  {
    id: "egypt",
    name: "エジプト",
    code: "EG",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      evisaAvailable: true,
    },
    conditions: [
      "空港到着時にアライバルビザを取得可能（25米ドル現金）",
      "e-Visaでの事前申請も可能",
      "パスポート残存有効期間6ヶ月以上・空白ページ見開き2ページ以上必要",
      "黄熱病流行国からの渡航者は予防接種証明書が必要",
    ],
    notes: ["アライバルビザはシール式で自分でパスポートに貼付"],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_094.html",
    },
  },
  {
    id: "eritrea",
    name: "エリトリア",
    code: "ER",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
    },
    conditions: [
      "駐日エリトリア大使館での事前申請が必須（予約制）",
      "パスポート残存有効期間6ヶ月以上・空白ページ見開き2ページ以上必要",
      "処理期間は申請から約7日",
      "黄熱病流行国からの渡航者は予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_097.html",
    },
  },
  {
    id: "ethiopia",
    name: "エチオピア",
    code: "ET",
    region: "africa",
    visaRequirement: {
      type: "evisa",
      duration: 30,
      evisaAvailable: true,
    },
    conditions: [
      "e-Visa事前申請が必須（https://www.evisa.gov.et/）",
      "費用約122米ドル",
      "パスポート残存有効期間6ヶ月以上・空白ページ1ページ以上必要",
      "黄熱病感染リスク地域からの渡航者は予防接種証明書が必要",
    ],
    notes: [
      "アライバルビザは廃止済み、e-Visa公式サイト（.gov.et）のみ利用のこと（偽サイト多数注意）",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_095.html",
    },
  },
  {
    id: "ghana",
    name: "ガーナ",
    code: "GH",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 60,
      evisaAvailable: false,
    },
    conditions: [
      "駐日ガーナ大使館での事前申請が必須（直接申請のみ、e-Visaなし）",
      "黄熱病予防接種証明書（イエローカード）が必須（全渡航者）",
      "パスポート残存有効期間が十分必要",
    ],
    notes: ["オンライン申請（e-Visa）は未導入"],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_096.html",
    },
  },
  {
    id: "kenya",
    name: "ケニア",
    code: "KE",
    region: "africa",
    visaRequirement: {
      type: "evisa",
      duration: 90,
      evisaAvailable: true,
    },
    conditions: [
      "渡航前にeTA（Electronic Travel Authorization）のオンライン申請が必須（https://etakenya.go.ke/）",
      "費用30米ドル",
      "パスポート残存有効期間6ヶ月以上・未使用ページ1ページ以上必要",
      "出発3日前までの申請を推奨",
      "黄熱病流行国からの経由入国時はイエローカード提示を求められる場合あり",
    ],
    notes: [
      "eTA未取得の場合は航空会社が搭乗拒否する場合あり",
      "ケニアはWHO黄熱汚染国に指定されている",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_100.html",
    },
  },
  {
    id: "lesotho",
    name: "レソト",
    code: "LS",
    region: "africa",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism"],
    },
    conditions: [
      "機械読取式旅券（MRP）の所持が必須",
      "パスポート残存有効期間6ヶ月以上・空白ページ見開き2ページ以上必要",
    ],
    notes: [
      "機械読取式旅券を所持していない場合は事前にビザ取得が必要",
      "3ヶ月超の滞在や就労目的は事前にビザ取得必要",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_130.html",
    },
  },
  {
    id: "madagascar",
    name: "マダガスカル",
    code: "MG",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 90,
      evisaAvailable: false,
    },
    conditions: [
      "アライバルビザ（到着ビザ）を空港で取得可能",
      "滞在期間に応じた費用：30日以内€35、60日以内€40、90日以内€50",
      "パスポートの残存有効期間が6ヶ月以上必要",
      "パスポートに未使用の査証欄が見開き2ページ以上必要",
      "復路航空券（帰国便）の提示が必要",
      "滞在先の証明（ホテル予約確認書など）の提示が必要",
      "駐日マダガスカル大使館への郵送による事前申請も可能",
    ],
    notes: [
      "空港でのアライバルビザ取得は混雑により長時間かかる場合があるため、事前の大使館申請を推奨",
      "短期滞在ビザの延長は原則不可。長期滞在の場合は「変更可能査証（ビザ・トランスフォーマブル）」を事前取得する必要あり",
      "ビザ発行日から3ヶ月以内に出国する必要あり",
      "偽造ビザ・滞在許可延長の詐欺業者に注意",
      "黄熱病感染リスク地域からの渡航者は予防接種証明書が必要な場合あり",
      "マラリア流行地域のため蚊対策が重要、渡航前に旅行保険の加入を推奨",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_119.html",
    },
  },
  {
    id: "malawi",
    name: "マラウイ",
    code: "MW",
    region: "africa",
    visaRequirement: {
      type: "evisa",
      duration: 30,
      evisaAvailable: true,
    },
    conditions: [
      "e-Visa事前申請が可能（https://evisa.gov.mw/）",
      "空港到着時のアライバルビザも取得可能（約75米ドル）",
      "パスポート残存有効期間が十分必要",
      "黄熱病予防接種は必須ではないが近隣国からの入国時は推奨",
    ],
    notes: [
      "e-Visa事前申請が推奨だがアライバルビザも利用可能",
      "滞在延長は入国後に移民局で手続き可能",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_120.html",
    },
  },
  {
    id: "mali",
    name: "マリ",
    code: "ML",
    region: "africa",
    visaRequirement: { type: "visa_required" },
    conditions: [
      "駐日マリ大使館での事前申請が必須",
      "90日以内のマルチプルビザが発給",
      "処理期間は最短5営業日",
      "黄熱病予防接種証明書の提示を求められることあり",
    ],
    notes: ["アライバルビザは取得不可"],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_116.html",
    },
  },
  {
    id: "mauritania",
    name: "モーリタニア",
    code: "MR",
    region: "africa",
    visaRequirement: {
      type: "evisa",
      evisaAvailable: true,
    },
    conditions: [
      "オンラインでの電子ビザ申請が必須（https://anrpts.gov.mr/visa/requestvisa）",
      "費用約60米ドル、空港到着時に現金で支払い（ユーロ・ドル・ウギア、釣り銭なし）",
      "パスポート残存有効期間6ヶ月以上必要",
      "出発2日以上前の申請が必要",
    ],
    notes: [
      "2025年1月5日よりアライバルビザは完全廃止、電子ビザのみ",
      "手数料は空港到着後に現金払い（釣り銭の用意なし）",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_278.html",
    },
  },
  {
    id: "mauritius",
    name: "モーリシャス",
    code: "MU",
    region: "africa",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism"],
    },
    conditions: [
      "パスポート残存有効期間が滞在日程をカバーしていること",
      "復路航空券の提示が必要",
      "滞在先証明の提示が求められることあり",
    ],
    notes: [
      "年間の観光目的滞在は最大180日、商用目的は最大120日",
      "滞在期間の延長は入国後に手続き可能",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_279.html",
    },
  },
  {
    id: "morocco",
    name: "モロッコ",
    code: "MA",
    region: "africa",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism"],
    },
    conditions: [
      "パスポート残存有効期間が入国時6ヶ月以上必要",
      "90日を超える滞在は警察署で「滞在許可証」の申請が必要",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_124.html",
    },
  },
  {
    id: "mozambique",
    name: "モザンビーク",
    code: "MZ",
    region: "africa",
    visaRequirement: {
      type: "visa_free",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "入国時に手数料650メティカル（またはUSドル現金）の支払いが必要",
      "パスポート残存有効期間180日以上必要",
      "復路航空券・宿泊先予約確認書の提示が必要",
    ],
    notes: [
      "2023年3月31日より査証免除対象",
      "初回30日、現地移民局で30日延長可能（最長60日）",
      "60日以上は事前に大使館で数次査証を申請する必要あり",
      "オンライン事前登録（E-Visa）義務は取り消し済み",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_123.html",
    },
  },
  {
    id: "namibia",
    name: "ナミビア",
    code: "NA",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 90,
      evisaAvailable: true,
    },
    conditions: [
      "2025年4月1日より新査証制度が導入、日本国籍者は入国にビザが必要",
      "取得方法3種類：(1)E-Visa（https://eservices.mhaiss.gov.na/）(2)アライバルビザ (3)駐日大使館申請",
      "パスポート残存有効期間6ヶ月以上・空白ページ3ページ以上必要",
      "往復航空券・旅行保険・宿泊先証明・資金証明が必要",
    ],
    notes: ["2025年4月1日より新制度、在ナミビア日本国大使館で詳細案内あり"],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_143.html",
    },
  },
  {
    id: "niger",
    name: "ニジェール",
    code: "NE",
    region: "africa",
    visaRequirement: { type: "visa_required" },
    conditions: [
      "事前にビザ取得が必要（日本にニジェール大使館なし、名誉領事館または近隣国で申請）",
      "出国用航空券の提示が必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_115.html",
    },
  },
  {
    id: "nigeria",
    name: "ナイジェリア",
    code: "NG",
    region: "africa",
    visaRequirement: {
      type: "evisa",
      evisaAvailable: true,
    },
    conditions: [
      "オンラインe-Visa申請が必須（ナイジェリア移民局ポータルから申請）",
      "パスポート顔写真ページ・往復航空券・ホテル予約票が必要",
      "審査は提出後48時間以内に完了",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [
      "2025年5月よりアライバルビザ廃止、e-Visa制度に移行",
      "最大90日滞在（延長不可）",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_115.html",
    },
  },
  {
    id: "rwanda",
    name: "ルワンダ",
    code: "RW",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      evisaAvailable: true,
    },
    conditions: [
      "キガリ国際空港でアライバルビザ取得可能（1次30日50USD、数次90日70USD）",
      "オンライン事前申請も可能",
      "パスポート残存有効期間6ヶ月以上必要",
      "日本から直接入国する場合は黄熱病予防接種不要（第三国経由は必要な場合あり）",
    ],
    notes: ["アライバルビザの運用状況は変動する場合あり、事前確認推奨"],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_131.html",
    },
  },
  {
    id: "senegal",
    name: "セネガル",
    code: "SN",
    region: "africa",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism"],
    },
    conditions: [
      "パスポート残存有効期間6ヶ月以上必要",
      "往復航空券の所持が必要",
      "黄熱病予防接種証明書（イエローカード）の所持が必要",
    ],
    notes: [
      "2015年より査証免除",
      "91日以上の滞在は現地で延長許可を取得する必要あり",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_109.html",
    },
  },
  {
    id: "seychelles",
    name: "セーシェル",
    code: "SC",
    region: "africa",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism"],
    },
    conditions: [
      "入国前にTravel Authorization（電子渡航認証）の事前取得が必須（https://seychelles.govtas.com/）",
      "パスポート残存有効期間が出国日まで有効であること",
      "復路航空券の所持が必要",
      "宿泊先の予約確認書が必要",
      "1日あたり最低150米ドルの滞在資金証明が必要",
      "黄熱病リスク国経由の場合は予防接種証明書が必要",
    ],
    notes: ["到着時にVisitor's Permitが付与される（最長3ヶ月）"],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_108.html",
    },
  },
  {
    id: "somalia",
    name: "ソマリア",
    code: "SO",
    region: "africa",
    visaRequirement: {
      type: "evisa",
      evisaAvailable: true,
    },
    conditions: [
      "電子ビザまたは招聘状によるビザが必要",
      "空路入国の場合はホテル等に招聘エントリーパーミットを依頼",
      "日本にソマリア大使館なし（在ケニア大使館が兼轄）",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_110.html",
    },
  },
  {
    id: "south_sudan",
    name: "南スーダン",
    code: "SS",
    region: "africa",
    visaRequirement: { type: "visa_required" },
    conditions: [
      "ビザ取得が必要だが駐日南スーダン大使館ではビザ発給は準備中",
      "米国・英国・ケニア・ウガンダ等の南スーダン大使館で事前に取得が必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: ["日本でのビザ取得は現在不可"],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_301.html",
    },
  },
  {
    id: "sudan",
    name: "スーダン",
    code: "SD",
    region: "africa",
    visaRequirement: { type: "visa_required" },
    conditions: [
      "事前にビザ取得が必要",
      "パスポート残存有効期間6ヶ月以上必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_107.html",
    },
  },
  {
    id: "tanzania",
    name: "タンザニア",
    code: "TZ",
    region: "africa",
    visaRequirement: {
      type: "evisa",
      duration: 90,
      evisaAvailable: true,
    },
    conditions: [
      "e-Visa事前申請が推奨（https://visa.immigration.go.tz/、50米ドル）",
      "空港到着時のアライバルビザも取得可能",
      "パスポート残存有効期間6ヶ月以上・未使用査証欄2ページ以上必要",
      "復路航空券の提示が必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [
      "e-Visa申請は渡航2週間以上前に完了が必要",
      "商用目的は「商用ビザ」が別途必要",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_126.html",
    },
  },
  {
    id: "tunisia",
    name: "チュニジア",
    code: "TN",
    region: "africa",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism"],
    },
    conditions: ["パスポート残存有効期間が滞在日数＋3ヶ月以上必要"],
    notes: ["3ヶ月超の滞在や就労目的は事前にビザ取得が必要"],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_113.html",
    },
  },
  {
    id: "uganda",
    name: "ウガンダ",
    code: "UG",
    region: "africa",
    visaRequirement: {
      type: "evisa",
      duration: 90,
      evisaAvailable: true,
    },
    conditions: [
      "e-Visa事前申請が必須（https://www.visas.immigration.go.ug/、50米ドル）",
      "パスポート残存有効期間6ヶ月以上必要",
      "黄熱病予防接種証明書（イエローカード）が全渡航者に必須",
      "処理期間7〜10営業日",
    ],
    notes: [
      "偽造申請サイトに注意（正規は www.visas.immigration.go.ug）",
      "初期滞在から追加60日間を2回まで延長可能",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_128.html",
    },
  },
  {
    id: "zambia",
    name: "ザンビア",
    code: "ZM",
    region: "africa",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "2022年11月7日以降、日本国籍は観光・商用等で最長90日まで査証免除",
      "復路/第三国行き航空券の提示を求められる場合あり",
    ],
    notes: [
      "商用目的は12ヶ月内で30日間の制限",
      "90日超の場合は30日ごとに延長手続きが必要",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_104.html",
    },
  },
  {
    id: "zimbabwe",
    name: "ジンバブエ",
    code: "ZW",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
    },
    conditions: [
      "空港・国境地点でアライバルビザを取得可能",
      "費用：一次有効30USD、二次有効45USD、数次有効55USD",
      "パスポート残存有効期間6ヶ月以上必要",
      "黄熱病予防接種証明書が推奨",
    ],
    notes: [
      "KAZAビザ（50USD）も利用可能（ビクトリア・フォールズ、ザンビア・ボツワナとの往来用）",
      "アライバルビザは現金での支払い（米ドル）",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_105.html",
    },
  },
  {
    id: "gambia",
    name: "ガンビア",
    code: "GM",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
    },
    conditions: [
      "空港でのアライバルビザ取得が可能",
      "日本にガンビア大使館なし（駐日セネガル大使館が代行）",
      "パスポート残存有効期間6ヶ月以上必要",
      "往復航空券の予約確認が必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [
      "1ヶ月超の滞在は現地ガンビア出入国管理局で延長申請",
      "入出国時に空港使用料1,000ダラシ相当が必要",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_138.html",
    },
  },
  {
    id: "guinea",
    name: "ギニア",
    code: "GN",
    region: "africa",
    visaRequirement: {
      type: "evisa",
      evisaAvailable: true,
    },
    conditions: [
      "e-Visaでのオンライン申請が可能",
      "パスポート残存有効期間6ヶ月以上必要",
      "黄熱病予防接種証明書が必要",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_102.html",
    },
  },
  {
    id: "guinea_bissau",
    name: "ギニアビサウ",
    code: "GW",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
    },
    conditions: [
      "日本にギニアビサウ公館なし（セネガル等で申請）",
      "短期30日シングル約64ユーロ",
      "パスポート残存有効期間6ヶ月以上必要",
      "出国用航空券・黄熱病予防接種証明書・滞在費用証明が必要",
    ],
    notes: ["セネガル（ダカール）での申請が最もスムーズ"],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_103.html",
    },
  },
  {
    id: "sierra_leone",
    name: "シエラレオネ",
    code: "SL",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 90,
    },
    conditions: [
      "空港到着時にアライバルビザ取得可能（80米ドル）",
      "陸路国境でも取得可能（800,000レオン）",
      "パスポート残存有効期間6ヶ月以上必要",
      "黄熱病予防接種証明書（イエローカード）が必須",
    ],
    notes: [
      "日本にシエラレオネ大使館なし（在ガーナ日本国大使館が管轄）",
      "西アフリカではアライバルビザ対応国が少なく利便性が高い",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_111.html",
    },
  },
  {
    id: "liberia",
    name: "リベリア",
    code: "LR",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 90,
    },
    conditions: [
      "駐日リベリア大使館での事前申請が必須",
      "パスポート残存有効期間6ヶ月以上・未使用査証欄5ページ以上連続必要",
      "料金：シングルビザ14,000〜16,000円",
    ],
    notes: ["入国後に移民局で延長可能"],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_112.html",
    },
  },
  {
    id: "togo",
    name: "トーゴ",
    code: "TG",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 7,
    },
    conditions: [
      "Voyage Togoサイトでの事前オンライン登録が必須",
      "ロメ空港到着時に7日間有効のアライバルビザを取得可能",
      "大使館申請の場合は最大90日",
      "パスポート残存有効期間が必要",
      "黄熱病予防接種証明書が必須（生後9ヶ月以上全員）",
      "出国用航空券・滞在費用証明が必要",
    ],
    notes: [
      "アライバルビザは事前オンライン登録が必須（Voyage Togo）",
      "大使館での事前申請も可能（最大90日）",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_119.html",
    },
  },
  {
    id: "benin",
    name: "ベナン",
    code: "BJ",
    region: "africa",
    visaRequirement: {
      type: "evisa",
      duration: 30,
      evisaAvailable: true,
    },
    conditions: [
      "オンラインeビザ申請のみ（https://evisa.gouv.bj/）",
      "シングル30日60USD・マルチ30日85USD・マルチ90日110USD",
      "パスポート残存有効期間が必要",
      "出国用航空券が必要",
    ],
    notes: [
      "アライバルビザはなし、eビザのみ",
      "陸路国境でもeビザでの入国が確認済み",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_118.html",
    },
  },
  {
    id: "burkina_faso",
    name: "ブルキナファソ",
    code: "BF",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
    },
    conditions: [
      "駐日ブルキナファソ大使館での事前申請が必要",
      "パスポート残存有効期間6ヶ月以上必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_117.html",
    },
  },
  {
    id: "central_african_republic",
    name: "中央アフリカ共和国",
    code: "CF",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
    },
    conditions: [
      "事前にビザ取得が必要（大使館または代行申請）",
      "パスポート残存有効期間6ヶ月以上必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: ["在カメルーン日本国大使館が兼轄"],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_140.html",
    },
  },
  {
    id: "gabon",
    name: "ガボン",
    code: "GA",
    region: "africa",
    visaRequirement: {
      type: "evisa",
      duration: 30,
      evisaAvailable: true,
    },
    conditions: [
      "e-VISAオンライン申請のみ（https://evisa.dgdi.ga/）",
      "リーブルヴィル国際空港からの空路入国者のみ対象（陸路は対象外）",
      "申請から概ね3日で発給通知",
      "発給通知をプリントアウトして入国時に提示",
    ],
    notes: [
      "2023年10月より査証免除廃止",
      "2024年5月よりアライバルビザ停止",
      "陸路国境でのe-VISA利用は不可",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_144.html",
    },
  },
  {
    id: "congo_republic",
    name: "コンゴ共和国",
    code: "CG",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
    },
    conditions: [
      "事前にビザ取得が必要（大使館または代行申請）",
      "パスポート残存有効期間6ヶ月以上必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: ["アライバルビザの公式情報が不明確、事前申請を強く推奨"],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_145.html",
    },
  },
  {
    id: "congo_dr",
    name: "コンゴ民主共和国",
    code: "CD",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
    },
    conditions: [
      "駐日コンゴ民主共和国大使館での事前申請が必須",
      "パスポート残存有効期間が必要・所持人記入欄記入必須",
      "黄熱病予防接種証明書（イエローカード）が全渡航者に必須（生後9ヶ月以上）",
      "未所持の場合は強制接種＋接種代金＋反則金が徴収される",
    ],
    notes: [
      "ビザは必ず居住国（日本）で取得のこと（他国で取得したビザは無効と判定される可能性あり）",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_146.html",
    },
  },
  {
    id: "equatorial_guinea",
    name: "赤道ギニア",
    code: "GQ",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
    },
    conditions: [
      "日本に公館なし（中国・米国・フランス・スペイン・ガボン等で申請）",
      "電子ビザサイトあり（equatorialguinea-E-Visa.com）",
      "パスポート残存有効期間が必要",
    ],
    notes: ["日本でのビザ取得が困難", "アライバルビザの有無は不明確"],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_148.html",
    },
  },
  {
    id: "sao_tome",
    name: "サントメ・プリンシペ",
    code: "ST",
    region: "africa",
    visaRequirement: {
      type: "visa_free",
      duration: 15,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "15日以内の観光・商用はビザ免除",
      "有効なパスポート・出国用航空券が必要",
      "黄熱病予防接種証明書（イエローカード）が必須",
    ],
    notes: [
      "日本に在外公館なし（東京に名誉領事館あり）",
      "15日超過の場合は事前ビザ申請が必要（ポルトガル・ベルギー・フランス等で申請）",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_147.html",
    },
  },
  {
    id: "cape_verde",
    name: "カーボベルデ",
    code: "CV",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      evisaAvailable: true,
    },
    conditions: [
      "政府専用サイト「EASE」（https://www.ease.gov.cv/）での事前登録が必須",
      "入国5日前までの申請を推奨",
      "空港到着時にビザ取得",
      "パスポート残存有効期間・査証欄確認が必要",
    ],
    notes: [
      "事前承認なく到着すると罰金対象",
      "日本に在外公館なし",
      "空港使用料が別途必要な場合あり",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_149.html",
    },
  },
  {
    id: "libya",
    name: "リビア",
    code: "LY",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
    },
    conditions: ["事前にビザ取得が必要", "パスポート残存有効期間6ヶ月以上必要"],
    notes: ["在日大使館でのビザ発給手続きは停止状態の可能性"],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_125.html",
    },
  },
  {
    id: "eswatini",
    name: "エスワティニ",
    code: "SZ",
    region: "africa",
    visaRequirement: {
      type: "visa_free",
      duration: 90,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "パスポート残存有効期間3ヶ月以上・未使用査証欄2ページ以上必要",
    ],
    notes: [
      "日本に在外公館なし（マレーシアに大使館）",
      "90日超の場合は事前ビザ申請が必要",
    ],
    officialLinks: {
      mofa: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_300.html",
    },
  },
];

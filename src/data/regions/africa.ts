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
    notes: [
      "就労目的の場合は就労ビザの取得が必要",
      "現地での滞在延長は可能だが、事前申請が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/south_africa/index.html",
    },
  },
  {
    id: "algeria",
    name: "アルジェリア",
    code: "DZ",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 90 },
    conditions: [
      "事前にビザ取得が必要",
      "黄熱病流行国からの渡航者は黄熱予防接種証明書が必要",
    ],
    notes: ["一部地域に退避勧告、渡航中止勧告が発出されているため注意が必要"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/algeria/index.html",
    },
  },
  {
    id: "angola",
    name: "アンゴラ",
    code: "AO",
    region: "africa",
    visaRequirement: { type: "visa_free", duration: 30, purpose: ["tourism"] },
    conditions: [
      "1回の入国で30日以内、年間合計90日以内の観光目的はビザ不要",
      "旅券残存入国時6か月以上、未使用査証欄連続2頁以上が必要",
      "出国用航空券、滞在費用証明が必要",
      "生後9か月以上の渡航者は黄熱予防接種証明書が必要",
    ],
    notes: [
      "観光目的以外は事前にビザ取得が必要",
      "外交/公用、10歳以下のビザ申請以外は本人申請（受領は代理可）",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/angola/index.html",
    },
  },
  {
    id: "botswana",
    name: "ボツワナ",
    code: "BW",
    region: "africa",
    visaRequirement: { type: "visa_free", duration: 90, purpose: ["tourism"] },
    conditions: ["パスポート残存6ヶ月以上", "出国用航空券"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/botswana/index.html",
    },
  },
  {
    id: "burundi",
    name: "ブルンジ",
    code: "BI",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 0 },
    conditions: [
      "事前にビザ取得が必要（オンライン申請または近隣国の大使館で申請）",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/burundi/index.html",
    },
  },
  {
    id: "cameroon",
    name: "カメルーン",
    code: "CM",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 0 },
    conditions: [
      "事前にビザ取得が必要（東京の大使館で申請可能）",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/cameroon/index.html",
    },
  },
  {
    id: "chad",
    name: "チャド",
    code: "TD",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 0 },
    conditions: [
      "事前にビザ取得が必要（近隣国の大使館で申請）",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/chad/index.html",
    },
  },
  {
    id: "comoros",
    name: "コモロ",
    code: "KM",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 45 },
    conditions: [
      "到着時にビザ取得可能（有料）",
      "パスポート残存6ヶ月以上必要",
      "黄熱病予防接種証明書が必要（推奨）",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/comoros/index.html",
    },
  },
  {
    id: "cote_d_ivoire",
    name: "コートジボワール",
    code: "CI",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 0 },
    conditions: [
      "事前にビザ取得が必要（東京の大使館で申請可能）",
      "アビジャン空港到着の場合はe-Visa取得可能",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/cote/index.html",
    },
  },
  {
    id: "djibouti",
    name: "ジブチ",
    code: "DJ",
    region: "africa",
    visaRequirement: { type: "evisa", duration: 30, evisaAvailable: true },
    conditions: [
      "事前にe-Visa取得が必要",
      "パスポート残存6ヶ月以上必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/djibouti/index.html",
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
      "事前にビザ取得が必要（e-Visa利用可能）",
      "空港到着時にもビザ取得可能",
      "黄熱病流行国からの渡航者は黄熱予防接種証明書が必要",
    ],
    notes: [
      "シナイ半島北部（北シナイ県）及びリビアとの国境地帯に渡航中止勧告が発出されているため注意が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/egypt/index.html",
    },
  },
  {
    id: "eritrea",
    name: "エリトリア",
    code: "ER",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 30 },
    conditions: [
      "事前にビザ取得が必要",
      "黄熱病流行国からの渡航者は黄熱予防接種証明書が必要",
    ],
    notes: [
      "スーダンとの国境地帯、エチオピアとの国境地帯、ジブチとの国境地帯に渡航中止勧告が発出されているため注意が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/eritrea/index.html",
    },
  },
  {
    id: "ethiopia",
    name: "エチオピア",
    code: "ET",
    region: "africa",
    visaRequirement: { type: "evisa", duration: 30, evisaAvailable: true },
    conditions: [
      "事前にビザ取得が必要",
      "公用・外交以外のビザ発給はe-visaで取得",
      "黄熱に感染する危険のある国から来る、生後9か月以上の渡航者は黄熱予防接種証明書が必要",
      "乗り継ぎのため、黄熱に感染する危険のある国の空港に12時間以上滞在した渡航者も黄熱予防接種証明書が必要",
    ],
    notes: [
      "アディスアベバのボレ国際空港で取得するVisa On Arrivalは一時的に停止中",
      "一部地域に退避勧告、渡航中止勧告が発出されているため注意が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/ethiopia/index.html",
    },
  },
  {
    id: "ghana",
    name: "ガーナ",
    code: "GH",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 60 },
    conditions: [
      "事前にビザ取得が必要",
      "全ての渡航者は黄熱予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/ghana/index.html",
    },
  },
  {
    id: "kenya",
    name: "ケニア",
    code: "KE",
    region: "africa",
    visaRequirement: { type: "evisa", duration: 90, evisaAvailable: true },
    conditions: [
      "渡航前にeTA（Electronic Travel Authorization）のオンライン申請・承認取得が必要",
      "ケニア政府の公式eTAサイトから申請する",
    ],
    notes: [
      "航空会社はeTA未取得旅客の搭乗拒否対象となる",
      "在ケニア日本国大使館でも日本人旅行者にeTA事前取得が必要と案内されている",
    ],
    officialLinks: { mofa: "https://www.mofa.go.jp/mofaj/area/ke/index.html" },
  }, // source: https://immigration.ecitizen.go.ke/travelers-obligations
  {
    id: "lesotho",
    name: "レソト",
    code: "LS",
    region: "africa",
    visaRequirement: { type: "visa_free", duration: 90, purpose: ["tourism"] },
    conditions: ["日本国籍は3か月まで査証免除"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/lesotho/index.html",
    },
  }, // source: https://www.mofa.go.jp/mofaj/area/lesotho/data.html
  {
    id: "madagascar",
    name: "マダガスカル",
    code: "MG",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      evisaAvailable: true,
    },
    conditions: [
      "到着ビザまたはe-Visaの取得が必要",
      "パスポート残存6ヶ月以上必要",
      "黄熱病予防接種証明書が必要（推奨）",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/madagascar/index.html",
    },
  },
  {
    id: "malawi",
    name: "マラウイ",
    code: "MW",
    region: "africa",
    visaRequirement: { type: "evisa", duration: 30, evisaAvailable: true },
    conditions: [
      "事前にe-Visa取得が必要",
      "パスポート残存6ヶ月以上必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/malawi/index.html",
    },
  },
  {
    id: "mali",
    name: "マリ",
    code: "ML",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 0 },
    conditions: [
      "事前にビザ取得が必要（東京の大使館で申請可能）",
      "黄熱病予防接種証明書が必要",
    ],
    notes: ["渡航中止勧告が発出されている"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/mali/index.html",
    },
  },
  {
    id: "mauritania",
    name: "モーリタニア",
    code: "MR",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 0 },
    conditions: [
      "事前にビザ取得が必要（東京の大使館で申請可能）",
      "ヌアクショット空港で到着ビザ取得も可能",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/mauritania/index.html",
    },
  },
  {
    id: "mauritius",
    name: "モーリシャス",
    code: "MU",
    region: "africa",
    visaRequirement: { type: "visa_free", duration: 90, purpose: ["tourism"] },
    conditions: ["パスポート残存滞在期間中有効", "出国用航空券", "滞在先証明"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/mauritius/index.html",
    },
  },
  {
    id: "morocco",
    name: "モロッコ",
    code: "MA",
    region: "africa",
    visaRequirement: { type: "visa_free", duration: 90, purpose: ["tourism"] },
    conditions: ["パスポート残存滞在期間中有効"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/morocco/index.html",
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
      "日本国籍は観光・商用等で30日/回（年間最大90日）まで査証免除",
      "入国前に電子事前登録（PAE）と入国税の支払いが必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/mozambique/index.html",
    },
  }, // source: https://www.mz.emb-japan.go.jp/itpr_ja/11_000001_00616.html
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
      "2025年4月1日から新たな査証制度が導入され、日本国籍者は入国にあたり査証取得が必要",
      "取得方法：(1) オンライン（E-Visa）、(2) 到着時（Visa on Arrival）、(3) 駐日大使館申請",
      "査証の有効（滞在）日数は申請する滞在予定に基づき決定され、最大90日",
      "パスポート残存6ヶ月以上",
      "出国用航空券",
    ],
    notes: ["在ナミビア日本国大使館で新制度の詳細が案内されている"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/namibia/index.html",
    },
  },
  {
    id: "niger",
    name: "ニジェール",
    code: "NE",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 0 },
    conditions: [
      "事前にビザ取得が必要（近隣国の大使館で申請）",
      "黄熱病予防接種証明書が必要",
    ],
    notes: ["渡航中止勧告が発出されている"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/niger/index.html",
    },
  },
  {
    id: "nigeria",
    name: "ナイジェリア",
    code: "NG",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 0 },
    conditions: [
      "事前にビザ取得が必要（東京の大使館で申請可能）",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/nigeria/index.html",
    },
  },
  {
    id: "rwanda",
    name: "ルワンダ",
    code: "RW",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 30 },
    conditions: [
      "到着ビザまたはe-Visaの取得が必要",
      "パスポート残存6ヶ月以上必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/rwanda/index.html",
    },
  },
  {
    id: "senegal",
    name: "セネガル",
    code: "SN",
    region: "africa",
    visaRequirement: { type: "visa_free", duration: 90, purpose: ["tourism"] },
    conditions: [
      "パスポート残存6ヶ月以上必要",
      "黄熱病予防接種証明書が必要（推奨）",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/senegal/index.html",
    },
  },
  {
    id: "seychelles",
    name: "セーシェル",
    code: "SC",
    region: "africa",
    visaRequirement: { type: "visa_free", duration: 30, purpose: ["tourism"] },
    conditions: [
      "パスポート残存滞在期間中有効",
      "出国用航空券の所持が必要",
      "滞在先証明の提示が必要",
      "十分な資金の証明が必要",
      "オンラインでのTravel Authorization事前申請が必要",
    ],
    notes: ["到着時に入国許可（Visitor's Permit）が付与される"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/seychelles/index.html",
    },
  },
  {
    id: "somalia",
    name: "ソマリア",
    code: "SO",
    region: "africa",
    visaRequirement: { type: "evisa", evisaAvailable: true },
    conditions: [
      "2025年9月1日以降、入国には有効なeTA（eTAS）の保有が必要",
      "ソマリア民間航空当局（SCAA）のAIC（航空情報通報）で案内されている",
    ],
    notes: ["渡航中止勧告が発出されている", "ソマリランドは別途要件あり"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/somali/index.html",
    },
  },
  {
    id: "south_sudan",
    name: "南スーダン",
    code: "SS",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 0 },
    conditions: [
      "事前にビザ取得が必要（東京の大使館で申請可能）",
      "黄熱病予防接種証明書が必要",
    ],
    notes: ["渡航中止勧告が発出されている"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/s_sudan/index.html",
    },
  },
  {
    id: "sudan",
    name: "スーダン",
    code: "SD",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 0 },
    conditions: [
      "事前にビザ取得が必要（東京の大使館で申請可能）",
      "黄熱病予防接種証明書が必要",
    ],
    notes: ["渡航中止勧告が発出されている"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/sudan/index.html",
    },
  },
  {
    id: "tanzania",
    name: "タンザニア",
    code: "TZ",
    region: "africa",
    visaRequirement: { type: "evisa", duration: 90, evisaAvailable: true },
    conditions: [
      "e-Visaまたは到着ビザの取得が必要",
      "パスポート残存6ヶ月以上必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/tanzania/index.html",
    },
  },
  {
    id: "tunisia",
    name: "チュニジア",
    code: "TN",
    region: "africa",
    visaRequirement: { type: "visa_free", duration: 90, purpose: ["tourism"] },
    conditions: ["パスポート残存3ヶ月以上"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/tunisia/index.html",
    },
  },
  {
    id: "uganda",
    name: "ウガンダ",
    code: "UG",
    region: "africa",
    visaRequirement: { type: "evisa", duration: 90, evisaAvailable: true },
    conditions: [
      "事前にe-Visaの取得が必要",
      "1歳以上の渡航者は黄熱予防接種証明書が必要",
    ],
    notes: [
      "コンゴ民主共和国との国境地帯（ホイマ県以南）に渡航中止勧告が発出されているため注意が必要",
    ],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/uganda/index.html",
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
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/zambia/index.html",
    },
  }, // source: https://www.mofa.go.jp/mofaj/toko/visa/japanese/passport/visa_exempted.html#zambia
  {
    id: "zimbabwe",
    name: "ジンバブエ",
    code: "ZW",
    region: "africa",
    visaRequirement: { type: "visa_required", duration: 30 },
    conditions: [
      "到着ビザまたはe-Visaの取得が必要",
      "パスポート残存6ヶ月以上必要",
      "黄熱病予防接種証明書が必要（推奨）",
    ],
    notes: ["KAZAビザも利用可能"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/zimbabwe/index.html",
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
      purpose: ["tourism", "business"],
    },
    conditions: [
      "事前にビザ取得が必要（東京の大使館で申請可能）",
      "到着時のビザ取得も可能（アライバルビザ）",
      "パスポート残存6ヶ月以上必要",
      "往復航空券の予約確認が必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/gambia/index.html",
    },
  },
  {
    id: "guinea",
    name: "ギニア",
    code: "GN",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "事前にビザ取得が必要（東京の大使館で申請可能）",
      "パスポート残存6ヶ月以上必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/guinea/index.html",
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
      purpose: ["tourism", "business"],
    },
    conditions: [
      "事前にビザ取得が必要（東京の大使館で申請可能）",
      "パスポート残存6ヶ月以上必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/guinea_bissau/index.html",
    },
  },
  {
    id: "sierra_leone",
    name: "シエラレオネ",
    code: "SL",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "事前にビザ取得が必要（東京の大使館で申請可能）",
      "パスポート残存6ヶ月以上必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/sierra_leone/index.html",
    },
  },
  {
    id: "liberia",
    name: "リベリア",
    code: "LR",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "事前にビザ取得が必要（東京の大使館で申請可能）",
      "パスポート残存6ヶ月以上必要",
      "往復航空券の予約確認が必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/liberia/index.html",
    },
  },
  {
    id: "togo",
    name: "トーゴ",
    code: "TG",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "事前にビザ取得が必要（東京の大使館で申請可能）",
      "到着時のビザ取得も可能（アライバルビザ）",
      "パスポート残存6ヶ月以上必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/togo/index.html",
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
      purpose: ["tourism", "business"],
    },
    conditions: [
      "e-Visaはオンラインで取得可能",
      "到着時のビザ取得も可能（アライバルビザ）",
      "パスポート残存6ヶ月以上必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/benin/index.html",
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
      purpose: ["tourism", "business"],
    },
    conditions: [
      "事前にビザ取得が必要（東京の大使館で申請可能）",
      "パスポート残存6ヶ月以上必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: ["渡航中止勧告が発出されている"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/burkina_faso/index.html",
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
      purpose: ["tourism", "business"],
    },
    conditions: [
      "事前にビザ取得が必要（フランスまたは近隣国の大使館で申請）",
      "パスポート残存6ヶ月以上必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: ["渡航中止勧告が発出されている"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/c_africa/index.html",
    },
  },
  {
    id: "gabon",
    name: "ガボン",
    code: "GA",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "事前にビザ取得が必要（東京の大使館で申請可能）",
      "到着時のビザ取得も可能（アライバルビザ）",
      "パスポート残存6ヶ月以上必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/gabon/index.html",
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
      purpose: ["tourism", "business"],
    },
    conditions: [
      "事前にビザ取得が必要（東京の大使館で申請可能）",
      "到着時のビザ取得も可能（アライバルビザ）",
      "パスポート残存6ヶ月以上必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/congo_r/index.html",
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
      purpose: ["tourism", "business"],
    },
    conditions: [
      "事前にビザ取得が必要（東京の大使館で申請可能）",
      "パスポート残存6ヶ月以上必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/congo_d/index.html",
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
      purpose: ["tourism", "business"],
    },
    conditions: [
      "事前にビザ取得が必要（東京の大使館で申請可能）",
      "パスポート残存6ヶ月以上必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/e_guinea/index.html",
    },
  },
  {
    id: "sao_tome",
    name: "サントメ・プリンシペ",
    code: "ST",
    region: "africa",
    visaRequirement: {
      type: "visa_required",
      duration: 30,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "事前にビザ取得が必要（東京の大使館で申請可能）",
      "到着時のビザ取得も可能（アライバルビザ）",
      "パスポート残存6ヶ月以上必要",
      "黄熱病予防接種証明書が必要",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/saotome/index.html",
    },
  },
  {
    id: "cape_verde",
    name: "カーボベルデ",
    code: "CV",
    region: "africa",
    visaRequirement: {
      type: "evisa",
      duration: 30,
      evisaAvailable: true,
      purpose: ["tourism", "business"],
    },
    conditions: [
      "e-Visaはオンラインで取得可能",
      "到着時のビザ取得も可能（アライバルビザ）",
      "パスポート残存6ヶ月以上必要",
      "黄熱病予防接種証明書が必要な場合あり",
    ],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/capeverde/index.html",
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
      purpose: ["tourism", "business"],
    },
    conditions: [
      "事前にビザ取得が必要（東京の大使館で申請可能）",
      "パスポート残存6ヶ月以上必要",
    ],
    notes: ["渡航中止勧告が発出されている"],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/libya/index.html",
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
    conditions: ["日本国籍は滞在最長90日まで査証免除"],
    notes: [],
    officialLinks: {
      mofa: "https://www.mofa.go.jp/mofaj/area/eswatini/index.html",
    },
  }, // source: https://www.za.emb-japan.go.jp/files/100233453.pdf
];

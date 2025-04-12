/**
 * 地域コードから表示用の日本語名を取得します。
 * @param region 地域コード (例: 'asia', 'europe')
 * @returns 地域名の日本語表記 (例: 'アジア', 'ヨーロッパ')
 */
export const getRegionDisplayName = (region: string): string => {
  switch (region) {
    case "asia":
      return "アジア";
    case "europe":
      return "ヨーロッパ";
    case "north_america":
      return "北米・中米・カリブ";
    case "south_america":
      return "南米";
    case "oceania":
      return "オセアニア";
    case "middle_east":
      return "中東";
    case "africa":
      return "アフリカ";
    default:
      return "その他";
  }
};

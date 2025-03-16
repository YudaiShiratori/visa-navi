export type RegionId =
  | "asia"
  | "europe"
  | "north-america"
  | "south-america"
  | "oceania"
  | "africa"
  | "middle-east";

interface RegionColor {
  main: string;
  light: string;
  hover: string;
}

export const regionColors: Record<RegionId, RegionColor> = {
  asia: {
    main: "#E03131", // 深い赤 - アジアのイメージ
    light: "#E0313115",
    hover: "#C92A2A",
  },
  europe: {
    main: "#1971C2", // 濃い青 - EUのイメージ
    light: "#1971C215",
    hover: "#1864AB",
  },
  "north-america": {
    main: "#2F9E44", // 深い緑 - 北米の自然のイメージ
    light: "#2F9E4415",
    hover: "#2B8A3E",
  },
  "south-america": {
    main: "#E8590C", // 深いオレンジ - 南米の情熱のイメージ
    light: "#E8590C15",
    hover: "#D9480F",
  },
  oceania: {
    main: "#3BC9DB", // 明るい青 - 太平洋のイメージ
    light: "#3BC9DB15",
    hover: "#22B8CF",
  },
  africa: {
    main: "#F08C00", // 琥珀色 - アフリカの大地のイメージ
    light: "#F08C0015",
    hover: "#E67700",
  },
  "middle-east": {
    main: "#AE3EC9", // 紫 - 中東の神秘的なイメージ
    light: "#AE3EC915",
    hover: "#9C36B5",
  },
};

export const visaStatusColors = {
  visa_free: {
    main: "#22c55e", // 緑
    light: "#22c55e15", // 薄い緑（背景用）
    hover: "#16a34a", // ホバー時の緑
  },
  evisa: {
    main: "#3b82f6", // 青
    light: "#3b82f615", // 薄い青（背景用）
    hover: "#2563eb", // ホバー時の青
  },
  visa_required: {
    main: "#ef4444", // 赤
    light: "#ef444415", // 薄い赤（背景用）
    hover: "#dc2626", // ホバー時の赤
  },
};

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
    main: "#FF6B6B", // 赤系 - アジアのイメージ
    light: "#FF6B6B15",
    hover: "#FA5252",
  },
  europe: {
    main: "#4D96FF", // 青系 - EUのイメージ
    light: "#4D96FF15",
    hover: "#228BE6",
  },
  "north-america": {
    main: "#20C997", // エメラルドグリーン - 北米の自然のイメージ
    light: "#20C99715",
    hover: "#12B886",
  },
  "south-america": {
    main: "#38D9A9", // ターコイズ - 南米の自然のイメージ
    light: "#38D9A915",
    hover: "#0CA678",
  },
  oceania: {
    main: "#38D9A9", // ターコイズ - 海のイメージ
    light: "#38D9A915",
    hover: "#0CA678",
  },
  africa: {
    main: "#FCC419", // 黄色 - サハラ砂漠のイメージ
    light: "#FCC41915",
    hover: "#F59F00",
  },
  "middle-east": {
    main: "#F783AC", // ピンク - 中東のイメージ
    light: "#F783AC15",
    hover: "#E64980",
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

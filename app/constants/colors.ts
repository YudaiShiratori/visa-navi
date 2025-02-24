export type RegionId = "asia" | "europe" | "americas" | "oceania" | "africa";

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
  americas: {
    main: "#20C997", // エメラルドグリーン - アメリカ大陸の自然のイメージ
    light: "#20C99715",
    hover: "#12B886",
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
};

export const visaStatusColors = {
  visa_free: {
    main: "#22c55e", // 緑
    light: "#22c55e15", // 薄い緑（背景用）
    hover: "#16a34a", // ホバー時の緑
  },
  evisa: {
    main: "#eab308", // 黄色
    light: "#eab30815", // 薄い黄色（背景用）
    hover: "#ca8a04", // ホバー時の黄色
  },
  visa_required: {
    main: "#ef4444", // 赤
    light: "#ef444415", // 薄い赤（背景用）
    hover: "#dc2626", // ホバー時の赤
  },
};

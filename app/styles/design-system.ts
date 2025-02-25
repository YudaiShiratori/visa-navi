export const colors = {
  // プライマリカラー
  primary: {
    50: "#e6f7ff",
    100: "#bae7ff",
    200: "#91d5ff",
    300: "#69c0ff",
    400: "#40a9ff",
    500: "#1890ff", // メインカラー
    600: "#096dd9",
    700: "#0050b3",
    800: "#003a8c",
    900: "#002766",
  },
  // アクセントカラー
  accent: {
    50: "#fff0f6",
    100: "#ffd6e7",
    200: "#ffadd2",
    300: "#ff85c0",
    400: "#f759ab",
    500: "#eb2f96", // アクセントカラー
    600: "#c41d7f",
    700: "#9e1068",
    800: "#780650",
    900: "#520339",
  },
  // 成功/ビザ免除
  success: {
    50: "#f6ffed",
    100: "#d9f7be",
    200: "#b7eb8f",
    300: "#95de64",
    400: "#73d13d",
    500: "#52c41a", // ビザ免除
    600: "#389e0d",
    700: "#237804",
    800: "#135200",
    900: "#092b00",
  },
  // 警告/電子ビザ
  warning: {
    50: "#fffbe6",
    100: "#fff1b8",
    200: "#ffe58f",
    300: "#ffd666",
    400: "#ffc53d",
    500: "#faad14", // 電子ビザ
    600: "#d48806",
    700: "#ad6800",
    800: "#874d00",
    900: "#613400",
  },
  // エラー/ビザ必須
  error: {
    50: "#fff1f0",
    100: "#ffccc7",
    200: "#ffa39e",
    300: "#ff7875",
    400: "#ff4d4f",
    500: "#f5222d", // ビザ必須
    600: "#cf1322",
    700: "#a8071a",
    800: "#820014",
    900: "#5c0011",
  },
  // グレースケール
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
  // 地域カラー
  regions: {
    asia: "#ff6b6b",
    europe: "#4d96ff",
    americas: "#20c997",
    oceania: "#38d9a9",
    africa: "#fcc419",
    "middle-east": "#f06595",
  },
};

export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
};

export const typography = {
  fontFamily: {
    sans: "'Noto Sans JP', 'Inter', sans-serif",
    display: "'Poppins', sans-serif",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },
};

export const spacing = {
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  32: "8rem",
  40: "10rem",
  48: "12rem",
  56: "14rem",
  64: "16rem",
};

export const borderRadius = {
  none: "0",
  sm: "0.125rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px",
};

export const animations = {
  fadeIn: "fadeIn 0.3s ease-out",
  slideUp: "slideUp 0.4s ease-out",
  pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
  bounce: "bounce 1s infinite",
}; 
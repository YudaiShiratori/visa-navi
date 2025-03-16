/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-gradient-to-r",
    "from-blue-600",
    "to-blue-500",
    "text-transparent",
    "bg-clip-text",
    "shadow-md",
    "shadow-lg",
    "shadow-xl",
    "hover:shadow-xl",
    "rounded-xl",
    "rounded-lg",
    "rounded-full",
    "bg-white",
    "bg-blue-50",
    "bg-opacity-20",
    "text-blue-600",
    "text-gray-700",
    "hover:text-blue-600",
    "hover:bg-blue-50",
    "hover:bg-gray-100",
    "hover:text-blue-800",
    "hover:shadow",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

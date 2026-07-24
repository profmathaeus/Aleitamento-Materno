import type { Config } from "tailwindcss";

// Paleta "coral glow" (mesma identidade visual configurada no Gamma da cliente)
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        coral: {
          DEFAULT: "#E199BB",
          50: "#FFF4E7",
          100: "#FFE7CD",
          200: "#FFD2D0",
          300: "#FFCDD2",
          400: "#F9D2DA",
          500: "#EB92AB",
          600: "#E199BB",
          700: "#FF7684",
          800: "#9C5461",
          900: "#FF2E45",
        },
        ink: "#4A4A4A",
      },
      backgroundImage: {
        "coral-glow": "linear-gradient(135deg, #E199BB 0%, #FFC7CD 50%, #FFF4E7 100%)",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#150B07",
        "text-primary": "#D3D3D3",
        "text-heading": "#E8E8E8",
        accent: "#FF8766",
        "accent-light": "#FFBEA2",
        "accent-bright": "#FF5A2C",
        "card-glass": "rgba(194,227,255,0.06)",
        "surface-light": "#F5ECE6",
        "surface-card": "#FFFBF8",
        "text-dark": "#150B07",
        "text-muted-dark": "#3D332F",
        "text-muted": "#AF9892",
        "white-30": "rgba(255,255,255,0.3)",
        "cta-dark-text": "#3A1606",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "marquee-left": "marquee-left 30s linear infinite",
        "marquee-right": "marquee-right 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

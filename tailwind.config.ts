import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0b",
        surface: { DEFAULT: "#111115", 2: "#18181e", 3: "#1f1f28" },
        gold: { DEFAULT: "#af9256", light: "#c9ae7a", pale: "#f0dcb0", dark: "#8a7040" },
        ink: { DEFAULT: "#e8e4d9", soft: "#ada99b", muted: "#87847a" },
        line: { DEFAULT: "rgba(175,146,86,0.18)", active: "rgba(175,146,86,0.55)" },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        ui: ["var(--font-ui)", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeUp: { "0%": { opacity: "0", transform: "translateY(14px)" }, "100%": { opacity: "1", transform: "none" } },
        spinSlow: { to: { transform: "rotate(360deg)" } },
        marquee: { to: { transform: "translateX(-50%)" } },
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".25" } },
      },
      animation: {
        "fade-up": "fadeUp .7s ease-out both",
        "spin-slow": "spinSlow 60s linear infinite",
        marquee: "marquee 38s linear infinite",
        blink: "blink 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

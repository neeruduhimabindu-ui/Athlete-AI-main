/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#0a1628",
          secondary: "#0d1f3c",
          tertiary: "#152238",
          surface: "#1a2d4a",
        },
        neon: {
          green: "#00ff88",
          "green-dim": "#39ff14",
          glow: "rgba(0, 255, 136, 0.3)",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "neon-sm": "0 0 10px rgba(0, 255, 136, 0.2)",
        "neon-md": "0 0 20px rgba(0, 255, 136, 0.3)",
        "neon-lg": "0 0 30px rgba(0, 255, 136, 0.4)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "grid-pulse": {
          "0%, 100%": { opacity: "0.03" },
          "50%": { opacity: "0.06" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
        glow: "glow 2s ease-in-out infinite",
        "grid-pulse": "grid-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

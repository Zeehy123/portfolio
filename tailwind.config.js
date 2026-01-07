const { transform } = require("next/dist/build/swc");

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      animation: {
        orbitSlow: "orbit 40s linear infinite",
        orbitMedium: "orbit 30s linear infinite",
        orbitFast: "orbit 20s linear infinite",
        float: "float 40s ease-in-out infinite",
      },
      keyframes: {
        orbit: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(60% 60% at 10% 20%,rgba(130, 88, 202, 0.35),rgba(20, 35, 51, 0.95))",
      },
      colors: {
        background: "#0A0E14",
        surface: "rgba(255, 255, 255, 0.03)",
        border: "rgba(255, 255, 255, 0.08)",
        text: "#EDE9FE",
        muted: "#A78BFA",
        primary: "#7C3AED",
        primarySoft: "rgba(99, 102, 241, 0.1)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(99,102,241,0.25)",
        soft: "0 10px 30px rgba(0,0,0,0.35)",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mini: ["poppins-medium", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

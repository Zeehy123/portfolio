/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or remove entirely if not needed
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
          "radial-gradient(30% 10% at 5% 5%,rgba(214, 199, 240, 0.35),rgba(49, 73, 99, 0.95))",
      },
      colors: {
        background: "#0A0E14",
        surface: "rgba(255, 255, 255, 0.03)",
        border: "rgba(255, 255, 255, 0.08)",
        text: "#EDE9FE",
        muted: "#A78BFA",
        primary: "#9f7ddbd0",
        free: "#474781",
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

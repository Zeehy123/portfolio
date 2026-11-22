/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        background: "#130F1F", // page ink
        panel: "#1B1530", // raised surfaces
        panelHi: "#251D40", // hover / modal
        border: "rgba(255, 255, 255, 0.10)",
        text: "#F2EFFA",
        muted: "#B4ADC9",
        primary: "#8D51FF", // brand violet (from your logo)
        primaryLight: "#B99BFF",
        accent: "#F4B860", // warm highlight, used sparingly
      },
      fontFamily: {
        heading: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        body: ["Manrope", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        frame: "0 30px 80px -30px rgba(141, 81, 255, 0.45)",
      },
    },
  },
  plugins: [],
};

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./_includes/**/*.html", "./_layouts/**/*.html", "./blog/*.html", "./_posts/*.html", "./*.html"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary_old: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        primary: {
          50: "#f7f5fb",
          100: "#f0ebf7",
          200: "#d9ceec",
          300: "#c2b0e1",
          400: "#9474ca",
          500: "#6639b3",
          600: "#5c33a1",
          700: "#4d2b86",
          800: "#3d226b",
          900: "#321c58",
        },
        orange_: {
          50: "#fff8f6",
          100: "#fff1ec",
          200: "#ffdcd0",
          300: "#ffc7b3",
          400: "#ff9d7b",
          500: "#ff7342",
          600: "#e6683b",
          700: "#bf5632",
          800: "#994528",
          900: "#7d3820",
        },
        secondary: {
          50: "#fff7f4",
          100: "#fff0e9",
          200: "#fed9c7",
          300: "#fdc1a5",
          400: "#fc9362",
          500: "#fb651e",
          600: "#e25b1b",
          700: "#bc4c17",
          800: "#973d12",
          900: "#7b310f",
        },
        tangerine: "#ff7342",
      },
    },
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  variants: {
    extend: {
      grayscale: ["hover", "focus"],
      margin: ["last"],
    },
    container: [],
  },
  // plugins: [require("@tailwindcss/typography")],
  plugins: [require("@tailwindcss/typography")],
};

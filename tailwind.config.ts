import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF7F2",
        ink: "#1B1B2F",
        hue: {
          coral: "#FF6B5E",
          mint: "#3DDBB0",
          sky: "#4DA3FF",
          graphite: "#2B2D42",
        },
      },
      fontFamily: {
        sans: [
          "ui-rounded",
          "'SF Pro Rounded'",
          "'Nunito'",
          "system-ui",
          "-apple-system",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 20px 50px -20px rgba(27,27,47,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;

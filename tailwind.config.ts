import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF7F2",
        ink: "#1B1B2F",
        hue: {
          purple: "#9B51E0",
          frost: "#7CCBD9",
          blue: "#2F8FE0",
          graphite: "#3A3D52",
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

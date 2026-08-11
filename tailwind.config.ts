import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        muted: "#5B6475",
        brand: "#5B4BEB",
        "brand-dark": "#4536C7",
        lavender: "#F6F4FF",
      },
    },
  },
  plugins: [],
};

export default config;

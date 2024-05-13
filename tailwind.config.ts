import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
   
      colors: {
        background_primary_website: "#1A2C38",
        background_secondary_website: "#203744",
        border_primary_website: "#33C16C",
        font_primary_website: "#FFF",
        font_tertiary_website: "#000",
        font_secondary_website: "#FFD200",
        box_primary_color: "#D9D9D9",
        grey_shade_website: "#d6d6d6",
        button_primary_website: "#1475E1",
        background_dark_website: "#071D2A",
        font_red_website: "#f00",
        font_orange_website: "#F37543",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

// tailwind.config.js

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        clamp: "clamp(1rem, 5vw, 3rem)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "main-bg-color":
          "linear-gradient(90deg, #c83b62 0.32%, #7f35cd 102.21%)",
        "main-bg-color-hover":
          "linear-gradient(90deg, #7f35cd 0.32%, #c83b62 102.21%)",
        "main-bg-color-opacity-32":
          "linear-gradient(90deg, rgba(200, 59, 98, 0.10) 0.32%, rgba(127, 53, 205, 0.10) 102.21%)",
        "sideNav-bg-opacity-20":
          "linear-gradient(90deg, rgba(200, 59, 98, 0.04) 0.32%, rgba(127, 53, 205, 0.04) 102.21%)",
        "statistics-bg-color":
          "linear-gradient(180deg, rgba(127, 53, 205, 0.50) -23.33%, rgba(217, 217, 217, 0.00) 109.17%)",

        "table-row-hover":
          "linear-gradient(90deg, rgba(200, 59, 98, 0.04) 0.32%, rgba(127, 53, 205, 0.04) 102.21%)",
      },
      boxShadow: {
        "product-card-shadow": " 0px 0px 30px 0px rgba(127, 53, 205, 0.10)",
        "brand-card-shadow": "0px 4px 24px 0px rgba(0, 0, 0, 0.06)",
        "verify-shadow": "0px 0px 29px 0px rgba(0, 0, 0, 0.12)",
      },
      colors: {
        "main-border-color": "rgba(127, 53, 205, 0.40)",
        "body-main-bg-color": "#F2F5FB",
        "light-white-color": "#E3F3FF",
        "menu-text-color": "#666",
        "green-v2-color": "#0D9755",
        "green-v3-color": "#23C55E",
        "green-v2-opacity-10": "rgba(13, 151, 85, 0.10)",
        "green-color": "#03A609",
        "green-opacity-10": "rgba(3, 166, 9, 0.10)",
        "blue-color": "#3B82F6",
        "sapphire-color": "#0EB5AB",
        "arctic-color": "#1AD5CA",
        "arctic-opacity-10": "rgba(26, 213, 202, 0.10)",
        "amethyst-color": "#7F35CD",
        "violet-color": "#7758B5",
        "violet-v2-color": "#8F77F3",
        "red-v2-color": "#FE5A0C",
        "violet-opacity-80": "rgba(127, 53, 205, 0.80)",
        "violet-opacity-10": "rgba(119, 88, 181, 0.10)",
        "blue-opacity-10": "rgba(59, 130, 246, 0.10)",
        "red-color": "#E73C17",
        "red-opacity-10": "rgba(231, 60, 23, 0.10)",
        "yellow-color": "#E79D00",
        "yellow-opacity-10": "rgba(231, 157, 0, 0.10)",
        "gray-opacity-10": "rgba(135, 135, 135, 0.10)",
        "black-opacity-80": "rgba(0, 0, 0, 0.80)",
        "black-opacity-70": "rgba(0, 0, 0, 0.70)",
        "black-opacity-60": "rgba(0, 0, 0, 0.60)",
        "black-opacity-50": "rgba(0, 0, 0, 0.50)",
        "black-opacity-40": "rgba(0, 0, 0, 0.40)",
      },
      borderRadius: {
        "custom-5px": "0.313rem",
        "custom-10px": "0.625rem",
      },
      textSize: {
        "custom-10px": "0.625rem",
      },
      padding: {
        "custom-15px": "0.938rem",
        "custom-18px": "1.125rem",
      },
      keyframes: {
        wiggle: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        slide: {
          "0%, ": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },

      animation: {
        animatedCard: "wiggle 9s linear infinite",
        animatedCardPused: "paused",
        secondAnimatedCard: "slide 9s infinite linear",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};

export default config;

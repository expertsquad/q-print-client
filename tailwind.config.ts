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
        clamp: "clamp(1rem, 5vw, 3rem)", // use it like this => [font-size:_clamp(2em,5vw,10em)]
      },
      boxShadow: {
        miniCardShadow: "0px 0px 15.958px 0px rgba(231, 60, 23, 0.10)",
        modalShadow: "0px 4px 30px 0px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};

export default config;

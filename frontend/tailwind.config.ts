import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      rufina: ['"Rufina"', "serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        twilightBlue: "#030352",
        twilightOrange: "#e85c25",
      },
    },
    // Presuming you need to explicitly define these for clarity or override
    fontWeight: {
      normal: "400", // Maps to font-normal
      bold: "700", // Maps to font-bold
    },
  },
  plugins: [],
};

export default config;

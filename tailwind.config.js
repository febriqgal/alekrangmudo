/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              50: "#fef2f3",
              100: "#fde6e7",
              200: "#fbd0d5",
              300: "#f7aab2",
              400: "#f27a8a",
              500: "#ea546c",
              600: "#d5294d",
              700: "#b31d3f",
              800: "#961b3c",
              900: "#811a39",
              950: "#48091a",
              DEFAULT: "#ea546c",
              foreground: "#fef2f3",
            },
          },
        },
      },
    }),
  ],
};
// --primary-100:#FF6600;
// --primary-200:#ff983f;
// --primary-300:#ffffa1;
// --accent-100:#F5F5F5;
// --accent-200:#929292;
// --text-100:#FFFFFF;
// --text-200:#e0e0e0;
// --bg-100:#1D1F21;
// --bg-200:#2c2e30;
// --bg-300:#444648;

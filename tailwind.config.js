/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0A192F",
          blue: "#112240",
          teal: "#64FFDA",
          cyan: "#00E5FF",
          light: "#CCD6F6",
          slate: "#8892B0"
        }
      },
    },
  },
  plugins: [],
};

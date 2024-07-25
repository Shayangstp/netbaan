/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const tailwindcssRtl = require("tailwindcss-rtl");

module.exports = withMT({
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssRtl],
});

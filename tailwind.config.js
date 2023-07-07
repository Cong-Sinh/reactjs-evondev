/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradien": `linear-gradient(
                86.88deg,
                #7d6aff 1.38%,
                #ffb86c 64.35%,
                #fc2872 119.91%
              )`,
      },
    },
  },
  plugins: [],
};

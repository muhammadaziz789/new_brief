module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        sm: "540px",
        md: "768px",
        lg: "992px",
        xl: "1440px",
        "2xl": "1536px",
      },
      colors: { main: "#05143C" },
    },
  },
  plugins: [],
};

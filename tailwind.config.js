/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "640px",
      lg: "768px",
      xl: "1140px",
      "2xl": "1280px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "2rem",
        lg: "4rem",
        xl: "1rem",
        "2xl": "2rem",
      },
    },
    extend: {
      colors: {
        primary: "#181818",
        secondary: "#DB4444",
        heading: "#222222",
        light: "#FAFAFA",
        text: "rgba(0, 0, 0, 0.5)",
        "light-green": "#00FF66",
        "border-line": "rgba(0, 0, 0, 0.4)",
        inputBg: "#F5F5F5",
        borderColor: "#E7E6EC",
        navIconBg: "#FAF6FE",
      },
      fontFamily: {
        inter: '"Inter", sans-serif',
      },
    },
  },
  plugins: [require("daisyui")],
};

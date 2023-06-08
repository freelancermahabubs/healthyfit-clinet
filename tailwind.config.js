/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f8c1ff",

          secondary: "#068402",

          accent: "#d5fc71",

          neutral: "#1c151e",

          "base-100": "#ffffff",

          info: "#5da0d0",

          success: "#32c898",

          warning: "#f09d0f",

          error: "#e67b6b",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

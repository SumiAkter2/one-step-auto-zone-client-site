/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f3f4f6",

          secondary: "#FF3811",

          accent: "#d1d5db",

          neutral: "#06b6d4",

          "base-100": "#FFFFFF",

          info: "#6b7280",

          success: "#facc15",

          warning: "#d97706",

          error: "#be123c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

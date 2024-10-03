/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.5rem", // Add extra small size (8px equivalent)
      },
      colors: {
        "custom-blue": "#6033E0",
        "btn-bg":"#4F2EAD"
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        conecta: {
          purple: "#6A0DAD",
          yellow: "#FFD700",
          ink: "#0F0F14"
        }
      },
      borderRadius: { '2xl': '1.25rem' },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.08)" }
    },
  },
  plugins: [],
};

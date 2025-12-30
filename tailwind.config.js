/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        fadeSlide: {
          "0%": { opacity: 0, transform: "translateX(-60px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slowZoom: {
          "0%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)" },
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
         "fade-slide": "fadeSlide 0.8s ease-out forwards",
        "slow-zoom": "slowZoom 8s ease-out forwards",
      },
    },
  },
  plugins: [],
}

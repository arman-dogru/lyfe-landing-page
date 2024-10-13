export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        customBlue: "rgb(6, 45, 96)",
        customElectric: "rgb(10, 90, 194)",
      },
      fontFamily: {
        sans: ["Poppins", "Gilroy", "Circular Std", "sans-serif"],
        maharlika: ["Maharlika", "sans-serif"],
        hkgrotesk: ["HkGrotesk", "sans-serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-80%)" },
        },
      },
      animation: {
        scroll: "scroll 50s linear infinite",
      },
    },
  },
  plugins: [],
};

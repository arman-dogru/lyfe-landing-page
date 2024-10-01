export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        customBlue: "rgb(6, 45, 96)",
        customElectric: "rgb(10, 90, 194)",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        circular: ['Circular Std', 'sans-serif'],
        gilroy: ['Gilroy', 'sans-serif'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 15s linear infinite',
      },
    },
  },
  plugins: [],
};

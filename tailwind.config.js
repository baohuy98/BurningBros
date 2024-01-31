module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    screens: {
      xxs: { 'max': '375px' },
      xs: '375px',
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
    },
    container: {
      screens: {
        xs: "425px",
        md: "768px",
        lg: "768px",
        xl: "1024px",
        "2xl": "1440px",
      },
    },
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      height: {
        100: "800px",
      },
      with: {
        101: '1000px'
      },
      lineClamp: {
        15: '15',
      },
    },
  },
  plugins: [
  ],
  corePlugins: {
    preflight: false,
  },
};

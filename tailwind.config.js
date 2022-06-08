module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
         DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      typography: {
        dark: {
          css: {
            color: 'white',
          },
        }
      }
    },
    variants: {
      typography: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,jsx,ts,tsx,module.css}',
    './components/**/*.{js,jsx,ts,tsx,module.css}',
    './styles/**/*.module.css',
    './pages/_app.tsx',
    './pages/_document.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
    container: {
      padding: '1rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    screens: {
      screen: {'raw': 'screen'},
      print: {'raw': 'print'},
      xsm: '500px',
      sm: '640px',
      md: '816px', // ex 768px
      lg: '1062px', // ex 1024px
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        main: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        tag: '1.0625rem', // 17px
        heading: '1.1875rem', // 19px
        body: '1.125rem', // 18px
      },
      lineHeight: {
        heading: '1.4',
        base: '1.45',
      },
      letterSpacing: {
        wider: '0.07em', // ex 0.05em
      },
      colors: {
        'warmgray': {
          50: '#FAF9F7',
          100: '#E8E6E1',
          200: '#D3CEC4',
          300: '#B8B2A9',
          400: '#A39E94',
          500: '#857F74',
          600: '#625D53',
          700: '#504A41',
          800: '#423D34',
          900: '#27241D'
        }
      },
      maxWidth: {
        'letter': '66.40625rem',
        'a4': '64.609375rem'
      },
      height: {
        'letter-col': '70.1875rem',
        'letter': '85.9375rem',
        'a4-col': '75.578125rem',
        'a4': '91.328125rem',
      },
      spacing: {
        '1.5': '0.35rem'
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: [],
};

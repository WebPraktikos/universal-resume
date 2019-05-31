const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    /* For Letter size */
    screens: {
      screen: {'raw': 'screen'},
      print: {'raw': 'print'},
      xsm: '500px',
      sm: '640px',
      md: '816px', // ex 768px
      lg: '1062.5px', // ex 1024px
      xl: '1280px',
    },
    /* For A4 size */
    // screens: {
    //   screen: {'raw': 'screen'},
    //   print: {'raw': 'print'},
    //   xsm: '500px',
    //   sm: '640px',
    //   md: '793.92px', // ex 768px
    //   lg: '1033.75px', // ex 1024px
    //   xl: '1280px',
    // },
    extend: {
      fontFamily: {
        main: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        label: '0.9375rem', // 15px
        tag: '1rem', // 16px
        heading: '1.125rem', // 18px
        body: '1.0625rem', // 17px
      },
      lineHeight: {
        heading: '1.4',
        base: '1.45',
      },
      letterSpacing: {
        wider: '0.07em', // ex 0.05em
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
        '0.2': '0.05rem',
        '0.5': '0.19rem',
        '1.5': '0.4rem',
        '4.5': '1.15rem',
        '5.5': '1.3rem',
        '9': '2.25rem',
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
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: [],
};

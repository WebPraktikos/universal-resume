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
    //   md: '793.700832px', // ex 768px
    //   lg: '1033.464625px', // ex 1024px
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
        normal: '1.45', // ex 1.5
      },
      letterSpacing: {
        wider: '0.07em', // ex 0.05em
      },
      maxWidth: {
        'letter': '66.40625rem',
        'a4': '64.609375rem'
      },
      height: {
        'letter': '85.9375rem',
        'letter-col': '72.1875rem',
        'letter-col-full': '77.9375rem',
        'a4': '91.350883rem',
        'a4-col': '77.600883rem',
        'a4-col-full': '83.350883rem',
      },
      spacing: {
        '0.2': '0.05rem',
        '0.5': '0.07rem',
        '1.5': '0.4rem',
        '4.2': '1.18rem',
        '4.5': '1.15rem',
        '5.5': '1.3rem',
        '7': '1.7rem',
        '9': '2.15rem',
        '14': '3.7rem',
      },
      colors: {
        gray: {
          '150': '#F2F6FA',
          '250': '#EDF1F5',
          ...defaultTheme.colors.gray
        }
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: [],
};

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    /* For Letter size */
    screens: {
      screen: {'raw': 'screen'},
      print: {'raw': 'print'},
      xsm: '500px',
      sm: '640px',
      md: '833px', // ex 768px
      lg: '1079.5px', // ex 1024px
      xl: '1280px',
    },
    /* For A4 size */
    // screens: {
    //   screen: {'raw': 'screen'},
    //   print: {'raw': 'print'},
    //   xsm: '500px',
    //   sm: '640px',
    //   md: '811px', // ex 768px
    //   lg: '1051px', // ex 1024px
    //   xl: '1280px',
    // },
    extend: {
      fontFamily: {
        main: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        '2sm': '0.9375rem', // 15px label
        base: '1rem', // 16px base
        m: '1.0625rem', // 17px body
        lg: '1.125rem', // 18px heading
      },
      lineHeight: {
        heading: '1.45',
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
        '0.7': '0.15rem',
        '1.5': '0.4rem',
        '4.2': '1.09rem',
        '4.5': '1.18rem',
        '5.5': '1.3rem',
        '7': '1.85rem',
        '9': '2.3rem',
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

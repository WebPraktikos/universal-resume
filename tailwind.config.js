const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    /* For Letter size */
    screens: {
      screen: {'raw': 'screen'},
      print: {'raw': 'print'},
      xsm: '500px',
      sm: '640px',
      md: '833px',
      lg: '1079.5px',
      xl: '1280px',
    },
    /* For A4 size */
    // screens: {
    //   screen: {'raw': 'screen'},
    //   print: {'raw': 'print'},
    //   xsm: '500px',
    //   sm: '640px',
    //   md: '811px',
    //   lg: '1051px',
    //   xl: '1280px',
    // },
    extend: {
      fontFamily: {
        main: ['Fira Sans', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        sm2: '0.9375rem', // 15px label
        base: '1rem', // 16px base
        md: '1.0625rem', // 17px body
        lg: '1.125rem', // 18px heading
      },
      lineHeight: {
        snugish: '1.4',
        normal: '1.45',
      },
      maxWidth: {
        'letter': '66.40625rem',
        'a4': '64.609375rem'
      },
      height: {
        'letter': '85.9375rem',
        'letter-col': '71.952937rem',
        'letter-col-full': '77.9375rem',
        'a4': '91.350883rem',
        'a4-col': '77.36632rem',
        'a4-col-full': '83.350883rem',
      },
      spacing: {
        '0.5': '0.07rem',
        '0.7': '0.2rem',
        '0.8': '0.22rem',
        '1.5': '0.4rem',
        '2.5': '0.67rem',
        '4.5': '1.18rem',
        '7': '1.6rem',
        '9': '2.3rem',
      },
      colors: {
        gray: {
          '250': 'hsl(210, 40%, 93.5%)',
          '550': 'hsl(218, 20%, 63%)',
          '650': 'hsl(216, 15%, 48%)',
          '750': 'hsl(214, 17%, 32%)',
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

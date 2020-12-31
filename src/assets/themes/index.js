import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    toggleBtn: {
      500: '#ff7134'
    },
    orange: '#ff7074',
    black: '#000000',
    lightGray: '#c2c2c2',
    mediumGray: '#c4c4c4',
    homeBoardGray: '#eaeaea',
    white: '#ffffff'
  },
  fonts: {},
  styles: {
    global: {
      html: { fontSize: '10px' }
    }
  },
  breakpoints: [],
  space: {},
  sizes: {
    toggleBtn: {
      h: '3.9rem',
      w: '5.9rem',
      fontSize: "lg",
      px: '32px'
    } // sizes 어떻게 적용하지..?
  }
});

export default theme;

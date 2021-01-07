import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    orange: '#ff7134',
    black: '#000000',
    lightGray: '#c2c2c2',
    mediumGray: '#c4c4c4',
    homeBoardGray: '#eaeaea',
    white: '#ffffff'
  },
  fonts: {},
  styles: {
    global: {
      html: { fontSize: '10px', LetterSpacing: -0.02em; }
    }
  },
  breakpoints: [],
  space: {},
  sizes: {}
});

export default theme;

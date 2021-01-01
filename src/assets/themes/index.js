import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Switch: {
      sizes: {
      },
    }
  },
  colors: {
    toggleBtn: {
      500: '#ff7134'
    },
    orange: '#ff7034',
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
  sizes: {}
});

export default theme;

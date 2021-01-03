import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../../assets/themes';
import { RecoilRoot } from 'recoil';
import Newtab from './Newtab';

export default () => {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Newtab />
      </ChakraProvider>
    </RecoilRoot>
  );
};

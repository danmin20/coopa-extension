import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../../assets/themes';
import { RecoilRoot } from 'recoil';
import Newtab from './Newtab';
import GlobalStyles from '../../assets/GlobalStyles';

export default () => {
  return (
    <RecoilRoot>
      <GlobalStyles />
        <Newtab />
    </RecoilRoot>
  );
};

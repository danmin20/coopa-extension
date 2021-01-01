import React from 'react';
import Newtab from './Newtab';
import {ChakraProvider} from '@chakra-ui/react';
import theme from '../../assets/themes';
import {RecoilRoot} from 'recoil';

export default () =>{
    return (
      <RecoilRoot>
        <ChakraProvider theme={theme}>
          <Newtab />
        </ChakraProvider>
      </RecoilRoot>
    );
}
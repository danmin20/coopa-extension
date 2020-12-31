import React from 'react';
import Newtab from './Newtab';
import {ChakraProvider} from '@chakra-ui/react';
import theme from '../../assets/themes';

export default () =>{
    return (
        <ChakraProvider theme={theme}>
            <Newtab />
        </ChakraProvider>
    )
}
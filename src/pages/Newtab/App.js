import React from 'react';
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

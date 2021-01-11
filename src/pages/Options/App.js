import React from 'react';
import { RecoilRoot } from 'recoil';
import Option from './Option';
import GlobalStyles from '../../assets/GlobalStyles';

export default () => {
  return (
    <RecoilRoot>
      <GlobalStyles />
      <Option />
    </RecoilRoot>
  );
};

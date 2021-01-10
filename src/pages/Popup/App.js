import React from 'react';
import { RecoilRoot } from 'recoil';
import Popup from './Popup';
import GlobalStyles from '../../assets/GlobalStyles';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyles />
      <Popup />
    </RecoilRoot>
  );
}

export default App;

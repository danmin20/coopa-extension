import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import theme from '../../assets/themes';
import { ThemeProvider } from 'styled-components';

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  window.document.querySelector('#app-container')
);

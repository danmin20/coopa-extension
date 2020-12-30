import React from 'react';
import logo from '../../assets/img/logo.svg';

const Popup = () => {
  const onClick = () => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true },
      tabs => {
        console.log(tabs);
        let url = tabs[0].url;
        console.log("url: " + url);
      });
  }

  return (
    <div className="App">
      <button onClick={onClick}>click</button>
    </div>
  );
};

export default Popup;

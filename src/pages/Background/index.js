/* global chrome */

import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';

console.log('This is the background page.');
console.log('Put the background scripts here.');

// chrome.browserAction.openPopup(popupView => {
//   console.log('click');
//   // chrome.tabs.sendMessage(tab.id, { message: 'load' });
//   chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
//     console.log(tabs);
//     let url = tabs[0].url;
//     console.log('url: ' + url);
//   });
// });

chrome.tabs.onUpdated.addListener((res)=>{
  console.log(res);
});
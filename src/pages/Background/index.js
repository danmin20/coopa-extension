/* global chrome */

import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';
import axios from 'axios';
import cookieAPI from '../../lib/api/cookieApi';

console.log('This is the background page.');
console.log('Put the background scripts here.');


const token = { 'x-access-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInVzZXJFbWFpbCI6InJ1cnVAZW1haWwuY29tIiwiaWF0IjoxNjA5Nzc1MDYyfQ.hkdbXr68HQ-667AmfXzIrWIuJMRM03hbQ_eBwrqJZVA" };

// let data = {
//   type: '',
//   title: '',
//   description: '',
//   url: '',
//   site_name: '',
//   image: '',
//   author: '',
//   "favicon": ''
// };


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  let data = {
    "title": '',
    "content": '',
    "link": '',
    "thumbnail": '',
    "favicon": '',
    "provider": '',
  };
  if (message.popupOpen) {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
      const url = tabs[0].url;
      data.link = url;
      console.log('url: ' + url);
      const HTML = returnHTML(url);
      HTML.then(function (html) {
        findOgTag(html, 'image', data);
        findOgTag(html, 'title', data);
        findOgTag(html, 'description', data);
        findOgTag(html, 'type', data);
        findOgTag(html, 'site_name', data);
        findAuthor(html, data);
        findFavicon(html, url, data);
        console.log(data);
        console.log(data.thumbnail);
        console.log(data.favicon);
        cookieAPI.postCookie(token, data);
        // console.log(res);
      });
    });
  }
});

const returnHTML = async url => {
  let HTML = await getHTML(url);
  return HTML.data;
};

const getHTML = async url => {
  try {
    return await axios.get(url);
  } catch (error) {
    console.log(error);
  }
};

const findOgTag = (html, ogTag, data) => {
  // console.log('og:'+ogTag);
  let location = html.indexOf(`"og:` + ogTag + `"`);
  if (location != -1) {
    let start = html.indexOf(`content=`, location);
    if (start != -1) {
      let end = html.indexOf(`"`, start + 9);
      switch (ogTag) {
        case 'image':
          data.thumbnail = html.substring(start + 9, end);
          if(data.thumbnail[0] == '/' && data.thumbnail[1] == '/'){
            data.thumbnail = 'http:' + data.thumbnail;
          }
          break;
        // case 'type':
        //   data.type = html.substring(start + 9, end);
        //   break;
        case 'title':
          data.title = html.substring(start + 9, end);
          break;
        case 'description':
          data.content = html.substring(start + 9, end);
          break;
        // case 'site_name':
        //   data.site_name = html.substring(start + 9, end);
        //   break;
        default:
          console.log('default');
      }
    }
  }
};

const findAuthor = (html, data) => {
  let location = html.indexOf(`<meta name="author"`);
  if (location != -1) {
    let start = html.indexOf(`content=`, location);
    if (start != -1) {
      let end = html.indexOf(`"`, start + 9);
      data.provider = html.substring(start + 9, end);
    }
  }
};

const findFavicon = (html, url, data) => {
  let location = html.indexOf(`<link rel="shortcut icon`);
  if(location == -1){
    location = html.indexOf(`<link rel="apple-touch-icon`);
  }
  if (location != -1) {
    let start = html.indexOf(`href=`, location);
    if (start != -1) {
      let end = html.indexOf(`"`, start + 6);
      let favicon_url = html.substring(start + 6, end);
      if (favicon_url[0] == '/' && favicon_url[1] != '/') {
        favicon_url = sliceURL(url) + favicon_url;
      }
      if (favicon_url[0] == '/' && favicon_url[1] == '/'){
        favicon_url = 'http:' + favicon_url;
      }
      data.favicon = favicon_url;
    }
  }
};

const sliceURL = url => {
  let start = url.indexOf('/');
  let end = url.indexOf('/', start + 2);
  let slice_url = url.substring(0, end);
  return slice_url;
};

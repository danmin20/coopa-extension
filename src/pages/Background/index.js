/* global chrome */

import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';
import axios from 'axios';

console.log('This is the background page.');
console.log('Put the background scripts here.');

// recoil에 적용하기
var data = {
  type: "",
  title: "",
  description: "",
  url: "",
  site_name: "",
  image: "",
  author: "",
  favicon: "",
};

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  if(message.popupOpen){
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
      console.log(tabs);
      const url = tabs[0].url;
      data.url = url;
      console.log('url: ' + url);
      const HTML = returnHTML(url);
      HTML.then(function(html){
        findOgTag(html, "image");
        findOgTag(html, "title");
        findOgTag(html, "description");
        findOgTag(html, "type");
        findOgTag(html, "site_name");
        findAuthor(html);
        findFavicon(html, url);
        console.log(data);
        console.log(data.image);
        console.log(data.favicon);
      })
    });
  }
})


const returnHTML = async (url) => {
  let HTML = await getHTML(url);
  return HTML.data;
}

const getHTML = async (url) => {
  try{
    return await axios.get(url);
  }catch(error){
    console.log(error);
  }
}

const findOgTag = (html, ogTag) => {
  // console.log('og:'+ogTag);
  let location = html.indexOf(`"og:`+ogTag+`"`);
  if(location != -1){
    let start = html.indexOf(`content=`, location);
    if(start != -1){
    let end = html.indexOf(`"`, start+9);
      switch(ogTag){
        case 'image':
          data.image = html.substring(start+9, end);
          break;
        case 'type':
          data.type = html.substring(start+9, end);
          break;
        case 'title':
          data.title = html.substring(start+9, end);
          break;
        case 'description':
          data.description = html.substring(start+9, end);
          break;
        case 'site_name':
          data.site_name = html.substring(start+9, end);
          break;
        default:
          console.log("default");
      }
    }
  }
}


const findAuthor = (html) => {
  let location = html.indexOf(`<meta name="author"`);
  if(location != -1){
    let start = html.indexOf(`content=`, location);
    if(start != -1){
      let end = html.indexOf(`"`, start+9);
      data.author = html.substring(start+9, end);
    }
  }
}

const findFavicon = (html, url) => {
  let location = html.indexOf(`<link rel="apple-touch-icon"`);
  if(location != -1){
    let start = html.indexOf(`href=`, location);
    if(start != -1){
      let end = html.indexOf(`"`, start+6);
      let favicon_url = html.substring(start+6, end);
      if(favicon_url[0] == '/' && favicon_url[1] != '/'){
        favicon_url = sliceURL(url) + favicon_url;
      }
      data.favicon = favicon_url;
    }
  }
}

const sliceURL = (url) => {
  let start = url.indexOf("/");
  let end = url.indexOf("/", start+2);
  let slice_url = url.substring(0, end);
  return slice_url;
}


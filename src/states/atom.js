import { atom } from 'recoil';
// import Img from '../assets/img/img_sample.svg';
// import AuthorImg from '../assets/img/img_author.svg';

export const CookieState = atom({
  key: 'CookieState',
  default: []
});

export const ClipperPageNumState = atom({
  key: 'ClipperPageNumState',
  default: 0
});

export const isClickNextPageState = atom({
  key: 'isClickNextPageState',
  default: false
});

export const listSelectState = atom({
  key: 'listSelectState',
  value: false
});

export const isCheckedState = atom({
  key: 'isCheckedState',
  default: false
});

export const DirState = atom({
  key: 'DirState',
  deafult: []
});

export const WebClipperDirState = atom({
  key: 'WebClipperDirState',
  default: []
});

export const SearchState = atom({
  key: 'SearchState',
  default: ''
});

export const SelectState = atom({
  key: 'SelectState',
  default: 'cookie'
});

export const ShareClickState = atom({
  key: 'ShareClickState',
  default: false
});

export const DeleteCookieClickState = atom({
  key: 'DeleteClickState',
  default: false
});

export const LoginState = atom({
  key: 'LoginState',
  default: true
});

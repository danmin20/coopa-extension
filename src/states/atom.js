import { atom } from 'recoil';

export const CookieState = atom({
  key: 'CookieState',
  default: []
});

export const DirState = atom({
  key: 'DirState',
  deafult: []
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

export const DelToastState = atom({
  key: 'DelToastState',
  default: false
});

export const createDirClickState = atom({
  key: 'CreateDirClickState',
  default: false
});

export const updateDirClickState = atom({
  key: 'UpdateDirClickState',
  default: false
});

export const DirCardHoverState = atom({
  key: 'DirCardHoverState',
  default: false
});

export const NewTabToggleState = atom({
  key: 'NewTabToggleState',
  default: true
});
export const OnboardingState = atom({
  key: 'OnboardingState',
  default: false
});

export const LoadingState = atom({
  key: 'LoadingState',
  default: true
});

export const PrepareModalState = atom({
  key: 'PrepareModalState',
  default: false
});

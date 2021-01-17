import { atom } from 'recoil';

// All cookies
export const CookieState = atom({
  key: 'CookieState',
  default: []
});

// All directories
export const DirState = atom({
  key: 'DirState',
  deafult: []
});

// For web clipper
export const ClipperPageNumState = atom({
  key: 'ClipperPageNumState',
  default: 0
});
export const SelectedListState = atom({
  key: 'SelectedListState',
  default: ''
});

// For search
export const SearchState = atom({
  key: 'SearchState',
  default: ''
});

// 뉴탭에서 쿠키인지 디렉토리인지
export const SelectState = atom({
  key: 'SelectState',
  default: 'cookie'
});

// For toast message
export const ShareClickState = atom({
  key: 'ShareClickState',
  default: false
});
export const DeleteCookieClickState = atom({
  key: 'DeleteClickState',
  default: false
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

// For login
export const LoginState = atom({
  key: 'LoginState',
  default: true
});

// For onboarding
export const OnboardingState = atom({
  key: 'OnboardingState',
  default: false
});

// ???
export const LoadingState = atom({
  key: 'LoadingState',
  default: true
});

// 컴포넌트 내 state로 변경하면 좋을 듯
export const isClickNextPageState = atom({
  key: 'isClickNextPageState',
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
export const PrepareModalState = atom({
  key: 'PrepareModalState',
  default: false
});

// export const listSelectState = atom({
//   key: 'listSelectState',
//   value: false
// });

// export const isCheckedState = atom({
//   key: 'isCheckedState',
//   default: false
// });

// export const WebClipperDirState = atom({
//   key: 'WebClipperDirState',
//   default: []
// });

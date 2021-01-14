import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { ClipperPageNumState, LoginState } from '../../states/atom';
import Finish from './Finish';
import Main from './Main';
import Directory from './Directory';
import MainNotLogin from './MainNotLogin';
// import Login from './Login';

export default () => {
  const [pageNum, setPageNum] = useRecoilState(ClipperPageNumState);
  const [isLogin, setIsLogin] = useRecoilState(LoginState);

  // chrome.storage.sync.get('isLogin', function (storage) {
  //     console.log(storage.isLogin);
  //     setIsLogin(storage.isLogin);
  //     console.log('after',isLogin);
  // });

  // console.log()

  // const [isLogin, setIsLogin] = useRecoilState(LoginState);

  switch (pageNum) {
    case 0:
      return isLogin ? <Main /> : <MainNotLogin />;
    case 1:
      return <Directory />;
    case 2:
      return <Finish />;
    default:
      return <div>error</div>;
  }
  // return <Directory />
};

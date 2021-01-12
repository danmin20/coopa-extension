import React from 'react';
import { useRecoilState } from 'recoil';
import { ClipperPageNumState, LoginState } from '../../states/atom';
import Finish from './Finish';
import Main from './Main';
import Directory from './Directory';
import MainNotLogin from './MainNotLogin';
// import Login from './Login';

export default () => {
  const [pageNum, setPageNum] = useRecoilState(ClipperPageNumState);
  const isLogin = JSON.parse(localStorage.getItem('isLogin'));
  chrome.runtime.onMessageExternal.addListener(
    function(request, sender, sendResponse) {
      if (sender.url == blocklistedWebsite)
        return;  // don't allow this web page access
      if (request.isLogin)
        // openUrl(request.openUrlInEditor);
        console.log(request.isLogin);
  });


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

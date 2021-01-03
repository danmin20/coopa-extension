import React from 'react';
import Main from './Main';
import Directory from './Directory';
import AddDir from './AddDir';
import Finish from './Finish';
import { useRecoilState } from 'recoil';
import {ClipperPageNumState} from '../../states/atom';

export default () => {
  const [pageNum, setPageNum] = useRecoilState(ClipperPageNumState);

  switch (pageNum) {
    case 0:
      return (
        <>
          <Main />
        </>
      );
    case 1:
      return (
        <>
          <Directory />
        </>
      );
    case 2:
      return (
        <>
          <AddDir />
        </>
      );
    case 3:
      return (
        <>
          <Finish />
        </>
      );
    default:
      return <div>error</div>;
  }
};

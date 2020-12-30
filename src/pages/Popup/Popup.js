import React from 'react';
import style from 'styled-components';
import Main from './Main';
import Directory from './Directory';
import AddDir from './AddDir';
import Loading from './Loading';
import Finish from './Finish';
import { atom, selector, useRecoilState, DefaultValue } from 'recoil';

//const pageNum = 0;

// recoil atom
const PageNumber = atom({
  key: 'PageNumber',
  default: 1,
})


const Popup = () => {
  //const [pageNum, setPageNum] = useState(0);
  const [pageNum, setPageNum] = useRecoilState(PageNumber);
  
  switch(pageNum){
    case 0:
      return(
        <>
          <Main/>
        </>
      );
    case 1:
      return(
        <>
          <Directory/>
        </>
      );
    case 2:
      return(
        <>
          <AddDir/>
        </>
      );
    case 3:
      return(
        <>
          <Finish />
        </>
      );
    default:
      return(
        <div>
          error
        </div>
      );
  }
  // return(
  //   <>
  //    <Wrap/>
  //   </>
  // )
};

export default Popup;

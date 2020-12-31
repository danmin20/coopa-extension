import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Loading from './Loading';
import { atom, useRecoilState } from 'recoil';
import logo from '../../assets/img/logo.svg';
import down_arrow from '../../assets/img/down_arrow.svg';
import down_arrow_white from '../../assets/img/down_arrow_white';

// recoil atom
const PageNumber = atom({
  key: 'PageNumber',
  default: 0
});

const isClickNextPage = atom({
  key: 'isClickNextPage',
  default: false
});

const Main = () => {
  const onClick = () => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
      console.log(tabs);
      let url = tabs[0].url;
      console.log('url: ' + url);
    });
  };

  const [isBtnOneHover, setIsBtnOneHover] = useState(false);
  const [isBtnTwoHover, setIsBtnTwoHover] = useState(false);

  const handleBtnOneMouseOver = () => {
    setIsBtnOneHover(true);
  };

  const handleBtnTwoMouseOver = () => {
    setIsBtnTwoHover(true);
  };

  const handleBtnOneMouseLeave = () => {
    setIsBtnOneHover(false);
  };

  const handleBtnTwoMouseLeave = () => {
    setIsBtnTwoHover(false);
  };

  const [pageNum, setPageNum] = useRecoilState(PageNumber);
  const [isclickNextPage, setIsclickNextPage] = useRecoilState(isClickNextPage);

  const handleBtnOneClick = () => {
    setPageNum(1);
    setIsclickNextPage(true);
  };

  // 몇초간만 Loading 컴포넌트 return 하기
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading & !isclickNextPage) {
    return (
      <>
        <Loading />
      </>
    );
  } else {
    return (
      <>
        <Wrap>
          {/* <button onClick={onClick}>click</button> */}
          <LogoWrap>
            <LogoImg src={logo} />
            <Text>파킹했습니다!</Text>
          </LogoWrap>
          <BtnWrap>
            <BtnOne onMouseOver={handleBtnOneMouseOver} onMouseLeave={handleBtnOneMouseLeave} isHover={isBtnOneHover} onClick={handleBtnOneClick}>
              <BtnOneWrap>
                <BtnOneText isHover={isBtnOneHover}>디렉토리 선택</BtnOneText>
                <BtnOneArrow src={down_arrow} isHover={isBtnOneHover} />
                <BtnOneArrowHover src={down_arrow_white} isHover={isBtnOneHover} />
              </BtnOneWrap>
            </BtnOne>
            <BtnTwo onMouseOver={handleBtnTwoMouseOver} onMouseLeave={handleBtnTwoMouseLeave} isHover={isBtnTwoHover}>
              쿠키파킹으로 이동하기
            </BtnTwo>
          </BtnWrap>
        </Wrap>
      </>
    );
  }
};

export default Main;

const Wrap = styled.div`
  width: 36.1rem;
  height: 35.1rem;
  border-radius: 1.2rem;
  border: 1px solid black;
  background-color: #ffffff;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5.4rem;
`;

const Text = styled.div`
  width: 28.9rem;
  height: 4.5rem;
  font-weight: 500;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImg = styled.img`
  width: 7rem;
  height: 8.605rem;
`;

const BtnWrap = styled.div``;

const BtnOne = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 1.2rem;
  width: 32.2rem;
  height: 5.2rem;
  background-color: ${props => (props.isHover ? '#FF7034' : '#ffffff')};
  box-shadow: 0rem 0rem 1.2rem rgba(0, 0, 0, 0.13);
  margin-top: 1.6rem;
`;

const BtnOneWrap = styled.div`
  width: 28.9rem;
  height: 4.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const BtnOneText = styled.div`
  font-weight: 500;
  font-size: 1.6rem;
  color: ${props => (props.isHover ? '#ffffff' : '#000000')};
  font-weight: ${props => (props.isHover ? '700' : '500')};
`;

const BtnOneArrow = styled.img`
  display: ${props => (props.isHover ? 'none' : 'box')};
  width: 1.6rem;
  height: 0.988rem;
  position: relative;
  right: -28%;
`;

const BtnOneArrowHover = styled.img`
  display: ${props => (props.isHover ? 'box' : 'none')};
  width: 1.6rem;
  height: 0.988rem;
  position: relative;
  right: -28%;
`;

const BtnTwo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 1.2rem;
  width: 32.2rem;
  height: 5.2rem;
  background-color: ${props => (props.isHover ? '#FF7034' : '#ffffff')};
  color: ${props => (props.isHover ? '#ffffff' : '#000000')};
  font-size: 1.6rem;
  font-weight: ${props => (props.isHover ? '700' : '500')};
  box-shadow: 0rem 0rem 1.2rem rgba(0, 0, 0, 0.13);
  margin-top: 1.6rem;
`;

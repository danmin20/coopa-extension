import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Loading from './Loading';
import { useRecoilState } from 'recoil';
import logo from '../../assets/img/logo.svg';
import down_arrow from '../../assets/img/down_arrow.svg';
import down_arrow_white from '../../assets/img/down_arrow_white';
import { ClipperPageNumState, isClickNextPageState, isCheckedState } from '../../states/atom';

export default () => {
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

  const [pageNum, setPageNum] = useRecoilState(ClipperPageNumState);
  const [isclickNextPage, setIsclickNextPage] = useRecoilState(isClickNextPageState);

  const handleBtnOneClick = () => {
    setPageNum(1);
    setIsclickNextPage(true);
  };

  const handleBtnTwoClick = () => {
    window.open('newtab.html', '_blank');
  };

  // 몇초간만 Loading 컴포넌트 return 하기
  const [isLoading, setIsLoading] = useState(true);
  const [isChecked, setIsChecked] = useRecoilState(isCheckedState);

  const onChangeCb = e => {
    if (e.target.checked) {
      setIsChecked(true);
      console.log('checked!');
      chrome.storage.sync.set({ defaultnewtab: isChecked });
    } else {
      setIsChecked(false);
      console.log('unchecked!');
      chrome.storage.sync.set({ defaultnewtab: isChecked });
    }
  };

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading & !isclickNextPage) {
    return <Loading />;
  }

  return (
    <Wrap>
      {/* <button onClick={onClick}>click</button> */}
      <LogoWrap>
        <LogoImg src={logo} />
        <Text>파킹했어요!</Text>
      </LogoWrap>
      <BtnWrap>
        <BtnOne onMouseOver={handleBtnOneMouseOver} onMouseLeave={handleBtnOneMouseLeave} isHover={isBtnOneHover} onClick={handleBtnOneClick}>
          <BtnOneWrap>
            <BtnOneText isHover={isBtnOneHover}>디렉토리 선택</BtnOneText>
            <BtnOneArrow src={down_arrow} isHover={isBtnOneHover} />
            <BtnOneArrowHover src={down_arrow_white} isHover={isBtnOneHover} />
          </BtnOneWrap>
        </BtnOne>
        <BtnTwo onMouseOver={handleBtnTwoMouseOver} onMouseLeave={handleBtnTwoMouseLeave} onClick={handleBtnTwoClick} isHover={isBtnTwoHover}>
          홈으로 가기
        </BtnTwo>
      </BtnWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 36rem;
  height: 35.1rem;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.white};
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
  background-color: ${props => (props.isHover ? '#FF7134' : '#ffffff')};
  box-shadow: 0rem 0rem 1.2rem rgba(0, 0, 0, 0.13);
  margin-top: 1.6rem;
  transition-duration: 0.5s;
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
  color: ${props => (props.isHover ? ({ theme }) => theme.colors.white : ({ theme }) => theme.colors.black_2)};
  font-weight: 500;
  transition-duration: 0.2s;
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
  border: 0.2rem solid ${({ theme }) => theme.colors.cookieOrange};
  border-radius: 1rem;
  width: 32.2rem;
  height: 5.2rem;
  color: ${props => (props.isHover ? ({ theme }) => theme.colors.white : ({ theme }) => theme.colors.cookieOrange)};
  background-color: ${props => (props.isHover ? ({ theme }) => theme.colors.cookieOrange : ({ theme }) => theme.colors.white)};
  font-size: 1.6rem;
  font-weight: 500;
  box-shadow: ${props => (props.isHover ? '0rem 0rem 1.2rem rgba(0, 0, 0, 0.13)' : 'none')};
  margin-top: 1.6rem;
  transition-duration: 0.5s;
`;

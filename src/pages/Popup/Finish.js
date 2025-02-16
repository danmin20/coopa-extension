import React, { useState } from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
// recoil
import { LoginState, SelectedListState } from '../../states/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
// assets
import logo_notLogin from '../../assets/img/clipper_img_hello.svg';
import parkingmotion from '../../assets/img/cookieparking_parkingmotion.json';

export default () => {
  const [isHover, setIsHover] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(LoginState);
  const selectedList = useRecoilValue(SelectedListState);
  // const [isLogin, setIsLogin] = useRecoilState(LoginState);

  const handleBtnMouseOver = () => {
    setIsHover(true);
  };

  const handleBtnMouseLeave = () => {
    setIsHover(false);
  };

  const handleBtnClick = () => {
    window.open('newtab.html', '_blank');
  };

  const handleLogin = () => {
    window.open('https://www.cookieparking.com', '_blank');
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: parkingmotion,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Wrap>
      <LogoWrap isLogin={isLogin}>
        {isLogin ? <Lottie options={defaultOptions} width={'12rem'} height={'12rem'} isClickToPauseDisabled /> : <LogoImg src={logo_notLogin} />}
        <Text>{isLogin ? selectedList : '반가워요!'}</Text>
        <TextTwo>{isLogin ? '파킹했어요!' : ''}</TextTwo>
      </LogoWrap>
      <Btn isHover={isHover} onMouseMove={handleBtnMouseOver} onMouseLeave={handleBtnMouseLeave} onClick={isLogin ? handleBtnClick : handleLogin}>
        {isLogin ? '파킹랏으로 가기' : '쿠키를 모으러 가볼까요?'}
      </Btn>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 36rem;
  height: 35.1rem;
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
  margin-top: ${props => (props.isLogin ? '5rem' : '7.4rem')};
`;

const Text = styled.div`
  width: 28.9rem;
  height: 4rem;
  font-weight: 500;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 1.495rem; */
`;

const TextTwo = styled.div`
  width: 28.9rem;
  font-weight: 500;
  font-size: 1.8rem;
  color: #bababa;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImg = styled.img`
  width: 10rem;
  height: 10rem;
`;

const Btn = styled.div`
  cursor: pointer;
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
  margin-top: 4.8rem;
  transition-duration: 0.5s;
`;

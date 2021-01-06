import React from 'react';
import styled from 'styled-components';
import { atom, useRecoilState } from 'recoil';
import { useState } from 'react';
import logo from '../../assets/img/logo.svg';

export default () => {
  const [isHover, setIsHover] = useState(false);

  const handleBtnMouseOver = () => {
    setIsHover(true);
  };

  const handleBtnMouseLeave = () => {
    setIsHover(false);
  };

  const handleBtnClick = () => {
    window.open('newtab.html', '_blank');
  };

  return (
    <Wrap>
      <LogoWrap>
        <LogoImg src={logo} />
        <Text>유저 인터페이스</Text>
        <TextTwo>파킹했습니다!</TextTwo>
      </LogoWrap>
      <Btn isHover={isHover} onMouseMove={handleBtnMouseOver} onMouseLeave={handleBtnMouseLeave} onClick={handleBtnClick}>
        홈으로 가기
      </Btn>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 36.1rem;
  height: 35.1rem;
  border-radius: 1.2rem;
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
  margin-top: 6.6rem;
`;

const Text = styled.div`
  width: 28.9rem;
  height: 4rem;
  font-weight: 500;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.495rem;
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
  width: 7rem;
  height: 8.605rem;
`;

const Btn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 0.2rem solid #FF7134;
  border-radius: 1rem;
  width: 32.2rem;
  height: 5.2rem;
  background-color: ${props => (props.isHover ? '#FF7134' : '#ffffff')};
  color: ${props => (props.isHover ? '#FFFFFF' : '#FF7134')};
  font-size: 1.6rem;
  font-weight: 500;
  box-shadow: ${props => props.isHover ? '0rem 0rem 1.2rem rgba(0, 0, 0, 0.13)' : 'none'};
  margin-top: 4.8rem;
`;

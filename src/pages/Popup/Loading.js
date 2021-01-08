import React, { useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/logo.svg';

const Loading = () => {
  useEffect(() => {
    chrome.runtime.sendMessage({ popupOpen: true });
  }, []);

  return (
    <Wrap>
      <LogoWrap>
        <LogoImg src={logo} />
        <Text>쿠키 파킹 중..</Text>
      </LogoWrap>
    </Wrap>
  );
};

export default Loading;

const Wrap = styled.div`
  width: 36rem;
  height: 24rem;
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
  margin-top: 5.4rem;
`;

const LogoImg = styled.img`
  width: 7rem;
  height: 8.605rem;
`;

const Text = styled.div`
  width: 28.9rem;
  height: 4rem;
  font-weight: 500;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.79rem;
`;

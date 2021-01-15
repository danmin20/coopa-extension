import React, { useEffect } from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import parkingmotion from '../../assets/img/cookieparking_parkingmotion.json';
import { useRecoilState } from 'recoil';
import { LoadingState } from '../../states/atom';

const Loading = () => {
  const [isLoading, setIsLoading] = useRecoilState(LoadingState);

  useEffect(() => {
    chrome.runtime.sendMessage({ popupOpen: true });
    setInterval(()=>{
      setIsLoading(false);
    }, 1000);
  }, []);

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
      <LogoWrap>
        {/* <LogoImg src={logo} /> */}
        <Lottie options={defaultOptions} width={'12rem'} height={'12rem'} isClickToPauseDisabled/>
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
  margin-top: 3rem;
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

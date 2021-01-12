import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import OnbrdImg1 from '../assets/img/onbrd_img_step1.svg';
import OnbrdImg2 from '../assets/img/onbrd_img_step2.svg';
import OnbrdImg3 from '../assets/img/onbrd_img_step3.svg';
import OnbrdImg4 from '../assets/img/onbrd_img_step4.svg';

export default () => {
  const [isClose, setIsClose] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const handleCloseClick = () => {
    setIsClose(true);
    e.stopPropagation();
  };

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <>
      <Wrap>
        <ModalWrap>
          <Text>쿠키파킹 아이콘을 상단에 고정해요!</Text>
          <SliderContainer>
            <Carousel>{currentSlide}</Carousel>

            <ImgContainer ref={slideRef}>
              <Slide img={OnbrdImg1} />
              <Slide img={OnbrdImg2} />
              <Slide img={OnbrdImg3} />
              <Slide img={OnbrdImg4} />
            </ImgContainer>
          </SliderContainer>
          <BtnWrap>
            <CloseBtn onClick={handleCloseClick} isClose={isClose}>
              <p>그만볼래요</p>
            </CloseBtn>
            <Space width={'22.4rem'} />
            <PrevBtn onClick={prevSlide}>이전</PrevBtn>
            <NextBtn onClick={nextSlide}>다음</NextBtn>
          </BtnWrap>
        </ModalWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0%;
  left: 0%;
  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
`;

const ModalWrap = styled.div`
  box-sizing: border-box;
  width: 62rem;
  height: 52rem;
  border-radius: 1.6rem;
  background: #ffffff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  color: ${({ theme }) => theme.colors.black1};
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 5.4rem;
`;

const SliderContainer = styled.div`
  height: 34.3rem;
  display: flex;

  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록
`;

const Carousel = styled.div`
  margin-top: 2.4rem;
  margin-bottom: 3.5;
`;

const ImgContainer = styled.div``;

const Slide = styled.img`
  height: 100%;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Space = styled.div`
  width: ${props => props.width};
`;

const CloseBtn = styled.div`
  width: 13rem;
  cursor: pointer;
  height: 5.2rem;
  box-sizing: border-box;
  bottom: 4rem;

  p {
    /* text-decoration: underline; */
    color: ${({ theme }) => theme.colors.gray_5};
    font-size: 2rem;
    padding: 0.3rem;
    border-bottom: 0.1rem solid;
    margin: 1.2rem;
  }
`;

const PrevBtn = styled.div`
  cursor: pointer;
  width: 9rem;
  height: 5.2rem;
  background: ${({ theme }) => theme.colors.gray_2};
  color: ${({ theme }) => theme.colors.gray_6};
  border-radius: 1rem;
  font-style: normal;
  font-weight: 500;
  font-size: 2.1rem;
  line-height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NextBtn = styled.div`
  cursor: pointer;
  width: 9rem;
  height: 5.2rem;
  background: ${({ theme }) => theme.colors.cookieOrange};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  font-style: normal;
  font-weight: 500;
  font-size: 2.1rem;
  line-height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1.5rem;
`;

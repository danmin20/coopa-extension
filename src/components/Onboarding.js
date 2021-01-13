import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';
import OnbrdImg1 from '../assets/img/onbrd_img_step1.svg';
import OnbrdImg2 from '../assets/img/onbrd_img_step2.svg';
import OnbrdImg3 from '../assets/img/onbrd_img_step3.svg';
import OnbrdImg4 from '../assets/img/onbrd_img_step4.svg';
import { theme } from '../assets/themes/index';

export default () => {
  const [isClose, setIsClose] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const handleCloseClick = () => {
    setIsClose(true);
    e.stopPropagation();
  };
  const TOTAL_SLIDES = 3;
  const nextSlide = (e) => {
    e.stopPropagation();
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
  const closeHandler = () => {
    //modal 끄기
  }

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <>
      <Wrap>
        <ModalWrap>
          <TextContainer ref={slideRef}>
            {currentSlide == 0 && <Text>쿠키파킹 아이콘을 상단에 고정해요!!</Text>}
            {currentSlide == 1 && <Text>아이콘을 눌러 킵하고 싶은 콘텐츠를 파킹해요!</Text>}
            {currentSlide == 2 && <Text>나만의 콘텐츠 파킹랏을 친구에게 공유해봐요!</Text>}
            {currentSlide == 3 && <Text>환영합니다!</Text>}
          </TextContainer>
          <Carousel num={currentSlide}>
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
          </Carousel>
          <SliderContainer>

            <ImgContainer ref={slideRef}>
              <Slide src={OnbrdImg1} />
              <Slide src={OnbrdImg2} />
              <Slide src={OnbrdImg3} />
              <Slide src={OnbrdImg4} />
            </ImgContainer>
          </SliderContainer>
          {currentSlide != 3 ? (
            <BtnWrap>
              <CloseBtn onClick={handleCloseClick} isClose={isClose}>
                그만볼래요
            </CloseBtn>
              {/* <Space width={'22.4rem'} /> */}
              <MoveWrap>
                {currentSlide != 0 && <PrevBtn onClick={prevSlide}>이전</PrevBtn>}
                {currentSlide == 0 && <div className="emptyBtn" />}
                <NextBtn onClick={nextSlide}>다음</NextBtn>
              </MoveWrap>
            </BtnWrap>
          ) : (
              <StartBtn onClick={closeHandler}>쿠키파킹 시작하기</StartBtn>
            )}
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
const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  left: 50%;
`;
const Text = styled.div`
  width: 63rem;
  font-weight: bold;
  font-size: 2.4rem;
  text-align: center;
  margin-top: 5.4rem;
`;

const SliderContainer = styled.div`
  text-align:center;
  display: flex;
  flex-direction:column;
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록
`;

const Carousel = styled.div`
  display:flex;
  justify-content:center;
  padding-top: calc(25/630*100%);
  padding-bottom: calc(25/630*100%);
  .circle{
    margin-left: 1.2rem;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.gray_2};
  }

`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
`;

const Slide = styled.img`
  width: calc(366/630*100%);
  padding-left: 21%;
  margin-right: 21%;
`;

const BtnWrap = styled.div`
  display: flex;
  padding-top: 5rem;
  justify-content: space-between;
  align-items: center;
`;

const CloseBtn = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray_5};
  font-size: 2rem;
  text-decoration: underline;
  padding-right: 20rem;
`;

const MoveWrap = styled.div`
  display:flex;
  flex-direction:row;
  .emptyBtn{
    width:9rem;
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
const StartBtn = styled.button`
  display: flex;
  margin-top: 3rem;
  justify-content: space-between;
  align-items: center;

  padding-top: 1.8rem;
  padding-bottom: 1.8rem;
  padding-left:10.7rem;
  padding-right:10.7rem;
  border:none;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.cookieOrange};
  color: ${({ theme }) => theme.colors.white};
  &:active{
    border: none;
  }
`;
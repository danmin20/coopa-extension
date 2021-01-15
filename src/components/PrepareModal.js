import styled from 'styled-components';
import React, { useState } from 'react';
import img from '../assets/img/ready_img_meerkat.svg';
import { useSetRecoilState } from 'recoil';
import { PrepareModalState } from '../states/atom';

export default () => {
  const [isClose, setIsClose] = useState(false);
  const setPrepareModalState = useSetRecoilState(PrepareModalState);

  const handleClick = () => {
    setPrepareModalState(false);
    setIsClose(true);
  };

  const handleModalClick = e => {
    e.stopPropagation();
  };

  return (
    <>
      <Wrap isClose={isClose} onClick={handleClick} />
      <ModalWrap isClose={isClose} onClick={handleModalClick}>
        <DetailWrap>
          <Text>준비 중인 기능이에요!</Text>
          <Img src={img} />
        </DetailWrap>
        <BtnWrap>
          <Btn onClick={handleClick}>닫기</Btn>
        </BtnWrap>
      </ModalWrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 200;
  top: 0%;
  left: 0%;
  background: rgba(0, 0, 0, 0.5);
  display: ${props => (props.isClose ? 'none' : 'box')};
  flex-direction: column;
`;

const ModalWrap = styled.div`
  width: 55rem;
  height: 38.1rem;
  position: fixed;
  z-index: 300;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1.6rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: ${props => (props.isClose ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;
`;

const DetailWrap = styled.div`
  top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  font-size: 2.8rem;
  font-weight: 500;
  line-height: 3.6rem;
  color: ${({ theme }) => theme.colors.black_1};
  margin-bottom: 2.5rem;
  margin-top: 6rem;
`;

const Img = styled.img`
  width: 12.5rem;
  height: 16.9rem;
`;

const BtnWrap = styled.div`
  width: 55rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Btn = styled.div`
  cursor: pointer;
  position: relative;
  width: 9.8rem;
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
  right: 4rem;
`;

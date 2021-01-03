import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import back_arrow from '../../assets/img/back_arrow.svg';
import { ClipperPageNumState } from '../../states/atom';

export default () => {
  const [pageNum, setPageNum] = useRecoilState(ClipperPageNumState);
  const [isHover, setIsHover] = useState(false);

  let name, description;

  const handleBtnClick = () => {
    setPageNum(1);
  };

  const handleBackArrClick = () => {
    setPageNum(1);
  };

  const handleBtnMouseOver = () => {
    setIsHover(true);
  };

  const handleBtnMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Wrap>
      <HeadhWrap>
        <BackArrow onClick={handleBackArrClick} src={back_arrow} />
      </HeadhWrap>
      <MiddleWrap>
        <InputWrap>
          <InputText>디렉토리 이름*</InputText>
          <InputSpace num={1} value={name} />
        </InputWrap>
        <Space />
        <InputWrap>
          <InputText>메모</InputText>
          <InputSpace num={2} value={description} />
        </InputWrap>
      </MiddleWrap>
      <BottomWrap>
        <AddBtn isHover={isHover} onMouseMove={handleBtnMouseOver} onMouseLeave={handleBtnMouseLeave} onClick={handleBtnClick}>
          디렉토리 생성하기
        </AddBtn>
      </BottomWrap>
    </Wrap>
  );
};

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

const HeadhWrap = styled.div`
  width: 36.1rem;
  height: 4.1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.8rem;
  margin-bottom: 1.8rem;
`;

const BackArrow = styled.img`
  margin-right: 1.733rem;
  margin-left: 2.2rem;
`;

const MiddleWrap = styled.div`
  width: 36.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  top: 15%;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputText = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  color: #565656;
  margin-bottom: 0.8rem;
`;

const InputSpace = styled.input`
  width: 32.4rem;
  height: ${props => (props.num == 1 ? '3.7rem' : '7.3rem')};
  border: 0.1rem solid #d6cece;
  border-radius: 0.8rem;
`;

const BottomWrap = styled.div`
  width: 36.1rem;
  height: 9.8rem;
  border-radius: 1.2rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AddBtn = styled.div`
  width: 31.8rem;
  height: 4.8rem;
  border: ${props => (props.isHover ? 'none' : '0.2rem solid #333333;')};
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.6rem;
  font-weight: ${props => (props.isHover ? '700' : '500 ')};
  color: ${props => (props.isHover ? '#ffffff' : '#3d3d3d')};
  background-color: ${props => (props.isHover ? '#FF7034' : '#ffffff')};
  box-shadow: ${props => (props.isHover ? '0rem 0rem 1.2rem rgba(0, 0, 0, 0.13)' : 'none')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Space = styled.div`
  height: 1.8rem;
`;

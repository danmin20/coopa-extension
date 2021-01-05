import styled from 'styled-components';
import React, { useState } from 'react';

export default () => {
  // InputStr 나중에 서버->recoil에 저장된 데이터 값으로 수정!
  const [InputStr, setInputStr] = useState('기존 디렉토리 명');
  const [InputStrNum, setInputStrNum] = useState(InputStr.length);
  const [isDelHover, setIsDelHover] = useState(false);
  const [isCancleHover, setIsCancleHover] = useState(false);
  const [isFixHover, setIsFixHover] = useState(false);
  const [isClose, setIsClose] = useState(false);

  const handleClick = () => {
    setIsClose(true);
  };

  const handleDelClick = () => {
    // 디렉토리 삭제 추가하기
    setIsClose(true);
  };

  const handleFixClick = () => {
    // 디렉토리 수정 추가하기
    setIsClose(true);
  };

  const handleDelMouseMove = () => {
    setIsDelHover(true);
  };

  const handleDelMouseLeave = () => {
    setIsDelHover(false);
  };

  const handleCancleMouseMove = () => {
    setIsCancleHover(true);
  };

  const handleCancleMouseLeave = () => {
    setIsCancleHover(false);
  };

  const handleFixMouseMove = () => {
    setIsFixHover(true);
  };

  const handleFixMouseLeave = () => {
    setIsFixHover(false);
  };

  const ChangeInputStr = e => {
    setInputStr(e.target.value);
    setInputStrNum(e.target.value.length);
  };

  return (
    <>
      <Wrap onClick={handleClick} isClose={isClose} />
      <ModalWrap isClose={isClose}>
        <Text>디렉토리 수정하기</Text>
        <DetailWrap>
          <SmallText>디렉토리 이름</SmallText>
          <SmallText>{InputStrNum}/40</SmallText>
        </DetailWrap>
        <InputBox value={InputStr} type={'text'} onChange={ChangeInputStr} />
        <BtnWrap>
          <Btn isHover={isDelHover} onClick={handleDelClick} onMouseLeave={handleDelMouseLeave} onMouseMove={handleDelMouseMove}>
            삭제
          </Btn>
          <Space width={'28.6rem'} />
          <Btn isHover={isCancleHover} onClick={handleClick} onMouseLeave={handleCancleMouseLeave} onMouseMove={handleCancleMouseMove}>
            취소
          </Btn>
          <Space width={'1.5rem'} />
          <Btn isHover={isFixHover} onClick={handleFixClick} onMouseLeave={handleFixMouseLeave} onMouseMove={handleFixMouseMove}>
            수정
          </Btn>
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
  width: 65rem;
  height: 31.5rem;
  padding: 4.2rem 3.8rem;
  position: fixed;
  z-index: 300;
  background: #ffffff;
  border-radius: 1.4rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: ${props => (props.isClose ? 'none' : 'flex')};
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 2.8rem;
  font-weight: 500;
  line-height: 3.6rem;
  color: #333333;
  margin-bottom: 1.5rem;
`;

const DetailWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SmallText = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 3.6rem;
  color: #333333;
  margin-bottom: 0.6rem;
`;

const InputBox = styled.input`
  width: 57.3rem;
  height: 5.2rem;
  padding: 0.8rem 2.3rem;
  border: 0.1rem solid #333333;
  border-radius: 1.2rem;
  font-size: 2rem;
  font-weight: 400;
  outline: none;
  margin-bottom: 3.4rem;
  color: #333333;
`;

const BtnWrap = styled.div`
  width: 57.2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Btn = styled.div`
  width: 9.8rem;
  height: 5.2rem;
  background: ${props => (props.isHover ? '#FF7134' : '#F3F3F4')};
  color: ${props => (props.isHover ? 'white' : '#404040')};
  border-radius: 1rem;
  font-style: normal;
  font-weight: 500;
  font-size: 2.1rem;
  line-height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Space = styled.div`
  width: ${props => props.width};
`;

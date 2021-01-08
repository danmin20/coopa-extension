import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import useInput from '../hooks/useInput';
import dirApi from '../lib/api/directoryApi';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { DirState, createDirClickState } from '../states/atom';
const token = {
  'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6IndqZGRuMDcyOEBuYXZlci5jb20iLCJpYXQiOjE2MDkzMzI1ODB9.T_GvqbwUHtBfjqgZj_Uki2R4woTN1djhf71lAabnOm4'
};

export default ({ setIsOpenCreateDir }) => {
  const [dirState, setDirState] = useRecoilState(DirState);
  const setCreateDirClick = useSetRecoilState(createDirClickState);
  const [isCancleHover, setIsCancleHover] = useState(false);
  const [isFixHover, setIsFixHover] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const modalInput = useInput('');

  const handleClick = () => {
    setIsClose(true);
  };

  const handleFixClick = async () => {
    let body = {
      name: modalInput.value,
      description: '설명은 없어질 예정'
    };
    const res = await dirApi.postDir(token, body);
    body = {
      directory: {
        cookieCnt: 0,
        id: res.data.directoryId,
        name: modalInput.value
      },
      thumbnail: null
    };
    const newDirList = dirState.concat(body);
    setDirState(newDirList);
    setCreateDirClick(true);
    setIsClose(true);
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

  useEffect(() => {
    isClose && setIsOpenCreateDir(false);
  }, [isClose]);

  return (
    <>
      <Wrap onClick={handleClick} isClose={isClose} />
      <ModalWrap isClose={isClose}>
        <Text>디렉토리 만들기</Text>
        <DetailWrap>
          <SmallText>디렉토리 이름</SmallText>
          <SmallText>{modalInput.value.length}/40</SmallText>
        </DetailWrap>
        <InputBox value={modalInput.value} type="text" onChange={modalInput.onChange} />
        <BtnWrap>
          <Space width={'28.6rem'} />
          <Btn isHover={isCancleHover} onClick={handleClick} onMouseLeave={handleCancleMouseLeave} onMouseMove={handleCancleMouseMove}>
            취소
          </Btn>
          <Space width={'1.5rem'} />
          <Btn isHover={isFixHover} onClick={handleFixClick} onMouseLeave={handleFixMouseLeave} onMouseMove={handleFixMouseMove}>
            생성
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
  cursor: pointer;
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

// 디렉토리 만들기 모달 -> 디렉토리가 생성되었습니다.

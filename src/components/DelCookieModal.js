import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { DirState, SelectState, DeleteCookieClickState, CookieState } from '../states/atom';
import dirApi from '../lib/api/directoryApi';
import cookieAPI from '../lib/api/cookieApi';

const token = {
  'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6IndqZGRuMDcyOEBuYXZlci5jb20iLCJpYXQiOjE2MDkzMzI1ODB9.T_GvqbwUHtBfjqgZj_Uki2R4woTN1djhf71lAabnOm4'
};

export default ({ setIsDelOpen, id }) => {
  const [dirState, setDirState] = useRecoilState(DirState);
  const selectState = useRecoilValue(SelectState);
  const [isClose, setIsClose] = useState(false);
  const [isDelHover, setIsDelHover] = useState(false);
  const [isCancleHover, setIsCancleHover] = useState(false);
  const [DeleteCookieClick, setDeleteCookieClick] = useRecoilState(DeleteCookieClickState);
  const [allCookie, setAllCookie] = useRecoilState(CookieState);

  const handleClick = () => {
    setIsClose(true);
  };

  const handleCookieDelClick = async () => {
    const newCookie = allCookie.filter(c => c.id !== cookies.id);
    setAllCookie(newCookie);

    await cookieAPI.deleteCookies(token, cookies.id);
    setDeleteCookieClick(true);
    setIsClose(true);
  };

  const handleDelClick = async () => {
    // for optimistic ui
    const newDirList = dirState.filter(dir => dir.id !== id);
    setDirState(newDirList);
    // api call
    await dirApi.deleteDir(token, id);
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

  useEffect(() => {
    // 모달이 닫힐 때 마다 모달 open state를 변경해주기 위함
    // isClose && setIsDelOpen(false);
    return () => {
      setIsDelOpen(false);
    };
  }, [isClose]);

  return (
    <>
      <Wrap onClick={handleClick} isClose={isClose} />
      <ModalWrap isClose={isClose}>
        <Text>{selectState === 'cookie' ? '쿠키 삭제' : '디렉토리 삭제'}</Text>
        <SmallText>이 {selectState === 'cookie' ? '쿠키' : '디렉토리'}를 정말 삭제하시겠어요?</SmallText>
        <BtnWrap>
          <Btn onClick={handleClick} isHover={isCancleHover} onMouseMove={handleCancleMouseMove} onMouseLeave={handleCancleMouseLeave}>
            취소
          </Btn>
          <Btn onClick={selectState === 'cookie' ? handleCookieDelClick : handleDelClick} isHover={isDelHover} onMouseMove={handleDelMouseMove} onMouseLeave={handleDelMouseLeave}>
            삭제
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
  width: 55rem;
  height: 24.9rem;
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
  margin-bottom: 1rem;
`;

const SmallText = styled.div`
  font-size: 2rem;
  font-weight: normal;
  line-height: 3.6rem;
  color: #333333;
  margin-bottom: 3.1rem;
`;

const BtnWrap = styled.div`
  width: 47.2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Btn = styled.div`
  cursor: pointer;
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
  margin-left: 1.5rem;
`;

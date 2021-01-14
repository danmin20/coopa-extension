import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { DirState, SelectState, DeleteCookieClickState, CookieState, DelToastState } from '../states/atom';
import dirApi from '../lib/api/directoryApi';
import cookieAPI from '../lib/api/cookieApi';

const token = {
  'x-access-token': localStorage.getItem('userToken')
};

export default ({ setIsDelOpen, id }) => {
  const selectState = useRecoilValue(SelectState);
  const setDelToastState = useSetRecoilState(DelToastState);
  const [dirState, setDirState] = useRecoilState(DirState);
  const [isClose, setIsClose] = useState(false);
  const [isDelHover, setIsDelHover] = useState(false);
  const [isCancleHover, setIsCancleHover] = useState(false);
  const setDeleteCookieClick = useSetRecoilState(DeleteCookieClickState);
  const [allCookie, setAllCookie] = useRecoilState(CookieState);

  const handleClick = e => {
    e.stopPropagation();
    setIsClose(true);
  };

  const handleCookieDelClick = async e => {
    e.stopPropagation();
    const newCookie = allCookie.filter(c => c.id !== id);
    setAllCookie(newCookie);

    await cookieAPI.deleteCookies(token, id);
    setDeleteCookieClick(true);
    setIsClose(true);
  };

  const handleDelClick = async e => {
    e.stopPropagation();
    // api call
    await dirApi.deleteDir(token, id);
    const newDirList = dirState.filter(dir => dir.id !== id);
    setDirState(newDirList);
    setIsClose(true);
    setDelToastState(true);
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

  const handleModalClick = (e) => {
    e.stopPropagation();
  }

  useEffect(() => {
    return () => {
      setIsDelOpen(false);
    };
  }, [isClose]);

  return (
    <>
      <Wrap onClick={handleClick} isClose={isClose} />
      <ModalWrap isClose={isClose} onClick={handleModalClick}>
        <Text>{selectState === 'cookie' ? '쿠키 삭제' : '디렉토리 삭제'}</Text>
        <SmallText> {selectState === 'cookie' ? '이 쿠키를 정말 삭제하시겠어요?' : '포함된 모든 쿠키가 영구 삭제됩니다. 삭제하시겠어요?'}</SmallText>
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
  box-sizing: border-box;
  width: 55rem;
  height: 24.9rem;
  padding: 4.2rem 3.8rem;
  position: fixed;
  z-index: 300;
  background: ${({ theme }) => theme.colors.white};
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
  color: ${({ theme }) => theme.colors.black_1};
  margin-bottom: 1rem;
`;

const SmallText = styled.div`
  font-size: 2rem;
  font-weight: normal;
  line-height: 3.6rem;
  color: ${({ theme }) => theme.colors.black_1};
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
  background: ${props => (props.isHover ? ({ theme }) => theme.colors.cookieOrange : ({ theme }) => theme.colors.gray_2)};
  color: ${props => (props.isHover ? ({ theme }) => theme.colors.white : '#404040')};
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

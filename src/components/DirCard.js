import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import cookieIcon from '../assets/img/cookie_icon.svg';
import cookieIconW from '../assets/img/cookie_icon_white.svg';
import updateDirIcon from '../assets/img/update_dir_icon.svg';
import DirFixModal from '../components/DirFixModal';
import DelCookieModal from '../components/DelCookieModal';
import ToastMsg from '../components/ToastMsg';
import { DelToastState, updateDirClickState, DirCardHoverState } from '../states/atom';
import { useRecoilValue, useRecoilState } from 'recoil';

export default ({ dir }) => {
  const [DirCardHover, setDirCardHover] = useRecoilState(DirCardHoverState);
  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);
  const delToast = useRecoilValue(DelToastState);
  const updateDirClick = useRecoilValue(updateDirClickState);

  const handleBtnMouseOver = () => {
    setIsHover(true);
  };
  const handleBtnMouseLeave = () => {
    setIsHover(false);
  };
  const handleClickUpdateIcon = e => {
    e.stopPropagation();
    setIsOpen(true);
    e.stopPropagation();
  };

  useEffect(
    function () {
      setIsHover(false);
    },
    [DirCardHover]
  );

  useEffect(
    function () {
      setDirCardHover(false);
    },
    [isHover]
  );

  const handleDirClick = param => {
    window.open(`https://cookieparking.netlify.app/directory/${param}`, '_self');
  };

  return (
    <>
      <Container thumbnail={dir.thumbnail} isHover={isHover} onMouseEnter={handleBtnMouseOver} onMouseLeave={handleBtnMouseLeave}>
        <div className="content">
          <div className="content__title">{dir.directory.name}</div>
          <div className="content__num">
            <CookieIcon isHover={isHover} onMouseOver={handleBtnMouseOver} onMouseLeave={handleBtnMouseOver} />
            <div>{dir.directory.cookieCnt}개</div>
          </div>
        </div>
        <UpdateIcon src={updateDirIcon} onMouseOver={handleBtnMouseOver} onMouseLeave={handleBtnMouseOver} isHover={isHover} onClick={handleClickUpdateIcon} />
      </Container>
      {isOpen && <DirFixModal setIsOpen={setIsOpen} setIsDelOpen={setIsDelOpen} dir={dir} />}
      {isDelOpen && <DelCookieModal isDelOpen={isDelOpen} setIsDelOpen={setIsDelOpen} id={dir.directory.id} />}
      {updateDirClick && <ToastMsg msg="디렉토리를 수정했어요!" />}
      {delToast && <ToastMsg msg="쿠키가 삭제되었어요!" />}
    </>
  );
};

const CookieIcon = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 0.7rem;
  background: url(${props => (props.isHover ? cookieIconW : cookieIcon)}) center center / cover no-repeat;
`;

const Container = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 0;
  padding-top: calc(160 / 360 * 100%);
  background-color: ${({ theme }) => theme.colors.gray_2};
  border-radius: 1.2rem;
  color: ${({ theme }) => theme.colors.black_2};
  z-index: 1;
  ${props =>
    props.isHover &&
    css`
      background: rgba(0, 0, 0, 0.7);
      color: ${({ theme }) => theme.colors.white};
    `}
  ${props =>
    props.thumbnail !== null &&
    css`
      ::after {
        content: '';
        display: block;
        position: absolute;
        border-radius: 1.2rem;
        top: 0;
        left: 0;
        background: url(${props => props.thumbnail}) center center / cover no-repeat;
        width: 100%;
        height: 100%;
        opacity: 0.15;
        z-index: -1;
      }
    `}
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 3.6rem;
    letter-spacing: -0.02em;
    &__title {
      white-space: pre;
      font-size: 2.4rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      text-overflow: ellipsis;
    }
    &__num {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
    }
  }
`;

const UpdateIcon = styled.img`
  display: ${props => (props.isHover ? 'block' : 'none')};
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  width: 3rem;
  height: 3rem;
`;

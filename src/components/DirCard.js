import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import theme from '../assets/themes';
import cookieIcon from '../assets/img/cookie_icon.svg';
import cookieIconW from '../assets/img/cookie_icon_white.svg';
import updateDirIcon from '../assets/img/update_dir_icon.svg';
import DirFixModal from '../components/DirFixModal';
import DelCookieModal from '../components/DelCookieModal';
import ToastMsg from '../components/ToastMsg';
import { DelToastState, updateDirClickState } from '../states/atom';
import { useRecoilValue } from 'recoil';

export default ({ dir }) => {
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
  const handleClickUpdateIcon = () => {
    setIsOpen(true);
  };

  const handleDirClick = param => {
    window.open(`https://cookieparking.netlify.app/directory/${param}/${param}`, '_self');
  };

  return (
    <Container onClick={() => handleDirClick(dir.directory.id)} isHover={isHover} onMouseEnter={handleBtnMouseOver} onMouseLeave={handleBtnMouseLeave}>
      <DirectoryCard thumbnail={dir.thumbnail}>
        <div className="content">
          <div className="content__title">{dir.directory.name.length < 13 ? dir.directory.name : dir.directory.name.slice(0, 12) + '...'}</div>
          <div className="content__num">
            <CookieIcon isHover={isHover} onMouseOver={handleBtnMouseOver} onMouseLeave={handleBtnMouseOver} />
            <div>{dir.directory.cookieCnt}개</div>
          </div>
        </div>
      </DirectoryCard>
      <UpdateIcon src={updateDirIcon} onMouseOver={handleBtnMouseOver} onMouseLeave={handleBtnMouseOver} isHover={isHover} onClick={handleClickUpdateIcon} />
      {isOpen && <DirFixModal setIsOpen={setIsOpen} setIsDelOpen={setIsDelOpen} dir={dir} />}
      {updateDirClick && <ToastMsg msg="디렉토리를 수정했어요!" />}
      {isDelOpen && <DelCookieModal isDelOpen={isDelOpen} setIsDelOpen={setIsDelOpen} id={dir.directory.id} />}
      {delToast && <ToastMsg msg="쿠키가 삭제되었어요!" />}
    </Container>
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 0;
  padding-top: calc(160 / 360 * 100%);
  background-color: #f3f3f3;
  border-radius: 1.2rem;
  color: ${theme.colors.black};
  ${props =>
    props.isHover &&
    css`
      background: rgba(0, 0, 0, 0.7);
      color: ${theme.colors.white};
    `}
`;

const DirectoryCard = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 0;
  padding-bottom: calc(160 / 360 * 100%);
  border-radius: 1.2rem;
  ::after {
    content: '';
    position: absolute;
    width: 100%;
    background: url(${props => props.thumbnail}) center center/ cover no-repeat;
    border-radius: 1.2rem;
    opacity: 0.85;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 500;
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
  position: relative;
  bottom: 4rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
`;

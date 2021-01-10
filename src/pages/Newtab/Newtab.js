import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import AllCookies from '../../components/AllCookies';
import Directory from '../../components/Directory';
import theme from '../../assets/themes';
import Switch from '../../components/Switch';
import Header from '../../components/Header';
import HomeBoard from '../../components/HomeBoard';
import { useRecoilState, useRecoilValue } from 'recoil';
import { SelectState, ShareClickState, DeleteCookieClickState, createDirClickState } from '../../states/atom';
import DirCreateModal from '../../components/DirCreateModal';
import ToastMsg from '../../components/ToastMsg';
import helpPopup from '../../assets/img/cookies_img_help.svg';

export default () => {
  const [selectState, setSelectState] = useRecoilState(SelectState);
  const ShareClick = useRecoilValue(ShareClickState);
  const createDirClick = useRecoilValue(createDirClickState);
  const DeleteCookieClick = useRecoilValue(DeleteCookieClickState);
  const [isSearched, setIsSearched] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenCreateDir, setIsOpenCreateDir] = useState(false); // 새 디렉토리 만들기 모달
  const [isHover, setIsHover] = useState(false);

  const handleTab = tab => {
    if (tab === 'cookie') setSelectState('cookie');
    else setSelectState('directory');
  };
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const handleCreateDir = async () => {
    setIsOpenCreateDir(true);
  };
  const onToggleSwitch = e => {
    if (e.target.checked) setIsToggled(true);
    else setIsToggled(false);
  };

  return (
    <div className="container">
      <Header isSearched={isSearched} setIsSearched={setIsSearched} />
      <HomeBoard setIsSearched={setIsSearched} isSearched={isSearched} />
      {isSearched && <Shadow />}
      <ContentsHeader isSearched={isSearched} selected>
        <TabBtn selectState={selectState === 'cookie'} onClick={() => handleTab('cookie')}>
          {isSearched ? 'Cookies' : 'All cookies'}
        </TabBtn>
        <TabBtn style={{ marginLeft: '2rem' }} selectState={selectState === 'directory'} onClick={() => handleTab('directory')}>
          Directory
        </TabBtn>
        <PopupHelp isHover={isHover} src={helpPopup} alt="help-popup"></PopupHelp>
        <div style={{ marginLeft: 'auto' }}>
          {!isSearched &&
            (selectState === 'cookie' ? (
              <div className="toggle">
                <div className="toggle__help" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  ?
                </div>
                <div className="toggle__title">안 읽은 쿠키 모아보기</div>
                <span style={{ marginLeft: '15px' }}>
                  <Switch onChange={onToggleSwitch} />
                </span>
              </div>
            ) : (
              <div className="dirbtn" onClick={handleCreateDir}>
                <div className="dirbtn__desc">+ 새 디렉토리 만들기</div>
              </div>
            ))}
        </div>
      </ContentsHeader>
      <Contents>
        {selectState === 'cookie' ? <AllCookies isSearched={isSearched} isToggled={isToggled} /> : <Directory isSearched={isSearched} />}
        {isOpenCreateDir && <DirCreateModal setIsOpenCreateDir={setIsOpenCreateDir} />}
        {createDirClick && <ToastMsg msg="디렉토리를 생성했어요!" />}
      </Contents>
      {ShareClick && <ToastMsg msg="링크가 복사되었어요!" />}
      {DeleteCookieClick && <ToastMsg msg="쿠키를 삭제했어요!" />}
    </div>
  );
};

const PopupHelp = styled.img`
  display: ${props => (props.isHover ? 'block' : 'none')};
  position: absolute;
  top: -150%;
  right: 6.35%;
`;

const Contents = styled.div`
  margin: 0 19.7rem;
`;

const ContentsHeader = styled.div`
  display: flex;
  padding: 0 19.7rem;
  position: relative;
  z-index: 50;
  background-color: white;
  ${props =>
    props.isSearched &&
    css`
      margin-top: 20rem;
      box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.12);
    `}
  .toggle {
    display: flex;
    align-items: center;
    &__help {
      cursor: pointer;
      width: 2.8rem;
      height: 2.8rem;
      background: ${theme.colors.mediumGray};
      border-radius: 2.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${theme.colors.white};
      font-size: 1.6rem;
      font-weight: 500;
    }
    &__title {
      font-size: 2rem;
      color: #404040;
      margin-left: 0.8rem;
    }
  }
  .dirbtn {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &__desc {
      margin-left: 1.7rem;
      color: ${theme.colors.orange};
      font-size: 2.4rem;
      font-weight: 500;
    }
  }
`;

const TabBtn = styled.div`
  cursor: pointer;
  color: ${theme.colors.lightGray};
  ${props =>
    props.selectState &&
    css`
      color: ${theme.colors.orange};
      border-bottom: 0.4rem solid ${theme.colors.orange};
    `}
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 4.2rem;
  padding: 1.5rem;
  :hover {
    color: ${theme.colors.orange};
  }
`;

const Shadow = styled.div`
  position: fixed;
  top: 0;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.12);
  height: 21.6rem;
  width: 100%;
  z-index: 1;
`;

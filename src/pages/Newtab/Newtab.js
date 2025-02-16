import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import { AllCookies, Directory, Header, HomeBoard, ToastMsg, DirCreateModal, Onboarding, PrepareModal } from './components';
import { Switch } from '../../common';

import { useRecoilState, useRecoilValue } from 'recoil';
import { SelectState, ShareClickState, DeleteCookieClickState, createDirClickState, OnboardingState, PrepareModalState } from '../../states/atom';
import helpPopup from '../../assets/img/cookies_img_help.svg';
import helpIcon from '../../assets/img/icon_help.svg';
import plusIcon from '../../assets/img/icon_plus.svg';

export default () => {
  const [selectState, setSelectState] = useRecoilState(SelectState);
  const ShareClick = useRecoilValue(ShareClickState);
  const createDirClick = useRecoilValue(createDirClickState);
  const DeleteCookieClick = useRecoilValue(DeleteCookieClickState);
  const [isSearched, setIsSearched] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isOpenCreateDir, setIsOpenCreateDir] = useState(false); // 새 디렉토리 만들기 모달
  const [isHover, setIsHover] = useState(false);
  const Onboarding = useRecoilValue(OnboardingState);
  const PrepareModal = useRecoilValue(PrepareModalState);

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

  localStorage.getItem('isLogin');
  if (!JSON.parse(localStorage.getItem('isLogin'))) {
    // console.log(storage.isLogin);
    chrome.tabs.update({ url: 'https://www.cookieparking.com' });
  }

  useEffect(() => {
    chrome.storage.sync.get('defaultnewtab', storage => {
      if (storage.defaultnewtab) {
        chrome.tabs.update({ url: 'chrome-search://local-ntp/local-ntp.html' });
      }
    });
  }, []);

  return (
    <>
      {Onboarding && <Onboarding />}
      {PrepareModal && <PrepareModal />}
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
                  <img alt="" src={helpIcon} className="toggle__help" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} /> <div className="toggle__title">안 읽은 쿠키 모아보기</div>
                  <span style={{ marginLeft: '1.5rem' }}>
                    <Switch onChange={onToggleSwitch} />
                  </span>
                </div>
              ) : (
                <div className="dirbtn" onClick={handleCreateDir}>
                  <img className="dirbtn__icon" src={plusIcon} alt="plusIcon" />
                  <div className="dirbtn__desc">새 디렉토리 만들기</div>
                </div>
              ))}
          </div>
        </ContentsHeader>
        <Contents>
          {selectState === 'cookie' ? <AllCookies isSearched={isSearched} isToggled={isToggled} /> : <Directory isSearched={isSearched} handleCreateDir={handleCreateDir} />}
          {isOpenCreateDir && <DirCreateModal setIsOpenCreateDir={setIsOpenCreateDir} />}
          {createDirClick && <ToastMsg msg="디렉토리를 생성했어요!" />}
        </Contents>
        {ShareClick && <ToastMsg msg="링크가 복사되었어요!" />}
        {DeleteCookieClick && <ToastMsg msg="쿠키를 삭제했어요!" />}
      </div>
    </>
  );
};

const PopupHelp = styled.img`
  display: ${props => (props.isHover ? 'block' : 'none')};
  position: absolute;
  width: 54.8rem;
  height: 11.2rem;
  top: -10rem;
  right: 34.5rem;
`;

const Contents = styled.div`
  margin: 0 19.7rem;
`;

const ContentsHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  padding: 0 19.7rem;
  position: relative;
  z-index: 50;
  background-color: ${({ theme }) => theme.colors.white};
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
      width: 3.5rem;
      height: 3.5rem;
    }
    &__title {
      min-width: 18rem;
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.gray_5};
      margin-left: 0.8rem;
    }
  }
  .dirbtn {
    cursor: pointer;
    min-width: 24rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &__icon {
      width: 2.37rem;
      height: 2.37rem;
      padding-bottom: 0.5rem;
    }
    &__desc {
      /* width: 20rem; */
      display: flex;
      align-items: center;
      margin-left: 1.34rem;
      color: ${({ theme }) => theme.colors.cookieOrange};
      font-size: 2.4rem;
      font-weight: 500;
    }
  }
`;

const TabBtn = styled.div`
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  min-width: 18.5rem;
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.colors.gray_4};
  border-bottom: 4px solid ${({ theme }) => theme.colors.white};
  ${props =>
    props.selectState &&
    css`
      color: ${({ theme }) => theme.colors.cookieOrange};
      border-bottom: 4px solid ${({ theme }) => theme.colors.cookieOrange};
      font-weight: 600;
    `}
  font-size: 2.8rem;
  line-height: 4.2rem;
  padding: 1.5rem;
  :hover {
    color: ${({ theme }) => theme.colors.cookieOrange};
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

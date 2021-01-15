import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../assets/img/logo_main.svg';
import alarm from '../assets/img/icon_alarm';
import mypage from '../assets/img/icon_mypage';
import onboarding from '../assets/img/icon_onboarding';
import helptooltip from '../assets/img/header_help_popup.svg';
import { useSetRecoilState } from 'recoil';
import { SearchState, SelectState, OnboardingState, PrepareModalState } from '../states/atom';

export default ({ isSearched, setIsSearched }) => {
  const setSelectState = useSetRecoilState(SelectState);
  const setSearchState = useSetRecoilState(SearchState);
  const setOnboardingState = useSetRecoilState(OnboardingState);
  const setPrepareModalState = useSetRecoilState(PrepareModalState);
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const handleRefresh = () => {
    // 메인 로고 클릭시 Allcookies 컴포넌트 렌더링
    console.log('mainLogo clicked');
    setSelectState('cookie');
    setSearchState([]); // 이정민이 시킨건데 왜 하라고 한진 잘 모르겠다.. api 콜하면 어차피 덮어 씌워지지 않나?
    setIsSearched(false);
  };
  const handleClickMypage = () => {
    window.open('https://www.cookieparking.com/mypage', '_self');
  };
  const handleClickAlarm = () => {
    setPrepareModalState(true);
  };

  return (
    <Header isSearched={isSearched}>
      <div className="main-logo" onClick={handleRefresh}>
        <img style={{ width: '20.2rem', height: '3.8rem' }} className="main-logo__img" src={Logo} />
      </div>
      <div className="icon">
        <img className="icon__onboarding" src={onboarding} alt="onboarding" onClick={() => setOnboardingState(true)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <img className="icon__alarm" src={alarm} alt="alert" onClick={handleClickAlarm} />
        <img className="icon__mypage" src={mypage} alt="mypage" onClick={handleClickMypage} />
        <HelpPopup src={helptooltip} alt="help_tooltip" isHover={isHover} />
      </div>
    </Header>
  );
};

const HelpPopup = styled.img`
  position: absolute;
  display: ${props => (props.isHover ? 'block' : 'none')};
  top: 4rem;
  right: 9.75rem;
  width: 24.7rem;
  height: 5.4rem;
`;
const Header = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  height: 6.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .main-logo {
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-left: 2.2rem;
  }
  .icon {
    position: relative;
    display: flex;
    align-items: center;
    &__onboarding {
      cursor: pointer;
      width: 3.2rem;
      height: 3.2rem;
      margin-right: 3rem;
    }
    &__alarm {
      cursor: pointer;
      width: 2.4rem;
      height: 3.2rem;
      margin-right: 3rem;
    }
    &__mypage {
      cursor: pointer;
      width: 3.2rem;
      height: 3.2rem;
      margin-right: 2.5rem;
    }
  }
`;

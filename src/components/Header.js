import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/img/logo_main.svg';
import Profile from '../assets/img/profile.svg';
import { useSetRecoilState } from 'recoil';
import { SearchState, SelectState } from '../states/atom';

export default ({ isSearched, setIsSearched }) => {
  const setSelectState = useSetRecoilState(SelectState);
  const setSearchState = useSetRecoilState(SearchState);
  const handleRefresh = () => {
    // 메인 로고 클릭시 Allcookies 컴포넌트 렌더링
    console.log('mainLogo clicked');
    setSelectState('cookie');
    setSearchState([]); // 이정민이 시킨건데 왜 하라고 한진 잘 모르겠다.. api 콜하면 어차피 덮어 씌워지지 않나?
    setIsSearched(false);
  };
  return (
    <Header isSearched={isSearched}>
      <div className="main-logo" onClick={handleRefresh}>
        <img style={{ width: '20.2rem', height: '3.8rem' }} className="main-logo__img" src={Logo} />
      </div>
      <div className="profile" onClick={() => window.open('https://www.cookieparking.com/mypage', '_self')}>
        <img style={{ width: '3.6rem', height: '3.6rem' }} className="profile__img" src={Profile} />
      </div>
    </Header>
  );
};

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
  .profile {
    margin-right: 2.2rem;
  }
`;

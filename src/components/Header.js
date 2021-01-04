import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/img/logo_main.svg';
import Profile from '../assets/img/profile.svg';
import theme from '../assets/themes';

export default ({ setIsSelected, setIsSearched }) => {
  const handleRefresh = () => {
    console.log('mainLogo clicked');
    setIsSelected('cookie');
    setIsSearched(false);
    // (1) AllCookies tab으로 이동
    // (2) 새로 데이터 받아오기(리렌더링)
  };
  return (
    <Header>
      <div className="main-logo" onClick={handleRefresh}>
        <img className="main-logo__img" src={Logo} />
      </div>
      <a className="profile" href="#">
        <img className="profile__img" src={Profile} /> {/* Todo : mypage link 걸기 */}
      </a>
    </Header>
  );
};

const Header = styled.div`
  width: 100%;
  height: 6.5rem;
  background-color: ${theme.colors.black};
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

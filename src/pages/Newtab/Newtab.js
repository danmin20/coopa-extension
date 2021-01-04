import React, { useState, useEffect } from 'react';
import Logo from '../../assets/img/logo_main.svg';
import Profile from '../../assets/img/profile.svg';
import Glass from '../../assets/img/glass.svg';
import styled, { css } from 'styled-components';
import useInput from '../../hooks/useInput';
import AllCookies from '../../components/AllCookies';
import Directory from '../../components/Directory';
import theme from '../../assets/themes';
//import { useSetRecoilState } from 'recoil';
//import { CookieState } from '../../states/atom';
import Switch from '../../components/Switch';

export default () => {
  const [isSelected, setIsSelected] = useState('cookie');
  // const setCookieState = useSetRecoilState(CookieState);
  const handleTab = tab => {
    if (tab === 'cookie') setIsSelected('cookie');
    else setIsSelected('directory');
  };
  const handleRefresh = () => {
    console.log('mainLogo clicked');
    setIsSelected('cookie');
    // (1) AllCookies tab으로 이동
    // (2) 새로 데이터 받아오기(리렌더링)
  };
  const searchText = useInput('');
  const onToggleSwitch = e => {
    if (e.target.value) {
      // true 면
      // setCookieState 에 안본 쿠키들만 골라서 받아오기
    } else {
      // false 면
      // setCookieState 에 전체 쿠키 받아오기
    }
    // or useRef 사용하여 .isChecked props 사용하기
  };
  useEffect(() => {
    console.log('rendered!');
    // 최초에 AllCookies 데이터 받아오기
    // setCookieState();
  }, []);

  return (
    <div className="container">
      <Header>
        <div className="main-logo" onClick={handleRefresh}>
          <img className="main-logo__img" src={Logo} />
        </div>
        <a className="profile" href="#">
          <img className="profile__img" src={Profile} /> {/* Todo : mypage link 걸기 */}
        </a>
      </Header>
      <HomeBoard>
        <div className="search-bar">
          <img className="search-bar__icon" src={Glass} />
          <input value={searchText.value} onChange={searchText.onChange} className="search-bar__input" type="text" placeholder="내가 추가한 쿠키를 검색해 보세요!" />
        </div>
      </HomeBoard>
      <Contents>
        <ContentsHeader selected>
          <TabBtn isSelected={isSelected === 'cookie'} onClick={() => handleTab('cookie')}>
            All cookies
          </TabBtn>
          <TabBtn style={{ marginLeft: '9.5rem' }} isSelected={isSelected === 'directory'} onClick={() => handleTab('directory')}>
            Directory
          </TabBtn>
          <div className="empty"></div>
          <div className="toggle">
            <div className="toggle__help">?</div>
            <div className="toggle__title">안 읽은 쿠키 모아보기</div>
            <span style={{ marginLeft: '15px' }}>
              <Switch onChange={onToggleSwitch} />
            </span>
          </div>
        </ContentsHeader>
        {(() => {
          if (isSelected === 'cookie') return <AllCookies />;
          else return <Directory />;
        })()}
      </Contents>
    </div>
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

const HomeBoard = styled.div`
  width: 100%;
  height: 28rem;
  background-color: ${theme.colors.homeBoardGray};
  display: flex;
  justify-content: center;
  align-items: center;
  .search-bar {
    position: relative;
    width: 65.6rem;
    height: 7rem;
    background-color: ${theme.colors.white};
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &__icon {
      position: absolute;
      left: 2.2rem;
    }
    &__input {
      width: 40rem;
      max-height: 100%;
      border: none;
      outline: none;
      background-color: ${theme.colors.white};
      text-align: center;
      font-size: 2.6rem;
      ::placeholder {
        color: #818181;
      }
      :focus {
        ::placeholder {
          color: transparent;
        }
      }
    }
  }
`;

const Contents = styled.div`
  margin: 4.8rem 19.7rem 0;
`;

const ContentsHeader = styled.div`
  display: flex;
  .toggle {
    margin-left: auto;
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
`;

const TabBtn = styled.div`
  cursor: pointer;
  color: ${theme.colors.lightGray};
  ${props =>
    props.isSelected &&
    css`
      color: ${theme.colors.orange};
      border-bottom: 0.4rem solid ${theme.colors.orange};
    `}
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 4.2rem;
  :hover {
    color: ${theme.colors.orange};
  }
`;

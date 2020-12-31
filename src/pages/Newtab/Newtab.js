import React, { useState } from 'react';
import Logo from '../../assets/img/logo_main.svg';
import Profile from '../../assets/img/profile.svg';
import Glass from '../../assets/img/glass.svg';
import styled, { css } from 'styled-components';
import useInput from '../../hooks/useInput';
import AllCookies from '../../components/AllCookies';
import Directory from '../../components/Directory';
import theme from '../../assets/themes';
import { Switch } from '@chakra-ui/react';

export default () => {
  const [cookie, setCookie] = useState(true);
  const [directroy, setDirectory] = useState(false);
  const onClickCookie = () => {
    setCookie(true);
    setDirectory(false);
  };
  const onClickDir = () => {
    setCookie(false);
    setDirectory(true);
  };
  const searchText = useInput('');

  return (
    <div className="container">
      <Header>
        <img className="main-logo" src={Logo} />
        <img className="profile" src={Profile} />
      </Header>
      <HomeBoard>
        <div className="search-bar">
          <img className="search-bar__icon" src={Glass} />
          <input value={searchText.value} onChange={searchText.onChange} className="search-bar__input" type="text" placeholder="내가 추가한 쿠키를 검색해 보세요!" />
        </div>
      </HomeBoard>
      <Contents>
        <ContentsHeader selected>
          <CookieTab selected={cookie} onClick={onClickCookie}>
            All cookies
          </CookieTab>
          <DirectoryTab selected={directroy} onClick={onClickDir}>
            Directory
          </DirectoryTab>
          <div className="empty"></div>
          <div className="toggle">
            <div className="toggle__help">?</div>
            <div className="toggle__title">안 읽은 쿠키 보기</div>
            <Switch
              size='lg'
              colorScheme='toggleBtn'
              isFocusable='isDisabled' // 외않되??
              ml="1.2rem"
            />
          </div>
        </ContentsHeader>
        {(() => {
          if (cookie) {
            return <AllCookies />;
          } else if (directroy) {
            return <Directory />;
          }
        })()}
      </Contents>
    </div>
  );
};

// header
const Header = styled.div`
  width: 100%;
  height: 6.5rem;
  background-color: ${theme.colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .main-logo {
    margin-left: 2.2rem;
  }
  .profile {
    margin-right: 2.2rem;
  }
`;
// header ends

// homeboard
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
    height: 6rem;
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
      background-color: #fdfdfd;
      text-align: center;
      font-size: 2rem;
      ::placeholder{
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

// Contents Area
const Contents = styled.div`
  margin: 4.8rem 19.7rem 0;
`;

const ContentsHeader = styled.div`
  display: flex;
  .empty {
    flex: 1;
  }
  .toggle {
    display: flex;
    align-items: center;
    &__help {
      cursor: pointer;
      width: 2.5rem;
      height: 2.5rem;
      background: ${theme.colors.mediumGray};
      border-radius: 2.5rem;
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
    /* &__btn {
      cursor: pointer;
      width: 6rem;
      height: 4rem;
      background-color: #ef9f39;
      border-radius: 4rem;
      margin-left: 1.2rem;
    } */
  }
`;

const CookieTab = styled.div`
  cursor: pointer;
  color: #c2c2c2;
  ${props =>
    props.selected &&
    css`
      color: ${theme.colors.orange};
      border-bottom: 0.4rem solid ${theme.colors.orange};
    `};
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 4.2rem;
  :hover {
    color: ${theme.colors.orange};
  }
`;

const DirectoryTab = styled.div`
  cursor: pointer;
  color: #c2c2c2;
  ${props =>
    props.selected &&
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
  margin-left: 9.5rem;
`;

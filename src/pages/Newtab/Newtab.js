<<<<<<< refs/remotes/origin/dev
import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> test 주윤 깃 테스트
import Logo from '../../assets/img/logo_main.svg';
import Profile from '../../assets/img/profile.svg';
import Glass from '../../assets/img/glass.svg';
import styled, { css } from 'styled-components';
<<<<<<< refs/remotes/origin/dev
import useInput from '../../hooks/useInput';
import AllCookies from '../../components/AllCookies';
import Directory from '../../components/Directory';
import theme from '../../assets/themes';
import { useSetRecoilState } from 'recoil';
import { CookieState } from '../../states/atom';
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

=======
import CookieCard from '../../components/CookieCard';

const Newtab = () => {
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
>>>>>>> test 주윤 깃 테스트
  return (
    <div className="container">
      <CookieCard />
      <Header>
<<<<<<< refs/remotes/origin/dev
        <div className="main-logo" onClick={handleRefresh}>
          <img className="main-logo__img" src={Logo} />
        </div>
        <a className="profile" href="#">
          <img className="profile__img" src={Profile} /> {/* Todo : mypage link 걸기 */}
        </a>
=======
        <img className="main-logo" src={Logo} />
        <img className="profile" src={Profile} />
>>>>>>> test 주윤 깃 테스트
      </Header>
      <HomeBoard>
        <div className="search-bar">
          <img className="search-bar__icon" src={Glass} />
<<<<<<< refs/remotes/origin/dev
          <input value={searchText.value} onChange={searchText.onChange} className="search-bar__input" type="text" placeholder="내가 추가한 쿠키를 검색해 보세요!" />
=======
          <input className="search-bar__input" type="text" placeholder="내가 추가한 쿠키를 검색해 보세요!" />
>>>>>>> test 주윤 깃 테스트
        </div>
      </HomeBoard>
      <Contents>
        <ContentsHeader selected>
<<<<<<< refs/remotes/origin/dev
          <TabBtn isSelected={isSelected === 'cookie'} onClick={() => handleTab('cookie')}>
            All cookies
          </TabBtn>
          <TabBtn style={{ marginLeft: '9.5rem' }} isSelected={isSelected === 'directory'} onClick={() => handleTab('directory')}>
            Directory
          </TabBtn>
=======
          <CookieTab selected={cookie} onClick={onClickCookie}>
            All cookies
          </CookieTab>
          <DirectoryTab selected={directroy} onClick={onClickDir}>
            Directory
          </DirectoryTab>
>>>>>>> test 주윤 깃 테스트
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
<<<<<<< refs/remotes/origin/dev
          if (isSelected === 'cookie') return <AllCookies />;
          else return <Directory />;
=======
          if (cookie) {
            return <AllCookies />;
          } else if (directroy) {
            return <Directory />;
          }
>>>>>>> test 주윤 깃 테스트
        })()}
      </Contents>
    </div>
  );
};

<<<<<<< refs/remotes/origin/dev
=======
export default Newtab;

// 파일 구조 정해지면 옮길 예정
const AllCookies = () => {
  return (
    <Container>
      <Card />

      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
};
// AllCookies
const Container = styled.div`
  max-width: 100vw;
  margin-top: 5.2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(36rem, auto));
  grid-gap: 2.8rem;
`;

const Card = styled.div`
  width: 100%;
  height: 0;
  padding-top: calc(220 / 360 * 100%);
  background-color: #f3f3f4;
  // background : url("") center cover no-repeat;
  border-radius: 1.2rem;
`;

const Directory = () => {
  return <div>난 디렉토리 컴포넌트라구</div>;
};

// header
>>>>>>> test 주윤 깃 테스트
const Header = styled.div`
  width: 100%;
  height: 6.5rem;
  background-color: ${theme.colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .main-logo {
<<<<<<< refs/remotes/origin/dev
    cursor: pointer;
    display: flex;
    justify-content: center;
=======
>>>>>>> test 주윤 깃 테스트
    margin-left: 2.2rem;
  }
  .profile {
    margin-right: 2.2rem;
  }
`;

const HomeBoard = styled.div`
  width: 100%;
  height: 28rem;
<<<<<<< refs/remotes/origin/dev
  background-color: ${theme.colors.homeBoardGray};
=======
  background-color: #f3f3f4;
>>>>>>> test 주윤 깃 테스트
  display: flex;
  justify-content: center;
  align-items: center;
  .search-bar {
    position: relative;
    width: 65.6rem;
<<<<<<< refs/remotes/origin/dev
    height: 7rem;
    background-color: ${theme.colors.white};
=======
    height: 6rem;
    background-color: #fdfdfd;
>>>>>>> test 주윤 깃 테스트
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
<<<<<<< refs/remotes/origin/dev
      background-color: ${theme.colors.white};
=======
      background-color: #fdfdfd;
>>>>>>> test 주윤 깃 테스트
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
<<<<<<< refs/remotes/origin/dev
  .toggle {
    margin-left: auto;
=======
  .empty {
    flex: 1;
  }
  .toggle {
>>>>>>> test 주윤 깃 테스트
    display: flex;
    align-items: center;
    &__help {
      cursor: pointer;
<<<<<<< refs/remotes/origin/dev
      width: 2.8rem;
      height: 2.8rem;
      background: ${theme.colors.mediumGray};
      border-radius: 2.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${theme.colors.white};
=======
      width: 2.5rem;
      height: 2.5rem;
      background: #c4c4c4;
      border-radius: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
>>>>>>> test 주윤 깃 테스트
      font-size: 1.6rem;
      font-weight: 500;
    }
    &__title {
      font-size: 2rem;
      color: #404040;
      margin-left: 0.8rem;
    }
<<<<<<< refs/remotes/origin/dev
=======
    &__btn {
      cursor: pointer;
      width: 6rem;
      height: 4rem;
      background-color: #ef9f39;
      border-radius: 4rem;
      margin-left: 1.2rem;
    }
  }
`;

const CookieTab = styled.div`
  cursor: pointer;
  color: #c2c2c2;
  ${props =>
    props.selected &&
    css`
      color: #ff7134;
      border-bottom: 0.4rem solid #ff7134;
    `};
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 4.2rem;
  :hover {
    color: #ff7134;
>>>>>>> test 주윤 깃 테스트
  }
`;

const TabBtn = styled.div`
  cursor: pointer;
<<<<<<< refs/remotes/origin/dev
  color: ${theme.colors.lightGray};
  ${props =>
    props.isSelected &&
    css`
      color: ${theme.colors.orange};
      border-bottom: 0.4rem solid ${theme.colors.orange};
=======
  color: #c2c2c2;
  ${props =>
    props.selected &&
    css`
      color: #ff7134;
      border-bottom: 0.4rem solid #ff7134;
>>>>>>> test 주윤 깃 테스트
    `}
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 4.2rem;
  :hover {
<<<<<<< refs/remotes/origin/dev
    color: ${theme.colors.orange};
=======
    color: #ff7134;
>>>>>>> test 주윤 깃 테스트
  }
`;
<<<<<<< refs/remotes/origin/dev
=======
// Contents ends
>>>>>>> test 주윤 깃 테스트

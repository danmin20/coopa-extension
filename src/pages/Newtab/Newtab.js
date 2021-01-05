import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import AllCookies from '../../components/AllCookies';
import Directory from '../../components/Directory';
import theme from '../../assets/themes';
import Switch from '../../components/Switch';
import Header from '../../components/Header';
import HomeBoard from '../../components/HomeBoard';
// import DelCookieModal from '../../components/DelCookieModal';
// import DirFixModal from '../../components/DirFixModal';

export default () => {
  const [isSelected, setIsSelected] = useState('cookie');
  const [isSearched, setIsSearched] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  // const setCookieState = useSetRecoilState(CookieState);
  const handleTab = tab => {
    if (tab === 'cookie') setIsSelected('cookie');
    else setIsSelected('directory');
  };
  const onToggleSwitch = e => {
    if (e.target.value) setIsToggled(true);
    else setIsToggled(false);
  };

  useEffect(() => {
    console.log('rendered!');
  }, []);

  return (
    <div className="container">
      <Header setIsSelected={setIsSelected} isSearched={isSearched} setIsSearched={setIsSearched} />
      <HomeBoard setIsSearched={setIsSearched} isSearched={isSearched} />
      <Contents isSearched={isSearched}>
        <ContentsHeader selected>
          <TabBtn isSelected={isSelected === 'cookie'} onClick={() => handleTab('cookie')}>
            All cookies
          </TabBtn>
          <TabBtn style={{ marginLeft: '2rem' }} isSelected={isSelected === 'directory'} onClick={() => handleTab('directory')}>
            Directory
          </TabBtn>
          <div style={{ marginLeft: 'auto' }}>
            {!isSearched &&
              (isSelected === 'cookie' ? (
                <div className="toggle">
                  <div className="toggle__help">?</div>
                  <div className="toggle__title">안 읽은 쿠키 모아보기</div>
                  <span style={{ marginLeft: '15px' }}>
                    <Switch onChange={onToggleSwitch} />
                  </span>
                </div>
              ) : (
                <div className="dirbtn">
                  <div className="dirbtn__desc">+ 새 디렉토리 만들기</div>
                </div>
              ))}
          </div>
        </ContentsHeader>
        {isSelected === 'cookie' ? <AllCookies isSearched={isSearched} isToggled={isToggled} /> : <Directory isSearched={isSearched} />}
      </Contents>
    </div>
  );
};

const Contents = styled.div`
  margin: 4.8rem 19.7rem 0;
  ${props =>
    props.isSearched &&
    css`
      margin-top: -7.5rem;
    `}
`;

const ContentsHeader = styled.div`
  display: flex;
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
    props.isSelected &&
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

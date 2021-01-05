import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import AllCookies from '../../components/AllCookies';
import Directory from '../../components/Directory';
import theme from '../../assets/themes';
import Switch from '../../components/Switch';
import Header from '../../components/Header';
import HomeBoard from '../../components/HomeBoard';

export default () => {
  const [isSelected, setIsSelected] = useState('cookie');
  const [isSearched, setIsSearched] = useState(false);

  // const setCookieState = useSetRecoilState(CookieState);
  const handleTab = tab => {
    if (tab === 'cookie') setIsSelected('cookie');
    else setIsSelected('directory');
  };
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
  }, []);

  return (
    <div className="container">
      <Header setIsSelected={setIsSelected} setIsSearched={setIsSearched} />
      <HomeBoard setIsSearched={setIsSearched} isSearched={isSearched} />
      <Contents isSearched={isSearched}>
        <ContentsHeader selected>
          <TabBtn isSelected={isSelected === 'cookie'} onClick={() => handleTab('cookie')}>
            All cookies
          </TabBtn>
          <TabBtn style={{ marginLeft: '9.5rem' }} isSelected={isSelected === 'directory'} onClick={() => handleTab('directory')}>
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
        {/* allcookie와 directory의 컴포넌트에 props로 issearched 넘기고 그에 따른 로직 구현 및 검색결과 게수 노출 필요 */}
        {isSelected === 'cookie' ? <AllCookies isSearched={isSearched} /> : <Directory isSearched={isSearched} />}
      </Contents>
    </div>
  );
};

const Contents = styled.div`
  margin: 4.8rem 19.7rem 0;
  ${props =>
    props.isSearched &&
    css`
      margin-top: -4.7rem;
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
  :hover {
    color: ${theme.colors.orange};
  }
`;

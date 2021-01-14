import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Loading from './Loading';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { CookieState, SearchState, DirState } from '../states/atom';
import cookieApi from '../lib/api/cookieApi';
import dirApi from '../lib/api/directoryApi';
import meerkat from '../assets/img/meerkat_empty.svg';
// 로그인 구현되면 지우기
const token = {
  'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6IndqZGRuMDcyOEBuYXZlci5jb20iLCJpYXQiOjE2MDkzMzI1ODB9.T_GvqbwUHtBfjqgZj_Uki2R4woTN1djhf71lAabnOm4'
};

export default ({ isSearched, isToggled }) => {
  const [loading, setLoading] = useState(true);
  const [cookieState, setCookieState] = useRecoilState(CookieState);
  const setDirState = useSetRecoilState(DirState);
  const searchValue = useRecoilValue(SearchState);

  useEffect(() => {
    (async () => {
      let result = [];
      if (isSearched) {
        console.log('Allcookies 검색 결과');
        result = await cookieApi.getCookiesSearch(token, searchValue);
      } else {
        if (isToggled) {
          result = await cookieApi.getCookiesUnRead(token);
        } else {
          result = await cookieApi.getCookies(token);
        }
      }
      setCookieState(result.data);
      const dirRes = await dirApi.getDirAll(token);
      setDirState(dirRes.data);
    })();
    setLoading(false);
    // 로딩 에셋 들어오면 timeout 조금 줘서 변경하기
    // setTimeout(() => {
    //   setLoading(false);
    // }, 300);
  }, [searchValue, isToggled]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {isSearched && (
            <CookieNum>
              <span>&nbsp;{cookieState.length}개의</span> 쿠키
              {cookieState.length == 0 && (
                <div className="emptyview">
                  <img className="emptyview__img" src={meerkat} />
                  <div className="emptyview__desc">검색된 쿠키가 없어요!</div>
                </div>
              )}
            </CookieNum>
          )}
          {cookieState.length == 0 && !isSearched ? (
            <EmptyView className="emptyview">
              <img className="empty-img" src={meerkat} />
              <div className="empty-desc">아직 저장한 쿠키가 없어요!</div>
            </EmptyView>
          ) : (
            <Container>
              {cookieState.map((cookie, index) => (
                <Card cookies={cookie} key={index} idx={cookie.id} />
              ))}
            </Container>
          )}
        </>
      )}
    </>
  );
};
const EmptyView = styled.div`
  margin-top: 17.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray_5};
  .empty-img {
    width: 18.2rem;
    height: 15.4rem;
    padding-right: 7rem;
  }
  .empty-desc {
    margin-top: 3.6rem;
    font-size: 3rem;
    font-weight: 500;
    line-height: 3.6rem;
  }
`;

const Container = styled.div`
  max-width: 100vw;
  /* margin-top: 3.4rem; */
  margin-top: 5.1rem;
  margin-bottom: 3.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32rem, auto));
  grid-gap: 3.2rem;
`;

const CookieNum = styled.div`
  margin-top: 5rem;
  font-size: 2.8rem;
  line-height: 2.6rem;
  color: ${({ theme }) => theme.colors.gray_5};
  span {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.cookieOrange};
  }
  .emptyview {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 17.9rem;
    color: ${({ theme }) => theme.colors.gray_5};
    &__img {
      width: 20rem;
      height: 17rem;
      padding-right: 5rem;
    }
    &__desc {
      margin-top: 3.6rem;
      font-size: 3.6rem;
      font-weight: 500;
      line-height: 4.3rem;
    }
  }
`;

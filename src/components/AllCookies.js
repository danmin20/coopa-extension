import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Loading from './Loading';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CookieState, SearchState } from '../states/atom';
import cookieApi from '../lib/api/cookieApi';

// 로그인 구현되면 지우기
const token = {
  'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInVzZXJFbWFpbCI6InJ1cnVAZW1haWwuY29tIiwiaWF0IjoxNjA5Nzc1MDYyfQ.hkdbXr68HQ-667AmfXzIrWIuJMRM03hbQ_eBwrqJZVA'
};

export default ({ isSearched, isToggled }) => {
  const [loading, setLoading] = useState(true);
  const [cookieState, setCookieState] = useRecoilState(CookieState);
  const searchValue = useRecoilValue(SearchState);

  useEffect(() => {
    (async () => {
      let result = [];
      if (isSearched) {
        result = await cookieApi.getCookiesSearch(token, searchValue);
        console.log('검색 결과', result);
        setCookieState(result.data);
      } else {
        if (isToggled) {
          result = await cookieApi.getCookiesUnRead(token);
        } else {
          result = await cookieApi.getCookies(token);
          setCookieState(result.data.cookies);
        }
      }
    })();
    setLoading(false);
  }, [searchValue]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {cookieState.map(cookie => (
            <Card cookies={cookie} idx={cookie.id} />
          ))}
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  max-width: 100vw;
  margin-top: 5.2rem;
  margin-bottom: 3.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3.2rem;
`;

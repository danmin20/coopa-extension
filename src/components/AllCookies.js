import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Loading from './Loading';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CookieState, SearchState } from '../states/atom';
import cookieApi from '../lib/api/cookieApi';

// 로그인 구현되면 지우기
const token = {
  'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6IndqZGRuMDcyOEBuYXZlci5jb20iLCJpYXQiOjE2MDkzMzI1ODB9.T_GvqbwUHtBfjqgZj_Uki2R4woTN1djhf71lAabnOm4'
};

export default ({ isSearched, isToggled }) => {
  const [loading, setLoading] = useState(true);
  const [cookieState, setCookieState] = useRecoilState(CookieState);
  const searchValue = useRecoilValue(SearchState);

  // useEffect(() => {
  //   (async () => {
  //     let result = [];
  //     if (isSearched) {
  //        result = await cookieApi.getCookieSearch(token, searchValue);
  //     } else {
  //       if (isToggled) {
  //         result = await cookieApi.getCookiesUnRead(token);
  //       } else {
  //         result = await cookieApi.getCookies(token, searchValue);
  //       }
  //     }
  //     console.log(result);
  //     setCookieState(result.data.data);
  //     setLoading(false);
  //   })();
  // }, [searchValue]);

  const cookies = useRecoilValue(CookieState);
  return (
    // 서버 api 완성되면 연동
    // <>
    //   {loading ? (
    //     <Loading />
    //   ) : (
    //     <Container>
    //       {cookieState.map(cookie => (
    //         <Card cookie={cookie} key={cookie.id} />
    //       ))}
    //     </Container>
    //   )}
    // </>
    <Container>
      {cookies.map((cookie, idx) => (
        <Card cookies={cookie} key={idx} idx={idx} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  max-width: 100vw;
  margin-top: 5.2rem;
  margin-bottom: 3.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(36rem, auto));
  grid-gap: 3.2rem;
`;

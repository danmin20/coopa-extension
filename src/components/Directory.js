import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DirCard from './DirCard';
import Loading from './Loading';
import { useRecoilState, useRecoilValue } from 'recoil';
import { DirState, SearchState } from '../states/atom';
import dirApi from '../lib/api/directoryApi';
// 로그인 구현되면 지우기
const token = {
  'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6IndqZGRuMDcyOEBuYXZlci5jb20iLCJpYXQiOjE2MDkzMzI1ODB9.T_GvqbwUHtBfjqgZj_Uki2R4woTN1djhf71lAabnOm4'
};

export default ({ isSearched }) => {
  const [loading, setLoading] = useState(true);
  const [dirState, setDirState] = useRecoilState(DirState);
  const searchValue = useRecoilValue(SearchState);

  useEffect(() => {
    (async () => {
      let result = [];
      if (isSearched) {
        // 검색한 디렉토리 조회
        result = await dirApi.getDirSearch(token, searchValue);
      } else {
        // 전체 디렉토리 조회
        result = await dirApi.getDirAll(token);
      }
      setDirState(result.data);
      setLoading(false);
    })();
  }, [searchValue]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {dirState.map((dir, index) => (
            <DirCard dir={dir} key={index} />
          ))}
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  max-width: 100vw;
  margin-top: 4.7rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32rem, auto));
  grid-gap: 3.2rem;
`;

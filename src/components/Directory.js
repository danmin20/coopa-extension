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
        result = await dirApi.getDirSearch(token, searchValue);
      } else {
        result = await dirApi.getDirAll(token);
      }
      console.log(result);
      setDirState(result.data.data);
      setLoading(false);
    })();
  },[searchValue]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {dirState.map(dir => (
            <DirCard dir={dir} key={dir.id} />
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
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3.2rem;
`;

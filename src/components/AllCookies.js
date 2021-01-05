import React from 'react';
import styled from 'styled-components';
import { CookieState } from '../states/atom';
import { useRecoilValue } from 'recoil';
import Card from './Card';

const token = {
  'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6IndqZGRuMDcyOEBuYXZlci5jb20iLCJpYXQiOjE2MDkzMzI1ODB9.T_GvqbwUHtBfjqgZj_Uki2R4woTN1djhf71lAabnOm4'
};

export default () => {
  const cookies = useRecoilValue(CookieState);
  return (
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

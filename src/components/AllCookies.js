import React from 'react';
import styled from 'styled-components';
import { CookieState } from '../states/atom';
import { useRecoilValue } from 'recoil';
import Card from './Card';

export default () => {
  const cookies = useRecoilValue(CookieState);
  return (
    <Container>
<<<<<<< refs/remotes/origin/chaerin
      {cookies.map((c,idx) => (
        <Card cookies={c} keys={idx}/>
=======
<<<<<<< refs/remotes/origin/dev
      {cookies.map((cookie, idx) => (
        <Card cookies={cookie} key={idx} />
=======
      {cookies.map((c, idx) => (
        <Card cookies={c} key={idx} />
>>>>>>> feat: 콘텐츠 카드 경우의 수 완성
>>>>>>> feat: 콘텐츠 카드 경우의 수 완성
      ))}
    </Container>
  );
};

const Container = styled.div`
  max-width: 100vw;
  margin-top: 5.2rem;
  margin-bottom: 3.5rem;
  display: grid;
<<<<<<< refs/remotes/origin/dev
  grid-template-columns: repeat(auto-fill, minmax(35rem, auto));
  grid-gap: 2.8rem;
=======
  grid-template-columns: repeat(auto-fill, minmax(36rem, auto));
  grid-gap: 3.2rem;
>>>>>>> feat: 콘텐츠 카드 경우의 수 완성
`;

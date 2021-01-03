import React,{useState} from 'react';
import styled from 'styled-components';
import {CookieState} from '../states/atom';
import { useRecoilValue } from 'recoil';
import Card from './Card';
import CardHover from './CardHover';

export default () => {
  const cookies = useRecoilValue(CookieState);
  return (
    <Container>
      {cookies.map((c,idx) => (
        <Card cookies={c} key={idx}/>
      ))}
    </Container>
  );
};

const Container = styled.div`
  max-width: 100vw;
  margin-top: 5.2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35rem, auto));
  grid-gap: 2.8rem;
`;

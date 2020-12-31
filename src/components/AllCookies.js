import React,{useState} from 'react';
import styled from 'styled-components';
import CookieCard from './CookieCard';
import CardHover from './CardHover';

export default () => {
  const [cardhover,setCardhover]=useState(false);
  return (
    <Container>
      <CookieCard/>
      <CookieCard/>
      <CookieCard/>
      <CookieCard/>
    </Container>
  );
};
// AllCookies
const Container = styled.div`
  max-width: 100vw;
  margin-top: 5.2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35rem, auto));
  grid-gap: 2.8rem;
`;

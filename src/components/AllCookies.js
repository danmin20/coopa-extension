import React from 'react';
import styled from 'styled-components';

export default () => {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
};
// AllCookies
const Container = styled.div`
  max-width: 100vw;
  margin-top: 5.2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(36rem, auto));
  grid-gap: 2.8rem;
`;

const Card = styled.div`
  width: 100%;
  height: 0;
  padding-top: calc(220 / 360 * 100%);
  background-color: #f3f3f4;
  // background : url("") center cover no-repeat;
  border-radius: 1.2rem;
`;

import React from 'react';
import styled from 'styled-components';
import DirCard from './DirCard';

export default () => {
  return (
    <Container>
      <DirCard/>
      <DirCard/>
      <DirCard/>
      <DirCard/>
      <DirCard/>
      <DirCard/>
      <DirCard/>
      <DirCard/>
      <DirCard/>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100vw;
  margin-top: 4.7rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(36rem, auto));
  grid-gap: 3.2rem;
`;
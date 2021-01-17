import React from 'react';
import styled from 'styled-components';
import loadingDuribun from '../assets/img/cookieparking_loading_motion_verson2.gif';

export default () => {
  return (
    <Container>
      <img src={loadingDuribun} alt="duribun" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { GoogleLogin } from 'react-google-login';

const clientId = '428359515091-knafnj35m26iqbta2ddnmkgj5vjoc5bt.apps.googleusercontent.com';

export default () => {
  // const handleBtnClick = () => {

  // }

  const handleSuccess = async response => {
    console.log(response);
  };

  const handleFailure = error => {
    console.log(error);
  };

  return (
    <Wrap>
      {/* <Btn onClick={handleBtnClick}>로그인</Btn> */}
      <GoogleLogin clientId={clientId} responseType={'id_token'} onSuccess={handleSuccess} onFailure={handleFailure} />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 36.1rem;
  height: 35.1rem;
  border-radius: 1.2rem;
  border: 1px solid black;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Btn = styled.button`
  width: 8rem;
  height: 3rem;
`;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ShareClickState, DeleteCookieClickState, DelToastState, createDirClickState, updateDirClickState } from '../states/atom';
import { useSetRecoilState } from 'recoil';

export default ({ msg }) => {
  const [isFlex, setIsFlex] = useState(true);
  const setDelToastState = useSetRecoilState(DelToastState);
  const setShareClick = useSetRecoilState(ShareClickState);
  const setDeleteCookieClick = useSetRecoilState(DeleteCookieClickState);
  const setCreateDirClick = useSetRecoilState(createDirClickState);
  const setUpdateDirClick = useSetRecoilState(updateDirClickState);

  useEffect(() => {
    setTimeout(() => {
      setIsFlex(false);
      setShareClick(false);
      setDeleteCookieClick(false);
      setDelToastState(false);
      setCreateDirClick(false);
      setUpdateDirClick(false);
    }, 2000);
  }, []);

  return <Wrap isFlex={isFlex}>{msg}</Wrap>;
};

const Wrap = styled.div`
  position: fixed;
  width: 38rem;
  height: 6.8rem;
  /* background: rgba(0, 0, 0, 0.3); */
  background: ${({ theme }) => theme.colors.black_2};
  border-radius: 1.2rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  font-weight: 500;
  position: fixed;
  top: 85vh;
  left: 50%;
  transform: translate(-50%, 0);
  display: ${props => (props.isFlex ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  opacity: 0;
  z-index: 100;
  animation: fadeout 2s;
  animation-fill-mode: forwards;
  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

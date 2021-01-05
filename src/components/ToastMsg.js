import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const msg = '쿠키를 삭제했어요';

export default props => {
  const [isFlex, setIsFlex] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsFlex(false);
    }, 2000);
  }, []);

  return (
    <Wrap isFlex={isFlex}>
      {/* props.msg */}
      {msg}
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 38rem;
  height: 6.8rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 1.2rem;
  color: white;
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

  animation: fadeout 2s;
  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

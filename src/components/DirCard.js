import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import theme from '../assets/themes';
import cookieIcon from '../assets/img/cookie_icon.svg';
import cookieIconW from '../assets/img/cookie_icon_white.svg';
import updateDirIcon from '../assets/img/update_dir_icon.svg';

export default () => {
  const [isHover, setIsHover] = useState(false);
  const handleBtnMouseOver = () => {
    setIsHover(true);
  };
  const handleBtnMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Container isHover={isHover} onMouseEnter={handleBtnMouseOver} onMouseLeave={handleBtnMouseLeave}>
      <div className="dir">
        <div className="dir__title">캐릭터/일러스트레이션</div>
        <div className="dir__num">
          <CookieIcon isHover={isHover} onMouseOver={handleBtnMouseOver} onMouseLeave={handleBtnMouseOver}/>
          <div>37개</div>
        </div>
      </div>
      <UpdateIcon src = {updateDirIcon} onMouseOver={handleBtnMouseOver} onMouseLeave={handleBtnMouseOver} isHover={isHover}/>
    </Container>
  );
};
const CookieIcon = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 0.7rem;
  background: url(${props => (props.isHover? cookieIconW : cookieIcon)}) center center / cover no-repeat;
`;

const Container = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 0;
  padding-top: calc(160 / 360 * 100%);
  background-color: ${theme.colors.lightGray};
  border-radius: 1.2rem;
  color: ${theme.colors.black};
  ${props =>
    props.isHover &&
    css`
      background: rgba(0, 0, 0, 0.5);
      color: ${theme.colors.white};
    `}
  .dir {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &__title {
      white-space: pre;
      font-size: 2.4rem;
      font-weight: 500;
    }
    &__num {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      font-weight: 500;
    }
  }
  .update-icon {
    cursor: pointer;
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    background: url(${updateDirIcon}) center center / cover no-repeat;
    display: none;
    :hover {
      display: block;
      z-index: 100;
    }
  }
`;

const UpdateIcon = styled.img`
  display: ${props=>props.isHover ? 'box' : 'none'};
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
`;

// ToDo: 새 디렉토리 만들기 버튼 추가
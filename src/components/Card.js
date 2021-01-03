import React, { useState } from 'react';
import styled from 'styled-components';
import defaultImg from '../assets/img/img_default.svg';
import theme from '../assets/themes';
import CardHover from './CardHover';

export default ({ cookies }) => {
  // const [cardHover, setCardHover] = useState(false);
  return (
    // <Container onMouseEnter={() => setCardHover(true)} onMouseLeave={() => setCardHover(false)}>
    <Container>
      {/* {cardHover&&<CardHover />} */}
      <Contents thumbnail={cookies.thumbnail}>
        <div className="thumbnail"></div>
        <div className="title">{cookies.title}</div>
        <div className="profile">
          <img className="profile__og" src={cookies.og} />
          <div className="profile__author">{cookies.author}</div>
        </div>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc(460 / 360 * 100%);
  background-color: ${theme.colors.white};
  border-radius: 1.2rem;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  .thumbnail {
    width: 100%;
    height: 0;
    padding-bottom: calc(220 / 360 * 100%);
    background: url(${props => (props.thumbnail == '' ? defaultImg : props.thumbnail)}) center center / cover no-repeat;
  }
  .title {
    font-size: 2.4rem;
    font-weight: 500;
    margin-top: 2.8rem;
    margin-left: 1rem;
  }
  .profile {
    display: flex;
    align-items: center;
    margin-top: 2.9rem;
    margin-left: 1rem;
    &__author {
      margin-left: 1rem;
      font-size: 1.6rem;
      color: #999999;
    }
  }
`;

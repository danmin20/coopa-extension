import React from 'react';
import styled from 'styled-components';
import defaultImg from '../assets/img/img_default.svg';
import {CookieState} from '../states/atom';
import { useRecoilValue } from 'recoil';
import theme from '../assets/themes';

export default () => {
  const cookies = useRecoilValue(CookieState);
  return (
    <Container>
      {cookies.map(c => (
        <CardComponents cookies={c}/>
      ))}
    </Container>
  );
};

const CardComponents =({cookies})=>{
  return (
    <Card>
      <CardContents thumbnail={cookies.thumbnail}>
        <div className="thumbnail"></div>
        <div className="title">{cookies.title}</div>
        <div className="profile">
          <img className="profile__og" src={cookies.og}/>
          <div className="profile__author">{cookies.author}</div>
        </div>
      </CardContents>
    </Card>
  );
}

const Container = styled.div`
  max-width: 100vw;
  margin-top: 5.2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(36rem, auto));
  grid-gap: 3.2rem;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc(460 / 360 * 100%);
  background-color: ${theme.colors.white};
  border-radius: 1.2rem;
`;

const CardContents = styled.div`
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

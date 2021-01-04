import React, { useState } from 'react';
import styled from 'styled-components';
import defaultImg from '../assets/img/img_default.svg';
import theme from '../assets/themes';
import CardHover from './CardHover';
import { listSelectState } from '../states/atom';
import { useRecoilState, useRecoilValue } from 'recoil';


const ParkingView=({setParkingState})=>{
    const [listSelect,setListSelect]=useRecoilState(listSelectState);
    
    setTimeout(() => {
      setListSelect(false);
    }, 1000)
    return(
        <Parking listSelect={listSelect}>
          파킹중
        </Parking>
  )
}

const Parking=styled.div`
  display: ${props=>props.listSelect? 'box': 'none'};
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height:100%;
  border-radius: 1.2rem;
  z-index: 10;
  background: rgba(0,0,0,0.3);

  text-align:center;
  font-size: 10rem;
`;

export default ({ cookies, keys}) => {
  const [cardHover,setCardHover]=useState(false);
  const listSelect=useRecoilValue(listSelectState);

  return (
    <Container onMouseEnter={()=>setCardHover(true)} onMouseLeave={()=>setCardHover(false)}>
      {cardHover&&(!listSelect)?(<CardHover cookies={cookies} keys={keys}/>):(" ")}
      <Contents thumbnail={cookies.thumbnail}>
        <div className="thumbnail">
          {cardHover?(<ParkingView/>):" "}
        </div>
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

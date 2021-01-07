import React, { useState } from 'react';
import styled from 'styled-components';
import defaultImg from '../assets/img/img_default.svg';
import theme from '../assets/themes';
import CardHover from './CardHover';
import { listSelectState, ShareClickState, CookieState, DeleteClickState } from '../states/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import deleteicon from '../assets/img/cookiehover_icn_delete.svg';
import shereicon from '../assets/img/cookiehover_icn_share.svg';
import { useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import cookieAPI from '../lib/api/cookieApi';

const token = {
  'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6IndqZGRuMDcyOEBuYXZlci5jb20iLCJpYXQiOjE2MDkzMzI1ODB9.T_GvqbwUHtBfjqgZj_Uki2R4woTN1djhf71lAabnOm4'
};

export default ({ cookies, idx }) => {
  const [cardHover, setCardHover] = useState(false);
  const [parkingState, setParkingState] = useState(false);
  const listSelect = useRecoilValue(listSelectState);
  const [ShareClick, setShareClick] = useRecoilState(ShareClickState);
  const [DeleteClick, setDeleteClick] = useRecoilState(DeleteClickState);
  const [allCookie, setAllCookie] = useRecoilState(CookieState);

  const onCopy = e => {
    ({ copied: true });
  };

  const handleCopy = () => {
    setShareClick(true);
  };

  const handleDelClick = async () => {
    const newCookie = allCookie.filter(c => c.id !== cookies.id);
    setAllCookie(newCookie);

    await cookieAPI.deleteCookies(token, cookies.id);
    setDeleteClick(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setParkingState(false);
    }, 1000);
  }, [parkingState]);

  return (
    <Container onMouseOver={() => setCardHover(true)} onMouseLeave={() => setCardHover(false)} onClick={() => window.open(cookies.link)}>
      {cardHover && !parkingState && <CardHover cookies={cookies} idx={idx} setParkingState={setParkingState} />}
      <Contents thumbnail={cookies.thumbnail}>
        <div className="thumbnail">
          {parkingState && (
            <Parking listSelect={listSelect} thumbnail={cookies.thumbnail}>
              <div className="parking--title">{cookies.directory}</div>
            </Parking>
          )}
          {cardHover && !parkingState && <DeleteIcon src={deleteicon} onClick={handleDelClick} />}
          {/* 웹 과제 노션 보면서 해보기,. */}
          {cardHover && !parkingState && (
            <CopyToClipboard text={cookies.link} onCopy={onCopy}>
              <ShereIcon src={shereicon} onClick={handleCopy} />
            </CopyToClipboard>
          )}
        </div>
        {cardHover && <ThumbnailHover thumbnail={cookies.thumbnail}> </ThumbnailHover>}

        <div className="title">{cookies.title}</div>
        <div className="content">{cookies.content}</div>
        <div className="profile">
          <img className="profile__favicon" src={cookies.favicon} />
          <div className="profile__author">{cookies.provider}</div>
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
  padding-top: calc(477 / 360 * 100%);
  background-color: ${theme.colors.white};
  border-bottom: 0.1rem solid #b2b2b2;
  :hover {
    .title {
      text-decoration: underline;
    }
  }
`;

const DeleteIcon = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  z-index: 100;
  position: absolute;
  bottom: 10%;
  right: 5%;
`;

const ShereIcon = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  z-index: 100;
  position: absolute;
  bottom: 10%;
  right: 20%;
`;

const ThumbnailHover = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: ${props => (!props.thumbnail ? 'calc((160 / 360) * 100%)' : 'calc((220 / 360) * 100%)')};
  background: rgba(0, 0, 0, 0.3);
  border-radius: 1.2rem;
  position: absolute;
  z-index: 9;
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
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: ${props => (!props.thumbnail ? 'calc((160 / 360) * 100%)' : 'calc((220 / 360) * 100%)')};
    background: url(${props => (!props.thumbnail ? defaultImg : props.thumbnail)}) center center / cover no-repeat;
    border-radius: 1.2rem;
  }
  */ .title {
    font-size: 2.4rem;
    font-weight: 500;
    margin-top: 2.8rem;
    margin-left: 1rem;
    margin-bottom: 1.8rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    word-wrap: normal;
    word-break: break-all;
  }

  .content {
    font-size: 1.7rem;
    margin-left: 1rem;
    margin-bottom: 2.3rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${props => (!props.thumbnail ? 3 : 2)};
    overflow: hidden;
    word-wrap: normal;
    word-break: break-all;
    color: #999999;
  }

  .profile {
    display: flex;
    align-items: center;
    margin-bottom: 2.4rem;
    margin-left: 1rem;
    &__author {
      margin-left: 1rem;
      font-size: 1.6rem;
      color: #999999;
    }
    &__favicon {
      width: 4.2rem;
      height: 4.2rem;
      border-radius: 0.8rem;
      object-fit: cover;
    }
  }
`;
const Parking = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: ${props => (!props.thumbnail ? 'calc((160 / 360) * 100%)' : 'calc((220 / 360) * 100%)')};
  border-radius: 1.2rem;
  z-index: 10;
  background: rgba(0, 0, 0, 0.3);

  .parking--title {
    font-size: 1.8rem;
    line-height: 2.2rem;
    letter-spacing: -0.02em;
    color: #333333;
    font-weight: 500;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: 700;
  }
`;

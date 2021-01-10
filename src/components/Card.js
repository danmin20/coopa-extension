import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import defaultImg from '../assets/img/img_default.svg';
import theme from '../assets/themes';
import CardHover from './CardHover';
import { listSelectState, ShareClickState, CookieState } from '../states/atom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import deleteicon from '../assets/img/cookiehover_icn_delete.svg';
import shereicon from '../assets/img/cookiehover_icn_share.svg';
import logo from '../assets/img/logo_white.svg';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import DelCookieModal from '../components/DelCookieModal';
import cookieApi from '../lib/api/cookieApi';

const token = {
  'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6IndqZGRuMDcyOEBuYXZlci5jb20iLCJpYXQiOjE2MDkzMzI1ODB9.T_GvqbwUHtBfjqgZj_Uki2R4woTN1djhf71lAabnOm4'
};

export default ({ cookies, idx }) => {
  const [cardHover, setCardHover] = useState(false);
  const [parkingState, setParkingState] = useState(false);
  const listSelect = useRecoilValue(listSelectState);
  const setShareClick = useSetRecoilState(ShareClickState);
  const [isDelOpen, setIsDelOpen] = useState(false);

  const onCopy = e => {
    ({ copied: true });
  };

  const handleCopy = e => {
    e.stopPropagation();
    setShareClick(true);
  };

  const handleDelClick = async e => {
    e.stopPropagation();
    setIsDelOpen(true);
  };

  const handleCookieClick = async () => {
    window.open(cookies.link);
    // 읽은 쿠키 표시
    await cookieApi.postCookieRead(token, cookies.id);
  };

  useEffect(() => {
    setTimeout(() => {
      setParkingState(false);
    }, 1500);
  }, [parkingState]);

  return (
    <Container onMouseOver={() => setCardHover(true)} onMouseLeave={() => setCardHover(false)} onClick={handleCookieClick}>
      {cardHover && !parkingState && <CardHover cookies={cookies} idx={idx} setParkingState={setParkingState} />}
      <Contents thumbnail={cookies.thumbnail}>
        <div className="thumbnail">
          {parkingState && (
            <Parking listSelect={listSelect} thumbnail={cookies.thumbnail}>
              <div className="parking--title">{cookies.directory.name}</div>
              <ParkingLogoWrap>
                <ParkingLogo src={logo} />
                <ParkingText>파킹했습니다!</ParkingText>
              </ParkingLogoWrap>
            </Parking>
          )}
          {cardHover && !parkingState && <DeleteIcon src={deleteicon} onClick={handleDelClick} />}
          {isDelOpen && <DelCookieModal id={cookies.id} setIsDelOpen={setIsDelOpen} />}
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
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray_4};
  :hover {
    .title {
      text-decoration: underline;
    }
  }
`;

const DeleteIcon = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  z-index: 10;
  position: absolute;
  bottom: 10%;
  right: 5%;
`;

const ShereIcon = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  z-index: 10;
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
  .title {
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
    color: ${({ theme }) => theme.colors.black_1};
  }

  .profile {
    display: flex;
    align-items: center;
    margin-bottom: 2.4rem;
    margin-left: 1rem;
    &__author {
      margin-left: 1rem;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.gray_5};
    }
    &__favicon {
      width: 4.2rem;
      height: 4.2rem;
      border-radius: 0.8rem;
      object-fit: cover;
    }
  }
`;

const fadeout = keyframes`
  0% {
    opacity: 1;
  }
  30%{
    opacity: 1;
  }
  70%{
    opacity: 0;
  }
  100%{
    opacity: 0;
  }
`;

const fadein = keyframes`
  0% {
    opacity: 0;
  }
  50%{
    opacity: 0;
  }
  70%{
    opacity: 1;
  }
  100%{
    opacity: 1;
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
    color: ${({ theme }) => theme.colors.black_1};
    font-weight: 500;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    animation: ${fadeout} 1.5s infinite;
  }
`;

const ParkingLogoWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: ${fadein} 1.5s infinite;
`;

const ParkingLogo = styled.img`
  width: 5.532rem;
  height: 6.8rem;
  margin-bottom: 1.3rem;
`;

const ParkingText = styled.div`
  font-size: 2rem;
  line-height: 2.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;

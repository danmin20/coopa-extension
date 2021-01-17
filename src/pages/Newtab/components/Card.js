import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
// components
import CardHover from './CardHover';
import { DelCookieModal } from '../components';
// recoil
import { ShareClickState } from '../../../states/atom';
import { useSetRecoilState } from 'recoil';
// assets
import defaultImg from '../../../assets/img/img_default.svg';
import deleteicon from '../../../assets/img/icon_delete_hover.svg';
import shereicon from '../../../assets/img/icon_share_hover.svg';
import logo from '../../../assets/img/logo_white.svg';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// api
import cookieApi from '../../../lib/api/cookieApi';

const token = {
  'x-access-token': localStorage.getItem('userToken')
};

export default ({ cookies, idx }) => {
  const [cardHover, setCardHover] = useState(false);
  const [parkingState, setParkingState] = useState(false);
  // const listSelect = useRecoilValue(listSelectState);
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
            <Parking thumbnail={cookies.thumbnail}>
              <div className="parking--title">{cookies.directoryInfo.name}</div>
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
  background: rgba(0, 0, 0, 0.55);
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
    color: ${({ theme }) => theme.colors.black_1};
    line-height: 3.6rem;
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
    line-height: 2.6rem;
    font-size: 1.7rem;
    margin-left: 1rem;
    margin-bottom: 2.3rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${props => (!props.thumbnail ? 3 : 2)};
    overflow: hidden;
    word-wrap: normal;
    word-break: break-all;
    color: ${({ theme }) => theme.colors.gray_5};
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
      width: 3rem;
      height: 3rem;
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
  background: rgba(0, 0, 0, 0.55);

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

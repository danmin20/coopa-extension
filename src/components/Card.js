import React, { useState } from 'react';
import styled from 'styled-components';
import defaultImg from '../assets/img/img_default.svg';
import theme from '../assets/themes';
import CardHover from './CardHover';
import { listSelectState } from '../states/atom';
import { useRecoilState, useRecoilValue } from 'recoil';

const ParkingView = ({}) => {
  const [listSelect, setListSelect] = useRecoilState(listSelectState);

  setTimeout(() => {
    setListSelect(false);
  }, 1000); // 서버랑 통신하는 코드 (채린 생각)
  return (
    <Parking listSelect={listSelect}>
      <div className="parking">{/*디렉토리 이름*/}</div>
    </Parking>
  );
};

// p1 ) 디렉토리 이름 안들어가짐 ㅡㅡ {cookies.directory} 널으면 들어가야하는거 아닌가? 아 뭔가 개인이 짠 배열 말고 실제 api로 통일하면 더 잘 될듯.. -> cardHover 에서 받기루 결정!
// p2) 파킹 인터렉션 2번 연속으로 들어가서, settimeout 콜백 활용해서 2번 넣거나, setinterval 사용하면 단순 반복으로 알고있어서..ㅋ..스바 근데 글케되면 이거 구조 아예 바뀔거같아서 시도 못하게써 ㅜ ->useState 사용해서 조건부 렌더링을 해야할듯
// p3) 썸네일 들어왔는가 아닌가에 따라 파킹 사이즈도 달라져서, 썸네일 api받아오는 containar 에 이것도 넣는게 나을거같아.. ? 방법이 있으려나?
// p4) 내가 짠 코드가 아니니 매우 보기 어렵다... 코드 잘 알아볼 수 있게 통일하는 뭔가 필요할듯..
// p5) 이유는 모르겠는데 처음 실행할 때 0.1초 실행됨
// p6) 호버 안했을 때 갑자기 사라져 -> 썸네일 위에
// 결론) 코드 와구장창 수정해야할듯 여긴?
// 최종결론-> parking을 따로빼지 말고 하단container랑 합치고, 계속 서버는 받는 걸로. 타임 설정, 인터랙션? 등은 CSS로 구현 가능한 범위로 판단!

const Parking = styled.div`
  .parking {
    display: ${props => (props.listSelect ? 'box' : 'none')};
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 0;
    padding-bottom: ${props => (!props.thumbnail ? 'calc((160 / 360) * 100%)' : 'calc((220 / 360) * 100%)')};
    border-radius: 1.2rem;
    z-index: 10;
    background: rgba(0, 0, 0, 0.3);
  }
  .parking--title {
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 1.8rem;
    line-height: 2.2rem;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.02em;
    color: #333333;
  }
`;

export default ({ cookies, keys }) => {
  const [cardHover, setCardHover] = useState(false);
  const listSelect = useRecoilValue(listSelectState);

  return (
    <Container onMouseEnter={() => setCardHover(true)} onMouseLeave={() => setCardHover(false)}>
      {cardHover && !listSelect && <CardHover cookies={cookies} keys={keys} />}
      <Contents thumbnail={cookies.thumbnail}>
        <div className="thumbnail">{cardHover && <ParkingView />}</div>
        <div className="title">{cookies.title}</div>
        <div className="content">{cookies.content}</div>
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
  padding-top: calc(477 / 360 * 100%);
  background-color: ${theme.colors.white};
  border-bottom: 0.1rem solid #b2b2b2;
  //border-radius: 1.2rem;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;

  &:hover {
    .title {
      text-decoration: underline;
    }
  }

  .thumbnail {
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
  }
`;

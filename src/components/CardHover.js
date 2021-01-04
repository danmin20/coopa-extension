import styled from 'styled-components';
import React, { useState } from 'react';
import dropdwnImg from '../assets/img/dropdown.svg';
import { listSelectState } from '../states/atom';
import { CookieState } from '../states/atom';
import { useRecoilState } from 'recoil';

const List = ({ item, idx }) => {
  const [itemHover, setItemHover] = useState(false);
  const [listSelect, setListSelect] = useRecoilState(listSelectState);
  const [cookies, setCookies] = useRecoilState(CookieState);

  const ListItemClick = () => {
    console.log(item + ' :click');
    console.log(cookies[idx]);

    //listSelect 변수 --> true
    setListSelect(true);
    cookies[idx].directory = item;
  };
  return (
    <ListItem onMouseOver={() => setItemHover(true)} onMouseLeave={() => setItemHover(false)} onClick={ListItemClick}>
      {item}
      <ListItemBtn itemHover={itemHover} />
    </ListItem>
  );
};

const ListItem = styled.div`
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.4rem;
  letter-spacing: -0.02em;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem;
  margin-right: 1.1rem;
  max-width: 26.8rem;

  color: #333333;
  &:hover {
    background: #f3f3f3;
    border-radius: 0.8rem;
  }
`;

const ListItemBtn = styled.div`
  display: ${props => (props.itemHover ? 'box' : 'none')};

  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background: #ff7034;
`;

export default ({ cookies }) => {
  const items = ['디자인', '마케팅', '프로그래밍', '기획', '쿠키파킹', '사랑해', '디자인', '마케팅', '프로그래밍', '기획', '쿠키파킹', '사랑해'];

  const [drop, setDrop] = useState(false);

  return (
    <HoverPage>
      <Directory>
        <div className="dir-sort">{cookies.directory}</div>
        <button className="dir-btn">
          <img
            src={dropdwnImg}
            alt=""
            onClick={e => {
              e.stopPropagation();
              drop ? setDrop(false) : setDrop(true);
            }}
          />
        </button>
      </Directory>
      {drop && (
        <ListWrap>
          <DirList>
            <div className="list-div">
              <div className="list-sort">모든 디렉토리</div>
              {items.map(item => (
                <List item={item} key={idx} />
              ))}
              <div className="list-gradientBox"></div>
            </div>
          </DirList>
          <BottonWrap>
            <input class="addInput" placeholder="새 디렉토리 명을 입력하세요" />
            <button className="addBtn">저장 </button>
          </BottonWrap>
        </ListWrap>
      )}
    </HoverPage>
  );
};

const HoverPage = styled.div`
  display: flex;
  flex-direction: column;
  top: 0rem;
  position: absolute;
  z-index: 10;
`;
const Directory = styled.div`
  width: 32.4rem;
  height: 5.7rem;
  margin: 1.5rem;
  margin-bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .dir-sort {
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
  .dir-btn {
    position: absolute;
    right: 4rem;
    border: none;
    width: 1.2rem;
    height: 1.2rem;
    background: transparent;
    &:focus {
      outline: none;
      margin: 0;
    }
  }
`;

const ListWrap = styled.div`
  width: 32.7rem;
  height: 37rem;
  border-radius: 1.2rem;
  margin: 1.6rem;
  padding-top: 1.9rem;
  background: #ffffff;
  box-shadow: 0px 0.2rem 2rem rgba(0, 0, 0, 0.2);
`;

const DirList = styled.div`
  margin-top: 1.2rem;
  min-height: 25.9rem;
  max-width: 26.8rem;
  padding-left: 1.8rem;
  .list-sort {
    margin: 1.4rem;
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.2rem;
    color: #86888a;
  }
  .list-div {
    ::-webkit-scrollbar {
      width: 0.8rem;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: #f1f1f1;
      border: 1px solid #bfbfbf;
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #f1f1f1;
    }
    width: 28.8rem;
    max-height: 25.9rem;
    overflow: auto;
  }
  .list-gradientBox {
    position: absolute;
    top: 33.2rem;
    width: 268px;
    height: 56px;

    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 71.87%);
  }
`;
const BottonWrap = styled.div`
  padding: 1.8rem;
  display: flex;
  flex-direction: row;
  .addBtn {
    display: flex;
    justify-content: center;
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 1.9rem;
    align-items: center;
    text-align: center;
    letter-spacing: -0.02em;

    border: 2px solid #ff7034;
    width: 7.6rem;
    height: 4.6rem;
    color: #ff7034;
    background: white;
    border-radius: 1rem;
    &:hover {
      color: white;
      background: #ff7034;
      border: none;
    }
    &:focus {
      outline: none;
    }
  }
  .addInput {
    width: 20.4rem;
    height: 4.6rem;

    background: #f3f3f3;
    border-radius: 0.8rem;
    margin-right: 0.8rem;

    font-family: Spoqa Han Sans Neo;
    font-weight: bold;
    font-size: 1.4rem;
    text-align: center;

    color: #b7b7b7;
    &:focus {
      outline: none;
    }
  }
`;

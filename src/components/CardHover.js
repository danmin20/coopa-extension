import React, { useState } from 'react';
import styled from 'styled-components';
//import seachImg from '../../assets/img/search.svg';
//import dropdwnImg from '../../assets/img/dropdown.svg';
import seachImg from '../assets/img/search_icon.svg';
import dropdwnImg from '../assets/img/dropdown.svg';

export default () => {
  // 나중에 api 연결
  const items = [
    '디자인',
    '마케팅',
    '프로그래밍',
    '기획',
    '쿠키파킹',
    '사랑해'
    // {idx:0,title:'디자인'},
    // {idx:1,title:'마케팅'},
    // {idx:2,title:'프로그래밍'},
    // {idx:3,title:'기획'},
    // {idx:4,title:'쿠키파킹'},
    // {idx:5,title:'사랑해'}
  ];

  const [drop, setDrop] = useState(false);
  const [itemHover, setItemHover] = useState(false);

  const clickList = e => {
    //쿠키 저장하기 & 서버에 선택한 디렉토리 넘기기
    console.log(e + ' :list click');
  };
  return (
    <HoverPage>
      <Directory>
        <div class="dir-sort">마이크로 인터렉션</div>
        <button class="dir-btn">
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
      {drop ? (
        <ListWrap>
          <SearchBar>
            <img class="searchBar-icon" src={seachImg} alt="" />
            <input class="searchBar-input"></input>
          </SearchBar>
          <DirList>
            <div class="list-div">
              <div class="list-sort">모든 디렉토리</div>
              {items.map((items, idx) => (
                <div class="list-item" key={idx} onMouseOver={() => setItemHover(true)} onMouseLeave={() => setItemHover(false)} onClick={clickList}>
                  {items}
                  <div itemHover={itemHover} class="list-item__btn" />
                </div>
              ))}
            </div>
          </DirList>
          <BottonWrap>
            <button class="addBtn">+ 새 디렉토리 만들기</button>
          </BottonWrap>
        </ListWrap>
      ) : (
        ' '
      )}
    </HoverPage>
  );
};

const HoverPage = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0rem;
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
    position: relative;
    left: 5rem;
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

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 29.5rem;
  height: 4.3rem;
  margin: 0;
  background: #f3f3f3;
  border-radius: 0.8rem;
  flex-direction: row;
  margin: 0;
  margin-left: 1.8rem;
  .searchBar-icon {
    position: relative;
    width: 1.8rem;
    height: 1.8rem;
    margin: 0;
  }
  .searchBar-input {
    border: none;
    width: 26rem;
    height: 4rem;
    background: #f3f3f3;
    text-align: center;
    &:focus {
      outline: none;
      margin: 0;
      background: #f3f3f3;
    }
  }
`;

const DirList = styled.div`
  margin-top: 1.2rem;
  max-height: 22.2rem;
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
  .list-item {
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
  }
  .list-item__btn {
    display: ${props => (props.itemHover ? 'inline' : 'none')};

    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    background: #ff7034;
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
    max-height: 21rem;
    overflow: auto;
  }
`;
const BottonWrap = styled.div`
  padding: 1.8rem;
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
    border: 2px solid #333333;
    width: 28.8rem;
    height: 5.3rem;
    color: #3d3d3d;
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
`;

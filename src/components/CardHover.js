import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import dropdwnImg from '../assets/img/dropdown.svg';
import { listSelectState } from '../states/atom';
import { CookieState } from '../states/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { DirState, SearchState } from '../states/atom';
import dirApi from '../lib/api/directoryApi';

const token = {
  'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6IndqZGRuMDcyOEBuYXZlci5jb20iLCJpYXQiOjE2MDkzMzI1ODB9.T_GvqbwUHtBfjqgZj_Uki2R4woTN1djhf71lAabnOm4'
};

const List = ({ dir, cookies, setParkingState }) => {
  const [itemHover, setItemHover] = useState(false);
  const [cookieState, setCookieState] = useRecoilState(CookieState);

  const ListItemClick = async e => {
    e.stopPropagation();

    // console.log(cookieState);
    const newCookie = cookieState.map((c, idx) => (
      c.id === cookies.id ?
        {
          ...c,
          directory: {
            name: dir.name,
            id: dir.id
          }
        } :
        c
    ));
    setCookieState(newCookie);
    // setCookieState({
    //   ...cookieState,
    //   directory: {
    //     name: dir.name,
    //     id: dir.id
    //   }
    // })
    const body = {
      directoryId: dir.id,
      cookieId: cookies.id
    };
    const result = await dirApi.addCookieToDir(token, body);
    console.log('api 호출 결과', result);
    console.log(cookieState[cookies.id]);
    setParkingState(true);
  };

  return (
    <ListItem onMouseOver={() => setItemHover(true)} onMouseLeave={() => setItemHover(false)} onClick={ListItemClick}>
      {dir.name}
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

export default ({ cookies, idx, setParkingState }) => {
  const items = ['디자인', '마케팅', '프로그래밍', '기획', '쿠키파킹', '사랑해'];
  const [drop, setDrop] = useState(false);
  const [dirState, setDirState] = useRecoilState(DirState);
  const [text, setText] = useState("");


  const addDirHandler = (e) => {
    e.stopPropagation();
    console.log(text);
    const body = {
      name: text,
      description: "설명없음"
    }
    const result = dirApi.postDir(token, body);
    console.log(result);
    //dir id를 알면 사용자에게 바로 알도록
    //setDirState(dirState.concat())
  }

  const changeHandler = (e) => {
    setText(e.target.value);
  }

  return (
    <HoverPage>
      <Directory
        onClick={e => {
          e.stopPropagation();
          drop ? setDrop(false) : setDrop(true);
        }}
      >
        <div className="dir-sort">{cookies.directory ? cookies.directory.name : '정해진 디렉토리가 없습니다'}</div>
        <img src={dropdwnImg} style={{ marginLeft: '1.3rem' }} />
      </Directory>
      {drop && (
        <ListWrap>
          <DirList>
            <div className="list-div">
              <div className="list-sort">모든 디렉토리</div>
              {dirState.map(dir => (
                <List dir={dir} key={dir.id} cookies={cookies} setParkingState={setParkingState} />
              ))}
            </div>
          </DirList>
          <BottonWrap>
            <input
              className="addInput"
              placeholder="새 디렉토리 명을 입력하세요"
              onClick={e => e.stopPropagation()}
              onChange={changeHandler} />
            <button
              className="addBtn"
              onClick={addDirHandler}>저장</button>
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
  width: 100%;
  padding: 1.5rem;
`;
const Directory = styled.div`
  width: 100%;
  height: 5.7rem;
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
`;

const ListWrap = styled.div`
  width: 100%;
  height: 37rem;
  border-radius: 1.2rem;
  margin-top: 1.6rem;
  padding-top: 1.9rem;
  background: #ffffff;
  box-shadow: 0px 0.2rem 2rem rgba(0, 0, 0, 0.2);
`;

const DirList = styled.div`
  margin-top: 1.2rem;
  min-height: 25.9rem;
  max-width: 100%;
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
    width: 95%;
    max-height: 25.9rem;
    overflow: auto;
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

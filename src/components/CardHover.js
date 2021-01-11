import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import dropdwnImg from '../assets/img/dropdown.svg';
import { listSelectState } from '../states/atom';
import { CookieState } from '../states/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { DirState, SearchState } from '../states/atom';
import dirApi from '../lib/api/directoryApi';
import useInput from '../hooks/useInput';

const token = {
  'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6IndqZGRuMDcyOEBuYXZlci5jb20iLCJpYXQiOjE2MDkzMzI1ODB9.T_GvqbwUHtBfjqgZj_Uki2R4woTN1djhf71lAabnOm4'
};

const List = ({ dir, cookies, setParkingState }) => {
  const [itemHover, setItemHover] = useState(false);
  const [cookieState, setCookieState] = useRecoilState(CookieState);

  const ListItemClick = async e => {
    e.stopPropagation();

    // console.log(cookieState);
    const newCookie = cookieState.map((c, idx) =>
      c.id === cookies.id
        ? {
          ...c,
          directory: {
            name: dir.name,
            id: dir.id
          }
        }
        : c
    );
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
  max-width: 26.8rem;

  color: ${({ theme }) => theme.colors.black_1};
  &:hover {
    background: ${({ theme }) => theme.colors.gray_2};
    border-radius: 0.8rem;
  }
`;

const ListItemBtn = styled.div`
  display: ${props => (props.itemHover ? 'box' : 'none')};
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.cookieOrange};
`;

export default ({ cookies, idx, setParkingState }) => {
  // const items = ['디자인', '마케팅', '프로그래밍', '기획', '쿠키파킹', '사랑해'];
  const [drop, setDrop] = useState(false);
  const [dirState, setDirState] = useRecoilState(DirState);
  const inputText = useInput('');

  const addDirHandler = e => {
    e.stopPropagation();
    const body = {
      name: inputText.value,
      description: '설명없음'
    };
    const response = dirApi.postDir(token, body);
    response.then(res => {
      const newDir = {
        directory: {
          cookieCnt: 0,
          createAt: 'unknown',
          description: '디버그 마스터 봉채륀~',
          id: res.data.directoryId,
          name: inputText.value,
          updateAt: 'unknown',
          userId: 1
        },
        thumbnail: null
      };
      const newDirList = dirState.concat(newDir);
      setDirState(newDirList);
      inputText.setValue('');
    });
  };

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
                <List dir={dir.directory} key={dir.directory.id} cookies={cookies} setParkingState={setParkingState} />
              ))}
            </div>
          </DirList>
          <BottonWrap>
            <input className="addInput" placeholder="새 디렉토리 명을 입력하세요" onClick={e => e.stopPropagation()} onChange={inputText.onChange} value={inputText.value} />
            <button className="addBtn" onClick={addDirHandler}>
              저장
            </button>
          </BottonWrap>
        </ListWrap>
      )}
    </HoverPage>
  );
};

const HoverPage = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
`;
const Directory = styled.div`
  margin: 2rem;
  margin-bottom: 0;
  padding: 1.9rem;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0rem 0rem 3rem rgba(0, 0, 0, 0.35);
  border-radius: 1rem;
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
    color: ${({ theme }) => theme.colors.black_1};
  }
`;

const ListWrap = styled.div`
  border-radius: 1.2rem;
  margin: 2rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0.2rem 2rem rgba(0, 0, 0, 0.2);
`;

const DirList = styled.div`
  padding: 1.5rem;
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
    max-height: 26rem;
    overflow: auto;
  }
`;
const BottonWrap = styled.div`
  padding: 1.5rem;
  padding-top:0;
  display: flex;
  align-items:center;
  justify-content: center;
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

    border: 2px solid ${({ theme }) => theme.colors.cookieOrange};
    width: calc(80/292*100%);
    height: 4.6rem;
    color: ${({ theme }) => theme.colors.cookieOrange};
    background: white;
    border-radius: 1rem;
    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.cookieOrange};
      border: none;
    }
    &:focus {
      outline: none;
    }
  }
  .addInput {
    width: calc(204/292*100%);
    height: 4.6rem;
    background: ${({ theme }) => theme.colors.gray_2};
    border-radius: 0.8rem;
    border:none;
    margin-right:0.8rem;
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

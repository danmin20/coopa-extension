import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DirCard from './DirCard';
import Loading from './Loading';
import { useRecoilState, useRecoilValue } from 'recoil';
import { DirState, SearchState } from '../states/atom';
import dirApi from '../lib/api/directoryApi';
import meerkat from '../assets/img/meerkat_empty.svg';
// 로그인 구현되면 지우기
const token = {
  'x-access-token': localStorage.getItem('userToken')
};

export default ({ isSearched, handleCreateDir }) => {
  const [loading, setLoading] = useState(true);
  const [dirState, setDirState] = useRecoilState(DirState);
  const searchValue = useRecoilValue(SearchState);

  useEffect(() => {
    (async () => {
      let result = [];
      if (isSearched) {
        // 검색한 디렉토리 조회
        result = await dirApi.getDirSearch(token, searchValue);
        console.log('디렉토리', result);
      } else {
        // 전체 디렉토리 조회
        result = await dirApi.getDirAll(token);
      }
      setDirState(result.data);
      setLoading(false);
    })();
  }, [searchValue]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {isSearched && (
            <DirNum>
              <span>&nbsp;{dirState.length}개의</span> 디랙토리
              {dirState.length == 0 && (
                <div className="emptyview">
                  <img className="emptyview__img" src={meerkat} />
                  <div className="emptyview__desc">검색된 디렉토리가 없어요!</div>
                </div>
              )}
            </DirNum>
          )}
          {dirState.length == 0 ? (
            <EmptyView className="empty">
              <img className="img" src={meerkat} />
              <div className="desc">새 디렉토리를 만들어보세요!</div>
              <div className="btn" onClick={handleCreateDir}>
                <div className="btn__content">
                  <span style={{ fontSize: '4rem', marginRight: '1rem' }}>+</span>새 디렉토리 만들기
                </div>
              </div>
            </EmptyView>
          ) : (
            <Container>
              {dirState.map((dir, index) => (
                <DirCard dir={dir} key={index} />
              ))}
            </Container>
          )}
        </>
      )}
    </>
  );
};
const EmptyView = styled.div`
  margin-top: 11.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray_5};
  .img {
    width: 18.2rem;
    height: 15.4rem;
  }
  .desc {
    margin-top: 3.6rem;
    font-size: 3rem;
    font-weight: 500;
    line-height: 3.6rem;
  }
  .btn {
    cursor: pointer;
    margin-top: 2.5rem;
    width: 26.4rem;
    height: 6.4rem;
    border: 2px solid ${({ theme }) => theme.colors.cookieOrange};
    border-radius: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.2rem;
    font-weight: 500;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.colors.cookieOrange};
    &__content {
      display: flex;
      align-items: center;
    }
    transition: all 0.3s;
    :hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.cookieOrange};
    }
  }
`;

const Container = styled.div`
  max-width: 100vw;
  margin-top: 4.7rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32rem, auto));
  grid-gap: 3.2rem;
`;

const DirNum = styled.div`
  margin-top: 5rem;
  font-size: 2.8rem;
  line-height: 2.6rem;
  color: ${({ theme }) => theme.colors.gray_5};
  span {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.cookieOrange};
  }
  .emptyview {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 17.9rem;
    color: ${({ theme }) => theme.colors.gray_5};
    &__img {
      width: 20rem;
      height: 17rem;
    }
    &__desc {
      margin-top: 3.6rem;
      font-size: 3.6rem;
      font-weight: 500;
      line-height: 4.3rem;
    }
  }
`;

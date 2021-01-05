import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Glass from '../assets/img/glass.svg';
import theme from '../assets/themes';
import useInput from '../hooks/useInput';
import { useSetRecoilState } from 'recoil';
import { SearchState } from '../states/atom';

export default ({ isSearched, setIsSearched, scrollTop }) => {
  const searchText = useInput('');
  const setSearchState = useSetRecoilState(SearchState);

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      console.log(e.key);
      // 검색어 atom에 설정 및 컴포넌트 전환
      setSearchState(searchText.value);
      setIsSearched(true);
      searchText.setValue(''); // 검색 후 검색창에서 검색어 지우기
    }
  };

  return (
    <HomeBoard isSearched={isSearched} scrollTop={scrollTop}>
      <div className="search-bar">
        <img className="search-bar__icon" src={Glass} />
        <input onKeyPress={onKeyPress} value={searchText.value} onChange={searchText.onChange} className="search-bar__input" type="text" placeholder="내가 추가한 쿠키를 검색해 보세요!" />
      </div>
    </HomeBoard>
  );
};

const HomeBoard = styled.div`
  width: 100%;
  padding: 11rem 0;
  background-color: ${theme.colors.homeBoardGray};
  ${props =>
    props.isSearched &&
    css`
      background-color: ${theme.colors.white};
      box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.12);
      padding-top: 4rem;
      padding-bottom: 9.2rem;
      // Todo : scroll 시 homeboard & header fix
    `}
  /* ${props =>
    props.isSearched &&
    props.scrollTop !== 0 &&
    css`
      position: fixed;
      z-index: 3;
      padding-top: 4rem;
      padding-bottom: 4rem;
      box-shawdow: 0px 0px 25px rgba(0, 0, 0, 0.12);
    `} */
  display: flex;
  justify-content: center;
  align-items: center;
  .search-bar {
    position: relative;
    width: 65.6rem;
    height: 7rem;
    background-color: ${theme.colors.white};
    ${props =>
      props.isSearched &&
      css`
        background-color: ${theme.colors.homeBoardGray};
      `}
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &__icon {
      position: absolute;
      left: 2.2rem;
    }
    &__input {
      width: 40rem;
      max-height: 100%;
      border: none;
      outline: none;
      ${props =>
        props.isSearched &&
        css`
          background-color: ${theme.colors.homeBoardGray};
        `}
      text-align: center;
      font-size: 2.6rem;
      ::placeholder {
        color: #818181;
      }
      :focus {
        ::placeholder {
          color: transparent;
        }
      }
    }
  }
`;

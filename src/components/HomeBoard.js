import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import homebrdIconSearch from '../assets/img/homebrd_icn_search.svg';
import homebrdIconSearchOr from '../assets/img/homebrd_icn_search_orange.svg';
import useInput from '../hooks/useInput';
import { useSetRecoilState } from 'recoil';
import { SearchState } from '../states/atom';
import meerkat from '../assets/img/meerkat_home.svg';
import cookies from '../assets/img/cookies_home.svg';

export default ({ isSearched, setIsSearched }) => {
  const [isFocused, setIsFocused] = useState(false);
  const searchText = useInput('');
  const setSearchState = useSetRecoilState(SearchState);
  const onFocus = () => {
    setIsFocused(true);
  };
  const onBlur = () => {
    setIsFocused(false);
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      setSearchState(searchText.value);
      setIsSearched(true);
      searchText.setValue(''); // 검색 후 검색창에서 검색어 지우기
    }
  };

  return (
    <HomeBoard isSearched={isSearched}>
      <SearchBar isFocused={isFocused}>
        <div className="search-bar__icon"></div>
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyPress={onKeyPress}
          value={searchText.value}
          onChange={searchText.onChange}
          className="search-bar__input"
          type="text"
          placeholder="내가 추가한 쿠키를 검색해 보세요!"
        />
      </SearchBar>
      {!isSearched && <img src={meerkat} className="meerkat" alt="homeboard-cookies" />}
      {!isSearched && <img src={cookies} className="cookies" alt="homeboard-meerkat" />}
    </HomeBoard>
  );
};
const SearchBar = styled.div`
  position: relative;
  width: 65.6rem;
  /* width: 93rem; */
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.white};
  ${props =>
    props.isSearched &&
    css`
      background-color: ${({ theme }) => theme.colors.gray_1};
    `}
  /* border-radius: 1rem; 10px일때 크기*/
    border-radius: 12px;
  border: 2px solid ${props => (props.isFocused ? ({ theme }) => theme.colors.cookieOrange : ({ theme }) => theme.colors.gray_3)};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  .search-bar__icon {
    transition: all 0.3s;
    background: url(${props => (props.isFocused ? homebrdIconSearchOr : homebrdIconSearch)}) center center / cover no-repeat;
    position: absolute;
    left: 4rem;
    width: 2.8rem;
    height: 2.8rem;
  }
  .search-bar__input {
    /* width: 40rem; 10px일때 크기*/
    margin-left: 6rem;
    width: 80rem;
    max-height: 100%;
    border: none;
    outline: none;
    ${props =>
      props.isSearched &&
      css`
        background-color: ${({ theme }) => theme.colors.gray_1};
      `}
    /* text-align: center; */
      font-size: 2.6rem;
    ::placeholder {
      color: #818181;
      /* text-align: center; */
    }
    :focus {
      .search-bar {
        border: 0.2rem solid ${({ theme }) => theme.colors.cookieOrange};
      }
      ::placeholder {
        color: transparent;
      }
    }
  }
`;
const HomeBoard = styled.div`
  position: relative;
  width: 100%;
  padding: 11rem 0;
  margin-top: 6.5rem;
  background-color: ${({ theme }) => theme.colors.gray_1};
  ${props =>
    props.isSearched &&
    css`
      position: fixed;
      z-index: 100;
      top: 0;
      background-color: ${({ theme }) => theme.colors.white};
      /* box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.12); */
      padding: 4rem 0;
    `}
  display: flex;
  justify-content: center;
  align-items: center;
  .meerkat {
    position: absolute;
    left: 9.5rem;
    bottom: 0;
    /* width: 48.7rem; */
    width: 55rem;
    /* height: 32.1rem; */
  }
  .cookies {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 65rem;
    /* width: 54.7rem; */
    /* height: 32.1rem; */
  }
`;

import React from 'react';
import styled, { css } from 'styled-components';
import homebrdIconSearch from '../assets/img/homebrd_icn_search.svg';
import useInput from '../hooks/useInput';
import { useSetRecoilState } from 'recoil';
import { SearchState } from '../states/atom';

export default ({ isSearched, setIsSearched }) => {
  const searchText = useInput('');
  const setSearchState = useSetRecoilState(SearchState);

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      setSearchState(searchText.value);
      setIsSearched(true);
      searchText.setValue(''); // 검색 후 검색창에서 검색어 지우기
    }
  };

  return (
    <HomeBoard isSearched={isSearched}>
      <div className="search-bar">
        <img className="search-bar__icon" src={homebrdIconSearch} />
        <input onKeyPress={onKeyPress} value={searchText.value} onChange={searchText.onChange} className="search-bar__input" type="text" placeholder="내가 추가한 쿠키를 검색해 보세요!" />
      </div>
    </HomeBoard>
  );
};

const HomeBoard = styled.div`
  width: 100%;
  padding: 11rem 0;
  margin-top: 6.5rem;
  background-color: ${({ theme }) => theme.colors.homeBoardGray};
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
  .search-bar {
    position: relative;
    width: 65.6rem;
    height: 7rem;
    background-color: ${({ theme }) => theme.colors.white};
    ${props =>
      props.isSearched &&
      css`
        background-color: ${({ theme }) => theme.colors.homeBoardGray};
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
          background-color: ${({ theme }) => theme.colors.homeBoardGray};
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

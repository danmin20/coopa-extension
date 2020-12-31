import React from 'react';
import style from 'styled-components';
import { atom, useRecoilState } from 'recoil';
import { useState } from 'react';
import back_arrow from '../../assets/img/back_arrow.svg';
import search_icon from '../../assets/img/search_icon.svg';
import plus_icon from '../../assets/img/plus_icon.svg';
import plus_icon_white from '../../assets/img/plus_icon_white.svg';

// recoil atom
const PageNumber = atom({
  key: 'PageNumber',
  default: 0
});

const Directory = () => {
  const [pageNum, setPageNum] = useRecoilState(PageNumber);
  const [isHover, setIsHover] = useState(false);

  const handleBtnClick = () => {
    setPageNum(2);
  };

  const handleBackArrClick = () => {
    setPageNum(0);
  };

  const handleDirClick = () => {
    setPageNum(3);
  };

  const handleBtnMouseOver = () => {
    setIsHover(true);
  };

  const handleBtnMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <>
      <Wrap>
        <HeadhWrap>
          <BackArrow onClick={handleBackArrClick} src={back_arrow} />
          <SearchBar>
            <SearchIcon src={search_icon} />
            <SearchInput />
          </SearchBar>
        </HeadhWrap>
        <DirListWrap>
          <DirList>
            <DirItem onClick={handleDirClick}>디자인</DirItem>
            <DirItem onClick={handleDirClick}>마케팅</DirItem>
            <DirItem onClick={handleDirClick}>g</DirItem>
            <DirItem onClick={handleDirClick}>g</DirItem>
            <DirItem onClick={handleDirClick}>g</DirItem>
            <DirItem onClick={handleDirClick}>g</DirItem>
            <DirItem onClick={handleDirClick}>g</DirItem>
            <DirItem onClick={handleDirClick}>g</DirItem>
            <DirItem onClick={handleDirClick}>g</DirItem>
          </DirList>
        </DirListWrap>
        <BottomWrap>
          <AddBtn isHover={isHover} onMouseOver={handleBtnMouseOver} onMouseLeave={handleBtnMouseLeave} onClick={handleBtnClick}>
            <PlusIconWhite isHover={isHover} src={plus_icon_white} />
            <PlusIcon isHover={isHover} src={plus_icon} />새 디렉토리 만들기
          </AddBtn>
        </BottomWrap>
      </Wrap>
    </>
  );
};

export default Directory;

const Wrap = style.div`
  width: 36.1rem;
  height: 35.1rem;
  border-radius: 1.2rem;
  border: 1px solid black;
  background-color: #ffffff;
  margin:0;
  padding:0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeadhWrap = style.div`
    width: 36.1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1.8rem;
    margin-bottom: 0.7rem;
`;

const BackArrow = style.img`
    margin-right: 1.733rem;
    margin-left: 2.2rem;
`;

const SearchBar = style.div`
    width: 29.2rem;
`;

const SearchIcon = style.img`
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    z-index: 10;
    margin-left: 1.5rem;
    margin-top: 1.1rem;
`;

const SearchInput = style.input`
    width: 25.1rem;
    height: 3.9rem;
    border-radius: 0.8rem;
    background-color: #F1F1F1;
    appearance: none;
    border: none;
    outline: none;
    padding-left: 3.5rem;
`;

const DirListWrap = style.div`
    
`;

const DirItem = style.div`
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.4rem;
    padding: 1.4rem 0;
`;

const DirList = style.div`
    display: grid;
    grid-template-columns: 1fr;
    position: relative;
    overflow: auto;
    width: 31rem;
    height: 20rem;
    /* width */
    ::-webkit-scrollbar {
    width: 0.8rem;
    }
    /* Track */
    ::-webkit-scrollbar-track {
    background: none;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #f1f1f1;
    border: 0.1rem solid #BFBFBF;
    border-radius: 0.8rem;
    box-sizing: border-box;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
`;

const BottomWrap = style.div`
    bottom: 7.85%;
    width: 36.1rem;
    height: 8.9rem;
    border-radius: 1.2rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const AddBtn = style.div`
    width: 31.9rem;
    height: 4.9rem;
    border: ${props => (props.isHover ? 'none' : '0.2rem solid #333333;')};
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.6rem;
    font-weight: ${props => (props.isHover ? '700' : '500 ')};
    color: ${props => (props.isHover ? '#ffffff' : '#3d3d3d')};
    background-color: ${props => (props.isHover ? '#FF7034' : '#ffffff')};
    box-shadow: ${props => (props.isHover ? '0rem 0rem 1.2rem rgba(0, 0, 0, 0.13)' : 'none')};
`;

const PlusIcon = style.img`
    width: 1.5rem;
    height: 1.4rem;
    margin-right: 1.2rem;
    margin-left: 6.3rem;
    display: ${props => (props.isHover ? 'none' : 'box')};
`;

const PlusIconWhite = style.img`
    width: 1.5rem;
    height: 1.4rem;
    margin-right: 1.2rem;
    margin-left: 6.3rem;
    display: ${props => (props.isHover ? 'box' : 'none')};
`;

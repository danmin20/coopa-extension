import React from 'react';
import styled from 'styled-components';
import { atom, useRecoilState } from 'recoil';
import { useState } from 'react';
import back_arrow from '../../assets/img/back_arrow.svg';
import search_icon from '../../assets/img/search_icon.svg';
import plus_icon from '../../assets/img/plus_icon.svg';
import plus_icon_white from '../../assets/img/plus_icon_white.svg';
import useInput from '../../hooks/useInput';
import { ClipperPageNumState } from '../../states/atom';

// 나중에 api 연결
const item = ['디자인', '마케팅', '프로그래밍', '기획', '쿠키파킹','디자인', '마케팅', '프로그래밍', '기획', '쿠키파킹'];

// 스크롤바 뿌옇게 되는거 방지??? 어떻게 하지...

export default () => {
  const [pageNum, setPageNum] = useRecoilState(ClipperPageNumState);
  const [isHover, setIsHover] = useState(false);
  const searchText = useInput('');

  const handleBtnClick = () => {
   
  };

  const handleBackArrClick = () => {
    setPageNum(0);
  };

  const handleDirClick = () => {
    setPageNum(2);
  };

  const handleBtnMouseOver = () => {
    setIsHover(true);
  };

  const handleBtnMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Wrap>
      <HeadhWrap>
        <BackBtn onClick={handleBackArrClick}>
          <BackArrow src={back_arrow} />
        </BackBtn>
      </HeadhWrap>
      <DirList>
        {item.map((item, idx) => (
          <ReturnDirItems item={item} idx={idx}/>
        ))}
      </DirList>
      <BottomWrap>
        <SearchInput
          placeholder={"새 디렉토리 명을 입력하세요"} 
          value={searchText.value} 
          onChange={searchText.onChange} 
        />
        <AddBtn isHover={isHover} onMouseOver={handleBtnMouseOver} onMouseLeave={handleBtnMouseLeave} onClick={handleBtnClick}>
          저장
        </AddBtn>
      </BottomWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 36.1rem;
  height: 35.1rem;
  border-radius: 1.2rem;
  background-color: #ffffff;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeadhWrap = styled.div`
  width: 36rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.8rem;
  margin-bottom: 0.7rem;
`;

const BackBtn = styled.div`
  width: 4.2rem;
  height: 4.2rem;
  border: 0.1rem solid #C4C4C4;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1.2rem;
`;

const BackArrow = styled.img`
`;

const DirItemWrap = styled.div`
  width: 28rem;
  height: 4rem;
  padding-left: 1.2rem;
  padding-right: 1.6rem;
  border-radius: 0.8rem;
  background: ${props => props.isHover ? '#F3F3F3' : 'white'};
  display:flex;
  align-items: center;
  justify-content: space-between;
`;

const DirItem = styled.div`
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.4rem;
  display:flex;
  align-items: center;
  justify-content: space-between;
`;

const DirItemHoverCircle = styled.div`
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background: #FF7134;
  display: ${props => props.isHover ? 'box' : 'none'};
`;

const DirList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  overflow: auto;
  width: 33rem;
  height: 20rem;
  /* width */
  ::-webkit-scrollbar {
    width: 1rem;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: none;
    border: 0.1rem solid #C4C4C4;
    border-radius: 0.5rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #f1f1f1;
    border: 0.1rem solid #bfbfbf;
    border-radius: 0.5rem;
    box-sizing: border-box;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const BottomWrap = styled.div`
  bottom: 7.85%;
  width: 36.1rem;
  height: 8.9rem;
  border-radius: 1.2rem;
  background-color: white;
  /* background: linear-gradient(to top, white); */
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0rem -1rem 1.5rem 0.8rem rgba(255, 255, 255, 0.75);
  z-index: 5;
`;

const SearchInput = styled.input`
  width: 21.4rem;
  height: 4.6rem;
  border-radius: 0.8rem;
  background-color: #f3f3f3;
  color: #B7B7B7;
  font-size: 1.5rem;
  line-height: 1.8rem;
  font-weight: 500;
  appearance: none;
  border: none;
  outline: none;
  padding: 0 1.5rem;
  margin-left: 1.5rem;
  &::-webkit-input-placeholder{
    color: #B7B7B7;
    font-size: 1.5rem;
    line-height: 1.8rem;
    font-weight: 500;
  }
`;

const AddBtn = styled.div`
  width: 7.6rem;
  height: 4.6rem;
  border: ${props => (props.isHover ? 'none' : '0.2rem solid #FF7134')};
  border-radius: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${props => (props.isHover ? '#ffffff' : '#FF7134')};
  background-color: ${props => (props.isHover ? '#FF7134' : '#ffffff')};
  box-shadow: ${props => (props.isHover ? '0rem 0rem 1.2rem rgba(0, 0, 0, 0.13)' : 'none')};
  margin-left: 1rem;
`;

const ReturnDirItems = ({item, idx}) => {
  const [isHover, setIsHover] = useState(false);
  const [pageNum, setPageNum] = useRecoilState(ClipperPageNumState);

  const handleDirClick = () => {
    setPageNum(2);
  };

  const handleMouseMove = () => {
    setIsHover(true);
  }

  const handleMouseLeave = () => {
    setIsHover(false);
  }

  return(
    <DirItemWrap
      onClick={handleDirClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      isHover={isHover}
      key={idx}
    >
      <DirItem>
        {item}
      </DirItem>
      <DirItemHoverCircle isHover={isHover} />
    </DirItemWrap>
  )
}
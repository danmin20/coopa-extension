import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useState } from 'react';
import back_arrow from '../../assets/img/icon_left.svg';
import useInput from '../../hooks/useInput';
import { ClipperPageNumState, WebClipperDirState } from '../../states/atom';
import dirApi from '../../lib/api/directoryApi';
import Loading from '../../components/Loading';

// 나중에 api 연결
const token = {
  'x-access-token': localStorage.getItem('userToken')
};

export default () => {
  const setPageNum = useSetRecoilState(ClipperPageNumState);
  const [dirState, setDirState] = useRecoilState(WebClipperDirState);
  const [isHover, setIsHover] = useState(false);
  const [loading, setLoading] = useState(true);
  const InputText = useInput('');

  useEffect(() => {
    const result = dirApi.getDirAll(token);
    result.then(function (dir) {
      setDirState(dir.data);
      setLoading(false);
    });
  }, []);

  const handleBtnClick = () => {
    const data = {
      name: InputText.value,
      description: '디버그 마스터 봉채륀~'
    };

    console.log(dirState);

    const response = dirApi.postDir(token, data);
    response.then(res => {
      const newDir = {
        cookieCnt: 0,
        createAt: 'unknown',
        description: '디버그 마스터 봉채륀~',
        id: res.data.directoryId,
        name: InputText.value,
        updateAt: 'unknown',
        thumbnail: null
      };
      const newDirList = dirState.concat(newDir);
      setDirState(newDirList);
    });

    InputText.setValue('');
  };

  const handleBackArrClick = () => {
    setPageNum(0);
  };

  const handleBtnMouseOver = () => {
    setIsHover(true);
  };

  const handleBtnMouseLeave = () => {
    setIsHover(false);
  };


  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Wrap>
          <HeadhWrap>
            <BackBtn src={back_arrow} onClick={handleBackArrClick}/>
          </HeadhWrap>
          <DirList>
            {dirState.map((dir, index) => (
              <ReturnDirItems item={dir.name} key={index} idx={dir.id} />
            ))}
            <Space />
          </DirList>
          <Blur />
          <BottomWrap>
            <SearchInput maxLength={20} placeholder={'새 디렉토리 명을 입력하세요'} value={InputText.value} onChange={InputText.onChange} />
            <AddBtn isHover={isHover} onMouseOver={handleBtnMouseOver} onMouseLeave={handleBtnMouseLeave} onClick={handleBtnClick}>
              저장
            </AddBtn>
          </BottomWrap>
        </Wrap>
      )}
    </>
  );
};

const Wrap = styled.div`
  width: 36rem;
  height: 35.1rem;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.white};
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

const BackBtn = styled.img`
  cursor: pointer;
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
`;

const DirItemWrap = styled.div`
  cursor: pointer;
  width: 28rem;
  height: 4rem;
  padding-left: 1.2rem;
  padding-right: 1.6rem;
  border-radius: 0.8rem;
  background: ${props => (props.isHover ? ({ theme }) => theme.colors.gray_2 : ({ theme }) => theme.colors.white)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DirItem = styled.div`
  width: 26rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.4rem;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const DirItemHoverCircle = styled.div`
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background: #ff7134;
  display: ${props => (props.isHover ? 'box' : 'none')};
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

const Blur = styled.div`
  width: 29rem;
  /* height: 0.1rem; */
  box-shadow: 0rem -1rem 1.5rem 0.8rem rgba(255, 255, 255, 0.75);
  z-index: 5;
`;

const BottomWrap = styled.div`
  bottom: 7.85%;
  width: 36.1rem;
  height: 8.9rem;
  background-color: ${({ theme }) => theme.colors.white};
  /* background: linear-gradient(to top, white); */
  display: flex;
  flex-direction: row;
  align-items: center;
  /* box-shadow: 0rem -1rem 1.5rem 0.8rem rgba(255, 255, 255, 0.75); */
`;

const SearchInput = styled.input`
  width: 21.4rem;
  height: 4.6rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray_2};
  color: #111111;
  font-size: 1.7rem;
  line-height: 2.04rem;
  font-weight: 500;
  appearance: none;
  border: none;
  outline: none;
  padding: 0 1.5rem;
  margin-left: 1.5rem;
  &::-webkit-input-placeholder {
    color: #b7b7b7;
    font-size: 1.5rem;
    line-height: 1.8rem;
    font-weight: 500;
  }
  :focus {
    ::placeholder {
      color: transparent;
    }
  }
`;

const AddBtn = styled.div`
  cursor: pointer;
  width: 7.2rem;
  height: 4.6rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.cookieOrange};
  border-radius: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${props => (props.isHover ? ({ theme }) => theme.colors.white : ({ theme }) => theme.colors.cookieOrange)};
  background-color: ${props => (props.isHover ? ({ theme }) => theme.colors.cookieOrange : ({ theme }) => theme.colors.white)};
  box-shadow: ${props => (props.isHover ? '0rem 0rem 1.2rem rgba(0, 0, 0, 0.13)' : 'none')};
  margin-left: 1rem;
  transition-duration: 0.5s;
`;

const Space = styled.div`
  width: 28rem;
  height: 1rem;
`;

const ReturnDirItems = ({ item, idx }) => {
  const [isHover, setIsHover] = useState(false);
  const [pageNum, setPageNum] = useRecoilState(ClipperPageNumState);

  const handleDirClick = e => {
    // 디렉토리에 데이터 넣기
    chrome.storage.sync.get('cookieId', function (storage) {
      let data = {
        directoryId: idx,
        cookieId: storage.cookieId
      };
      const Response = dirApi.addCookieToDir(token, data);
      Response.then(function (response) {
        setPageNum(2);
      });
    });
  };

  const handleMouseMove = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <DirItemWrap onClick={handleDirClick} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} isHover={isHover} key={idx}>
      <DirItem>{item}</DirItem>
      <DirItemHoverCircle isHover={isHover} />
    </DirItemWrap>
  );
};

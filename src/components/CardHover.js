import styled from 'styled-components';
import React, { useState } from 'react';
//import seachImg from '../../assets/img/search.svg';
//import dropdwnImg from '../../assets/img/dropdown.svg';
import seachImg from '../assets/img/search_icon.svg';
import dropdwnImg from '../assets/img/dropdown.svg';
import { listSelectState } from '../states/atom';
import { CookieState } from '../states/atom';
import { useRecoilState } from 'recoil';


const List=({item, idx})=>{
    const [itemHover,setItemHover]=useState(false);
    const [listSelect,setListSelect]=useRecoilState(listSelectState);
    const [cookies,setCookies]=useRecoilState(CookieState);

    const ListItemClick=()=>{
        console.log(item+" :click");
        console.log(cookies[idx]);
        setListSelect(true);
        cookies[idx].directory=item;
    }
    return(
        <>
        <ListItem onMouseOver={()=>setItemHover(true)} onMouseLeave={()=>setItemHover(false)} onClick={ListItemClick} >
            {item}
            <ListItemBtn itemHover={itemHover}/>
        </ListItem>
        </>
    )
}

const ListItem=styled.div`
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
    &:hover{
        background: #F3F3F3;
        border-radius: 0.8rem;
    }
`;

const ListItemBtn=styled.div`
    display: ${props=>props.itemHover ? 'box' : 'none'};

    width:1.4rem;
    height:1.4rem;
    border-radius:50%;
    background: #FF7034;
`;


export default ({cookies, keys}) => {
    const items = [
        '디자인','마케팅','프로그래밍','기획','쿠키파킹','사랑해'
    ];


    const [drop,setDrop]=useState(false);
  
    return (
        <>
        <HoverPage>
          <Directory>
              <div className='dir-sort'>{cookies.directory}</div>
              <button className='dir-btn'>
                  <img src={dropdwnImg} alt='' onClick={(e)=>{
                      e.stopPropagation();
                      drop?setDrop(false):setDrop(true);
                  }}/>
              </button>
          </Directory>
          {drop?(<ListWrap>
              <SearchBar>
                  <img className='searchBar-icon' src={seachImg} alt=''/>
                  <input className='searchBar-input'></input>
              </SearchBar>
              <DirList>
                  <div className='list-div'>
                      <div className='list-sort'>모든 디렉토리</div>
                      {items.map((item) => (
                          <List item={item} idx={keys} />
                      ))}
                  </div>
              </DirList>
              <BottonWrap>
                  <button className='addBtn'>+ 새 디렉토리 만들기</button>
              </BottonWrap>
          </ListWrap>):(" ")}
        </HoverPage>
      </>
    );
  };

const HoverPage=styled.div`
    display:flex;
    flex-direction:column;
    top:0rem;
    position:absolute;
    z-index:10;
  `;
const Directory=styled.div`
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
const DirList= styled.div`
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
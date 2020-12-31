import React,{useState} from 'react';
import style from 'styled-components';
//import seachImg from '../../assets/img/search.svg';
//import dropdwnImg from '../../assets/img/dropdown.svg';
import seachImg from '../assets/img/search_icon.svg';
import dropdwnImg from '../assets/img/dropdown.svg';


const HoverPage=style.div`
    display:flex;
    flex-direction:column;
    position:absolute;
  `;
const Directory=style.div`
    width: 32.4rem;
    height: 5.7rem;
    margin: 1.5rem;
    margin-bottom: 0;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.35);
    border-radius: 10px;
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content:center;
    .dir-sort{
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
    .dir-btn{
        position: relative;
        left:5rem;
        border:none;
        width:1.2rem;
        height:1.2rem;
        background:transparent;
        &:focus{
            outline:none;
            margin:0;
      }
    }
`;

const ListWrap = style.div`
    width: 32.7rem;
    height: 35.3rem;
    border-radius: 1.2rem;
    margin:1.6rem;
    padding-top: 1.9rem;
    background: #FFFFFF;
    box-shadow: 0px 0.2rem 2rem rgba(0, 0, 0, 0.2);
`;
const SearchBar = style.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:29.5rem;
    height:4.3rem;
    margin:0;
    background: #F3F3F3;
    border-radius: 0.8rem;
    flex-direction: row;
    margin:0;
    margin-left:1.8rem;
    .searchBar-icon{
        position:relative;
        width: 1.8rem;
        height:1.8rem;
        margin:0;
    }
    .searchBar-input{
        border:none;
        width:26rem;
        height:4rem;
        background:#F3F3F3;
        text-align:center;
        &:focus{
        outline:none;
        margin:0;
        background:#F3F3F3;
    }
`;
const DirList= style.div`
    margin-top:1.2rem;
    max-height:22.2rem;
    padding-left: 1.8rem;
    .list-sort{
        margin:1.4rem;
        font-family: Spoqa Han Sans Neo;
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        line-height: 1.2rem;

        color: #86888A;
    }
    .list-item{
        font-family: Spoqa Han Sans Neo;
        font-style: normal;
        font-weight: bold;
        font-size: 2rem;
        line-height: 2.4rem;
        display: flex;
        align-items: center;
        letter-spacing: -0.02em;

        color: #333333;
        padding: 0.7rem;
        &:hover{
            background-color: rgba(0,0,0,0.2);
        }
    }
    .list-item__btn{
        position: relative;
        left:10rem;

        width:3.5rem;
        height:2rem;

        border:none;
        border-radius:1rem;

        font-size:1rem;
        font-weight:bold;
        color:white;
        background: #FF7034;

        &:focus{
            outline:none;
        }

    }
    .list-div{
        ::-webkit-scrollbar {
            width: 0.8rem;
          }
      
          ::-webkit-scrollbar-track {
            background: transparent;
          }
      
          ::-webkit-scrollbar-thumb {
            background: #F1F1F1;
            border: 1px solid #BFBFBF;
            border-radius: 8px;
          }
      
          ::-webkit-scrollbar-thumb:hover {
            background: #F1F1F1;
          }
          width: 28.8rem;
          max-height: 21rem;
          overflow: auto;
`;
const BottonWrap = style.div`
    padding:1.8rem;
    .addBtn{
        display:flex;
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
        color: #3D3D3D;
        background: white;
        border-radius: 1rem;

        margin:0;
        &:hover{
        color:white;
        background: #FF7034;
        border:none;

        }
        &:focus{
            outline:none;
        }

    }
`;

const ListTest=()=>{
    const [drop,setDrop]=useState(false);
    const [itemHover,setItemHover]=useState(false);
    const clickList=()=>{
        //쿠키 저장하기 & 서버에 선택한 디렉토리 넘기기
        console.log('list click');
    };
    return(
        <>
          <HoverPage>
            <Directory>
                <div class='dir-sort'>마이크로 인터렉션</div>
                <button class='dir-btn'>
                    <img src={dropdwnImg} alt='' onClick={()=>{drop?setDrop(false):setDrop(true)}}/>
                </button>
            </Directory>
            {drop?(<ListWrap>
                <SearchBar>
                    <img class='searchBar-icon' src={seachImg} alt=''/>
                    <input class='searchBar-input'></input>
                </SearchBar>
                <DirList>
                    <div class='list-div'>
                        <div class='list-sort'>모든 디렉토리</div>
                        <div class='list-item'  onMouseEnter={()=>setItemHover(true)} onMouseLeave={()=>setItemHover(false)}>
                            마케팅 전략
                            {itemHover?(<button class='list-item__btn' onClick={clickList}>선택</button>):(" ")}
                        </div>
                        <div class='list-item'>유저 인터페이스</div>
                        <div class='list-item'>디자인</div><div class='list-item'>마케팅 전략</div>
                        <div class='list-item'>유저 인터페이스</div>
                        <div class='list-item'>디자인</div><div class='list-item'>마케팅 전략</div>
                        <div class='list-item'>유저 인터페이스</div>
                        <div class='list-item'>디자인</div><div class='list-item'>마케팅 전략</div>
                        <div class='list-item'>유저 인터페이스</div>
                        <div class='list-item'>디자인</div><div class='list-item'>마케팅 전략</div>
                        <div class='list-item'>유저 인터페이스</div>
                        <div class='list-item'>디자인</div>
                    </div>
                </DirList>
                <BottonWrap>
                    <button class='addBtn'>+ 새 디렉토리 만들기</button>
                </BottonWrap>
            </ListWrap>):(" ")}
          </HoverPage>
        </>
    )
}

export default ListTest;
import React from 'react';
import style from 'styled-components';
import { atom, useRecoilState } from 'recoil';
import {useState} from 'react';
import logo from '../../assets/img/logo.svg';

const Finish = () => {
    const [isHover, setIsHover] = useState(false);
    
    const handleBtnMouseOver = () => {
        setIsHover(true);
    }

    const handleBtnMouseLeave = () => {
        setIsHover(false);
    }
    
    return(
        <>
            <Wrap>
                <LogoWrap>
                    <LogoImg src={logo}/>
                    <Text>유저 인터페이스</Text>
                    <TextTwo>파킹했습니다!</TextTwo>
                </LogoWrap>
                <Btn 
                isHover={isHover}
                onMouseMove={handleBtnMouseOver}
                onMouseLeave={handleBtnMouseLeave}
                >
                    Open Cookie Parking
                </Btn>
            </Wrap>
        </>
    )
}


export default Finish;


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

const LogoWrap = style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6.6rem;
`;

const Text = style.div`
    width: 28.9rem;
    height: 4rem;
    font-weight: 500;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.495rem;
`;

const TextTwo = style.div`
    width: 28.9rem;
    font-weight: 500;
    font-size: 1.8rem;
    color: #BABABA;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LogoImg = style.img`
    width: 7rem;
    height: 8.605rem;
`;

const Btn = style.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 1.2rem;
    width: 32.2rem;
    height: 5.2rem;
    background-color: ${props => (props.isHover ? '#FF7034' : '#ffffff')};
    color: ${props => (props.isHover ? '#ffffff' : '#000000')};
    font-size: 1.6rem;
    font-weight: ${props => (props.isHover ? '700' : '500')};
    box-shadow: 0rem 0rem 1.2rem rgba(0, 0, 0, 0.13);
    margin-top: 4.8rem;
`;

import React from 'react';
import style from 'styled-components';
import { atom, useRecoilState } from 'recoil';
import back_arrow from '../../assets/img/back_arrow.svg';
import {useState} from 'react';




// recoil atom
const PageNumber = atom({
    key: 'PageNumber',
    default: 0,
})


const AddDir = () => {
    const [pageNum, setPageNum] = useRecoilState(PageNumber);
    const [isHover, setIsHover] = useState(false);

    const handleBtnClick = () => {
        setPageNum(1);
    }

    const handleBackArrClick = () => {
        setPageNum(1);
    }

    const handleBtnMouseOver = () => {
        setIsHover(true);
    }

    const handleBtnMouseLeave = () => {
        setIsHover(false);
    }

    return(
        <>
            <Wrap>
                <HeadhWrap>
                    <BackArrow onClick={handleBackArrClick} src={back_arrow}/>
                </HeadhWrap>
                <MiddleWrap>
                    <InputWrap>
                        <InputText>디렉토리 이름*</InputText>
                        <InputSpace num={1}/>
                    </InputWrap>
                    <Space />
                    <InputWrap>
                        <InputText>메모</InputText>
                        <InputSpace num={2}/>
                    </InputWrap>
                </MiddleWrap>
                <BottomWrap>
                    <AddBtn 
                    isHover={isHover}
                    onMouseMove={handleBtnMouseOver}
                    onMouseLeave={handleBtnMouseLeave}
                    onClick={handleBtnClick}
                    >
                        디렉토리 생성하기
                    </AddBtn>
                </BottomWrap>
            </Wrap>
        </>
    )
}

export default AddDir;


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
    height: 4.1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1.8rem;
    margin-bottom: 1.8rem;
`;

const BackArrow = style.img`
    margin-right: 1.733rem;
    margin-left: 2.2rem;
`;

const MiddleWrap = style.div`
    width: 36.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    top: 15%;
`;

const InputWrap = style.div`
    display: flex;
    flex-direction: column;
`;

const InputText = style.div`
    font-size: 1.6rem;
    font-weight: 500;
    color: #565656;
    margin-bottom: 0.8rem;
`;

const InputSpace = style.input`
    width: 32.4rem;
    height: ${props=>(props.num == 1) ? '3.7rem' : '7.3rem'};
    border: 0.1rem solid #D6CECE;
    border-radius: 0.8rem;
`;


const BottomWrap = style.div`
    width: 36.1rem;
    height: 9.8rem;
    border-radius: 1.2rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const AddBtn = style.div`
    width: 31.8rem;
    height: 4.8rem;
    border: ${props=>props.isHover ? 'none' : '0.2rem solid #333333;'};
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.6rem;
    font-weight: ${props=>props.isHover ? '700' : '500 '};
    color: ${props=>props.isHover ? '#ffffff' : '#3d3d3d'};
    background-color: ${props=>props.isHover ? '#FF7034' : '#ffffff'};
    box-shadow: ${props => (props.isHover ? '0rem 0rem 1.2rem rgba(0, 0, 0, 0.13)' : 'none')};
    display: flex;
    flex-direction: row;
    align-itmes: center;
    justify-content: center;
`;

const Space = style.div`
    height: 1.8rem;
`;
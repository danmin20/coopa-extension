import styled from 'styled-components';
import React, {useState} from 'react';

export default () => {
    const [isClick, setIsClick] = useState(false);
    const [isDelHover, setIsDelHover] = useState(false);
    const [isCancleHover, setIsCancleHover] = useState(false);

    const handleClick = () => {
        setIsClick(true);
    }

    const handleDelClick = () => {
        // 디렉토리 삭제
    }

    const handleDelMouseMove = () => {
        setIsDelHover(true);
    }

    const handleDelMouseLeave = () => {
        setIsDelHover(false);
    }

    const handleCancleMouseMove = () => {
        setIsCancleHover(true);
    }

    const handleCancleMouseLeave = () => {
        setIsCancleHover(false);
    }

    
    return(
        <>
            <Wrap onClick={handleClick} isClick={isClick} />
            <ModalWrap isClick={isClick}>
                <Text>쿠키 삭제</Text>
                <SmallText>이 쿠키를 정말 삭제하시겠어요?</SmallText>
                <BtnWrap>
                    <Btn 
                        onClick={handleClick}
                        isHover={isCancleHover}
                        onMouseMove={handleCancleMouseMove}
                        onMouseLeave={handleCancleMouseLeave}
                    >
                        취소
                    </Btn>
                    <Btn
                        onClick={handleDelClick}
                        isHover={isDelHover}
                        onMouseMove={handleDelMouseMove}
                        onMouseLeave={handleDelMouseLeave}
                    >
                        삭제
                    </Btn>
                </BtnWrap>
            </ModalWrap>
        </>
    )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 200;
    top:0%;
    left:0%;
    background: rgba(0, 0, 0, 0.5);
    display: ${props=>props.isClick ? 'none' : 'box'};
    flex-direction: column;
`;

const ModalWrap = styled.div`
    width: 55rem;
    height: 24.9rem;
    padding: 4.2rem 3.8rem;
    position: fixed;
    z-index: 300;
    background: #FFFFFF;
    border-radius: 1.4rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: ${props=>props.isClick ? 'none' : 'flex'};
    flex-direction: column;
`;

const Text = styled.div`
    font-size: 2.8rem;
    font-weight: 500;
    line-height: 3.6rem;
    color: #333333;
    margin-bottom: 1rem;    
`;

const SmallText = styled.div`
    font-size: 2rem;
    font-weight: normal;
    line-height: 3.6rem;
    color: #333333;
    margin-bottom: 3.1rem;
`;

const BtnWrap = styled.div`
    width: 47.2rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const Btn = styled.div`
    width: 9.8rem;
    height: 5.2rem;
    background: ${props=>props.isHover ? '#FF7134' : '#F3F3F4'};
    color: ${props=>props.isHover ? 'white' : '#404040'};
    border-radius: 1rem;
    font-style: normal;
    font-weight: 500;
    font-size: 2.1rem;
    line-height: 2.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1.5rem;
`;


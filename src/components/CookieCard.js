import React,{useState} from 'react';
import Styled from 'styled-components';
import Eximg from '../assets/img/eximg.svg';
import CardHover from './CardHover';

const CookieCardwarp = Styled.div`
    width: 360px;
    height: 490px;
    background: #C4C4C4;
    .image-area{
      margin-bottom: 30px;
    }
    .img{
      width: 360px;
height: 220px;
      object-fit: contain;
    }
    .text-area{
    }
    
    .title{
      margin: 0;
      margin-bottom: 16px;
      width: 360px;
      font-size: 24px;
      font-weight: bold;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-wrap : normal;
  word-break: break-all;
    }
    .text{
  margin: 0;
      margin-bottom: 34px;
      font-size: 18px;
      width: 360px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  word-wrap : normal;
  word-break: break-all;
    }
    .source-area{
      
    }
    
  .source-thumbnail{
    background: #1769FF;
    width: 35px;
height: 35px;
  }
`;

function CookieCard() {
    const [cardHover,setCardHover]=useState(false);
  return (
    <CookieCardwarp onMouseEnter={()=>setCardHover(true)} onMouseLeave={()=>setCardHover(false)}>
        {cardHover?(<CardHover/>):(" ")}
      <div className="image-area">
        <img src={Eximg} className="img" />
        {/*{memberData.profileUrl !== '' ? <img src={memberData.profileUrl} alt="profile" /> : <FileImageOutlined style={{ fontSize: '40px' }} />}*/}
      </div>
      <div className="title-area">
        <p className="title">트위터, 페리스코프를 종료한cccccccccccccccccccccccccccccccccccccccccccccccccccccccccrn startcccccc다</p>
      </div>

      <div className="text-area">
        <p className="text">5년 전, 트위터가 동영상에 미래를 맡겼었다는 사실은 꽤 놀라운 사실일 거다. 오늘날 트위터는 주절주dddddddddddddddddddddd절주절주줘루저ㅓ줘주저ㅜ</p>
      </div>

      <div className="source-area">
        <div className="source-thumbnail"></div>
      </div>
    </CookieCardwarp>
  );
}

export default CookieCard;
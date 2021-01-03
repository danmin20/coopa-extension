import {atom} from 'recoil';
import Img from '../assets/img/img_sample.svg';
import AuthorImg from '../assets/img/img_author.svg';

export const CookieState = atom({
  key: 'CookieState',
  default: [
    {
      thumbnail: Img,
      title: '타이틀이 한 줄이고 텍스트 없음',
      author: '작성자 이름',
      og: AuthorImg
    },
    {
      thumbnail: '',
      title: '타이틀이 한 줄이고 텍스트 없음',
      author: '작성자 이름',
      og: AuthorImg
    },
    {
      thumbnail: Img,
      title: '타이틀이 한 줄이고 텍스트 없음',
      author: '작성자 이름',
      og: AuthorImg
    },
    {
      thumbnail: '',
      title: '타이틀이 한 줄이고 텍스트 없음',
      author: '작성자 이름',
      og: AuthorImg
    },
    {
      thumbnail: Img,
      title: '타이틀이 한 줄이고 텍스트 없음',
      author: '작성자 이름',
      og: AuthorImg
    },
    {
      thumbnail: '',
      title: '타이틀이 한 줄이고 텍스트 없음',
      author: '작성자 이름',
      og: AuthorImg
    },
    {
      thumbnail: Img,
      title: '타이틀이 한 줄이고 텍스트 없음',
      author: '작성자 이름',
      og: AuthorImg
    },
    {
      thumbnail: '',
      title: '타이틀이 한 줄이고 텍스트 없음',
      author: '작성자 이름',
      og: AuthorImg
    }
  ]
});

export const ClipperPageNumState = atom({
  key: 'ClipperPageNumState',
  default: 0,
});

export const isClickNextPageState = atom({
  key: 'isClickNextPageState',
  default: false
});
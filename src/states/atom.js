import { atom } from 'recoil';
import Img from '../assets/img/img_sample.svg';
import AuthorImg from '../assets/img/img_author.svg';

export const CookieState = atom({
  key: 'CookieState',
  default: [
    {
      thumbnail: Img,
      directory: '1',
      title: '타이틀이 두 줄이고 프리뷰 텍스트가 없는 경우에는 이렇게 쓰인답니당',
      author: '작성자 이름',
      og: AuthorImg
    },
    {
      directory: '1',
      title: '썸네일 없고 타이틀 한 줄일 경우에',
      content: '5년 전, 트위터가 동영상에 미래를 맡겼었다는 사실은 꽤 놀라운 사실일 거다. 오늘날 트위터는 5년 전, 트위터가 동영상에 미래를 맡겼었다는 사실은 정말놀랍따고한다이잉이잉오잉잉이이잉',
      author: '작성자 이름',
      og: AuthorImg
    },
    {
      thumbnail: Img,
      directory: '1',
      title: '타이틀이 한 줄이고 텍스트 없음',
      author: '작성자 이름',
      og: AuthorImg
    },
    {
      thumbnail: Img,
      directory: '1',
      title: '타이틀이 한 줄이고 텍스트 있음',
      content: '5년 전, 트위터가 동영상에 미래를 맡겼었다는 사실은 꽤 놀라운 사실일 거다. 오늘날 트위터는 5년 전, 트위터가 동영상에 미래를 맡겼었다는 사실은 정말놀랍따고한다이잉이잉오잉잉이이잉',
      author: '작성자 이름',
      og: AuthorImg
    },
    {
      thumbnail: Img,
      directory: '1',
      title: '타이틀이 두 줄이고 프리뷰 텍스트가 없는 경우에는 이렇게 쓰인답니당',
      author: '작성자 이름',
      og: AuthorImg
    },
    {
      directory: '1',
      title: '썸네일 없고 타이틀 한 줄일 경우에',
      content: '5년 전, 트위터가 동영상에 미래를 맡겼었다는 사실은 꽤 놀라운 사실일 거다. 오늘날 트위터는 5년 전, 트위터가 동영상에 미래를 맡겼었다는 사실은 정말놀랍따고한다이잉이잉오잉잉이이잉',
      author: '작성자 이름',
      og: AuthorImg
    },
    {
      thumbnail: Img,
      directory: '1',
      title: '타이틀이 한 줄이고 텍스트 없음',
      author: '작성자 이름',
      og: AuthorImg
    },
    {
      thumbnail: Img,
      directory: '1',
      title: '타이틀이 한 줄이고 텍스트 있음',
      content: '5년 전, 트위터가 동영상에 미래를 맡겼었다는 사실은 꽤 놀라운 사실일 거다. 오늘날 트위터는 5년 전, 트위터가 동영상에 미래를 맡겼었다는 사실은 정말놀랍따고한다이잉이잉오잉잉이이잉',
      author: '작성자 이름',
      og: AuthorImg
    }
  ]
});

export const ClipperPageNumState = atom({
  key: 'ClipperPageNumState',
  default: 0
});

export const isClickNextPageState = atom({
  key: 'isClickNextPageState',
  default: false
});

export const listSelectState = atom({
  key: 'listSelectState',
  value: false
});

export const isCheckedState = atom({
  key: 'isCheckedState',
  default: false
});

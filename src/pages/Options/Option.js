import React from 'react';
import styled from 'styled-components';
import { Switch } from '../../common';
import meerkat from '../../assets/img/meerkat_option.svg';
import { NewTabToggleState } from '../../states/atom';
import { useRecoilState } from 'recoil';

export default () => {
  const [toggleState, setToggleState] = useRecoilState(NewTabToggleState);
  const handleToggle = e => {
    console.log('토글 상태', e.target.checked);
    if (!e.target.checked) {
      chrome.storage.sync.set({ defaultnewtab: true });
    } else {
      chrome.storage.sync.set({ defaultnewtab: false });
    }
    setToggleState(e.target.checked);
  };
  return (
    <Container>
      <div className="toggle">
        <div className="text">
          <div className="text__title">새 탭에서 열기</div>
          <div className="text__desc">매일 새 탭을 열 때마다 쿠키파킹과 함께하세요!</div>
        </div>
        <Switch className="toggle__btn" onChange={handleToggle} checked={toggleState} />
      </div>
      <img src={meerkat} alt="meerkat-img" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .toggle {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 28rem;
    width: 94.4rem;
    height: 14.2rem;
    background-color: rgba(243, 243, 243, 0.8);
    border-radius: 2rem;
    &__btn {
      position: absolute;
      right: 5.7rem;
    }
  }
  .text {
    margin-left: 6.4rem;
    &__title {
      font-size: 2.6rem;
      font-weight: 500;
      line-height: 3.1rem;
      color: ${({ theme }) => theme.colors.black_2};
    }
    &__desc {
      margin-top: 1.3rem;
      font-size: 2rem;
      line-height: 2.4rem;
      color: ${({ theme }) => theme.colors.gray_5};
    }
  }
  img {
    margin-top: 7.8rem;
    width: 21.4rem;
    height: 30rem;
  }
`;

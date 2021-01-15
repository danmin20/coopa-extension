## 🍪 Cookie Parking : 쿠키파킹의 귀염탱, WEB


### 🖥 CookieParking의 뷰 소개

### 랜딩페이지
![landing](https://sopt-juno.s3.ap-northeast-2.amazonaws.com/landingpage.png)
👉 [쿠키파킹의 랜딩페이지 바로가기](www.cookieparking.com/landing)   
**프로덕트 마케팅을 위한 랜딩 페이지**

다양한 인터렉션, 반응형을 통해 사용자에게 매력적으로 보일 수 있도록 도움

- 반응형 설정
- 애니메이션 설정
- 크롬 웹스토어 링크 연결
- react-reveal 라이브러리 사용

### 로그인
![login](https://sopt-juno.s3.ap-northeast-2.amazonaws.com/login.png)

**사용자 로그인을 위한 로그인 페이지**

한번의 클릭으로 구글계정 연동을 할 수 있도록 안내

- react-google-login 라이브러리 사용
- localStorage에 로그인 여부 변수, 사용자 토큰 저장
- 반응형 구현

### 뉴탭_온보딩
![onboarding](https://sopt-juno.s3.ap-northeast-2.amazonaws.com/onboarding.png)


**신입 사용자를 위한 온보딩 페이지**

이미지와 문구를 사용 스탭별로 안내하여 처음 진입한 사용자의 적응을 도움

- 이미지 슬라이더를 구현하여 페이지별로 사진이 자연스럽게 넘어가도록 함
- 페이지별로 버튼(다음, 이전)을 조건부 렌더링
- 버튼에 기능(페이지 이동, 모달 on/off) 추가
- 페이지별 텍스트, carousel 설정
- recoil의 atom에 `OnboardingState`를 두어 헤더의 아이콘을 누르면 모달창이 뜨도록 구현

### 팝업_웹 클리퍼
![webclipper](https://sopt-juno.s3.ap-northeast-2.amazonaws.com/webclipperGIF.gif)

**파비콘을 통해 손쉽게 웹페이지를 저장할 수 있는 웹 클리퍼**

원하는 웹 페이지를 빠르게 저장하고 분류할 수 있도록 플로우 최적화

- 라우팅과 같은 효과를 주기 위해 페이지 넘버 변수 사용
- background/index.js 에서 chrome.API를 사용하여 파비콘 클릭 시 자동으로 웹사이트에 데이터를 크롤링 할 수 있도록 설정.
- 로그인 전,후를 구분할 수 있도록 Local Storage 에 변수 저장
- popup extension 설정
- react-lottie 라이브러리 사용

### 뉴탭_ 올쿠키(메인페이지)
![allcookies](https://sopt-juno.s3.ap-northeast-2.amazonaws.com/allcookies.png)


**새 창을 띄울 때 마다 사용자가 저장했던 웹페이지를 모아보는 뉴탭 익스텐션** 

웹 클리퍼를 통해 파킹해온 쿠키들을 그리드 뷰를 통해 보여줌으로써 편의성을 더함

- 쿠키의 이름, 내용 등 키워드 검색을 통해 간편하게 원하는 쿠키를 바로 찾을 수 있음
- 익스텐션 특성 상 라우팅 대신 Allcookies, SearchCookie, 결과를  `cookieState` 를 recoil의 `atom` (redux에서의 store와 유사한 개념)에 저장함 으로써 받아오는 데이터에 따라 새로 렌더링 되도록 구현함
- `읽지 않은 쿠키` 버튼 토글 한번으로 사용자가 읽지 않은 쿠키로 `atom` 의 state를 변경하여 리렌더링하여 보여줌
- 저장한 쿠키가 없을 경우 empty 뷰를 보여줌

### 뉴탭_디렉토리
![directory](https://sopt-juno.s3.ap-northeast-2.amazonaws.com/directory.png)


**디렉토리 생성과 분류를 통해,\ 가장 익숙하고 단순한 방식으로 정리**

- 웹 클리퍼에서 뿐만 아니라 뉴탭 익스텐션에서도 새 디렉토리를 만들 수 있도록 구현
- Allcookies 와 동일하게 directory도 dirState 라는 하나의 atom에 검색 결과 / 전체 디렉토리를 api 호출에 따라 리렌더링 되도록 구현
- cookie가 비었을땐, empty 뷰를 보여줌

### 디렉토리 상세
![directory_detail](https://sopt-juno.s3.ap-northeast-2.amazonaws.com/directory+detail.png)

**분류한 웹페이지를 확인하고 공유할 수 있는 디렉토리 상세 페이지**

자신페이지 공유를 통해 타인의 디렉토리를 확인할 수 있음

- 디렉토리 공유를 하여 공유 링크를 생성할 수 있음
- 내 디렉토리 상세 페이지의 경우, 수정과 같은 인터렉션이 가능함
- 공유 링크와 내 디렉토리 상세 링크를 다르게 하여 공유 링크의 경우, 추후 링크 파쇄가 가능함

### 마이페이지
![directory_detail](https://sopt-juno.s3.ap-northeast-2.amazonaws.com/mypage.png)


**사용자 정보를 수정하고 확인할 수 있는 마이페이지**

지속적 재방문을 위해 콘텐츠를 저장하고 재방문할 때마다 쿠키가 쌓이는 것을 시각적으로 보여줌

- CSS animation 을 통해 리워드 시각화
- 모달을 통해 프로필 편집
- react-lottie 라이브러리 사용
- 로그아웃


### 🏡 프로젝트 구조

```
📦 src
 ┣ 📂 assets
 ┃ ┣ 📂 img
 ┃ ┗ 📂 themes
 ┃ ┃ ┗ 📜 index.js
 ┣ 📂 pages
 ┃ ┣ 📂 Background
 ┃ ┃ ┣ 📜 index.html
 ┃ ┃ ┗ 📜 index.js
 ┃ ┣ 📂 Newtab
 ┃ ┃ ┣ 📜 index.html
 ┃ ┃ ┣ 📜 index.css
 ┃ ┃ ┣ 📜 index.js
 ┃ ┃ ┣ 📜 App.js
 ┃ ┃ ┗ 📜 Newtab.js
 ┃ ┗ 📂 Popup
 ┃ ┃ ┣ 📜 index.html
 ┃ ┃ ┣ 📜 App.js
 ┃ ┃ ┣ 📜 index.js
 ┃ ┃ ┣ 📜 Loading.js
 ┃ ┃ ┣ 📜 index.css
 ┃ ┃ ┣ 📜 AddDir.js
 ┃ ┃ ┣ 📜 Directory.js
 ┃ ┃ ┣ 📜 Finish.js
 ┃ ┃ ┣ 📜 Main.js
 ┃ ┃ ┣ 📜 Popup.js
 ┃ ┃ ┗ 📜 Login.js
 ┣ 📂 components
 ┃ ┣ 📜 Directory.js
 ┃ ┣ 📜 AllCookies.js
 ┃ ┣ 📜 CardHover.js
 ┃ ┣ 📜 Card.js
 ┃ ┣ 📜 DirCard.js
 ┃ ┣ 📜 Switch.js
 ┃ ┗ 📜 ToastMsg.js
 ┣ 📂 hooks
 ┃ ┗ 📜 useInput.js
 ┣ 📂 lib
 ┃ ┗ 📂 api
 ┃ ┃ ┣ 📜 cookieApi.js
 ┃ ┃ ┗ 📜 directoryApi.js
 ┣ 📂 states
 ┃ ┗ 📜 atom.js
 ┗ 📜 manifest.json
```

### 📚 기술 스택 및 라이브러리

```
React
JavaScript es6
axios
recoil
react-google-login
react-lottie
styled-components
material-ui
webpack
```

### 🥰 쿠키파킹의 웹둥이들 

| **🙋🏻 [이준호](https://github.com/juno7803)** | **🙋🏻‍♀️ [이정민](https://github.com/danmin20)** | **🙋🏻‍♀️ [이현진](https://github.com/junyup0319)** |
| :---: | :---: | :---: |
| ![준호사진](https://sopt-juno.s3.ap-northeast-2.amazonaws.com/junoposter.jpeg) | ![정민사진](https://sopt-juno.s3.ap-northeast-2.amazonaws.com/jm.jpeg)  | ![현진사진](https://sopt-juno.s3.ap-northeast-2.amazonaws.com/hj.gif) |
| 웹 개발자 | 웹 개발자 | 웹 개발자 |
| directory detail 페이지 구현(web) <br/>newtab extension 구현 <br /> 랜딩 페이지 제작 |프로젝트 세팅 (웹팩, 린트 등) 및 관리  <br /> 리팩토링 및 전체적인 코드 리뷰 |popup extension 구현 <br /> 웹클리퍼 기능 구현 <br /> 구글 로그인 연동 |

|**🙋🏻‍♀️ [안채린](https://github.com/achrvv)** | **🙋🏻‍♀️ [천주윤](https://github.com/ewq3167)** |
| :---: | :---: |
| ![채린사진](https://sopt-juno.s3.ap-northeast-2.amazonaws.com/bong.gif) | ![주윤사진](https://sopt-juno.s3.ap-northeast-2.amazonaws.com/jyun.gif) |
| 웹 개발자 | 웹 개발자 |
|상세 디렉토리 리스트 구현 <br /> 온보딩 구현 <br /> 프로젝트 세팅 선 구현|Card 컴포넌트 구현 <br /> 프로젝트 매니징 <br />|

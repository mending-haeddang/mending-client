# ⭐ 멜팅(Melting) ⭐


### 서비스 한 줄 소개
**: 아이스한 분위기 멜팅으로 녹여봐요 🧊 🔥**

처음 만난 사람들이 어색한 분위기를 풀고 싶을 때,
아이스 브레이킹을 위한 질문과 답변 공간을 제공합니다.

### 개발 담당 부분
#### 희선: Intro, Create, Join
- Intro: 사용자 이름 입력
![main_name](https://user-images.githubusercontent.com/70877186/142742868-ee553efc-38b7-49cb-a170-b7f63a6fb0b9.png)

- Intro: 멜터/멜티 선택
![main_character](https://user-images.githubusercontent.com/70877186/142742870-54f88256-23af-45da-8b57-33f9fa63a7b8.png)

- Create: (멜터) 팀 인원수 설정 및 멜팅코드 공유
![main_melter1](https://user-images.githubusercontent.com/70877186/142742874-83d5f0a5-0ed7-4bde-8c34-4bdcf5694874.png)

- Join: (멜티) 멜팅코드 입력 후 입장
![main_melter2](https://user-images.githubusercontent.com/70877186/142742875-3a9e6a21-39e2-4383-b683-51990fd4c378.png)


#### 세연: Main
- Main: 3초간 안내 화면
![main_start](https://user-images.githubusercontent.com/70877186/142742883-be3d34b8-793d-4a07-836e-615e262182a1.png)

- Main: 질문에 대한 답변 작성 후, 모든 팀원이 작성 완료할 때까지 대기
![main_input1](https://user-images.githubusercontent.com/70877186/142742885-50f31e3c-3ae6-4297-8fcc-3ec1fdd9b603.png)


#### 소희: Result, Ending
- Result: 해당 질문에 대한 모든 팀원의 답변 확인하기
![main_reply](https://user-images.githubusercontent.com/70877186/142742886-ffe97ec4-a83e-4b0a-9f38-166892e1e4aa.png)

- Ending: 아이스멜팅 마무리
![main_final](https://user-images.githubusercontent.com/70877186/142742889-24ce1bca-02b0-49d4-942a-7b703c66e4af.png)


### 기술 스택
![react](https://img.shields.io/badge/-react-58c3ff?labelColor=white&logo=React)
![javascript](https://img.shields.io/badge/-javascript-ffd700?labelColor=white&logo=JavaScript)
![html5](https://img.shields.io/badge/-html5-fe765a?labelColor=white&logo=HTML5)
![css3](https://img.shields.io/badge/-css3-white?labelColor=blue&logo=CSS3)

### 사용 라이브러리
```
"axios": "^0.24.0",
 "json-server": "^0.17.0",
 "react": "^17.0.2",
 "react-dom": "^17.0.2",
 "react-router-dom": "^6.0.2",
 "styled-components": "^5.3.3",
 "eslint": "^7.11.0",
 "husky": "^7.0.4",
 "prettier": "^2.4.1"
```

### Code convention
- eslint, prettier사용
- react-router-dom v.6
- 컴포넌트는 화살표 함수로 선언
- props는 구조분해할당 객체로 받아오기
- event handler 함수는 HandleEvent 형식으로 선언
- styled-components는 className 없이 선택자만으로 사용
- styled-components의 이름은 StyledComponent 형식으로 사용
- 변수, 폴더명, 컴포넌트가 아닌 js 파일은 camelCase로 선언
- 컴포넌트 파일은 UpperCamelCase.jsx로 선언


### Commit message convention
- feat: 새로운 기능의 추가  
- fix: 버그 수정
- docs: 문서 수정
- style: 스타일 관련 기능(코드 포맷팅, 세미콜론 누락, 코드 자체의 변경이 없는 경우)
- refactor: 코드 리팩토링
- test: 테스트 코트, 리팩토링 테스트 코드 추가
- chore: 빌드 업무 수정, 패키지 매니저 수정(ex .gitignore 수정 같은 경우)


### Git Branch convention
- Git Flow 방식

main : 최종적으로 배포되는 브랜치

develop : feature 브랜치가 merge되는 개발의 중심 브랜치

feature/{구현기능명} : develop 브랜치 아래에서 컴포넌트 기능 단위로 나누어 브랜치 만들기


### Directory Structure
```
⎡ 📁 public
⎜  ⎿ index.html
⎣ 📁 src
   ⎿ 📁 assets
   ⎹  ⎿ 📁 fonts
   ⎹  ⎿ 📁 icons
   ⎹  ⎿ 📁 images
   ⎿ 📁 components
   ⎹  ⎿ 📁 common
   ⎹  ⎿ 📁 create
   ⎹  ⎿ 📁 ending
   ⎹  ⎿ 📁 intro
   ⎹  ⎿ 📁 join
   ⎹  ⎿ 📁 main
   ⎹  ⎿ 📁 result
   ⎿ 📁 libs
   ⎹  ⎿ 📁 constant
   ⎹  ⎹  ⎿ colors.js
   ⎹  ⎿ api.js
   ⎿ 📁 pages
   ⎹  ⎿ Create.jsx
   ⎹  ⎿ Ending.jsx
   ⎹  ⎿ Intro.jsx
   ⎹  ⎿ Join.jsx
   ⎹  ⎿ Main.jsx
   ⎹  ⎿ Result.jsx
   ⎿ APP.js
   ⎿ index.js
```




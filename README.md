# ⭐ 멜팅(Melting) ⭐


### 서비스 한 줄 소개
**: 아이스한 분위기 멜팅으로 녹여봐요 🧊 🔥**

처음 만난 사람들이 어색한 분위기를 풀고 싶을 때,
아이스 브레이킹을 위한 질문과 답변 공간을 제공한다.

### 개발 담당 부분
- 희선: Intro, Create, Join
- 세연: Main
- 소희: Result, Ending

### Tech
![react](https://img.shields.io/badge/-react-58c3ff?labelColor=white&logo=React)
![javascript](https://img.shields.io/badge/-javascript-ffd700?labelColor=white&logo=JavaScript)
![html5](https://img.shields.io/badge/-html5-fe765a?labelColor=white&logo=HTML5)
![css3](https://img.shields.io/badge/-css3-white?labelColor=blue&logo=CSS3)


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
   ⎹  ⎿ 📁 main
   ⎿ 📁 libs
   ⎹  ⎿ 📁 constant
   ⎹  ⎹  ⎿ colors.js
   ⎹  ⎿ api.js
   ⎿ 📁 pages
   ⎹  ⎿ Main.jsx
   ⎿ APP.js
   ⎿ index.js
```



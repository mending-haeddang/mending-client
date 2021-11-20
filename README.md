# ⭐ Mending Web Frontend ⭐

### Tech
![react](https://img.shields.io/badge/-react-58c3ff?labelColor=white&logo=React)
![javascript](https://img.shields.io/badge/-javascript-ffd700?labelColor=white&logo=JavaScript)
![html5](https://img.shields.io/badge/-html5-fe765a?labelColor=white&logo=HTML5)
![css3](https://img.shields.io/badge/-css3-white?labelColor=blue&logo=CSS3)


### Code convention
- eslint, prettier사용


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
⎡ 📁 Public
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



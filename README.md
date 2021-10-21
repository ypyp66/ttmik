## TTMIK 과제

### 1.스탑워치, 타이머 구현

- 타이머
  - 웹 워커를 이용한 백그라운드 동작 구현
  - 배경 클릭 시 랜덤 배경 설정
  - 1분 미만 시 빨간색으로 변경 및 애니메이션 추가
  - document title도 같이 변경
  ######
  - 실행 방법
    - /timer/index.html 을 live Server로 실행

######

- 스탑워치
  ######
  - 일시정지 후 시작 시 이전 시간부터 실행
  - 리셋 버튼 클릭 시 시간 초기화
  - 10ms 단위로 작동
  ######
  - 실행 방법
    - /stopwatch/index.html 을 live Server로 실행

### 2. React를 활용한 todoList 구현

- 아이템 체크, 수정
- 아이템 체크 시 수정 불가
- 리스트 순서 변경
- hook 기반
- 로컬 스토리지 이용
- 하단에 남은 할 일 표시

######

- 실행 방법
  - cd todolist
  - yarn start

### 3. 네이버 실시간 검색어 추출 웹앱 또는 API

- https://datalab.naver.com/ 의 인기 검색어 추출
  ######
- 실행 방법
  - cd api
  - node index.js
  - http://localhost:5000/naver/realtime 접속

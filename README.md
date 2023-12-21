## Todo App

할 일을 정리하여 작업을 명확하게 할 수 있고 일을 계획하는데서 생산적으로 시간을 활용 할 수 있는 어플리케이션

## 개발의도

해야 할 일을 머리속으로 기억만 하고 있으면 곧잘 하나 둘 빼먹거나 순서나 할 일이 생각이 나지않아 일을 그르치는 경우를 미연에 방지하기 위해서 일반적으로 스티커메모를 사용한다. 이를 어플리케이션화 하여 작업 도중에도 최적화된 프로그램으로 그때 그때 확인 할 수 있는 프로그램이 있으면 편하겠다는 생각이 들어 간단한 프로그램을 만들어보았다.

## 2차 디자인 수정 사항

<Input>
input border-bottom 삭제
add color #3282f3(point color)

<Line>
실선 Container와 동일하게 수정
count, 완료페이지 이동 위로 이동 (상하 간격 22px)

<Container>
border color #dbdbdb 변경
패딩 1% 3% => 30px 수정
전체선택 밑 border 제거
전체선택 체크박스 24px / 글씨 크기 조금 더 크게, 색은 연한색(#555)
<box> 안쪽 간격 24px, 쉐도우(0 0 10px rgba(0,0,0,0.1)), 간격 up
<box> cursor-pointer
수정버튼 색 좀 연하게 (#555)
포지션 x => margin 0 auto
컨테이너 높이 수정 (50% -> 70%)

<M>
<Container> padding값 20px로 수정
<Input>, <button> 다시 제자리로 수정

<기타>
button 디자인수정(밑줄 빼기)
완료페이지 뒤로가기 버튼으로 바꾸기
전체선택 색감 통일(#3282f3(point color))
asdnasasdasd

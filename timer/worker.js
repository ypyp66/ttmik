let minute; // 1씩 증가시켜서 전달할 변수
let second = 0;
let total;

// 메시지 수신
self.onmessage = function (e) {
  minute = e.data;
  total = e.data * 60;

  loop();
};

// 호출한 페이지에 1씩 증가시킨 i를 1초마다 전달한다.
function loop() {
  // 1씩 증가시켜서 전달
  min = Math.floor(total / 60);
  sec = total % 60;

  if (min < 0) {
    postMessage({ min: Math.abs(min + 1), sec: Math.abs(sec) });
  } else {
    postMessage({ min, sec });
  }
  total -= 1;
  // 1초뒤에 다시 실행
  setTimeout(function () {
    loop();
  }, 1000);
}

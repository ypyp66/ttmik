let minutes = 0;
let seconds = 0;
let millisec = 0;

const $millisec = document.getElementById("millisec");
const $second = document.getElementById("seconds");
const $minutes = document.getElementById("minutes");
const $startBtn = document.getElementById("start");
const $stopBtn = document.getElementById("stop");
const $resetBtn = document.getElementById("reset");

let interval;

$startBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(operateTimer, 10);
});

$stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});

$resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  millisec = 0;
  seconds = 0;
  minutes = 0;
  $millisec.textContent = "00";
  $second.textContent = "00";
  $minutes.textContent = "00";
});

// 10ms 마다 시간에 대한 숫자가 증가한다!
function operateTimer() {
  millisec++;

  $millisec.textContent = millisec > 9 ? millisec : "0" + millisec;

  if (millisec > 99) {
    seconds++;
    $second.textContent = seconds > 9 ? seconds : "0" + seconds;
    millisec = 0;
    $millisec.textContent = "00";
  }

  if (seconds > 59) {
    minutes++;
    $minutes.textContent = minutes > 9 ? minutes : "0" + minutes;
    seconds = 0;
    $second.textContent = "00";
  }
}

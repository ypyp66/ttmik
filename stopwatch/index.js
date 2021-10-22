let worker;

const $millisec = document.getElementById("millisec");
const $second = document.getElementById("seconds");
const $minutes = document.getElementById("minutes");

const $startBtn = document.querySelector(".start");
const $stopBtn = document.querySelector(".stop");
const $resetBtn = document.querySelector(".reset");

let interval;

$startBtn.addEventListener("click", () => {
  worker.postMessage("start");
});

$stopBtn.addEventListener("click", () => {
  worker.postMessage("stop");
});

$resetBtn.addEventListener("click", () => {
  worker.postMessage("reset");
});

function startWorker() {
  if (!!window.Worker) {
    if (worker) {
      stopWorker();
    }
  }
  worker = new Worker("worker.js");

  worker.onmessage = (e) => {
    const { minutes, seconds, millisec } = e.data;

    $minutes.textContent = minutes;
    $second.textContent = seconds;
    $millisec.textContent = millisec;
  };
}

function stopWorker() {
  if (worker) {
    worker.terminate();
    worker = null;
  }
}

startWorker();

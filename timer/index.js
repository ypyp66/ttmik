const root = document.getElementById("root");
const timer = prompt("분을 입력해주세요");
const timeTosecond = timer * 60;
let worker;
let i = 0;
let check = false;

// worker 실행
function startWorker() {
  if (!!window.Worker) {
    if (worker) {
      stopWorker();
    }

    worker = new Worker("worker.js");
    worker.postMessage(timer);

    worker.onmessage = function (e) {
      const { min, sec } = e.data;
      const dashArray = 140 * 2 * Math.PI;
      let templates = `
      <div class="circle_progress_wrap  ${min === 0 && "breath soon"}">
        <svg
            class="circle_progress"
            width="400"
            height="400"
            viewBox="0 0 400 400"
        >
            <circle class="frame" cx="200" cy="200" r="140" stroke-width="25" />
            <circle
            class="bar  ${
              (min === 0 || check) && "soon"
            }" cx="200" cy="200" r="140"
            stroke-width="25"
            stroke-dasharray="${dashArray}"
            stroke-dashoffset="{{__dashOffset__}}"
            />
        </svg>
        <div class="value ${(min === 0 || check) && "soon"}">{{__timer__}}</div>
      </div>`;

      let percent = (1 / timeTosecond) * i++;
      let dashOffset = dashArray * (1 - percent);

      templates = templates.replace(
        "{{__timer__}}",
        `${check ? `-${min}` : min} : ${sec}`
      );
      templates = templates.replace("{{__dashOffset__}}", dashOffset);

      document.title = `${check ? `-${min}` : min} : ${sec}`;
      root.innerHTML = templates;

      if (min === 0 && sec === 0) check = true;
    };
  }
}

// worker 중지
function stopWorker() {
  if (worker) {
    worker.terminate();
    worker = null;
  }
}

root.addEventListener("click", () => {
  fetch(
    `https://random.imagecdn.app/${window.outerWidth}/${window.outerHeight}`
  ).then((response) => {
    root.style.backgroundImage = `url('${response.url}')`;
  });
});

startWorker();

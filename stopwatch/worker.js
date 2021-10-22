let minutes = 0;
let seconds = 0;
let millisec = 0;
let interval;

self.onmessage = function (e) {
  clearInterval(interval);
  switch (e.data) {
    case "start":
      interval = setInterval(loop, 10);
      return;
    case "stop":
      return;
    case "reset":
      minutes = 0;
      seconds = 0;
      millisec = 0;

      postMessage({
        minutes: `0${minutes}`,
        seconds: `0${seconds}`,
        millisec: `0${millisec}`,
      });
      return;
  }
};

function loop() {
  millisec++;

  if (millisec > 99) {
    seconds++;
    millisec = 0;
  }

  if (seconds > 59) {
    minutes++;
    seconds = 0;
  }

  postMessage({
    minutes: minutes > 9 ? minutes : `0${minutes}`,
    seconds: seconds > 9 ? seconds : `0${seconds}`,
    millisec: millisec > 9 ? millisec : `0${millisec}`,
  });
}

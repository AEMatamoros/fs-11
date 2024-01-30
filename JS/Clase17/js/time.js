let start = document
  .getElementById("start")
  .addEventListener("click", startTimer);
let stop = document.getElementById("stop").addEventListener("click", stopTimer);
let restart = document
  .getElementById("restart")
  .addEventListener("click", restartTimer);
let screen = document.getElementById("screen");

let timer;
let stoped = false;
let lastElapsedTime = 0;
let lapsedTime = 0;
function startTimer() {
  let startingTime;

  startingTime = new Date().getTime();

  timer = setInterval(updateTimer, 1000, startingTime);
}

function updateTimer(startingTime) {
  //   console.log(startingTime);
  //   console.log(Date.now());
  lapsedTime = Date.now() - startingTime;
  if (stoped) {
    lapsedTime = lapsedTime + lastElapsedTime;
  } else {
    lastElapsedTime = lapsedTime;
  }

  let seg = Math.floor(lapsedTime / 1000) % 60;
  let mins = Math.floor(lapsedTime / (1000 * 60)) % 60;
  let horas = Math.floor(lapsedTime / (1000 * 60 * 60)) % 60;

  screen.textContent = `${horas < 10 ? "0" + horas : horas}:${
    mins < 10 ? "0" + mins : mins
  }:${seg < 10 ? "0" + seg : seg}`;
}

function stopTimer() {
  stoped = true;
  lastElapsedTime = lapsedTime;
  lapsedTime = 0;
  clearInterval(timer);
}

function restartTimer() {
  stoped = false;
  clearInterval(timer);
  screen.textContent = `00:00:00`;
}

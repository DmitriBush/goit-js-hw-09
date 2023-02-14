const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

stopBtn.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = 0;

startBtn.addEventListener('click', () => {
  stopBtn.disabled = false;
  startBtn.disabled = true;
  body.style.background = getRandomHexColor();
  console.log(body.style.backgroundColor);
  timerId = setInterval(() => {
    body.style.background = getRandomHexColor();
  }, 1000);
});

// startBtn.addEventListener('click', changeColor);

// function changeColor() {
//   stopBtn.disabled = false;
//   startBtn.disabled = true;
//   body.style.background = getRandomHexColor();
//   console.log(body.style.backgroundColor);
//   timerId = setInterval(() => {
//     body.style.background = getRandomHexColor();
//   }, 1000);
// }

stopBtn.addEventListener('click', () => {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(timerId);
});

// stopBtn.addEventListener('click', stopChangeColor);

// function stopChangeColor() {
//   startBtn.disabled = false;
//   stopBtn.disabled = true;
//   clearInterval(timerId);
// }

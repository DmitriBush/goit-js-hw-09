const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let timer = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', () => {
  timer = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    console.log(body.style.backgroundColor);
  }, 1000);
  startBtn.setAttribute('disabled', '');
});

// startBtn.addEventListener('click', changeColor);

// function changeColor() {
//   timer = setInterval(() => {
//     body.style.backgroundColor = getRandomHexColor();
//     console.log(body.style.backgroundColor);
//   }, 1000);
//   startBtn.setAttribute('disabled', '');
// }

stopBtn.addEventListener('click', () => {
  clearInterval(timer);
  startBtn.removeAttribute('disabled');
});

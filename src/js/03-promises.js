import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onPromiseGenerate);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onPromiseGenerate(event) {
  event.preventDefault();
  const formElement = event.currentTarget.elements;
  const delayFirst = formElement.delay.value;
  const step = formElement.step.value;
  const amount = formElement.amount.value;

  for (let i = 1; i <= amount; i += 1) {
    const delay = +delayFirst + +step * (i - 1);
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

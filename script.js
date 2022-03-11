const api = "https://api.adviceslip.com/advice";
const advice = document.querySelector("#advice");
const btn = document.querySelector("#btn");
const idAdvice = document.querySelector("#idAdvice");

function getAdvice() {
  fetch(api)
    .then((response) => response.json())
    .then(function (data) {
      advice.innerHTML = data.slip.advice;
      idAdvice.innerHTML = data.slip.id;
    });
}
getAdvice();
btn.addEventListener("click", getAdvice);

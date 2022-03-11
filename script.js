const api = "https://api.adviceslip.com/advice";
const advice = document.querySelector("#advice");
const btn = document.querySelector("#btn");
const idAdvice = document.querySelector("#idAdvice");
const container = document.querySelector(".container");

function getAdvice() {
  btn.classList.add("rotate");
  container.classList.add("smooth");
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      advice.innerHTML = data.slip.advice;
      idAdvice.innerHTML = data.slip.id;
      btn.classList.remove("rotate");
      container.classList.remove("smooth");
    });

  console.log(container.clientWidth, container.clientHeight);
}
getAdvice();
btn.addEventListener("click", getAdvice);

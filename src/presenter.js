import sumar from "./sumador";
import multiplicar from "./multiplicador";

// Sumador
const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

// Multiplicador
const firstMult = document.querySelector("#primer-numero-mult");
const secondMult = document.querySelector("#segundo-numero-mult");
const formMult = document.querySelector("#multiplicar-form");
const divMult = document.querySelector("#resultado-mult-div");

formMult.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstMult.value);
  const secondNumber = Number.parseInt(secondMult.value);

  divMult.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});

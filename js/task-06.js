"use strict";
/*
<div id="controls">
    <input type="number" min="1" max="100" step="1" />
    <button type="button" data-create>Create</button>
    <button type="button" data-destroy>Destroy</button>
</div>
*/


const divControl = document.querySelector("#controls");
const btnCreate = document.querySelector("#controls button[data-create]");
const btnDestroy = document.querySelector("#controls button[data-destroy]");
const divChange = document.querySelector("#boxes");
const inputNumber = document.querySelector("#controls input[type=number]");

btnCreate.addEventListener("click", getNumber);
btnCreate.addEventListener("click", reset);

btnDestroy.addEventListener("click", putAwayBoxes);

let keypressCounter = 1;



function getNumber(event) {

  let amount = inputNumber.value;
  
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Введіть число від 1 до 100");
    btnCreate.addEventListener("click", reset);
  }
  
}

function putAwayBoxes() {
  divChange.innerHTML = "";
}
function createBoxes(amount) {
  divChange.innerHTML = ""; 
  let count = 10;
  let i = 30;
  let b = 100;
  for (let index = 1; index <= amount; index++) {
    let color = getRandomHexColorr();
    let colorBorder = getRandomHexColorr();
    const strHtml = `<div 
    style="
    width:${i}px;
    height:${i}px;
    border:1px solid ${colorBorder};
    margin-left: ${b}px;
    background-color: ${color}">
    </div>`;
    divChange.insertAdjacentHTML("beforeend", strHtml);
    b -= 5;
    i += count;
}
    if(type === "click"){
      incrementKeypressCounter();
    }

  
  btnCreate.addEventListener("click", reset);
}

function reset() {
  keypressCounter = 1;
  inputNumber.value = "";
}

function incrementKeypressCounter() {
  keypressCounter += 1;
}

function getRandomHexColorr() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

getRandomHexColorr();

/*
const divControl = document.querySelector("#controls");
const btnCreate = document.querySelector("#controls button[data-create]");
const btnDestroy = document.querySelector("#controls button[data-destroy]");
const divChange = document.querySelector("#boxes");
const inputNumber = document.querySelector("#controls input[type=number]");
btnCreate.addEventListener("click", getNumber);
btnDestroy.addEventListener("click", putAwayBoxes);
function getNumber() {

  let amount = inputNumber.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Введіть число від 1 до 100");
  }
  inputNumber.value.reset();
  inputNumber.value = "";
  
}
function putAwayBoxes() {
  divChange.innerHTML = "";
}
function createBoxes(amount) {
  let count = 10;
  let i = 30;
  let b = 100;
  for (let index = 1; index <= amount; index++) {
    let color = getRandomHexColorr();
    let colorBorder = getRandomHexColorr();
    const strHtml = `<div
    style="
    width:${i}px;
    height:${i}px;
    border:1px solid ${colorBorder};
    margin-left: ${b}px;
    background-color: ${color}">
    </div>`;
    divChange.insertAdjacentHTML("beforeend", strHtml);
    b -= 5;
    i += count;
  }
}
function getRandomHexColorr() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

getRandomHexColorr();
*/
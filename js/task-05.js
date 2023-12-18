
"use strict";

/* 5. щоб записати і задати однаковий колір, його спочатку 
треба отримати в зміну а потім зодати в спан і повішати
на фон, а у вас зараз різнце значення в span і body


Напиши скрипт, який змінює колір фону елемента <body>
через інлайн-стиль по кліку на button.change-color і
задає це значення кольору текстовим вмістом для span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
*/


const body = document.querySelector("body");
const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handlerChangeColor(event) {
  const color = getRandomHexColor(); 
  body.style.backgroundColor = color;
  console.log(body.style.backgroundColor);
  colorSpan.color = color;
  colorSpan.textContent = `${color}`;
  console.log(colorSpan.textContent);

};

getRandomHexColor();

changeColorButton.addEventListener("click", handlerChangeColor);



/*
const body = document.querySelector("body");
const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handlerChangeColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = getRandomHexColor();
};

getRandomHexColor(); 

changeColorButton.addEventListener("click", handlerChangeColor);

*/
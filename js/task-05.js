
"use strict";




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
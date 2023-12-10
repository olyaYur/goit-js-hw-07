"use strict";


const inputField = document.querySelector('#name-input');
const linkH1 = document.querySelector("#name-output");

const handleInput = (event) => {
    if(inputField.textContent === " ") {
        linkH1.textContent = "Anonymous"
    } else {
        linkH1.textContent = event.currentTarget.value;
    }
}

inputField.addEventListener("input", handleInput);

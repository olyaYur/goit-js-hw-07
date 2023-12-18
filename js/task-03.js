"use strict";


const inputField = document.querySelector('#name-input');
const linkH1 = document.querySelector("#name-output");

const handleInput = (event) => {
    if(event.currentTarget.value === "" || event.currentTarget.value.match(/^\s*$/)) {
        linkH1.textContent = "Anonymous"
    } else {
        linkH1.textContent = event.currentTarget.value.trim();
    }
}

inputField.addEventListener("input", handleInput);




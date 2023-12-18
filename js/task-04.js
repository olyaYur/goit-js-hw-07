
"use strict"; 

 const loginForm = document.querySelector(".login-form");


function handlerLoginForm(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  let arr = {login: form.email.value, password: form.password.value};


  
  if(email === ""|| password === "") {
    return alert("All form fields must be filled in");
  } else {
    return console.log(arr);
    
    form.reset();
  }

};

loginForm.addEventListener("submit", handlerLoginForm);



/* 
function handlerLoginForm(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if(email === ""|| password === "") {
    return alert("All form fields must be filled in");
  } else {
    console.log(`Login: ${form.email.value}, Password: ${form.password.value}`);
    form.reset();
  }

};

*/

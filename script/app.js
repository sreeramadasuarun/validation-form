"use strict";

// elements
//.....................................
const formEl = document.getElementById("form");
const usernameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const confirmPasswordEl = document.getElementById("confirmpassword");
//.....................................

//Event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  submit();
});

//functions
const setErrorFor = (input, message) => {
  //get form-container

  const formcontroledEl = input.parentElement;
  formcontroledEl.className = "error";

  //get small tag
  const smallEl = formcontroledEl.querySelector("small");
  smallEl.innerText = message;
};

const setSuccessFor = (input) => {
  const formcontroledEl = input.parentElement;
  formcontroledEl.className = "succes";
};

//onsubmit
const submit = () => {
  //username
  usernameEl.value.trim()
    ? usernameEl.length <= 4 || usernameEl.length >= 20
      ? setSuccessFor(usernameEl)
      : setErrorFor(usernameEl, "Username length in between 4 to 20")
    : setErrorFor(usernameEl, "Username mandatory");

  //email
  emailEl.value.trim()
    ? setSuccessFor(emailEl)
    : setErrorFor(emailEl, "Email mandatory");

  //password
  passwordEl.value.trim()
    ? passwordEl.length <= 4 || passwordEl.length >= 20
      ? setSuccessFor(passwordEl)
      : setErrorFor(passwordEl, "Password length in between 4 to 20")
    : setErrorFor(passwordEl, "Password mandatory");

  //confirm password
  confirmPasswordEl.value.trim()
    ? setSuccessFor(confirmPasswordEl) || confirmPasswordEl === passwordEl
      ? setSuccessFor(confirmPasswordEl)
      : setErrorFor(confirmPasswordEl, "password not matching")
    : setErrorFor(confirmPasswordEl, "Confirm Password mandatory");
};

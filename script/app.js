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
  const usernamefiltered = usernameEl.value.trim(); //remove spaces on user value
  const emailfiltered = emailEl.value.trim();
  const passwordfiltered = passwordEl.value.trim();
  const confirmPasswordfiltered = confirmPasswordEl.value.trim();

  //username
  usernamefiltered
    ? usernamefiltered.length < 4 || usernamefiltered.length > 15
      ? setErrorFor(usernameEl, "Username length in between 4 to 15 letters")
      : setSuccessFor(usernameEl)
    : setErrorFor(usernameEl, "Username mandatory");

  //email
  emailfiltered
    ? setSuccessFor(emailEl)
    : setErrorFor(emailEl, "Email mandatory");

  //password
  passwordfiltered
    ? passwordfiltered.length < 4 || passwordfiltered.length >= 5
      ? setErrorFor(passwordEl, "Password length only on 4 letters")
      : setSuccessFor(passwordEl)
    : setErrorFor(passwordEl, "Password mandatory");

  //confirm password
  confirmPasswordfiltered
    ? setSuccessFor(confirmPasswordEl) ||
      confirmPasswordfiltered === passwordfiltered
      ? setSuccessFor(confirmPasswordEl)
      : setErrorFor(confirmPasswordEl, "password not matching")
    : setErrorFor(confirmPasswordEl, "Confirm Password mandatory");
};

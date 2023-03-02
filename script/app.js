"use strict";

// elements
//.....................................
const formEl = document.getElementById("form");
const usernameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const confirmPasswordEl = document.getElementById("confirmpassword");

console.log(formEl);
console.log(usernameEl);
console.log(emailEl);
console.log(passwordEl);
console.log(confirmPasswordEl);
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
  const usernamefiltered = usernameEl.value.trim();
  const emailfiltered = emailEl.value.trim();
  const passwordfiltered = passwordEl.value.trim();
  const confirmpasswordfiltered = confirmPasswordEl.value.trim();

  //username
  if (usernamefiltered === "") {
    setErrorFor(usernameEl, "Username mandatory");
  } else {
    setSuccessFor(usernameEl);
  }

  //email
  if (emailfiltered === "") {
    setErrorFor(emailEl, "Email mandatory");
  } else {
    setSuccessFor(emailEl);
  }

  //password
  if (passwordfiltered === "") {
    setErrorFor(passwordEl, "Password mandatory");
  } else {
    setSuccessFor(passwordEl);
  }
  //confirm password
  if (
    confirmpasswordfiltered === "" ||
    confirmpasswordfiltered !== passwordfiltered
  ) {
    setErrorFor(confirmPasswordEl, "Confirm Password mandatory");
  } else {
    setSuccessFor(confirmPasswordEl);
  }
};

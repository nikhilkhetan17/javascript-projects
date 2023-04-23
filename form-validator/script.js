const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// function to show error
function showError(input, message) {
  const formControl = input.parentElement;
  // console.log(formControl);
  formControl.className = "form-control error";
  const smallMsg = formControl.querySelector("small");
  smallMsg.innerText = message;
}

// function to show success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.add("success");
}

// function to check email validity
function checkEmail(input) {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValidEmail = emailRegex.test(input.value.trim());
  if (isValidEmail) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// **--------------Advance validation**--------------

// Check required feilds
function checkRequired(input) {
  // console.log(input.id);
  if (input.value.trim() === "") {
    showError(input, `${getFieldName(input)} is required`);
  } else {
    showSuccess(input);
  }
}

// Get Field Name
function getFieldName(input) {
  // console.log(input.id);
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check input length
function checkLength(input, min, max) {
  // console.log(input.value.length);
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be min ${min} charactors`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be max ${max} charactors`);
  } else {
    showSuccess(input);
  }
}

// check password match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
  // console.log(input1.value, input2.value);
}

// event listner
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired(username);
  checkRequired(email);
  checkRequired(password);
  checkRequired(password2);

  checkLength(username, 3, 15);
  checkLength(password, 6, 25);

  checkEmail(email);

  checkPasswordMatch(password, password2);
});

// ***-------------------Basic validation***--------------------
// event listner
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   //   console.log(username.value);

//   if (username.value === "") {
//     showError(username, "Username is required");
//   } else {
//     showSuccess(username);
//   }

//   if (email.value === "") {
//     showError(email, "Email is required");
//   } else if (!checkEmail(email.value)) {
//     showError(email, "Email is not valid");
//   } else {
//     showSuccess(email);
//   }

//   if (password.value === "") {
//     showError(password, "Password is required");
//   } else {
//     showSuccess(password);
//   }

//   if (password2.value === "") {
//     showError(password2, "Password is required");
//   } else {
//     showSuccess(password2);

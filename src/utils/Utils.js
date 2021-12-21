function isValidUsernameOrEmail(value) {
  const re =
    /^(?:[A-Z\d][A-Z\d_-]{4,10}|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/i;
  return re.test(String(value).toLowerCase());
}
function isValidUsername(value) {
  const re = /^(?:[A-Z\d][A-Z\d_-]{4,10})$/i;
  return re.test(String(value).toLowerCase());
}
function isValidEmail(value) {
  const re = /^(?:[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/i;
  return re.test(String(value).toLowerCase());
}
function isValidPhone(value) {
  const re = /^(?:9+[0-9]{9})$/i;
  return re.test(String(value).toLowerCase());
}

function validateUsernameOrEmail(value, setUsernameOrEmailError) {
  if (value == "") {
    setUsernameOrEmailError("");
  } else if (isValidUsernameOrEmail(value)) {
    setUsernameOrEmailError("");
  } else {
    setUsernameOrEmailError("Invalid Username or Email");
  }
}
function validateUsername(value, setUsernameError) {
  if (value == "") {
    setUsernameError("");
  } else if (isValidUsername(value)) {
    setUsernameError("");
  } else {
    setUsernameError("Invalid Username");
  }
}
function validateEmail(value, setEmailError) {
  if (value == "") {
    setEmailError("");
  } else if (isValidEmail(value)) {
    setEmailError("");
  } else {
    setEmailError("Invalid Email");
  }
}

function validatePassword(value, setPasswordError) {
  if (value.length < 9) {
    setPasswordError("Password must be 9 characters");
  } else {
    setPasswordError("");
  }
}
function validateConfirmPassword(value, password, setPasswordError) {
  if (value !== password) {
    setPasswordError("Password doesn't match");
  } else {
    setPasswordError("");
  }
}
function validatePhone(value, setPhoneError) {
  if (value == "") {
    setPhoneError("");
  } else if (isValidPhone(value)) {
    setPhoneError("");
  } else {
    setPhoneError("Invalid Phone");
  }
}

const utils = {
  validateUsernameOrEmail,
  validateEmail,
  validateUsername,
  validatePassword,
  validateConfirmPassword,
  validatePhone,
};

export default utils;

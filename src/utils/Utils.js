function isValidUsernameOrEmail(value) {
  const re =
    /^(?:[A-Z\d][A-Z\d_-]{4,10}|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/i;
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

function validatePassword(value, setPasswordError) {
  if (value.length < 9) {
    setPasswordError("Password must be 9 characters");
  } else {
    setPasswordError("");
  }
}

const utils = {
  isValidUsernameOrEmail,
  validateUsernameOrEmail,
  validatePassword,
};

export default utils;

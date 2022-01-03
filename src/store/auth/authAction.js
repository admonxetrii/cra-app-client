import {
  LOGIN_FAILED,
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_FAILED,
  SIGNUP_REQ,
  SIGNUP_SUCCESS,
  SIGNUP_VERIFY_FAILED,
  SIGNUP_VERIFY_REQ,
  SIGNUP_VERIFY_SUCCESS,
  VERIFY_TOKEN_FAILED,
  VERIFY_TOKEN_REQ,
  VERIFY_TOKEN_SUCCESS,
} from "../actionConstant";

export function loginRequest(data) {
  return {
    type: LOGIN_REQ,
    data,
  };
}

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
}
export function loginFailed(error) {
  return {
    type: LOGIN_FAILED,
    error,
  };
}

// verify token

export function verifyTokenFailed(error) {
  return {
    type: VERIFY_TOKEN_FAILED,
    error,
  };
}

export function verifyTokenRequest(data) {
  return {
    type: VERIFY_TOKEN_REQ,
    data,
  };
}

export function verifyTokenSuccess(data) {
  return {
    type: VERIFY_TOKEN_SUCCESS,
    data,
  };
}
// logout user

export function logout() {
  return {
    type: LOGOUT,
  };
}

//signup

export function signupReq(data) {
  return {
    type: SIGNUP_REQ,
    data,
  };
}

export function signupSuccess(data) {
  return {
    type: SIGNUP_SUCCESS,
    data,
  };
}
export function signupFailed(error) {
  return {
    type: SIGNUP_FAILED,
    error,
  };
}

// Password reset

export function signupVerifyReq(data) {
  return {
    type: SIGNUP_VERIFY_REQ,
    data,
  };
}
export function signupVerifySuccess(data) {
  return {
    type: SIGNUP_VERIFY_SUCCESS,
    data,
  };
}
export function signupVerifyFailed(error) {
  return {
    type: SIGNUP_VERIFY_FAILED,
    error,
  };
}

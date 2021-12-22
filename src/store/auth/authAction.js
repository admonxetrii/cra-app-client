import {
  LOGIN_FAILED,
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOGOUT,
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

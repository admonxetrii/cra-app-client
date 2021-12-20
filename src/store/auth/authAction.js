import { LOGIN_FAILED, LOGIN_REQ, LOGIN_SUCCESS } from "../actionConstant";

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

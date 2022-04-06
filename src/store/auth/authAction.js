import {
  LOGIN_FAILED,
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOGOUT,
  RESEND_OTP_FAILED,
  RESEND_OTP_REQ,
  RESEND_OTP_SUC,
  SIGNUP_FAILED,
  SIGNUP_REQ,
  SIGNUP_SUCCESS,
  SIGNUP_VERIFY_FAILED,
  SIGNUP_VERIFY_REQ,
  SIGNUP_VERIFY_SUCCESS,
  VERIFY_TOKEN_FAILED,
  VERIFY_TOKEN_REQ,
  VERIFY_TOKEN_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_REQ,
  FORGOT_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILED,
  CHANGE_PASSWORD_REQ,
  CHANGE_PASSWORD_SUCCESS,
  FETCH_TAGS_REQ,
  FETCH_TAGS_SUC,
  FETCH_TAGS_FAILED,
  SAVE_USER_TAGS_REQ,
  SAVE_USER_TAGS_SUC,
  SAVE_USER_TAGS_FAILED,
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

// Verify Signup

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

// Forgot Password

export function forgotPasswordReq(data) {
  return {
    type: FORGOT_PASSWORD_REQ,
    data,
  };
}
export function forgotPasswordSuccess(data) {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
    data,
  };
}
export function forgotPasswordFailed(error) {
  return {
    type: FORGOT_PASSWORD_FAILED,
    error,
  };
}

// Change Password

export function changePasswordReq(data) {
  return {
    type: CHANGE_PASSWORD_REQ,
    data,
  };
}
export function changePasswordSuccess(data) {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    data,
  };
}
export function changePasswordFailed(error) {
  return {
    type: CHANGE_PASSWORD_FAILED,
    error,
  };
}

//Resend Otp

export function resendOtpReq() {
  return {
    type: RESEND_OTP_REQ,
  };
}

export function resendOtpSuccess(data) {
  return {
    type: RESEND_OTP_SUC,
    data,
  };
}

export function resendOtpFailed(error) {
  return {
    type: RESEND_OTP_FAILED,
    error,
  };
}

// tags

export function fetchTagReq(data) {
  return {
    type: FETCH_TAGS_REQ,
    data,
  };
}

export function fetchTagSuccess(data) {
  return {
    type: FETCH_TAGS_SUC,
    data,
  };
}

export function fetchTagFailed(error) {
  return {
    type: FETCH_TAGS_FAILED,
    error,
  };
}

// save tags

export function saveUserTagReq(data) {
  return {
    type: SAVE_USER_TAGS_REQ,
    data,
  };
}
export function saveUserTagSuc(data) {
  return {
    type: SAVE_USER_TAGS_SUC,
    data,
  };
}

export function saveUserTagFailed(error) {
  return {
    type: SAVE_USER_TAGS_FAILED,
    error,
  };
}

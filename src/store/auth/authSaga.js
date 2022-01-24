import { all, put, select, takeLatest } from "redux-saga/effects";
import usersServices from "../../API/UsersAPI/users.services";
import userService from "../../API/UsersAPI/users.services";
import Storage from "../../Helper/Storage";
import Toast from "../../Helper/toast";
import {
  LOGIN_REQ,
  LOGOUT,
  RESEND_OTP_REQ,
  SIGNUP_REQ,
  SIGNUP_VERIFY_REQ,
  VERIFY_TOKEN_REQ,
  FORGOT_PASSWORD_REQ,
  CHANGE_PASSWORD_REQ,
} from "../actionConstant";
import { navigate, replace } from "../navigation/navigationAction";
import {
  loginFailed,
  loginSuccess,
  resendOtpFailed,
  resendOtpSuccess,
  signupFailed,
  signupSuccess,
  signupVerifyFailed,
  signupVerifySuccess,
  verifyTokenFailed,
  verifyTokenRequest,
  verifyTokenSuccess,
  forgotPasswordSuccess,
  forgotPasswordFailed,
  changePasswordSuccess,
  changePasswordFailed,
} from "./authAction";

function* loginAPI(action) {
  try {
    const response = yield userService.login(action.data);
    if (!response.data.is_verified) {
      yield put(signupSuccess(response.data));
      return yield put(navigate("Otp"));
    }
    if (response.status === 200 && response.data.is_verified) {
      yield Storage.setAccessToken(response.data.access);
      yield Storage.setRefreshToken(response.data.refresh);

      //set current user details
      const userDetail = yield userService.getUserDetail(response.data.access);
      if (userDetail.status === 200) {
        yield put(loginSuccess(userDetail.data));
        yield Toast.success("Logged in successfully");
      } else {
        yield put(loginFailed(response.data));
        yield Toast.error(response.data.message);
      }
    } else {
      yield put(loginFailed(response.data));
      yield Toast.error(response.data.message);
    }
  } catch (error) {
    yield put(loginFailed(error));
    yield Toast.error("Something went wrong");
  }
}
function* verifyTokenAPI(action) {
  try {
    const response = yield userService.verifyToken(action.data);
    if (response.status === 200) {
      const userDetail = yield userService.getUserDetail(action.data);
      if (userDetail.status === 200) {
        yield put(verifyTokenSuccess(userDetail.data));
      } else {
        yield put(loginFailed(response.data));
        yield Toast.error(response.data.message);
      }
    } else if (response.status === 401) {
      yield Toast.error("Session expired!");
      yield put(verifyTokenFailed(response.data));
    }
  } catch (error) {
    yield put(verifyTokenFailed(error.response.data));
  }
}

function* logout() {
  yield Storage.clearTokens();
}

function* signupAPI() {
  try {
    const inputData = yield select((state) => state.auth.signup.inputData);
    const response = yield usersServices.signup(inputData);
    if (response.data.status === 201) {
      yield Toast.success("User registered successfully.");
      yield put(navigate("Otp"));
      yield put(signupSuccess(response.data));
    } else {
      yield put(signupFailed(response.data));
      yield Toast.error("invalid data");
    }
  } catch (error) {
    yield put(signupFailed(error?.response?.data));
    yield Toast.error("Something went wrong");
  }
}

function* signupVerificationAPI() {
  try {
    const inputData = yield select(
      (state) => state.auth.signupVerification.inputData
    );
    const username = yield select((state) => state.auth.signup.username);
    const response = yield usersServices.signupVerification({
      otp: inputData,
      username,
    });
    if (response.data.status === 200) {
      yield put(signupVerifySuccess(response.data.message));
      yield Toast.success(response.data.message);
      yield Storage.setAccessToken(response.data.access);
      yield put(verifyTokenRequest(response.data.access));
    } else if (response.data.status === 403) {
      yield put(signupVerifyFailed(response.data.message));
      yield Toast.error(response.data.message);
    } else {
      yield put(signupVerifyFailed(response.data.message));
      yield Toast.error(response.data.message);
    }
  } catch (error) {
    yield put(signupVerifyFailed(error.response));
    yield Toast.error("Something went wrong");
  }
}

function* resendOTPAPI() {
  try {
    const username = yield select((state) => state.auth.signup.username);
    const response = yield usersServices.resendOtp(username);
    if (response.data.status === 200) {
      yield put(resendOtpSuccess(response.data));
      yield Toast.success(response.data.message);
    } else {
      yield put(resendOtpFailed(response.data.error));
      yield Toast.error(response.data.message);
    }
  } catch (error) {
    yield put(resendOtpFailed(error));
    yield Toast.error("");
  }
}

function* forgotPasswordAPI() {
  try {
    const inputData = yield select(
      (state) => state.auth.forgotPassword.inputData
    );
    const response = yield usersServices.forgotPassword({
      email: inputData,
    });
    if (response.status === 200) {
      yield Toast.success(response.data.message);
      yield put(navigate("SignIn"));
      yield put(forgotPasswordSuccess(response.data));
    } else {
      yield put(forgotPasswordFailed(response.data.error));
      yield Toast.error(response.data.message);
    }
  } catch (error) {
    yield put(forgotPasswordFailed(error));
    yield Toast.error("Something went wrong");
  }
}

function* changePasswordAPI() {
  try {
    const inputData = yield select(
      (state) => state.auth.changePassword.inputData
    );
    const response = yield usersServices.changePassword(inputData);
    if (response.data.status === 200) {
      yield Toast.success(response.data.message);
      yield put(navigate("Profile"));
      yield put(changePasswordSuccess(response.data));
    } else {
      yield put(changePasswordFailed(response.data.error));
      yield Toast.error(response.data.message);
    }
  } catch (error) {
    yield put(changePasswordFailed(error));
    yield Toast.error("Something went wrong");
  }
}

export default function* authSaga() {
  yield all([yield takeLatest(LOGIN_REQ, loginAPI)]);
  yield all([yield takeLatest(VERIFY_TOKEN_REQ, verifyTokenAPI)]);
  yield all([yield takeLatest(SIGNUP_REQ, signupAPI)]);
  yield all([yield takeLatest(LOGOUT, logout)]);
  yield all([yield takeLatest(SIGNUP_VERIFY_REQ, signupVerificationAPI)]);
  yield all([yield takeLatest(RESEND_OTP_REQ, resendOTPAPI)]);
  yield all([yield takeLatest(FORGOT_PASSWORD_REQ, forgotPasswordAPI)]);
  yield all([yield takeLatest(CHANGE_PASSWORD_REQ, changePasswordAPI)]);
}

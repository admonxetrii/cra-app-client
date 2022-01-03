import { all, put, select, takeLatest } from "redux-saga/effects";
import usersServices from "../../API/UsersAPI/users.services";
import userService from "../../API/UsersAPI/users.services";
import Storage from "../../Helper/Storage";
import Toast from "../../Helper/toast";
import {
  LOGIN_REQ,
  LOGOUT,
  SIGNUP_REQ,
  SIGNUP_VERIFY_REQ,
  VERIFY_TOKEN_REQ,
} from "../actionConstant";
import { navigate, replace } from "../navigation/navigationAction";
import {
  loginFailed,
  loginSuccess,
  signupFailed,
  signupSuccess,
  signupVerifyFailed,
  signupVerifySuccess,
  verifyTokenFailed,
  verifyTokenRequest,
  verifyTokenSuccess,
} from "./authAction";

function* loginAPI(action) {
  try {
    const response = yield userService.login(action.data);
    if (!response.data.is_verified) {
      yield put(signupSuccess(response.data));
      return yield put(navigate("Otp"));
    }
    if (response.status === 200 && response.data.is_verified) {
      console.log(response.data);
      yield Storage.setAccessToken(response.data.access);
      yield Storage.setRefreshToken(response.data.refresh);

      //set current user details
      const userDetail = yield userService.getUserDetail(response.data.access);
      if (userDetail.status === 200) {
        yield verifyTokenSuccess(userDetail.data);
        yield put(loginSuccess());
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
        yield put(loginSuccess());
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

export default function* authSaga() {
  yield all([yield takeLatest(LOGIN_REQ, loginAPI)]);
  yield all([yield takeLatest(VERIFY_TOKEN_REQ, verifyTokenAPI)]);
  yield all([yield takeLatest(SIGNUP_REQ, signupAPI)]);
  yield all([yield takeLatest(LOGOUT, logout)]);
  yield all([yield takeLatest(SIGNUP_VERIFY_REQ, signupVerificationAPI)]);
}

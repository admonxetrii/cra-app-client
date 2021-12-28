import { all, put, select, takeLatest } from "redux-saga/effects";
import usersServices from "../../API/UsersAPI/users.services";
import userService from "../../API/UsersAPI/users.services";
import Storage from "../../Helper/Storage";
import Toast from "../../Helper/toast";
import {
  LOGIN_REQ,
  LOGOUT,
  SIGNUP_REQ,
  VERIFY_TOKEN_REQ,
} from "../actionConstant";
import { navigate, replace } from "../navigation/navigationAction";
import {
  loginFailed,
  loginSuccess,
  signupFailed,
  signupSuccess,
  verifyTokenFailed,
  verifyTokenSuccess,
} from "./authAction";

function* loginAPI(action) {
  try {
    const response = yield userService.login(action.data);
    if (response.status === 200) {
      yield Storage.setAccessToken(response.data.access);
      yield Storage.setRefreshToken(response.data.refresh);
      console.log(response.data.access);

      //set current user details
      const userDetail = yield userService.getUserDetail(response.data.access);
      console.log(userDetail.data);
      yield Storage.setUserDetail(userDetail.data);

      yield put(loginSuccess({ userData: userDetail }));
      yield Toast.success("Logged in successfully");
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
      yield put(verifyTokenSuccess({ user: "craadmin" }));
    } else {
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
    console.log(response.data.status, typeof response.data.status);
    if (response.data.status === 201) {
      yield Toast.success("User registered successfully.");
      yield put(signupSuccess(response.data));
      yield put(navigate("Otp"));
    } else {
      yield put(signupFailed(response.data));
      yield Toast.error("invalid data");
    }
  } catch (error) {
    yield put(signupFailed(error?.response?.data));
    yield Toast.error("Something went wrong");
  }
}

export default function* authSaga() {
  yield all([yield takeLatest(LOGIN_REQ, loginAPI)]);
  yield all([yield takeLatest(VERIFY_TOKEN_REQ, verifyTokenAPI)]);
  yield all([yield takeLatest(SIGNUP_REQ, signupAPI)]);
  yield all([yield takeLatest(LOGOUT, logout)]);
}

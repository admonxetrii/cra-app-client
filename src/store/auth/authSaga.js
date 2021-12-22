import { Alert } from "react-native";
import { all, put, takeLatest } from "redux-saga/effects";
import userService from "../../API/UsersAPI/users.services";
import Storage from "../../Helper/Storage";
import { LOGIN_REQ, LOGOUT, VERIFY_TOKEN_REQ } from "../actionConstant";
import {
  loginFailed,
  loginSuccess,
  verifyTokenFailed,
  verifyTokenSuccess,
} from "./authAction";

function* loginAPI(action) {
  try {
    const response = yield userService.login(action.data);
    if (response.status === 200) {
      yield Storage.setAccessToken(response.data.access);
      yield Storage.setRefreshToken(response.data.refresh);
      //TODO:: fetch user data
      yield put(loginSuccess({ user: "craadmin" }));
    } else {
      yield put(loginFailed(response.data));
    }
  } catch (error) {
    yield put(loginFailed(error));
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

export default function* authSaga() {
  yield all([yield takeLatest(LOGIN_REQ, loginAPI)]);
  yield all([yield takeLatest(VERIFY_TOKEN_REQ, verifyTokenAPI)]);
  yield all([yield takeLatest(LOGOUT, logout)]);
}

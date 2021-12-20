import { all, takeLatest } from "redux-saga/effects";
import userService from "../../API/UsersAPI/users.services";
import { LOGIN_REQ } from "../actionConstant";

function* loginAPI(action) {
  const response = yield userService.login(action.data);
  console.log("------->", response);
}

export default function* authSaga() {
  yield all([yield takeLatest(LOGIN_REQ, loginAPI)]);
}

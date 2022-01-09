import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/authSaga";
import restaurantSaga from "./restaurant/restaurantSaga";

export default function* rootSaga() {
  yield all([fork(authSaga)]);
  yield all([fork(restaurantSaga)]);
}

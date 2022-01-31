import { put, takeLatest, all, select, delay } from "redux-saga/effects";
import restaurantsService from "../../API/RestaurantAPI/restaurants.service";
import {
  FETCH_RESTAURANTS_CATEGORY_REQ,
  FETCH_RESTAURANT_BY_CATEGORY_REQ,
  FETCH_RESTAURANT_BY_ID_REQ,
  FETCH_RESTAURANT_MENUS_BY_RESTAURANT_ID_REQ,
  FETCH_SIMILAR_RESTAURANT_BY_ID_REQ,
  FETCH_TABLE_BY_RESTAURANT_REQ,
  CONFIRM_TABLE_BOOKIN_REQ,
  FETCH_MY_RESERVATION_REQ,
  CANCEL_RESERVATION_REQ,
} from "../actionConstant";
import Toast from "../../Helper/toast";
import { navigate } from "../navigation/navigationAction";
import {
  fetchRestaurantByCategoryFailed,
  fetchRestaurantByCategorySuccess,
  fetchRestaurantCategoryFailed,
  fetchRestaurantCategorySuccess,
  fetchRestaurantByIdFailed,
  fetchRestaurantByIdSuccess,
  fetchRestaurantMenusByRestaurantIdFailed,
  fetchRestaurantMenusByRestaurantIdSuccess,
  fetchSimilarRestaurantByIdSuccess,
  fetchSimilarRestaurantByIdFailed,
  fetchTableByRestaurantSuccess,
  fetchTableByRestaurantFailed,
  confirmTableBookingSuccess,
  confirmTableBookingFailed,
  fetchMyReservationsSuccess,
  fetchMyReservationsFailed,
  cancelReservationSuccess,
  cancelReservationFailed,
} from "./restaurantAction";

function* fetchRestaurantCategoryAPI() {
  try {
    const response = yield restaurantsService.fetchRestaurantCategories();
    if (response.status === 200) {
      yield put(fetchRestaurantCategorySuccess(response.data));
    } else {
      yield put(fetchRestaurantCategoryFailed(response.data.error));
    }
  } catch (error) {
    yield put(fetchRestaurantCategoryFailed(error));
  }
}
function* fetchRestaurantByCategoryAPI() {
  try {
    const categoryId = yield select(
      (state) => state.restaurant.fetchRestaurantByCategory.categoryId
    );
    const response = yield restaurantsService.fetchRestaurantByCategory(
      categoryId
    );
    if (response.status === 200) {
      yield put(fetchRestaurantByCategorySuccess(response.data));
    } else {
      yield put(fetchRestaurantByCategoryFailed(response.data.error));
    }
  } catch (error) {
    yield put(fetchRestaurantByCategoryFailed(error));
  }
}

function* fetchRestaurantByIdAPI() {
  try {
    const restaurantId = yield select(
      (state) => state.restaurant.fetchRestaurantById.restaurantId
    );
    const response = yield restaurantsService.fetchRestaurantById(restaurantId);
    if (response.status === 200) {
      // console.log(response.data);
      yield put(fetchRestaurantByIdSuccess(response.data));
    } else {
      yield put(fetchRestaurantByIdFailed(response.data.error));
      yield Toast.error("Cannot fetch data.");
    }
  } catch (error) {
    yield put(fetchRestaurantByIdFailed(error?.response?.data));
  }
}

function* fetchRestaurantMenusByRestaurantIdAPI() {
  try {
    const restaurantId = yield select(
      (state) =>
        state.restaurant.fetchRestaurantMenusByRestaurantId.restaurantId
    );
    const response =
      yield restaurantsService.fetchRestaurantMenusByRestaurantId(restaurantId);

    if (response.status === 200) {
      // console.log(response.data);
      yield put(fetchRestaurantMenusByRestaurantIdSuccess(response.data));
    } else {
      yield put(fetchRestaurantMenusByRestaurantIdFailed(response.data.error));
      yield put(navigate("Home"));
    }
  } catch (error) {
    yield put(fetchRestaurantMenusByRestaurantIdFailed(error?.response?.data));
  }
}

function* fetchSimilarRestaurantByIdAPI() {
  try {
    const restaurantId = yield select(
      (state) => state.restaurant.fetchSimilarRestaurantById.restaurantId
    );
    const response = yield restaurantsService.fetchSimilarRestaurantById(
      restaurantId
    );

    if (response.status === 200) {
      // console.log(response.data);
      yield put(fetchSimilarRestaurantByIdSuccess(response.data));
    } else {
      yield put(fetchSimilarRestaurantByIdFailed(response.data.error));
      yield put(navigate("Home"));
    }
  } catch (error) {
    yield put(fetchSimilarRestaurantByIdFailed(error?.response?.data));
  }
}

function* fetchTableByRestaurantAPI() {
  try {
    const restaurantId = yield select(
      (state) => state.restaurant.fetchTableByRestaurantId.restaurantId
    );
    const response = yield restaurantsService.fetchTableByRestaurant(
      restaurantId
    );

    if (response.status === 200) {
      yield put(fetchTableByRestaurantSuccess(response.data));
    } else {
      yield put(fetchTableByRestaurantFailed(response.data.error));
      yield put(navigate("ReserveTableStage"));
    }
  } catch (error) {
    yield put(fetchTableByRestaurantFailed(error?.response?.data));
  }
}

function* confirmTableBookingAPI() {
  try {
    const inputData = yield select(
      (state) => state.restaurant.confirmTableBooking.inputData
    );
    const response = yield restaurantsService.confirmTableBooking(inputData);
    if (response.data.status === 200) {
      // yield put(confirmTableBookingSuccess(response.data));
      yield Toast.success(response.data.message);
      yield put(navigate("MyReservationPage"));
    } else {
      // yield put(confirmTableBookingFailed(response.error));
      yield Toast.error(response.data.message);
    }
  } catch (error) {
    console.log(error);
    // yield put(confirmTableBookingFailed(error?.response?.data));
  }
}

function* fetchMyReservationsAPI() {
  try {
    const user = yield select((state) => state.auth.user?.id);
    const response = yield restaurantsService.fetchMyReservations(user);
    if (response.status === 200) {
      yield put(fetchMyReservationsSuccess(response.data));
    } else {
      yield put(fetchMyReservationsFailed(response.error));
    }
  } catch (error) {
    yield put(fetchMyReservationsFailed(error));
  }
}

function* cancelReservationAPI() {
  try {
    const inputData = yield select(
      (state) => state.restaurant.cancelBooking?.inputData
    );
    console.log(inputData);
    const response = yield restaurantsService.cancelReservation(inputData);
    if (response.data.status === 200) {
      yield put(cancelReservationSuccess(response.data));
      yield Toast.success(response.data.message);
    } else {
      yield put(cancelReservationFailed(response.error));
      yield Toast.error(response.data.message);
    }
  } catch (error) {
    console.log(error);
    yield put(cancelReservationFailed(error?.response?.data));
  }
}

export default function* restaurantSaga() {
  yield all([
    yield takeLatest(
      FETCH_RESTAURANTS_CATEGORY_REQ,
      fetchRestaurantCategoryAPI
    ),
  ]);
  yield all([
    yield takeLatest(
      FETCH_RESTAURANT_BY_CATEGORY_REQ,
      fetchRestaurantByCategoryAPI
    ),
  ]);
  yield all([
    yield takeLatest(FETCH_RESTAURANT_BY_ID_REQ, fetchRestaurantByIdAPI),
  ]);
  yield all([
    yield takeLatest(
      FETCH_RESTAURANT_MENUS_BY_RESTAURANT_ID_REQ,
      fetchRestaurantMenusByRestaurantIdAPI
    ),
  ]);
  yield all([
    yield takeLatest(
      FETCH_SIMILAR_RESTAURANT_BY_ID_REQ,
      fetchSimilarRestaurantByIdAPI
    ),
  ]);
  yield all([
    yield takeLatest(FETCH_TABLE_BY_RESTAURANT_REQ, fetchTableByRestaurantAPI),
  ]);
  yield all([
    yield takeLatest(CONFIRM_TABLE_BOOKIN_REQ, confirmTableBookingAPI),
  ]);
  yield all([
    yield takeLatest(FETCH_MY_RESERVATION_REQ, fetchMyReservationsAPI),
  ]);
  yield all([yield takeLatest(CANCEL_RESERVATION_REQ, cancelReservationAPI)]);
}

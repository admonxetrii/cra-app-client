import { put, takeLatest, all, select } from "redux-saga/effects";
import restaurantsService from "../../API/RestaurantAPI/restaurants.service";
import {
  FETCH_RESTAURANTS_CATEGORY_REQ,
  FETCH_RESTAURANT_BY_CATEGORY_REQ,
  FETCH_RESTAURANT_BY_ID_REQ,
  FETCH_RESTAURANT_MENUS_BY_RESTAURANT_ID_REQ,
  FETCH_SIMILAR_RESTAURANT_BY_ID_REQ,
} from "../actionConstant";
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
      yield put(navigate("Home"));
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
}

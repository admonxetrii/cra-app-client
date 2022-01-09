import { put, takeLatest, all, select } from "redux-saga/effects";
import restaurantsService from "../../API/RestaurantAPI/restaurants.service";
import {
  FETCH_RESTAURANTS_CATEGORY_REQ,
  FETCH_RESTAURANT_BY_CATEGORY_REQ,
} from "../actionConstant";
import {
  fetchRestaurantByCategoryFailed,
  fetchRestaurantByCategorySuccess,
  fetchRestaurantCategoryFailed,
  fetchRestaurantCategorySuccess,
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
    console.log(response.data, "-------------<<<<<<");
    if (response.status === 200) {
      yield put(fetchRestaurantByCategorySuccess(response.data));
    } else {
      yield put(fetchRestaurantByCategoryFailed(response.data.error));
    }
  } catch (error) {
    yield put(fetchRestaurantByCategoryFailed(error));
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
}

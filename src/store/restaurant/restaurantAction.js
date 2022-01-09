import {
  FETCH_RESTAURANTS_CATEGORY_FAILED,
  FETCH_RESTAURANTS_CATEGORY_REQ,
  FETCH_RESTAURANTS_CATEGORY_SUC,
  FETCH_RESTAURANT_BY_CATEGORY_FAILED,
  FETCH_RESTAURANT_BY_CATEGORY_REQ,
  FETCH_RESTAURANT_BY_CATEGORY_SUC,
} from "../actionConstant";

export function fetchRestaurantCategoryReq() {
  return {
    type: FETCH_RESTAURANTS_CATEGORY_REQ,
  };
}

export function fetchRestaurantCategorySuccess(data) {
  return {
    type: FETCH_RESTAURANTS_CATEGORY_SUC,
    data,
  };
}
export function fetchRestaurantCategoryFailed(error) {
  return {
    type: FETCH_RESTAURANTS_CATEGORY_FAILED,
    error,
  };
}

export function fetchRestaurantByCategoryReq(data) {
  return {
    type: FETCH_RESTAURANT_BY_CATEGORY_REQ,
    data,
  };
}

export function fetchRestaurantByCategorySuccess(data) {
  return {
    type: FETCH_RESTAURANT_BY_CATEGORY_SUC,
    data,
  };
}

export function fetchRestaurantByCategoryFailed(error) {
  return {
    type: FETCH_RESTAURANT_BY_CATEGORY_FAILED,
    error,
  };
}

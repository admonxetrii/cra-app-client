import {
  FETCH_RESTAURANTS_CATEGORY_FAILED,
  FETCH_RESTAURANTS_CATEGORY_REQ,
  FETCH_RESTAURANTS_CATEGORY_SUC,
  FETCH_RESTAURANT_BY_CATEGORY_FAILED,
  FETCH_RESTAURANT_BY_CATEGORY_REQ,
  FETCH_RESTAURANT_BY_CATEGORY_SUC,
  FETCH_RESTAURANT_BY_ID_REQ,
  FETCH_RESTAURANT_BY_ID_SUCCESS,
  FETCH_RESTAURANT_BY_ID_FAILED,
  FETCH_RESTAURANT_MENUS_BY_RESTAURANT_ID_REQ,
  FETCH_RESTAURANT_MENUS_BY_RESTAURANT_ID_SUCCESS,
  FETCH_RESTAURANT_MENUS_BY_RESTAURANT_ID_FAILED,
  FETCH_SIMILAR_RESTAURANT_BY_ID_REQ,
  FETCH_SIMILAR_RESTAURANT_BY_ID_SUCCESS,
  FETCH_SIMILAR_RESTAURANT_BY_ID_FAILED,
  CLEAR_RESTAURANT_BY_ID,
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

export function fetchRestaurantByIdReq(data) {
  return {
    type: FETCH_RESTAURANT_BY_ID_REQ,
    data,
  };
}

export function fetchRestaurantByIdSuccess(data) {
  return {
    type: FETCH_RESTAURANT_BY_ID_SUCCESS,
    data,
  };
}

export function fetchRestaurantByIdFailed(error) {
  return {
    type: FETCH_RESTAURANT_BY_ID_FAILED,
    error,
  };
}

export function fetchRestaurantMenusByRestaurantIdReq(data) {
  return {
    type: FETCH_RESTAURANT_MENUS_BY_RESTAURANT_ID_REQ,
    data,
  };
}

export function fetchRestaurantMenusByRestaurantIdSuccess(data) {
  return {
    type: FETCH_RESTAURANT_MENUS_BY_RESTAURANT_ID_SUCCESS,
    data,
  };
}

export function fetchRestaurantMenusByRestaurantIdFailed(error) {
  return {
    type: FETCH_RESTAURANT_MENUS_BY_RESTAURANT_ID_FAILED,
    error,
  };
}

export function fetchSimilarRestaurantByIdReq(data) {
  return {
    type: FETCH_SIMILAR_RESTAURANT_BY_ID_REQ,
    data,
  };
}
export function fetchSimilarRestaurantByIdSuccess(data) {
  return {
    type: FETCH_SIMILAR_RESTAURANT_BY_ID_SUCCESS,
    data,
  };
}
export function fetchSimilarRestaurantByIdFailed(data) {
  return {
    type: FETCH_SIMILAR_RESTAURANT_BY_ID_FAILED,
    data,
  };
}

export function clearRestaurantById() {
  return {
    type: CLEAR_RESTAURANT_BY_ID,
  };
}

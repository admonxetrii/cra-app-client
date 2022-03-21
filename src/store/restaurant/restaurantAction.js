import {
  FETCH_ALL_RESTAURANTS_REQ,
  FETCH_ALL_RESTAURANTS_SUC,
  FETCH_ALL_RESTAURANTS_FAILED,
  FETCH_RESTAURANT_BY_SEARCH_REQ,
  FETCH_RESTAURANT_BY_SEARCH_SUCCESS,
  FETCH_RESTAURANT_BY_SEARCH_FAILED,
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
  FETCH_SIMILAR_PERCENT_RESTAURANT_BY_ID_REQ,
  FETCH_SIMILAR_PERCENT_RESTAURANT_BY_ID_SUCCESS,
  FETCH_SIMILAR_PERCENT_RESTAURANT_BY_ID_FAILED,
  FETCH_TABLE_BY_RESTAURANT_REQ,
  FETCH_TABLE_BY_RESTAURANT_SUC,
  FETCH_TABLE_BY_RESTAURANT_FAILED,
  CONFIRM_TABLE_BOOKIN_REQ,
  CONFIRM_TABLE_BOOKIN_SUC,
  CONFIRM_TABLE_BOOKIN_FAILED,
  CLEAR_RESTAURANT_BY_ID,
  CLEAR_BOOKING_STATUS,
  FETCH_MY_RESERVATION_SUC,
  FETCH_MY_RESERVATION_REQ,
  FETCH_MY_RESERVATION_FAILED,
  CANCEL_RESERVATION_SUC,
  CANCEL_RESERVATION_REQ,
  CANCEL_RESERVATION_FAILED,
  FETCH_FAVOURITE_RESTAURANTS_REQ,
  FETCH_FAVOURITE_RESTAURANTS_FAILED,
  FETCH_FAVOURITE_RESTAURANTS_SUC,
} from "../actionConstant";

export function fetchAllRestaurantsReq() {
  return {
    type: FETCH_ALL_RESTAURANTS_REQ,
  };
}

export function fetchAllRestaurantsSuccess(data) {
  return {
    type: FETCH_ALL_RESTAURANTS_SUC,
    data,
  };
}
export function fetchFavouriteRestaurantsFailed(error) {
  return {
    type: FETCH_FAVOURITE_RESTAURANTS_FAILED,
    error,
  };
}

export function fetchFavouriteRestaurantsReq() {
  return {
    type: FETCH_FAVOURITE_RESTAURANTS_REQ,
  };
}

export function fetchFavouriteRestaurantsSuccess(data) {
  return {
    type: FETCH_FAVOURITE_RESTAURANTS_SUC,
    data,
  };
}
export function fetchAllRestaurantsFailed(error) {
  return {
    type: FETCH_ALL_RESTAURANTS_FAILED,
    error,
  };
}

export function fetchRestaurantsBySearchReq(data) {
  return {
    type: FETCH_RESTAURANT_BY_SEARCH_REQ,
    data,
  };
}

export function fetchRestaurantsBySearchSuccess(data) {
  return {
    type: FETCH_RESTAURANT_BY_SEARCH_SUCCESS,
    data,
  };
}
export function fetchRestaurantsBySearchFailed(error) {
  return {
    type: FETCH_RESTAURANT_BY_SEARCH_FAILED,
    error,
  };
}

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
export function fetchSimilarRestaurantByIdFailed(error) {
  return {
    type: FETCH_SIMILAR_RESTAURANT_BY_ID_FAILED,
    error,
  };
}
export function fetchSimilarPercentRestaurantByIdReq(data) {
  return {
    type: FETCH_SIMILAR_PERCENT_RESTAURANT_BY_ID_REQ,
    data,
  };
}
export function fetchSimilarPercentRestaurantByIdSuccess(data) {
  return {
    type: FETCH_SIMILAR_PERCENT_RESTAURANT_BY_ID_SUCCESS,
    data,
  };
}
export function fetchSimilarPercentRestaurantByIdFailed(error) {
  return {
    type: FETCH_SIMILAR_PERCENT_RESTAURANT_BY_ID_FAILED,
    error,
  };
}
export function fetchTableByRestaurantReq(data) {
  return {
    type: FETCH_TABLE_BY_RESTAURANT_REQ,
    data,
  };
}
export function fetchTableByRestaurantSuccess(data) {
  return {
    type: FETCH_TABLE_BY_RESTAURANT_SUC,
    data,
  };
}
export function fetchTableByRestaurantFailed(error) {
  return {
    type: FETCH_TABLE_BY_RESTAURANT_FAILED,
    error,
  };
}

export function confirmTableBookingReq(data) {
  return {
    type: CONFIRM_TABLE_BOOKIN_REQ,
    data,
  };
}
export function confirmTableBookingSuccess(data) {
  return {
    type: CONFIRM_TABLE_BOOKIN_SUC,
    data,
  };
}
export function confirmTableBookingFailed(error) {
  return {
    type: CONFIRM_TABLE_BOOKIN_FAILED,
    error,
  };
}
export function fetchMyReservationsReq(data) {
  return {
    type: FETCH_MY_RESERVATION_REQ,
    data,
  };
}
export function fetchMyReservationsSuccess(data) {
  return {
    type: FETCH_MY_RESERVATION_SUC,
    data,
  };
}
export function fetchMyReservationsFailed(error) {
  return {
    type: FETCH_MY_RESERVATION_FAILED,
    error,
  };
}
export function cancelReservationsReq(data) {
  return {
    type: CANCEL_RESERVATION_REQ,
    data,
  };
}
export function cancelReservationSuccess(data) {
  return {
    type: CANCEL_RESERVATION_SUC,
    data,
  };
}
export function cancelReservationFailed(error) {
  return {
    type: CANCEL_RESERVATION_FAILED,
    error,
  };
}

export function clearRestaurantById() {
  return {
    type: CLEAR_RESTAURANT_BY_ID,
  };
}
export function clearBookingStatus() {
  return {
    type: CLEAR_BOOKING_STATUS,
  };
}

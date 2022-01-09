import {
  FETCH_ALL_RESTAURANTS_FAILED,
  FETCH_ALL_RESTAURANTS_REQ,
  FETCH_ALL_RESTAURANTS_SUC,
  FETCH_RESTAURANTS_CATEGORY_FAILED,
  FETCH_RESTAURANTS_CATEGORY_REQ,
  FETCH_RESTAURANTS_CATEGORY_SUC,
  FETCH_RESTAURANT_BY_CATEGORY_FAILED,
  FETCH_RESTAURANT_BY_CATEGORY_REQ,
  FETCH_RESTAURANT_BY_CATEGORY_SUC,
} from "../actionConstant";

const initialState = {
  restaurants: [],
  restaurantCategories: [],
  restaurantByCategory: [],
  fetchAllRestaurant: {
    loading: false,
    error: false,
    data: {},
  },
  fetchRestaurantCategory: {
    loading: false,
    error: false,
    data: {},
  },
  fetchRestaurantByCategory: {
    categoryId: null,
    loading: false,
    error: false,
    data: {},
  },
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_RESTAURANTS_REQ:
      return {
        ...state,
        restaurants: [],
        fetchAllRestaurant: {
          loading: true,
          error: false,
          data: {},
        },
      };
    case FETCH_ALL_RESTAURANTS_SUC:
      return {
        ...state,
        restaurants: action.data,
        fetchAllRestaurant: {
          loading: false,
          error: false,
          data: action.data,
        },
      };
    case FETCH_ALL_RESTAURANTS_FAILED:
      return {
        ...state,
        restaurants: [],
        fetchAllRestaurant: {
          loading: false,
          error: action.error,
          data: {},
        },
      };
    case FETCH_RESTAURANTS_CATEGORY_REQ:
      return {
        ...state,
        restaurantCategories: [],
        fetchRestaurantCategory: {
          loading: true,
          error: false,
          data: {},
        },
      };
    case FETCH_RESTAURANTS_CATEGORY_SUC:
      return {
        ...state,
        restaurantCategories: action.data,
        fetchRestaurantCategory: {
          loading: false,
          error: false,
          data: action.data,
        },
      };
    case FETCH_RESTAURANTS_CATEGORY_FAILED:
      return {
        ...state,
        restaurantCategories: [],
        fetchRestaurantCategory: {
          loading: false,
          error: action.error,
          data: {},
        },
      };
    case FETCH_RESTAURANT_BY_CATEGORY_REQ:
      return {
        ...state,
        restaurantByCategory: [],
        fetchRestaurantByCategory: {
          categoryId: action.data,
          loading: true,
          error: false,
          data: {},
        },
      };
    case FETCH_RESTAURANT_BY_CATEGORY_SUC:
      return {
        ...state,
        restaurantByCategory: action.data,
        fetchRestaurantByCategory: {
          categoryId: null,
          loading: false,
          error: false,
          data: action.data,
        },
      };
    case FETCH_RESTAURANT_BY_CATEGORY_FAILED:
      return {
        ...state,
        restaurantByCategory: [],
        fetchRestaurantByCategory: {
          categoryId: null,
          loading: false,
          error: action.error,
          data: {},
        },
      };

    default:
      return {
        ...state,
      };
  }
};

export default restaurantReducer;

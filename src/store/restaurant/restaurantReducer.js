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

const initialState = {
  restaurants: [],
  restaurantCategories: [],
  restaurantByCategory: [],
  restaurantById: null,
  restaurantMenusByRestaurantId: [],
  similarRestaurantById: [],
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
  fetchRestaurantById: {
    restaurantId: null,
    loading: true,
    error: false,
    data: {},
  },
  fetchRestaurantMenusByRestaurantId: {
    restaurantId: null,
    loading: true,
    error: false,
    data: {},
  },
  fetchSimilarRestaurantById: {
    restaurantId: null,
    loading: true,
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

    case FETCH_RESTAURANT_BY_ID_REQ:
      return {
        ...state,
        restaurantById: null,
        fetchRestaurantById: {
          restaurantId: action.data,
          loading: true,
          error: false,
          data: {},
        },
      };
    case FETCH_RESTAURANT_BY_ID_SUCCESS:
      return {
        ...state,
        restaurantById: action.data,
        fetchRestaurantById: {
          restaurantId: null,
          loading: false,
          error: false,
          data: action.data,
        },
      };
    case FETCH_RESTAURANT_BY_ID_FAILED:
      return {
        ...state,
        restaurantById: null,
        fetchRestaurantById: {
          restaurantId: null,
          loading: false,
          error: action.error,
          data: {},
        },
      };

    case FETCH_RESTAURANT_MENUS_BY_RESTAURANT_ID_REQ:
      return {
        ...state,
        restaurantMenusByRestaurantId: [],
        fetchRestaurantMenusByRestaurantId: {
          restaurantId: action.data,
          loading: true,
          error: false,
          data: {},
        },
      };
    case FETCH_RESTAURANT_MENUS_BY_RESTAURANT_ID_SUCCESS:
      return {
        ...state,
        restaurantMenusByRestaurantId: action.data,
        fetchRestaurantMenusByRestaurantId: {
          restaurantId: null,
          loading: false,
          error: false,
          data: action.data,
        },
      };
    case FETCH_RESTAURANT_MENUS_BY_RESTAURANT_ID_FAILED:
      return {
        ...state,
        restaurantMenusByRestaurantId: [],
        fetchRestaurantMenusByRestaurantId: {
          restaurantId: null,
          loading: false,
          error: action.error,
          data: {},
        },
      };

    case FETCH_SIMILAR_RESTAURANT_BY_ID_REQ:
      return {
        ...state,
        similarRestaurantById: [],
        fetchSimilarRestaurantById: {
          restaurantId: action.data,
          loading: true,
          error: false,
          data: {},
        },
      };

    case FETCH_SIMILAR_RESTAURANT_BY_ID_SUCCESS:
      return {
        ...state,
        similarRestaurantById: action.data,
        fetchSimilarRestaurantById: {
          restaurantId: null,
          loading: false,
          error: false,
          data: action.data,
        },
      };
    case FETCH_SIMILAR_RESTAURANT_BY_ID_FAILED:
      return {
        ...state,
        similarRestaurantById: [],
        fetchSimilarRestaurantById: {
          restaurantId: null,
          loading: false,
          error: action.error,
          data: {},
        },
      };

    case CLEAR_RESTAURANT_BY_ID:
      return {
        ...state,
        restaurantById: null,
        restaurantMenusByRestaurantId: [],
        similarRestaurantById: [],
        fetchRestaurantById: {
          ...state.fetchRestaurantById,
          loading: true,
        },
        fetchRestaurantMenusByRestaurantId: {
          ...state.fetchRestaurantMenusByRestaurantId,
          loading: true,
        },
        fetchSimilarRestaurantById: {
          ...state.fetchSimilarRestaurantById,
          loading: true,
        },
      };

    default:
      return {
        ...state,
        restaurantById: null,
        restaurantMenusByRestaurantId: [],
      };
  }
};

export default restaurantReducer;

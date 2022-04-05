import {
  FETCH_ALL_RESTAURANTS_FAILED,
  FETCH_ALL_RESTAURANTS_REQ,
  FETCH_ALL_RESTAURANTS_SUC,
  FETCH_FAVOURITE_RESTAURANTS_FAILED,
  FETCH_FAVOURITE_RESTAURANTS_REQ,
  FETCH_FAVOURITE_RESTAURANTS_SUC,
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
  FETCH_MY_RESERVATION_REQ,
  FETCH_MY_RESERVATION_SUC,
  FETCH_MY_RESERVATION_FAILED,
  CANCEL_RESERVATION_REQ,
  CANCEL_RESERVATION_SUC,
  CANCEL_RESERVATION_FAILED,
  FETCH_IS_FAVOURITE_RESTAURANTS_REQ,
  FETCH_IS_FAVOURITE_RESTAURANTS_SUC,
  FETCH_IS_FAVOURITE_RESTAURANTS_FAILED,
  ADD_RESTAURANT_TO_FAVOURITE_REQ,
  ADD_RESTAURANT_TO_FAVOURITE_SUC,
  ADD_RESTAURANT_TO_FAVOURITE_FAILED,
  REMOVE_RESTAURANT_FROM_FAVOURITE_REQ,
  REMOVE_RESTAURANT_FROM_FAVOURITE_SUC,
  REMOVE_RESTAURANT_FROM_FAVOURITE_FAILED,
} from "../actionConstant";

const initialState = {
  restaurants: [],
  restaurantCategories: [],
  restaurantByCategory: [],
  restaurantById: null,
  restaurantMenusByRestaurantId: [],
  tableByRestaurantId: [],
  restaurantId: null,
  similarRestaurantById: [],
  similarPercentRestaurantById: [],
  myReservations: [],
  favouriteRestaurant: [],
  isFavourite: [],
  addToFav: {
    requestData: {},
    loading: false,
    error: false,
    data: {},
  },
  removeFromFav: {
    requestData: {},
    loading: false,
    error: false,
    data: {},
  },
  fetchIsFavourite: {
    requestData: {},
    loading: false,
    error: false,
    data: {},
  },
  fetchAllRestaurant: {
    searchQuery: {},
    loading: false,
    error: false,
    data: {},
  },
  fetchFavouriteRestaurant: {
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
  fetchSimilarPercentRestaurantById: {
    restaurantId: null,
    loading: true,
    error: false,
    data: {},
  },
  fetchTableByRestaurantId: {
    restaurantId: null,
    loading: true,
    error: false,
    data: {},
  },
  confirmTableBooking: {
    inputData: {},
    loading: false,
    loadingButtonContent: "Confirm Booking",
    error: false,
    data: {},
  },
  cancelBooking: {
    inputData: {},
    loading: false,
    error: false,
    data: {},
  },
  fetchMyReservations: {
    userId: null,
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
    case ADD_RESTAURANT_TO_FAVOURITE_REQ:
      return {
        ...state,
        addToFav: {
          requestData: action.data,
          loading: true,
          error: false,
          data: {},
        },
      };
    case ADD_RESTAURANT_TO_FAVOURITE_SUC:
      return {
        ...state,
        addToFav: {
          requestData: {},
          loading: false,
          error: false,
          data: action.data,
        },
      };
    case ADD_RESTAURANT_TO_FAVOURITE_FAILED:
      return {
        ...state,
        addToFav: {
          requestData: {},
          loading: false,
          error: true,
          data: {},
        },
      };
    case REMOVE_RESTAURANT_FROM_FAVOURITE_REQ:
      return {
        ...state,
        fetchAllRestaurant: {
          loading: true,
        },
        removeFromFav: {
          requestData: action.data,
          loading: true,
          error: false,
          data: {},
        },
      };
    case REMOVE_RESTAURANT_FROM_FAVOURITE_SUC:
      console.log("====================================");
      console.log("====================================");
      const favouriteRestaurant = state.favouriteRestaurant.filter(
        (item) => item.id !== action.data.deletedId
      );
      console.log(favouriteRestaurant);
      return {
        ...state,
        favouriteRestaurant,
        fetchAllRestaurant: {
          loading: false,
        },
        removeFromFav: {
          requestData: {},
          loading: true,
          error: false,
          data: action.data,
        },
      };
    case REMOVE_RESTAURANT_FROM_FAVOURITE_FAILED:
      return {
        ...state,
        removeFromFav: {
          requestData: {},
          loading: false,
          error: true,
          data: {},
        },
      };
    case FETCH_FAVOURITE_RESTAURANTS_REQ:
      return {
        ...state,
        favouriteRestaurant: [],
        fetchAllRestaurant: {
          loading: true,
          error: false,
          data: action.data,
        },
      };
    case FETCH_FAVOURITE_RESTAURANTS_SUC:
      return {
        ...state,
        favouriteRestaurant: action.data,
        fetchAllRestaurant: {
          loading: false,
          error: false,
          data: action.data,
        },
      };
    case FETCH_FAVOURITE_RESTAURANTS_FAILED:
      return {
        ...state,
        favouriteRestaurant: [],
        fetchAllRestaurant: {
          loading: false,
          error: action.error,
          data: {},
        },
      };
    case FETCH_IS_FAVOURITE_RESTAURANTS_REQ:
      return {
        ...state,
        isFavourite: [],
        fetchIsFavourite: {
          requestData: action.data,
          loading: true,
          error: false,
          data: {},
        },
      };
    case FETCH_IS_FAVOURITE_RESTAURANTS_SUC:
      return {
        ...state,
        isFavourite: action.data,
        fetchIsFavourite: {
          loading: false,
          error: false,
          data: action.data,
        },
      };
    case FETCH_IS_FAVOURITE_RESTAURANTS_FAILED:
      return {
        ...state,
        isFavourite: [],
        fetchIsFavourite: {
          loading: false,
          error: action.error,
          data: {},
        },
      };
    case FETCH_RESTAURANT_BY_SEARCH_REQ:
      return {
        ...state,
        restaurants: [],
        fetchAllRestaurant: {
          searchQuery: action.data,
          loading: false,
          error: false,
          data: {},
        },
      };
    case FETCH_RESTAURANT_BY_SEARCH_SUCCESS:
      return {
        ...state,
        restaurants: action.data,
        fetchAllRestaurant: {
          loading: false,
          error: false,
          data: action.data,
        },
      };
    case FETCH_RESTAURANT_BY_SEARCH_FAILED:
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
        restaurantId: action.data,
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
    case FETCH_SIMILAR_PERCENT_RESTAURANT_BY_ID_REQ:
      return {
        ...state,
        similarRestaurantById: [],
        fetchSimilarPercentRestaurantById: {
          restaurantId: action.data,
          loading: true,
          error: false,
          data: {},
        },
      };

    case FETCH_SIMILAR_PERCENT_RESTAURANT_BY_ID_SUCCESS:
      return {
        ...state,
        similarPercentRestaurantById: action.data,
        fetchSimilarPercentRestaurantById: {
          restaurantId: null,
          loading: false,
          error: false,
          data: action.data,
        },
      };
    case FETCH_SIMILAR_PERCENT_RESTAURANT_BY_ID_FAILED:
      return {
        ...state,
        similarRestaurantById: [],
        fetchSimilarPercentRestaurantById: {
          restaurantId: null,
          loading: false,
          error: action.error,
          data: {},
        },
      };

    case FETCH_TABLE_BY_RESTAURANT_REQ:
      return {
        ...state,
        tableByRestaurantId: [],
        fetchTableByRestaurantId: {
          restaurantId: action.data,
          loading: true,
          error: false,
          data: {},
        },
      };
    case FETCH_TABLE_BY_RESTAURANT_SUC:
      return {
        ...state,
        tableByRestaurantId: action.data,
        fetchTableByRestaurantId: {
          restaurantId: null,
          loading: false,
          error: false,
          data: action.data,
        },
      };
    case FETCH_TABLE_BY_RESTAURANT_FAILED:
      return {
        ...state,
        tableByRestaurantId: [],
        fetchTableByRestaurantId: {
          restaurantId: null,
          loading: false,
          error: action.error,
          data: {},
        },
      };

    case CONFIRM_TABLE_BOOKIN_REQ:
      return {
        ...state,
        confirmTableBooking: {
          inputData: action.data,
          loading: true,
          loadingButtonContent: "Booking...",
          error: false,
          data: {},
        },
      };
    case CONFIRM_TABLE_BOOKIN_SUC:
      return {
        ...state,
        confirmTableBooking: {
          inputData: {},
          loading: true,
          loadingButtonContent: "Booked",
          error: false,
          data: action.data,
        },
      };
    case CONFIRM_TABLE_BOOKIN_FAILED:
      return {
        ...state,
        confirmTableBooking: {
          inputData: {},
          loading: false,
          loadingButtonContent: "Error",
          error: true,
          data: {},
        },
      };
    case FETCH_MY_RESERVATION_REQ:
      return {
        ...state,
        myReservations: [],
        fetchMyReservations: {
          userId: action.data,
          loading: true,
          error: false,
          data: {},
        },
      };
    case FETCH_MY_RESERVATION_SUC:
      return {
        ...state,
        myReservations: action.data,
        fetchMyReservations: {
          ...state.fetchMyReservations,
          loading: false,
          error: false,
          data: action.data,
        },
      };
    case FETCH_MY_RESERVATION_FAILED:
      return {
        ...state,
        myReservations: [],
        fetchMyReservations: {
          ...state.fetchMyReservations,
          loading: false,
          error: true,
          data: {},
        },
      };

    case CANCEL_RESERVATION_REQ:
      return {
        ...state,
        cancelBooking: {
          inputData: action.data,
          loading: true,
          error: false,
          data: {},
        },
      };
    case CANCEL_RESERVATION_SUC:
      return {
        ...state,
        myReservations: state.myReservations.filter(
          (item) => item.id !== action.data.deletedId
        ),
        cancelBooking: {
          inputData: {},
          loading: true,
          error: false,
          data: action.data,
        },
      };
    case CANCEL_RESERVATION_FAILED:
      return {
        ...state,
        cancelBooking: {
          inputData: {},
          loading: false,
          error: true,
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
    case CLEAR_BOOKING_STATUS:
      return {
        ...state,
        confirmTableBooking: {
          inputData: {},
          loading: false,
          loadingButtonContent: "Confirm Booking",
          error: false,
          data: {},
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

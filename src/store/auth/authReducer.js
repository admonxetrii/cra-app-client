import {
  LOGIN_FAILED,
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOGOUT,
  VERIFY_TOKEN_FAILED,
  VERIFY_TOKEN_REQ,
  VERIFY_TOKEN_SUCCESS,
} from "../actionConstant";

const initialState = {
  initialScreen: "OnBoarding",
  isLoggedIn: false,
  user: null,
  login: {
    loading: false,
    inputData: {},
    error: null,
    loadingButtonContent: "Login",
  },
  verify: {
    loading: false,
    error: null,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQ:
      return {
        ...state,
        login: {
          ...state.login,
          loading: true,
          inputData: action.data,
          loadingButtonContent: "Loggin in..",
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        initialScreen: "CustomDrawer",
        isLoggedIn: true,
        userData: action.data,
        login: {
          ...state.login,
          inputData: {},
          loading: false,
        },
      };
    case LOGIN_FAILED:
      return {
        ...state,
        initialScreen: "OnBoarding",
        isLoggedIn: false,
        userData: null,
        login: {
          loading: false,
          inputData: {},
          loadingButtonContent: "Login",
          error: action.error,
        },
      };
    case VERIFY_TOKEN_REQ:
      return {
        ...state,
        verify: {
          ...state.verify,
          loading: true,
        },
      };
    case VERIFY_TOKEN_SUCCESS:
      return {
        ...state,
        initialScreen: "CustomDrawer",
        isLoggedIn: true,
        user: action.data,
        verify: {
          loading: false,
          error: null,
        },
      };
    case VERIFY_TOKEN_FAILED:
      return {
        ...state,
        initialScreen: "OnBoarding",
        isLoggedIn: false,
        user: null,
        verify: {
          loading: false,
          error: action.error,
        },
      };
    case LOGOUT:
      return {
        ...state,
        initialScreen: "OnBoarding",
        isLoggedIn: false,
        user: null,
        login: {
          loading: false,
          inputData: {},
          error: null,
          loadingButtonContent: "Login",
        },
        verify: {
          loading: false,
          error: null,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;

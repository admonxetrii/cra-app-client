import { LOGIN_FAILED, LOGIN_REQ, LOGIN_SUCCESS } from "../actionConstant";

const initialState = {
  auth: {
    isLoggedIn: false,
    user: null,
  },
  login: {
    loading: false,
    inputData: {},
    error: null,
    loadingButtonContent: "Login",
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQ:
      return {
        ...state,
        login: {
          loading: true,
          inputData: action.data,
          loadingButtonContent: "Loggin in..",
          ...state.login,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: {
          isLoggedIn: true,
          userData: action.data,
        },
        login: {
          inputData: {},
          loading: false,
          ...state.login,
        },
      };
    case LOGIN_FAILED:
      return {
        ...state,
        auth: {
          isLoggedIn: false,
          userData: null,
        },
        login: {
          loading: false,
          inputData: {},
          loadingButtonContent: "Login",
          error: action.error,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;

import {
  LOGIN_FAILED,
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOGOUT,
  RESEND_OTP_FAILED,
  RESEND_OTP_REQ,
  RESEND_OTP_SUC,
  SIGNUP_FAILED,
  SIGNUP_REQ,
  SIGNUP_SUCCESS,
  SIGNUP_VERIFY_FAILED,
  SIGNUP_VERIFY_REQ,
  SIGNUP_VERIFY_SUCCESS,
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
  signup: {
    username: null,
    loading: false,
    error: null,
    inputData: {},
    data: {},
    loadingButtonContent: "Signup",
  },
  signupVerification: {
    loading: false,
    error: null,
    inputData: {},
    data: {},
    loadingButtonContent: "Veify Account",
  },
  resendOtp: {
    loading: false,
    error: null,
    inputData: {},
    data: {},
    loadingButtonContent: "Resend OTP",
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
    case SIGNUP_REQ:
      return {
        ...state,
        signup: {
          username: null,
          loading: true,
          error: null,
          data: {},
          loadingButtonContent: "please wait...",
          inputData: action.data,
        },
      };
    case SIGNUP_SUCCESS:
      // console.log(action.data, "<-----");
      return {
        ...state,
        signup: {
          inputData: {},
          username: action.data.username,
          loading: false,
          error: null,
          data: action.data,
          loadingButtonContent: "Signup",
        },
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        signup: {
          email: null,
          loading: false,
          error: action.error,
          data: {},
          loadingButtonContent: "Signup",
          inputData: {},
        },
      };
    case SIGNUP_VERIFY_REQ:
      return {
        ...state,
        signupVerification: {
          loading: true,
          error: null,
          data: {},
          loadingButtonContent: "Verifying...",
          inputData: action.data,
        },
      };
    case SIGNUP_VERIFY_SUCCESS:
      return {
        ...state,
        signupVerification: {
          loading: false,
          error: null,
          data: action.data,
          loadingButtonContent: "Verifying...",
          inputData: {},
        },
      };
    case SIGNUP_VERIFY_FAILED:
      return {
        ...state,
        signupVerification: {
          loading: false,
          error: action.error,
          data: {},
          loadingButtonContent: "Try Again",
          inputData: {},
        },
      };
    case RESEND_OTP_REQ:
      return {
        ...state,
        resendOtp: {
          loading: true,
          error: null,
          data: {},
          loadingButtonContent: "Please wait",
        },
      };
    case RESEND_OTP_SUC:
      return {
        ...state,
        resendOtp: {
          loading: false,
          error: null,
          data: action.data,
          loadingButtonContent: "Resend OTP",
        },
      };
    case RESEND_OTP_FAILED:
      return {
        ...state,
        resendOtp: {
          loading: false,
          error: action.error,
          data: {},
          loadingButtonContent: "Resend OTP",
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;

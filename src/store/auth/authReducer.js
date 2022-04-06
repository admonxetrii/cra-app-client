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
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_REQ,
  FORGOT_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILED,
  CHANGE_PASSWORD_REQ,
  CHANGE_PASSWORD_SUCCESS,
  FETCH_TAGS_REQ,
  FETCH_TAGS_SUC,
  FETCH_TAGS_FAILED,
  SAVE_USER_TAGS_REQ,
  SAVE_USER_TAGS_SUC,
  SAVE_USER_TAGS_FAILED,
} from "../actionConstant";

const initialState = {
  initialScreen: "OnBoarding",
  isLoggedIn: false,
  user: null,
  login: {
    loading: false,
    buttonEnabled: true,
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
    buttonEnabled: true,
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
  forgotPassword: {
    loading: false,
    error: null,
    inputData: {},
    data: {},
    loadingButtonContent: "Reset Password",
  },
  changePassword: {
    loading: false,
    error: null,
    inputData: {},
    data: {},
    loadingButtonContent: "Change Password",
  },
  tags: {
    data: [],
    loading: false,
    error: null,
  },
  saveUserTags: {
    loading: false,
    error: null,
    data: {},
    inputData: {},
    loadingButtonContent: "Get Started",
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
          buttonEnabled: false,
          inputData: action.data,
          loadingButtonContent: "Loggin in..",
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        initialScreen: "CustomDrawer",
        isLoggedIn: true,
        user: action.data,
        login: {
          ...state.login,
          loading: false,
          buttonEnabled: false,
          inputData: {},
          loadingButtonContent: "Login",
        },
      };
    case LOGIN_FAILED:
      return {
        ...state,
        initialScreen: "OnBoarding",
        isLoggedIn: false,
        login: {
          ...state.login,
          loading: false,
          buttonEnabled: true,
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
    case FORGOT_PASSWORD_REQ:
      return {
        ...state,
        forgotPassword: {
          ...state.forgotPassword,
          inputData: action.data,
          loading: true,
        },
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        initialScreen: "SignIn",
        isLoggedIn: false,
        forgotPassword: {
          ...state.forgotPassword,
          loading: false,
          error: null,
        },
      };
    case FORGOT_PASSWORD_FAILED:
      return {
        ...state,
        initialScreen: "ForgotPassword",
        forgotPassword: {
          ...state.forgotPassword,
          loading: false,
          error: action.error,
        },
      };

    case CHANGE_PASSWORD_REQ:
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          inputData: action.data,
          loading: true,
        },
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          loading: false,
          error: null,
        },
      };
    case CHANGE_PASSWORD_FAILED:
      return {
        ...state,
        initialScreen: "ChangePassword",
        changePassword: {
          ...state.changePassword,
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
          buttonEnabled: true,
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
          ...state.signup,
          username: null,
          loading: true,
          error: null,
          data: {},
          loadingButtonContent: "Please wait...",
          buttonEnabled: false,
          inputData: action.data,
        },
      };
    case SIGNUP_SUCCESS:
      // console.log(action.data, "<-----");
      return {
        ...state,
        signup: {
          ...state.signup,
          inputData: {},
          username: action.data.username,
          loading: false,
          error: null,
          buttonEnabled: false,
          data: action.data,
          loadingButtonContent: "Signup",
        },
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        signup: {
          ...state.signup,
          email: null,
          loading: false,
          buttonEnabled: true,
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
    case FETCH_TAGS_REQ:
      return {
        ...state,
        tags: {
          data: [],
          loading: true,
          error: null,
        },
      };
    case FETCH_TAGS_SUC:
      return {
        ...state,
        tags: {
          data: action.data,
          loading: false,
          error: null,
        },
      };
    case FETCH_TAGS_FAILED:
      return {
        ...state,
        tags: {
          data: [],
          loading: false,
          error: action.error,
        },
      };
    case SAVE_USER_TAGS_REQ:
      return {
        ...state,
        saveUserTags: {
          loading: true,
          error: null,
          data: {},
          inputData: action.data,
          loadingButtonContent: "Please wait..",
        },
      };
    case SAVE_USER_TAGS_SUC:
      return {
        ...state,
        saveUserTags: {
          loading: false,
          error: null,
          data: action.data,
          inputData: {},
          loadingButtonContent: "Get Started",
        },
      };
    case SAVE_USER_TAGS_FAILED:
      return {
        ...state,
        saveUserTags: {
          loading: false,
          error: action.error,
          data: {},
          inputData: {},
          loadingButtonContent: "Get Started",
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;

import {
  GOBACK,
  NAVIGATE,
  NAVIGATE_WITH_PROPS,
  REPLACE,
  SET_NAVIGATION_REF,
  PUSH,
} from "../actionConstant";

const initialState = {
  navigation: null,
  navigationQuery: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_NAVIGATION_REF:
      return {
        ...state,
        navigation: action.data,
      };
    case NAVIGATE:
      if (action.data.length && state.navigation)
        state.navigation.navigate(action.data);
      return {
        ...state,
      };
    case REPLACE:
      if (action.data.length && state.navigation)
        state.navigation.replace(action.data);
      return {
        ...state,
      };
    case GOBACK:
      if (state.navigation) {
        state.navigation.goBack();
      }
      return {
        ...state,
      };
    case PUSH:
      if (state.navigation) {
        state.navigation.push();
      }
      return {
        ...state,
      };
    case NAVIGATE_WITH_PROPS:
      state = {
        ...state,
        navigationQuery: action.data.query,
      };
      if (state.navigation) {
        state.navigation.navigate(action.data.path);
      }
    default:
      return {
        ...state,
      };
  }
}

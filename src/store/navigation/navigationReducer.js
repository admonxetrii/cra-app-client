import { NAVIGATE, REPLACE, SET_NAVIGATION_REF } from "../actionConstant";

const initialState = {
  navigation: null,
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
    default:
      return {
        ...state,
      };
  }
}

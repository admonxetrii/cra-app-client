import * as tabActionType from "./tabActions";

const initialState = {
  selectedTab: "",
};

const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case tabActionType.SET_SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.payload,
      };
    default:
      return state;
  }
};

export default tabReducer;

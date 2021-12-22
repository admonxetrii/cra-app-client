import { constants } from "../../../constants";
import { SET_SELECTED_TAB } from "../actionConstant";

const initialState = {
  selectedTab: constants.screens.home,
};

const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.payload,
      };
    default:
      return state;
  }
};

export default tabReducer;

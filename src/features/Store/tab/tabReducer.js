import { constants } from "../../../../constants";
import * as tabActionType from "./tabActions";

const initialState = {
  selectedTab: constants.screens.home,
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

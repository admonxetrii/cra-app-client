import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import navigationReducer from "./navigation/navigationReducer";

import tabReducer from "./tab/tabReducer";

export default combineReducers({
  auth: authReducer,
  tab: tabReducer,
  navigationRef: navigationReducer,
});

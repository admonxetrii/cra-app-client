import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";

import tabReducer from "./tab/tabReducer";

export default combineReducers({
  tab: tabReducer,
  auth: authReducer,
});

import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import navigationReducer from "./navigation/navigationReducer";
import restaurantReducer from "./restaurant/restaurantReducer";

import tabReducer from "./tab/tabReducer";

export default combineReducers({
  auth: authReducer,
  tab: tabReducer,
  navigationRef: navigationReducer,
  restaurant: restaurantReducer,
});

import React from "react";

import { Provider } from "react-redux";

import store from "./src/store";
import Router from "./Router";
import Toast from "react-native-toast-notifications";
import PushNotification from "./src/components/notifications/PushNotification";

const App = () => {
  return (
    <Provider store={store}>
      <PushNotification />
      <Router />
      <Toast ref={(ref) => (global["toast"] = ref)} />
    </Provider>
  );
};

export default App;

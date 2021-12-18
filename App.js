import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// import CustomDrawer from "./src/features/Navigation/CustomDrawer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./src/features/Store/rootReducer";

import { OnBoarding, SignIn } from "./src/features";

import {
  useFonts as usePoppins,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_Bold,
} from "@expo-google-fonts/poppins";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  const [poppinsLoaded] = usePoppins({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_Bold,
  });
  const [latoLoaded] = useLato({ Lato_400Regular });

  // if (!poppinsLoaded || !latoLoaded) {
  //   return null;
  // }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"OnBoarding"}
        >
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

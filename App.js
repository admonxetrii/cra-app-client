import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, ActivityIndicator } from "react-native";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import {
  OnBoarding,
  SignIn,
  SignUp,
  ForgotPassword,
  CustomDrawer,
} from "./src/features";

import {
  useFonts as usePoppins,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import { FONTS } from "./constants";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import store from "./src/store";

const Stack = createStackNavigator();

const App = () => {
  const [poppinsLoaded] = usePoppins({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  React.useEffect(() => {
    // check token
  }, []);

  if (!poppinsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#ff5353" />
        <Text
          style={{
            ...FONTS.h2,
          }}
        >
          Loading...
        </Text>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        {null === null ? (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="OnBoarding"
          >
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="CustomDrawer"
          >
            <Stack.Screen name="CustomDrawer" component={CustomDrawer} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </Provider>
  );
};

export default App;

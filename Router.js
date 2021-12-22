import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, ActivityIndicator } from "react-native";

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
import { useDispatch, useSelector } from "react-redux";
import { verifyTokenRequest } from "./src/store/auth/authAction";
import Storage from "./src/Helper/Storage";

const Stack = createStackNavigator();

const Router = () => {
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

  const dispatch = useDispatch();

  React.useEffect(async () => {
    const token = await Storage.getToken("access");
    if (token) {
      dispatch(verifyTokenRequest(token));
    }
  }, []);

  const auth = useSelector((state) => state.auth);

  if (auth.verify.loading || !poppinsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#ff5353" />
      </View>
    );
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={auth.initialScreen}
        >
          {auth.isLoggedIn ? (
            <Stack.Screen name="CustomDrawer" component={CustomDrawer} />
          ) : (
            <>
              <Stack.Screen name="OnBoarding" component={OnBoarding} />
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Router;

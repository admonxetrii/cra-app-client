import React, { useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, ActivityIndicator } from "react-native";

import {
  OnBoarding,
  SignIn,
  SignUp,
  Otp,
  ForgotPassword,
  CustomDrawer,
  RestaurantDetail,
  CartTab,
  ScanTable,
  Profile,
  ChangePassword,
  EditProfile,
  ReserveTableStage,
  TableReservation,
  MyReservationPage,
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
import { useDispatch, useSelector } from "react-redux";
import { verifyTokenRequest } from "./src/store/auth/authAction";
import Storage from "./src/Helper/Storage";
import {
  navigate,
  setNavigation,
} from "./src/store/navigation/navigationAction";
import Tags from "./src/features/Authentication/Tags";
const Stack = createStackNavigator();

const NavigationRefHandler = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  useEffect(() => {
    dispatch(setNavigation(navigation));
  }, []);
  return <></>;
};

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

  console.log(auth?.user);

  useEffect(() => {
    if (!auth?.user?.has_tags && auth?.user?.is_verified) {
      dispatch(navigate("tags"));
    }
  }, [auth.user]);

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
        <NavigationRefHandler />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={auth.initialScreen}
        >
          {auth.isLoggedIn ? (
            <>
              <Stack.Screen name="CustomDrawer" component={CustomDrawer} />
              <Stack.Screen
                name="RestaurantDetail"
                component={RestaurantDetail}
              />
              <Stack.Screen name="MyCart" component={CartTab} />
              <Stack.Screen name="ScanTable" component={ScanTable} />
              <Stack.Screen name="Profile" component={Profile} />
              <Stack.Screen name="EditProfile" component={EditProfile} />
              <Stack.Screen name="ChangePassword" component={ChangePassword} />
              <Stack.Screen
                name="ReserveTableStage"
                component={ReserveTableStage}
              />
              <Stack.Screen
                name="MyReservationPage"
                component={MyReservationPage}
              />
              <Stack.Screen
                name="TableReservation"
                component={TableReservation}
              />

              <Stack.Screen name="tags" component={Tags} />
            </>
          ) : (
            <>
              <Stack.Screen name="OnBoarding" component={OnBoarding} />
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="Otp" component={Otp} />
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Router;

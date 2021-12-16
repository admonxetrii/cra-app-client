import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// import { CustomDrawer } from "./src/features/Navigation/CustomDrawer";
// import { Overview } from "./src/features/Overview/overview";
// import Detect from "./src/features/Detect/detect";
import OnboardingScreen from "./screens/OnboardingScreen";
import StartScreen from "./screens/StartScreen";
import AppButton from "./src/components/AppButton";
import LoginScreen from "./screens/LoginScreen";
// import {
//   useFonts as usePoppins,
//   Poppins_400Regular,
//   Poppins_500Medium,
// } from "@expo-google-fonts/poppins";
// import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
// import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createStackNavigator();

const App = () => {
  // const [poppinsLoaded] = usePoppins({ Poppins_400Regular, Poppins_500Medium });
  // const [latoLoaded] = useLato({ Lato_400Regular });

  // if (!poppinsLoaded || !latoLoaded) {
  //   return null;
  // }

  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     headerMode="none"
    //     // screenOptions={{
    //     //   headerShown: false,
    //     // }}
    //     // initialRouteName={"overview"}
    //   >
    //     <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    //     <Stack.Screen name="Start" component={StartScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <LoginScreen />
  );
};

export default App;

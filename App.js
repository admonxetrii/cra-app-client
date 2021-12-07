import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { CustomDrawer } from "./src/features/Navigation/CustomDrawer";

import {
  useFonts as usePoppins,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createStackNavigator();

const App = () => {
  const [poppinsLoaded] = usePoppins({ Poppins_400Regular, Poppins_500Medium });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!poppinsLoaded || !latoLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={CustomDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

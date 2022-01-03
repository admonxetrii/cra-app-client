import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainLayout } from "..";

import { theme } from "../../infrastructure/theme";

import { CustomDrawerContent } from "./CustomDrawerContent";
import Animated from "react-native-reanimated";

import { useDispatch, useSelector } from "react-redux";
import { setSelectedTab } from "../../store/tab/tabActions.js";

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  // const [progress, setProgress] = React.useState(new Animated.Value(0));
  const progress = new Animated.Value(0);
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.86],
    // extrapolate: Extrapolate.CLAMP,
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 26],
    // extrapolate: Extrapolate.CLAMP,
  });

  const animatedStyle = {
    borderRadius,
    transform: [{ scale }],
  };

  const dispatch = useDispatch();

  const selectedTab = useSelector((state) => state.tab.selectedTab);
  const handleSelectedTab = (a) => {
    // console.log(a);
    dispatch(setSelectedTab(a));
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.brand.primary,
      }}
    >
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        screenOptions={{
          headerShown: false,
          headerTintColor: theme.colors.brand.primary,
          drawerType: "slide",
          overlayColor: "transparent",
          drawerStyle: {
            flex: 1,
            width: "65%",
            paddingRight: 20,
            drawerType: "slide",
            backgroundColor: "transparent",
          },
          overlayColor: "transparent",
          sceneContainerStyle: {
            backgroundColor: "transparent",
          },
        }}
        initualRouteName="MainLayout"
        drawerContent={(props) => {
          setTimeout(() => {
            // setProgress = props.progress;
          }, 0);
          return (
            <CustomDrawerContent
              navigation={props.navigation}
              selectedTab={selectedTab}
              setSelectedTab={handleSelectedTab}
            />
          );
        }}
      >
        <Drawer.Screen name="MainLayout">
          {(props) => (
            <MainLayout {...props} drawerAnimationStyle={animatedStyle} />
          )}
        </Drawer.Screen>
        <Drawer.Screen name="Notification">
          {(props) => (
            <MainLayout {...props} drawerAnimationStyle={animatedStyle} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;

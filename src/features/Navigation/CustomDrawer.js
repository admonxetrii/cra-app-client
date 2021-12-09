import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainLayout } from "..";
import Notification from "../Notification/Notification";

import { theme } from "../../infrastructure/theme";

import { CustomDrawerContent } from "./CustomDrawerContent";
import Animated from "react-native-reanimated";

import { connect } from "react-redux";
import { setSelectedTab } from "../Store/tab/tabActions";

const Drawer = createDrawerNavigator();

const CustomDrawer = ({ selectedTab, setSelectedTab }) => {
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
              setSelectedTab={setSelectedTab}
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
            <Notification {...props} drawerAnimationStyle={animatedStyle} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: (selectedTab) => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);

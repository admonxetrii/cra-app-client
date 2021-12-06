import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

import { MainLayout } from "..";

import { theme } from "../../infrastructure/theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (navigation) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 12,
        }}
      >
        {/* Close */}
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.closeDrawer()}
          >
            <FontAwesomeIcon
              icon={faPlus}
              style={{
                color: theme.colors.text.primary,
                height: 35,
                width: 35,
              }}
            />
            <Text>Hello</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export const CustomDrawer = () => {
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
        drawerStyle={{
          flex: 1,
          width: "65%",
          paddingRight: 20,
          backgroundColor: "transparent",
        }}
        sceneContainerStyle={{
          backgroundColor: "transparent",
        }}
        initualRouteName="MainLayout"
        drawerContent={(props) => {
          return <CustomDrawerContent navigation={props.navigation} />;
        }}
      >
        <Drawer.Screen name="MainLayout">
          {(props) => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import { MainLayout } from "..";

import { theme } from "../../infrastructure/theme";
import { constants, icons, SIZES } from "../../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPersonBooth, faPlus } from "@fortawesome/free-solid-svg-icons";

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, icon }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 40,
        marginBottom: SIZES.base,
        alignItems: "center",
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
        // backgroundColor
      }}
    >
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          tintColor: "white",
        }}
      />
      <Text
        style={{
          marginLeft: 15,
          color: "white",
          fontFamily: theme.fonts.body,
          fontSize: 16,
          lineHeight: 22,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({ navigation }) => {
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
            onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
          >
            <Image
              source={icons.cross}
              style={{
                width: 35,
                height: 35,
                tintColor: "white",
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Profile  */}

        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginTop: 12,
            alignItems: "center",
          }}
          onPress={() => console.log("Profile")}
        >
          <Image
            source={icons.profile}
            style={{ width: 50, height: 50, borderRadius: 12 }}
          />
          <View style={{ marginLeft: 12 }}>
            <Text
              style={{
                color: "white",
                fontFamily: theme.fonts.bold,
                fontSize: 18,
                lineHeight: 22,
              }}
            >
              Nisham Wagle
            </Text>
            <Text
              style={{
                color: "white",
                fontFamily: theme.fonts.body,
                fontSize: 14,
                lineHeight: 22,
              }}
            >
              View your profile
            </Text>
          </View>
        </TouchableOpacity>

        {/* Drawer  */}

        <View
          style={{
            flex: 1,
            marginTop: 16,
          }}
        >
          <CustomDrawerItem label="Home" icon={icons.home} />
          <CustomDrawerItem label="Cart" icon={icons.cart} />
          <CustomDrawerItem label="Search" icon={icons.search} />
          <CustomDrawerItem label="Favourites" icon={icons.favourite} />
          <CustomDrawerItem label="Notifications" icon={icons.notification} />
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

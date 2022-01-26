import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";

import { theme } from "../../infrastructure/theme";
import { constants, icons, SIZES, images } from "../../../constants";

import { CustomDrawerItem } from "./CustomDrawerItem";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth/authAction";

export const CustomDrawerContent = ({
  navigation,
  selectedTab,
  setSelectedTab,
}) => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.auth?.user);

  // console.log("userdata", userData);

  const userImage = () => {
    if (userData?.profile_picture != null) {
      return userData?.profile_picture;
    } else if (userData?.gender == "male") {
      return images.male;
    } else {
      return images.female;
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };
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
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            source={userImage()}
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
              {`${
                userData?.first_name != "" ? userData?.first_name : "Anonymous"
              } ${userData?.last_name != "" ? userData?.last_name : ""}`}
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
          {/* Menu Items  */}
          <CustomDrawerItem
            label="Home"
            icon={icons.home}
            isFocused={selectedTab == "Home"}
            onPress={() => {
              setSelectedTab("Home");
              navigation.navigate("MainLayout");
            }}
          />
          <CustomDrawerItem label="Wallet" icon={icons.wallet} />
          <CustomDrawerItem
            label="Notification"
            icon={icons.notification}
            isFocused={selectedTab == "Notification"}
            onPress={() => {
              setSelectedTab("Notification");
              navigation.navigate("Notification");
            }}
          />
          <CustomDrawerItem label="Favourites" icon={icons.favourite} />

          {/* line divider  */}

          <View
            style={{
              height: 1,
              marginVertical: SIZES.radius,
              marginLeft: SIZES.radius,
              backgroundColor: "#c7c7c7",
            }}
          ></View>

          <CustomDrawerItem
            label="See Nearest Restaurant"
            icon={icons.location}
          />
          <CustomDrawerItem label="Coupon" icon={icons.coupon} />
          <CustomDrawerItem label="Settings" icon={icons.setting} />
          <CustomDrawerItem label="Invite a friend" icon={icons.profile} />
          <CustomDrawerItem label="Help Center" icon={icons.help} />
        </View>

        {/* Log Out Button  */}

        <View
          style={{
            marginBottom: SIZES.padding,
          }}
        >
          <CustomDrawerItem
            onPress={handleLogout}
            label="Log out"
            icon={icons.logout}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

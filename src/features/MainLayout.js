import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Card, Searchbar } from "react-native-paper";
import { theme } from "../infrastructure/theme";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { useDispatch, useSelector } from "react-redux";
import { Header } from "./Header";
import { DrawerActions } from "@react-navigation/native";

import { FONTS, SIZES, icons, constants, images } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";

import { TabButton } from "./Tabs/TabButton";

// Views
import { Home, CartTab, Favourite, Notification, Search } from ".";

// data
import { Restaurant } from "../API/RestaurantAPI/restaurant.services";
import { setSelectedTab } from "./Store/tab/tabActions";

const MainLayout = ({ drawerAnimationStyle, navigation }) => {
  const selectedTab = useSelector((state) => state.tabReducer.selectedTab);
  const dispatch = useDispatch();

  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue(theme.colors.brand.primary);
  const searchTabFlex = useSharedValue(1);
  const searchTabColor = useSharedValue(theme.colors.bg.primary);
  const cartTabFlex = useSharedValue(1);
  const cartTabColor = useSharedValue(theme.colors.bg.primary);
  const favouriteTabFlex = useSharedValue(1);
  const favouriteTabColor = useSharedValue(theme.colors.bg.primary);
  const notificationTabFlex = useSharedValue(1);
  const notificationTabColor = useSharedValue(theme.colors.bg.primary);

  const homeFlexStyle = useAnimatedStyle(() => {
    return {
      flex: homeTabFlex.value,
    };
  });

  const homeColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: homeTabColor.value,
    };
  });

  const searchFlexStyle = useAnimatedStyle(() => {
    return {
      flex: searchTabFlex.value,
    };
  });

  const searchColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: searchTabColor.value,
    };
  });

  const cartFlexStyle = useAnimatedStyle(() => {
    return {
      flex: cartTabFlex.value,
    };
  });

  const cartColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: cartTabColor.value,
    };
  });

  const notificationFlexStyle = useAnimatedStyle(() => {
    return {
      flex: notificationTabFlex.value,
    };
  });

  const notificationColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: notificationTabColor.value,
    };
  });

  const favouriteFlexStyle = useAnimatedStyle(() => {
    return {
      flex: favouriteTabFlex.value,
    };
  });

  const favouriteColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: favouriteTabColor.value,
    };
  });

  const handleSelectedTab = (tab) => {
    dispatch(setSelectedTab(tab));
  };

  React.useEffect(() => {
    handleSelectedTab(selectedTab);
  }, []);

  React.useEffect(() => {
    if (selectedTab == constants.screens.home) {
      homeTabFlex.value = withTiming(3, { duration: 300 });
      homeTabColor.value = withTiming(theme.colors.brand.primary, {
        duration: 500,
      });
    } else {
      homeTabFlex.value = withTiming(1, { duration: 500 });
      homeTabColor.value = withTiming(theme.colors.bg.primary, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
    }
    if (selectedTab === constants.screens.search) {
      searchTabFlex.value = withTiming(3, { duration: 300 });
      searchTabColor.value = withTiming(theme.colors.brand.primary, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
    } else {
      searchTabFlex.value = withTiming(1, { duration: 500 });
      searchTabColor.value = withTiming(theme.colors.bg.primary, {
        duration: 500,
      });
    }
    if (selectedTab === constants.screens.cart) {
      cartTabFlex.value = withTiming(3, { duration: 300 });
      cartTabColor.value = withTiming(theme.colors.brand.primary, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
    } else {
      cartTabFlex.value = withTiming(1, { duration: 500 });
      cartTabColor.value = withTiming(theme.colors.bg.primary, {
        duration: 500,
      });
    }
    if (selectedTab === constants.screens.favourite) {
      favouriteTabFlex.value = withTiming(3, { duration: 300 });
      favouriteTabColor.value = withTiming(theme.colors.brand.primary, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
    } else {
      favouriteTabFlex.value = withTiming(1, { duration: 500 });
      favouriteTabColor.value = withTiming(theme.colors.bg.primary, {
        duration: 500,
      });
    }
    if (selectedTab === constants.screens.notification) {
      notificationTabFlex.value = withTiming(3, { duration: 300 });
      notificationTabColor.value = withTiming(theme.colors.brand.primary, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
    } else {
      notificationTabFlex.value = withTiming(1, { duration: 500 });
      notificationTabColor.value = withTiming(theme.colors.bg.primary, {
        duration: 500,
      });
    }
  }, [selectedTab]);

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          backgroundColor: "white",
        },
        drawerAnimationStyle,
      ]}
    >
      {/* Header  */}
      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 40,
          alignItems: "center",
        }}
        title={selectedTab.toUpperCase()}
        leftComponent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: theme.colors.brand.primary,
              borderRadius: SIZES.radius,
            }}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            <Image
              source={icons.menu}
              style={{
                tintColor: theme.colors.brand.primary,
              }}
            />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
            }}
          >
            <Image
              source={images.profile}
              style={{
                width: 40,
                height: 40,
                borderRadius: SIZES.radius,
              }}
            />
          </TouchableOpacity>
        }
      />

      {/* Content  */}
      <View
        style={{
          flex: 1,
          padding: 16,
        }}
      >
        {selectedTab == constants.screens.home && <Home />}
        {selectedTab == constants.screens.search && <Search />}
        {selectedTab == constants.screens.cart && <CartTab />}
        {selectedTab == constants.screens.notification && <Notification />}
        {selectedTab == constants.screens.favourite && <Favourite />}
      </View>

      {/* Footer  */}
      <View
        style={{
          height: 100,
          justifyContent: "flex-end",
        }}
      >
        {/* Shadow  */}
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 4 }}
          colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]}
          style={{
            position: "absolute",
            top: -20,
            left: 0,
            right: 0,
            height: 100,
            borderTopLeftRadius: 15,
            borderTopLeftRadius: 15,
          }}
        />

        {/* Tabs  */}

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingHorizontal: SIZES.radius,
            paddingBottom: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: "white",
          }}
        >
          <TabButton
            label={constants.screens.home}
            icon={icons.home}
            outerContainerStyle={homeFlexStyle}
            innerContainerStyle={homeColorStyle}
            isFocused={selectedTab == constants.screens.home}
            onPress={() => handleSelectedTab(constants.screens.home)}
          />
          <TabButton
            label={constants.screens.search}
            icon={icons.search}
            outerContainerStyle={searchFlexStyle}
            innerContainerStyle={searchColorStyle}
            isFocused={selectedTab == constants.screens.search}
            onPress={() => handleSelectedTab(constants.screens.search)}
          />
          <TabButton
            label={constants.screens.cart}
            icon={icons.cart}
            outerContainerStyle={cartFlexStyle}
            innerContainerStyle={cartColorStyle}
            isFocused={selectedTab == constants.screens.cart}
            onPress={() => handleSelectedTab(constants.screens.cart)}
          />
          <TabButton
            label={constants.screens.notification}
            icon={icons.notification}
            outerContainerStyle={notificationFlexStyle}
            innerContainerStyle={notificationColorStyle}
            isFocused={selectedTab == constants.screens.notification}
            onPress={() => handleSelectedTab(constants.screens.notification)}
          />
          <TabButton
            label={constants.screens.favourite}
            icon={icons.favourite}
            outerContainerStyle={favouriteFlexStyle}
            innerContainerStyle={favouriteColorStyle}
            isFocused={selectedTab == constants.screens.favourite}
            onPress={() => handleSelectedTab(constants.screens.favourite)}
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default MainLayout;

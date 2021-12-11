import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Card, Searchbar } from "react-native-paper";
import { theme } from "../infrastructure/theme";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { connect } from "react-redux";
import { setSelectedTab } from "./Store/tab/tabActions";
import { Header } from "./Header";
import { DrawerActions } from "@react-navigation/native";

import { FONTS, SIZES, icons, constants, images } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";
import { TabButton } from "./Tabs/TabButton";

// data
import { Restaurant } from "../infrastructure/API/RestaurantAPI/restaurant.services";

const MainLayout = ({
  drawerAnimationStyle,
  navigation,
  selectedTab,
  setSelectedTab,
}) => {
  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue(theme.colors.bg.primary);
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

  React.useEffect(() => {
    setSelectedTab(constants.screens.home);
  }, []);

  React.useEffect(() => {
    if (selectedTab == constants.screens.home) {
      homeFlexStyle.value = withTiming(4, { duration: 500 });
      homeColorStyle.value = withTiming(theme.colors.brand.primary, {
        duration: 500,
      });
    } else {
      homeFlexStyle.value = withTiming(1, { duration: 500 });
      homeColorStyle.value = withTiming(theme.colors.bg.primary, {
        duration: 500,
      });
    }
  }, selectedTab);
  // console.log(restaurant.name);

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: "white",
        ...drawerAnimationStyle,
      }}
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
        {/* <Restaurant /> */}
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
            outerContainerStyle={tabStyle.homeFlexStyle}
            innerContainerStyle={tabStyle.homeColorStyle}
            isFocused={selectedTab == constants.screens.home}
            onPress={() => setSelectedTab(constants.screens.home)}
          />
          <TabButton
            label={constants.screens.search}
            icon={icons.search}
            outerContainerStyle={tabStyle.searchFlexStyle}
            innerContainerStyle={tabStyle.searchColorStyle}
            isFocused={selectedTab == constants.screens.search}
            onPress={() => setSelectedTab(constants.screens.search)}
          />
          <TabButton
            label={constants.screens.cart}
            icon={icons.cart}
            outerContainerStyle={tabStyle.cartFlexStyle}
            innerContainerStyle={tabStyle.cartColorStyle}
            isFocused={selectedTab == constants.screens.cart}
            onPress={() => setSelectedTab(constants.screens.cart)}
          />
          <TabButton
            label={constants.screens.notification}
            icon={icons.notification}
            outerContainerStyle={tabStyle.notificationFlexStyle}
            innerContainerStyle={tabStyle.notificationColorStyle}
            isFocused={selectedTab == constants.screens.notification}
            onPress={() => setSelectedTab(constants.screens.notification)}
          />
          <TabButton
            label={constants.screens.favourite}
            icon={icons.favourite}
            outerContainerStyle={tabStyle.favouriteFlexStyle}
            innerContainerStyle={tabStyle.favouriteColorStyle}
            isFocused={selectedTab == constants.screens.favourite}
            onPress={() => setSelectedTab(constants.screens.favourite)}
          />
        </View>
      </View>
    </Animated.View>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);

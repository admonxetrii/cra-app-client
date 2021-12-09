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

const MainLayout = ({
  restaurants = {},
  drawerAnimationStyle,
  navigation,
  selectedTab,
  setSelectedTab,
}) => {
  const {
    name = "Tropical Rest",
    icon,
    image = [
      "https://www.collinsdictionary.com/images/full/restaurant_135621509.jpg",
    ],
    address = "Halchowk, Kathmandu",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurants;

  React.useEffect(() => {
    setSelectedTab(constants.screens.home);
  });

  return (
    <Animated.View
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: "white",
        ...drawerAnimationStyle,
      }}
    >
      {/* Header  */}
      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 10,
          marginLeft: -25,
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
              marginRight: -25,
              borderRadius: SIZES.radius,
            }}
            onPress={console.log("Profile")}
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
        }}
      >
        <Text>Home ko contents haru</Text>
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

// <Searchbar
//         placeholder="Search Restaurant"
//         style={{
//           marginBottom: SIZES.radius,
//         }}
//       />
//       <Card elevation={5}>
//         <Card.Cover
//           source={{ uri: image[0] }}
//           style={{ padding: 16, backgroundColor: theme.colors.bg.primary }}
//         />
//         <View
//           style={{
//             padding: 16,
//           }}
//         >
//           <Text
//             style={{
//               fontFamily: theme.fonts.body,
//               fontSize: theme.fontSizes.body,
//               color: theme.colors.text.primary,
//             }}
//           >
//             {name}
//           </Text>
//           <View>
//             <Text
//               style={{
//                 fontSize: theme.fontSizes.caption,
//                 color: theme.colors.text.secondary,
//               }}
//             >
//               {address}
//             </Text>
//           </View>
//         </View>
//       </Card>

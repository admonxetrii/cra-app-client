import React from "react";
import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import Animated from "react-native-reanimated";
import { COLORS, SIZES } from "../../../constants";

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* Search Bar  */}
      <Searchbar
        style={{
          flexDirection: "row",
          borderRadius: SIZES.radius,
          height: 40,
          marginHorizontal: SIZES.radius,
          marginVertical: SIZES.base,
          backgroundColor: COLORS.lightGray2,
        }}
      />
    </View>
  );
};

export default Home;

import React from "react";
import { View, Text } from "react-native";
import Animated from "react-native-reanimated";

const Search = () => {
  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Search page</Text>
    </Animated.View>
  );
};

export default Search;

import React from "react";
import { View, Text } from "react-native";
import Animated from "react-native-reanimated";

const Favourite = () => {
  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Favourite page</Text>
    </Animated.View>
  );
};

export default Favourite;

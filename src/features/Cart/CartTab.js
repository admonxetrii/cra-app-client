import React from "react";
import { View, Text } from "react-native";
import Animated from "react-native-reanimated";

const CartTab = () => {
  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Cart page</Text>
    </Animated.View>
  );
};

export default CartTab;

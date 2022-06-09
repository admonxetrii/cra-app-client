import React from "react";
import Animated from "react-native-reanimated";
import { View, Text } from "react-native";

const Notification = ({ drawerAnimationStyle }) => {
  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        ...drawerAnimationStyle,
      }}
    >
      <Text>Notification page</Text>
    </Animated.View>
  );
};

export default Notification;

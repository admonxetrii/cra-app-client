import React from "react";
import { View, Text } from "react-native";
import Animated from "react-native-reanimated";

const Home = () => {
  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home page</Text>
    </Animated.View>
  );
};

export default Home;

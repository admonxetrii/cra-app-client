import React from "react";
import { View, Text } from "react-native";

export const Overview = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text onPress={() => navigation.navigate("detect")}>Overview to </Text>
    </View>
  );
};

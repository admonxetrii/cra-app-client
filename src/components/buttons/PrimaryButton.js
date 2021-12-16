import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../infrastructure/theme";

export default PrimaryButton = ({
  buttonContainerStyle,
  label,
  labelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        width: "80%",
        ...buttonContainerStyle,
      }}
      onPress={onPress}
    >
      <LinearGradient
        colors={[theme.colors.brand.primary, theme.colors.brand.secondary]}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          padding: 2,
        }}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      >
        <View
          style={{
            height: "100%",
            width: "100%",
            flexGrow: 1,
            flexDirection: "row",
            position: "absolute",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontFamily: theme.fonts.semibold,
              ...labelStyle,
            }}
          >
            {label}
          </Text>
          <View
            style={{
              position: "absolute",
              right: 0,
              borderRadius: 50,
              height: "100%",
              width: buttonContainerStyle.height - 4,
              backgroundColor: "#FFFFFF",
            }}
          ></View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

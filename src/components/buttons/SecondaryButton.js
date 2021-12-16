import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../infrastructure/theme";

export const SecondaryButton = ({
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
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            height: "100%",
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <Text
            style={{
              fontFamily: theme.fonts.semibold,
              ...labelStyle,
            }}
          >
            {label}
          </Text>
          <LinearGradient
            colors={[theme.colors.brand.primary, theme.colors.brand.secondary]}
            style={{
              position: "absolute",
              right: 0,
              borderRadius: 50,
              height: "100%",
              width: buttonContainerStyle.height - 4,
            }}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
          ></LinearGradient>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

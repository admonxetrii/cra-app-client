import React from "react";

import { TouchableOpacity, Text } from "react-native";
import { FONTS, COLORS } from "../../../constants";
import { theme } from "../../infrastructure/theme";

const TextButton = ({ buttonContainerStyle, label, labelStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        ...buttonContainerStyle,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: "white",
          fontFamily: theme.fonts.semibold,
          ...labelStyle,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;

import React from "react";
import { View, Text } from "react-native";
import { theme } from "../../infrastructure/theme";

const Header = ({ containerStyle, title, leftComponent, rightComponent }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        ...containerStyle,
      }}
    >
      {/* Left  */}
      {leftComponent}

      {/* Title  */}
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: theme.fonts.bold,
            fontSize: 22,
            color: theme.colors.brand.primary,
          }}
        >
          {title}
        </Text>
      </View>

      {/* Right  */}
      {rightComponent}
    </View>
  );
};

export default Header;

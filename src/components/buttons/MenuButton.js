import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../../../constants";
import { theme } from "../../infrastructure/theme";

const MenuButton = ({
  containerStyle,
  icon,
  iconStyle,
  label,
  labelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        padding: SIZES.base,
        marginLeft: SIZES.radius,
        marginTop: SIZES.radius,
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: SIZES.radius,
          borderColor: theme.colors.brand.primary,
          borderWidth: 1,
          backgroundColor: COLORS.white,
          ...containerStyle,
        }}
      >
        {/* Icon */}
        <Image
          source={icon}
          style={{
            tintColor: theme.colors.brand.primary,
            ...iconStyle,
          }}
        />
      </View>
      {/* Title  */}
      <Text
        style={{
          fontFamily: "Poppins_500Medium",
          fontSize: 10,
          ...labelStyle,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuButton;

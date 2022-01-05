import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";

import { FONTS, COLORS, SIZES, icons } from "../../../constants";
import { theme } from "../../infrastructure/theme";

const CartQuantityButton = ({
  containerStyle,
  iconStyle,
  quantity,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.radius,
        backgroundColor: theme.colors.brand.secondaryMuted,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={icons.cart}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.black,
          ...iconStyle,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 5,
          right: 5,
          width: 15,
          height: 15,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: SIZES.radius,
          backgroundColor: theme.colors.brand.primary,
        }}
      >
        <Text
          style={{
            // zIndex: 999,
            color: COLORS.black,
            ...FONTS.body5,
            lineHeight: 0,
            fontSize: 10,
          }}
        >
          {quantity}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartQuantityButton;

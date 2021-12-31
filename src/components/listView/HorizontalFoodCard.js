import React from "react";
import { View, Text, TouchableOpacity, Image, Touchable } from "react-native";

import { COLORS, FONTS, SIZES, icons } from "../../../constants";

const HorizontalFoodCard = ({
  contentContainerStyle,
  imageStyle,
  item,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...contentContainerStyle,
      }}
    >
      {/* Image  */}
      <Image source={item.image} style={{ ...imageStyle }} />

      {/* Info  */}
      <View
        style={{
          flex: 1,
        }}
      >
        {/* Name  */}
        <Text style={{ ...FONTS.h3, fontSize: 17 }}>{item.name}</Text>

        {/* Description  */}
        <Text style={{ ...FONTS.body4, color: COLORS.darkGray2 }}>
          {item.description}
        </Text>

        {/* Price  */}
        <Text style={{ marginTop: SIZES.base, ...FONTS.h2 }}>
          Rs. {item.price}/-
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalFoodCard;

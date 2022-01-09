import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

import { COLORS, FONTS, SIZES, icons } from "../../../constants";

const VerticalFoodCard = ({ contentContainerStyle, item, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: 200,
        padding: SIZES.padding,
        alignItems: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...contentContainerStyle,
      }}
      onPress={onPress}
    >
      {/* Image  */}
      <View
        style={{
          height: 150,
          width: 150,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{
            uri: item.image,
          }}
          style={{
            height: "100%",
            width: "100%",
            borderRadius: SIZES.radius,
          }}
        />
      </View>

      {/* Info  */}
      <View
        style={{
          alignItems: "center",
          marginTop: -20,
        }}
      >
        {/* Name  */}
        <Text style={{ ...FONTS.h3, fontSize: 17 }}>{item.name}</Text>

        {/* Description  */}
        <Text
          style={{
            ...FONTS.body5,
            textAlign: "center",
            color: COLORS.darkGray2,
          }}
        >
          {item.description}
        </Text>

        {/* Price  */}
        <Text style={{ marginTop: SIZES.radius, ...FONTS.h2 }}>
          Rs. {item.price}/-
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalFoodCard;

import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

import { COLORS, FONTS, SIZES, icons } from "../../../constants";
import { theme } from "../../infrastructure/theme";

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
          marginTop: 5,
        }}
      >
        {/* Name  */}
        <Text style={{ ...FONTS.h2, fontSize: 20 }}>{item.name}</Text>

        {/* Address  */}
        <Text style={{ ...FONTS.body4, color: COLORS.darkGray2 }}>
          {item.address}
        </Text>

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
        <View
          style={{
            width: 150,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Open or Closed  */}
          <Text
            style={{
              ...FONTS.body4,
              color: item.isOpenNow ? COLORS.green : COLORS.red,
            }}
          >
            {item.isOpenNow ? "OPEN" : "CLOSED"}
          </Text>

          {/* Ratings  */}
          <View
            style={{
              backgroundColor: theme.colors.brand.secondaryMuted,
              height: 30,
              width: 50,
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Text style={{ ...FONTS.h3, color: theme.colors.brand.primary }}>
              {item.rating}
            </Text>
            <Image
              source={icons.star}
              style={{
                height: 15,
                width: 15,
                tintColor: theme.colors.brand.primary,
                marginLeft: 5,
              }}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalFoodCard;

import React from "react";
import { View, Text, TouchableOpacity, Image, Touchable } from "react-native";
import { theme } from "../../infrastructure/theme";
import { COLORS, FONTS, SIZES, icons } from "../../../constants";

const HorizontalFoodCard = ({
  contentContainerStyle,
  imageStyle,
  item,
  similarityPercent,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        padding: SIZES.padding,
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
            borderRadius: SIZES.radius,
            ...imageStyle,
          }}
        />
      </View>
      {/* Info  */}
      <View
        style={{
          flex: 1,
          marginLeft: 15,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          {/* Name  */}
          <Text style={{ ...FONTS.h3, fontSize: 17 }}>{item.name}</Text>

          {/* Address  */}
          <Text
            style={{
              ...FONTS.body4,
              fontSize: 13,
              lineHeight: 20,
              color: COLORS.darkGray2,
            }}
          >
            {item.address}
          </Text>

          <Text
            style={{
              ...FONTS.body4,
              fontSize: 13,
              fontStyle: "italic",
              lineHeight: 20,
              marginTop: 3,
              color: COLORS.darkGray2,
            }}
            ellipsizeMode="tail"
            numberOfLines={2}
          >
            {similarityPercent != undefined ? (
              <Text>{`Similarity Percentage: ${
                similarityPercent.toFixed(2) * 100
              }%`}</Text>
            ) : (
              <Text>{`${item.description}`}</Text>
            )}
          </Text>
        </View>
        <View
          style={{
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

export default HorizontalFoodCard;

import React, { Children } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FONTS, SIZES } from "../../../constants";
import { theme } from "../../infrastructure/theme";

const CardSection = ({ title, onPress, children }) => {
  return (
    <View>
      {/* Header  */}
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: SIZES.padding,
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        <Text style={{ flex: 1, ...FONTS.h3 }}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={{ ...FONTS.body3, color: theme.colors.brand.primary }}>
            Show all
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content  */}
      {children}
    </View>
  );
};

export default CardSection;

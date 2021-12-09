import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { theme } from "../../infrastructure/theme";
import { SIZES } from "../../../constants";

export const CustomDrawerItem = ({ label, icon }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 40,
        marginBottom: SIZES.base,
        alignItems: "center",
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
        // backgroundColor
      }}
    >
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          tintColor: "white",
        }}
      />
      <Text
        style={{
          marginLeft: 15,
          color: "white",
          fontFamily: theme.fonts.body,
          fontSize: 16,
          lineHeight: 22,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

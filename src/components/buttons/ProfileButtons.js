import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";
import { theme } from "../../infrastructure/theme";

const ProfileButton = ({ icon, label, labelStyle, line, onPress }) => {
  return (
    <>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: 40,
        }}
        onPress={onPress}
      >
        <Image
          source={icon}
          style={{
            width: 25,
            height: 25,
            tintColor: theme.colors.brand.primary,
          }}
        />
        <Text
          style={{
            paddingHorizontal: SIZES.padding,
            ...FONTS.h3,
            ...labelStyle,
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
      {line && (
        <View
          style={{
            borderBottomColor: COLORS.lightGray1,
            marginTop: 10,
            marginBottom: 5,
            borderBottomWidth: 1,
          }}
        />
      )}
    </>
  );
};

export default ProfileButton;

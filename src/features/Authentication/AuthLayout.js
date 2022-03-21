import React from "react";
import { View, Text, Image, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { images, FONTS, SIZES, COLORS } from "../../../constants";
import KeyboardAvoidingWrapper from "../../components/wrapper/keyboardAvoidingWapper";
import { theme } from "../../infrastructure/theme";

const AuthLayout = ({
  navigation,
  banner,
  title,
  subTitle,
  titleContainerStyle,
  imageContainerStyle,
  children,
}) => {
  return (
    <KeyboardAvoidingWrapper flex={1}>
      <View
        style={{
          flex: 1,
          padding: SIZES.padding,
          backgroundColor: COLORS.white,
        }}
      >
        {/* App Icon  */}

        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            source={banner}
            resizeMode="contain"
            style={{
              ...imageContainerStyle,
              marginBottom: -SIZES.padding,
            }}
          />
        </View>

        {/* Title & Subtitle  */}
        <View
          style={{
            marginTop: SIZES.padding,
            ...titleContainerStyle,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              ...FONTS.h2,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: COLORS.darkGray,
              marginTop: SIZES.base,
              ...FONTS.body4,
            }}
          >
            {subTitle}
          </Text>
        </View>

        {/* Content  */}
        {children}
      </View>
    </KeyboardAvoidingWrapper>
  );
};

export default AuthLayout;

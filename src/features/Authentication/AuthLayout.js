import React from "react";
import { View, Text, Image } from "react-native";

import { images, FONTS, SIZES } from "../../../constants";
import { theme } from "../../infrastructure/theme";

const AuthLayout = ({ title, subTitle, titleContainerStyle, children }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        backgroundColor: "white",
      }}
    >
      {/* App Icon  */}

      {/* Title & Subtitle  */}

      {/* Content  */}
    </View>
  );
};

export default AuthLayout;

import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { COLORS } from "../../../constants";

const IconButton = ({ containerStyle, icon, iconStyle, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={{ ...containerStyle }}
      onPress={onPress}
      disabled={disabled}
    >
      <Image
        source={icon}
        style={{
          width: 30,
          height: 30,
          tintColor: "white",
          ...iconStyle,
        }}
      />
    </TouchableOpacity>
  );
};

export default IconButton;

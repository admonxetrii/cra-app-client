import React from "react";
import { View, TouchableWithoutFeedback, Text, StyleSheet } from "react-native";
import { FONTS, SIZES, COLORS } from "../../../constants";
import { theme } from "../../infrastructure/theme";

const CustomSwitch = ({ value, onChange, title }) => {
  return (
    <TouchableWithoutFeedback onPress={() => onChange(!value)}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {/* Switch  */}
        <View
          style={value ? styles.switchOnContainer : styles.switchOffContainer}
        >
          <View
            style={{
              ...styles.dot,
              backgroundColor: value ? COLORS.white : COLORS.gray,
            }}
          />
        </View>

        {/* Text  */}
        <Text
          style={{
            color: value ? theme.colors.brand.primary : COLORS.gray,
            marginLeft: SIZES.base,
            ...FONTS.body4,
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  switchOnContainer: {
    width: 40,
    height: 20,
    paddingRight: 2,
    justifyContent: "center",
    alignItems: "flex-end",
    borderRadius: 10,
    backgroundColor: theme.colors.brand.primary,
  },
  switchOffContainer: {
    width: 40,
    height: 20,
    paddingLeft: 2,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});

export default CustomSwitch;

import React from "react";
import { View, Text } from "react-native";
import { IconButton } from "..";
import { FONTS, SIZES, COLORS, icons } from "../../../constants";
import { theme } from "../../infrastructure/theme";

const StepperInput = ({ containerStyle, value = 0, onAdd, onMinus }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 55,
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}
    >
      {value != 0 && (
        <>
          <IconButton
            containerStyle={{
              width: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={icons.wrong}
            iconStyle={{
              height: 20,
              width: 20,
              tintColor: value > 0 ? theme.colors.brand.primary : COLORS.gray,
            }}
            onPress={onMinus}
          />
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ ...FONTS.h2 }}>{value}</Text>
          </View>
        </>
      )}
      <IconButton
        containerStyle={{
          width: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
        icon={icons.check}
        iconStyle={{
          height: 20,
          width: 20,
          tintColor: value < 10 ? theme.colors.brand.primary : COLORS.gray,
        }}
        onPress={onAdd}
      />
    </View>
  );
};
export default StepperInput;

import React from "react";
import { View, Text, TextInput, Image } from "react-native";

import { FONTS, SIZES, COLORS, icons } from "../../../constants";
import { theme } from "../../infrastructure/theme";

const FormInput = ({
  containerStyle,
  label,
  placeholder,
  inputStyle,
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = "default",
  autoCompleteType = "off",
  autoCapitalize = "none",
  errorMsg = "",
  defaultValue,
  icon,
}) => {
  return (
    <View
      style={{
        ...containerStyle,
      }}
    >
      {/* Label & Error Message  */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
          }}
        >
          {label}
        </Text>
        <Text
          style={{
            color: COLORS.red,
            ...FONTS.body4,
          }}
        >
          {errorMsg}
        </Text>
      </View>

      {/* Text Input  */}
      <View
        style={{
          flexDirection: "row",
          height: 55,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.base,
          borderRadius: 50,
          backgroundColor: COLORS.white,
          shadowColor: "#000",
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 10,
        }}
      >
        {prependComponent}

        <TextInput
          style={{
            flex: 1,
            ...inputStyle,
          }}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          onChangeText={(text) => onChange(text)}
          defaultValue={defaultValue}
        />

        {appendComponent}
        <View
          style={{
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            right: 10,
            top: 7.5,
            borderRadius: 50,
            height: 40,
            width: 40,
            backgroundColor: "#FFFFFF",
            shadowColor: "#000",
            shadowOpacity: 1,
            shadowRadius: 5,
            elevation: 5,
          }}
        >
          <Image
            source={icon}
            style={{
              height: 20,
              resizeMode: "contain",
              tintColor: theme.colors.brand.primary,
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default FormInput;

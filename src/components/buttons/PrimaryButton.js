import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../infrastructure/theme";

const PrimaryButton = ({
  buttonContainerStyle,
  label,
  labelStyle,
  onPress,
  icon,
  disabled,
  loader,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        ...buttonContainerStyle,
      }}
      onPress={onPress}
    >
      <LinearGradient
        colors={
          disabled
            ? [
                theme.colors.brand.primaryMuted,
                theme.colors.brand.secondaryMuted,
              ]
            : [theme.colors.brand.primary, theme.colors.brand.secondary]
        }
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          padding: 2,
          overflow: "hidden",
        }}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      >
        <View
          style={{
            height: "100%",
            width: "100%",
            flexGrow: 1,
            flexDirection: "row",
            position: "absolute",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontFamily: theme.fonts.semibold,
              ...labelStyle,
            }}
          >
            {label}
          </Text>
          {loader && (
            <ActivityIndicator
              size="small"
              color="white"
              style={{ marginLeft: 5 }}
            />
          )}
          <View
            style={{
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              right: 0,
              borderRadius: 50,
              height: "100%",
              width: buttonContainerStyle.height - 4,
              backgroundColor: "#FFFFFF",
            }}
          >
            <Image
              source={icon}
              style={{
                height: 20,
                width: 20,
                tintColor: disabled
                  ? theme.colors.brand.primaryMuted
                  : theme.colors.brand.secondary,
              }}
            />
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default PrimaryButton;

import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { utils } from "../../utils";
import { AuthLayout, AuthContext } from "../";
import { FONTS, SIZES, COLORS, icons } from "../../../constants";
import {
  FormInput,
  CustomSwitch,
  TextButton,
  PrimaryButton,
} from "../../components";
import { svg } from "../../../constants";
import { theme } from "../../infrastructure/theme";

const SignUp = () => {
  return (
    <AuthLayout
      banner={svg.signup}
      bannerContainerStyle={{
        width: SIZES.width * 0.5,
        height: SIZES.width * 0.4,
      }}
      title={"Register"}
      subTitle={"Hello there! You're just few steps behind."}
    ></AuthLayout>
  );
};
export default SignUp;

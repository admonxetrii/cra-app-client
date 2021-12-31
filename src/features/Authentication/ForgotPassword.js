import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { AuthLayout } from "..";
import { FONTS, SIZES, COLORS, icons, svg } from "../../../constants";
import { FormInput, PrimaryButton } from "../../components";
import { utils } from "../../utils";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  function isEmailCorrect() {
    return email != "" && emailError == "";
  }

  return (
    <AuthLayout
      banner={svg.forgotPassword}
      bannerContainerStyle={{
        width: SIZES.width * 0.6,
        height: SIZES.width * 0.6,
      }}
      imageContainerStyle={{
        width: SIZES.width * 0.6,
        height: SIZES.width * 0.6,
      }}
      title={"Recover your account"}
      subTitle={
        "Please enter your registered email so that we can send you a new password."
      }
      titleContainerStyle={{
        marginTop: SIZES.padding,
      }}
    >
      {/* Form Input  */}
      <FormInput
        label={"Email"}
        onChange={(text) => {
          // validate email
          utils.validateEmail(text, setEmailError);
          setEmail(text);
        }}
        containerStyle={{
          marginTop: SIZES.radius,
        }}
        errorMsg={emailError}
        placeholder={"Enter your email here..."}
        appendComponent={
          <View
            style={{
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
              height: 55,
              width: 55,
              right: 38,
            }}
          >
            <Image
              source={
                email == "" || (email != "" && emailError == "")
                  ? email != "" && icons.check
                  : icons.wrong
              }
              style={{
                height: 20,
                resizeMode: "contain",
                tintColor:
                  email == ""
                    ? COLORS.gray
                    : email != "" && emailError == ""
                    ? COLORS.green
                    : COLORS.red,
              }}
            />
          </View>
        }
        icon={icons.email}
      />

      {/* Text Button  */}
      <PrimaryButton
        icon={icons.password}
        disabled={isEmailCorrect() ? false : true}
        buttonContainerStyle={{
          height: 55,
          width: "100%",
          borderRadius: 50,
          marginTop: SIZES.radius * 3,
        }}
        label={"RESET PASSWORD"}
        labelStyle={{ color: "white", ...FONTS.h2 }}
        onPress={() => navigation.goBack()}
      />
    </AuthLayout>
  );
};
export default ForgotPassword;

import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
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
import { useDispatch, useSelector } from "react-redux";
import { signupReq } from "../../store/auth/authAction";

const SignUp = ({ navigation }) => {
  const [username, setUsername] = React.useState("");
  const [usernameError, setUsernameError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [phoneError, setPhoneError] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [confirmPasswordError, setConfirmPasswordError] = React.useState("");
  const [showPass, setShowPass] = React.useState(false);
  const [showConfirmPass, setShowConfirmPass] = React.useState(false);
  const [saveMe, setSaveMe] = React.useState(false);
  const [checked, setChecked] = React.useState("male");

  const dispatch = useDispatch();

  function isRegisterEnable() {
    return (
      username != "" &&
      usernameError == "" &&
      email != "" &&
      emailError == "" &&
      password != "" &&
      confirmPassword != "" &&
      confirmPasswordError == "" &&
      phone != "" &&
      phoneError == ""
    );
  }

  const handleSignup = () => {
    const signupData = {
      email,
      username,
      phone_number: phone,
      password,
      confirm_password: confirmPassword,
      gender: checked,
    };
    dispatch(signupReq(signupData));
  };

  const signup = useSelector((state) => state.auth.signup);

  return (
    <AuthLayout
      banner={svg.signup}
      bannerContainerStyle={{
        width: SIZES.width * 0.6,
        height: SIZES.width * 0.6,
        height: 50,
      }}
      imageContainerStyle={{
        width: SIZES.width * 0.4,
        height: SIZES.width * 0.3,
      }}
      title={"Register"}
      subTitle={"Hello there! You're just few steps behind."}
    >
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 1,
        }}
      >
        {/* Form Input  */}
        <FormInput
          label={"Username"}
          onChange={(text) => {
            // validate username
            utils.validateUsername(text, setUsernameError);
            setUsername(text);
          }}
          errorMsg={usernameError}
          placeholder={"Enter your username here..."}
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
                  username == "" || (username != "" && usernameError == "")
                    ? username != "" && icons.check
                    : icons.wrong
                }
                style={{
                  height: 20,
                  resizeMode: "contain",
                  tintColor:
                    username == ""
                      ? COLORS.gray
                      : username != "" && usernameError == ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
          icon={icons.user}
        />
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
        <FormInput
          label={"Phone number"}
          onChange={(text) => {
            // validate phone
            utils.validatePhone(text, setPhoneError);
            setPhone(text);
          }}
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          errorMsg={phoneError}
          placeholder={"Enter your phone number here..."}
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
                  phone == "" || (phone != "" && phoneError == "")
                    ? phone != "" && icons.check
                    : icons.wrong
                }
                style={{
                  height: 20,
                  resizeMode: "contain",
                  tintColor:
                    phone == ""
                      ? COLORS.gray
                      : phone != "" && phoneError == ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
          icon={icons.mobile}
        />
        <FormInput
          label={"Password"}
          secureTextEntry={!showPass}
          autoCompleteType="password"
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          onChange={(text) => {
            setPassword(text);
            //validate password
          }}
          placeholder={"Password goes here..."}
          appendComponent={
            <TouchableOpacity
              style={{
                position: "absolute",
                alignItems: "center",
                justifyContent: "center",
                height: 55,
                width: 55,
                right: 38,
              }}
              onPress={() => setShowPass(!showPass)}
            >
              <Image
                source={showPass ? icons.eyeClosed : icons.eyeOpen}
                style={{
                  height: 20,
                  resizeMode: "contain",
                  tintColor: COLORS.gray,
                }}
              />
            </TouchableOpacity>
          }
          icon={icons.password}
        />
        <FormInput
          label={"Confirm Password"}
          secureTextEntry={!showConfirmPass}
          autoCompleteType="password"
          containerStyle={{
            marginTop: SIZES.radius,
            marginBottom: SIZES.radius,
          }}
          onChange={(text) => {
            //validate confirm password
            utils.validateConfirmPassword(
              text,
              password,
              setConfirmPasswordError
            );
            setConfirmPassword(text);
          }}
          errorMsg={confirmPasswordError}
          placeholder={"Confirm your password here..."}
          appendComponent={
            <TouchableOpacity
              style={{
                position: "absolute",
                alignItems: "center",
                justifyContent: "center",
                height: 55,
                width: 55,
                right: 38,
              }}
              onPress={() => setShowConfirmPass(!showConfirmPass)}
            >
              <Image
                source={showConfirmPass ? icons.eyeClosed : icons.eyeOpen}
                style={{
                  height: 20,
                  resizeMode: "contain",
                  tintColor: COLORS.gray,
                }}
              />
            </TouchableOpacity>
          }
          icon={icons.password}
        />
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.gray,
          }}
        >
          Gender
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <RadioButton
            value="male"
            color={theme.colors.brand.primary}
            label="First item"
            status={checked === "male" ? "checked" : "unchecked"}
            onPress={() => setChecked("male")}
          />
          <Text
            style={{
              marginRight: "25%",
              ...FONTS.body4,
              color: COLORS.darkGray,
            }}
            onPress={() => setChecked("male")}
          >
            Male
          </Text>
          <RadioButton
            value="female"
            color={theme.colors.brand.primary}
            status={checked === "female" ? "checked" : "unchecked"}
            onPress={() => setChecked("female")}
          />
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.darkGray,
            }}
            onPress={() => setChecked("female")}
          >
            Female
          </Text>
        </View>
        <PrimaryButton
          icon={icons.profile}
          disabled={isRegisterEnable() && signup?.buttonEnabled ? false : true}
          onPress={handleSignup}
          buttonContainerStyle={{
            height: 55,
            width: "100%",
            borderRadius: 50,
            marginTop: SIZES.radius,
          }}
          label={signup?.loadingButtonContent}
          labelStyle={{ color: "white", ...FONTS.h2 }}
        />

        {/* Facebook & Google  */}

        {/* Forgot Password and Sign Up page navigations  */}
        <View
          style={{
            bottom: 0,
            justifyContent: "center",
            alignSelf: "center",
            paddingHorizontal: SIZES.padding,
            marginVertical: SIZES.padding,
          }}
        >
          <View
            style={{
              marginBottom: 0,
              flexDirection: "row",
            }}
          >
            <Text>Already registered? </Text>
            <TextButton
              buttonContainerStyle={{
                backgroundColor: null,
              }}
              label={"Login here."}
              labelStyle={{
                color: theme.colors.brand.primary,
              }}
              onPress={() => navigation.navigate("SignIn")}
            />
          </View>
        </View>
      </View>
    </AuthLayout>
  );
};
export default SignUp;

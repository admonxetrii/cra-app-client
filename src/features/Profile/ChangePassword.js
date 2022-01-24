import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { SIZES, FONTS, icons, svg, COLORS } from "../../../constants";
import { Header, AuthLayout } from "..";
import { IconButton, FormInput, PrimaryButton } from "../../components";
import { theme } from "../../infrastructure/theme";
import { goBack } from "../../store/navigation/navigationAction";
import { changePasswordReq } from "../../store/auth/authAction";
import { useDispatch, useSelector } from "react-redux";
import { utils } from "../../utils";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [confirmPasswordError, setConfirmPasswordError] = React.useState("");
  const [showCurrentPass, setShowCurrentPass] = React.useState(false);
  const [showPass, setShowPass] = React.useState(false);
  const [showConfirmPass, setShowConfirmPass] = React.useState(false);

  function isButtonEnable() {
    return (
      currentPassword != "" &&
      password != "" &&
      confirmPassword != "" &&
      confirmPasswordError == ""
    );
  }

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.auth?.user);
  const username = userData.username;

  const handleChangePassword = () => {
    const changePasswordData = {
      currentPassword,
      password,
      confirmPassword,
      username,
    };
    dispatch(changePasswordReq(changePasswordData));
  };

  function renderHeader() {
    return (
      <Header
        title="CHANGE PASSWORD"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: theme.colors.brand.primary,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: theme.colors.brand.primary,
            }}
            onPress={() => dispatch(goBack())}
          />
        }
      />
    );
  }

  return (
    <>
      <View
        style={{
          backgroundColor: COLORS.white,
        }}
      >
        {renderHeader()}
      </View>
      <AuthLayout
        banner={svg.changePass}
        bannerContainerStyle={{
          width: SIZES.width * 0.3,
          height: SIZES.width * 0.3,
        }}
        imageContainerStyle={{
          width: SIZES.width * 0.3,
          height: SIZES.width * 0.3,
        }}
        title={"Change Your Passowrd"}
        subTitle={"You can change your authentication password from here."}
        titleContainerStyle={{
          marginTop: SIZES.padding,
        }}
      >
        {/* Form Input  */}
        <FormInput
          label={"Current Password"}
          secureTextEntry={!showCurrentPass}
          autoCompleteType="password"
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          onChange={(text) => {
            setCurrentPassword(text);
          }}
          placeholder={"Your current password."}
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
              onPress={() => setShowCurrentPass(!showCurrentPass)}
            >
              <Image
                source={showCurrentPass ? icons.eyeClosed : icons.eyeOpen}
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

        {/* Text Button  */}
        <PrimaryButton
          icon={icons.password}
          disabled={isButtonEnable() ? false : true}
          buttonContainerStyle={{
            height: 55,
            width: "100%",
            borderRadius: 50,
            marginTop: SIZES.radius * 2,
          }}
          label={"CHANGE PASSWORD"}
          labelStyle={{ color: "white", ...FONTS.h2 }}
          onPress={() => handleChangePassword()}
        />
      </AuthLayout>
    </>
  );
};

export default ChangePassword;

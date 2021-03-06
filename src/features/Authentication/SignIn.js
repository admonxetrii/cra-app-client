import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { utils } from "../../utils";
import { AuthLayout, AuthContext } from "../";
import { FONTS, SIZES, COLORS, icons } from "../../../constants";
import { useSelector } from "react-redux";
import {
  FormInput,
  CustomSwitch,
  TextButton,
  PrimaryButton,
} from "../../components";
import { svg } from "../../../constants";
import { theme } from "../../infrastructure/theme";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../store/auth/authAction";

const SignIn = ({ navigation }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [usernameOrEmailError, setUsernameOrEmailError] = React.useState("");
  const [showPass, setShowPass] = React.useState(false);
  const [saveMe, setSaveMe] = React.useState(false);

  function isLoginEnable() {
    return username != "" && password != "" && usernameOrEmailError == "";
  }

  const login = useSelector((state) => state.auth.login);

  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(
      loginRequest({
        username,
        password,
      })
    );
  };

  return (
    <AuthLayout
      banner={svg.login}
      bannerContainerStyle={{
        width: SIZES.width * 0.6,
        height: SIZES.width * 0.6,
      }}
      imageContainerStyle={{
        width: SIZES.width * 0.6,
        height: SIZES.width * 0.6,
      }}
      title={"Login"}
      subTitle={"Welcome back! You've been missed."}
    >
      <>
        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding * 2,
          }}
        >
          {/* Form Input  */}
          <FormInput
            label={"Username"}
            onChange={(text) => {
              // validate email
              utils.validateUsernameOrEmail(
                text.trim(),
                setUsernameOrEmailError
              );
              setUsername(text.trim());
            }}
            errorMsg={usernameOrEmailError}
            placeholder={"Enter your username or email here..."}
            appendComponent={
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <Image
                  source={
                    username == "" ||
                    (username != "" && usernameOrEmailError == "")
                      ? icons.check
                      : icons.wrong
                  }
                  style={{
                    right: 30,
                    height: 20,
                    width: 20,
                    tintColor:
                      username == ""
                        ? COLORS.gray
                        : username != "" && usernameOrEmailError == ""
                        ? COLORS.green
                        : COLORS.red,
                  }}
                />
              </View>
            }
            icon={icons.email}
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
            }}
            placeholder={"Password goes here..."}
            appendComponent={
              <TouchableOpacity
                style={{
                  right: 30,
                  width: 40,
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
                onPress={() => setShowPass(!showPass)}
              >
                <Image
                  source={showPass ? icons.eyeClosed : icons.eyeOpen}
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.gray,
                  }}
                />
              </TouchableOpacity>
            }
            icon={icons.password}
          />
          {/* Save Me  */}
          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.radius,
              justifyContent: "space-between",
            }}
          >
            <CustomSwitch
              title={"Remember Me"}
              value={saveMe}
              onChange={(value) => setSaveMe(value)}
            />
          </View>

          <PrimaryButton
            icon={icons.login}
            disabled={isLoginEnable() && login?.buttonEnabled ? false : true}
            buttonContainerStyle={{
              height: 55,
              width: "100%",
              borderRadius: 50,
              marginTop: SIZES.radius,
            }}
            loader={login?.loading}
            label={login?.loadingButtonContent}
            labelStyle={{ color: "white", ...FONTS.h2 }}
            onPress={() => {
              loginHandler(username, password);
            }}
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
            <TextButton
              buttonContainerStyle={{
                padding: 20,
                backgroundColor: null,
              }}
              label={"Forgot Password?"}
              labelStyle={{ color: theme.colors.brand.primary }}
              onPress={() => navigation.navigate("ForgotPassword")}
            />
            <View
              style={{
                marginBottom: 0,
                flexDirection: "row",
              }}
            >
              <Text>Don't have an account? </Text>
              <TextButton
                buttonContainerStyle={{
                  backgroundColor: null,
                }}
                label={"Sign Up"}
                labelStyle={{
                  color: theme.colors.brand.primary,
                }}
                onPress={() => navigation.navigate("SignUp")}
              />
            </View>
          </View>
        </View>
      </>
    </AuthLayout>
  );
};

export default SignIn;

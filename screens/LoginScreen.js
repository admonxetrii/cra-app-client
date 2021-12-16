import React, { useState } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import AppButton from "../src/components/AppButton";
import AppTextInput from "../src/components/AppTextInput";
import Screen from "../src/components/Screen";

import colors from "../src/config/colors";
function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/login.jpg")}
      />
      <Text style={styles.text1}>LOGIN</Text>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboard="email-address"
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        textContentType="emailAddress" //ios
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry={true}
        textContentType="password" //ios
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
      <Text style={styles.text2}>Forget Password</Text>
      <Text style={styles.text3}>Don't have an account?</Text>
    </Screen>
  );
}
const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
    width: 317,
    height: 190,
    marginTop: 80,
    marginBottom: 20,
  },
  text1: {
    width: 59,
    height: 25,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 18,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 18,
    color: "#000000",
    marginHorizontal: 40,
  },
  text2: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 14,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 14,
    letterSpacing: 1,
    textAlign: "center",
    color: "#FF5353",
    marginTop: 40,
  },
  text3: {
    paddingTop: 30,
    alignSelf: "center",
  },
  container: {
    padding: 10,
  },
});
export default LoginScreen;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Button, StyleSheet, Text, Image, View } from "react-native";

import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onDone={() => navigation.navigate("Start")}
      onSkip={() => navigation.replace("Start")}
      pages={[
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/images/aaa.jpg")} />,
          title: "Onboarding1",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/images/bbb.jpg")} />,
          title: "Onboarding2",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/images/ccc.jpg")} />,
          title: "Onboarding3",
          subtitle: "Done with React Native Onboarding Swiper",
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

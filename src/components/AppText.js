import { Platform } from "expo-modules-core";
import React, { Children } from "react";
import { Text, StyleSheet } from "react-native";

function AppText({ Children }) {
  return <Text style={styles.text}>{Children}</Text>;
}
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
export default AppText;

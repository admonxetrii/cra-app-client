import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

//import AppButton from "../src/components/AppButton";
function StartScreen() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.backImage}>
          <ImageBackground
            source={require("../assets/images/eat_together.png")}
            style={styles.backgroundImage}
          ></ImageBackground>
        </View>

        <View style={styles.text1View}>
          <Text style={styles.text1}>Let's get started</Text>
          <Text style={styles.text2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.button1}>Register User</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.button2}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default StartScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    flex: 1,
  },
  backImage: {
    flex: 0.5,
  },
  backgroundImage: {
    //    height:100,
    //    width:100,
    flex: 1,
    marginTop: 50,
  },
  text1View: {
    alignItems: "center",
    marginTop: 20,
  },
  text1: {
    width: 140,
    height: 25,
    fontSize: 18,
    fontWeight: "600",
    fontStyle: "normal",
    // lineHeight: 18,
    color: "#000000",
  },
  // text2View:{
  //     alignItems:'center',
  //     marginTop:20,

  // },
  text2: {
    paddingTop: 25,
    paddingHorizontal: 40,
  },
  button: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },

  button1: {
    color: "white",
    paddingHorizontal: 70,
    paddingVertical: 15,
    backgroundColor: "red",
    borderRadius: 50,
    marginBottom: 20,
  },

  button2: {
    marginTop: 10,
    color: "white",
    paddingHorizontal: 100,
    paddingVertical: 15,
    backgroundColor: "red",
    borderRadius: 50,
  },
});

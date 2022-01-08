import React from "react";
import { View, Text, Platform } from "react-native";
import { PrimaryButton } from "..";
import { FONTS, SIZES, COLORS, icons } from "../../../constants";
import { LinearGradient } from "expo-linear-gradient";

const FooterTotal = ({ subTotal, grandTotal, onPress }) => {
  return (
    <View>
      {/* Shadow  */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[COLORS.transparent, COLORS.lightGray1]}
        style={{
          position: "absolute",
          top: -15,
          left: 0,
          right: 0,
          height: Platform.OS === "ios" ? 200 : 50,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      />
      {/* Order Detail  */}
      <View
        style={{
          padding: SIZES.padding,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          backgroundColor: COLORS.white,
        }}
      >
        {/* Total  */}
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={{ flex: 1, ...FONTS.body3 }}>Total</Text>
          <Text style={{ ...FONTS.h3 }}>Rs. {subTotal.toFixed(2)}/-</Text>
        </View>
        {/* Service Charge  */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.base,
            marginBottom: SIZES.padding,
          }}
        >
          <Text style={{ flex: 1, ...FONTS.body3 }}>Service Charge (10%)</Text>
          <Text style={{ ...FONTS.h3 }}>
            Rs. {(subTotal * 0.1).toFixed(2)}/-
          </Text>
        </View>

        {/* Line  */}
        <View
          style={{
            borderBottomColor: COLORS.lightGray1,
            borderBottomWidth: 1,
          }}
        />

        {/* Grand total  */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding,
          }}
        >
          <Text style={{ flex: 1, ...FONTS.body3 }}>Grand Total</Text>
          <Text style={{ ...FONTS.h3 }}>Rs. {grandTotal.toFixed(2)}/-</Text>
        </View>

        {/* Order button  */}
        <PrimaryButton
          icon={icons.cart}
          buttonContainerStyle={{
            height: 55,
            width: "100%",
            borderRadius: 50,
            marginTop: SIZES.radius,
          }}
          label={"Place Order"}
          labelStyle={{ color: "white", ...FONTS.h2 }}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default FooterTotal;

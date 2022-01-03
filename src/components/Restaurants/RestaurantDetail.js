import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FONTS, COLORS, SIZES, icons } from "../../../constants";

import { Header } from "../../features";

const RestaurantDetail = () => {
  function renderHeader() {
    return (
      <Header
        title="DETAILS"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header  */}
      {renderHeader()}

      {/* Body  */}

      {/* Footer  */}
    </View>
  );
};

export default RestaurantDetail;

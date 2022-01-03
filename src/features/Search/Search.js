import React from "react";
import { View, Image, TouchableOpacity, TextInput } from "react-native";
import Animated from "react-native-reanimated";
import { COLORS, FONTS, SIZES, icons } from "../../../constants";

import { FilterModal } from "../../components";

const Search = () => {
  const [showFilterModal, setShowFilterModal] = React.useState(false);

  function renderSearch() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 40,
          alignItems: "center",
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.base,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}
      >
        {/* Icon  */}
        <Image
          source={icons.search}
          style={{
            height: 20,
            width: 20,
            tintColor: "black",
          }}
        />

        {/* Text Input  */}
        <TextInput
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            ...FONTS.body3,
          }}
          placeholder="Search Restaurants..."
        />

        {/* filter  */}
        <TouchableOpacity onPress={() => setShowFilterModal(true)}>
          <Image
            source={icons.filter}
            style={{
              height: 20,
              width: 20,
              tintColor: "black",
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* Search  */}
      {renderSearch()}

      {/* Filter  */}
      {showFilterModal && (
        <FilterModal
          isVisible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
        />
      )}
    </View>
  );
};

export default Search;

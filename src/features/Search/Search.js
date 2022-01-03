import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  FlatList,
} from "react-native";
import { Card } from "react-native-paper";
import Animated from "react-native-reanimated";
import { COLORS, FONTS, SIZES, icons } from "../../../constants";
import { theme } from "../../infrastructure/theme";
import { Restaurant } from "../../API/RestaurantAPI/restaurant.services";

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

      {/* Restaurant Card  */}
      <FlatList
        data={[
          {
            id: 1,
            name: "Tropical Rest",
            icon: null,
            image:
              "http://192.168.0.110:8000/media/uploads/restaurants/astrou.png",
            address: "Halchowk, Kathmandu",
            isOpenNow: true,
            rating: 4.0,
            isClosedTemporarily: false,
            addedDate: "2022-01-03T15:41:13.308559Z",
            modifiedDate: "2022-01-03T15:41:13.308559Z",
            modifiedBy: 1,
          },
          {
            id: 2,
            name: "Momento",
            icon: null,
            image:
              "http://192.168.0.110:8000/media/uploads/restaurants/f15b8adbccd5472bbbbc98e6111ba96d-0001.jpg",
            address: "Gwarko",
            isOpenNow: true,
            rating: 3.0,
            isClosedTemporarily: true,
            addedDate: "2022-01-03T15:42:10.215569Z",
            modifiedDate: "2022-01-03T15:42:10.215569Z",
            modifiedBy: 1,
          },
        ]}
        showsVerticalScrollIndicator={false}
        style={{}}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              marginTop: SIZES.padding,
              marginHorizontal: SIZES.padding,
              marginVertical: SIZES.base,
              paddingHorizontal: SIZES.radius,
              shadowColor: "#000",
              shadowOpacity: 0.5,
              shadowRadius: 5,
              elevation: 10,
            }}
          >
            {/* <TouchableOpacity> */}
            <Card key={item.id}>
              <Card.Cover
                source={{ uri: item.image }}
                style={{
                  padding: 16,
                  backgroundColor: theme.colors.bg.primary,
                }}
              />
              <View
                style={{
                  padding: 16,
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.fonts.body,
                    fontSize: theme.fontSizes.body,
                    color: theme.colors.text.primary,
                  }}
                >
                  {item.name}
                </Text>
                <View>
                  <Text
                    style={{
                      fontSize: theme.fontSizes.caption,
                      color: theme.colors.text.secondary,
                    }}
                  >
                    {item.address}
                  </Text>
                </View>
              </View>
            </Card>
            {/* </TouchableOpacity> */}
          </View>
        )}
      />
    </View>
  );
};

export default Search;

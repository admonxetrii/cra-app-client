import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Card } from "react-native-paper";
import Animated from "react-native-reanimated";
import { COLORS, FONTS, SIZES, icons } from "../../../constants";
import { theme } from "../../infrastructure/theme";
import { useDispatch, useSelector } from "react-redux";

import { FilterModal, HorizontalFoodCard } from "../../components";
import {
  fetchAllRestaurantsReq,
  fetchRestaurantsBySearchReq,
} from "../../store/restaurant/restaurantAction";
import { navigateWithProps } from "../../store/navigation/navigationAction";

const Search = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAllRestaurantsReq());
  }, []);

  const restaurants = useSelector((state) => state.restaurant?.restaurants);
  const restaurantsLoading = useSelector(
    (state) => state.restaurant.fetchAllRestaurant?.loading
  );

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
          onChangeText={(text) => {
            dispatch(fetchRestaurantsBySearchReq(text));
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

  if (restaurantsLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#ff5353" />
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

      {restaurants.length != 0 ? (
        <View>
          {/* Restaurant Card  */}
          <FlatList
            data={restaurants}
            showsVerticalScrollIndicator={false}
            style={{}}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <View
                style={{
                  marginTop: index == 0 ? SIZES.padding : 18,
                  marginBottom: index == restaurants.length - 1 ? 80 : 0,
                  paddingHorizontal: SIZES.padding,
                }}
              >
                {/* <TouchableOpacity> */}
                <HorizontalFoodCard
                  item={item}
                  contentContainerStyle={{
                    shadowColor: "#000",
                    shadowOpacity: 0.5,
                    shadowRadius: 5,
                    elevation: 10,
                  }}
                  imageStyle={{
                    height: 150,
                    width: 150,
                  }}
                  onPress={() => {
                    dispatch(
                      navigateWithProps({
                        path: "RestaurantDetail",
                        query: {
                          id: item.id,
                        },
                      })
                    );
                  }}
                />
                {/* </TouchableOpacity> */}
              </View>
            )}
          />
        </View>
      ) : (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30%",
          }}
        >
          <Image
            source={icons.cross}
            style={{
              tintColor: theme.colors.brand.primary,
            }}
          />
          <Text style={{ ...FONTS.h2, color: theme.colors.brand.primary }}>
            No Restaurant found!!
          </Text>
        </View>
      )}
    </View>
  );
};

export default Search;

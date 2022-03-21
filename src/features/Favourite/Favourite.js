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

import { HorizontalFoodCard } from "../../components";
import { fetchFavouriteRestaurantsReq } from "../../store/restaurant/restaurantAction";
import { navigateWithProps } from "../../store/navigation/navigationAction";

const Favourite = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchFavouriteRestaurantsReq());
  }, []);

  const restaurants = useSelector(
    (state) => state.restaurant?.favouriteRestaurant
  );
  const restaurantsLoading = useSelector(
    (state) => state.restaurant.fetchAllRestaurant?.loading
  );

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
      <Text
        style={{
          ...FONTS.h2,
          paddingHorizontal: SIZES.padding,
          marginVertical: 18,
        }}
      >
        Favourites
      </Text>
      {/* Restaurant Card  */}
      {restaurants.length != 0 ? (
        <FlatList
          data={restaurants}
          showsVerticalScrollIndicator={false}
          style={{}}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View
              style={{
                marginTop: index == 0 ? SIZES.padding : 18,
                marginBottom:
                  index == restaurants.length - 1 ? SIZES.padding : 0,
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
            No Favourites found!!
          </Text>
        </View>
      )}
    </View>
  );
};

export default Favourite;

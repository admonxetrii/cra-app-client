import React from "react";
import { View, Image, Text, Alert, ActivityIndicator } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { FONTS, SIZES, icons } from "../../../constants";
import { theme } from "../../infrastructure/theme";
import { useDispatch, useSelector } from "react-redux";

import { HorizontalFoodCard, IconButton } from "../../components";
import {
  fetchFavouriteRestaurantsReq,
  removeRestaurantFromFavouriteReq,
} from "../../store/restaurant/restaurantAction";
import { navigateWithProps } from "../../store/navigation/navigationAction";

const Favourite = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user?.username);
  React.useEffect((user) => {
    dispatch(fetchFavouriteRestaurantsReq(user));
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
        <RenderReservationList
          favourites={restaurants}
          dispatch={dispatch}
          user={user}
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

function RenderReservationList({ favourites, dispatch, user }) {
  return (
    <SwipeListView
      data={favourites}
      keyExtractor={(item) => `${item.id}`}
      contentContainerStyle={{
        paddingHorizontal: SIZES.padding,
        paddingBottom: SIZES.padding * 2,
      }}
      showsVerticalScrollIndicator={false}
      rightOpenValue={-75}
      renderItem={(data, rowMap) => {
        return (
          <View
            style={{
              marginTop: data.index == 0 ? SIZES.padding : 18,
              marginBottom:
                data.index == favourites.length - 1 ? SIZES.padding : 0,
            }}
          >
            {/* <TouchableOpacity> */}
            <HorizontalFoodCard
              item={data.item}
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
                      id: data.item.id,
                    },
                  })
                );
              }}
            />
            {/* </TouchableOpacity> */}
          </View>
        );
      }}
      renderHiddenItem={(data, rowMap) => (
        <View
          style={{
            flexGrow: 1,
          }}
        >
          <IconButton
            containerStyle={{
              flex: 1,
              justifyContent: "flex-end",
              backgroundColor: theme.colors.brand.primary,
              flexDirection: "row",
              alignItems: "center",
              marginTop: data.index == 0 ? SIZES.padding : 18,
              marginBottom:
                data.index == favourites.length - 1 ? SIZES.padding : 0,
              paddingHorizontal: SIZES.radius,
              borderRadius: SIZES.radius,
            }}
            icon={icons.wrong}
            iconStyle={{
              marginRight: 10,
            }}
            onPress={() => {
              Alert.alert(
                "Remove from Favourite?",
                "Are you sure you want to remove this restaurant from your favourites?",
                [
                  {
                    text: "Cancel",
                    onPress: () => {
                      console.log("Cancel Pressed");
                    },
                    style: "cancel",
                  },
                  {
                    text: "OK",
                    onPress: () => {
                      dispatch(
                        removeRestaurantFromFavouriteReq({
                          restaurant: data.item.id,
                          username: user,
                        })
                      );
                      dispatch(fetchFavouriteRestaurantsReq(user));
                    },
                  },
                ]
              );
            }}
          />
        </View>
      )}
    />
  );
}

export default Favourite;

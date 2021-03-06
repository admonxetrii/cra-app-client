import React from "react";
import { View, Image, Text } from "react-native";
import { MenuButton } from "../../components";
import { SIZES, COLORS, icons, FONTS } from "../../../constants";
import { theme } from "../../infrastructure/theme";
import { useDispatch, useSelector } from "react-redux";
import {
  navigate,
  navigateWithProps,
} from "../../store/navigation/navigationAction";
import {
  addRestaurantToFavouriteReq,
  removeRestaurantFromFavouriteReq,
} from "../../store/restaurant/restaurantAction";

const RestaurantComponent = () => {
  const dispatch = useDispatch();

  const RestaurantDetail = useSelector(
    (state) => state.restaurant?.restaurantById
  );

  const favouriteState = useSelector(
    (state) => state.restaurant?.isFavourite[0].is_favourite
  );

  const [isFavourite, setIsFavourite] = React.useState(favouriteState);

  const user = useSelector((state) => state.auth.user?.username);

  return (
    <View
      style={{
        height: SIZES.height * 0.45,
        marginTop: SIZES.base,
        marginBottom: SIZES.padding,
        paddingHorizontal: SIZES.padding,
      }}
    >
      {/* Cover Image */}
      <Image
        source={{ uri: RestaurantDetail?.image }}
        style={{
          height: 250,
          borderRadius: 15,
        }}
      />

      {/* card In between  */}
      <View>
        {/* Card Detail  */}
        <View
          style={{
            width: "80%",
            resizeMode: "contain",
            backgroundColor: COLORS.lightGray2,
            position: "absolute",
            top: -75,
            borderRadius: 15,
            alignSelf: "center",
          }}
        >
          {/* Restaurant Title Header  */}
          <View
            style={{
              paddingHorizontal: SIZES.padding,
              paddingTop: SIZES.radius,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {/* Title  */}
            <Text style={{ ...FONTS.h2 }}>{RestaurantDetail?.name}</Text>

            {/* Ratings  */}
            <View
              style={{
                backgroundColor: theme.colors.brand.secondaryMuted,
                height: 30,
                width: 50,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Text style={{ ...FONTS.h3, color: theme.colors.brand.primary }}>
                {RestaurantDetail?.rating}
              </Text>
              <Image
                source={icons.star}
                style={{
                  height: 15,
                  width: 15,
                  tintColor: theme.colors.brand.primary,
                  marginLeft: 5,
                }}
              />
            </View>
          </View>
          {/* Address  */}

          <Text
            style={{
              paddingHorizontal: SIZES.padding,
              ...FONTS.body5,
            }}
          >
            {RestaurantDetail?.address}
          </Text>

          {/* Menus  */}
          <View
            style={{
              // position: "absolute",
              bottom: 0,
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 15,
            }}
          >
            {/* Book a Table  */}
            <MenuButton
              containerStyle={{ height: 45, width: 45 }}
              label="Book Table"
              labelStyle={{ color: theme.colors.brand.primary }}
              icon={icons.table}
              iconStyle={{ height: 28, resizeMode: "contain" }}
              onPress={() => dispatch(navigate("ReserveTableStage"))}
            />
            {/* Scan a Table  */}
            {/* <MenuButton
              containerStyle={{ height: 45, width: 45 }}
              label="Scan a table"
              labelStyle={{ color: theme.colors.brand.primary }}
              icon={icons.qr}
              iconStyle={{ height: 28, resizeMode: "contain" }}
              onPress={() => {
                dispatch(
                  navigateWithProps({
                    path: "ReserveTableStage",
                    query: {
                      restaurant: RestaurantDetail,
                    },
                  })
                );
              }}
            /> */}

            <MenuButton
              containerStyle={{ height: 45, width: 45 }}
              label={isFavourite ? "Remove Favourite" : "Add Favourite"}
              labelStyle={{ color: theme.colors.brand.primary }}
              icon={isFavourite ? icons.love : icons.favourite}
              iconStyle={{ height: 28, resizeMode: "contain" }}
              onPress={() => {
                if (isFavourite) {
                  dispatch(
                    removeRestaurantFromFavouriteReq({
                      restaurant: RestaurantDetail?.id,
                      username: user,
                    })
                  );
                  setIsFavourite(!isFavourite);
                } else {
                  dispatch(
                    addRestaurantToFavouriteReq({
                      restaurant: RestaurantDetail.id,
                      username: user,
                    })
                  );
                  setIsFavourite(!isFavourite);
                }
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default RestaurantComponent;

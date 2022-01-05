import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { FONTS, COLORS, SIZES, icons } from "../../../constants";
import { theme } from "../../infrastructure/theme";
import { Header } from "../../features";
import { IconButton, CartQuantityButton } from "..";
import { useDispatch } from "react-redux";
import { goBack, navigate } from "../../store/navigation/navigationAction";
import dummyData from "../../../constants/dummyData";
import { ScrollView } from "react-native-gesture-handler";

const RestaurantDetail = () => {
  const [restaurant, setRestaurant] = React.useState(dummyData.tropicalRest);

  const dispatch = useDispatch();

  function renderHeader() {
    return (
      <Header
        title="DETAILS"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: theme.colors.brand.primary,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: theme.colors.brand.primary,
            }}
            onPress={() => dispatch(goBack())}
          />
        }
        rightComponent={<CartQuantityButton quantity={3} />}
      />
    );
  }

  function renderRestaurantDetail() {
    return (
      <View
        style={{
          marginTop: SIZES.base,
          marginBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Cover Image */}
        <Image
          source={{ uri: restaurant.image }}
          style={{
            height: 250,
            borderRadius: 15,
          }}
        />

        {/* card In between  */}
        <View
          style={{
            height: 1000,
          }}
        >
          {/* Card Detail  */}
          <View
            style={{
              height: 150,
              width: "80%",
              backgroundColor: COLORS.lightGray2,
              position: "absolute",
              top: -75,
              borderRadius: 15,
              paddingHorizontal: SIZES.padding,
              paddingVertical: SIZES.radius,
              alignSelf: "center",
            }}
          >
            {/* Restaurant Title Header  */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {/* Title  */}
              <Text style={{ ...FONTS.h2 }}>{restaurant.name}</Text>

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
                <Text
                  style={{ ...FONTS.h3, color: theme.colors.brand.primary }}
                >
                  {restaurant.rating}
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
            <Text style={{ ...FONTS.body5 }}>{restaurant.address}</Text>

            {/* Locations  */}
          </View>
        </View>
      </View>
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
      <ScrollView>
        {/* Restaurant Detail */}
        {renderRestaurantDetail()}
        {/* Menu list */}
      </ScrollView>
      {/* Footer  */}
    </View>
  );
};

export default RestaurantDetail;

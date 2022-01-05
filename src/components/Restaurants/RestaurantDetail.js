import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { FONTS, COLORS, SIZES, icons } from "../../../constants";
import { theme } from "../../infrastructure/theme";
import { Header } from "../../features";
import { IconButton, CartQuantityButton, MenuButton } from "..";
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
          height: SIZES.height * 0.45,
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
        <View>
          {/* Card Detail  */}
          <View
            style={{
              height: 150,
              width: "80%",
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

            <Text
              style={{
                paddingHorizontal: SIZES.padding,
                ...FONTS.body5,
              }}
            >
              {restaurant.address}
            </Text>

            {/* Menus  */}
            <View
              style={{
                position: "absolute",
                bottom: 0,
                flexDirection: "row",
              }}
            >
              {/* Book a Table  */}
              <MenuButton
                containerStyle={{ height: 45, width: 45 }}
                label="Book Table"
                labelStyle={{ color: theme.colors.brand.primary }}
                icon={icons.table}
                iconStyle={{ height: 28, resizeMode: "contain" }}
              />
              {/* Scan a Table  */}
              <MenuButton
                containerStyle={{ height: 45, width: 45 }}
                label="Scan a table"
                labelStyle={{ color: theme.colors.brand.primary }}
                icon={icons.qr}
                iconStyle={{ height: 28, resizeMode: "contain" }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }

  function renderMenu() {
    return <></>;
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
        {renderMenu()}
      </ScrollView>
      {/* Footer  */}
    </View>
  );
};

export default RestaurantDetail;

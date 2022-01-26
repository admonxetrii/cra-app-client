import React from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { FONTS, COLORS, SIZES, icons } from "../../../constants";
import { theme } from "../../infrastructure/theme";
import { Header } from "..";
import {
  IconButton,
  CartQuantityButton,
  MenuButton,
  StepperInput,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { goBack, navigate } from "../../store/navigation/navigationAction";
import dummyData from "../../../constants/dummyData";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect } from "react";
import {
  clearRestaurantById,
  fetchRestaurantByIdReq,
  fetchRestaurantMenusByRestaurantIdReq,
} from "../../store/restaurant/restaurantAction";

const RestaurantDetail = () => {
  const dispatch = useDispatch();

  const restaurantId = useSelector(
    (state) => state.navigationRef.navigationQuery?.id
  );

  const restaurantLoading = useSelector(
    (state) => state.restaurant.fetchRestaurantById?.loading
  );
  const restaurantMenuLoading = useSelector(
    (state) => state.restaurant.fetchRestaurantMenusByRestaurantId?.loading
  );

  useEffect(() => {
    if (restaurantId) {
      dispatch(fetchRestaurantByIdReq(restaurantId));
      dispatch(fetchRestaurantMenusByRestaurantIdReq(restaurantId));
    }
    return () => {
      dispatch(clearRestaurantById());
    };
  }, []);

  const RestaurantDetail = useSelector(
    (state) => state.restaurant?.restaurantById
  );

  const RestaurantMenuList = useSelector(
    (state) => state.restaurant?.restaurantMenusByRestaurantId
  );

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
        rightComponent={
          <CartQuantityButton onPress={() => dispatch(navigate("MyCart"))} />
        }
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
                <Text
                  style={{ ...FONTS.h3, color: theme.colors.brand.primary }}
                >
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
                onPress={() => dispatch(navigate("ScanTable"))}
              />
              <MenuButton
                containerStyle={{ height: 45, width: 45 }}
                label="Pay bills"
                labelStyle={{ color: theme.colors.brand.primary }}
                icon={icons.coupon}
                iconStyle={{ height: 28, resizeMode: "contain" }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }

  function renderMenu() {
    return (
      <>
        {RestaurantMenuList.map((item, index) => (
          <>
            <View
              key={`CATE-${item.id}`}
              style={{
                height: 55,
                justifyContent: "center",
                borderRadius: SIZES.radius,
                marginHorizontal: SIZES.padding,
                marginVertical: SIZES.radius,
              }}
            >
              <Text style={{ ...FONTS.h3 }}>{item.title}</Text>
              <View
                style={{
                  borderBottomColor: COLORS.lightGray1,
                  marginTop: 5,
                  borderBottomWidth: 1,
                }}
              />
            </View>
            {item.menus.map((listItem, index) => (
              <View
                key={`MENU-${listItem.id}`}
                style={{
                  backgroundColor: COLORS.lightGray2,
                  marginHorizontal: SIZES.padding,
                  marginVertical: SIZES.base,
                  borderRadius: SIZES.radius,
                  padding: SIZES.padding,
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text style={{ ...FONTS.body3 }}>{listItem.title}</Text>
                  <Text
                    style={{ ...FONTS.h4, color: theme.colors.brand.primary }}
                  >
                    Rs. {listItem.price}/-
                  </Text>
                </View>
                {/* <View
                  style={{
                    position: "absolute",
                    alignSelf: "center",
                    right: SIZES.base / 1.5,
                  }}
                >
                  <StepperInput value={0} />
                </View> */}
              </View>
            ))}
          </>
        ))}
      </>
    );
  }

  return (
    <>
      {restaurantLoading || restaurantMenuLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" color="#ff5353" />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.white,
          }}
        >
          {/* Header  */}
          {RestaurantMenuList.length ? renderHeader() : null}

          {/* Body  */}
          <ScrollView>
            {/* Restaurant Detail */}
            {renderRestaurantDetail()}

            {/* Menu list */}
            {renderMenu()}

            {/* Scan a table button */}
          </ScrollView>
          {/* Footer  */}
        </View>
      )}
    </>
  );
};

export default RestaurantDetail;

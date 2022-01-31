import React from "react";
import { View, Text, Image } from "react-native";
import { SIZES, COLORS, icons, FONTS } from "../../../constants";
import { theme } from "../../infrastructure/theme";
import { useDispatch, useSelector } from "react-redux";

const RestaurantMenu = () => {
  const RestaurantMenuList = useSelector(
    (state) => state.restaurant?.restaurantMenusByRestaurantId
  );

  return (
    <>
      {RestaurantMenuList.length != 0 ? (
        <View>
          {RestaurantMenuList.map((item, index) => (
            <>
              <View
                key={`CATE-${item.id}-${index}`}
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
                  key={`MENU-${listItem.id}-${index}`}
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
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            padding: SIZES.padding,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              borderBottomColor: COLORS.lightGray1,
              marginBottom: SIZES.padding - 10,
              borderBottomWidth: 2,
            }}
          />
          <Image
            source={icons.cross}
            style={{
              tintColor: theme.colors.brand.primary,
            }}
          ></Image>
          <Text
            style={{
              ...FONTS.h3,
              color: theme.colors.brand.primary,
            }}
          >
            Sorry, No Menu Items Found !!!
          </Text>
          <View
            style={{
              width: "100%",
              borderBottomColor: COLORS.lightGray1,
              marginTop: SIZES.padding + 10,
              borderBottomWidth: 2,
            }}
          />
        </View>
      )}
    </>
  );
};
export default RestaurantMenu;

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Header } from "..";
import { IconButton, CartQuantityButton, StepperInput } from "../../components";
import { FONTS, SIZES, COLORS, icons } from "../../../constants";
import { goBack, navigate } from "../../store/navigation/navigationAction";
import { useDispatch } from "react-redux";
import { theme } from "../../infrastructure/theme";
import dummyData from "../../../constants/dummyData";
import { SwipeListView } from "react-native-swipe-list-view";
import { FooterTotal } from "../../components";

const CartTab = () => {
  const dispatch = useDispatch();

  const [myCartList, setMyCartList] = React.useState(dummyData.myCart);

  //handler
  function updateQuantityHandler(newQty, id) {
    const newMyCartList = myCartList.map((cl) =>
      cl.id === id ? { ...cl, qty: newQty } : cl
    );

    setMyCartList(newMyCartList);
  }

  function removeCartHandler(id) {
    let newMyCartList = [...myCartList];
    const index = newMyCartList.find((cart) => cart.id === id);
    newMyCartList.splice(index, 1);
    setMyCartList(newMyCartList);
  }

  function renderHeader() {
    return (
      <Header
        title="MY CART"
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
            onPress={() => dispatch(navigate("RestaurantDetail"))}
          />
        }
      />
    );
  }

  function renderCartList() {
    return (
      <SwipeListView
        data={myCartList}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding * 2,
        }}
        disableRightSwipe={true}
        rightOpenValue={-75}
        renderItem={(data, rowMap) => (
          <View
            style={{
              height: 100,
              backgroundColor: COLORS.lightGray2,
              ...styles.cartItemContainer,
            }}
          >
            {/* Food Info  */}
            <View
              style={{
                flex: 1,
              }}
            >
              <Text style={{ ...FONTS.body3 }}>{data.item.name}</Text>
              <Text style={{ ...FONTS.h3, color: theme.colors.brand.primary }}>
                Rs. {data.item.price}/-
              </Text>
            </View>

            {/* Quantity  */}
            <StepperInput
              containerStyle={{
                height: 50,
                width: 125,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.radius,
              }}
              value={data.item.qty}
              onAdd={() => {
                if (data.item.qty < 10) {
                  updateQuantityHandler(data.item.qty + 1, data.item.id);
                }
              }}
              onMinus={() => {
                if (data.item.qty > 1) {
                  updateQuantityHandler(data.item.qty - 1, data.item.id);
                }
              }}
            />
          </View>
        )}
        renderHiddenItem={(data, rowMap) => (
          <IconButton
            containerStyle={{
              flex: 1,
              justifyContent: "flex-end",
              backgroundColor: theme.colors.brand.primary,
              ...styles.cartItemContainer,
            }}
            icon={icons.wrong}
            iconStyle={{
              marginRight: 10,
            }}
            onPress={() => removeCartHandler(data.item.id)}
          />
        )}
      />
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

      {/* Cart List  */}
      {renderCartList()}

      {/* Footer  */}
      <FooterTotal subTotal={500} grandTotal={550} />
    </View>
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
  },
});

export default CartTab;

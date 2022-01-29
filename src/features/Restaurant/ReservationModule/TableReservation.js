import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SIZES, FONTS, icons, COLORS } from "../../../../constants";
import { theme } from "../../../infrastructure/theme";
import { Header } from "../..";
import { IconButton } from "../../../components";
import { goBack } from "../../../store/navigation/navigationAction";

const TableReservation = () => {
  const dispatch = useDispatch();

  const restaurantId = useSelector(
    (state) => state.navigationRef.navigationQuery?.id
  );

  const restaurant = useSelector(
    (state) => state.navigationRef.navigationQuery?.restaurant
  );

  const reservationTime = useSelector(
    (state) => state.navigationRef.navigationQuery?.time
  );

  const groupSize = useSelector(
    (state) => state.navigationRef.navigationQuery?.groupSize
  );

  function renderHeader() {
    return (
      <Header
        title="TABLE RESERVATION"
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
      />
    );
  }

  function renderTables() {
    return <ScrollView></ScrollView>;
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

      {/* Title  */}
      <View
        style={{
          paddingHorizontal: SIZES.padding,
        }}
      >
        <Text
          style={{
            ...FONTS.h1,
            fontSize: 28,
            color: theme.colors.brand.primary,
          }}
        >
          {restaurant?.name.toUpperCase()}
        </Text>
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.darkGray2,
            paddingBottom: SIZES.padding,
          }}
        >
          Select Date and Time For Reservation.
        </Text>
      </View>

      <View
        style={{
          paddingHorizontal: SIZES.padding,
        }}
      >
        <Text style={{ ...FONTS.h3 }}>Table Reservation Details:</Text>
        <Text style={{ ...FONTS.h4, marginTop: 5 }}>
          Group Size: {`${groupSize} ${groupSize > 1 ? "People" : "Person"}`}
        </Text>
        <Text style={{ ...FONTS.h4 }}>Reservation Date and Time:</Text>
      </View>

      {/* Table Selection  */}
      {renderTables()}
    </View>
  );
};

export default TableReservation;

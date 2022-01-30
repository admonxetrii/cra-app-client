import React from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SIZES, FONTS, icons, COLORS } from "../../../../constants";
import { theme } from "../../../infrastructure/theme";
import { Header } from "../..";
import { IconButton, PrimaryButton } from "../../../components";
import { goBack } from "../../../store/navigation/navigationAction";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import {
  confirmTableBookingReq,
  fetchTableByRestaurantReq,
  clearBookingStatus,
} from "../../../store/restaurant/restaurantAction";
import { useFocusEffect } from "@react-navigation/native";
import TableComponent from "./TableComponent";
import DateObject from "react-date-object";
const TableReservation = () => {
  const [selectedTable, setSelectedTable] = React.useState({
    id: null,
    tableName: null,
  });
  const [buttonActive, setButtonActive] = React.useState(false);

  const dispatch = useDispatch();

  const restaurantId = useSelector(
    (state) => state.navigationRef.navigationQuery?.id
  );

  React.useEffect(() => {
    if (restaurantId) {
      // dispatch(clearBookingStatus());
      dispatch(fetchTableByRestaurantReq(restaurantId));
    }
  }, []);

  const tableDetails = useSelector(
    (state) => state.restaurant?.tableByRestaurantId
  );

  const isLoading = useSelector(
    (state) => state.restaurant?.fetchTableByRestaurantId?.loading
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

  const confirmBooking = useSelector(
    (state) => state.restaurant?.confirmTableBooking
  );

  const username = useSelector((state) => state.auth.user?.username);

  const handleConfirmBooking = () => {
    if (groupSize != 0 && selectedTable.id != null && reservationTime != null) {
      dispatch(
        confirmTableBookingReq({
          date: reservationTime,
          groupSize: groupSize,
          tableId: selectedTable.id,
          username: username,
        })
      );
    }
  };

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
    console.log();
    return (
      <View
        style={{
          flex: 1,
          marginBottom: 150,
        }}
      >
        {tableDetails.length != 0 ? (
          <>
            {tableDetails.map((tableFloor, index) => (
              <View
                keyExtractor={(tableFloor) => {
                  `FLOOR_${tableFloor.id}_${index}`;
                }}
              >
                {/* Floor Section  */}
                <View
                  style={{
                    paddingHorizontal: SIZES.padding,
                    marginVertical: SIZES.padding,
                  }}
                >
                  <Text style={{ ...FONTS.h2, color: COLORS.black }}>
                    {tableFloor.floorName}:
                  </Text>
                </View>

                <View>
                  <FlatList
                    data={tableFloor.tables}
                    horizontal
                    keyExtractor={(item) => `TABLE_${item.id}`}
                    showsHorizontalScrollIndicator={false}
                    nestedScrollEnabled
                    renderItem={({ item, index }) => {
                      let booked = false;
                      item.reservation_dates.map((date) => {
                        var dateObj = new DateObject(new Date(date.date));
                        if (
                          reservationTime.format("MM/DD hh A") ==
                          dateObj.format("MM/DD hh A")
                        ) {
                          console.log(item.tableName + " is booked");
                          booked = true;
                        }
                      });

                      if (groupSize <= 2) {
                        if (item.seatCapacity <= 3 && !booked) {
                          return (
                            <TableComponent
                              item={item}
                              index={index}
                              selectedTable={selectedTable}
                              tableFloor={tableFloor}
                              onPress={() => {
                                setSelectedTable(item);
                                setButtonActive(true);
                              }}
                            />
                          );
                        } else {
                          return (
                            <TableComponent
                              item={item}
                              index={index}
                              selectedTable={selectedTable}
                              disabled={true}
                              booked={booked}
                              tableFloor={tableFloor}
                              onPress={() => {
                                setSelectedTable(item);
                                setButtonActive(true);
                              }}
                            />
                          );
                        }
                      } else if (groupSize > 2 && groupSize <= 6 && !booked) {
                        if (item.seatCapacity > 2 && item.seatCapacity <= 6) {
                          return (
                            <TableComponent
                              item={item}
                              index={index}
                              selectedTable={selectedTable}
                              tableFloor={tableFloor}
                              onPress={() => {
                                setSelectedTable(item);
                                setButtonActive(true);
                              }}
                            />
                          );
                        } else {
                          return (
                            <TableComponent
                              item={item}
                              index={index}
                              selectedTable={selectedTable}
                              disabled={true}
                              booked={booked}
                              tableFloor={tableFloor}
                              onPress={() => {
                                setSelectedTable(item);
                                setButtonActive(true);
                              }}
                            />
                          );
                        }
                      } else {
                        if (item.seatCapacity > 6 && !booked) {
                          return (
                            <TableComponent
                              item={item}
                              index={index}
                              selectedTable={selectedTable}
                              tableFloor={tableFloor}
                              onPress={() => {
                                setSelectedTable(item);
                                setButtonActive(true);
                              }}
                            />
                          );
                        } else {
                          return (
                            <TableComponent
                              item={item}
                              index={index}
                              selectedTable={selectedTable}
                              disabled={true}
                              booked={booked}
                              tableFloor={tableFloor}
                              onPress={() => {
                                setSelectedTable(item);
                                setButtonActive(true);
                              }}
                            />
                          );
                        }
                      }
                    }}
                  />
                </View>
              </View>
            ))}
          </>
        ) : (
          <View
            style={{
              flex: 1,
              padding: SIZES.padding,
              alignItems: "center",
            }}
          >
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
              Sorry, No Table Found !!!
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
      </View>
    );
  }

  return (
    <>
      {isLoading ? (
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
          {renderHeader()}

          {/* Title  */}
          <ScrollView>
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

            {/* Reservation parameters */}
            <View
              style={{
                paddingHorizontal: SIZES.padding,
              }}
            >
              <Text style={{ ...FONTS.h3 }}>Table Reservation Details:</Text>

              <View
                style={{
                  width: "100%",
                  borderBottomColor: COLORS.lightGray1,
                  borderBottomWidth: 2,
                  marginBottom: 5,
                }}
              />
              <View style={{ flexDirection: "row" }}>
                <Text style={{ ...FONTS.h4, fontSize: 14 }}>Group Size: </Text>
                <Text
                  style={{ ...FONTS.h4, color: theme.colors.brand.primary }}
                >{`${groupSize} ${groupSize > 1 ? "People" : "Person"}`}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ ...FONTS.h4 }}>Reservation Date and Time: </Text>
                <Text
                  style={{ ...FONTS.h4, color: theme.colors.brand.primary }}
                >{`${reservationTime.format("DD MMMM, hh:mm A")}`}</Text>
              </View>
            </View>

            {/* Table Selection  */}

            <View
              style={{
                marginTop: 30,
              }}
            >
              {/* Title  */}
              <View
                style={{
                  paddingHorizontal: SIZES.padding,
                  flexDirection: "row",
                }}
              >
                <Text style={{ ...FONTS.h3 }}>Select Table:</Text>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderColor: theme.colors.brand.primary,
                    borderWidth: 1,
                    borderRadius: 2,
                    marginLeft: 10,
                  }}
                />
                <Text style={{ ...FONTS.body4, marginLeft: 5 }}>Available</Text>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    backgroundColor: COLORS.lightGray1,
                    borderRadius: 2,
                    marginLeft: 10,
                  }}
                />
                <Text style={{ ...FONTS.body4, marginLeft: 5 }}>
                  Not Available
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  borderBottomColor: COLORS.lightGray1,
                  borderBottomWidth: 2,
                  marginBottom: 5,
                }}
              />

              {/* Tables  */}
              {renderTables()}
            </View>
          </ScrollView>
          <View
            style={{
              flex: 1,
              position: "absolute",
              width: "100%",
              bottom: 0,
            }}
          >
            {/* Shadow  */}
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={[COLORS.transparent, COLORS.lightGray1]}
              style={{
                position: "absolute",
                top: -15,
                left: 0,
                right: 0,
                height: Platform.OS === "ios" ? 200 : 50,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
            />
            <View
              style={{
                padding: SIZES.padding,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                backgroundColor: COLORS.white,
              }}
            >
              {buttonActive && (
                <View
                  style={{
                    paddingLeft: 10,
                    marginTop: SIZES.base,
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      ...FONTS.h3,
                      fontSize: 14,
                    }}
                  >
                    Selected Table:
                  </Text>
                  <Text
                    style={{
                      ...FONTS.h3,
                      fontSize: 14,
                      color: theme.colors.brand.primary,
                    }}
                  >
                    {selectedTable.tableName}
                  </Text>
                </View>
              )}

              {/* Order button  */}
              <PrimaryButton
                icon={icons.cart}
                buttonContainerStyle={{
                  height: 55,
                  width: "100%",
                  borderRadius: 50,
                  marginTop: SIZES.radius,
                }}
                disabled={
                  !buttonActive || groupSize == 0 || confirmBooking?.loading
                }
                label={confirmBooking?.loadingButtonContent}
                labelStyle={{ color: "white", ...FONTS.h2 }}
                onPress={() => handleConfirmBooking()}
              />
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default TableReservation;

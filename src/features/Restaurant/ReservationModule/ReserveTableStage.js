import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { SIZES, icons, FONTS, COLORS } from "../../../../constants";
import { theme } from "../../../infrastructure/theme";
import { Header } from "../..";
import { IconButton, PrimaryButton } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantByIdReq } from "../../../store/restaurant/restaurantAction";
import {
  goBack,
  navigateWithProps,
} from "../../../store/navigation/navigationAction";
import DateObject from "react-date-object";
import moment from "moment";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect } from "@react-navigation/native";

const ReserveTableStage = () => {
  const [groupSize, setGroupSize] = React.useState(0);
  const [date, setDate] = React.useState(new DateObject(Date.now()));
  const [time, setTime] = React.useState(new DateObject(Date.now()));
  const [buttonActive, setButtonActive] = React.useState(false);

  const dispatch = useDispatch();

  const restaurantId = useSelector((state) => state.restaurant.restaurantId);

  let arrayIndex = 1;

  useFocusEffect(
    React.useCallback(() => {
      if (restaurantId) {
        dispatch(fetchRestaurantByIdReq(restaurantId));
        arrayIndex = 1;
      }
    }, [])
  );

  const restaurant = useSelector((state) => state.restaurant?.restaurantById);
  const restaurantLoading = useSelector(
    (state) => state.restaurant.fetchRestaurantById?.loading
  );

  const nextWeek = [...Array(10).keys()].map((days) => ({
    id: `DATE_${days}`,
    date: new DateObject(Date.now() + 86400000 * days).day,
    day: new DateObject(Date.now() + 86400000 * days).weekDay.shortName,
    dayName: new DateObject(Date.now() + 86400000 * days).weekDay.name,
    fulldate: {
      date: new DateObject(Date.now() + 86400000 * days),
    },
  }));

  var openTime = moment(restaurant?.openingTime, "HH:mm:ss");
  var closeTime = moment(restaurant?.closingTime, "HH:mm:ss");

  // calculate total duration
  var duration = moment.duration(closeTime.diff(openTime));

  // duration in hours
  var hours = parseInt(duration.asHours()) + 1;
  if (restaurant) {
    arrayIndex = hours;
  }
  const reservationTime = [...Array(arrayIndex).keys()].map((index) => ({
    id: `TIME_${index}`,
    hour: new DateObject(new Date(openTime)).add(index, "hours").format("hh A"),
    fulldate: {
      hour: new DateObject(date.format() + " " + restaurant?.openingTime).add(
        index,
        "hours"
      ),
    },
    currentHour: new DateObject(Date.now()),
  }));

  function renderHeader() {
    return (
      <Header
        title="RESERVE TABLE"
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

  function renderGroupSize() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
            fontSize: 18,
            marginTop: 20,
          }}
        >
          Group Size
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={icons.group}
              style={{
                tintColor: COLORS.lightGray1,
                height: 60,
                width: 60,
              }}
            />
            <Text
              style={{
                marginBottom: -15,
                fontFamily: "Poppins_600SemiBold",
                fontSize: 70,
                color: theme.colors.brand.primary,
              }}
            >
              {groupSize}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <IconButton
              containerStyle={{
                width: 70,
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={icons.minus}
              iconStyle={{
                height: 60,
                width: 60,
                tintColor: groupSize > 0 ? COLORS.black : COLORS.gray3,
              }}
              disabled={groupSize < 1 ? true : false}
              onPress={() => setGroupSize(groupSize - 1)}
            />
            <IconButton
              containerStyle={{
                width: 70,
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={icons.plus}
              iconStyle={{
                height: 60,
                width: 60,
                tintColor:
                  groupSize < 29
                    ? theme.colors.brand.primary
                    : theme.colors.brand.primaryMuted,
              }}
              disabled={groupSize > 29 ? true : false}
              onPress={() => setGroupSize(groupSize + 1)}
            />
          </View>
        </View>
      </View>
    );
  }

  function renderDatePicker() {
    return (
      <View
        style={{
          paddingTop: SIZES.padding,
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
            fontSize: 18,
            paddingLeft: SIZES.padding,
          }}
        >
          Date:
        </Text>
        <View
          style={{
            paddingLeft: SIZES.padding,
          }}
        >
          <FlatList
            data={nextWeek}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            style={{
              height: 100,
              // borderWidth: 1,
              // borderColor: COLORS.lightGray1,
              marginBottom: SIZES.padding,
            }}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{
                  paddingLeft: SIZES.padding,
                  paddingRight:
                    index == nextWeek.length - 1 ? SIZES.padding : 0,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  setDate(item.fulldate.date);
                  setTime(date);
                  setButtonActive(false);
                }}
              >
                <Text
                  style={{
                    fontSize: 60,
                    fontFamily:
                      date.format() == item.fulldate.date.format()
                        ? "Poppins_600SemiBold"
                        : "Poppins_400Regular",
                    marginBottom: -15,
                    color:
                      date.format() == item.fulldate.date.format()
                        ? theme.colors.brand.primary
                        : COLORS.lightGray1,
                  }}
                >
                  {item.date}
                </Text>
                <Text
                  style={{
                    ...FONTS.body4,
                    fontSize: 18,
                    fontFamily:
                      date.format() == item.fulldate.date.format()
                        ? "Poppins_600SemiBold"
                        : "Poppins_400Regular",
                    marginTop: -10,
                    color:
                      date.format() == item.fulldate.date.format()
                        ? theme.colors.brand.primary
                        : COLORS.lightGray1,
                  }}
                >
                  {item.date < 10 ? item.day : item.dayName}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }

  function renderTimePicker() {
    return (
      <View style={{}}>
        <Text
          style={{
            ...FONTS.h3,
            fontSize: 18,
            paddingLeft: SIZES.padding,
          }}
        >
          Time:
        </Text>
        <View
          style={{
            paddingLeft: SIZES.padding,
          }}
        >
          <FlatList
            data={reservationTime}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            style={{
              height: 100,
              // borderWidth: 1,
              // borderColor: COLORS.lightGray1,
              marginBottom: SIZES.padding,
            }}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled
            renderItem={({ item, index }) => (
              <>
                {item.currentHour + 1800000 > item.fulldate.hour ? (
                  <>
                    {index == reservationTime.length - 1 ? (
                      <View
                        style={{
                          paddingRight: SIZES.padding,
                        }}
                      >
                        <Text
                          style={{
                            marginTop: 10,
                            ...FONTS.h3,
                            color: theme.colors.brand.primary,
                          }}
                        >
                          Reservation Time has been exceeded.
                        </Text>
                      </View>
                    ) : null}
                  </>
                ) : (
                  <TouchableOpacity
                    style={{
                      paddingLeft: SIZES.padding,
                      paddingRight:
                        index == reservationTime.length - 1 ? SIZES.padding : 0,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onPress={() => {
                      setTime(item.fulldate.hour);
                      setButtonActive(true);
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 60,
                        fontFamily:
                          time.format("hh mm A") ==
                          item.fulldate.hour.format("hh mm A")
                            ? "Poppins_600SemiBold"
                            : "Poppins_400Regular",
                        marginBottom: -15,
                        color:
                          time.format("hh mm A") ==
                          item.fulldate.hour.format("hh mm A")
                            ? theme.colors.brand.primary
                            : COLORS.lightGray1,
                      }}
                    >
                      {item.hour.split(" ")[0]}
                    </Text>
                    <Text
                      style={{
                        ...FONTS.body4,
                        fontSize: 18,
                        fontFamily:
                          time.format("hh mm A") ==
                          item.fulldate.hour.format("hh mm A")
                            ? "Poppins_600SemiBold"
                            : "Poppins_400Regular",
                        marginTop: -10,
                        color:
                          time.format("hh mm A") ==
                          item.fulldate.hour.format("hh mm A")
                            ? theme.colors.brand.primary
                            : COLORS.lightGray1,
                      }}
                    >
                      {item.hour.split(" ")[1]}
                    </Text>
                  </TouchableOpacity>
                )}
              </>
            )}
          />
        </View>
      </View>
    );
  }

  return (
    <>
      {restaurantLoading ? (
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
        <>
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.white,
            }}
          >
            {/* Header  */}
            {renderHeader()}
            <View
              style={{
                marginTop: SIZES.base,
                marginBottom: SIZES.padding,
              }}
            >
              {/* Restaurant Title and caption  */}
              {restaurant && (
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
              )}

              {/* Group Size  */}
              {renderGroupSize()}

              {/* Date  */}
              {renderDatePicker()}

              {/* Time  */}
              {renderTimePicker()}

              {/* Footer  */}
            </View>
          </View>
          <View>
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
            {/* Order Detail  */}
            <View
              style={{
                padding: SIZES.padding,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                backgroundColor: COLORS.white,
              }}
            >
              {buttonActive && groupSize != 0 && (
                <View
                  style={{
                    paddingLeft: 10,
                    marginTop: SIZES.base,
                    marginBottom: SIZES.padding,
                  }}
                >
                  <Text
                    style={{
                      ...FONTS.h3,
                      fontSize: 14,
                    }}
                  >
                    Selected Date and Time:
                  </Text>
                  <Text
                    style={{
                      ...FONTS.h3,
                      fontSize: 14,
                      color: theme.colors.brand.primary,
                    }}
                  >
                    {`${time.format("DD MMMM, YYYY")} at ${time.format(
                      " hh:mm A"
                    )} for ${groupSize} ${
                      groupSize > 1 ? "People" : "Person"
                    }.`}
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
                disabled={!buttonActive || groupSize == 0}
                label={"Reserve"}
                labelStyle={{ color: "white", ...FONTS.h2 }}
                onPress={() => {
                  dispatch(
                    navigateWithProps({
                      path: "TableReservation",
                      query: {
                        id: restaurantId,
                        restaurant: restaurant,
                        time: time,
                        groupSize: groupSize,
                      },
                    })
                  );
                }}
              />
            </View>
          </View>
        </>
      )}
    </>
  );
};

export default ReserveTableStage;

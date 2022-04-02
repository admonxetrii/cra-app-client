import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { COLORS, FONTS, icons, SIZES } from "../../../../constants";
import {
  cancelReservationsReq,
  fetchMyReservationsReq,
} from "../../../store/restaurant/restaurantAction";
import { SwipeListView } from "react-native-swipe-list-view";
import { theme } from "../../../infrastructure/theme";
import { IconButton } from "../../../components";
import DateObject from "react-date-object";
import { Header } from "../..";
import {
  goBack,
  navDispatch,
} from "../../../store/navigation/navigationAction";
import { DrawerActions } from "@react-navigation/native";

const MyReservationPage = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.user?.id);

  React.useEffect(() => {
    dispatch(fetchMyReservationsReq(userId));
  }, []);

  const reservations = useSelector((state) => state.restaurant?.myReservations);

  const reservationsLoading = useSelector(
    (state) => state.restaurant?.fetchMyReservations?.loading
  );

  return (
    <>
      {reservationsLoading ? (
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
          <RenderHeader dispatch={dispatch} />

          <Text
            style={{
              ...FONTS.h2,
              paddingHorizontal: SIZES.padding,
            }}
          >
            My Reservations
          </Text>
          <Text
            style={{
              fontStyle: "italic",
              color: COLORS.darkGray,
              paddingHorizontal: SIZES.padding,
            }}
          >
            Note: If you cannot see your reservation listed below, it means that
            the reservation has been cancelled.
          </Text>
          <View
            style={{
              marginBottom: 150,
            }}
          >
            {reservations.length != 0 ? (
              <>
                {/* Lists  */}
                <RenderReservationList
                  reservations={reservations}
                  dispatch={dispatch}
                />
              </>
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
                <Text
                  style={{ ...FONTS.h2, color: theme.colors.brand.primary }}
                >
                  No reservations found!!
                </Text>
              </View>
            )}
          </View>
        </View>
      )}
    </>
  );
};

function RenderHeader({ dispatch }) {
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
          onPress={() => {
            dispatch(goBack());
            dispatch(navDispatch(DrawerActions.closeDrawer()));
          }}
        />
      }
    />
  );
}

function RenderReservationList({ reservations, dispatch }) {
  return (
    <SwipeListView
      data={reservations}
      keyExtractor={(item) => `${item.id}`}
      contentContainerStyle={{
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.padding,
        paddingBottom: SIZES.padding * 2,
      }}
      showsVerticalScrollIndicator={false}
      rightOpenValue={-75}
      leftOpenValue={75}
      renderItem={(data, rowMap) => {
        var datetime = new DateObject(new Date(data.item.startDate));
        //   console.log(datetime);
        return (
          <View
            style={{
              height: 100,
              backgroundColor: COLORS.lightGray2,
              ...styles.ItemContainer,
            }}
          >
            {/* Food Info  */}
            <View
              style={{
                flex: 1,
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <View>
                <Text style={{ ...FONTS.h3, fontSize: 18, textAlign: "left" }}>
                  {data.item.table.floorLevel.restaurant.name}
                </Text>
                <Text
                  style={{
                    ...FONTS.body3,
                    color: theme.colors.brand.primary,
                  }}
                >
                  {datetime.format("dddd, DD MMMM")}
                </Text>
              </View>
              <View>
                <Text
                  style={{ ...FONTS.h3, fontSize: 18, textAlign: "center" }}
                >
                  Pax
                </Text>
                <Text
                  style={{
                    ...FONTS.h2,
                    textAlign: "center",
                    color: theme.colors.brand.primary,
                  }}
                >
                  {data.item.groupSize}
                </Text>
              </View>
              <View>
                <Text style={{ ...FONTS.h3, fontSize: 18, textAlign: "right" }}>
                  {data.item.table.tableName}
                </Text>
                <Text
                  style={{
                    ...FONTS.body3,
                    color: theme.colors.brand.primary,
                  }}
                >
                  {datetime.format("hh:mm A")}
                </Text>
              </View>
            </View>
          </View>
        );
      }}
      renderHiddenItem={(data, rowMap) => (
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <IconButton
            containerStyle={{
              flex: 1,
              height: 100,
              justifyContent: "flex-start",
              backgroundColor: COLORS.blue,
              ...styles.ItemContainer,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }}
            icon={icons.edit}
            iconStyle={{
              marginLeft: 10,
            }}
            // onPress={() => removeCartHandler(data.item.id)}
          />
          <IconButton
            containerStyle={{
              flex: 1,
              height: 100,
              justifyContent: "flex-end",
              backgroundColor: theme.colors.brand.primary,
              ...styles.ItemContainer,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
            icon={icons.wrong}
            iconStyle={{
              marginRight: 10,
            }}
            onPress={() => {
              Alert.alert(
                "Cancel Reservation",
                "Are you sure you want to cancel your resevation?.",
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
                      console.log(data.item.id);
                      dispatch(
                        cancelReservationsReq({ reservationId: data.item.id })
                      );
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

const styles = StyleSheet.create({
  ItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
  },
});

export default MyReservationPage;

import React from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { COLORS, SIZES, icons, FONTS } from "../../../constants";
import { theme } from "../../infrastructure/theme";
import { Header, RestaurantComponent, RestaurantMenu } from "..";
import {
  IconButton,
  CartQuantityButton,
  CardSection,
  HorizontalFoodCard,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { goBack, navigate } from "../../store/navigation/navigationAction";
import { ScrollView } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";
import {
  clearRestaurantById,
  fetchRestaurantByIdReq,
  fetchRestaurantMenusByRestaurantIdReq,
  fetchSimilarRestaurantByIdReq,
  fetchSimilarPercentRestaurantByIdReq,
} from "../../store/restaurant/restaurantAction";

const RestaurantDetail = () => {
  const dispatch = useDispatch();

  const restaurantLoading = useSelector(
    (state) => state.restaurant.fetchRestaurantById?.loading
  );

  const restaurantMenuLoading = useSelector(
    (state) => state.restaurant.fetchRestaurantMenusByRestaurantId?.loading
  );
  const similarRestaurantLoading = useSelector(
    (state) => state.restaurant.fetchSimilarRestaurantById?.loading
  );
  const similarPercentRestaurantLoading = useSelector(
    (state) => state.restaurant.fetchSimilarPercentRestaurantById?.loading
  );

  const stateRestaurantId = useSelector(
    (state) => state.navigationRef.navigationQuery?.id
  );

  const [restaurantId, setRestaurantId] = React.useState(stateRestaurantId);

  useFocusEffect(
    React.useCallback(() => {
      if (restaurantId) {
        dispatch(fetchRestaurantByIdReq(restaurantId));
        dispatch(fetchRestaurantMenusByRestaurantIdReq(restaurantId));
        dispatch(fetchSimilarRestaurantByIdReq(restaurantId));
        dispatch(fetchSimilarPercentRestaurantByIdReq(restaurantId));
      }
      return () => {
        dispatch(clearRestaurantById());
      };
    }, [restaurantId])
  );

  const SimilarRestaurantList = useSelector(
    (state) => state.restaurant?.similarRestaurantById
  );
  const SimilarPercentRestaurantList = useSelector(
    (state) => state.restaurant?.similarPercentRestaurantById
  );

  const restaurantDescription = useSelector(
    (state) => state.restaurant?.restaurantById?.description
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

  return (
    <>
      {restaurantLoading ||
      restaurantMenuLoading ||
      similarRestaurantLoading ||
      similarPercentRestaurantLoading ? (
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
          <ScrollView>
            {/* Restaurant Details  */}
            <RestaurantComponent />

            {/* Restaurant Description  */}
            <View
              style={{
                flex: 1,
                paddingHorizontal: SIZES.padding,
              }}
            >
              <Text
                style={{
                  ...FONTS.h3,
                  textAlign: "center",
                  fontSize: 20,
                }}
              >
                Description
              </Text>
              <Text
                style={{
                  ...FONTS.body4,
                  paddingHorizontal: 30,
                  marginTop: 10,
                  textAlign: "center",
                  color: COLORS.darkGray2,
                }}
              >
                {restaurantDescription}
              </Text>

              <Text
                style={{
                  ...FONTS.h1,
                  fontSize: 20,
                  marginTop: SIZES.padding,
                  marginBottom: -20,
                }}
              >
                MENU LISTS
              </Text>
            </View>

            {/* Menu list */}
            <RestaurantMenu />

            {/* Body  */}
            <CardSection
              title={"Similar Restaurant"}
              onPress={() => console.log("Show all")}
            >
              <FlatList
                data={SimilarRestaurantList}
                keyExtractor={(item) => `${item.id}`}
                horizontal
                style={{
                  marginBottom: SIZES.padding,
                }}
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled
                renderItem={({ item, index }) => {
                  var similarityPercent;
                  SimilarPercentRestaurantList.map((percent, index) => {
                    if (
                      item.id == percent.restaurantA ||
                      item.id == percent.restaurantB
                    ) {
                      similarityPercent = percent.similarityPercent;
                    }
                  });
                  return (
                    <HorizontalFoodCard
                      contentContainerStyle={{
                        width: SIZES.width * 0.85,
                        marginLeft: index == 0 ? SIZES.padding : 18,
                        marginRight:
                          index == SimilarRestaurantList.length - 1
                            ? SIZES.padding
                            : 0,
                      }}
                      imageStyle={{
                        height: 150,
                        width: 150,
                      }}
                      item={item}
                      similarityPercent={similarityPercent}
                      onPress={() => {
                        dispatch(clearRestaurantById());
                        setRestaurantId(item.id);
                      }}
                    />
                  );
                }}
              />
            </CardSection>
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default RestaurantDetail;

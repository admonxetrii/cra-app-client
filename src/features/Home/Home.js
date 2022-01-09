import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";
import dummyData from "../../../constants/dummyData";
import { theme } from "../../infrastructure/theme";

import {
  VerticalFoodCard,
  HorizontalFoodCard,
  CardSection,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  navigate,
  navigateWithProps,
} from "../../store/navigation/navigationAction";
import {
  fetchRestaurantByCategoryReq,
  fetchRestaurantByCategorySuccess,
  fetchRestaurantCategoryReq,
} from "../../store/restaurant/restaurantAction";
import { useEffect } from "react";

const Home = ({ navigation }) => {
  const [selectedCategoryId, setSelectedCategoryId] = React.useState(null);
  const [selectedMenuType, setSelectedMenuType] = React.useState(null);
  const [menuList, setMenuList] = React.useState([]);

  const [recommends, setRecommends] = React.useState([]);
  const [popular, setPopular] = React.useState([]);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchRestaurantCategoryReq());
  }, []);

  const RestaurantCategories = useSelector(
    (state) => state.restaurant.restaurantCategories
  );

  const restaurantByCategory = useSelector(
    (state) => state.restaurant.restaurantByCategory
  );

  const handleChangeCategoryById = (id) => {
    setSelectedCategoryId(id);
    dispatch(fetchRestaurantByCategoryReq(id));
  };

  useEffect(() => {
    if (RestaurantCategories.length) {
      dispatch(fetchRestaurantByCategoryReq(RestaurantCategories[0].id));
      setSelectedCategoryId(RestaurantCategories[0].id);
    }
  }, [RestaurantCategories]);

  //Handler
  function handleChangeCategory(categoryId, menuType) {
    //Find menu based on menu type id
    let selectedMenu = dummyData.menu.find((a) => a.id == menuType);

    //set menu type id
    setMenuList(
      selectedMenu?.list.filter((a) => a.categories.includes(categoryId))
    );

    //Recommend
    let selectedRecommended = dummyData.menu.find(
      (a) => a.name == "Recommended"
    );

    //Set recommeded based on category id
    setRecommends(
      selectedRecommended?.list.filter((a) => a.categories.includes(categoryId))
    );

    //Popular
    let selectedPopular = dummyData.menu.find((a) => a.name == "Popular");

    //Set popular based on category id
    setPopular(
      selectedPopular?.list.filter((a) => a.categories.includes(categoryId))
    );
  }

  //Render
  function renderFoodCategories(data) {
    return (
      <FlatList
        data={data}
        keyExtractor={(item) => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              height: 55,
              marginTop: SIZES.padding,
              marginLeft: index == 0 ? SIZES.padding : 0,
              marginRight: dummyData.categories.length - 1 ? SIZES.padding : 0,
              paddingHorizontal: 8,
              borderRadius: SIZES.radius,
              backgroundColor:
                selectedCategoryId == item.id
                  ? theme.colors.brand.primary
                  : COLORS.lightGray2,
            }}
            onPress={() => handleChangeCategoryById(item.id)}
          >
            <Image
              source={{
                uri: item.icon,
              }}
              style={{
                alignSelf: "center",
                height: 35,
                width: 35,
                resizeMode: "contain",
              }}
            />

            <Text
              style={{
                alignSelf: "center",
                marginRight: SIZES.base,
                color:
                  selectedCategoryId == item.id ? "white" : COLORS.darkGray2,
                ...FONTS.h3,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }

  function renderPopularSection(restaurantByCategory) {
    return (
      <CardSection
        title={"Popular Items"}
        onPress={() => console.log("Show all popular")}
      >
        <FlatList
          data={restaurantByCategory}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <VerticalFoodCard
              contentContainerStyle={{
                marginLeft: index == 0 ? SIZES.padding : 18,
                marginRight: index == popular.length - 1 ? SIZES.padding : 0,
              }}
              item={item}
              onPress={() =>
                dispatch(
                  navigateWithProps({
                    path: "RestaurantDetail",
                    query: {
                      id: item.id,
                    },
                  })
                )
              }
            />
          )}
        />
      </CardSection>
    );
  }

  function renderRecomendedSection() {
    return (
      <CardSection
        title={"Recommended For you"}
        onPress={() => console.log("Show all recomemded")}
      >
        <FlatList
          data={recommends}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <HorizontalFoodCard
              contentContainerStyle={{
                height: 180,
                width: SIZES.width * 0.85,
                marginLeft: index == 0 ? SIZES.padding : 18,
                marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
                paddingRight: SIZES.radius,
                alignItems: "center",
              }}
              imageStyle={{
                marginTop: 35,
                height: 150,
                width: 150,
              }}
              item={item}
              onPress={() => console.log("Recommended Section")}
            />
          )}
        />
      </CardSection>
    );
  }

  function renderMenuTypes() {
    return (
      <FlatList
        data={dummyData.menu}
        horizontal
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 30,
          marginBottom: 20,
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              marginLeft: SIZES.padding,
              marginRight:
                index == dummyData.menu.length - 1 ? SIZES.padding : 0,
            }}
            onPress={() => {
              setSelectedMenuType(item.id);
              handleChangeCategory(selectedCategoryId, item.id);
            }}
          >
            <Text
              style={{
                color:
                  selectedMenuType == item.id
                    ? theme.colors.brand.primary
                    : "black",
                ...FONTS.h3,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* Contents  */}
      <FlatList
        data={menuList}
        keyExtractor={(item) => `${item.id}`}
        ListHeaderComponent={
          <View>
            {/* Selected Restaurant */}
            {/* {renderSelectedRestaurant()} */}

            {/* Render Food Categories  */}
            {renderFoodCategories(RestaurantCategories)}

            {/* Popular  */}
            {renderPopularSection(restaurantByCategory)}

            {/* Recomended Section  */}
            {/* {renderRecomendedSection()} */}

            {/* Menu Headers  */}
            {/* {renderMenuTypes()} */}
          </View>
        }
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <></>
            // <HorizontalFoodCard
            //   contentContainerStyle={{
            //     height: 130,
            //     alignItems: "center",
            //     marginHorizontal: SIZES.padding,
            //     marginBottom: SIZES.radius,
            //   }}
            //   imageStyle={{
            //     marginTop: 20,
            //     height: 110,
            //     width: 110,
            //   }}
            //   item={item}
            //   onPress={() => console.log("horizontal list tapped")}
            // />
          );
        }}
      ></FlatList>
    </View>
  );
};

export default Home;

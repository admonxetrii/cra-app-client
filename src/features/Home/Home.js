import React from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Searchbar, Card } from "react-native-paper";
import Animated from "react-native-reanimated";
import { COLORS, FONTS, SIZES, icons } from "../../../constants";
import dummyData from "../../../constants/dummyData";
import { theme } from "../../infrastructure/theme";

import {
  VerticalFoodCard,
  HorizontalFoodCard,
  CardSection,
} from "../../components";

const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
  const [selectedMenuType, setSelectedMenuType] = React.useState(1);
  const [menuList, setMenuList] = React.useState([]);

  const [recommends, setRecommends] = React.useState([]);
  const [popular, setPopular] = React.useState([]);

  React.useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

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

  function renderSearch() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 40,
          alignItems: "center",
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.base,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}
      >
        {/* Icon  */}
        <Image
          source={icons.search}
          style={{
            height: 20,
            width: 20,
            tintColor: "black",
          }}
        />

        {/* Text Input  */}
        <TextInput
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            ...FONTS.body3,
          }}
          placeholder="Search Food..."
        />

        {/* filter  */}
        <TouchableOpacity
        // onPress={}
        >
          <Image
            source={icons.filter}
            style={{
              height: 20,
              width: 20,
              tintColor: "black",
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderSelectedRestaurant() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
        }}
      >
        <Text style={{ color: theme.colors.brand.primary, ...FONTS.body3 }}>
          SELECTED RESTAURANT
        </Text>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginTop: SIZES.base,
            alignItems: "center",
          }}
        >
          <Text style={{ ...FONTS.h3 }}>{"Trp"}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderFoodCategories() {
    return (
      <FlatList
        data={dummyData.categories}
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
            onPress={() => {
              setSelectedCategoryId(item.id);
              handleChangeCategory(item.id, selectedMenuType);
            }}
          >
            <Image
              source={item.icon}
              style={{
                marginTop: 5,
                height: 50,
                width: 50,
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

  function renderPopularSection() {
    return (
      <CardSection
        title={"Popular Items"}
        onPress={() => console.log("Show all popular")}
      >
        <FlatList
          data={popular}
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
              onPress={() => console.log("Vertical Section")}
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
      {/* Search  */}
      {renderSearch()}

      {/* Contents  */}
      <FlatList
        data={menuList}
        keyExtractor={(item) => `${item.id}`}
        ListHeaderComponent={
          <View>
            {/* Selected Restaurant */}
            {/* {renderSelectedRestaurant()} */}

            {/* Render Food Categories  */}
            {renderFoodCategories()}

            {/* Popular  */}
            {renderPopularSection()}

            {/* Recomended Section  */}
            {renderRecomendedSection()}

            {/* Menu Headers  */}
            {renderMenuTypes()}
          </View>
        }
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <HorizontalFoodCard
              contentContainerStyle={{
                height: 130,
                alignItems: "center",
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
              }}
              imageStyle={{
                marginTop: 20,
                height: 110,
                width: 110,
              }}
              item={item}
              onPress={() => console.log("horizontal list tapped")}
            />
          );
        }}
      ></FlatList>
    </View>
  );
};

export default Home;

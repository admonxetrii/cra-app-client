import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { Searchbar, Card } from "react-native-paper";
import Animated from "react-native-reanimated";
import { COLORS, FONTS, SIZES } from "../../../constants";
import { theme } from "../../infrastructure/theme";

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* Search Bar  */}
      <Searchbar
        style={{
          flexDirection: "row",
          borderRadius: SIZES.radius,
          height: 40,
          marginHorizontal: SIZES.radius,
          marginVertical: SIZES.base,
          backgroundColor: COLORS.lightGray2,
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories  */}
        <View style={{}}>
          <Text
            style={{
              marginHorizontal: SIZES.radius,
              marginTop: SIZES.base,
              ...FONTS.h2,
            }}
          >
            Categories
          </Text>
          <FlatList
            data={[{ title: "Burger" }, { title: "Pizza" }, { title: "Mo:Mo" }]}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            horizontal={true}
            renderItem={({ item }) => (
              <View
                style={{
                  marginHorizontal: SIZES.radius,
                  height: 200,
                  width: 150,
                  backgroundColor: COLORS.lightGray2,
                  shadowColor: "#000",
                  shadowOpacity: 0.5,
                  shadowRadius: 5,
                  elevation: 10,
                  borderRadius: SIZES.radius,
                  marginVertical: SIZES.padding,
                  padding: SIZES.padding,
                }}
              ></View>
            )}
          />
        </View>
        {/* Today's special  */}
        <View style={{}}>
          <Text
            style={{
              marginHorizontal: SIZES.radius,
              marginVertical: SIZES.base,
              ...FONTS.h2,
            }}
          >
            Today's Special
          </Text>
          <FlatList
            data={[{ title: "Burger" }, { title: "Pizza" }, { title: "Mo:Mo" }]}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            horizontal={true}
            renderItem={({ item }) => (
              <View
                style={{
                  marginHorizontal: SIZES.radius,
                  height: 200,
                  width: 150,
                  backgroundColor: COLORS.lightGray2,
                  shadowColor: "#000",
                  shadowOpacity: 0.5,
                  shadowRadius: 5,
                  elevation: 10,
                  borderRadius: SIZES.radius,
                  marginVertical: SIZES.padding,
                  padding: SIZES.padding,
                }}
              ></View>
            )}
          />
        </View>

        {/* Restaurant  */}
        <View style={{}}>
          <Text
            style={{
              marginHorizontal: SIZES.radius,
              marginVertical: SIZES.base,
              ...FONTS.h2,
            }}
          >
            Available Restaurants
          </Text>
          <FlatList
            data={[
              {
                name: "Tropical Rest",
                image:
                  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fduongrestaurantsaigon.com%2F&psig=AOvVaw1Zyg3kCYedjSa0-Htfo1SW&ust=1640775892644000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODWjNeshvUCFQAAAAAdAAAAABAD",
                address: "Halchowk, Kathmandu",
              },
              {
                name: "Twenty Forty",
                image:
                  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fduongrestaurantsaigon.com%2F&psig=AOvVaw1Zyg3kCYedjSa0-Htfo1SW&ust=1640775892644000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODWjNeshvUCFQAAAAAdAAAAABAD",
                address: "Old Baneshowr, Kathmandu",
              },
              {
                name: "Momento",
                image:
                  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fduongrestaurantsaigon.com%2F&psig=AOvVaw1Zyg3kCYedjSa0-Htfo1SW&ust=1640775892644000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODWjNeshvUCFQAAAAAdAAAAABAD",
                address: "White Gumba, Kathmandu",
              },
            ]}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            // horizontal={true}
            renderItem={({ item }) => (
              <Card key={item.id} elevation={5}>
                <Card.Cover
                  source={{ uri: item.image }}
                  style={{
                    padding: 16,
                    backgroundColor: theme.colors.bg.primary,
                  }}
                />
                <View
                  style={{
                    padding: 16,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.fonts.body,
                      fontSize: theme.fontSizes.body,
                      color: theme.colors.text.primary,
                    }}
                  >
                    {item.name}
                  </Text>
                  <View>
                    <Text
                      style={{
                        fontSize: theme.fontSizes.caption,
                        color: theme.colors.text.secondary,
                      }}
                    >
                      {item.address}
                    </Text>
                  </View>
                </View>
              </Card>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

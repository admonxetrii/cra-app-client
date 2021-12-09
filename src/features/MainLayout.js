import React from "react";
import { View, Text } from "react-native";
import { Card, Searchbar } from "react-native-paper";
import { SIZES } from "../../constants";
import { theme } from "../infrastructure/theme";
import Animated from "react-native-reanimated";

const MainLayout = ({ restaurants = {}, drawerAnimationStyle }) => {
  const {
    name = "Tropical Rest",
    icon,
    image = [
      "https://www.collinsdictionary.com/images/full/restaurant_135621509.jpg",
    ],
    address = "Halchowk, Kathmandu",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurants;

  return (
    <Animated.View
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: "white",
        ...drawerAnimationStyle,
      }}
    >
      <Searchbar
        placeholder="Search Restaurant"
        style={{
          marginBottom: SIZES.radius,
        }}
      />
      <Card elevation={5}>
        <Card.Cover
          source={{ uri: image[0] }}
          style={{ padding: 16, backgroundColor: theme.colors.bg.primary }}
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
            {name}
          </Text>
          <View>
            <Text
              style={{
                fontSize: theme.fontSizes.caption,
                color: theme.colors.text.secondary,
              }}
            >
              {address}
            </Text>
          </View>
        </View>
      </Card>
    </Animated.View>
  );
};

export default MainLayout;

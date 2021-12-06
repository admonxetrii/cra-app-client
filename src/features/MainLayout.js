import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";
import { theme } from "../infrastructure/theme";

const MainLayout = ({ restaurants = {} }) => {
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
    <Card>
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
      </View>
    </Card>
  );
};

export default MainLayout;

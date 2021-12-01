import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 10px;
  background-color: white;
`;

const Title = styled.Text`
  padding: 16px;
`;

export const RestaurantsInfoCard = ({ restaurants = {} }) => {
  const {
    name = "Tropical Restaurant",
    icon,
    photos = [
      "https://www.collinsdictionary.com/images/full/restaurant_135621509.jpg",
    ],
    address = "Halchowk, Kathmandu",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurants;

  return (
    <RestaurantCard>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Card.Title title={name} subtitle={address} />
    </RestaurantCard>
  );
};

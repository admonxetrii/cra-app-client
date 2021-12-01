import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { RestaurantsInfoCard } from "../components/restaurants-info-card.component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
`;

const Title = styled(Text)`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SearchbarContainer = styled(View)`
  padding: 16px;
`;

export const RestaurantsScreen = () => {
  return (
    <>
      <SafeArea>
        <SearchbarContainer>
          <Searchbar />
        </SearchbarContainer>
        <RestaurantListContainer>
          <Title>Restaurant List</Title>
          <RestaurantsInfoCard />
        </RestaurantListContainer>
      </SafeArea>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

  search: {
    padding: 16,
  },

  lists: {
    flex: 1,
    padding: 16,
  },
});

import React from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import { RestaurantsInfoCard } from "../components/restaurants-info-card.component";
import {
  SafeArea,
  SearchbarContainer,
  RestaurantListContainer,
  Title,
} from "./restaurants-screen.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const RestaurantsScreen = () => {
  return (
    <>
      <SafeArea>
        <SearchbarContainer>
          <Searchbar placeholder="Restaurant Khojnus!!!" />
        </SearchbarContainer>
        <RestaurantListContainer>
          <Title>Restaurant List</Title>
          <FlatList
            data={[
              { name: 1 },
              { name: 2 },
              { name: 3 },
              { name: 4 },
              { name: 5 },
              { name: 6 },
              { name: 7 },
              { name: 8 },
            ]}
            renderItem={() => (
              <Spacer position="bottom" size="medium">
                <RestaurantsInfoCard />
              </Spacer>
            )}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{ paddingVertical: 16 }}
          />
        </RestaurantListContainer>
      </SafeArea>
    </>
  );
};

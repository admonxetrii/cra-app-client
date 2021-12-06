import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import {
  RestaurantCard,
  RestaurantCardCover,
  Rating,
  RestaurantAddress,
  RestaurantTitle,
  Section,
  SectionEnd,
  Info,
} from "./restaurants-info-card.styles";

export const RestaurantsInfoCard = ({ restaurants = {} }) => {
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

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: image[0] }} />
      <Info>
        <RestaurantTitle>{name}</RestaurantTitle>
        <Section>
          <RestaurantAddress>{address}</RestaurantAddress>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow ? (
                <Text variant="success">OPEN</Text>
              ) : (
                <Text variant="error">CLOSED</Text>
              )}
            </Spacer>
            <Spacer position="left" size="large">
              <FontAwesomeIcon icon={faUtensils} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Rating>
          {ratingArray.map(() => (
            <FontAwesomeIcon
              icon={faStar}
              style={{
                color: "#FF5353",
              }}
            />
          ))}
        </Rating>
      </Info>
    </RestaurantCard>
  );
};

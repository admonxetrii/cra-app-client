import React from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer/spacer.component";

const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled(View)`
  font-family: ${(props) => props.theme.fonts.heading};
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Open = styled(SvgXml)`
  flex-direction: row;
`;

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[2]};
`;

const RestaurantAddress = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.text.secondary};
`;

const RestaurantTitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.text.primary};
`;

const Rating = styled(View)`
  flex-direction: row;
  margin-top: 4px;
`;

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
    <RestaurantCard>
      <RestaurantCardCover source={{ uri: image[0] }} />
      <Info>
        <RestaurantTitle>{name}</RestaurantTitle>
        <Section>
          <RestaurantAddress>{address}</RestaurantAddress>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text style={{ color: "red" }}>CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow ? (
                <Text style={{ color: "green" }}>OPEN</Text>
              ) : (
                <Text style={{ color: "red" }}>CLOSED</Text>
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

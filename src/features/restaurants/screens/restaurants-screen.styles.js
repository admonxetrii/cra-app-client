import styled from "styled-components/native";
import { StatusBar, SafeAreaView, Text, View } from "react-native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin-bottom: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.brand.primary};
`;

export const SearchbarContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

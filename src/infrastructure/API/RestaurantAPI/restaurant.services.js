import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, FlatList } from "react-native";
import { Card, Searchbar } from "react-native-paper";
import { SIZES } from "../../../../constants";
import { theme } from "../../theme";

export const Restaurant = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([
    {
      addedDate: "2021-11-26T07:50:42.348949Z",
      address: "Lalitpur, Nepal",
      icon: null,
      id: 7,
      image:
        "http://192.168.0.108:8000/media/uploads/restaurants/907d3e82e5375e38e46859b92f323c14_EkkvoTT.jpg",
      isClosedTemporarily: null,
      isOpenNow: null,
      modifiedBy: 1,
      modifiedDate: "2021-11-26T07:50:42.348949Z",
      name: "Nisham Wagle",
      rating: null,
    },
    {
      addedDate: "2021-11-26T07:50:42.348949Z",
      address: "Lalitpur, Nepal",
      icon: null,
      id: 4,
      image:
        "http://192.168.0.108:8000/media/uploads/restaurants/907d3e82e5375e38e46859b92f323c14_EkkvoTT.jpg",
      isClosedTemporarily: null,
      isOpenNow: null,
      modifiedBy: 1,
      modifiedDate: "2021-11-26T07:50:42.348949Z",
      name: "Nisham Wagle",
      rating: null,
    },
    {
      addedDate: "2021-11-26T07:50:42.348949Z",
      address: "Lalitpur, Nepal",
      icon: null,
      id: 2,
      image:
        "http://192.168.0.108:8000/media/uploads/restaurants/907d3e82e5375e38e46859b92f323c14_EkkvoTT.jpg",
      isClosedTemporarily: null,
      isOpenNow: null,
      modifiedBy: 1,
      modifiedDate: "2021-11-26T07:50:42.348949Z",
      name: "Nisham Wagle",
      rating: null,
    },
  ]);
  // console.log(data);

  const getData = () => {
    setLoading(true);
    axios
      .get("http://192.168.0.108:8000/api/restaurants/")
      .then(function (response) {
        // handle success
        // console.log(response.data);
        setData(response.data);
        setLoading(false);
        // setData(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error, "hello eroor");
        setLoading(false);
      })
      .then(function () {
        // always execute
      });
  };

  // console.log(data);

  useEffect(() => {
    // getData();
  }, []);

  return (
    <View>
      <Searchbar
        placeholder="Search Restaurant"
        style={{
          marginBottom: SIZES.radius,
        }}
      />

      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={(item) => (
            <Card elevation={5}>
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
      )}
    </View>
  );
};

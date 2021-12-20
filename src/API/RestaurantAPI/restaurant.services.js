import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, FlatList } from "react-native";
import { ActivityIndicator, Card, Searchbar, Colors } from "react-native-paper";
import { SIZES } from "../../../../constants";
import { theme } from "../../theme";

export const Restaurant = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  // console.log(data);

  const getData = () => {
    setLoading(true);
    axios
      .get("http://192.168.0.112:8000/api/restaurants/")
      .then(function (response) {
        // handle success
        console.log(response.data);
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
    getData();
  }, []);

  return (
    <View
      style={{
        marginBottom: 16,
      }}
    >
      <Searchbar
        placeholder="Search Restaurant"
        style={{
          marginBottom: SIZES.radius,
        }}
      />

      {isLoading ? (
        <View>
          <ActivityIndicator
            animating={true}
            size="large"
            color={Colors.red400}
          />
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
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
      )}
    </View>
  );
};

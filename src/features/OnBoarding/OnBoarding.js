import React from "react";
import { View, Text, Image, Animated } from "react-native";
import { color } from "react-native-reanimated";

import {
  constants,
  images,
  SIZES,
  COLORS,
  FONTS,
  icons,
} from "../../../constants";

import { theme } from "../../infrastructure/theme";
import { TextButton, PrimaryButton, SecondaryButton } from "../../components";

const OnBoarding = ({ navigation }) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const flatListRef = React.useRef();

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onViewChangeRef = React.useRef(({ viewableItems, changed }) => {
    setCurrentIndex(viewableItems[0].index);
  });

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {constants.onboarding_screens.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [
              theme.colors.brand.secondary,
              theme.colors.brand.primary,
              theme.colors.brand.secondary,
            ],
            extrapolate: "clamp",
          });

          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 30, 10],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: dotWidth,
                height: 10,
                backgroundColor: dotColor,
              }}
            ></Animated.View>
          );
        })}
      </View>
    );
  };

  //   function renderHeaderLogo() {
  //     return (
  //       <View
  //         style={{
  //           position: "absolute",
  //           top: SIZES.height > 800 ? 50 : 25,
  //           left: 0,
  //           right: 0,
  //           alignItems: "center",
  //           justifyContent: "center",
  //           zIndex: 999,
  //         }}
  //       >
  //         <Image
  //           source={images.logo}
  //           resizeMode="contain"
  //           style={{
  //             width: SIZES.width * 0.5,
  //             height: 80,
  //           }}
  //         />
  //       </View>
  //     );
  //   }

  function renderFooter() {
    return (
      <View
        style={{
          height: "35%",
        }}
      >
        {/* Pagination / Dots  */}
        <Dots />
        <View
          style={{
            flex: 1,
            marginTop: "10%",
            justifyContent: "center",
          }}
        ></View>

        {/* Buttons  */}
        {currentIndex < constants.onboarding_screens.length - 1 && (
          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}
          >
            <TextButton
              buttonContainerStyle={{
                backgroundColor: null,
              }}
              label="Skip"
              labelStyle={{
                color: theme.colors.text.secondary,
              }}
              onPress={() => navigation.replace("SignIn")}
            />
            <TextButton
              buttonContainerStyle={{
                height: 30,
                width: 100,
                borderRadius: 50,
              }}
              label="Next"
              labelStyle={{ color: "white" }}
              onPress={() => {
                flatListRef?.current?.scrollToIndex({
                  index: currentIndex + 1,
                  animated: true,
                });
              }}
            />
          </View>
        )}
        {currentIndex == constants.onboarding_screens.length - 1 && (
          <View
            style={{
              bottom: "20%",
              padding: 100,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}
          >
            <PrimaryButton
              icon={icons.profile}
              buttonContainerStyle={{
                height: 40,
                width: "80%",
                borderRadius: 50,
                marginBottom: 20,
              }}
              label={"Create Account"}
              labelStyle={{ color: "white" }}
            />
            <SecondaryButton
              icon={icons.login}
              buttonContainerStyle={{
                height: 40,
                width: "80%",
                borderRadius: 50,
              }}
              label={"Sign In"}
              labelStyle={{
                color: theme.colors.brand.primary,
              }}
              onPress={() => navigation.replace("SignIn")}
            />
          </View>
        )}
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* {renderHeaderLogo()} */}
      <Animated.FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        data={constants.onboarding_screens}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={onViewChangeRef.current}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: SIZES.width,
              }}
            >
              {/* Header  */}
              <View
                style={{
                  flex: 3,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <Image
                    source={item.bannerImage}
                    resizeMode="contain"
                    style={{
                      width: SIZES.width * 0.8,
                      height: SIZES.width * 0.8,
                      marginBottom: -SIZES.padding,
                    }}
                  />
                </View>
              </View>

              {/* Detail  */}
              <View
                style={{
                  flex: 1,
                  marginBottom: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: SIZES.radius,
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.fonts.semibold,
                    fontSize: 25,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    marginTop: 30,
                    textAlign: "center",
                    color: theme.colors.text.secondary,
                    paddingHorizontal: SIZES.padding,
                    fontFamily: theme.fonts.monospace,
                    lineHeight: 25,
                  }}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />
      {renderFooter()}
    </View>
  );
};

export default OnBoarding;

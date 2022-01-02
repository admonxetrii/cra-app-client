import React from "react";
import {
  View,
  Text,
  Animated,
  ScrollView,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";

import { COLORS, FONTS, SIZES, icons, constants } from "../../../constants";
import { IconButton, TextButtonWithIcon } from "..";
import { theme } from "../../infrastructure/theme";

const FilterSection = ({ containerStyle, title, children }) => {
  return (
    <View
      style={{
        marginTop: SIZES.padding,
        ...containerStyle,
      }}
    >
      <Text style={{ ...FONTS.h3 }}>{title}</Text>
      {children}
    </View>
  );
};

const FilterModal = ({ isVisible, onClose }) => {
  const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const [showFilterModal, setShowFilterModal] = React.useState(isVisible);

  const [rating, setRating] = React.useState(1);

  React.useEffect(() => {
    if (showFilterModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => onClose());
    }
  }, [showFilterModal]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 480],
  });

  function renderRating() {
    return (
      <FilterSection title="Ratings" containerStyle={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {constants.ratings.map((item, index) => (
            <TextButtonWithIcon
              key={`Ratings-${index}`}
              containerStyle={{
                flex: 1,
                height: 50,
                margin: 5,
                alignItems: "center",
                borderRadius: SIZES.base,
                backgroundColor:
                  item.id == rating
                    ? theme.colors.brand.primary
                    : COLORS.lightGray2,
              }}
              label={item.label}
              labelStyle={{
                color: item.id == rating ? COLORS.white : COLORS.gray,
              }}
              icon={icons.star}
              iconStyle={{
                tintColor: item.id == rating ? COLORS.white : COLORS.gray,
              }}
              onPress={() => setRating(item.id)}
            />
          ))}
        </View>
      </FilterSection>
    );
  }

  function renderTags() {
    return <FilterSection title="Tags"></FilterSection>;
  }

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.transparentBlack7,
        }}
      >
        {/* Transparent Background  */}
        <TouchableWithoutFeedback
          onPress={() => {
            setShowFilterModal(false);
          }}
        >
          <View
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          />
        </TouchableWithoutFeedback>

        <Animated.View
          style={{
            position: "absolute",
            left: 0,
            top: modalY,
            width: "100%",
            height: "100%",
            padding: SIZES.padding,
            borderTopRightRadius: SIZES.padding,
            borderTopLeftRadius: SIZES.padding,
            backgroundColor: "white",
          }}
        >
          {/* Header  */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ flex: 1, ...FONTS.h3, fontSize: 18 }}>
              FILTER YOUR SEARCH
            </Text>
            <IconButton
              containerStyle={{
                borderWidth: 2,
                borderRadius: SIZES.radius,
                borderColor: COLORS.gray2,
              }}
              icon={icons.cross}
              iconStyle={{ tintColor: COLORS.gray2 }}
              onPress={() => setShowFilterModal(false)}
            />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 250,
            }}
          >
            {/* Ratings  */}
            {renderRating()}

            {/* Tags  */}
            {renderTags()}
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModal;

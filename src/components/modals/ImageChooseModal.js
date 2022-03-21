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
import { IconButton, PrimaryButton, TextButton, TextButtonWithIcon } from "..";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

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

const ImageChooseModal = ({ isVisible, onClose }) => {
  const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const [showImageChooseModal, setShowImageChooseModal] =
    React.useState(isVisible);

  React.useEffect(() => {
    if (showImageChooseModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => onClose(false));
    }
  }, [showImageChooseModal]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 350],
  });

  function openCamera() {
    const options = {
      storageOption: {
        path: "images",
        mediaType: "photo",
      },
      includeBase64: true,
    };

    launchCamera(options, (response) => {
      console.log("Response = ", response);
      if (response.didCancel) {
        console.log("User cancelled image Picker");
      } else if (response.error) {
        console.log("ImagePicker error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: "data:image/jpeg;base64," + response.base64 };
      }
    });
  }

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.transparentBlack7,
          height: "100%",
        }}
      >
        {/* Transparent Background  */}
        <TouchableWithoutFeedback
          onPress={() => {
            setShowImageChooseModal(false);
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
              CHOOSE YOUR IMAGE
            </Text>
            <IconButton
              containerStyle={{
                borderWidth: 2,
                borderRadius: SIZES.radius,
                borderColor: COLORS.gray2,
              }}
              icon={icons.cross}
              iconStyle={{ tintColor: COLORS.gray2 }}
              onPress={() => setShowImageChooseModal(false)}
            />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 250,
            }}
          >
            {/* Buttons  */}
            <FilterSection title={"Camera"}>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <PrimaryButton
                  icon={icons.camera}
                  disabled={false}
                  buttonContainerStyle={{
                    height: 45,
                    width: "100%",
                    borderRadius: 50,
                    marginTop: SIZES.radius,
                  }}
                  label={"Take From Camera"}
                  labelStyle={{ color: "white", ...FONTS.h3 }}
                  onPress={() => {
                    openCamera();
                  }}
                />
              </View>
            </FilterSection>

            <FilterSection title={"Photos"}>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <PrimaryButton
                  icon={icons.gallary}
                  disabled={false}
                  buttonContainerStyle={{
                    height: 45,
                    width: "100%",
                    borderRadius: 50,
                    marginTop: SIZES.radius,
                  }}
                  label={"Choose From Photos"}
                  labelStyle={{ color: "white", ...FONTS.h3 }}
                  onPress={() => console.log("photos")}
                />
              </View>
            </FilterSection>

            {/* Tags  */}
            {/* {renderTags()} */}
          </ScrollView>
          {/* Apply filter button 
          <View
            style={{
              position: "absolute",
              top: "30%",
              left: 0,
              right: 0,
              paddingHorizontal: SIZES.padding,
              paddingVertical: SIZES.radius,
              backgroundColor: COLORS.white,
            }}
          >
            <PrimaryButton
              icon={icons.search}
              disabled={false}
              buttonContainerStyle={{
                height: 55,
                width: "100%",
                borderRadius: 50,
                marginTop: SIZES.radius,
              }}
              label={"Apply Filter"}
              labelStyle={{ color: "white", ...FONTS.h2 }}
              onPress={() => console.log("filtered")}
            />
          </View> */}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default ImageChooseModal;

import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import { SIZES, icons, COLORS, FONTS, images } from "../../../constants";
import { Header } from "..";
import { IconButton } from "../../components";
import { theme } from "../../infrastructure/theme";
import { useDispatch, useSelector } from "react-redux";
import { goBack, navigate } from "../../store/navigation/navigationAction";
import { logout } from "../../store/auth/authAction";

const EditProfile = () => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.auth?.user);

  // console.log("userdata", userData);

  const userImage = () => {
    if (userData?.profile_picture != null) {
      return userData?.profile_picture;
    } else if (userData?.gender == "male") {
      return images.male;
    } else {
      return images.female;
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  function renderHeader() {
    return (
      <Header
        title="EDIT PROFILE"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: theme.colors.brand.primary,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: theme.colors.brand.primary,
            }}
            onPress={() => dispatch(goBack())}
          />
        }
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header  */}
      {renderHeader()}

      {/* Body */}
      <View
        style={{
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Profile Details for Edit  */}
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Avatar.Image
            size={100}
            source={userImage()}
            style={{ backgroundColor: theme.colors.brand.primary }}
          />
        </View>
      </View>
    </View>
  );
};
export default EditProfile;

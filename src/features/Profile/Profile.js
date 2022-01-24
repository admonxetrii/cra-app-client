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
import { IconButton, ProfileButton } from "../../components";
import { theme } from "../../infrastructure/theme";
import { useDispatch, useSelector } from "react-redux";
import { goBack, navigate } from "../../store/navigation/navigationAction";
import { logout } from "../../store/auth/authAction";
import { render } from "react-dom";

const Profile = () => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.auth?.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  function renderHeader() {
    return (
      <Header
        title="PROFILE"
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
        rightComponent={
          <IconButton
            icon={icons.edit}
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

  function renderButtons() {
    return (
      <View
        style={{
          marginTop: 30,
        }}
      >
        {/* Favourite  */}
        <ProfileButton
          icon={icons.favourite}
          label={"My Favourites"}
          line={true}
          onPress={() => dispatch(goBack())}
        />

        {/* Change Password  */}
        <ProfileButton
          icon={icons.lock}
          label={"Change Password"}
          line={true}
          onPress={() => dispatch(navigate("ChangePassword"))}
        />

        {/* Edit Profile */}
        <ProfileButton
          icon={icons.edit}
          label={"Edit Profile"}
          line={true}
          onPress={() => dispatch(goBack())}
        />

        {/* About Us  */}
        <ProfileButton
          icon={icons.info}
          label={"About US"}
          line={true}
          onPress={() => dispatch(goBack())}
        />

        {/* About Us  */}
        <ProfileButton
          icon={icons.privacy}
          label={"Privacy Policy"}
          line={true}
          onPress={() => dispatch(goBack())}
        />

        {/* Log Out */}
        <ProfileButton
          icon={icons.logout}
          label={"Log Out"}
          line={false}
          labelStyle={{
            color: theme.colors.brand.primary,
          }}
          onPress={handleLogout}
        />
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
      {/* Header  */}
      {renderHeader()}

      {/* Body */}
      <View
        style={{
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Profile Details  */}
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Avatar.Image size={100} source={images.profile} />
          <Text
            style={{ ...FONTS.h2 }}
          >{`${userData?.first_name} ${userData?.last_name}`}</Text>
          <Text
            style={{ ...FONTS.body4, color: COLORS.darkGray2 }}
          >{`@${userData?.username}`}</Text>
        </View>

        {/* Content  */}
        {renderButtons()}
      </View>
      <Text
        style={{
          position: "absolute",
          bottom: 10,
          justifyContent: "center",
          alignSelf: "center",
          ...FONTS.body4,
        }}
      >
        Powered by Pycemon Tech Pvt. Ltd.
      </Text>
    </View>
  );
};
export default Profile;

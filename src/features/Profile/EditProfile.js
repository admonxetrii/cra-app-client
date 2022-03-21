import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { SIZES, icons, COLORS, FONTS, images } from "../../../constants";
import { EditProfileComponents, Header } from "..";
import { FormInput, IconButton } from "../../components";
import { theme } from "../../infrastructure/theme";
import { useDispatch, useSelector } from "react-redux";
import {
  goBack,
  navigate,
  replace,
} from "../../store/navigation/navigationAction";
import { logout } from "../../store/auth/authAction";
import KeyboardAvoidingWrapper from "../../components/wrapper/keyboardAvoidingWapper";

const EditProfile = () => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.auth?.user);

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
        rightComponent={
          <IconButton
            icon={icons.home}
            disabled={true}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.white,
            }}
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
      {/* Edit Profile Components */}
      <KeyboardAvoidingWrapper flex={1}>
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            marginBottom: SIZES.padding,
          }}
        >
          {userData && <EditProfileComponents userData={userData} />}
        </View>
      </KeyboardAvoidingWrapper>
    </View>
  );
};
export default EditProfile;

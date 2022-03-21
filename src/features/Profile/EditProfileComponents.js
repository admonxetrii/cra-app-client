import React from "react";
import { View, Text, Image } from "react-native";
import { Avatar } from "react-native-paper";
import { FormInput, IconButton, ImageChooseModal } from "../../components";
import { utils } from "../../utils";
import { FONTS, SIZES, COLORS, icons, images } from "../../../constants";
import { theme } from "../../infrastructure/theme";

const EditProfileComponents = ({ userData }) => {
  const [imageChooserVisible, setImageChooserVisible] = React.useState(false);
  const [fullname, setFullname] = React.useState(
    userData.first_name && userData.last_name
      ? `${userData.first_name} ${userData.last_name}`
      : ""
  );
  const [phone, setPhone] = React.useState(
    userData.phone_number ? `${userData.phone_number}` : ""
  );
  const [email, setEmail] = React.useState(
    userData.email ? `${userData.email}` : ""
  );

  const userImage = () => {
    if (userData?.profile_picture != null) {
      return userData?.profile_picture;
    } else if (userData?.gender == "male") {
      return images.male;
    } else {
      return images.female;
    }
  };
  const [fullnameError, setFullnameError] = React.useState("");
  const [phoneError, setPhoneError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  return (
    <View
      style={{
        marginTop: SIZES.padding * 1,
      }}
    >
      {imageChooserVisible && (
        <ImageChooseModal
          isVisible={imageChooserVisible}
          onClose={setImageChooserVisible}
        />
      )}
      <View
        style={{
          alignSelf: "center",
        }}
      >
        <IconButton
          icon={icons.edit}
          containerStyle={{
            position: "absolute",
            width: 30,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 50,
            borderColor: theme.colors.brand.primary,
            backgroundColor: "white",
            zIndex: 3,
            bottom: 7,
            right: 0,
          }}
          iconStyle={{
            width: 15,
            height: 15,
            tintColor: theme.colors.brand.primary,
          }}
          onPress={() => setImageChooserVisible(true)}
        />
        <Avatar.Image
          size={100}
          source={userImage()}
          style={{ backgroundColor: theme.colors.brand.primary }}
        />
      </View>
      <View
        style={{
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ ...FONTS.h3, color: COLORS.black }}>{`${
          userData?.first_name != "" ? userData?.first_name : "Anonymous"
        } ${userData?.last_name != "" ? userData?.last_name : ""}`}</Text>
        <Text
          style={{ ...FONTS.body4, color: COLORS.darkGray2 }}
        >{`@${userData?.username}`}</Text>
      </View>
      <FormInput
        label={"Full Name"}
        autoCompleteType="name"
        onChange={(text) => {
          // validate username
          utils.validateFullName(text.trim(), setFullnameError);
          setFullname(text.trim());
        }}
        containerStyle={{
          marginTop: SIZES.padding,
        }}
        errorMsg={fullnameError}
        placeholder={"Enter your Full Name here..."}
        defaultValue={fullname}
        appendComponent={
          <View
            style={{
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
              height: 55,
              width: 55,
              right: 38,
            }}
          >
            <Image
              source={
                fullname == "" || (fullname != "" && fullnameError == "")
                  ? fullname != "" && icons.check
                  : icons.wrong
              }
              style={{
                height: 20,
                resizeMode: "contain",
                tintColor:
                  fullname == ""
                    ? COLORS.gray
                    : fullname != "" && fullnameError == ""
                    ? COLORS.green
                    : COLORS.red,
              }}
            />
          </View>
        }
        icon={icons.user}
      />
      <FormInput
        label={"Email"}
        onChange={(text) => {
          // validate email
          utils.validateEmail(text.trim(), setEmailError);
          setEmail(text.trim());
        }}
        containerStyle={{
          marginTop: SIZES.radius,
        }}
        errorMsg={emailError}
        placeholder={"Enter your email here..."}
        defaultValue={email}
        appendComponent={
          <View
            style={{
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
              height: 55,
              width: 55,
              right: 38,
            }}
          >
            <Image
              source={
                email == "" || (email != "" && emailError == "")
                  ? email != "" && icons.check
                  : icons.wrong
              }
              style={{
                height: 20,
                resizeMode: "contain",
                tintColor:
                  email == ""
                    ? COLORS.gray
                    : email != "" && emailError == ""
                    ? COLORS.green
                    : COLORS.red,
              }}
            />
          </View>
        }
        icon={icons.email}
      />
      <FormInput
        label={"Phone number"}
        onChange={(text) => {
          // validate phone
          utils.validatePhone(text, setPhoneError);
          setPhone(text);
        }}
        keyboardType="numeric"
        containerStyle={{
          marginTop: SIZES.radius,
        }}
        errorMsg={phoneError}
        placeholder={"Enter your phone number here..."}
        defaultValue={phone}
        appendComponent={
          <View
            style={{
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
              height: 55,
              width: 55,
              right: 38,
            }}
          >
            <Image
              source={
                phone == "" || (phone != "" && phoneError == "")
                  ? phone != "" && icons.check
                  : icons.wrong
              }
              style={{
                height: 20,
                resizeMode: "contain",
                tintColor:
                  phone == ""
                    ? COLORS.gray
                    : phone != "" && phoneError == ""
                    ? COLORS.green
                    : COLORS.red,
              }}
            />
          </View>
        }
        icon={icons.mobile}
      />
    </View>
  );
};

export default EditProfileComponents;

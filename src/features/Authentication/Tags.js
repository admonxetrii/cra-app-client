import React, { useState } from "react";
import { View, Text } from "react-native";

import { COLORS, FONTS, SIZES, svg, icons } from "../../../constants";
import { TextButton, PrimaryButton } from "../../components";
import { AuthLayout } from "..";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { theme } from "../../infrastructure/theme";
import { useDispatch, useSelector } from "react-redux";
import { fetchTagReq, saveUserTagReq } from "../../store/auth/authAction";
import { Chip } from "react-native-paper";

const Tags = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchTagReq());
  }, []);

  const tags = useSelector((state) => state.auth.tags?.data);

  const [selectedTags, setSelectedTags] = useState([]);

  const saveUserTags = useSelector((state) => state.auth.saveUserTags);

  const handleSelectTags = (id) => {
    if (selectedTags.includes(id)) {
      return handleDeSelectTags(id);
    }
    return setSelectedTags((prevState) => [...prevState, id]);
  };

  const handleDeSelectTags = (id) =>
    setSelectedTags((prevState) => prevState.filter((item) => item !== id));

  const username = useSelector((state) => state.auth.user.username);
  const handleTagSave = () => {
    dispatch(
      saveUserTagReq({
        username,
        tags: selectedTags,
      })
    );
  };

  console.log(tags, "<______--------");

  return (
    <AuthLayout
      banner={svg.tags}
      bannerContainerStyle={{
        width: SIZES.width * 0.4,
        height: SIZES.width * 0.4,
      }}
      imageContainerStyle={{
        width: SIZES.width * 0.4,
        height: SIZES.width * 0.4,
      }}
      title={"Select your preference"}
      subTitle={
        "Please select at least 5 preferred tags based on your likings."
      }
      titleContainerStyle={{
        marginTop: SIZES.padding,
      }}
    >
      {/* OTP input section  */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: 5,
          justifyContent: "center",
        }}
      >
        {tags?.map((tag, index) => (
          <Chip
            key={tag.id}
            selected={selectedTags.includes(tag.id)}
            style={{
              width: "auto",
              marginRight: 14,
              marginTop: 12,
              backgroundColor: selectedTags.includes(tag.id)
                ? theme.colors.brand.primary
                : COLORS.lightGray1,
            }}
            selectedColor={selectedTags.includes(tag.id) ? "white" : "black"}
            textStyle={{
              fontWeight: selectedTags.includes(tag.id) ? "700" : "400",
            }}
            icon={{
              uri: tag.icon,
            }}
            onPress={() => handleSelectTags(tag.id)}
          >
            {tag.tags}
          </Chip>
        ))}
      </View>

      {/* Footer  */}

      <View
        style={{
          marginTop: SIZES.padding,
        }}
      >
        <PrimaryButton
          icon={icons.login}
          buttonContainerStyle={{
            height: 55,
            width: "100%",
            borderRadius: 50,
            marginTop: SIZES.radius,
          }}
          label={saveUserTags.loadingButtonContent}
          disabled={selectedTags.length < 5 || saveUserTags?.loading}
          labelStyle={{ color: "white", ...FONTS.h2 }}
          onPress={handleTagSave}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: SIZES.padding,
            flexWrap: "wrap",
          }}
        ></View>
      </View>
    </AuthLayout>
  );
};

export default Tags;

import React from "react";
import { View, Text } from "react-native";

import { COLORS, FONTS, SIZES, svg, icons } from "../../../constants";
import { TextButton, PrimaryButton } from "../../components";
import { AuthLayout } from "..";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { theme } from "../../infrastructure/theme";

const Otp = () => {
  const [timer, setTimer] = React.useState(60);

  React.useEffect(() => {
    let interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          return prevTimer;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <AuthLayout
      banner={svg.otp}
      bannerContainerStyle={{
        width: SIZES.width * 0.6,
        height: SIZES.width * 0.6,
      }}
      imageContainerStyle={{
        width: SIZES.width * 0.6,
        height: SIZES.width * 0.6,
      }}
      title={"Verify your Account"}
      subTitle={
        "An authentication code has been sent to your email. Please verify it."
      }
      titleContainerStyle={{
        marginTop: SIZES.padding,
      }}
    >
      {/* OTP input section  */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}
      >
        <OTPInputView
          pinCount={6}
          style={{
            width: "100%",
            height: 55,
          }}
          codeInputFieldStyle={{
            width: 45,
            height: 45,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            color: COLORS.black,
            ...FONTS.h3,
          }}
        />

        {/* Countdown section  */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: SIZES.padding,
          }}
        >
          <Text
            style={{
              color: COLORS.darkGray,
              ...FONTS.body3,
            }}
          >
            Didn't receive code?
          </Text>
          <TextButton
            buttonContainerStyle={{
              marginLeft: SIZES.base,
              backgroundColor: null,
            }}
            label={timer > 0 ? `Resend (${timer}s)` : "Resend OTP"}
            disabled={timer == 0 ? false : true}
            labelStyle={{
              color:
                timer == 0
                  ? theme.colors.brand.primary
                  : theme.colors.text.disabled,
              ...FONTS.h3,
            }}
          />
        </View>
      </View>

      {/* Footer  */}

      <View
        style={{
          marginTop: SIZES.padding * 3,
        }}
      >
        <PrimaryButton
          icon={icons.profile}
          buttonContainerStyle={{
            height: 55,
            width: "100%",
            borderRadius: 50,
            marginTop: SIZES.radius,
          }}
          label={"Verify Account"}
          labelStyle={{ color: "white", ...FONTS.h2 }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: SIZES.padding,
          }}
        >
          <Text style={{ ...FONTS.body4 }}>
            By signing up, you are going to agree our{" "}
          </Text>
          <TextButton
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            label={"Terms and Conditions"}
            labelStyle={{
              color: theme.colors.brand.primary,
              ...FONTS.h4,
            }}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

export default Otp;
import React from "react";
import { StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const SignInButton = ({
  onPress,
  title,
  buttonColor,
  borderRadius,
  textColor,
  height,
  width,
  fontSize,
  fontWeight,
  fontFamily,
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled = {disabled}
      style={[
        styles.button,
        {
          backgroundColor: buttonColor,
          borderRadius: borderRadius,
          height: height,
          width: width,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: textColor,
            fontSize: fontSize,
            fontWeight: fontWeight,
            fontFamily: fontFamily,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    marginTop: height * 0.02,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default SignInButton;

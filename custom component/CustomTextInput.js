import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const CustomTextInput = ({
  onChangeText,
  iconPosition,
  icon,
  style,
  value,
  label,
  error = "",
  blurColor,
  paddingVertical,

  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === "left") {
        return "row";
      } else if (iconPosition === "right") {
        return "row-reverse";
      }
    }
    return "row";
  };

  const getBorderColor = () => {
    if (error) {
      return "red";
    }

    if (focused) {
      return blurColor;
    } else {
      return "rgba(0, 0, 0, 0.1)";
    }
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View
        style={[
          styles.wrapper,
          {
            borderColor: getBorderColor(),
            flexDirection: getFlexDirection(),
          },
          style,
        ]}
      >
        <View>{icon && icon}</View>

        <TextInput
          style={[styles.textInput]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: height * 0.01,
    alignItems: "center",
  },
  label: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  wrapper: {
    position: "relative",
    alignItems: "center",
    width: width * 0.9,
    height: height * 0.06,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    elevation: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textInput: {
    flex: 1,
    color: "#000",
  },
  error: {
    color: "red",
    paddingTop: 4,
    fontSize: 12,
  },
});

export default CustomTextInput;

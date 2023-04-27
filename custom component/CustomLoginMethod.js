import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    width: width * 0.4,
    height: height * 0.05,

    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.07,
    shadowRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  logo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  text: {
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.3,
    color: "#000000",
  },
});

const CustomLoginMethodContainer = ({ uri, text, image }) => {
  return (
    <View style={styles.container}>
      <Image
        source={uri ? { uri } : image ? image : null}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default CustomLoginMethodContainer;

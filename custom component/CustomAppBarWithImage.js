import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../assets/Colors";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const CustomAppBarWithImage = ({ title, imagePath }) => {
  return (
    <View style={styles.container}>
      <Image source={imagePath} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CustomAppBarWithImage;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: height * 0.1,
    backgroundColor: Colors.white,
  },
  image: {
    width: height * 0.15,
    height: height * 0.15,
  },
  title: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: "bold",
  },
});

import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const CustomFilterOptionButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <FontAwesomeIcon name="filter" />
      </TouchableOpacity>
    </View>
  );
};
export default CustomFilterOptionButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E1E1E1",
    width: height * 0.05,
    height: height * 0.05,
    borderRadius: 10,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

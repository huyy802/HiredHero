import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const CustomCompanyPicker = ({
  onPress,
  companyName,

  imagePath,
 
}) => {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={imagePath} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.jobTitle}>{companyName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
      width: "100%",
      height: 50,
      borderWidth: 1,
      borderColor: "#F3F3F4",
      borderRadius: 20,
    },
    imageContainer: {
      width: 30,
      height: 30,
      borderRadius: 5,
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
    },
    content: {
      marginLeft: 15,
      flex: 1,
    },
    jobTitle: {
      fontSize: 16,
      fontWeight: "bold",
    },
    company: {
      fontSize: 14,
      color: "#888",
    },
  
  });

export default CustomCompanyPicker
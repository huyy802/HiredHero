import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const CustomCompanyCard = ({
  onPress,
  companyName,
  location,
  imagePath,
  established,
}) => {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={imagePath} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.jobTitle}>{companyName}</Text>
        <Text style={styles.company}>{location}</Text>
        <View style={styles.locationAndType}>
          <Text style={styles.location}>Established: {established}</Text>
          {/* <Text> - </Text>
          <Text style={styles.type}>{type}</Text> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingLeft: 20,
    paddingRight: 28,
    gap: 12,
    width: 380,
    height: 92,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#F3F3F4",
    borderRadius: 20,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 15,
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
  type: {
    fontSize: 14,
    color: "#888",
  },
  locationAndType: {
    flexDirection: "row",
  },
  actionContainer: {
    alignItems: "flex-end",
  },
  saveButton: {
    padding: 4,
  },
  salary: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
  },
});

export default CustomCompanyCard;

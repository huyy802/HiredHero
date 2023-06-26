import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faBriefcase,
  faBuilding,
  faUser,
  faBookBookmark,
} from "@fortawesome/free-solid-svg-icons";
import Colors from "../assets/Colors";
import { useNavigation } from "@react-navigation/core";

import { useRoute } from "@react-navigation/native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const CustomBottomNavigation = () => {
  const route = useRoute();
  const routeName = route.name;
  if (
    routeName !== "HomeScreen" &&
    routeName !== "ProfileScreen" &&
    routeName !== "BookmarkScreen"
  ) {
    return null; // Don't render the bottom navigation bar
  }
  const [activeButton, setActiveButton] = useState("Home");
  const navigation = useNavigation();
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "Home") {
      navigation.navigate("HomeScreen");
    } else if (buttonName === "Bookmark") {
      navigation.navigate("BookmarkScreen");
    } else if (buttonName === "Profile") {
      navigation.navigate("ProfileScreen");
    }
  };

  useState(() => {
    setActiveButton(
      routeName == "HomeScreen"
        ? "Home"
        : routeName == "BookmarkScreen"
        ? "Bookmark"
        : "Profile"
    );
  }, [routeName]);

  const renderButton = (buttonName, buttonIcon) => {
    const isActive = activeButton === buttonName;

    return (
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          isActive
            ? styles.activeButtonContainer
            : styles.inactiveButtonContainer,
        ]}
        onPress={() => handleButtonClick(buttonName)}
      >
        <View style={styles.buttonContent}>
          <FontAwesomeIcon icon={buttonIcon} color={Colors.black} size={24} />
          {isActive && <Text style={styles.buttonText}>{buttonName}</Text>}
        </View>
      </TouchableOpacity>
    );
  };

  return (

    <View style={styles.container}>
      {renderButton("Home", faHome)}
      {renderButton("Job", faBriefcase)}
      {renderButton("Bookmark", faBookBookmark)}
      {renderButton("Profile", faUser)}
    </View>
   
  );
};

export default CustomBottomNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: height * 0.08,
    width: width * 0.9,
    backgroundColor: Colors.white,
    borderRadius: 20,
    marginBottom: 10,
    marginTop:10,
    paddingHorizontal: 10,
    elevation: 20,
    alignSelf: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  activeButtonContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  inactiveButtonContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  buttonText: {
    color: Colors.black,
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
  },
});

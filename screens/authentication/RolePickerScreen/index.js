import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserTie, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const RolePickerScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const handleNext = () => {
    // Perform actions when the "Next" button is clicked
    // Example: Navigation logic, data submission, etc.
    console.log("Next button clicked: ", selectedOption);
    if (selectedOption === "job")
      navigation.navigate("SignupScreenForJobSeeker");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/app_logo_slogan.png")}
        style={styles.logo}
      />
      <View style={styles.borderContainer}>
        <FontAwesomeIcon
          icon={faQuestionCircle}
          size={30}
          style={styles.icon}
        />
        <Text style={styles.title}>What are you looking for?</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={[
              styles.optionContainer,
              //   selectedOption === "job" && styles.selectedOption,
            ]}
            onPress={() => handleOptionClick("job")}
          >
            <View style={styles.circleContainer}>
              <FontAwesomeIcon
                icon={faUserTie}
                size={30}
                style={[
                  styles.optionIcon,
                  selectedOption === "job" && styles.selectedOptionText,
                ]}
              />
            </View>
            <Text
              style={[
                styles.optionText,
                selectedOption === "job" && styles.selectedOptionText,
              ]}
            >
              I want a job
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionContainer,
              //   selectedOption === "employee" && styles.selectedOption,
            ]}
            onPress={() => handleOptionClick("employee")}
          >
            <View style={styles.circleContainer}>
              <FontAwesomeIcon
                icon={faUserTie}
                size={30}
                style={[
                  styles.optionIcon,
                  selectedOption === "employee" && styles.selectedOptionText,
                ]}
              />
            </View>
            <Text
              style={[
                styles.optionText,
                selectedOption === "employee" && styles.selectedOptionText,
              ]}
            >
              I want an employee
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
  nextButton: {
    marginTop: 20,
    backgroundColor: "#000000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  nextButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  logo: {
    width: width * 0.5,
    height: width * 0.5,
  },
  borderContainer: {
    borderColor: "#999999",
    borderWidth: 1,
    padding: 20,
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
  },
  icon: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: "row",
  },
  optionContainer: {
    marginRight: 10,
    borderWidth: 2,
    borderColor: "#00000000",
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
  },
  selectedOption: {
    borderColor: "#000000",
  },
  circleContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
  },
  optionIcon: {
    color: "#000000",
  },
  optionText: {
    marginTop: 10,
    fontSize: 16,
  },
  selectedOptionText: {
    fontWeight: "bold",
  },
});

export default RolePickerScreen;

import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Colors from "../assets/Colors";
import { useNavigation } from "@react-navigation/core";
const CustomAppBarWithAction = ({ title }) => {
  const goBack = () => {
    const navigation = useNavigation();
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <FontAwesomeIcon icon={faArrowLeft} color={Colors.black} size={18} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default CustomAppBarWithAction;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 36,
    padding: 8.18182,
    gap: 8.18,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 9.81818,
  },
  backButton: {
    flex: 0,
    flexGrow: 0,
    marginRight: 8.18,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: "bold",
  },
});

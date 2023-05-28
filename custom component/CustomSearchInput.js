import React, { useState } from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const CustomSearchInput = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    if (searchText.trim().length > 0) {
      onSubmit(searchText.trim());
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#888"
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
      />
      <FontAwesomeIcon
        name="search"
        size={20}
        color="#888"
        style={styles.searchIcon}
        onPress={handleSearch}
      />
    </View>
  );
};

export default CustomSearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: "#F4F6F9",
    borderRadius: 15,
  },
  input: {
    height: height * 0.05,
    width: width * 0.6,
  },
  searchIcon: {
    marginLeft: 20,
  },
});

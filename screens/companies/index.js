import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, Animated, Alert } from "react-native";
import styles from "./style.js";
import CustomAppBarWithImage from "../../custom component/CustomAppBarWithImage";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomSearchInput from "../../custom component/CustomSearchInput.js";
import CustomFilterOptionButton from "../../custom component/CustomFilterOptionButton.js";
import { FlatList } from "react-native-gesture-handler";
import CustomJobCard from "../../custom component/CustomJobCard.js";
import * as Animatable from "react-native-animatable";
import { useDispatch } from "react-redux";
import { getAPIActionJSON } from "../../api/ApiActions.js";
import { createStackNavigator } from '@react-navigation/stack';
import CustomBottomNavigation from "../../custom component/CustomBottomNavigation.js";
import CustomCompanyCard from "../../custom component/CustomCompanyCard.js";

const filterOptions = ["All", "IT", "Finance", "Another Option"]; // Add your filter options here

const SeparatorComponent = () => {
  return <View style={styles.separatorComponent} />;
};
const CompanyScreen = ({navigation}) => {
  const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  const [searchQuery, setSearchQuery] = useState("");
  const [companyData, setCompanyData] = useState([]);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");
  const filterOptionsHeight = useRef(new Animated.Value(0)).current;
  const handleResponse = (response) => {
    if (!response.success) {
      Alert.alert(response.message);
      return;
    }
    setCompanyData(response.message);
  };
  const getData = () => {
    dispatch(
      getAPIActionJSON("getAllCompanies", null, null, "", (e) => handleResponse(e))
    );
  };
  useEffect(() => {
    getData();
  }, []);
  const handleOptionPress = (option) => {
    setSelectedOption(option);
    setSearchQuery("");
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredData = companyData.filter(
    (item) =>
      (selectedOption === "All" || item.industry === selectedOption) &&
      (searchQuery === "" ||
        item.jobName.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handlePressJob = async (event, item) => {
    
    // dispatch(
    //   getAPIActionJSON("getJob", null, item, "", (e) => handleResponse(e))
    // );

    // navigation.navigate('JobDetailScreen', { job: item })
  }

  const toggleFilterOptions = () => {
    if (showFilterOptions) {
      Animated.timing(filterOptionsHeight, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }).start(() => {
        setShowFilterOptions(false);
      });
    } else {
      setShowFilterOptions(true);
      Animated.timing(filterOptionsHeight, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  };
  return (
    <SafeAreaView style={styles.screen}>
      <CustomAppBarWithImage
        title="Company"
        imagePath={require("../../assets/images/app_logo.png")}
      />
      <View style={styles.container}>
        <CustomSearchInput onSubmit={handleSearch} />
        <CustomFilterOptionButton onPress={toggleFilterOptions} />
      </View>
      {showFilterOptions && (
        <Animatable.View
          animation="fadeInDown"
          duration={500}
          style={[
            styles.filterOptionsContainer,
            { height: filterOptionsHeight },
          ]}
        >
          {filterOptions.map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.filterOptionButton,
                selectedOption === option && styles.selectedOptionButton,
                selectedOption !== option && styles.unselectedOptionButton,
              ]}
              onPress={() => handleOptionPress(option)}
            >
              <Text
                style={[
                  styles.filterOptionButtonText,
                  selectedOption === option && styles.selectedOptionText,
                  selectedOption !== option && styles.unselectedOptionText,
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </Animatable.View>
      )}
      <FlatList
        ItemSeparatorComponent={SeparatorComponent}
        style={styles.listContainer}
        data={companyData}
        renderItem={({ item }) => (
          <CustomCompanyCard       
            onPress = {() =>{ navigation.navigate('CompanyDetailScreen', { company: item }) }}
            location={item.location}
            companyName={item.companyName}
            established={item.establishedYear}
            imagePath={require("../../assets/images/test/airbnb.png")}
          />
        )}
      />
      {/* <View style={styles.bottomNavigationContainer}>
        <CustomBottomNavigation />
      </View> */}
    </SafeAreaView>
  );
};

export default CompanyScreen;


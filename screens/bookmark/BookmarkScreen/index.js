import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, Animated, Alert } from "react-native";
import styles from "./style.js";
import CustomAppBarWithImage from "../../../custom component/CustomAppBarWithImage";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomSearchInput from "../../../custom component/CustomSearchInput.js";
import CustomFilterOptionButton from "../../../custom component/CustomFilterOptionButton.js";
import { FlatList } from "react-native-gesture-handler";
import CustomJobCard from "../../../custom component/CustomJobCard.js";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector } from "react-redux";
import { getAPIActionJSON } from "../../../api/ApiActions.js";
import { createStackNavigator } from "@react-navigation/stack";
import CustomBottomNavigation from "../../../custom component/CustomBottomNavigation.js";

const filterOptions = ["All", "IT", "Finance", "Another Option"]; // Add your filter options here

const SeparatorComponent = () => {
  return <View style={styles.separatorComponent} />;
};
const BookmarkScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [jobData, setJobData] = useState([]);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");
  const filterOptionsHeight = useRef(new Animated.Value(0)).current;
  const jobs = useSelector((state) => state.user.bookmarks);
  useEffect(() => {}, [jobs]);
  const handleOptionPress = (option) => {
    setSelectedOption(option);
    setSearchQuery("");
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredData = jobData.filter(
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
  };

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
        title="Bookmark"
        imagePath={require("../../../assets/images/app_logo.png")}
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
      {jobs.length === 0 ? (
        <Text>You don't have any bookmark.</Text>
      ) : (
        <FlatList
          ItemSeparatorComponent={SeparatorComponent}
          style={styles.listContainer}
          data={jobs}
          renderItem={({ item }) => (
            <CustomJobCard
              onPress={() => {
                navigation.navigate("JobDetailScreen", { job: item.job });
              }}
              nameJob={item.job.jobTitle}
              companyName={item.job.company.companyName}
              // companyName="123"
              location={item.job.location}
              type={item.job.type}
              salary={item.job.salary}
              isSaved={item.job.isSaved}
              imagePath={require("../../../assets/images/test/airbnb.png")}
            />
          )}
        />
      )}
      {/* <View style={styles.bottomNavigationContainer}>
        <CustomBottomNavigation />
      </View> */}
    </SafeAreaView>
  );
};

export default BookmarkScreen;
const dataset = [
  {
    jobName: "Software Engineer",
    companyName: "ABC Inc.",
    location: "New York",
    type: "Full Time",
    salary: 50000,
    isSaved: true,
    industry: "IT",
    imagePath: require("../../../assets/images/test/airbnb.png"),
  },
  {
    industry: "IT",

    jobName: "Software Engineer",
    companyName: "XYZ Corp.",
    location: "San Francisco",
    type: "Part Time",
    salary: 30000,
    isSaved: false,
    imagePath: require("../../../assets/images/test/airbnb.png"),
  },
  {
    industry: "IT",

    jobName: "Software Engineer",
    companyName: "PQR Ltd.",
    location: "Chicago",
    type: "Full Time",
    salary: 60000,
    isSaved: true,
    imagePath: require("../../../assets/images/test/airbnb.png"),
  },
  {
    industry: "Finance",

    jobName: "Software Engineer",
    companyName: "ABC Inc.",
    location: "New York",
    type: "Full Time",
    salary: 50000,
    isSaved: true,
    imagePath: require("../../../assets/images/test/airbnb.png"),
  },
  {
    industry: "Finance",

    jobName: "Software Engineer",
    companyName: "ABC Inc.",
    location: "New York",
    type: "Full Time",
    salary: 50000,
    isSaved: true,
    imagePath: require("../../../assets/images/test/airbnb.png"),
  },
  {
    industry: "Finance",

    jobName: "Software Engineer",
    companyName: "ABC Inc.",
    location: "New York",
    type: "Full Time",
    salary: 50000,
    isSaved: true,
    imagePath: require("../../../assets/images/test/airbnb.png"),
  },
  {
    industry: "IT",

    jobName: "IT Help Desk",
    companyName: "ABC Inc.",
    location: "New York",
    type: "Full Time",
    salary: 50000,
    isSaved: true,
    imagePath: require("../../../assets/images/test/airbnb.png"),
  },
  {
    industry: "Finance",

    jobName: "Software Engineer",
    companyName: "ABC Inc.",
    location: "New York",
    type: "Full Time",
    salary: 50000,
    isSaved: true,
    imagePath: require("../../../assets/images/test/airbnb.png"),
  },
  {
    industry: "Finance",

    jobName: "Software Engineer",
    companyName: "ABC Inc.",
    location: "New York",
    type: "Full Time",
    salary: 50000,
    isSaved: true,
    imagePath: require("../../../assets/images/test/airbnb.png"),
  },
  // Add more objects as needed
];

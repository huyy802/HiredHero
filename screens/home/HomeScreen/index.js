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
import { useDispatch } from "react-redux";
import { getAPIActionJSON } from "../../../api/ApiActions.js";

const filterOptions = ["All", "IT", "Finance", "Another Option"]; // Add your filter options here

const SeparatorComponent = () => {
  return <View style={styles.separatorComponent} />;
};
const HomeScreen = () => {
  const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  const [searchQuery, setSearchQuery] = useState("");
  const [jobData, setJobData] = useState([]);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");
  const filterOptionsHeight = useRef(new Animated.Value(0)).current;
  const handleResponse = (response) => {
    if (!response.success) {
      Alert.alert(response.message);
      return;
    }
    setJobData(response.message);
    console.log("zeessss");
    console.log(jobData);
  };
  const getData = () => {
    dispatch(
      getAPIActionJSON("getAllJobs", null, null, "", (e) => handleResponse(e))
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

  const filteredData = dataset.filter(
    (item) =>
      (selectedOption === "All" || item.industry === selectedOption) &&
      (searchQuery === "" ||
        item.jobName.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
        title="Home"
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
      <FlatList
        ItemSeparatorComponent={SeparatorComponent}
        style={styles.listContainer}
        data={jobData}
        renderItem={({ item }) => (
          <CustomJobCard
            nameJob={item.jobTitle}
            companyName={item.company.companyName}
            location={item.location}
            type={item.type}
            salary={item.salary}
            isSaved={item.isSaved}
            imagePath={require("../../../assets/images/test/airbnb.png")}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
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

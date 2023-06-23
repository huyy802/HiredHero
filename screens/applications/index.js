import React, { useEffect, useRef, useState } from "react";
import { getAPIActionJSON } from "../../api/ApiActions";
import CustomApplicationItem from "../../custom component/CustomApplicationItem";
import { Text,View, Animated, TouchableOpacity } from "react-native";
import CustomAppBarWithImage from "../../custom component/CustomAppBarWithImage";
import styles from "./style.js";
import CustomSearchInput from "../../custom component/CustomSearchInput";
import CustomFilterOptionButton from "../../custom component/CustomFilterOptionButton";
import * as Animatable from "react-native-animatable";
import CustomBottomNavigation from "../../custom component/CustomBottomNavigation";
import { SafeAreaView } from "react-native-safe-area-context";

const filterOptions = ["All", "IT", "Finance", "Another Option"]; // Add your filter options here

const ApplicationScreen = (props) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [jobData, setJobData] = useState([]);
    const [showFilterOptions, setShowFilterOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState("All");
    const filterOptionsHeight = useRef(new Animated.Value(0)).current;

    const handleOptionPress = (option) => {
        setSelectedOption(option);
        setSearchQuery("");
      };

      
    const handleSearch = () => {

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
    }

    return (
        <SafeAreaView style={styles.screen}>
            <CustomAppBarWithImage
                title="Applications"
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
             <CustomApplicationItem
                nameJob = "UI/UX Designer"
                companyName = "AirBNB"
                location = "United States"
                type = "Full Time"
                imagePath = {require("../../assets/images/test/airbnb.png")}
                applyDate = '03/05/2023'
                status = 'pending'
            />
            <CustomApplicationItem
                nameJob = "UI/UX Designer"
                companyName = "AirBNB"
                location = "United States"
                type = "Full Time"
                imagePath = {require("../../assets/images/test/airbnb.png")}
                applyDate = '03/05/2023'
                status = 'reject'
            />
            <CustomApplicationItem
                nameJob = "UI/UX Designer"
                companyName = "AirBNB"
                location = "United States"
                type = "Full Time"
                imagePath = {require("../../assets/images/test/airbnb.png")}
                applyDate = '03/05/2023'
                status = 'interview'
            />
            
             {/* <View style={styles.bottomNavigationContainer}>
                <CustomBottomNavigation />
            </View> */}
        </SafeAreaView>
       
    )
}
export default ApplicationScreen;
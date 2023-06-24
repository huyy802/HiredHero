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
import { useDispatch } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

const filterOptions = ["All", "IT", "Finance", "Another Option"]; // Add your filter options here
const SeparatorComponent = () => {
    return <View style={styles.separatorComponent} />;
  };
const ApplicationScreen = (props) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [searchQuery, setSearchQuery] = useState("");
    const [jobData, setJobData] = useState([]);
    const [showFilterOptions, setShowFilterOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState("All");
    const filterOptionsHeight = useRef(new Animated.Value(0)).current;

    const handleOptionPress = (option) => {
        setSelectedOption(option);
        setSearchQuery("");
      };
    const handleResponse = (response) => {
        if (!response.success) {
            Alert.alert(response.message);
            return;
        }
        setJobData(response.message);
    };
    const getData = () => {
        dispatch(
            //tạm thời
            getAPIActionJSON("getAllAppliesFromUser", null, "", "/646f7e91d8319469c198f606", (e) => handleResponse(e))
        );
    };
    useEffect(() => {
        getData()
    },[])
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
            <FlatList
                ItemSeparatorComponent={SeparatorComponent}
                style={styles.listContainer}
                data={jobData}
                renderItem={({ item }) => (
                    <CustomApplicationItem
                    onPress = {() =>{ navigation.navigate('ApplicationDetailScreen', { application: item }) }}
                    nameJob = {item.job.jobTitle}
                    companyName = {item.job.company.companyName}
                    location = {item.job.location}
                    type = {item.job.type}
                    imagePath = {require("../../assets/images/test/airbnb.png")}
                    applyDate = {item.expired}
                    status = {item.status}/>
                )}
            />
             
           
        </SafeAreaView>
       
    )
}
export default ApplicationScreen;
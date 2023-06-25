import React, { useState, useRef, useEffect, useReducer } from "react";
import { View, Text, TouchableOpacity, Animated, Alert } from "react-native";
import styles from "./style.js";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import CustomBottomNavigation from "../../../custom component/CustomBottomNavigation.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
const ProfileScreen = ({ navigation }) => {
  const [name, setName] = useState("Huy Nguyen");
  const [address, setAddress] = useState("Ho Chi Minh, Vietnam");
  const [phoneNumber, setPhoneNumber] = useState("+84945366804");
  const [bio, setBio] = useState(
    "molestiae libero sit voluptatem voluptas ut commodi vero. 33 dignissimos repudiandae et rerum maiores et voluptates expedita a unde laboriosam sit rerum asperiores. Et nostrum officia sit labore tenetur ut dolores "
  );
  // const [skills, setSkills] = useState([
  //   "UI UX",
  //   "UI Design",
  //   "Backend Developer",
  // ]);
  // const [experiences, setExperiences] = useState([]);
  //   const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  //   const handleResponse = (response) => {
  //     if (!response.success) {
  //       Alert.alert(response.message);
  //       return;
  //     }
  //     setJobData(response.message);
  //   };
  //   const getData = () => {
  //     dispatch(
  //       getAPIActionJSON("getAllJobs", null, null, "", (e) => handleResponse(e))
  //     );
  //   };
  //   useEffect(() => {
  //     getData();
  //   }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.background}>
          <View style={styles.backgroundBlack} />
          <View style={styles.backgroundGray} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.avatar} />
          <Text style={styles.nameText}>{name}</Text>
          <View style={styles.addressContainer}>
            <FontAwesomeIcon icon={faLocationDot} />
            <Text style={styles.textGrey}> {address}</Text>
          </View>
          <View style={styles.phoneContainer}>
            <FontAwesomeIcon icon={faPhone} />
            <Text style={styles.textGrey}> {phoneNumber}</Text>
          </View>
          <View style={styles.aboutMeContainer}>
            <Text style={styles.aboutMeTitle}>About Me</Text>
            <Text style={styles.aboutMeText}>{bio}</Text>
          </View>
        </View>
        <View style={styles.bottomNavigationContainer}>
          <CustomBottomNavigation />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

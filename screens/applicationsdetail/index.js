import React from "react";
import styles from "./style.js";
import { SearchBar } from "react-native-screens";
import { Button, View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import HeaderCustom from "../../custom component/Header";
import JobTag from "../../custom component/JobTag"
import Colors from "../../assets/Colors"
import { useNavigation } from "@react-navigation/core";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { back } from "react-native/Libraries/Animated/Easing";
import CustomApplicationInfo from "../../custom component/CustomApplicationInfo";
import InterviewNotification from "../../notifications/InterviewNotification.js";

const ApplicationDetailScreen = (props) => {
    const route = useRoute();
    const navigation = useNavigation();
    const application= route.params.application;

    const { height } = Dimensions.get('window');

    const [apply, setApply] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const applyHandler = (e) => {}
    const handlePressApplyNow = (e) => {
        setApply(true);
    }
    const handleRejectButton = (e) => {
      navigation.navigate("HomeScreen", {selectedTab : "Home"});
      
    }
    const handleSetNotification = (e) => {
      InterviewNotification("You have interview with "+application.job.company.companyName 
      ,"Your interview will start at "+application.timeInterview +" at"+application.placeInterview, application.timeInterview);
    }
    return (
      <View style={{ 
        paddingHorizontal:20,
        backgroundColor: "#FFF",
        flex: 1,
       }}>
      
        <View>
            <HeaderCustom/>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Back</Text>
        </TouchableOpacity>
        <JobTag logo={require("../../assets/template_assets/job_logo.png")} jobTitle={application.job.jobTitle} 
                    company={application.job.company.companyName ?? "BNB"}/>
        <View style={{ marginBottom: 15, height: 1, backgroundColor: Colors.lightGray, justifyContent: "center" }}></View>

        <CustomApplicationInfo application={application}/>
        <View style={styles.buttonContainer}>
        {
          application.status === "pending" ?
          <TouchableOpacity disabled={true} style={styles.pendingButton}>
              <Text style={{fontSize: 16, color: "white", fontWeight:"700", textAlign:"center"}}>Waiting...</Text>
          </TouchableOpacity>
          :
          application.status === "accepted" ?
          <TouchableOpacity style={styles.acceptedButton} onPress={handleSetNotification}>
              <Text style={{fontSize: 16, color: "white", fontWeight:"700", textAlign:"center"}}>Set interview notification</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity style={styles.rejectButton} onPress={handleRejectButton}>
              <Text style={{fontSize: 16, color: "white", fontWeight:"700", textAlign:"center"}}>Discover another job</Text>
          </TouchableOpacity>
        }
         
        </View>
    </View>
       
    );
  };

export default ApplicationDetailScreen;
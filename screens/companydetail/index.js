import React, { useEffect } from "react";
import styles from "./style.js";
import { Button, View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import HeaderCustom from "../../custom component/Header";
import JobTag from "../../custom component/JobTag"
import Colors from "../../assets/Colors"
import { useNavigation } from "@react-navigation/core";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { back } from "react-native/Libraries/Animated/Easing";
import CustomCompanyCard from "../../custom component/CustomCompanyCard";
import CustomCompanyInfo from "../../custom component/CustomCompanyInfo.js";
import { useDispatch } from "react-redux";
import { getAPIActionJSON } from "../../api/ApiActions.js";
import CustomJobCard from "../../custom component/CustomJobCard.js";

const CompanyDetailScreen = (props) => {
    const dispatch = useDispatch();
    const route = useRoute();
    const navigation = useNavigation();
    const company= route.params.company;
    
    const [jobData, setJobData] = useState([]);
    const handleResponse = (response) => {
        if (!response.success) {
          Alert.alert(response.message);
          return;
        }
        setJobData(response.message);
      };
      const getData = () => {
        dispatch(
          getAPIActionJSON("getAllJobsFromCompanyNonExpired", null, null, "/"+company._id, (e) => handleResponse(e))
        );
      };
      useEffect(() => {
        getData();
      }, []);
    return (
      <ScrollView style={{ 
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
        <CustomCompanyCard imagePath={require("../../assets/template_assets/job_logo.png")} companyName={company.companyName} 
                    location={company.location}
                    established={company.establishedYear} />
        <View style={{marginTop:15, marginBottom: 15, height: 1, backgroundColor: Colors.lightGray, justifyContent: "center" }}></View>

        <CustomCompanyInfo company={company}/>
        <View style={{marginTop:15, marginBottom: 15, height: 1, backgroundColor: Colors.lightGray, justifyContent: "center" }}></View>
        <View><Text style={{fontWeight: "600", color: Colors.black, fontSize: 20, marginBottom: 5,}}>Recruitment</Text></View>
        <FlatList
            style={{marginTop: 10}}
            data={jobData}
            renderItem={({ item }) => (
            <CustomJobCard       
                onPress = {() =>{ navigation.navigate('JobDetailScreen', { job: item }) }}
                nameJob={item.jobTitle}
                companyName={item.company.companyName}
                location={item.location}
                type={item.type}
                salary={item.salary}
                isSaved={item.isSaved}
                imagePath={require("../../assets/images/test/airbnb.png")}
             />)} 
        />
            
    </ScrollView>
       
    );
  };

export default CompanyDetailScreen;
import React, { useEffect, useRef, useState } from "react";
import { getAPIActionJSON } from "../../api/ApiActions";
import CustomApplicationItem from "../../custom component/CustomApplicationItem";
import { Text,View, Animated, TouchableOpacity } from "react-native";
import CustomAppBarWithImage from "../../custom component/CustomAppBarWithImage";
import styles from "./style.js";
import CustomSearchInput from "../../custom component/CustomSearchInput";
import CustomFilterOptionButton from "../../custom component/CustomFilterOptionButton";
import * as Animatable from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import CustomApplicationMangerItem from "../../custom component/CustomApplicationManagerItem";

const SeparatorComponent = () => {
    return <View style={styles.separatorComponent} />;
  };
const ApplicationManagerScreen = (props) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [jobData, setJobData] = useState([]);
    const [tab, setTab] = useState("all");
    
    const handleResponse = (response) => {
        if (!response.success) {
            Alert.alert(response.message);
            return;
        }
        setJobData(response.message);
    };
    const getData = () => {
        dispatch(
            getAPIActionJSON("getAllAppliesFromHR", null, "", "/64986724e25bd63b45897488", (e) => handleResponse(e))
        );
    };
    useEffect(() => {
        getData()
    },[])

    const setTabHandler = (value) => {
        if(value === "all"){
            dispatch(
                getAPIActionJSON("getAllAppliesFromHR", null, "", "/64986724e25bd63b45897488", (e) => handleResponse(e))
            );
        }
        else if(value === "pending"){
            dispatch(
                getAPIActionJSON("getFilterAppliesFromHR", null, "", "/64986724e25bd63b45897488/pending", (e) => handleResponse(e))
            );
        }else if(value === "accepted"){
            dispatch(
                getAPIActionJSON("getFilterAppliesFromHR", null, "", "/64986724e25bd63b45897488/accepted", (e) => handleResponse(e))
            );
        }else if(value === "rejected"){
            dispatch(
                getAPIActionJSON("getFilterAppliesFromHR", null, "", "/64986724e25bd63b45897488/declined", (e) => handleResponse(e))
            );
        }

        setTab(value)
    }
   

    return (
        <SafeAreaView style={styles.screen}>
            <CustomAppBarWithImage
                title="Applications"
                imagePath={require("../../assets/images/app_logo.png")}
            />
           <View style={styles.tabs}>
                <TouchableOpacity style={tab === "all" ? styles.tabItemActive : styles.tabItem} onPress={(e) => setTabHandler("all")}><Text style={tab === "all" ? styles.textActive : ""}>All</Text></TouchableOpacity>
                <TouchableOpacity style={tab === "pending" ? styles.tabItemActive : styles.tabItem} onPress={(e) => setTabHandler("pending")}><Text style={tab === "pending" ? styles.textActive : ""}>Pending</Text></TouchableOpacity>
                <TouchableOpacity style={tab === "accepted" ? styles.tabItemActive : styles.tabItem} onPress={(e) => setTabHandler("accepted")}><Text style={tab === "accepted" ? styles.textActive : ""}>Accepted</Text></TouchableOpacity>
                <TouchableOpacity style={tab === "rejected" ? styles.tabItemActive : styles.tabItem} onPress={(e) => setTabHandler("rejected")}><Text style={tab === "rejected" ? styles.textActive : ""}>Rejected</Text></TouchableOpacity>
           </View>
             <FlatList
                ItemSeparatorComponent={SeparatorComponent}
                style={styles.listContainer}
                data={jobData}
                renderItem={({ item }) => (
                    <CustomApplicationMangerItem
                        onPress = {() =>{ navigation.navigate('ApplicationManagerDetailScreen', { application: item }) }}
                        nameJob = {item.job.jobTitle}
                        seeker = {item.userApply.name}
                        // email = {item.userApply.email}
                        phone = {item.userApply.phoneNumber}
                        imagePath = {require("../../assets/images/test/user.png")}
                        applyDate = {item.expired}
                        status = {item.status}
                        />
                )}
            />     

        </SafeAreaView>
       
    )
}
export default ApplicationManagerScreen;
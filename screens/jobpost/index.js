import React, { useEffect } from "react";
// import styles from './style';
import { SearchBar } from "react-native-screens";
import {View,Text,TouchableOpacity,TextInput, StyleSheet, Modal, ToastAndroid } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import HeaderCustom from "../../custom component/Header";
import JobTag from "../../custom component/JobTag"
import Colors from "../../assets/Colors"
import { useNavigation } from "@react-navigation/core";
import { DarkTheme, useRoute } from "@react-navigation/native";
import { useState } from "react";
// import DatePicker from 'react-native-datepicker'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useDispatch } from "react-redux";
import { getAPIActionJSON } from "../../api/ApiActions";
import axios from "axios";
import CustomCompanyCard from "../../custom component/CustomCompanyCard";
import CustomCompanyPicker from "../../custom component/CustomCompanyPicker";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import {
    faHome,
    faBriefcase,
    faBuilding,
    faUser,
    faBookBookmark,
  } from "@fortawesome/free-solid-svg-icons";

const JobPostScreen = (pros) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [companyPicker, setCompanyPicker] = useState(null);
    const [companies, setCompanies] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [date, setDate] = useState(new Date())

    const [postTitle, setPostTitle] = useState("");
    const [postDescription, setPostDescription] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [jobType, setJobType] = useState("");
    const [jobSalary, setJobSalary] = useState("");
    const [jobLocation, setJobLocation] = useState("");

    
    const openModal = () => {
        setModalVisible(true);
      };
    const selectCompanyHandler = (company) => {
        setCompanyPicker(company)
        setModalVisible(false)
    }
    const onChange = (event,selectedDate) => {
        const currentDate = selectedDate;
        setShowDatePicker(false);
        setDate(currentDate);
        console.log(currentDate)
    }
    const toggleDatePicker = () => {
        setShowDatePicker(!showDatePicker);
    }
    const handleResponse = (response) => {
        if (!response.success) {
          Alert.alert(response.message);
          return;
        }
        setCompanies(response.message);

      };
      const getData = () => {
        dispatch(
          getAPIActionJSON("getAllCompanies", null, null, "", (e) => handleResponse(e))
        );
      };

    useEffect(() => {
        getData()
    },[])

    const handleCreateResponse = (response) => {
        if (!response.success) {
            Alert.alert(response.message);
            return;
          }
          ToastAndroid.show("The job is posted successfully", ToastAndroid.SHORT);
            setCompanyPicker(null);
    }
    const handleCreatePost = () => {
        dispatch(
            getAPIActionJSON("createPost", {
                postTitle: postTitle,
                postDescription: postDescription,
                company: companyPicker._id,
                jobTitle: jobTitle,
                salary: jobSalary,
                location: jobLocation,
                type: jobType,
                jobDescription: jobDescription,
                expired: date,
            },null,"", (e) => handleCreateResponse(e))
        )
    }
    
    return (
      <View style={{ 
        paddingHorizontal:20,
        backgroundColor: "#FFF",
        height: "100%",
        flex: 1,
       }}>
      
        <View>
            <HeaderCustom/>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Back</Text>
        </TouchableOpacity>
       <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
            <TextInput
                style={styles.textInput}
                placeholder="Type title..."
                onChangeText={(text) => setPostTitle(text)}
            />
            <TextInput
                placeholder="Type something here..."
                style={styles.textInputMulti}
                multiline={true}
                numberOfLines={8}
                onChangeText={(text) => setPostDescription(text)}
            />
            <TouchableOpacity style={styles.textInput} onPress={openModal}>
                {
                    companyPicker != null ?
                    (
                        <CustomCompanyPicker
                            onPress={openModal}
                            companyName={companyPicker.companyName}
                            imagePath={require("../../assets/images/test/airbnb.png")}
                        />
                    ):
                    <View style={{flexDirection:"row"}}> 
                        <FontAwesomeIcon icon={faBuilding} color={Colors.black} size={24} /> 
                        <Text style={{textSize: 20, fontWeight:"600", marginLeft: 12}}>Company</Text>
                    </View>
                    
                }
            </TouchableOpacity>
           
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                >
                <View style={styles.modalContainer}>
                    <FlatList
                        style={{marginTop: 20}}
                        data={companies}
                        renderItem={({ item }) => (
                        <CustomCompanyCard       
                            onPress = {() =>{ selectCompanyHandler(item) }}
                            location={item.location}
                            companyName={item.companyName}
                            established={item.establishedYear}
                            imagePath={require("../../assets/images/test/airbnb.png")}
                        />
                        )}
                    />
                </View>
             
                <TouchableOpacity
                    style={styles.modalCloseButton}
                    onPress={() => setModalVisible(false)}
                    >
                    <Text style={styles.modalCloseButtonText}>Close</Text>
                </TouchableOpacity>
            </Modal>
            {
                companyPicker === null ? ""
                :
                <View>
                    <View>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Type job name..."
                            onChangeText={(text) => setJobTitle(text)}
                        />
                    </View>
                    <View style={{justifyContent:"space-between", flexDirection:"row"}}>
                        <TextInput
                            style={[styles.textInput,{width:"47%"}]}
                            placeholder="Type type job..."
                            onChangeText={(text) => setJobType(text)}
                        />
                         <TextInput
                            style={[styles.textInput,{width:"50%"}]}
                            placeholder="Type salary..."
                            keyboardType="numeric"
                            onChangeText={(text) => setJobSalary(text)}
                        />
                    </View>
                    <View>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Type location..."
                            onChangeText={(text) => setJobLocation(text)}                        />
                    </View>
                    <View>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Type description..."
                            multiline={true}
                            numberOfLines={5}
                            onChangeText={(text) => setJobDescription(text)}
                        />
                    </View>
                    {
                        showDatePicker && <DateTimePicker
                            value={date}
                            mode="date"
                            display="default"
                            onChange={onChange}
                            textColor="black"
                        />
                    }
                    <View>
                        <TouchableOpacity style={styles.textInput} onPress={(e)=> {toggleDatePicker()}}>
                           <Text>{date.toDateString()}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
          
            
       </ScrollView>
       {
            postTitle.length>0 && postDescription.length>0 && jobTitle.length>0 && jobSalary.length>0 && jobType.length>0 && jobLocation.length>0 
            ? (
                <TouchableOpacity style={styles.createButton} onPress={handleCreatePost}>
                    <Text style={{color: Colors.white}}>Create</Text>
                </TouchableOpacity>
            ):(
                <TouchableOpacity style={[styles.createButton, {opacity: 0.5}]} disabled={true}>
                    <Text style={{color: Colors.white}}>Create</Text>
                </TouchableOpacity>
            )
       }
      
      
    </View>
       
    );
  };

export default JobPostScreen

const styles = StyleSheet.create({
    contentContainer:{
        marginTop: 10,
        marginBottom: 70,
    },
    textInput: {
        borderRadius: 30,
        padding: 10,
        paddingLeft: 15,
        backgroundColor: "#F2F2F2",
        marginTop: 5,
        marginBottom: 5,
    },
    textInputMulti: {
        borderRadius: 20,
        borderColor: "black",
        borderWidth: 1.5,
        padding: 5,
        paddingLeft: 15,
        backgroundColor: "#FFFFFF",
        marginTop: 5,
        marginBottom: 5,
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      modalCloseButton:{
        position: 'absolute',
        bottom: 10,
        left: 10,
        width: 100,
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: Colors.white,
        textColor: Colors.DarkOrange,
      },
      createButton:{
        borderRadius: 30,
        padding: 10,
        paddingLeft: 15,
        backgroundColor: "#F2F2F2",
        marginTop: 5,
        marginBottom: 5,
        alignItems: 'center',
        backgroundColor: Colors.blue,
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        marginLeft: 20,
        marginRight: 20,
      }
})
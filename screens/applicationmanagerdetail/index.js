import React from "react";
import styles from "./style.js";
import { SearchBar } from "react-native-screens";
import { Button, View, Text, Image, TouchableOpacity, Dimensions, Modal,StyleSheet,ToastAndroid } from "react-native";
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
import DateTimePicker from '@react-native-community/datetimepicker'
import { getAPIActionJSON } from "../../api/ApiActions.js";
import SeekerTag from "../../custom component/SeekerTag.js";
import { useDispatch } from "react-redux";
import moment from "moment";


const ApplicationManagerDetailScreen = (props) => {
    const route = useRoute();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const application= route.params.application;

    const getDate = application.timeInterview !== null && application.timeInterview !== undefined && application.timeInterview.length>0 ?  moment(application.timeInterview, 'YYYY-MM-DD hh:mm A').toDate() : new Date();
    console.log(application.timeInterview)
    const [showInterview, setShowInterview] = useState(false);
    const [accepted, setAccepted] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [message,setMessage] = useState(application.message !== null ? application.message : "");
    const [placeInterview, setPlaceInterview] = useState(application.placeInterview !== null ? application.placeInterview : "");

    const [date, setDate] = useState(getDate)
    const [time, setTime] = useState(getDate)

    const { height } = Dimensions.get('window');

    const applyHandler = (e) => {}
    const handlePressApplyNow = (e) => {
        setApply(true);
    }

    const toggleDatePicker = () => {
        setShowDatePicker(!showDatePicker);
    }
   
   const handleSetInterview = () => {
        setAccepted(true)
        setShowInterview(true)
   }
   const handleSetReject = () => {
        setAccepted(false)
        setShowInterview(true)
   }

   const onChange = (event,selectedDate) => {
        const currentDate = selectedDate;
        setShowDatePicker(false);
        setShowTimePicker(true)
        setDate(currentDate);
        console.log(currentDate)
    }
    const onChangeTime = (e, selectedTime) => {
        setShowTimePicker(false);
        setTime(selectedTime);

    }

    const handleResponse = (response) => {
        ToastAndroid.show("Accept the application successfully",ToastAndroid.SHORT);
        setShowDatePicker(false)
        setShowInterview(false)
        setShowTimePicker(false)
        
    };
    
    const handleSubmitInterview = () => {
        dispatch(
            getAPIActionJSON("updateApplyStatus",{
                status: "accepted",
                message:message,
                timeInterview : date.getFullYear() + "-" + date.getMonth().toString().padStart(2, '0') + "-" + date.getDate().toString().padStart(2, '0') +" "+time.getHours().toString().padStart(2, '0') +":"+time.getMinutes().toString().padStart(2, '0'),
                placeInterview : placeInterview,
            },null,"/"+application._id,null,(e) => handleResponse(e))
        )
    }
    
    const handleReject = () => {
        dispatch(
            getAPIActionJSON("updateApplyStatus",{
                status: "declined",
                message:message,
            },null,"/"+application._id,null,(e) => handleResponse(e))
        )
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
        <SeekerTag image={require("../../assets/images/test/user.png")} name={application.userApply.name}
                    email={application.userApply.email} phone={application.userApply.phoneNumber}/>
        {/* <View style={{ marginBottom: 15, height: 1, backgroundColor: Colors.lightGray, justifyContent: "center" }}></View> */}
        <View>
            <Text style={{fontSize: 20, fontWeight:"600", marginBottom: 5}}>Biography</Text>
            <Text>{application.userApply.bio}</Text>
        </View>
        {/* <View style={{ marginBottom: 15, height: 1,marginTop:15, backgroundColor: Colors.lightGray, justifyContent: "center" }}></View> */}
        {
            application.file &&
            <View style={{marginTop: 15}}>
                <Text style={{fontSize: 20, fontWeight:"600", marginBottom: 5}}>CV</Text>
                <View style={{flexDirection:"row", justifyContent:"center", backgroundColor: Colors.light, width:"100%", padding:40, borderRadius: 16, textWrap:"wrap"}}>
                    <Image  resizeMode="cover" style={{width: 50, height:60}} source={require("../../assets/icons/pdf.png")}></Image>
                    <View style={{marginLeft: 10, height: 60}}><Text>{application.file}</Text></View>
                </View>
            </View>
        }
       
        <View style={styles.buttonContainer}>
        {
          application.status === "pending" ?
          <View style={{flexDirection:"row", justifyContent: "space-between"}}>
            <TouchableOpacity style={styles.pendingButton} onPress={handleSetInterview}>
                <Text style={{fontSize: 16, color: "white", fontWeight:"700", textAlign:"center"}}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.pendingButton,{backgroundColor:Colors.red}]} onPress={handleSetReject}>
                <Text style={{fontSize: 16, color: "white", fontWeight:"700", textAlign:"center"}}>Reject</Text>
            </TouchableOpacity>
          </View>
        
          :
          application.status === "accepted" ?
          <TouchableOpacity style={styles.acceptedButton} onPress={handleSetInterview}>
              <Text style={{fontSize: 16, color: "white", fontWeight:"700", textAlign:"center"}}>Set interview time and place</Text>
          </TouchableOpacity>
          :
        ""
        }
         
        </View>
        <Modal
            animationType="fade"
            transparent={false}
            visible={showInterview}
            >
            <View style={{margin: 15, flex: 1, justifyContent:"center", flexDirection:"column"}}>
            
                <View style={{alignItems:"center", marginBottom: 20}}><Text style={{fontWeight:"800", fontSize: 20}}>{accepted === true ? "SCHEDULE INTERVIEW" : "WHY YOU REJECT"}</Text></View> 
                {accepted &&
                    <View>
                        <TextInput
                            style={styles.textInput}
                            value={placeInterview}
                            placeholder="Type location..."
                            onChangeText={(text) => setPlaceInterview(text)} />
                    </View>
                }
                
                {
                    accepted && showDatePicker && 
                    <DateTimePicker
                        value={date}
                        mode="date"
                        is24Hour={true}
                        // display="default"
                        onChange={onChange}
                        textColor="black"
                    />
                }
                {
                    accepted && showTimePicker && <DateTimePicker
                        value={time}
                        mode="time"
                        is24Hour={true}
                        // display="default"
                        onChange={onChangeTime}
                        textColor="black"
                    />
                }
                {
                    accepted && 
                    <View>
                        <TouchableOpacity style={styles.textInput} onPress={(e)=> {toggleDatePicker()}}>
                            <Text>{date.getFullYear() + "-" + date.getMonth().toString().padStart(2, '0') + "-" + date.getDate().toString().padStart(2, '0') +" "+time.getHours().toString().padStart(2, '0') +":"+time.getMinutes().toString().padStart(2, '0')}</Text>
                        </TouchableOpacity>
                    </View>
                }
                
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type message..."
                        multiline={true}
                        numberOfLines={7}
                        value={message}
                        onChangeText={(text) => setMessage(text)}
                    />
                </View>
                <TouchableOpacity style={[styles.acceptedButton,{marginTop: 30}]} onPress={accepted !== null ? handleSubmitInterview : handleReject }>
                    <Text style={{fontSize: 16, color: "white", fontWeight:"700", textAlign:"center"}}>Submit</Text>
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity
                style={styles.modalCloseButton}
                onPress={() => setShowInterview(false)}
                >
                <Text style={{fontWeight: "600", color:Colors.white}}>Close</Text>
            </TouchableOpacity>
        </Modal>
    </View>
       
    );
  };

export default ApplicationManagerDetailScreen;

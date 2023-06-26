import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const CustomApplicationItem = ({
  onPress,
  nameJob,
  companyName,
  location,
  type,
  imagePath,
  applyDate,
  status,
}) => {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
         <View style={styles.info}>
            <View style={styles.imageContainer}>
                <Image source={imagePath} style={styles.image} />
            </View>
            <View style={styles.content}>
                <Text style={styles.jobTitle}>{nameJob}</Text>
                <Text style={styles.company}>{companyName}</Text>
                <View style={styles.locationAndType}>
                <Text style={styles.location}>{location}</Text>
                <Text> - </Text>
                <Text style={styles.type}>{type}</Text>
                </View>
            </View>
            <View style={styles.actionContainer}>
                <Text style={styles.salary}>{applyDate}</Text>
            </View>
        </View>
        <View style={styles.status}>
            {
                status.toLowerCase() === "pending" ? <View style={styles.pending_status_container}><Text style={styles.pending_status}>Pending</Text></View>
                : status.toLowerCase() === "declined" ? <View style={styles.reject_status_container}><Text style={styles.reject_status}>Reject</Text></View> 
                : status.toLowerCase() === "accepted" ? <View style={styles.interview_status_container}><Text style = {styles.interview_status}>Interview</Text></View>
                : <Text style={{backgroundColor: 'red'}}></Text>
            }
               
        </View>
    </TouchableOpacity>
   
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingLeft: 20,
    paddingRight: 28,
    gap: 12,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#F3F3F4",
    borderRadius: 20,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  content: {
    marginLeft: 15,
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  company: {
    fontSize: 14,
    color: "#888",
  },
  type: {
    fontSize: 14,
    color: "#888",
  },
  locationAndType: {
    flexDirection: "row",
  },
  actionContainer: {
    alignItems: "flex-end",
  },
  saveButton: {
    padding: 4,
  },
  salary: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
  },
  status : {
    marginTop: 10
  },
  pending_status_container:{
    backgroundColor: '#FFF4EC',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent:'center',
    padding: 10,
  },
  pending_status:{
    color:"#E56000",
  },
  reject_status_container:{
    backgroundColor: '#FEEFEF',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent:'center',
    padding: 10,
  },
  reject_status:{
    color:"#C90000",
  },
  interview_status_container:{
    backgroundColor: '#EEF2FA',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent:'center',
    padding: 10,
  },
  interview_status:{
    color:"#00239E",
  },
});

export default CustomApplicationItem;

import React from "react";
import {View,Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import Colors from "../assets/Colors";

const CustomJobToolbar = (props) => {
    return (
        props.apply == false 
        ?
        <View style={{
            position: "absolute", bottom: 20, left: 0, right: 0, height: 50, flexDirection: "row", justifyContent: "space-between",
            paddingTop: 6, paddingBottom: 6
        }}>
            <View style={{ height: 48, width: 48, backgroundColor: "#DADADA", borderRadius: 10, padding: 10 }}>
                <Image source={require("../assets/icons/bookmark_border_uncheck.png")}
                    style={{ width: 28, height: 28 }}></Image>
            </View>
            <View style={{
                height: 48, backgroundColor: "#DADADA", paddingStart: 25, paddingEnd: 25,
                backgroundColor: Colors.secondary, borderRadius: 30, flexDirection: "column", justifyContent: "center"
            }}>
                <Text style={{ fontSize: 16, color: "white", fontWeight: "700" }}>Message</Text>
            </View>
            <TouchableOpacity onPress={props.onApplyNext} style={{
                height: 48, backgroundColor: "#DADADA", paddingStart: 55, paddingEnd: 55,
                backgroundColor: Colors.primary, borderRadius: 30, flexDirection: "column", justifyContent: "center"
            }}>
                <Text style={{ fontSize: 16, color: "white", fontWeight: "700" }}>Apply Now</Text>
            </TouchableOpacity>
        </View>

        : 
        <View style={{position: "absolute", bottom: 20,left:0,right:0, height: 50, flexDirection: "row", justifyContent: "space-between",
        paddingTop: 6, paddingBottom: 6}}>
        {
            props.selectedFile == null ?
            (
                <TouchableOpacity disabled={true} style={{height: 48,opacity: 0.6, backgroundColor: "#DADADA",paddingStart: 55, paddingEnd: 55, width:"100%",
                    backgroundColor:Colors.primary,borderRadius: 30, flexDirection:"column", justifyContent:"center"}}>
                    <Text style={{fontSize: 16, color: "white", fontWeight:"700", textAlign:"center"}}>Apply Now</Text>
                </TouchableOpacity>
            )
            :
            (
                <TouchableOpacity onPress={props.onApplyHandler} style={{height: 48, backgroundColor: "#DADADA",paddingStart: 55, paddingEnd: 55, width:"100%",
                    backgroundColor:Colors.primary,borderRadius: 30, flexDirection:"column", justifyContent:"center"}}>
                    <Text style={{fontSize: 16, color: "white", fontWeight:"700", textAlign:"center"}}>Apply Now</Text>
                </TouchableOpacity>
            )
        }
           
        </View>
    )
}
export default CustomJobToolbar
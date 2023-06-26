import React from "react";
import CustomJobToolbar from "./CustomJobToolbar";
import {View,Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import Colors from "../assets/Colors";

const CustomJobInformation = ({job}) => {
    return (
        <View><View style={{}}>
        <View style={{ paddingTop: 12 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
                <Text style={{ fontWeight: "400", color: Colors.lightBlack, fontSize: 16 }}>Salary</Text>
                <Text style={{ fontWeight: "600", color: Colors.primary, fontSize: 16 }}>${job.salary}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
                <Text style={{ fontWeight: "400", color: Colors.lightBlack, fontSize: 16 }}>Type</Text>
                <Text style={{ fontWeight: "600", color: Colors.primary, fontSize: 16 }}>{job.type}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
                <Text style={{ fontWeight: "400", color: Colors.lightBlack, fontSize: 16 }}>Location</Text>
                <Text style={{ fontWeight: "600", color: Colors.primary, fontSize: 16 }}>{job.location}</Text>
            </View>
            <View style={{ marginTop: 15, height: 1, backgroundColor: Colors.lightGray, justifyContent: "center" }}></View>
        </View>
    </View><View>
            <ScrollView  showsVerticalScrollIndicator={false} style={{ marginBottom: 80 }}>
                <View style={{ marginTop: 22, marginBottom: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: "600" }}>Requirements</Text>
                </View>
                <CustomRequirementItem content="Experienced in Figma or Sketch."/>
                <CustomRequirementItem content="Experienced in Figma or Sketch."/>
                <CustomRequirementItem content="Experienced in Figma or Sketch."/>
                <CustomRequirementItem content="Experienced in Figma or Sketch."/>
                <CustomRequirementItem content="Experienced in Figma or Sketch."/>
                

                <View style={{ marginTop: 22, marginBottom: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: "600" }}>Benefits</Text>
                </View>
                <CustomRequirementItem content="Experienced in Figma or Sketch."/>
                <CustomRequirementItem content="Experienced in Figma or Sketch."/>
                <CustomRequirementItem content="Experienced in Figma or Sketch."/>
                <CustomRequirementItem content="Experienced in Figma or Sketch."/>
                <CustomRequirementItem content="Experienced in Figma or Sketch."/>
                
            </ScrollView>
        
        </View></View>
    )
}
export default CustomJobInformation;
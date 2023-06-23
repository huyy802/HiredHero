import React from "react";
import styles from './style';
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
import CustomRequirementItem from "../../custom component/CustomRequirementItem";
import CustomUploadFile from "../../custom component/CustomUploadFile";


export default JobDetailScreen = (pros) => {
    const route = useRoute();
    const navigation = useNavigation();
    const job= route.params.job;

    const { height } = Dimensions.get('window');

    const [apply, setApply] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);


    const handlePressApplyNow = (e) => {
        setApply(true);
    }

    return (
      <View style={{ 
        paddingHorizontal:20,
        backgroundColor: "#FFF",
        height: "100%"
       }}>
      
        <View>
            <HeaderCustom/>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Back</Text>
        </TouchableOpacity>
        <JobTag logo={require("../../assets/template_assets/job_logo.png")} jobTitle={job.jobTitle} 
                    company={job.company.companyName ?? "BNB"}/>
        <View style={{ marginBottom: 20, height: 1, backgroundColor: Colors.lightGray, justifyContent: "center" }}></View>

        {
            apply == false ? 
            (
            <><View style={{}}>
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
            </View><View style={{ flex: 1 }}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 80 }}>
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
                    <View style={{
                        position: "absolute", bottom: 20, left: 0, right: 0, height: 50, flexDirection: "row", justifyContent: "space-between",
                        paddingTop: 6, paddingBottom: 6
                    }}>
                        <View style={{ height: 48, width: 48, backgroundColor: "#DADADA", borderRadius: 10, padding: 10 }}>
                            <Image source={require("../../assets/icons/bookmark_border_uncheck.png")}
                                style={{ width: 28, height: 28 }}></Image>
                        </View>
                        <View style={{
                            height: 48, backgroundColor: "#DADADA", paddingStart: 25, paddingEnd: 25,
                            backgroundColor: Colors.secondary, borderRadius: 30, flexDirection: "column", justifyContent: "center"
                        }}>
                            <Text style={{ fontSize: 16, color: "white", fontWeight: "700" }}>Support</Text>
                        </View>
                        <TouchableOpacity onPress={(e) => handlePressApplyNow(e)} style={{
                            height: 48, backgroundColor: "#DADADA", paddingStart: 55, paddingEnd: 55,
                            backgroundColor: Colors.primary, borderRadius: 30, flexDirection: "column", justifyContent: "center"
                        }}>
                            <Text style={{ fontSize: 16, color: "white", fontWeight: "700" }}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                </View></>
            )
            : 
            (
                <View style={{flex: 1}}>
                    <View  style={{marginBottom: 80, flex: 1}}>
                        <View><Text style={{fontSize: 20, fontWeight: "600"}}>Upload CV</Text></View>
                        <View><Text style={{fontSize: 16, fontWeight: "400", marginTop: 16}}>Upload CV or Resume to apply for the job vacancy.</Text></View>
                        <CustomUploadFile content="Upload CV" selectedFile={selectedFile} setSelectedFile={setSelectedFile}/>
                    </View>
                  
                    <View style={{position: "absolute", bottom: 20,left:0,right:0, height: 50, flexDirection: "row", justifyContent: "space-between",
                    paddingTop: 6, paddingBottom: 6}}>
                    {
                        selectedFile == null ?
                        (
                            <TouchableOpacity disabled={true} style={{height: 48,opacity: 0.6, backgroundColor: "#DADADA",paddingStart: 55, paddingEnd: 55, width:"100%",
                                backgroundColor:Colors.primary,borderRadius: 30, flexDirection:"column", justifyContent:"center"}}>
                                <Text style={{fontSize: 16, color: "white", fontWeight:"700", textAlign:"center"}}>Apply Now</Text>
                            </TouchableOpacity>
                        )
                        :
                        (
                            <TouchableOpacity style={{height: 48, backgroundColor: "#DADADA",paddingStart: 55, paddingEnd: 55, width:"100%",
                                backgroundColor:Colors.primary,borderRadius: 30, flexDirection:"column", justifyContent:"center"}}>
                                <Text style={{fontSize: 16, color: "white", fontWeight:"700", textAlign:"center"}}>Apply Now</Text>
                            </TouchableOpacity>
                        )
                    }
                       
                    </View>
                </View>
            )
        }
        
        
       
    
    </View>
       
    );
  };


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
import CustomJobInformation from "../../custom component/CustomJobInformation";
import CustomJobToolbar from "../../custom component/CustomJobToolbar";

export default JobDetailScreen = (pros) => {
    const route = useRoute();
    const navigation = useNavigation();
    const job= route.params.job;

    const { height } = Dimensions.get('window');

    const [apply, setApply] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const applyHandler = (e) => {}
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
          
                <View style={{flex: 1}}>
                {apply == false ? 
                    (
                        <View style={{flex:0.5}}>
                            <CustomJobInformation job={job}/>
                        </View>         
                    )
                    : 
                    (
                    <View  style={{marginBottom: 80, flex: 1}}>
                        <View><Text style={{fontSize: 20, fontWeight: "600"}}>Upload CV</Text></View>
                        <View><Text style={{fontSize: 16, fontWeight: "400", marginTop: 16}}>Upload CV or Resume to apply for the job vacancy.</Text></View>
                        <CustomUploadFile content="Upload CV" selectedFile={selectedFile} setSelectedFile={setSelectedFile}/>
                    </View>
                    )}
                    <CustomJobToolbar selectedFile={selectedFile} onApplyHandler={applyHandler} onApplyNext={(e) => handlePressApplyNow(e)} apply={apply}/>
                </View>
            
            
        }
        
        
       
    
    </View>
       
    );
  };


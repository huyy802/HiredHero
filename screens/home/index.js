import React from "react";
import styles from './style';
import { SearchBar } from "react-native-screens";
import { Button, View, Text, Image } from "react-native";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import HeaderCustom from "../../custom component/Header";
import JobTag from "../../custom component/JobTag"

export default HomeScreen = () => {
    return (
      <View style={{ 
        backgroundColor:"#F8F8F8",
        paddingHorizontal:20,}}>
        <View>
            <HeaderCustom/>
        </View>
        <View style={{ flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
           
            }}>
            <View style={{
                backgroundColor:"#F4F6F9",
                borderRadius:25,
                height: 44,
                width: 310,
                padding:5,
                flexDirection:"row",
                alignItems:"center",
               
            }}>
                <TextInput
                    placeholder="What are you looking for?"
                    placeholderTextColor="#B0B0B0"
                    style={{
                        fontFamily:"Medium",
                        paddingHorizontal:20,
                        width: 250
                        }}
                />
                <View style={{
                    width:30,
                    height:30,
                    borderRadius:8,
                    marginLeft:15,
                    alignItems:"center",
                    justifyContent:"center"
                }}>
                    <Image source={require('../../assets/icons/search.png')}
                    style={{width: 20,height:20}}/>

                </View>
            </View>
            <View style={{
                    backgroundColor:"#E1E1E1",
                    width:44,
                    height:44,
                    borderRadius:8,
                    alignItems:"center",
                    justifyContent:"center"
                }}>
                    <Image source={require('../../assets/icons/filter.png')}
                    style={{width: 20,height:20}}/>

            </View>
        </View>
        <ScrollView
            horizontal={true }
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 42, height: 40}}>
           <View style={[styles.filter, {backgroundColor:"black"}]}>
                <Text style={{color: "white"}}>All job</Text>
           </View>
           <View style={styles.filter}>
                <Text>Writer</Text>
           </View>
           <View style={styles.filter}>
                <Text>Developer</Text>
           </View>
           <View style={styles.filter}>
                <Text>UI Designer</Text>
           </View>
           <View style={styles.filter}>
                <Text>Singer</Text>
           </View>
           <View style={styles.filter}>
                <Text>Servicer</Text>
           </View>
        </ScrollView>
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{marginTop: 25}}>
            <JobTag logo={require("../../assets/template_assets/job_logo.png")} jobTitle="UI/UX Designer" 
                company="AirBNB" country="United States" isMark={true} typeWork="Full time" salary="2.350"/>
            <JobTag logo={require("../../assets/template_assets/job_logo.png")} jobTitle="UI/UX Designer" 
                company="AirBNB" country="United States" isMark={false} typeWork="Full time" salary="2.350"/>
            <JobTag logo={require("../../assets/template_assets/job_logo.png")} jobTitle="UI/UX Designer" 
                company="AirBNB" country="United States" isMark={true} typeWork="Full time" salary="2.350"/>
            <JobTag logo={require("../../assets/template_assets/job_logo.png")} jobTitle="UI/UX Designer" 
                company="AirBNB" country="United States" isMark={false} typeWork="Full time" salary="2.350"/>
             <JobTag logo={require("../../assets/template_assets/job_logo.png")} jobTitle="UI/UX Designer" 
                company="AirBNB" country="United States" isMark={false} typeWork="Full time" salary="2.350"/>
            <JobTag logo={require("../../assets/template_assets/job_logo.png")} jobTitle="UI/UX Designer" 
                company="AirBNB" country="United States" isMark={true} typeWork="Full time" salary="2.350"/>
            <JobTag logo={require("../../assets/template_assets/job_logo.png")} jobTitle="UI/UX Designer" 
                company="AirBNB" country="United States" isMark={false} typeWork="Full time" salary="2.350"/>
             
        </ScrollView>
      </View>
    );
  };

  
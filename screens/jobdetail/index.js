import React from "react";
import styles from './style';
import { SearchBar } from "react-native-screens";
import { Button, View, Text, Image } from "react-native";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import HeaderCustom from "../../custom component/Header";
import JobTag from "../../custom component/JobTag"
import colors from "../../assets/Color"


export default JobDetailScreen = () => {
    return (
      <View style={{ 
        paddingHorizontal:20,
        backgroundColor: "#FFF",
        height: "100%"
       }}>
        <View>
            <HeaderCustom/>
        </View>
        <View style={{height: '40%'}}>
            <JobTag logo={require("../../assets/template_assets/job_logo.png")} jobTitle="UI/UX Designer" 
                    company="AirBNB"/>
            <View style={{paddingTop: 12}}>
            <View style={{marginBottom:20, height: 1, backgroundColor: colors.lightGray, justifyContent: "center"}}></View>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                <Text style={{fontWeight: "400", color: colors.lightBlack ,fontSize: 16}}>Salary</Text>
                <Text style={{fontWeight: "600",  color: colors.primary, fontSize: 16}}>$2.350</Text>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                <Text style={{fontWeight: "400", color: colors.lightBlack, fontSize: 16}}>Type</Text>
                <Text style={{fontWeight: "600",  color: colors.primary, fontSize: 16}}>Full time</Text>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                <Text style={{fontWeight: "400", color: colors.lightBlack, fontSize: 16}}>Location</Text>
                <Text style={{fontWeight: "600",  color: colors.primary,fontSize: 16}}>United States</Text>
            </View>
            <View style={{marginTop:15, height: 1, backgroundColor:colors.lightGray, justifyContent: "center"}}></View>
            </View>
        </View>
        <View style={{height: '45%'}}>
            <ScrollView  showsVerticalScrollIndicator={false} style={{marginBottom: 60}} >
                <View style={{marginTop: 22, marginBottom: 20}}>
                    <Text style={{fontSize: 20, fontWeight: "600"}}>Requirements</Text>
                </View>
                <View style={styles.requirement}>
                    <Image source={require("../../assets/icons/check_circle_outline_rounded.png")}
                         style={{height: 22, width: 22, marginEnd: 10}} resizeMode="cover"></Image>
                    <Text>Experienced in Figma or Sketch.</Text>
                </View>
                <View style={styles.requirement}>
                    <Image source={require("../../assets/icons/check_circle_outline_rounded.png")}
                         style={{height: 22, width: 22, marginEnd: 10}} resizeMode="cover"></Image>
                    <Text>Experienced in Figma or Sketch.</Text>
                </View>
                <View style={styles.requirement}>
                    <Image source={require("../../assets/icons/check_circle_outline_rounded.png")}
                         style={{height: 22, width: 22, marginEnd: 10}} resizeMode="cover"></Image>
                    <Text>Experienced in Figma or Sketch.</Text>
                </View>
                <View style={styles.requirement}>
                    <Image source={require("../../assets/icons/check_circle_outline_rounded.png")}
                         style={{height: 22, width: 22, marginEnd: 10}} resizeMode="cover"></Image>
                    <Text>Experienced in Figma or Sketch.</Text>
                </View>
                <View style={styles.requirement}>
                    <Image source={require("../../assets/icons/check_circle_outline_rounded.png")}
                         style={{height: 22, width: 22, marginEnd: 10}} resizeMode="cover"></Image>
                    <Text>Experienced in Figma or Sketch.</Text>
                </View>
                

                <View style={{marginTop: 22, marginBottom: 20}}>
                    <Text style={{fontSize: 20, fontWeight: "600"}}>Benefits</Text>
                </View>
                <View style={styles.requirement}>
                    <Image source={require("../../assets/icons/check_circle_outline_rounded.png")}
                         style={{height: 22, width: 22, marginEnd: 10}} resizeMode="cover"></Image>
                    <Text>Experienced in Figma or Sketch.</Text>
                </View>
                <View style={styles.requirement}>
                    <Image source={require("../../assets/icons/check_circle_outline_rounded.png")}
                         style={{height: 22, width: 22, marginEnd: 10}} resizeMode="cover"></Image>
                    <Text>Experienced in Figma or Sketch.</Text>
                </View>
                <View style={styles.requirement}>
                    <Image source={require("../../assets/icons/check_circle_outline_rounded.png")}
                         style={{height: 22, width: 22, marginEnd: 10}} resizeMode="cover"></Image>
                    <Text>Experienced in Figma or Sketch.</Text>
                </View>
                <View style={styles.requirement}>
                    <Image source={require("../../assets/icons/check_circle_outline_rounded.png")}
                         style={{height: 22, width: 22, marginEnd: 10}} resizeMode="cover"></Image>
                    <Text>Experienced in Figma or Sketch.</Text>
                </View>
                <View style={styles.requirement}>
                    <Image source={require("../../assets/icons/check_circle_outline_rounded.png")}
                         style={{height: 22, width: 22, marginEnd: 10}} resizeMode="cover"></Image>
                    <Text>Experienced in Figma or Sketch.</Text>
                </View>
                
            </ScrollView>
            <View style={{position: "absolute", bottom: 0,left:0,right:0, height: 50, flexDirection: "row", justifyContent: "space-between",
             paddingTop: 6, paddingBottom: 6}}>
                <View style={{height: 48, width: 48, backgroundColor: "#DADADA", borderRadius: 10, padding: 10}}>
                    <Image source={require("../../assets/icons/bookmark_border_uncheck.png")} 
                        style={{width: 28, height: 28}}></Image>
                </View>
                <View style={{height: 48, backgroundColor: "#DADADA",paddingStart: 25, paddingEnd: 25,
                    backgroundColor:colors.secondary, borderRadius: 30, flexDirection:"column", justifyContent:"center"}}>
                    <Text style={{fontSize: 16, color: "white", fontWeight:"700"}}>Support</Text>
                </View>
                <View style={{height: 48, backgroundColor: "#DADADA",paddingStart: 55, paddingEnd: 55,
                    backgroundColor:colors.primary,borderRadius: 30, flexDirection:"column", justifyContent:"center"}}>
                    <Text style={{fontSize: 16, color: "white", fontWeight:"700"}}>Apply Now</Text>
                </View>
            </View>
        </View>
    
    </View>
       
    );
  };


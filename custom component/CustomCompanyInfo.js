import React, { useEffect, useState } from "react";
import 'react-native';
import Colors from "../assets/Colors";
import {View,Text, StyleSheet} from 'react-native'
import { ScrollView } from "react-native-gesture-handler";



const CustomCompanyInfo = ({company}) => {



    return (
        <View style={{ paddingTop: 12 }}>
            <View style={style.rowInfo}>
                <Text style={style.heading}>Company size</Text>
                <Text style={style.companyValue}>{company.companySize}</Text>
            </View>
            <View style={style.rowInfo}>
                <Text style={style.heading}>Hotline</Text>
                <Text style={style.companyValue}>{company.hotline}</Text>
            </View>
            <View style={style.rowInfo}>
                <Text style={style.heading}>Email</Text>
                <Text style={style.companyValue}>{company.email}</Text>
            </View>
            <View style={style.rowInfo}>
                <Text style={style.heading}>Website</Text>
                <Text style={style.companyValue}>{company.website}</Text>
            </View>
          
            <View style={{ marginTop: 15, marginBottom: 15, height: 1, backgroundColor: Colors.lightGray, justifyContent: "center"}}></View>
           
            <View>
                <View><Text style={style.headingH4}>Description</Text></View>
                <Text style={{fontSize: 15, color:Colors.black, fontWeight: "400"}}>{company.description}</Text>
                
            </View>
           
           
        </View>
    )
}

export default CustomCompanyInfo

const style = StyleSheet.create({
    rowInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10 
    },
    heading: {
        fontWeight: "400",
        color: Colors.lightBlack,
        fontSize: 16
    },
    headingH4: {
        fontWeight: "600",
        color: Colors.black,
        fontSize: 20,
        marginBottom: 5,
    },
    companyValue: { 
        fontWeight: "600",
        color: Colors.red, 
        fontSize: 16 
    },
    
    
})
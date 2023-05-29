import React from "react";
import { View, TextInput,Image, Dimensions, ScrollView, Text, ViewBase } from "react-native";
import Colors from "../../assets/Colors";
import styles from './style';
import CustomerItem from "../../custom component/kolonie/CustomerItem";


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const CustomerScreen = () => {
    return(
        <View style={{ 
            backgroundColor:"#FCEBF5",
            paddingHorizontal:20,
            minHeight: screenHeight}}>
            <View style={{flexDirection:"row",justifyContent: "center", width:screenWidth-40, marginTop:30}}>
                <Image source={require("../../assets/images/Kolonie/kolonie_app_logo.png")}>
                    
                </Image>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 15,
            }}>
           
                <View style={{
                    backgroundColor:"#FFFFFF",
                    borderRadius:32,
                    height: 50,
                    width: screenWidth * 0.9 ,
                    padding:5,
                    flexDirection:"row",
                    alignItems:"center",
                
                }}>
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
                    <TextInput
                        placeholder="What are you looking for?"
                        placeholderTextColor="#B0B0B0"
                        style={{
                            fontFamily:"Medium",
                            paddingHorizontal:20,
                            width: screenWidth * 0.7
                            }}
                    />
                    
                </View>
            </View>
            <View
                style={{marginTop: 15, height: 50, flexDirection: "row"}}>
                <View style={[styles.filter_advance, {backgroundColor: Colors.primary_kolonie, borderRadius: 10}]}>
                    <Image source={require("../../assets/icons/Icon_filter_2.png")}></Image>
                </View>
                <View style={[styles.filter_option, 
                    {alignItems: "center", width: screenWidth - 50 - 12*2 - 30, backgroundColor:"#ffffff", borderRadius: 28}]}>
                    <View style={styles.filter_option_selected}>
                        <Text style={{color:"white"}}>All</Text>
                    </View>
                    <View style={styles.filter_option_unselect}>
                        <Text>A-Z</Text>
                    </View>
                    <View style={styles.filter_option_unselect}>
                        <Text>Point</Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop: 15}}>
                <Text style={{fontWeight: "bold"}}>5 result</Text>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false} style={{marginTop: 15, height: 200 }}>
                <View style={{paddingHorizontal: screenWidth *0.02, flexDirection: "row", flexWrap:"wrap"}}>
                    <CustomerItem avatar={require("../../assets/images/Kolonie/man.png")} name="Lưu Ka" phone="0123456789" point="145"/> 
                    <CustomerItem avatar={require("../../assets/images/Kolonie/man.png")} name="Nguyễn Văn A" phone="0123456789" point="90"/> 
                    <CustomerItem avatar={require("../../assets/images/Kolonie/woman.png")} name="Nguyễn B" phone="0123456789" point="0"/> 
                    <CustomerItem avatar={require("../../assets/images/Kolonie/man.png")} name="Bá C" phone="0123456789" point="200"/> 
                    <CustomerItem avatar={require("../../assets/images/Kolonie/woman.png")} name="Lưu Ka" phone="0123456789" point="60"/> 
                  
                    
                </View>
            </ScrollView>
            
        </View>
        
    );
}
export default CustomerScreen
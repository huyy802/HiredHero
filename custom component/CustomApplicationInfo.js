import React, { useEffect, useState } from "react";
import 'react-native';
import Colors from "../assets/Colors";
import {View,Text, StyleSheet} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";



const CustomApplicationInfo = ({application}) => {
    const [statusStyle, setStatusStyle] = useState(style.pendingValue)

    const status = application.status
    useEffect(() => {
        if (status === "pending") setStatusStyle(style.pendingValue)
        else if (status === "accepted") setStatusStyle(style.acceptValue)
        else setStatusStyle(style.rejectValue)
    },[status])

    return (
        <View style={{ paddingTop: 12 }}>
            <View style={style.rowInfo}>
                <Text style={style.heading}>Salary</Text>
                <Text style={statusStyle}>${application.job.salary}</Text>
            </View>
            <View style={style.rowInfo}>
                <Text style={style.heading}>Type</Text>
                <Text style={statusStyle}>{application.job.type}</Text>
            </View>
            <View style={style.rowInfo}>
                <Text style={style.heading}>Location</Text>
                <Text style={statusStyle}>{application.job.location}</Text>
            </View>
            <View style={style.rowInfo}>
                <Text style={style.heading}>Expired</Text>
                <Text style={statusStyle}>{application.expired}</Text>
            </View>
            {
                status === "accepted" ? 
                (
                    <>
                        <View style={style.rowInfo}>
                            <Text style={style.heading}>Place interview</Text>
                            <Text style={statusStyle}>{application.placeInterview}</Text>
                        </View>
                        <View style={style.rowInfo}>
                            <Text style={style.heading}>Time interview</Text>
                            <Text style={statusStyle}>{application.timeInterview}</Text>
                        </View>
                    </>
               
                ) : ""
              
            }
            <View style={{ marginTop: 15, marginBottom: 15, height: 1, backgroundColor: Colors.lightGray, justifyContent: "center"}}></View>
            {
                status === "pending" ?
                <View>
                    <Text style={{fontSize: 18, color:Colors.black, opacity: 0.5,fontWeight: "400"}}>Waiting for review...</Text>
                </View>
                : (
                    <View>
                        <Text style={{fontSize: 16, color:Colors.black, fontWeight: "400"}}>{application.message}</Text>
                    </View>
                )
            }
           
        </View>
    )
}

export default CustomApplicationInfo

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
    pendingValue: { 
        fontWeight: "600",
        color: Colors.red, 
        fontSize: 16 
    },
    rejectValue: {
        fontWeight: "600",
        color: Colors.black, 
        fontSize: 16 
    },
    acceptValue: {
        fontWeight: "600",
        color: Colors.blue, 
        fontSize: 16 
    },
    
})
import React from "react";
import { View, Image, Text } from "react-native";
import Colors from "../assets/Colors"
//props: logo, jobTitle, country, typeWork, isMark, salary
const JobTag = (props) => {
    return(
        <View style={{flexDirection:"row", justifyContent:"space-between" ,borderRadius: 10, paddingTop: 16, paddingBottom: 16, height: 92,
                        paddingStart: 20, paddingEnd: 20, borderWidth: 1, borderColor: "#E0E0E0", marginBottom: 12,
                  }}>

                <View style={{flexDirection:"row"}}>
                    <View style={{borderRadius: 5, height: 60, width: 60}}>
                        <Image resizeMode="cover"
                            source={props.logo}/>
                    </View>
                    <View style={{marginStart: 20, height: 60}}>
                        <Text style={{fontWeight: "600", fontSize: 18,}}>{props.jobTitle}</Text>
                        <Text style={{fontWeight: "400", fontSize: 14,}}>{props.company}</Text>
                        <Text style={{fontWeight: "600", fontSize: 12, color:"gray"}}>{props.country != null && props.typeWork != null ? (props.country - props.typeWork) :
                         (props.country , props.typeWork)}</Text>
                    </View>
                </View>
                <View style={{width: 89, flexDirection:"column", justifyContent: "space-between", alignItems:"flex-end"}}>
                    <View>
                        {props.isMark != null ? (
                            <Image style={{width: 24, height: 24}} 
                            source={props.isMark == true ? require("../assets/icons/bookmark_border_checked.png") 
                            : require("../assets/icons/bookmark_border_uncheck.png")}></Image>
                        ): ""}
                  
                    </View>
                    <View>
                        {props.salary != null ? (
                            <Text style={{fontWeight: "500"}}>
                                ${props.salary}
                            </Text>
                            ): ""
                        }
                       
                    </View>
                </View>
            </View>
    )
}
export default JobTag;
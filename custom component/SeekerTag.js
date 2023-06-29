import React from "react";
import { View, Image, Text } from "react-native";
import Colors from "../assets/Colors"
//props: logo, jobTitle, country, typeWork, isMark, salary
const SeekerTag = (props) => {
    return(
            <View style={{flexDirection:"row", justifyContent:"space-between" ,borderRadius: 10, paddingTop: 16, paddingBottom: 16, height: 92,
                        paddingStart: 20, paddingEnd: 20, borderWidth: 1, borderColor: "#E0E0E0", marginBottom: 12,
                  }}>

                <View style={{flexDirection:"row"}}>
                    <View >
                        <Image resizeMode="cover" style={{borderRadius: 5, height: 60, width: 60}}
                            source={props.image}/>
                    </View>
                    <View style={{marginStart: 20, height: 60}}>
                        <Text style={{fontWeight: "600", fontSize: 18,}}>{props.name}</Text>
                        <Text style={{fontWeight: "400", fontSize: 14,}}>{props.email}</Text>
                        <Text style={{fontWeight: "400", fontSize: 14,}}>{props.phone}</Text>
                    </View>
                </View>
            </View>
    )
}
export default SeekerTag;
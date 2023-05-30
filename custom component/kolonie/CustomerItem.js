import React from "react";
import {View, Image, Text} from "react-native"
import Colors from "../../assets/Colors"


const CustomerItem = (props) =>{
    return(
        <View style={{height:160, width: "44%", margin: "3%", backgroundColor: Colors.light_green, 
            borderRadius: 24, borderStyle:"dashed", borderWidth: 2, borderColor: "#ADADAD", alignItems:"center"}}>
            <View style={{margin:10,marginBottom:5,width:50, height: 50, borderWidth:2,borderColor:"#FFEAF1", borderRadius:50, overflow:"hidden"}}>
                <Image source={props.avatar}
                    style={{width: "100%", height:"100%"}}></Image>
            </View>
            <View style={{margin:2}}> 
                <Text style={{fontWeight:"bold", fontSize:15}} numberOfLines={1} ellipsizeMode="tail">{props.name}</Text>           
            </View>
            <View style={{margin:2}}> 
                <Text style={{maxWidth:"90%", fontSize:13, color:"gray"}} numberOfLines={1} ellipsizeMode="tail">{props.phone}</Text>           
            </View>
            <View style={{margin:5, flexDirection: "row", padding: 4, paddingStart: 12, paddingEnd:12,
            backgroundColor:Colors.gray, borderRadius: 28}}> 
                <Text style={{marginEnd: 5, fontWeight:"800",color:"red"}}>{props.point}</Text>
                <Text>point</Text>           
            </View>
        </View> 
    );
}
export default CustomerItem
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Colors from '../assets/Colors'

export default CustomRequirementItem = (props) => {
    return (
        <View style={styles.requirement}>
            <Image source={require("../assets/icons/check_circle_outline_rounded.png")}
                style={{ height: 22, width: 22, marginEnd: 10 }} resizeMode="cover"></Image>
            <Text>{props.content}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    requirement: {
        marginTop: 10, 
        marginEnd: 10, 
        padding: 15,
        paddingStart: 25,
        paddingEnd: 25, 
        backgroundColor: Colors.lightBlue,
        borderRadius: 10,
        flexDirection: "row"
    }
})
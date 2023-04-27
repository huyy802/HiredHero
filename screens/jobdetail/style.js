import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../assets/Color"

const styles = StyleSheet.create({
    requirement: {
        marginTop: 10, 
        marginEnd: 10, 
        padding: 15,
        paddingStart: 25,
        paddingEnd: 25, 
        backgroundColor: colors.lightBlue,
        borderRadius: 10,
        flexDirection: "row"
    }
});

export default styles;
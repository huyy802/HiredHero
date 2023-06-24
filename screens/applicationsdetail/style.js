import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../assets/Colors.js";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    buttonContainer: {
        position: "absolute", 
        bottom: 20,
        left:20,
        right:20, 
        height: 50, 
        flexDirection: "row", 
        justifyContent: "space-between",
        paddingTop: 6, 
        paddingBottom: 6,
    },
    pendingButton: {
    
        height: 48,
        opacity: 0.6, 
        backgroundColor: "#DADADA",
        paddingStart: 55, 
        paddingEnd: 55, 
        width:"100%",
        backgroundColor:Colors.blue,
        borderRadius: 30, 
        flexDirection:"column", 
        justifyContent:"center"
    }
});

export default styles
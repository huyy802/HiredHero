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
        paddingStart: 55, 
        paddingEnd: 55, 
        backgroundColor:Colors.blue,
        borderRadius: 30, 
        flexDirection:"column", 
        justifyContent:"center",
        width: "49%",
    },
    acceptedButton: {
        height: 48,
        paddingStart: 55, 
        paddingEnd: 55, 
        width:"100%",
        backgroundColor:Colors.blue,
        borderRadius: 30, 
        flexDirection:"column", 
        justifyContent:"center"
    },
    rejectButton: {
        height: 48,
        paddingStart: 55, 
        paddingEnd: 55, 
        width:"100%",
        backgroundColor:Colors.black,
        borderRadius: 30, 
        flexDirection:"column", 
        justifyContent:"center"
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      modalCloseButton:{
        position: 'absolute',
        top: 0,
        width: "100%",
        padding: 10,
      
        alignItems: 'center',
        backgroundColor: Colors.black,
        color: Colors.white,
      },
      textInput: {
        borderRadius: 30,
        padding: 10,
        paddingLeft: 15,
        backgroundColor: "#F2F2F2",
        marginTop: 5,
        marginBottom: 5,
    },
});

export default styles
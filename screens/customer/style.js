import { StyleSheet, Dimensions } from "react-native";

import Colors from "../../assets/Colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  filter_advance: {
    marginEnd: 12, height: 50, paddingEnd: 12, paddingStart: 12, flexDirection:"column", justifyContent:"center"
  },
  filter_option: {
    marginEnd: 12, height: 50, paddingEnd: 3, paddingStart: 3, paddingTop: 3, paddingBottom:3, flexDirection:"row", justifyContent:"space-between"
  },
  filter_option_selected:{
    height:"100%", width: "40%", 
    backgroundColor:Colors.primary_kolonie, borderRadius: 28, justifyContent:"center", alignItems: "center"},
  filter_option_unselect:{
    height:"100%", width: "30%", 
    borderRadius: 28, justifyContent:"center", alignItems: "center"
  }
});
export default styles;

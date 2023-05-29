import { StyleSheet, Dimensions } from "react-native";
import styles from './style';

import Colors from "../../assets/Color";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  filter: {
    marginEnd: 12, borderRadius: 24, height: 36, borderWidth: 2, paddingEnd: 10, paddingStart: 10, flexDirection:"column", justifyContent:"center"
  },
  
});
export default styles;

import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../assets/Colors.js";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export const styles = StyleSheet.create({
  textGrey: {
    fontSize: 15,
    color: "#888888",
    fontWeight: "w900",
  },
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backgroundBlack: {
    flex: 0.2,
    backgroundColor: "#000000",
  },
  backgroundGray: {
    flex: 0.8,
    backgroundColor: "#F4F6F9",
  },

  avatar: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    borderRadius: 50,
    marginTop: height * 0.1,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  bottomNavigationContainer: {
    position: "absolute",
    bottom: 0,
    // left: 0,
    // right: 0,
    alignItems: "center",
  },

  contentContainer: {
    width: "80%",
    marginTop: 20,
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  addressContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    marginLeft: width * 0.2,
    marginTop: 10,
  },
  phoneContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginLeft: width * 0.2,
    justifyContent: "flex-start",
    marginTop: 10,
  },
  aboutMeContainer: {
    width: "100%",
    marginTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: colors.white,
  },
  aboutMeTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: height * 0.01,
    alignSelf: "flex-start",
  },

  aboutMeText: {
    fontSize: 16,
    fontWeight: "w600",
  },
});
export default styles;

import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../assets/Colors.js";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export const styles = StyleSheet.create({
  separatorComponent: {
    height: 20,
  },
  bottomNavigationContainer: {
    alignItems: "center",
  },
  screen: {
    backgroundColor: "#f8f8fa",
    flex: 1,
  },
  separatorComponent: {
    height: 20,
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 15,
    justifyContent: "space-between",
  },
  listContainer: {
    marginTop: 10,
  },
  logo: {
    height: height * 0.2,
    width: width * 0.4,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "SourceSansPro-Regular",
    marginTop: height * 0.07,
    marginBottom: height * 0.03,
  },
  titleEmailInput: {
    alignSelf: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: width * 0.03,
    alignItems: "center",
    fontFamily: "SourceSansPro-Regular",
    fontSize: 18,
    fontWeight: "bold",
  },
  titlePasswordInput: {
    alignSelf: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: width * 0.03,
    fontFamily: "SourceSansPro-Regular",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: height * 0.02,
  },
  redAsterisk: {
    color: "red",
  },
  eyeIcon: {
    marginRight: width * 0.03,
    alignSelf: "center",
  },
  rememberMeText: {
    alignItems: "center",
    marginLeft: width * 0.02,
  },
  checkboxContainer: {
    marginLeft: width * 0.07,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "flex-start",
    marginTop: height * 0.02,
  },
  signInButton: {
    backgroundColor: "#C9C9C9",
    borderRadius: 30,
    width: width * 0.65,
    height: height * 0.1,
  },
  forgotPasswordText: {
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: -0.3,
    color: "#3D70D1",

    marginTop: height * 0.015,
  },
  continueText: {
    marginTop: height * 0.03,
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: -0.3,
    color: "#000000",
  },
  signUpContainer: {
    marginTop: height * 0.02,
    flexDirection: "row",
    alignItems: "center",
  },
  dontHaveAccount: {
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.3,
    color: "#929292",
  },
  signUpButton: {
    marginLeft: width * 0.02,
  },
  signUpText: {
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.3,
    color: "#3D70D1",
  },
  filterOptionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.backgroundColor,
  },
  filterOptionButton: {
    alignItems: "center",
    minWidth: width * 0.2,
    backgroundColor: colors.primary,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 12,
    marginRight: 10,
  },
  filterOptionButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "bold",
  },
  // option button
  selectedOptionButton: {
    backgroundColor: colors.black,
    borderColor: colors.black,
  },
  unselectedOptionButton: {
    borderWidth: 2,
    borderColor: colors.black,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  filterOptionButtonText: {
    color: colors.red,
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedOptionText: {
    color: colors.white,
  },
  unselectedOptionText: {
    color: colors.black,
  },
});
export default styles;

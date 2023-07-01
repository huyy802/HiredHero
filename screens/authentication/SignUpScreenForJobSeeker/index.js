import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCheckSquare,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import Colors from "../../../assets/Colors";
import { useNavigation } from "@react-navigation/core";
import logo from "../../../assets/images/app_logo.png";
import CustomTextInput from "../../../custom component/CustomTextInput";
import CustomButton from "../../../custom component/CustomButton";
import { useDispatch } from "react-redux";
import { getAPIActionJSON } from "../../../api/ApiActions";

import styles from "./style";
const SignupScreenForJobSeeker = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isMatchPassword, setIsMatchPassword] = useState(true);
  const [isSecureEntryPW, setIsSecureEntryPW] = useState(true);
  const [isSecureEntryCPW, setIsSecureEntryCPW] = useState(true);

  const [rememberMe, setRememberMe] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  const buttonColor = email !== "" && password !== "" ? "#000000" : "#C9C9C9";
  const isButtonDisabled = email === "" || password === "";
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleResponse = (response) => {
    if (!response.success) {
      Alert.alert(response.message);
      console.log(response.message);
      return;
    }
    navigation.navigate("HomeScreen");
  };

  const handleSignup = async () => {
    setIsMatchPassword(password === confirmPassword);

    console.log(isMatchPassword);
    // dispatch(
    //   getAPIActionJSON(
    //     "loginUser",
    //     {
    //       email: email,
    //       password: password,
    //     },
    //     null,
    //     "",
    //     (e) => handleResponse(e)
    //   )
    // );
  };
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.container}>
          <Image source={logo} style={styles.logo}></Image>

          <Text style={styles.title}>Sign Up</Text>
          <View>
            <Text style={styles.titleEmailInput}>
              <Text>Email</Text>
              <Text style={styles.redAsterisk}>*</Text>
            </Text>
            <CustomTextInput
              placeholder="Email"
              blurColor={Colors.primary}
              value={email}
              onChangeText={(text) => setEmail(text)}
            ></CustomTextInput>
          </View>

          <View>
            <Text style={styles.titlePasswordInput}>
              <Text>Password</Text>
              <Text style={styles.redAsterisk}>*</Text>
            </Text>
            <CustomTextInput
              placeholder="Password"
              blurColor={Colors.primary}
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={isSecureEntryPW}
              icon={
                <TouchableOpacity
                  onPress={() => {
                    setIsSecureEntryPW((prev) => !prev);
                  }}
                >
                  <FontAwesomeIcon
                    icon={isSecureEntryPW ? faEyeSlash : faEye}
                    style={styles.eyeIcon}
                  />
                </TouchableOpacity>
              }
              iconPosition="right"
            ></CustomTextInput>
          </View>
          <View>
            <Text style={styles.titlePasswordInput}>
              <Text>Confirm password</Text>
              <Text style={styles.redAsterisk}>*</Text>
            </Text>
            <CustomTextInput
              placeholder="Confirm password"
              blurColor={Colors.primary}
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              secureTextEntry={isSecureEntryCPW}
              icon={
                <TouchableOpacity
                  onPress={() => {
                    setIsSecureEntryCPW((prev) => !prev);
                  }}
                >
                  <FontAwesomeIcon
                    icon={isSecureEntryCPW ? faEyeSlash : faEye}
                    style={styles.eyeIcon}
                  />
                </TouchableOpacity>
              }
              iconPosition="right"
            ></CustomTextInput>
          </View>
          {!isMatchPassword && (
            <Text style={{ color: Colors.red }}>
              Password does not match!!!
            </Text>
          )}
          {/* Login button section  */}
          <CustomButton
            title="Sign Up"
            onPress={handleSignup}
            buttonColor={buttonColor}
            borderRadius={30}
            textColor="#FFFFFF"
            height={50}
            width={360}
            fontSize={16}
            fontWeight="bold"
            fontFamily="Arial"
            disabled={isButtonDisabled}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};
export default SignupScreenForJobSeeker;

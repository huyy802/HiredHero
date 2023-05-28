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
import Colors from "../../../../assets/Colors";
import { useNavigation } from "@react-navigation/core";
import logo from "../../../../assets/images/app_logo.png";
import CustomTextInput from "../../../../custom component/CustomTextInput";
import CustomButton from "../../../../custom component/CustomButton";
import CustomLoginMethodContainer from "../../../../custom component/CustomLoginMethod";
// import eye from "../../../../assets/icons/eye.png";
// import hidden from "../../../../assets/icons/close-eye.png";
// import Colors from "../../../../assets/Colors";
// import background from "../../../../assets/images/background.png";
// import CustomModal from "../../../../custom component/CustomModal";
import styles from "./style";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  const buttonColor = email !== "" && password !== "" ? "#000000" : "#C9C9C9";
  const isButtonDisabled = email === "" || password === "";

  // const dispatch = useDispatch();
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.container}>
          <Image source={logo} style={styles.logo}></Image>

          <Text style={styles.title}>Sign in to your account</Text>
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
              secureTextEntry={isSecureEntry}
              icon={
                <TouchableOpacity
                  onPress={() => {
                    setIsSecureEntry((prev) => !prev);
                  }}
                >
                  <FontAwesomeIcon
                    icon={isSecureEntry ? faEyeSlash : faEye}
                    style={styles.eyeIcon}
                  />
                </TouchableOpacity>
              }
              iconPosition="right"
            ></CustomTextInput>
          </View>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
              <FontAwesomeIcon
                icon={rememberMe ? faCheckSquare : faSquare}
                size={20}
              />
            </TouchableOpacity>
            <Text style={styles.rememberMeText}>Remember me</Text>
          </View>
          <CustomButton
            title="Sign In"
            onPress={() => {
              // handle sign in logic here
            }}
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

          <TouchableOpacity
            onPress={() => {
              // navigation.navigate("ForgotPasswordScreen");
              console.log("Forgot the password");
            }}
          >
            <Text style={styles.forgotPasswordText}>For got the password?</Text>
          </TouchableOpacity>
          <Text style={styles.continueText}>or continue with</Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <CustomLoginMethodContainer
              uri="https://www.facebook.com/images/fb_icon_325x325.png"
              text="Facebook"
            />
            <View style={{ marginLeft: 15 }}>
              <CustomLoginMethodContainer
                uri={null}
                image={require("../../../../assets/icons/google-logo.png")}
                text="Google"
              />
            </View>
          </View>
          <View style={styles.signUpContainer}>
            <Text style={styles.dontHaveAccount}>Don’t have an account?</Text>
            <TouchableOpacity style={styles.signUpButton}>
              <Text style={styles.signUpText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};
export default LoginScreen;

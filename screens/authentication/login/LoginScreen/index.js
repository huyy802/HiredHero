import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import logo from "../../../../assets/images/logo_app.png";
import CustomTextInput from "../../../../custom component/CustomTextInput";
import eye from "../../../../assets/icons/eye.png";
import hidden from "../../../../assets/icons/close-eye.png";
import Colors from "../../../../assets/Colors";
import background from "../../../../assets/images/background.png";
import CustomModal from "../../../../custom component/CustomModal";
import styles from "./style";
const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [visible, setVisible] = React.useState(false);
  const dispatch = useDispatch();
};
export default LoginScreen;

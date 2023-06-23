import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import HomeScreen from "../screens/home/HomeScreen";
import ApplicationScreen from "../screens/applications";
import { useState } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
  } from "react-native";
  import {
    faHome,
    faBriefcase,
    faBuilding,
    faUser,
  } from "@fortawesome/free-solid-svg-icons";
import Colors from "../assets/Colors";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createStackNavigator } from '@react-navigation/stack';
import CustomBottomNavigation from '../custom component/CustomBottomNavigation';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const Tabs = () => {

    return(
        <Tab.Navigator tabBar={props => <CustomBottomNavigation {...props}/>}>
            <Tab.Screen  options={{ headerShown: false }} name="Home" component={HomeScreen} />
            <Tab.Screen  options={{ headerShown: false }} name="Application" component={ApplicationScreen} />
        </Tab.Navigator>
    )
    
}

export default Tabs

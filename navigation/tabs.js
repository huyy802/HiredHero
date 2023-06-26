import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import HomeScreen from "../screens/home/HomeScreen";
import ApplicationScreen from "../screens/applications";
import { useEffect, useState } from 'react';
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
import CompanyScreen from '../screens/companies';
import ProfileScreen from '../screens/profile/ProfileScreen';
import BookmarkScreen from '../screens/bookmark/BookmarkScreen';
const Tab = createBottomTabNavigator();


const Tabs = ({route, navigation}) => {
    const selectedTab  = route.params !== undefined ? route.params.selectedTab : "Home";

    useEffect(() => {
      const unsubscribe = navigation.addListener('tabPress', (e) => {
        e.preventDefault();
        navigation.navigate("selectedTab");
      });
      return unsubscribe
    },[])

    return(
        <Tab.Navigator tabBar={props => <CustomBottomNavigation {...props} selectedTab={selectedTab}/>}>
            <Tab.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
            <Tab.Screen options={{ headerShown: false }} name="Application" component={ApplicationScreen} />
            <Tab.Screen options={{headerShown: false}} name='Company' component={CompanyScreen}/>
            <Tab.Screen options={{headerShown: false}} name='Profile' component={ProfileScreen}/>
            <Tab.Screen options={{headerShown: false}} name='Bookmark' component={BookmarkScreen}/>

        </Tab.Navigator>
    )
    
}

export default Tabs

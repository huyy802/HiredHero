import React, { useEffect } from "react";
import {
  Easing,
  LogBox,
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
} from "react-native";

import {
  createStackNavigator,
  TransitionSpecs,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { Provider, useSelector } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import store from "./app/store";

import SplashScreen from "./screens/onboarding/SplashScreen/index";
import LoginScreen from "./screens/authentication/login/LoginScreen/index";
import OnBoardingScreen from "./screens/onboarding/OnBoardingScreen";
import CustomerScreen from "./screens/customer/index";
import ProfileScreen from "./screens/profile/ProfileScreen";
import HomeScreen from "./screens/home/HomeScreen";
import JobDetailScreen from "./screens/jobdetail";
import ApplicationScreen from "./screens/applications";
import Tabs from "./navigation/tabs";
import ApplicationDetailScreen from "./screens/applicationsdetail";
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import CompanyDetailScreen from "./screens/companydetail";

import BookmarkScreen from "./screens/bookmark/BookmarkScreen";
import CustomBottomNavigation from "./custom component/CustomBottomNavigation";
const Stack = createStackNavigator();

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 250,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const closeConfig = {
  animation: "timing",
  config: {
    duration: 200,
    easing: Easing.linear,
    toValue: 200,
  },
};
const customTransition = {
  gestureEnabled: true,
  gestureDirection: "horizontal",
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            rotate: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: ["180deg", "0deg"],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.7],
                })
              : 1,
          },
        ],
      },
      opacity: current.opacity,
    };
  },
};

LogBox.ignoreAllLogs();

function Navigation() {
  const state = useSelector((state) => state);
  console.log("current state", state);
  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: "horizontal",
          }}
        >
          <Stack.Screen
            options={{ headerShown: false }}
            name="HomeScreen"
            component={Tabs}
           
          />
        <Stack.Screen
          options={{headerShown: false}}
          name="CompanyDetailScreen"
          component={CompanyDetailScreen}/>
        <Stack.Screen
          options={{ headerShown: false }}
          name="ProfileScreen"
          component={ProfileScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="BookmarkScreen"
          component={BookmarkScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ApplicationDetailScreen"
          component={ApplicationDetailScreen}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="JobDetailScreen"
          component={JobDetailScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="OnBoardingScreen"
          component={OnBoardingScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CustomerScreen"
          component={CustomerScreen}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function LoadingAnimation() {
  const loading = useSelector((state) => state.setting.loading);
  if (!loading) return null;
  return (
    <View
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(100, 100, 100, 0.6)",
      }}
    >
      <ActivityIndicator color="#bb5533" size="large" />
      <Text
        style={{
          fontSize: 18,
          marginTop: 12,
        }}
      >
        Loading ...
      </Text>
    </View>
  );
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


export default function App() {
 
  return (
    <Provider store={store}>
      <Navigation />

      {<LoadingAnimation />}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

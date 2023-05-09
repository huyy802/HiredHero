import React from "react";
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
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="OnBoardingScreen"
          component={OnBoardingScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="LoginScreen"
          component={LoginScreen}
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
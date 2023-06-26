import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faUser,
  faBookBookmark,
} from "@fortawesome/free-solid-svg-icons";
import Colors from "../assets/Colors";

import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const Tab = createBottomTabNavigator();
import Svg, { Path } from "react-native-svg";
import HomeScreen from "../screens/home/HomeScreen";
import BookmarkScreen from "../screens/bookmark/BookmarkScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import { useSelector } from "react-redux";

const TabBarCustomButton = ({
  accessibilityState,
  children,
  onPress,
  label,
}) => {
  const theme = useSelector((state) => state.setting.theme);
  var isSelected = accessibilityState.selected;

  // if (isSelected) {

  return (
    <View style={{ marginVertical: 15 }}>
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          isSelected
            ? styles.activeButtonContainer
            : styles.inactiveButtonContainer,
          { marginLeft: 20 },
        ]}
        activeOpacity={1}
        onPress={onPress}
      >
        <View style={styles.buttonContent}>
          {isSelected ? (
            <>
              {children}
              <Text
                style={[
                  styles.buttonText,
                  { color: theme.mode === "light" ? "black" : "white" },
                ]}
              >
                {label}
              </Text>
            </>
          ) : (
            <View style={styles.centeredIconContainer}>{children}</View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const CustomTabBar = (props) => {
  return (
    // <View style={styles.container}>
    <BottomTabBar {...props.props} />
    // </View>
  );
};

const Tabs = () => {
  return (
    // <View>
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: height * 0.03,
          left: (width - 0.9 * width) / 2,
          width: 0.9 * width,
          height: height * 0.09,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          borderTopWidth: 0,
          backgroundColor: "white",
          display: "flex",
        },
      }}
      tabBar={(props) => <CustomTabBar props={props} />}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon icon={faHome} color={Colors.black} size={20} />
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton {...props} label="Home" />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon icon={faHome} color={Colors.black} size={20} />
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton {...props} label="Search" />
          ),
        }}
      />

      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faBookBookmark}
              color={Colors.black}
              size={20}
            />
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton {...props} label="Bookmark" />
          ),
        }}
      />

      <Tab.Screen
        name="User"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon icon={faUser} color={Colors.black} size={20} />
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton {...props} label="Profile" />
          ),
        }}
      />
    </Tab.Navigator>
    // {/* </View> */}
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: "red",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: height * 0.1,
    width: width * 0.9,
    backgroundColor: Colors.white,
    borderRadius: 20,
    marginBottom: 10,
    marginTop:10,
    paddingHorizontal: 10,
    elevation: 20,
    alignSelf: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  activeButtonContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  inactiveButtonContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  buttonText: {
    color: Colors.black,
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 20,
  },
  centeredIconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

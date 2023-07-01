import React, { useState, useEffect } from "react";
import { View, SafeAreaView, FlatList, Alert } from "react-native";
import CustomAppBarWithImage from "../../../custom component/CustomAppBarWithImage.js";
import CustomPostNewsfeed from "../../../custom component/CustomPostNewsfeed.js";
import { useDispatch } from "react-redux";
import { getAPIActionJSON } from "../../../api/ApiActions.js";

const DetailPostScreen = ({ post }) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <CustomPostNewsfeed post={post}></CustomPostNewsfeed>
      </View>
    </SafeAreaView>
  );
};

export default DetailPostScreen;

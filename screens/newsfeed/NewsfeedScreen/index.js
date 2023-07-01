import React, { useState, useEffect } from "react";
import { View, SafeAreaView, FlatList, Alert } from "react-native";
import CustomAppBarWithImage from "../../../custom component/CustomAppBarWithImage.js";
import CustomPostNewsfeed from "../../../custom component/CustomPostNewsfeed.js";
import { useDispatch } from "react-redux";
import { getAPIActionJSON } from "../../../api/ApiActions.js";

const NewsfeedScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState([]);
  const handleResponse = (response) => {
    if (!response.success) {
      Alert.alert(response.data);
      return;
    }
    console.log("data ne:", response.data);
    setPostData(response.data);
  };

  const getData = () => {
    dispatch(
      getAPIActionJSON("getAllPosts", null, null, "", (e) => handleResponse(e))
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomAppBarWithImage
        title="Posts"
        imagePath={require("../../../assets/images/app_logo.png")}
      />
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ flex: 1 }}
          data={postData}
          renderItem={({ item }) => (
            <CustomPostNewsfeed
              onPress={() => {
                console.log("Pressed");
                navigation.navigate("DetailPostScreen", { post: item });
              }}
              post={item}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default NewsfeedScreen;

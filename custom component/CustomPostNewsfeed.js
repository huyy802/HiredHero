import React, { useState } from "react";
import {
  View,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import Colors from "../assets/Colors";
import { useNavigation } from "@react-navigation/core";

import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import CustomJobCard from "./CustomJobCard";
import Moment from "moment";
import "moment/locale/en-au"; // Set the locale to your preference
import CustomJobCardInPost from "./CustomJobCardInPost";
const CustomPostNewsfeed = ({ post, onPress }) => {
  const navigation = useNavigation();
  console.log("post author", post.author.name);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.headerContainer}>
        <Image
          source={require("../assets/images/test/airbnb.png")}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.nameText}> {post.author.name}</Text>
          {/* <Text style={styles.nameText}> ok</Text> */}

          <View style={styles.timeContainer}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              color={Colors.black}
              size={18}
            />
            <Text> {Moment(post.postDate).fromNow()} </Text>
            {/* <Text> 123 </Text> */}
          </View>
        </View>

        {/* <Text>yes</Text> */}
      </View>
      <Text style={styles.descriptionText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
        semper tortor vulputate luctus. Pellentesque faucibus mattis hendrerit.
        Etiam vel pharetra felis, vitae gravida leo. Nulla facilisi. Maecenas
        scelerisque massa at est interdum egestas. Fusce posuere sed felis quis
        interdum. Fusce cursus, est non mattis mollis, lorem justo blandit ex,
        non varius massa velit at metus. Integer sit amet tincidunt tellus.
      </Text>
      <CustomJobCardInPost
        onPress={() => {
          navigation.navigate("JobDetailScreen", { job: post.job });
        }}
        nameJob={post.job.jobTitle}
        companyName={post.job.company.companyName}
        location={post.job.location}
        type={post.job.type}
        salary={post.job.salary}
        isSaved={post.job.isSaved}
        imagePath={require("../assets/images/test/airbnb.png")}
      ></CustomJobCardInPost>
    </TouchableOpacity>
    // <TouchableOpacity style={styles.container}>
    //   <View style={styles.imageContainer}>
    //     <Image source={imagePath} style={styles.image} />
    //   </View>
    //   <View style={styles.content}>
    //     <Text style={styles.jobTitle}>{nameJob}</Text>
    //     <Text style={styles.company}>{companyName}</Text>
    //     <View style={styles.locationAndType}>
    //       <Text style={styles.location}>{location}</Text>
    //       <Text> - </Text>
    //       <Text style={styles.type}>{type}</Text>
    //     </View>
    //   </View>
    //   <View style={styles.actionContainer}>
    //     <TouchableOpacity onPress={toggleSave} style={styles.saveButton}>
    //       <FontAwesomeIcon
    //         name={saved ? "bookmark" : "bookmark-o"}
    //         size={20}
    //         color={saved ? "black" : "#888"}
    //       />
    //     </TouchableOpacity>
    //     <Text style={styles.salary}>${salary}</Text>
    //   </View>
    // </TouchableOpacity>
  );
};
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
  descriptionText: {
    marginBottom: 10,
  },
  infoContainer: {
    marginLeft: width * 0.01,
  },
  timeContainer: {
    flexDirection: "row",
  },
  container: {
    margin: width * 0.05,
    padding: width * 0.03,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#F3F3F4",
    borderRadius: 20,
  },
  headerContainer: {
    flexDirection: "row",
  },
  image: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: 50,
  },
  nameText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  hourText: {
    fontSize: 13,
    color: "#a4a4a4",
  },
});

export default CustomPostNewsfeed;

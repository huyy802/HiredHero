import React from "react";
import { FlatList } from "react-native";
import CustomJobCard from "./CustomJobCard";

const CustomJobList = ({ data }) => {
  const renderItem = ({ item }) => (
    <CustomJobCard
      nameJob={item.jobName}
      companyName={item.companyName}
      location={item.location}
      type={item.type}
      salary={item.salary}
      isSaved={item.isSaved}
      imagePath={item.imagePath}
    />
  );

  const keyExtractor = (_, index) => index.toString();

  return (
    <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
  );
};

export default CustomJobList;

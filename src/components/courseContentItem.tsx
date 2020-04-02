import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

const CourseContentItem: React.FC<{
  itemNo?: string;
  timeLength?: string;
  title?: string;
}> = ({ itemNo, timeLength, title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 38
      }}
    >
      <View>
        <Text
          style={{
            color: "#E4E7F4",
            lineHeight: 38,
            fontSize: 32,
            fontWeight: "900"
          }}
        >
          {itemNo}
        </Text>
      </View>
      <View>
        <Text>{timeLength}</Text>
        <Text>{title}</Text>
      </View>
      <TouchableOpacity
        style={{
          width: 40,
          aspectRatio: 1,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#49CC96"
        }}
      >
        <Ionicons name="md-play" color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

CourseContentItem.defaultProps = {
  itemNo: "01",
  timeLength: "5:35 mins",
  title: "Welcome to the Course"
};

export default CourseContentItem;

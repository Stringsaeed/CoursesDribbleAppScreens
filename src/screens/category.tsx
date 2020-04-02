import * as React from "react";
import { Text, ScrollView, View, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppStyles from "../styles";
import { useHeaderHeight } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CourseContentItem } from "../components";

const { Fragment } = React;
const { width } = Dimensions.get("window");

export const CategoryScreen = ({}) => {
  const headerHeight: number = useHeaderHeight();
  return (
    <Fragment>
      <ScrollView
        contentContainerStyle={[
          AppStyles.screen,
          {
            flex: 1,
            paddingTop: headerHeight + 65,
            paddingHorizontal: 24,
            backgroundColor: "#F5F4EF"
          }
        ]}
      >
        <View style={{ marginBottom: 24 }}>
          <Text
            style={{
              fontSize: 28,
              color: "#0D1333",
              fontFamily: "AvenirNextLTPro-Demi"
            }}
          >
            Design Thinking
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 32
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginRight: 12
            }}
          >
            {/** TODO: icon */}
            <Ionicons name="md-people" size={20} color="#61688B" />
            <Text
              style={{
                fontSize: 16,
                color: "#61688B",
                marginLeft: 6
              }}
            >
              18k
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Ionicons name="md-star" size={20} color="#61688B" />
            <Text
              style={{
                fontSize: 16,
                color: "#61688B",
                marginLeft: 6
              }}
            >
              4.5
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "baseline",
            marginBottom: 32
          }}
        >
          <Text
            style={{
              color: "#0D1333",
              fontWeight: "700",
              fontSize: 32,
              marginRight: 12
            }}
          >
            $50
          </Text>
          <Text
            style={{
              color: "#A0A5BD",
              fontWeight: "300",
              fontSize: 16
              // alignSelf: "flex-end"
            }}
          >
            $70
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            shadowOffset: {
              width: 4,
              height: -4
            },
            paddingHorizontal: 24,
            paddingTop: 48,
            shadowOpacity: 0.4,
            shadowRadius: 6,
            width: width,
            shadowColor: "#0000000f",
            backgroundColor: "#FFFFFF",
            height: 539
          }}
        >
          <View style={{ marginBottom: 24 }}>
            <Text style={{ color: "#0D1333", fontSize: 20, fontWeight: "600" }}>
              Course Content
            </Text>
          </View>
          <CourseContentItem />
          <CourseContentItem />
          <CourseContentItem />
          <CourseContentItem />
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          left: 0,
          right: 0,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          shadowOffset: {
            width: 0,
            height: -8
          },
          // paddingHorizontal: 20,
          // paddingTop: 20,
          shadowOpacity: 0.4,
          shadowRadius: 80,
          width: width,
          shadowColor: "#000000f7",
          backgroundColor: "#FFFFFF",
          height: 96
        }}
      >
        <View
          style={{
            flex: 80,
            borderRadius: 1000,
            paddingVertical: 16,
            paddingHorizontal: 28,
            backgroundColor: "#FFEDEE",
            // marginHorizontal: 20,
            marginVertical: 20,
            marginRight: 10,
            marginLeft: 20
          }}
        >
          <Ionicons name="ios-cart" size={24} color="#FF6670" />
        </View>
        <TouchableOpacity
          style={{
            flex: 274,
            paddingHorizontal: 99,
            paddingVertical: 17,
            backgroundColor: "#6E8AFA",
            borderRadius: 50,
            marginRight: 20,
            marginLeft: 10,
            marginVertical: 20
          }}
        >
          <Text
            style={{
              fontSize: 18,
              lineHeight: 22,
              color: "#FFFFFF",
              fontWeight: "500"
            }}
          >
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

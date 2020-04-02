import * as React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, ScrollView, View, Dimensions } from "react-native";

import AppStyles from "../styles";
import { SearchBar, CategoryCard } from "../components";
import { RootStackParamsList } from "../routers/root.router";

const { width } = Dimensions.get("window");

export const HomeScreen: React.FC<{
  navigation: StackNavigationProp<RootStackParamsList>;
}> = ({ navigation }) => {
  return (
    <ScrollView
      contentContainerStyle={[
        AppStyles.screen,
        {
          flex: 1,
          // justifyContent: "center",
          // alignItems: "center",
          paddingTop: 40,
          paddingHorizontal: 24,
          backgroundColor: "white"
        }
      ]}
    >
      <View style={{ marginBottom: 16 }}>
        <Text
          style={{
            fontSize: 28,
            // fontWeight: "600",
            fontFamily: "AvenirNextLTPro-Demi"
          }}
        >
          Hey Alex,
        </Text>
      </View>
      <View style={{ marginBottom: 40 }}>
        <Text
          style={{
            fontSize: 24,
            color: "#61688B",
            fontFamily: "AvenirNextLTPro-Regular"
          }}
        >
          Find a course you want to learn
        </Text>
      </View>
      <View style={{ marginBottom: 52 }}>
        <SearchBar />
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 24
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#0D1333",
              fontFamily: "AvenirNextLTPro-Demi"
            }}
          >
            Categories
          </Text>
          <Text
            style={{
              color: "#6E8AFA",
              fontSize: 18,
              fontWeight: "600",
              fontFamily: "AvenirNextLTPro-Demi"
            }}
          >
            See All
          </Text>
        </View>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <CategoryCard
            onPress={() => {
              navigation.push("@ROUTERS_CATEGORY_STACK");
            }}
            containerStyle={{
              width: (width - 48 - 24) / 2,
              backgroundColor: "#FFEFF0",
              height: 200,
              borderRadius: 16,
              marginBottom: 24,
              flexShrink: 0
            }}
          />
          <CategoryCard
            onPress={() => {
              navigation.push("@ROUTERS_CATEGORY_STACK");
            }}
            containerStyle={{
              width: (width - 48 - 24) / 2,
              flexShrink: 0,
              backgroundColor: "#F5F4EF",
              height: 240,
              marginBottom: 24,
              borderRadius: 16
            }}
          />
          <CategoryCard
            onPress={() => {
              navigation.push("@ROUTERS_CATEGORY_STACK");
            }}
            containerStyle={{
              flexShrink: 0,
              width: (width - 48 - 24) / 2,
              backgroundColor: "#F5F4EF",
              height: 240,
              marginBottom: 24,
              marginTop: -40,
              borderRadius: 16
            }}
          />
          <CategoryCard
            onPress={() => {
              navigation.push("@ROUTERS_CATEGORY_STACK");
            }}
            containerStyle={{
              width: (width - 48 - 24) / 2,
              backgroundColor: "#FFEFF0",
              height: 200,
              borderRadius: 16,
              marginBottom: 24,
              flexShrink: 0
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

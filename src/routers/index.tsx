import * as React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootStackComponent from "./root.router";

export default () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <RootStackComponent />
    </NavigationContainer>
  );
};

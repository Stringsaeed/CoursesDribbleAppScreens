import * as React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import HomeStackComponent from "./homeStack.router";

export default () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <HomeStackComponent />
    </NavigationContainer>
  );
};

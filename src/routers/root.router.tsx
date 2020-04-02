import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStackComponent from "./homeStack.router";
import CategoryStackComponent from "./categoryStack.router";

export type RootStackParamsList = {
  "@ROUTERS_HOME_STACK": {};
  "@ROUTERS_CATEGORY_STACK": {};
};

const RootStack = createStackNavigator<RootStackParamsList>();

const RootStackComponent = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen
        name="@ROUTERS_HOME_STACK"
        component={HomeStackComponent}
      />
      <RootStack.Screen
        name="@ROUTERS_CATEGORY_STACK"
        component={CategoryStackComponent}
      />
    </RootStack.Navigator>
  );
};

export default RootStackComponent;

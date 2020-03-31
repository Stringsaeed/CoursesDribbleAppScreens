import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export type HomeStackParamsList = {
  "@ROUTERS_HOME_STACK": {};
};

const HomeStack = createStackNavigator<HomeStackParamsList>();

const HomeStackComponent = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="@ROUTERS_HOME_STACK"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: " ",
          headerTitleAlign: "center",
          headerRight: ({}) => {
            return (
              <MaterialCommunityIcons
                size={40}
                color="black"
                name="account-circle"
              />
            );
          },
          headerStyle: {
            shadowOpacity: 0
          },
          headerLeftContainerStyle: {
            paddingHorizontal: 24
          },
          headerRightContainerStyle: {
            paddingHorizontal: 24
          },
          headerLeft: ({ onPress }) => {
            return <Feather name="align-left" size={24} color="black" />;
          }
        })}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackComponent;

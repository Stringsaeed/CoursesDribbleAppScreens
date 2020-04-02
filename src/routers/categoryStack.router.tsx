import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import { CategoryScreen } from "../screens";
import { TouchableOpacity } from "react-native-gesture-handler";

export type CategoryStackParamsList = {
  "@ROUTERS_CATEGORY_STACK": {};
};

const CategoryStack = createStackNavigator<CategoryStackParamsList>();

const CategoryStackComponent = ({ navigation }): JSX.Element => {
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen
        name="@ROUTERS_CATEGORY_STACK"
        component={CategoryScreen}
        options={({ navigation }) => ({
          headerTitle: " ",
          headerTitleAlign: "center",
          headerTransparent: true,
          headerRight: ({}) => {
            return <Feather size={24} color="black" name="more-vertical" />;
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
            return (
              <TouchableOpacity onPress={navigation.goBack}>
                <Feather name="chevron-left" size={24} color="#61688B" />
              </TouchableOpacity>
            );
          }
        })}
      />
    </CategoryStack.Navigator>
  );
};

export default CategoryStackComponent;

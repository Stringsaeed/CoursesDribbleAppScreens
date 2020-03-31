import { StyleSheet, ViewStyle } from "react-native";

type AppStylesType = {
  screen?: ViewStyle;
};

const AppStyles = StyleSheet.create<AppStylesType>({
  screen: {
    paddingHorizontal: 8
  }
});

export default AppStyles;


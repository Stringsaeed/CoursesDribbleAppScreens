import React, { FC } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  Dimensions
} from "react-native";

interface CategoryCardProps {
  onPress?: () => void;
  containerStyle?: ViewStyle;
}

type CategoryCardType = FC<CategoryCardProps>;
type CategoryCardStyles = { container: ViewStyle };

const { width } = Dimensions.get("window");

const styles = StyleSheet.create<CategoryCardStyles>({
  container: {
    width: (width - 48 - 24) / 2,
    backgroundColor: "#FFEFF0",
    height: 200,
    borderRadius: 16,
    marginBottom: 24,
    flexShrink: 0
  }
});

const CategoryCard: CategoryCardType = ({ onPress, containerStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={StyleSheet.compose(styles.container, containerStyle)}
    />
  );
};

export default CategoryCard;

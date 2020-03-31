import React, { FC } from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Feather } from "@expo/vector-icons";

interface SearchBarProps {
  placeholderText?: string;
}

type SearchBarType = FC<SearchBarProps>;
type SearchBarStyles = { container: ViewStyle; placeholderText: TextStyle };

const styles = StyleSheet.create<SearchBarStyles>({
  container: {
    width: "100%",
    backgroundColor: "#F5F5F7",
    height: 60,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 11,
    borderRadius: 40
  },
  placeholderText: {
    color: "#A0A5BD",
    fontSize: 18,
    fontWeight: "300"
  }
});

const SearchBar: SearchBarType = ({ placeholderText }) => {
  return (
    <View style={styles.container}>
      <Feather
        name="search"
        size={24}
        color="#404870"
        style={{ marginRight: 20 }}
      />
      <Text style={styles.placeholderText}>{placeholderText}</Text>
    </View>
  );
};

SearchBar.defaultProps = {
  placeholderText: "Search for anything"
};

export default SearchBar;

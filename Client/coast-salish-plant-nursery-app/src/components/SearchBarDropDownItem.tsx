import React from "react";
import { TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native";

type SearchBarDropDownItemProps = {
  item: string;
  onClick: () => void;
};

export default function SearchBarDropDownItem(
  props: SearchBarDropDownItemProps
) {
  const { item, onClick } = props;
  return (
    <>
      <TouchableWithoutFeedback onPress={onClick}>
        <View key={item} style={styles.container}>
          <Text key={item}>{item}</Text>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    paddingLeft: 5,
    display: "flex",
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "lightgrey",
  },
});

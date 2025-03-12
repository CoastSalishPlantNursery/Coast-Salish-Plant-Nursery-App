import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";

type ListItemProps = {
  PlantName: string;
  onClick: () => void;
};

export default function ListItem(props: ListItemProps) {
  const { PlantName, onClick } = props;
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.item}>
        <Text>{PlantName}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  item: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: 42,
    paddingLeft: 20,
    marginBottom: 10,
    backgroundColor: "lightgrey",
    opacity: 0.6,

    borderRadius: 5,
  },
});

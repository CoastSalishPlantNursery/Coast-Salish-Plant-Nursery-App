import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { globalStyles } from "../styles/globalStyles";

type ListItemProps = {
  PlantName: string;
  onClick: () => void;
};

export default function ListItem(props: ListItemProps) {
  const { PlantName, onClick } = props;
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={[styles.item, globalStyles.primaryBackgroundColor]}>
        <Text style={{ color: "green" }}>{PlantName}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 42,
    paddingLeft: 20,
    marginBottom: 10,
    // opacity: 0.6,

    borderRadius: 5,
  },
});

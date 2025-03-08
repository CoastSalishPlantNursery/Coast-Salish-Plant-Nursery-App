import React from "react";
import { StyleSheet, View, Text } from "react-native";

type ListItemProps = {
  PlantName: string;
};

export default function ListItem(props: ListItemProps) {
  const { PlantName } = props;
  return (
    <View style={styles.item}>
      <Text>{PlantName}</Text>
    </View>
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
    backgroundColor: "#f9c2ff",
  },
});

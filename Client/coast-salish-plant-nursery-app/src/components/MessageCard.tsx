import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
const errorIcon = require("../images/Error.png");

type MessageCardProps = {
  message: string;
};

export default function MessageCard(props: MessageCardProps) {
  const { message } = props;
  return (
    <>
      <View style={styles.container}>
        <Image source={errorIcon} alt="Error" />
        <Text style={styles.errorMessage}>{message}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 175,
    backgroundColor: "#f9bfbf",
    opacity: 0.7,
    borderRadius: 15,
    boxShadow: "5px 15px 30px black",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  flexContainer: {},
  errorMessage: {
    width: 150,
    color: "#c25656",
  },

  errorHeading: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

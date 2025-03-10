import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
  Image,
} from "react-native";
const backarrow = require("../images/arrow-down.png");

type BackButtonProps = {
  onClick: () => void;
};

export default function BackButton(props: BackButtonProps) {
  return (
    <>
      <TouchableWithoutFeedback onPress={props.onClick}>
        <View style={styles.container}>
          <View style={styles.elipse}>
            <Image source={backarrow} style={styles.image} />
          </View>
          <Text style={styles.text}>Go back</Text>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  elipse: {
    width: 37,
    height: 37,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 5,
    marginRight: 7,
    borderRadius: 360,
    backgroundColor: "grey",
  },
  image: {
    width: 25,
    height: 25,
    transform: [{ rotate: "90deg" }],
  },

  text: {
    fontSize: 16,
  },
});

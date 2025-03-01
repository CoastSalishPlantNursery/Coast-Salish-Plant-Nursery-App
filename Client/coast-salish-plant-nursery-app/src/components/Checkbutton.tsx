import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";

type CheckButtonProps = {
  title: string;
  checked: () => void;
};

export default function Checkbutton(props: CheckButtonProps) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsChecked(!isChecked)}>
        <View
          style={[
            styles.container,
            isChecked ? styles.greenContainer : styles.blackContainer,
          ]}
        >
          <Text style={[isChecked ? styles.greenFont : styles.blackFont]}>
            {props.title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 34,
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  greenContainer: {
    borderColor: "green",
    borderWidth: 1,
    borderStyle: "solid",
  },
  blackContainer: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
  },

  greenFont: {
    color: "green",
  },
  blackFont: {
    color: "black",
  },
});

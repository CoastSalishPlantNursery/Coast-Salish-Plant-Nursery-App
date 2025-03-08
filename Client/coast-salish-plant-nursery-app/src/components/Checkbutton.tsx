import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";

type CheckButtonProps = {
  title: string;
  checked: (isChecked: boolean) => void;
};

export default function Checkbutton(props: CheckButtonProps) {
  const { title, checked } = props;
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setIsChecked(!isChecked);
          checked(isChecked);
        }}
      >
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
    width: "auto",
    height: 34,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 7,
    paddingBottom: 7,
    marginBottom: 10,
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

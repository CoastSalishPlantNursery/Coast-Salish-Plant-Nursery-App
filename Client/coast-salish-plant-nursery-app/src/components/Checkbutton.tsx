import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";

type CheckButtonProps = {
  title: string;
  inList: boolean;
  checked: (isChecked: boolean) => void;
};

export default function Checkbutton(props: CheckButtonProps) {
  const { title, checked, inList } = props;
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
            isChecked || inList ? styles.greenContainer : styles.blackContainer,
          ]}
        >
          <Text
            style={[isChecked || inList ? styles.greenFont : styles.blackFont]}
          >
            {title}
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
    // backgroundColor: "#2B969D",
    borderColor: "#2B969D",
    //opacity: 0.5,
    borderWidth: 1,
    borderStyle: "solid",
  },
  blackContainer: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
  },

  greenFont: {
    color: "#2B969D",
    fontWeight: "800",
  },
  blackFont: {
    color: "black",
  },
});

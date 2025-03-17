import { useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

type InformationItemProps = {
  heading: string;
  text: string;
};

export default function InformationItem(props: InformationItemProps) {
  const { heading, text } = props;

  return (
    <>
      <View style={[styles.container, styles.flexContainer]}>
        <View
          style={[
            styles.borderRight,
            styles.halfSize,
            styles.eightPercentHeight,
            styles.flexItem,
          ]}
        >
          <Text style={styles.heading}>{heading}</Text>
        </View>
        <View
          style={[styles.halfSize, styles.eightPercentHeight, styles.flexItem]}
        >
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 60,
    maxHeight: 80,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    backgroundColor: "lightgrey",
    marginBottom: 10,
  },

  flexContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },

  flexItem: {
    display: "flex",
    justifyContent: "center",
  },

  borderRight: {
    borderRightWidth: 0.5,
    borderRightColor: "grey",
  },

  text: {
    textAlign: "center",
    paddingLeft: 5,
  },

  heading: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  halfSize: {
    width: "50%",
  },

  eightPercentHeight: {
    height: "80%",
  },
});

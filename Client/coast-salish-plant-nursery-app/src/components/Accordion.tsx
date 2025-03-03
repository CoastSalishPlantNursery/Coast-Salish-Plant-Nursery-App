import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
} from "react-native";
import React, { useState } from "react";
const arrowdown = require("../images/arrow-down.png");
const arrowup = require("../images/arrow-up.png");
type AccordionProps = {
  title: string;
  children: React.JSX.Element;
};

export default function Accordion(props: AccordionProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => setIsCollapsed(!isCollapsed)}>
        <View style={styles.flexContainer}>
          <Text style={styles.text}>{props.title}</Text>
          <Image
            source={!isCollapsed ? arrowup : arrowdown}
            style={styles.image}
          />
        </View>
      </TouchableWithoutFeedback>

      <View>{!isCollapsed && props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    width: "100%",
    height: 50,
    paddingLeft: 19,
    paddingRight: 12,
    borderRadius: 5,
    backgroundColor: "lightgrey",
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  image: {
    width: 29,
    height: 29,
  },

  text: {
    fontSize: 18,
  },
});

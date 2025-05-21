import React from "react";
import { SafeAreaView, StatusBar, Platform, Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export enum TextStyle {
  regular = "regular",
  bold = "bold",
  black = "black",
}

export enum HeadingSize {
  h1 = 48,
  h2 = 36,
  h3 = 24,
}

type HeadingProps = {
  text: string;
  heading: HeadingSize;
  style: TextStyle;
  centered?: boolean;
};

export default function Heading(props: HeadingProps) {
  return (
    <>
      <Text
        style={[
          props.heading == HeadingSize.h1
            ? globalStyles.primaryHeadingColor
            : props.heading == HeadingSize.h2
            ? globalStyles.secondaryHeadingColor
            : { color: "black" },
          props.centered == null
            ? globalStyles.centeredText
            : props.centered
            ? globalStyles.centeredText
            : globalStyles.leftText,
          {
            fontSize: props.heading,
            fontWeight: props.style,
          },
        ]}
      >
        {props.text}
      </Text>
    </>
  );
}

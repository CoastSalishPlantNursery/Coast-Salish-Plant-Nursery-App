import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
};

export default function CustomButton(props: CustomButtonProps) {
  const { title, onPress } = props;
  return (
    <>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.button]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 156,
    height: 48,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#057a51",
  },

  text: {
    color: "#057a51",
    fontSize: 16,
  },
});

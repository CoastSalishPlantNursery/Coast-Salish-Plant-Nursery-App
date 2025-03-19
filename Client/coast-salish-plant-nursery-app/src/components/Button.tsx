import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
};

export default function CustomButton(props: CustomButtonProps) {
  const { title, onPress } = props;
  return (
    <>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.button}>
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
    backgroundColor: "grey",
    width: 156,
    height: 48,
    borderRadius: 5,
  },

  text: {
    color: "white",
  },
});

import { StyleSheet, Button, View } from "react-native";
type CustomButtonProps = {
  title: string;
  onPress: () => void;
};

export default function CustomButton(props: CustomButtonProps) {
  const { title, onPress } = props;
  return (
    <>
      <View style={styles.button}>
        <Button title={title} onPress={onPress} color="white" />
      </View>
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
});

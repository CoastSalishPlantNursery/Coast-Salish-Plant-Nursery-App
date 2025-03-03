import { StyleSheet, View } from "react-native";
import Checkbutton from "./Checkbutton";

type CheckButtonGroupProps = {
  selections: string[];
};

export default function CheckbuttonGroup(props: CheckButtonGroupProps) {
  return (
    <>
      <View style={styles.container}>
        {props.selections.map((item) => (
          <Checkbutton key={item} title={item} checked={() => {}} />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

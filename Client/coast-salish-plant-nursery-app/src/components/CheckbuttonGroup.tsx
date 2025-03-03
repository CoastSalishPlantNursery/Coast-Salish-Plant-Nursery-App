import { StyleSheet, View } from "react-native";
import Checkbutton from "./Checkbutton";

type CheckButtonGroupProps = {
  selections: string[];
  selectedItems: string[];
  addSelectedItem: (selectedItem: string) => void;
  removeSelectedItem: (selectedItem: string) => void;
};

export default function CheckbuttonGroup(props: CheckButtonGroupProps) {
  const { selections, selectedItems, addSelectedItem, removeSelectedItem } =
    props;

  return (
    <>
      <View style={styles.container}>
        {props.selections.map((item) => (
          <Checkbutton
            key={item}
            title={item}
            checked={(isChecked: boolean) => {
              isChecked ? removeSelectedItem(item) : addSelectedItem(item);
            }}
          />
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

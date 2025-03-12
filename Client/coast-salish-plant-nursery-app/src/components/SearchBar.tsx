import { useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import SearchBarDropDownItem from "./SearchBarDropDownItem";
type SearchBarProps = {
  text: string;
  value: string;
  dropDownList: Array<string>;
  onDropDownClick: (item: string) => void;
  onChange: (value: string) => void;
  onClick: () => void;
};

export default function SearchBar(props: SearchBarProps) {
  const { text, value, dropDownList, onDropDownClick, onChange, onClick } =
    props;
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [dropDownItems, setDropDownItems] = useState<string[]>([]);

  useEffect(() => {
    setDropDownItems(
      dropDownList.filter((item) =>
        item == null ? false : item.toLowerCase().includes(value.toLowerCase())
      )
    );
  }, [value]);

  return (
    <View>
      <Text style={styles.heading}>{text}</Text>
      <View style={styles.flexContainer}>
        <TextInput
          value={value}
          onChangeText={(val) => {
            onChange(val);
            val != "" ? setDropdown(true) : setDropdown(false);
          }}
          placeholder="e.g. Salmonberry, Huckelberry"
          style={styles.searchbar}
        />
        <Button title="Search" onPress={onClick} />
      </View>
      {dropdown == true && (
        <ScrollView style={styles.dropdown}>
          {dropDownItems.map((item) => (
            <SearchBarDropDownItem
              key={item}
              item={item}
              onClick={() => onDropDownClick(item)}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },

  searchbar: {
    width: "75%",
    height: 40,
    borderWidth: 0.5,
    borderColor: "lightgrey",
    borderStyle: "solid",
    borderRadius: 5,
  },

  flexContainer: {
    display: "flex",
    flexDirection: "row",
  },
  dropdown: {
    width: "100%",
    minWidth: 50,
    maxHeight: 300,
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 70,
    zIndex: 1,
    backgroundColor: "#ECECEC",
  },

  dropdownItem: {
    width: "100%",
    height: 50,
    paddingLeft: 5,
    display: "flex",
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "lightgrey",
  },
});

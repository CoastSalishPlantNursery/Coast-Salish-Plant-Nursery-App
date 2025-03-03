import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Heading, { HeadingSize, TextStyle } from "../src/components/Heading";
import Accordion from "../src/components/Accordion";
import CheckbuttonGroup from "../src/components/CheckbuttonGroup";
import { PlantType } from "../Enums/Enums";

export default function App() {
  const [plantTypes, setPlantTypes] = useState<string[]>([]);

  function handlePlantTypeSelection(selectedPlant: string) {
    console.log(selectedPlant);
    setPlantTypes([...plantTypes, selectedPlant]);
    console.log(plantTypes);
  }
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Accordion
          title="Plant Form"
          children={
            <CheckbuttonGroup
              selections={Object.values(PlantType)}
              selectedItems={plantTypes}
              addSelectedItem={(selectedPlant: string) => {
                setPlantTypes([...plantTypes, selectedPlant]);
                console.log(plantTypes);
              }}
              removeSelectedItem={(selectedPlant: string) => {
                setPlantTypes(
                  plantTypes.filter((plant) => plant !== selectedPlant)
                );
                console.log(plantTypes);
              }}
            />
          }
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 23,
  },
});

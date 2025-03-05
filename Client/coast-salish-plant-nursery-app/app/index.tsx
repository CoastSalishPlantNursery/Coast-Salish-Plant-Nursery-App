import { useState } from "react";
import { router } from "expo-router";
import { getPlants } from "../services/services";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";
import Heading, { HeadingSize, TextStyle } from "../src/components/Heading";
import Accordion from "../src/components/Accordion";
import CheckbuttonGroup from "../src/components/CheckbuttonGroup";
import CustomButton from "../src/components/Button";
import {
  PlantType,
  Exposure,
  Soil,
  Moisture,
  ContainerTolerance,
  Attracts,
} from "../Enums/Enums";
import { Plant } from "../Types/Plant";

type Props = {};

export default function index({}: Props) {
  const [plantTypes, setPlantTypes] = useState<PlantType[]>([]);
  const [exposures, setExposures] = useState<Exposure[]>([]);
  const [soils, setSoils] = useState<Soil[]>([]);
  const [moistures, setMoistures] = useState<Moisture[]>([]);
  const [containerTolerances, setContainerTolerances] = useState<
    ContainerTolerance[]
  >([]);
  const [attracts, setAttracts] = useState<Attracts[]>([]);
  const [plants, setPlants] = useState<Plant[]>([]);
  function addSelectedItem(selectedItem: string, state: any, setState: any) {
    setState([...state, selectedItem]);
    console.log(state);
  }

  function removeSelectedItem(selectedItem: string, state: any, setState: any) {
    setState(state.filter((item: string) => item !== selectedItem));
    console.log(state);
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Accordion
          title="Plant Type"
          children={
            <CheckbuttonGroup
              selections={Object.values(PlantType)}
              selectedItems={plantTypes}
              addSelectedItem={(item: string) =>
                addSelectedItem(item, plantTypes, setPlantTypes)
              }
              removeSelectedItem={(item: string) =>
                removeSelectedItem(item, plantTypes, setPlantTypes)
              }
            />
          }
        />
        <Accordion
          title="Exposure"
          children={
            <CheckbuttonGroup
              selections={Object.values(Exposure)}
              selectedItems={exposures}
              addSelectedItem={(item: string) =>
                addSelectedItem(item, exposures, setExposures)
              }
              removeSelectedItem={(item: string) =>
                removeSelectedItem(item, exposures, setExposures)
              }
            />
          }
        />
        <Accordion
          title="Soil"
          children={
            <CheckbuttonGroup
              selections={Object.values(Soil)}
              selectedItems={soils}
              addSelectedItem={(item: string) =>
                addSelectedItem(item, soils, setSoils)
              }
              removeSelectedItem={(item: string) =>
                removeSelectedItem(item, soils, setSoils)
              }
            />
          }
        />
        <Accordion
          title="Moisture"
          children={
            <CheckbuttonGroup
              selections={Object.values(Moisture)}
              selectedItems={moistures}
              addSelectedItem={(item: string) =>
                addSelectedItem(item, moistures, setMoistures)
              }
              removeSelectedItem={(item: string) =>
                removeSelectedItem(item, moistures, setMoistures)
              }
            />
          }
        />
        <Accordion
          title="Container Tolerance"
          children={
            <CheckbuttonGroup
              selections={Object.values(ContainerTolerance)}
              selectedItems={containerTolerances}
              addSelectedItem={(item: string) =>
                addSelectedItem(
                  item,
                  containerTolerances,
                  setContainerTolerances
                )
              }
              removeSelectedItem={(item: string) =>
                removeSelectedItem(
                  item,
                  containerTolerances,
                  setContainerTolerances
                )
              }
            />
          }
        />
        <Accordion
          title="Attracts"
          children={
            <CheckbuttonGroup
              selections={Object.values(Attracts)}
              selectedItems={attracts}
              addSelectedItem={(item: string) =>
                addSelectedItem(item, attracts, setAttracts)
              }
              removeSelectedItem={(item: string) =>
                removeSelectedItem(item, attracts, setAttracts)
              }
            />
          }
        />
        <CustomButton
          title="Search"
          onPress={async () => {
            const criteria = {
              PlantType: plantTypes,
              Exposure: exposures,
              Soil: soils,
              Moisture: moistures,
              ContainerTolerance: containerTolerances,
              Attracts: attracts,
            };

            router.push({ pathname: "/tabs/PlantList", params: criteria });
            // const data = await getPlants(criteria);
            // data.map((plant) => console.log(plant.PlantName));
          }}
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

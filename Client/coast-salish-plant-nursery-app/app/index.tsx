import { useEffect, useState } from "react";
import { router } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
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
import SearchBar from "../src/components/SearchBar";
import { getAllPlants } from "../services/services";
import { Criteria } from "../Types/Criteria";

type Props = {};

export default function index(this: any, {}: Props) {
  const [colapsedItem, setColapsedItem] = useState<string>("");
  const [searchBarValue, setSearchBarValue] = useState<string>("");

  const [plantTypes, setPlantTypes] = useState<PlantType[]>([]);
  const [exposures, setExposures] = useState<Exposure[]>([]);
  const [soils, setSoils] = useState<Soil[]>([]);
  const [moistures, setMoistures] = useState<Moisture[]>([]);
  const [containerTolerances, setContainerTolerances] = useState<
    ContainerTolerance[]
  >([]);
  const [attracts, setAttracts] = useState<Attracts[]>([]);

  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function addSelectedItem(selectedItem: string, state: any, setState: any) {
    setState([...state, selectedItem]);
    console.log(state);
  }

  function removeSelectedItem(selectedItem: string, state: any, setState: any) {
    setState(state.filter((item: string) => item !== selectedItem));
    console.log(state);
  }

  useEffect(() => {
    const fetchPlants = async () => {
      setIsLoading(true);
      const { data, error } = await getAllPlants();
      if (error == null) {
        setFilteredPlants(data);
        setIsLoading(false);
      } else {
        Alert.alert(
          "Error Message",
          "An Error occured. Please check your internet connection and try again later.",
          [
            {
              text: "Cancel",
              onPress: () => {
                setIsLoading(false);
              },
            },
            {
              text: "Reload",
              onPress: () => {
                router.push("/");
              },
            },
          ]
        );
      }
    };
    fetchPlants();
  }, []);

  return (
    <>
      {!isLoading ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.heading}>
            <Heading
              heading={HeadingSize.h2}
              style={TextStyle.bold}
              text="Plant Nursery App"
            />
          </View>
          <View style={styles.input}>
            <SearchBar
              text="Search Plant"
              value={searchBarValue}
              dropDownList={[...filteredPlants.map((item) => item.PlantName)]}
              onDropDownClick={(element: string) => {
                const plant =
                  filteredPlants.find((item) => item.PlantName == element) ||
                  {};
                router.push({ pathname: "/tabs/PlantOverview", params: plant });
              }}
              onChange={setSearchBarValue}
              onClick={() =>
                router.push({
                  pathname: "/tabs/PlantList",
                  params: { searchBarValue: searchBarValue },
                })
              }
            />
          </View>
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
            isItemCollapsed={colapsedItem == "Plant Type" ? false : true}
            onPress={() =>
              colapsedItem == "Plant Type"
                ? setColapsedItem("")
                : setColapsedItem("Plant Type")
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
            isItemCollapsed={colapsedItem == "Exposure" ? false : true}
            onPress={() =>
              colapsedItem == "Exposure"
                ? setColapsedItem("")
                : setColapsedItem("Exposure")
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
            isItemCollapsed={colapsedItem == "Soil" ? false : true}
            onPress={() =>
              colapsedItem == "Soil"
                ? setColapsedItem("")
                : setColapsedItem("Soil")
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
            isItemCollapsed={colapsedItem == "Moisture" ? false : true}
            onPress={() =>
              colapsedItem == "Moisture"
                ? setColapsedItem("")
                : setColapsedItem("Moisture")
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
            isItemCollapsed={
              colapsedItem == "Container Tolerance" ? false : true
            }
            onPress={() =>
              colapsedItem == "Container Tolerance"
                ? setColapsedItem("")
                : setColapsedItem("Container Tolerance")
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
            isItemCollapsed={colapsedItem == "Attracts" ? false : true}
            onPress={() =>
              colapsedItem == "Attracts"
                ? setColapsedItem("")
                : setColapsedItem("Attracts")
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
              router.push({
                pathname: "/tabs/PlantList",
                params: { criteria: JSON.stringify(criteria) },
              });
            }}
          />
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.containerIsLoading}>
          <ActivityIndicator size={"large"} color={"#52B788"} />
        </SafeAreaView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 23,
    marginRight: 23,
    marginTop: 10,
  },

  containerIsLoading: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },

  heading: {
    marginBottom: 30,
  },
  input: {
    marginBottom: 20,
  },
});

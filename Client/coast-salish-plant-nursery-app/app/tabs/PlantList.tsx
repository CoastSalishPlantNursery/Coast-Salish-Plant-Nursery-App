import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { globalStyles } from "../../src/styles/globalStyles";
import { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { getAllPlants, getPlantsByCriteria } from "../../services/services";
import { Plant } from "../../Types/Plant";
import ListItem from "../../src/components/ListItem";
import Heading, { HeadingSize, TextStyle } from "../../src/components/Heading";
import { Criteria } from "../../Types/Criteria";
import BackButton from "../../src/components/BackButton";
import MessageCard from "../../src/components/MessageCard";

type Props = {};

export default function PlantList({}: Props) {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const { searchBarValue, criteria } = useLocalSearchParams();

  useEffect(() => {
    const fetchPlants = async () => {
      const criteriaToObject =
        criteria !== undefined
          ? (JSON.parse(criteria.toString()) as Criteria)
          : undefined;

      setIsLoading(true);

      const { data, error } = await (criteriaToObject !== undefined
        ? getPlantsByCriteria(criteriaToObject)
        : getAllPlants());

      if (error == null) {
        setPlants(
          searchBarValue === undefined
            ? data
            : data.filter((item) =>
                item.PlantName.toLowerCase().includes(
                  searchBarValue.toString().toLowerCase()
                )
              )
        );
        console.log("Pflanzen Länge " + plants.length);
      } else {
        setFetchError(error);
        Alert.alert(
          "Error Message",
          "Failed to load Plants. Please check your internet connection and try again later.",
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
      setIsLoading(false);
    };

    fetchPlants();
  }, []);

  return (
    <>
      {isLoading ? (
        <View style={styles.fullWidthContainer}>
          <ActivityIndicator size={"large"} color={"#52B788"} />
        </View>
      ) : fetchError != null ? (
        <MessageCard message="An Error occured. Please restart the App and try again" />
      ) : (
        <View style={globalStyles.margin}>
          <View style={styles.backButton}>
            <BackButton onClick={() => router.back()} />
          </View>
          <View style={styles.heading}>
            <Heading
              text="Matching Plants"
              heading={HeadingSize.h2}
              style={TextStyle.regular}
            />
          </View>
          {plants.length == 0 || plants.length === undefined ? (
            <MessageCard message="No Plants matching with the Criteria provided." />
          ) : (
            <FlatList
              style={styles.list}
              data={plants}
              renderItem={(element) => {
                return (
                  <ListItem
                    PlantName={element.item.PlantName}
                    onClick={() => {
                      console.log("Clicked");
                      router.push({
                        pathname: "/tabs/PlantOverview",
                        params: {
                          PlantName: element.item.PlantName,
                          LatinName: element.item.LatinName,
                          PlantType: element.item.PlantType,
                          Exposure: element.item.Exposure,
                          Soil: element.item.Soil,
                          Moisture: element.item.Moisture,
                          ContainerTolerance: element.item.ContainerTolerance,
                          Attracts: element.item.Attracts,
                          Summary: element.item.Summary,
                          Tags: element.item.Tags,
                        },
                      });
                    }}
                  />
                );
              }}
            />
          )}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  backButton: {
    marginBottom: 19,
  },

  heading: {
    marginBottom: 25,
  },

  fullWidthContainer: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },

  list: {
    height: "85%",
  },
});

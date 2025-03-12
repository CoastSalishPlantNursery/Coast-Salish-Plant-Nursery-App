import { StyleSheet, View, Text, FlatList, Alert } from "react-native";
import { globalStyles } from "../../src/styles/globalStyles";
import { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { getAllPlants, getPlantsByCriteria } from "../../services/services";
import { Plant } from "../../Types/Plant";
import ListItem from "../../src/components/ListItem";
import Heading, { HeadingSize, TextStyle } from "../../src/components/Heading";
import { Criteria } from "../../Types/Criteria";
import BackButton from "../../src/components/BackButton";

type Props = {};

export default function PlantList({}: Props) {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { searchBarValue, criteria } = useLocalSearchParams();

  useEffect(() => {
    const fetchPlants = async () => {
      const criteriaToObject = JSON.parse(criteria.toString()) as Criteria;
      console.log(criteriaToObject.PlantType);
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
        setIsLoading(false);
      } else {
        console.log(error.toString());
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
    };
    fetchPlants();
  }, []);
  return (
    <>
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

        <FlatList
          data={plants}
          renderItem={(element) => {
            return (
              <ListItem
                PlantName={element.item.PlantName}
                onClick={() =>
                  router.push({
                    pathname: "/tabs/PlantOverview",
                    params: {
                      PlantName: element.item.PlantName,
                      LatinName: element.item.LatinName,
                      Summary: element.item.Summary,
                    },
                  })
                }
              />
            );
          }}
        />
      </View>
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
});

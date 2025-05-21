import React, { useEffect, useState } from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../src/styles/globalStyles";
import BackButton from "../../src/components/BackButton";
import { Plant } from "../../Types/Plant";
import { router, useLocalSearchParams } from "expo-router";
import Heading, { HeadingSize, TextStyle } from "../../src/components/Heading";
import RoundedButton from "../../src/components/RoundedButton";
import InformationSlider from "../../src/components/InformationSlider";

type Props = {};

export default function PlantOverview({}: Props) {
  const plant = useLocalSearchParams() as unknown as Plant;
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <View style={globalStyles.margin}>
        <View style={styles.backbutton}>
          <BackButton onClick={() => router.back()} />
        </View>
        <View style={styles.sectionmargin}>
          <Heading
            text={plant.PlantName}
            heading={HeadingSize.h1}
            style={TextStyle.bold}
            centered={false}
          />
          <Heading
            text={plant.LatinName}
            heading={HeadingSize.h2}
            style={TextStyle.regular}
            centered={false}
          />
        </View>
        <View style={styles.sectionmargin}>
          <View style={styles.h3}>
            <Heading
              text={"About the Plant"}
              heading={HeadingSize.h3}
              style={TextStyle.bold}
              centered={false}
            />
          </View>
          <Text>{plant.Summary}</Text>
        </View>
        <View style={styles.searchButton}>
          <RoundedButton
            text={"More Information about the Plant"}
            button={"primary"}
            onClick={async () => {
              setModalOpen(true);
            }}
          />
        </View>
        <View>
          <RoundedButton
            text={"Search Images on Google"}
            button={"secondary"}
            onClick={async () => {
              await Linking.openURL(
                `https://www.google.com/search?udm=2&q=${plant.PlantName}`
              );
            }}
          />
        </View>
        <InformationSlider
          isOpen={modalOpen}
          plant={plant}
          onChange={() => setModalOpen(!modalOpen)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  backbutton: {
    marginBottom: 19,
  },

  sectionmargin: {
    marginBottom: 35,
  },

  h3: {
    marginBottom: 14,
  },

  searchButton: {
    marginBottom: 10,
  },
});

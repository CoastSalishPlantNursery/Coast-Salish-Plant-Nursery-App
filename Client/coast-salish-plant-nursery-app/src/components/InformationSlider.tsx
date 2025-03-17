import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Modal,
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import BackButton from "./BackButton";
import Heading, { HeadingSize, TextStyle } from "./Heading";
import InformationItem from "./InformationItem";
import { Plant } from "../../Types/Plant";
const PlantName = require("../images/PlantName.png");

type InformationSilderProps = {
  isOpen: boolean;
  plant: Plant;
  onChange: () => void;
};

export default function InformationSlider(props: InformationSilderProps) {
  const { isOpen, plant, onChange } = props;
  useEffect(() => {
    console.log(plant.Tags);
  }, []);

  return (
    <>
      <Modal animationType="slide" visible={isOpen} onRequestClose={onChange}>
        <SafeAreaView style={globalStyles.margin}>
          <View style={styles.backbutton}>
            <BackButton onClick={onChange} />
          </View>
          <View style={styles.heading}>
            <Heading
              text="Plant Details"
              heading={HeadingSize.h2}
              style={TextStyle.bold}
            />
          </View>
          <View>
            <ScrollView>
              {Object.entries(plant)
                .filter((item) => item[0] != "Summary")
                .map((item) => (
                  <InformationItem
                    key={item[0]}
                    heading={item[0]}
                    text={item[1].toString()}
                  />
                ))}
            </ScrollView>
            {/* <FlatList
            style={styles.scrollView}
            data={Object.entries(plant).filter((item) => item[0] != "Summary")}
            renderItem={(element) => (
              <InformationItem
                key={element.item[0]}
                heading={element.item[0]}
                text={element.item[1].toString()}
              />
            )}
          /> */}
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  backbutton: {
    marginBottom: 19,
  },

  heading: {
    marginBottom: 25,
  },
});

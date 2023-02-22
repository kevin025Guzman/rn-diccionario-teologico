import {
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
 
} from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";
import { useFonts } from 'expo-font';

const Description = ({ route, navigation }) => {
  const image = require("../../assets/background1.jpg");

  const { descript, name } = route.params;

  const [fontsLoaded] = useFonts({
    'Monserrat-Medium': require("../../assets/font/Montserrat-Medium.ttf"),
  });

  navigation.setOptions({
    title: name,
    headerRight: () => (
    
        <IconButton
          icon="home"
          iconColor={"#fff"}
          size={23}
          onPress={() => navigation.navigate("HomePage")}
        />
     
    ),
  });

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Text style={styles.text}>{descript}</Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default Description;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    color: "#000",
  },
  text: {
    fontSize: 19,
    padding:  5,
    lineHeight: 30,
    fontFamily: "Monserrat-Medium",
    color: "#000",
  },
});

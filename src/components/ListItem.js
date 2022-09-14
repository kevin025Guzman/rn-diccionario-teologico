import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ListItem = ({ item, navigation }) => {
  const { char } = item;

  const goWords = () => navigation.navigate("Words");
  

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={goWords}
      >
        <Text>{char}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#efefef",
    padding: 30,
  },
});

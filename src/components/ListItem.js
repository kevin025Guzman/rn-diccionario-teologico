import { StyleSheet, Text, View, TouchableOpacity ,FlatList} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import React from "react";

const ListItem = ({ item, navigation }) => {
  const { char, words} = item;

  const goWords = () => navigation.navigate("Words", {
    wordArray: words,
    char: char
  });

  return (
    <SafeAreaView style={styles.container}>
   
            <TouchableOpacity style={styles.button} onPress={goWords}>
              <Text style={styles.text}>{char}</Text>
            </TouchableOpacity>
    
    </SafeAreaView>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#101010",
    padding: 60,
    marginVertical: 5,
    borderRadius: 10
  },
  text:{
    color:"#fff",
    textAlign: "center",
    fontSize: 55,
    fontWeight: "bold"
  }
});

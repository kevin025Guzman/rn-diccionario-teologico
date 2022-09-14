import { StyleSheet, Text, View, TouchableOpacity ,FlatList} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import React from "react";

const ListItem = ({ item, navigation }) => {
  const { char, words } = item;

  const goWords = () => navigation.navigate("Words");

  return (
    <SafeAreaView style={styles.container}>
   
            <TouchableOpacity style={styles.button} onPress={goWords}>
              <Text>{words[0].name}</Text>
            </TouchableOpacity>
    
    </SafeAreaView>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#efefef",
    padding: 30,
  },
});

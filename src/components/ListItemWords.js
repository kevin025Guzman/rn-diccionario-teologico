import { StyleSheet, Text, View, TouchableOpacity ,FlatList} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import React from "react";

const ListItemWords = ({ item, navigation }) => {
  
  const {name, description} = item

  const goDescription = () => navigation.navigate("Description", {
    descript: description,
    name: name
  });

  return (
    <SafeAreaView style={styles.container}>
      
          <View >
            <TouchableOpacity style={styles.button} onPress={goDescription}>
              <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
          </View>
      
    
    </SafeAreaView>
  );
};

export default ListItemWords;

const styles = StyleSheet.create({

  button: {
    backgroundColor: "#101010",
    padding: 30,
    marginBottom: 5,
    borderRadius: 10
  },
  text:{
    color:"#fff",
    textAlign: "center"
  }
});
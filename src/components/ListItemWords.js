import { StyleSheet, Text, View, TouchableOpacity ,FlatList} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import React from "react";

const ListItem = ({ item, navigation }) => {
  const { words } = item;

  const goDescription = () => navigation.navigate("Description");

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={words}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity style={styles.button} onPress={goDescription}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      ></FlatList>
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
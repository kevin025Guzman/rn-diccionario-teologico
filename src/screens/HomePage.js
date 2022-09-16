import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { data } from "../data/data";
import ListItem from "../components/ListItem";

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList style={styles.flatlist}
        data={data}
        numColumns={2}
        columnWrapperStyle={styles.row} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem item={item} navigation={navigation} />
        )}
      ></FlatList>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    paddingTop: 5,
    paddingHorizontal: 10
  },
  flatlist:{
    width:"100%"
  },
  row: {
    flex: 1,
    justifyContent: "space-around"
}
});

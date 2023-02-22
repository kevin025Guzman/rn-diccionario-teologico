import { StyleSheet, FlatList,ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import ListItemWords from "../components/ListItemWords";
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";

const Words = ({ route, navigation }) => {
  const { wordArray, char } = route.params;
  const [searchQuery, setSearchQuery] = useState("");
  const [wordsFiltered, setWorldsFiltered] = useState([]);

  

  useEffect(() => {
    setWorldsFiltered(wordArray);
  }, [wordArray]);

  const onChangeSearch = (query) => {
    setSearchQuery(query);

    if (query) {
      const newData = wordArray.filter((item) => {
        const itemName = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const queryData = query.toUpperCase();
        return itemName.indexOf(queryData) > -1;
      });

      setWorldsFiltered(newData);
    } else {
      setWorldsFiltered(wordArray);
    }
  };

  navigation.setOptions({
    title: "Letra " + char,
    headerTitle: () => (
      <Searchbar
        placeholder="Search"
        placeholderTextColor="#fff"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.Searchbar}
        iconColor="#fff"
        inputStyle={{ color: "#fff" }}
      />
    ),
  });

  const image =require("../../assets/background1.jpg");

  return (
    <ImageBackground source={ image } resizeMode="cover"  style={{width: '100%', height: '100%'}}>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={wordsFiltered}
        keyExtractor={(item) => item.name}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ListItemWords item={item} navigation={navigation} />
        )}
      ></FlatList>
    </SafeAreaView>
    </ImageBackground>
  );
};

export default Words;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  Searchbar: {
    backgroundColor: "#101010",
    borderBottomColor: "#aaa",
    borderBottomWidth: 1,
    color: "#fff",
    width: 280,
  },
});

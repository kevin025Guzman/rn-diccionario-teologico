import { FlatList, StyleSheet,ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { data } from "../data/data";
import ListItem from "../components/ListItem";


const HomePage = ({ navigation }) => {

  const image = { uri: "https://i.pinimg.com/originals/85/f8/c4/85f8c4241e502636dd2bcf0f3c6e886e.jpg"};

  return (
    <ImageBackground source={image} resizeMode="cover"  style={{width: '100%', height: '100%'}}>
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
    </ImageBackground>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    paddingTop: 5,
    paddingHorizontal: 10
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  flatlist:{
    width:"100%"
  },
  row: {
    flex: 1,
    justifyContent: "space-around"
}
});

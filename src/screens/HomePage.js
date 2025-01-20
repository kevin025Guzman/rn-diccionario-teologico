import { FlatList, StyleSheet,ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { data } from "../data/data";
import ListItem from "../components/ListItem";
import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads";

const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-1076481382150127/9979824616';

const HomePage = ({ navigation }) => {

  const image =require("../../assets/background1.jpg");



  return (
    <ImageBackground source={image} resizeMode="cover"  style={{width: '100%', height: '100%'}}>
    <SafeAreaView style={styles.container}>
     
      <FlatList style={styles.flatlist}
        data={data}
        numColumns={2}
        columnWrapperStyle={styles.row} 
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ListItem item={item} navigation={navigation} />
        )}
        
      ></FlatList>
      <View >
       
        <BannerAd
          unitId={TestIds.BANNER}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
            networkExtras: {
              collapsible: "bottom"
            }
          }}
        />
      </View>
     
    </SafeAreaView>
    </ImageBackground>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  bottomBanner: {
    position: "absolute",
    bottom: 0
  },
  container: {
    flex: 1,
   
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

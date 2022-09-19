import { StyleSheet, Text, ScrollView, ImageBackground } from 'react-native'
import React from 'react'

const Description = ( {route, navigation}) => {

  const image =require("../../assets/background.jpg");

  const {descript, name} = route.params

  navigation.setOptions({ title: name })
  
  return (
    <ImageBackground source={ image } resizeMode="cover"  style={{width: '100%', height: '100%'}}>
    <ScrollView style={styles.container}>
   
      <Text style={styles.text}>{descript}</Text>
    </ScrollView>
    </ImageBackground>
  )
}

export default Description

const styles = StyleSheet.create({
  container: {
    flex:1,
    
    paddingHorizontal: 15,
    paddingVertical: 15

  },
  text:{
    color:"#202020",
    fontSize: 19,
    padding:10,
    lineHeight: 30,
  }
})


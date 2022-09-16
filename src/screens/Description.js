import { StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'

const Description = ( {route, navigation}) => {

  const {descript, name} = route.params

  navigation.setOptions({ title: name })
  
  return (
    <ScrollView style={styles.container}>
   
      <Text style={styles.text}>{descript}</Text>
    </ScrollView>
  )
}

export default Description

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#202020",
    paddingHorizontal: 15,
    paddingVertical: 15

  },
  text:{
    color:"#fff",
    fontSize: 18
  }
})

